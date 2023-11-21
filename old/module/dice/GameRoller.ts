/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameActor from '../actor/GameActor';
import DefaultDie from './types/DefaultDie';
import { Characteristic } from '../data/Characteristics';
import GameItem from '../item/GameItem';
import WeaponDataModel from '../item/data/WeaponDataModel';
import { NAMESPACE as SETTINGS_NAMESPACE } from '../settings';
import { KEY_SHOW_DAMAGE_ON_FAILURE } from '../settings/campaign';

export type GameRollResults = {
	/**
	 * Total number of successes that were rolled, including the one added by Triumphs. Always >= 0.
	 */
	totalSuccess: number;

	/**
	 * Total number of failures that were rolled, including the one added by Despairs. Always >= 0.
	 */
	totalFailures: number;

	/**
	 * Total number of advantages that were rolled. Always >= 0.
	 */
	totalAdvantage: number;

	/**
	 * Total number of threats that were rolled. Always >= 0.
	 */
	totalThreat: number;

	/**
	 * Total number of triumphs that were rolled. Always >= 0.
	 */
	totalTriumph: number;

	/**
	 * Total number of despairs that were rolled. Always >= 0.
	 */
	totalDespair: number;

	/**
	 * Number of successes left over in the roll after cancelling out with failures. May be negative if there were more failures.
	 */
	netSuccess: number;

	/**
	 * Number of failures left over in the roll after cancelling out with successes. May be negative if there were more successes.
	 */
	netFailure: number;

	/**
	 * Number of advantages left over in the roll after cancelling out with threats. May be negative if there were more threats.
	 */
	netAdvantage: number;

	/**
	 * Number of threats left over in the roll after cancelling out with advantages. May be negative if there were more advantages.
	 */
	netThreat: number;

	/**
	 * A map of die type to all the result faces from the roll.
	 */
	faces: Record<string, string[]>;

	/**
	 * Extra symbols added to the roll.
	 */
	extraSymbols: Record<string, number>;
};

export default class GameRoller {
	static async skillRoll({ actor, characteristic, skillId, formula, symbols }: { actor?: GameActor; characteristic?: Characteristic; skillId: string; formula: string; symbols: Record<string, number> }) {
		const roll = new Roll(formula, { symbols });
		await roll.evaluate({ async: true });
		const results = this.parseRollResults(roll);

		let description: string | undefined = undefined;

		if (skillId === '-') {
			if (characteristic) {
				description = game.i18n.format('EoA.Rolls.Description.Characteristic', {
					characteristic: game.i18n.localize(`EoA.Characteristics.${characteristic.capitalize()}`),
				});
			}
		} else if (actor) {
			if (characteristic) {
				description = game.i18n.format('EoA.Rolls.Description.Skill', {
					skill: actor.items.get(skillId)?.name ?? 'UNKNOWN',
					characteristic: game.i18n.localize(`EoA.CharacteristicAbbr.${characteristic.capitalize()}`),
				});
			} else {
				description = game.i18n.format('EoA.Rolls.Description.SkillWithoutCharacteristic', {
					skill: actor.items.get(skillId)?.name ?? 'UNKNOWN',
				});
			}
		}

		const rollData = {
			description: description,
			results,
		};
		const html = await renderTemplate('systems/eoa/templates/chat/rolls/skill.hbs', rollData);

		const chatData = {
			user: game.user.id,
			speaker: { actor: actor?.id },
			rollMode: game.settings.get('core', 'rollMode'),
			content: html,
			type: CONST.CHAT_MESSAGE_TYPES.ROLL,
			roll,
		};
		await ChatMessage.create(chatData);
	}

