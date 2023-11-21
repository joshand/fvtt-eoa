/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import { register as registerSheets } from './sheets';
import CharacterDataModel from './data/CharacterDataModel';
import GameActor from './GameActor';
import MinionDataModel from './data/MinionDataModel';
import RivalDataModel from './data/RivalDataModel';
import NemesisDataModel from './data/NemesisDataModel';

export function register() {
	CONFIG.Actor.documentClass = GameActor;

	registerDataModels();
	registerSheets();
}

export const AdversaryTypes = ['minion', 'nemesis', 'rival'];

function registerDataModels() {
	CONFIG.Actor.systemDataModels.character = CharacterDataModel;
	CONFIG.Actor.systemDataModels.minion = MinionDataModel;
	CONFIG.Actor.systemDataModels.rival = RivalDataModel;
	CONFIG.Actor.systemDataModels.nemesis = NemesisDataModel;
}
