/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import BaseItemDataModel from './BaseItemDataModel';

interface AbilityActivation {
	type: 'passive' | 'active';
	detail: string;
}

export default abstract class TalentDataModel extends BaseItemDataModel {
	abstract tier: number;
	abstract activation: AbilityActivation;
	abstract ranked: 'yes' | 'no';
	abstract rank: number;

	/**
	 * Tier increases with further rank purchases, plateauing at tier 5.
	 */
	get effectiveTier() {
		return Math.min(5, this.tier + this.rank - 1);
	}

	/**
	 * Get the effective tier of the next tier.
	 */
	get effectiveNextTier() {
		return Math.min(5, this.tier + this.rank);
	}

	/**
	 * How much XP it costs to advance this talent to the next rank.
	 */
	get advanceCost() {
		return Math.min(5, this.tier + this.rank) * 5;
	}

	static override defineSchema() {
		const fields = foundry.data.fields;

		return {
			...super.defineSchema(),
			tier: new fields.NumberField({ integer: true, initial: 1 }),
			activation: new fields.SchemaField({
				type: new fields.StringField({
					initial: 'passive',
					choices: ['active', 'passive'],
				}),
				detail: new fields.StringField(),
			}),
			ranked: new fields.StringField({
				initial: 'no',
				choices: ['yes', 'no'],
			}),
			rank: new fields.NumberField({ integer: true, initial: 1 }),
		};
	}
}
