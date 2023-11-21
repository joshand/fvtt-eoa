/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import BaseItemDataModel from './BaseItemDataModel';

export enum EquipmentState {
	Carried = 'carried',
	Dropped = 'dropped',
	Equipped = 'equipped',
}

export enum EquipmentDamageState {
	Undamaged = 'undamaged',
	Minor = 'minor',
	Moderate = 'moderate',
	Major = 'major',
}

export default abstract class EquipmentDataModel extends BaseItemDataModel {
	/**
	 * Rarity value for the item.
	 */
	abstract rarity: number;

	/**
	 * Encumbrance value for the item.
	 */
	abstract encumbrance: number;

	/**
	 * Price of the item (in generic Currency).
	 */
	abstract price: number;

	/**
	 * Damage state of the item.
	 */
	abstract damage: EquipmentDamageState;

	/**
	 * (Owned Only) Quantity of the item possessed.
	 */
	abstract quantity: number;

	/**
	 * (Owned Only) ID of the container the item is held in.
	 */
	abstract container: string;

	/**
	 * (Owned Only) State of the item (carried, dropped, or equipped)
	 */
	abstract state: EquipmentState;

	static override defineSchema() {
		const fields = foundry.data.fields;

		return {
			...super.defineSchema(),
			rarity: new fields.NumberField({ integer: true, initial: 0 }),
			encumbrance: new fields.NumberField({ integer: true, initial: 0 }),
			price: new fields.NumberField({ initial: 0 }),
			damage: new fields.StringField({
				initial: EquipmentDamageState.Undamaged,
				choices: [EquipmentDamageState.Undamaged, EquipmentDamageState.Minor, EquipmentDamageState.Moderate, EquipmentDamageState.Major],
			}),
			container: new fields.StringField(),
			quantity: new fields.NumberField({ integer: true, initial: 1 }),
			state: new fields.StringField({
				initial: EquipmentState.Carried,
				choices: [EquipmentState.Carried, EquipmentState.Dropped, EquipmentState.Equipped],
			}),
		};
	}
}
