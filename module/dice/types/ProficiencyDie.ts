/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import DefaultDie from './DefaultDie';

/**
 * Proficiency (yellow) Die
 */
export default class ProficiencyDie extends DefaultDie {
	static override DENOMINATION = 'p';
	static override FACES = [' ', 's', 's', 'ss', 'ss', 'a', 'sa', 'sa', 'sa', 'aa', 'aa', 't'];
}
