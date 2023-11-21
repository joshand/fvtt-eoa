/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import CharacterSheet from '../../actor/sheets/CharacterSheet';
import MinionSheet from '../../actor/sheets/MinionSheet';
import RivalSheet from '../../actor/sheets/RivalSheet';
import NemesisSheet from '../../actor/sheets/NemesisSheet';

export function register() {
	Actors.unregisterSheet('core', ActorSheet);

	Actors.registerSheet('genesys', CharacterSheet, {
		types: ['character'],
		makeDefault: true,
	});

	Actors.registerSheet('genesys', MinionSheet, {
		types: ['minion'],
		makeDefault: true,
	});

	Actors.registerSheet('genesys', RivalSheet, {
		types: ['rival'],
		makeDefault: true,
	});

	Actors.registerSheet('genesys', NemesisSheet, {
		types: ['nemesis'],
		makeDefault: true,
	});
}
