/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameItem from './GameItem.js';
import { register as registerSheets } from '../item/sheets/index.js';

import AbilityDataModel from '../item/data/AbilityDataModel.js';
import ArchetypeDataModel from '../item/data/ArchetypeDataModel.js';
import ArmorDataModel from '../item/data/ArmorDataModel.js';
import CareerDataModel from '../item/data/CareerDataModel.js';
import ContainerDataModel from '../item/data/ContainerDataModel.js';
import EquipmentDataModel from '../item/data/EquipmentDataModel.js';
import InjuryDataModel from '../item/data/InjuryDataModel.js';
import SkillDataModel from '../item/data/SkillDataModel.js';
import TalentDataModel from '../item/data/TalentDataModel.js';
import ItemQualityDataModel from '../item/data/ItemQualityDataModel.js';
import WeaponDataModel from '../item/data/WeaponDataModel.js';

export function register() {
	CONFIG.Item.documentClass = GameItem;

	registerDataModels();
	registerSheets();
}

export const CharacterCreationItemTypes = ['ability', 'archetype', 'career', 'skill', 'talent'];

export const EquipmentItemTypes = ['armor', 'consumable', 'container', 'gear', 'quality', 'weapon'];

function registerDataModels() {
	CONFIG.Item.systemDataModels.ability = AbilityDataModel;
	CONFIG.Item.systemDataModels.archetype = ArchetypeDataModel;
	CONFIG.Item.systemDataModels.armor = ArmorDataModel;
	CONFIG.Item.systemDataModels.career = CareerDataModel;
	CONFIG.Item.systemDataModels.consumable = EquipmentDataModel;
	CONFIG.Item.systemDataModels.container = ContainerDataModel;
	CONFIG.Item.systemDataModels.injury = InjuryDataModel;
	CONFIG.Item.systemDataModels.gear = EquipmentDataModel;
	CONFIG.Item.systemDataModels.skill = SkillDataModel;
	CONFIG.Item.systemDataModels.talent = TalentDataModel;
	CONFIG.Item.systemDataModels.quality = ItemQualityDataModel;
	CONFIG.Item.systemDataModels.weapon = WeaponDataModel;
}
