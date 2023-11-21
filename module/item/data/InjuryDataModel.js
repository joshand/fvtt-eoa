/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import BaseItemDataModel from './BaseItemDataModel';

export default abstract class InjuryDataModel extends BaseItemDataModel {
	/**
	 * Severity level of the injury, which aligns with Difficulty levels to heal it.
	 */
	abstract severity: '-' | 'easy' | 'average' | 'hard' | 'daunting';

	static override defineSchema() {
		const fields = foundry.data.fields;

		return {
			...super.defineSchema(),
			severity: new fields.StringField({
				initial: 'average',
				choices: ['-', 'easy', 'average', 'hard', 'daunting'],
			}),
		};
	}
}
