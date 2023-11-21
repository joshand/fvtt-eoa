/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import DefaultDie from './DefaultDie';

/**
 * Setback (black) Die
 */
export default class SetbackDie extends DefaultDie {
	static override DENOMINATION = 's';
	static override FACES = [' ', ' ', 'f', 'f', 'h', 'h'];
}
