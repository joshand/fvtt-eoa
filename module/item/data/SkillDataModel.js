/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import BaseItemDataModel from './BaseItemDataModel';
import { Characteristic } from '../../data/Characteristics';

export default abstract class SkillDataModel extends BaseItemDataModel {
	/**
	 * Characteristic tied to the skill.
	 */
	abstract characteristic: Characteristic;

	/**
	 * Skill category
	 */
	abstract category: 'general' | 'magic' | 'combat' | 'social' | 'knowledge';

	/**
	 * Whether the skill can be used for initiative.
	 */
	abstract initiative: boolean;

	/**
	 * (Owned Only) Whether the skill is a career skill for the character.
	 */
	abstract career: boolean;

	/**
	 * (Owned Only) Number of Ranks the player has taken in the skill.
	 */
	abstract rank: number;

	static override defineSchema() {
		const fields = foundry.data.fields;

		return {
			...super.defineSchema(),
			characteristic: new fields.StringField({
				initial: Characteristic.Brawn,
				choices: ['brawn', 'agility', 'intellect', 'cunning', 'willpower', 'presence'],
			}),
			category: new fields.StringField({
				initial: 'general',
				choices: ['general', 'magic', 'combat', 'social', 'knowledge'],
			}),
			initiative: new fields.BooleanField({ initial: false }),
			career: new fields.BooleanField({ initial: false }),
			rank: new fields.NumberField({ integer: true, initial: 0 }),
		};
	}
}
