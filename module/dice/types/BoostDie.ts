/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import DefaultDie from './DefaultDie';

/**
 * Boost (blue) Die
 */
export default class BoostDie extends DefaultDie {
	static override DENOMINATION = 'b';
	static override FACES = [' ', ' ', 's', 'sa', 'aa', 'a'];
}
