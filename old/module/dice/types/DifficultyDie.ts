/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import DefaultDie from './DefaultDie';

/**
 * Difficulty (purple) Die
 */
export default class DifficultyDie extends DefaultDie {
	static override DENOMINATION = 'i';
	static override FACES = [' ', 'f', 'ff', 'h', 'h', 'h', 'hh', 'fh'];
}
