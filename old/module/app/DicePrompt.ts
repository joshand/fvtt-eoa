/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameActor from '../actor/GameActor';
import SkillDataModel from '../item/data/SkillDataModel';
import GameItem from '../item/GameItem';
import { ContextBase } from '../vue/SheetContext';
import VueDicePrompt from '../vue/apps/DicePrompt.vue';
import WeaponDataModel from '../item/data/WeaponDataModel';
import VueSheet from '../vue/VueSheet';
import { Characteristic } from '../data/Characteristics';

export enum RollType {
	Skill,
	Attack,
	Initiative,
}

export interface DicePromptContext extends ContextBase {
	actor: GameActor;
	skills: GameItem<SkillDataModel>[];
	startingDifficulty: number;
	startingSkillId: string;
	app: DicePrompt;
	rollType: RollType;
	rollUnskilled?: Characteristic;
	rollData: any;
}

export type AttackRollData = {
	weapon: GameItem<WeaponDataModel>;
};

export type InitiativeRollData = {
	resolvePromise: (roll: { roll: Roll; skillName: string }) => void;
	rejectPromise: () => void;
};

type DicePromptOptions = {
	rollType?: RollType;
	rollUnskilled?: Characteristic;
	startingDifficulty?: number;
	rollData?: { [key: string]: any };
};

/**
 * Dice pool prompt.
 */
export default class DicePrompt extends VueSheet(Application) {
	override get vueComponent() {
		return VueDicePrompt;
	}

	static override get defaultOptions() {
		return {
			...super.defaultOptions,
			classes: ['app-dice-prompt'],
			width: 500,
		};
	}

	static async promptForRoll(actor: GameActor, skillId: string, options: DicePromptOptions = {}) {
		const app = new DicePrompt(actor, skillId, options);
		await app.render(true);
	}

	static async promptForInitiative(actor: GameActor, skillId: string, options: DicePromptOptions = {}) {
		return new Promise<{ roll: Roll; skillName: string }>((resolve, reject) => {
			const app = new DicePrompt(actor, skillId, {
				...options,
				rollType: RollType.Initiative,
				rollData: { resolvePromise: resolve, rejectPromise: reject },
			});

			app.render(true);
		});
	}

	actor: GameActor;
	skillId: string;
	startingDifficulty: number;
	rollType: RollType;
	rollUnskilled?: Characteristic;
	rollData?: { [key: string]: any };

	get actorSkills(): GameItem<SkillDataModel>[] {
		return <GameItem<SkillDataModel>[]>this.actor.items.filter((i) => i.type === 'skill');
	}

	constructor(actor: GameActor, skillId: string, { rollType, startingDifficulty, rollUnskilled, rollData }: DicePromptOptions = {}) {
		super();

		this.actor = actor;
		this.skillId = skillId;
		this.startingDifficulty = startingDifficulty ?? 2;
		this.rollType = rollType ?? RollType.Skill;
		this.rollUnskilled = rollUnskilled;
		this.rollData = rollData;
	}

	override async close(options: {} = {}) {
		if (this.rollType === RollType.Initiative) {
			(this.rollData as InitiativeRollData).rejectPromise();
		}

		await super.close(options);
	}

	override async getVueContext(): Promise<DicePromptContext> {
		return {
			actor: this.actor,
			skills: this.actorSkills,
			startingDifficulty: this.startingDifficulty,
			startingSkillId: this.skillId,
			app: this,
			rollType: this.rollType,
			rollUnskilled: this.rollUnskilled,
			rollData: this.rollData,
		};
	}
}
