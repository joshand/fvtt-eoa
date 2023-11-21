/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import AbilityDie from './types/AbilityDie';
import BoostDie from './types/BoostDie';
import ProficiencyDie from './types/ProficiencyDie';
import SetbackDie from './types/SetbackDie';
import DifficultyDie from './types/DifficultyDie';
import ChallengeDie from './types/ChallengeDie';

import './diceSoNice';

/**
 * Registers custom dice types.
 */
export function register() {
	CONFIG.Dice.terms[BoostDie.DENOMINATION] = BoostDie;
	CONFIG.Dice.terms[AbilityDie.DENOMINATION] = AbilityDie;
	CONFIG.Dice.terms[ProficiencyDie.DENOMINATION] = ProficiencyDie;
	CONFIG.Dice.terms[SetbackDie.DENOMINATION] = SetbackDie;
	CONFIG.Dice.terms[DifficultyDie.DENOMINATION] = DifficultyDie;
	CONFIG.Dice.terms[ChallengeDie.DENOMINATION] = ChallengeDie;
}
