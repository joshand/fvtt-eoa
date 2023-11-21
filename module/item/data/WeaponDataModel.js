/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import { Characteristic } from '../../data/Characteristics';
import EquipmentDataModel from './EquipmentDataModel';

export type ContainedItemQuality = {
	/**
	 * Quality's Display name
	 */
	name: string;

	/**
	 * HTML Descriptive text for the quality.
	 */
	description: string;

	/**
	 * Whether the quality is Rated.
	 */
	isRated: boolean;

	/**
	 * Rating value for the item.
	 */
	rating: number;
};

export default abstract class WeaponDataModel extends EquipmentDataModel {
	/**
	 * Base damage for the weapon.
	 */
	abstract baseDamage: number;

	/**
	 * Characteristic that is added to the damage value.
	 */
	abstract damageCharacteristic: Characteristic | '-';

	/**
	 * Critical value.
	 */
	abstract critical: number;

	/**
	 * Weapon's effective range.
	 */
	abstract range: 'engaged' | 'short' | 'medium' | 'long' | 'extreme';

	/**
	 * Names of skills that can be used to wield the weapon.
	 */
	abstract skills: string[];

	/**
	 * Item qualities for the weapon.
	 */
	abstract qualities: ContainedItemQuality[];

	static override defineSchema() {
		const fields = foundry.data.fields;

		return {
			...super.defineSchema(),
			baseDamage: new fields.NumberField({ initial: 0, integer: true }),
			damageCharacteristic: new fields.StringField({
				initial: '-',
				choices: ['-', Characteristic.Brawn, Characteristic.Agility, Characteristic.Intellect, Characteristic.Cunning, Characteristic.Willpower, Characteristic.Presence],
			}),
			critical: new fields.NumberField({ initial: 0, integer: true }),
			range: new fields.StringField({
				initial: 'engaged',
				choices: ['engaged', 'short', 'medium', 'long', 'extreme'],
			}),
			skills: new fields.ArrayField(new fields.StringField()),
			qualities: new fields.ArrayField(
				new fields.SchemaField({
					name: new fields.StringField(),
					description: new fields.HTMLField(),
					isRated: new fields.BooleanField({ initial: true }),
					rating: new fields.NumberField({ initial: 1, integer: true }),
				}),
			),
		};
	}
}
