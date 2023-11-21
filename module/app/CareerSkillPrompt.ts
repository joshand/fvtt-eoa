/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameItem from '../item/GameItem';
import SkillDataModel from '../item/data/SkillDataModel';
import VueCareerSkillPrompt from '../vue/apps/CareerSkillPrompt.vue';
import { ContextBase } from '../vue/SheetContext';
import VueSheet from '../vue/VueSheet';

export interface CareerSkillPromptContext extends ContextBase {
	skills: GameItem<SkillDataModel>[];
	resolvePromise: (skillIDs: string[]) => void;
}

export default class CareerSkillPrompt extends VueSheet(Application) {
	override get vueComponent() {
		return VueCareerSkillPrompt;
	}

	static override get defaultOptions() {
		return {
			...super.defaultOptions,
			classes: ['app-career-skill-prompt'],
			width: 400,
		};
	}

	static async promptForSkills(skills: GameItem<SkillDataModel>[]): Promise<string[]> {
		const sheet = new CareerSkillPrompt(skills);
		await sheet.render(true);

		return new Promise((resolve) => {
			sheet.#resolvePromise = resolve;
		});
	}

	#resolvePromise?: (value: string[]) => void;
	readonly #skills: GameItem<SkillDataModel>[];

	constructor(skills: GameItem<SkillDataModel>[]) {
		super();

		this.#skills = skills;
	}

	override async getVueContext(): Promise<CareerSkillPromptContext> {
		return {
			resolvePromise: async (skillIDs) => {
				this.#resolvePromise?.(skillIDs);
				this.#resolvePromise = undefined;

				await this.close();
			},
			skills: this.#skills,
		};
	}

	override async close(options = {}) {
		this.#resolvePromise?.([]);
		await super.close(options);
	}
}