	static async attackRoll({
		actor,
		characteristic,
		skillId,
		formula,
		symbols,
		weapon,
	}: {
		actor?: GameActor;
		characteristic?: Characteristic;
		skillId: string;
		formula: string;
		symbols: Record<string, number>;
		weapon: GameItem<WeaponDataModel>;
	}) {
		const roll = new Roll(formula, { symbols });
		await roll.evaluate({ async: true });
		const results = this.parseRollResults(roll);

		let description: string | undefined = undefined;

		let totalDamage = weapon.systemData.baseDamage;
		let damageFormula = weapon.systemData.baseDamage.toString();

		if (actor && weapon.systemData.damageCharacteristic !== '-') {
			totalDamage += (actor.system as any).characteristics[weapon.systemData.damageCharacteristic] as number;
			damageFormula = game.i18n.localize(`EoA.CharacteristicAbbr.${weapon.systemData.damageCharacteristic.capitalize()}`) + ` + ${damageFormula}`;
		}

		if (results.netSuccess > 0) {
			totalDamage += results.netSuccess;
		}

		if (skillId === '-') {
			if (characteristic) {
				description = game.i18n.format('EoA.Rolls.Description.AttackCharacteristic', {
					name: weapon.name,
					characteristic: game.i18n.localize(`EoA.Characteristics.${characteristic.capitalize()}`),
				});
			}
		} else if (actor) {
			if (characteristic) {
				description = game.i18n.format('EoA.Rolls.Description.AttackSkill', {
					name: weapon.name,
					skill: actor.items.get(skillId)?.name ?? 'UNKNOWN',
					characteristic: game.i18n.localize(`EoA.CharacteristicAbbr.${characteristic.capitalize()}`),
				});
			} else {
				description = game.i18n.format('EoA.Rolls.Description.AttackSkillWithoutCharacteristic', {
					name: weapon.name,
					skill: actor.items.get(skillId)?.name ?? 'UNKNOWN',
				});
			}
		}

		const attackQualities = weapon.systemData.qualities;
		await Promise.all(
			attackQualities.map(async (quality) => {
				quality.description = await TextEditor.enrichHTML(quality.description, { async: true });
			}),
		);

		const rollData = {
			description: description,
			results,
			totalDamage,
			damageFormula,
			critical: weapon.systemData.critical,
			// tbh I can't be assed to implement another Handlebars helper for array length so let's just do undefined. <.<
			qualities: weapon.systemData.qualities.length === 0 ? undefined : attackQualities,
			showDamageOnFailure: game.settings.get(SETTINGS_NAMESPACE, KEY_SHOW_DAMAGE_ON_FAILURE) as boolean,
		};
		const html = await renderTemplate('systems/eoa/templates/chat/rolls/attack.hbs', rollData);

		const chatData = {
			user: game.user.id,
			speaker: { actor: actor?.id },
			rollMode: game.settings.get('core', 'rollMode'),
			content: html,
			type: CONST.CHAT_MESSAGE_TYPES.ROLL,
			roll,
		};
		await ChatMessage.create(chatData);
	}

	static parseRollResults(roll: Roll): GameRollResults {
		const faces = roll.dice.reduce((faces: Record<string, string[]>, die) => {
			const genDie = <DefaultDie>die;
			if (faces[genDie.denomination] === undefined) {
				faces[genDie.denomination] = die.results.map((r) => genDie.getResultLabel(r));
			} else {
				faces[genDie.denomination].concat(die.results.map((r) => genDie.getResultLabel(r)));
			}

			return faces;
		}, {});

		// Get symbols from the dice results.
		const results = Object.values(faces)
			.flatMap((v) => v)
			.flatMap((v) => v.split(''))
			.filter((v) => v !== ' ')
			.reduce(
				(results: Record<string, number>, result) => {
					results[result] += 1;

					return results;
				},
				{
					a: 0,
					s: 0,
					t: 0,
					h: 0,
					f: 0,
					d: 0,
				},
			);

		// Add extra symbols specified by the roll.
		const extraSymbols = <Record<string, number>>roll.data.symbols;
		if (extraSymbols) {
			for (const symbol of ['a', 's', 't', 'h', 'f', 'd']) {
				results[symbol] += extraSymbols[symbol] ?? 0;
			}
		}

		// Threat & Triumph add successes & failures.
		results['s'] += results['t'];
		results['f'] += results['d'];

		return {
			totalSuccess: results['s'],
			totalFailures: results['f'],
			totalAdvantage: results['a'],
			totalThreat: results['h'],
			totalTriumph: results['t'],
			totalDespair: results['d'],

			netSuccess: results['s'] - results['f'],
			netFailure: results['f'] - results['s'],
			netAdvantage: results['a'] - results['h'],
			netThreat: results['h'] - results['a'],

			faces,
			extraSymbols,
		};
	}
}
