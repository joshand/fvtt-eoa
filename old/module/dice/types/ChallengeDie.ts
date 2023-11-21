/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import DefaultDie from './DefaultDie';

/**
 * Challenge (red) Die
 */
export default class ChallengeDie extends DefaultDie {
	static override DENOMINATION = 'c';
	static override FACES = [' ', 'f', 'f', 'ff', 'ff', 'h', 'h', 'fh', 'fh', 'hh', 'hh', 'd'];
}
