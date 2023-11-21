/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameCombat, { register as registerCombatSocket } from './GameCombat';
import GameCombatant from './GameCombatant';
import GameCombatTracker from './GameCombatTracker';

export function register() {
	CONFIG.Combat.documentClass = GameCombat;
	CONFIG.Combatant.documentClass = GameCombatant;
	CONFIG.ui.combat = GameCombatTracker;

	registerCombatSocket();
}
