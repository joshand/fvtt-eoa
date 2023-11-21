/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import AbilitySheet from '../../vue/sheets/item/AbilitySheet.vue';
import ArmorSheet from './ArmorSheet.js';
import EquipmentSheet from '../../vue/sheets/item/EquipmentSheet.vue';
import InjurySheet from '../../vue/sheets/item/InjurySheet.vue';
import ItemQualitySheet from '../../vue/sheets/item/ItemQualitySheet.vue';
import SkillSheet from '../../vue/sheets/item/SkillSheet.vue';
import TalentSheet from '../../vue/sheets/item/TalentSheet.vue';
import WeaponSheet from './WeaponSheet.js';
import ArchetypeSheet from './ArchetypeSheet.js';
import CareerSheet from './CareerSheet.js';
import VueSheet from '../../vue/VueSheet';
import GameItemSheet from '../GameItemSheet';
import { GameItemSheetData, ItemSheetContext } from '../../vue/SheetContext';

/**
 * Constructs a vue-based ItemSheet subclass with no extra processing - just the sheet itself.
 * @param sheetClass Vue component to use for the sheet.
 */
function basicSheet(sheetClass: any) {
	return class extends VueSheet(GameItemSheetData) {
		override get vueComponent() {
			return sheetClass;
		}

		override async getVueContext(): Promise<ItemSheetContext | undefined> {
			return {
				sheet: this,
				data: (await this.getData()) as GameItemSheetData,
			};
		}
	};
}

/**
 * Registers Item sheets used by the system.
 */
export function register() {
	Items.unregisterSheet('core', ItemSheet);

	Items.registerSheet('eoa', basicSheet(AbilitySheet), {
		types: ['ability'],
		makeDefault: true,
	});

	Items.registerSheet('eoa', ArmorSheet, {
		types: ['armor'],
		makeDefault: true,
	});

	Items.registerSheet('eoa', basicSheet(EquipmentSheet), {
		types: ['consumable', 'container', 'gear'],
		makeDefault: true,
	});

	Items.registerSheet('eoa', basicSheet(InjurySheet), {
		types: ['injury'],
		makeDefault: true,
	});

	Items.registerSheet('eoa', basicSheet(ItemQualitySheet), {
		types: ['quality'],
		makeDefault: true,
	});

	Items.registerSheet('eoa', basicSheet(SkillSheet), {
		types: ['skill'],
		makeDefault: true,
	});

	Items.registerSheet('eoa', basicSheet(TalentSheet), {
		types: ['talent'],
		makeDefault: true,
	});

	Items.registerSheet('eoa', WeaponSheet, {
		types: ['weapon'],
		makeDefault: true,
	});

	Items.registerSheet('eoa', ArchetypeSheet, {
		types: ['archetype'],
		makeDefault: true,
	});

	Items.registerSheet('eoa', CareerSheet, {
		types: ['career'],
		makeDefault: true,
	});
}
