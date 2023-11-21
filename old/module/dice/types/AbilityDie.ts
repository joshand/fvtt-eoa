/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import DefaultDie from './DefaultDie';

/**
 * Ability (green) Die
 */
export default class AbilityDie extends DefaultDie {
	static override DENOMINATION = 'a';
	static override FACES = [' ', 's', 's', 'ss', 'a', 'a', 'sa', 'aa'];
}
