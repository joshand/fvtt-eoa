/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameItem from '../GameItem';
import BaseItemDataModel from './BaseItemDataModel';
import SkillDataModel from './SkillDataModel';

export default abstract class CareerDataModel extends BaseItemDataModel {
	/**
	 * Career skills offered by the Career.
	 */
	abstract careerSkills: GameItem<SkillDataModel>[];

	/**
	 * (Owned Only) The list of skills the player selected as their Career Skills to take ranks in.
	 */
	abstract selectedSkillIDs: string[];

	static override defineSchema() {
		const fields = foundry.data.fields;

		return {
			...super.defineSchema(),
			careerSkills: new fields.ArrayField(new fields.ObjectField()),
			selectedSkillIDs: new fields.ArrayField(new fields.StringField()),
		};
	}
}
