/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import BoostDie from './types/BoostDie';
import AbilityDie from './types/AbilityDie';
import ProficiencyDie from './types/ProficiencyDie';
import SetbackDie from './types/SetbackDie';
import DifficultyDie from './types/DifficultyDie';
import ChallengeDie from './types/ChallengeDie';

export {};

/**
 * Font scale used for the standard die faces.
 */
const FONT_SCALE = {
	db: 1.5, // Boost Die
	da: 0.8, // Ability Die
	dp: 1.2, // Proficiency Die
	ds: 1.25, // Setback Die
	di: 0.8, // Difficulty Die
	dc: 1.2, // Challenge Die
};

/**
 * Font scale used for the magical girl die faces.
 */
const FONT_SCALE_MG = {
	db: 1.5, // Boost Die
	da: 0.7, // Ability Die
	dp: 1.0, // Proficiency Die
	ds: 1.5, // Setback Die
	di: 0.8, // Difficulty Die
	dc: 1.0, // Challenge Die
};

const TYPES = {
	Boost: { denom: 'db', labels: BoostDie.FACES },
	Ability: { denom: 'da', labels: AbilityDie.FACES },
	Proficiency: { denom: 'dp', labels: ProficiencyDie.FACES },
	Setback: { denom: 'ds', labels: SetbackDie.FACES },
	Difficulty: { denom: 'di', labels: DifficultyDie.FACES },
	Challenge: { denom: 'dc', labels: ChallengeDie.FACES },
};

function makeStandardColorSet(name: string, color: string, foreground?: string, outline?: string): ColorSet {
	return {
		name: `eoa-${name.toLowerCase()}`,
		description: `EoA.DiceColors.${name}`,
		category: 'EoA.DiceCat.Normal',
		foreground: foreground ?? '#000000',
		background: color,
		outline,
		edge: color,
		font: 'Genesys Symbols',
		fontScale: FONT_SCALE,
	};
}

function makeMagicalColorSet(name: string, color: string, foreground?: string, outline?: string): ColorSet {
	return {
		...makeStandardColorSet(name, color, foreground, outline),
		name: `eoa-mg-${name.toLowerCase()}`,
		category: 'EoA.DiceCat.MagicalGirl',
		font: 'Magical Girl Symbols',
		fontScale: FONT_SCALE_MG,
	};
}

function makeCustomizableColorSet(name: string): ColorSet {
	return {
		name: `eoa-cust-${name.toLowerCase()}`,
		description: `EoA.DiceColors.${name}`,
		category: 'EoA.DiceCat.Custom',
		fontScale: FONT_SCALE,
	};
}

Hooks.once('diceSoNiceReady', (dice3d: Dice3d) => {
	console.log('EoA | Dice So Nice! Detected, initializing dice...');

	dice3d.addSystem(
		{
			id: 'eoa',
			name: 'EoA.System.Name',
		},
		'preferred',
	);

	dice3d.addSystem(
		{
			id: 'eoa-mg',
			name: 'EoA.DiceCat.MagicalGirl',
		},
		'default',
	);

	// Standard System Dice
	dice3d.addColorset(makeStandardColorSet('Boost', '#72cddc'), 'default');
	dice3d.addColorset(makeStandardColorSet('Ability', '#41ad49'), 'default');
	dice3d.addColorset(makeStandardColorSet('Proficiency', '#ffe800'), 'default');
	dice3d.addColorset(makeStandardColorSet('Setback', '#000000', '#ffffff'), 'default');
	dice3d.addColorset(makeStandardColorSet('Difficulty', '#6c2a84', '#ffffff', '#000000'), 'default');
	dice3d.addColorset(makeStandardColorSet('Challenge', '#7d1821', '#ffffff', '#000000'), 'default');

	// Magical Girl System Dice
	dice3d.addColorset(makeMagicalColorSet('Boost', '#72cddc', '#000000', '#72cddc'), 'default');
	dice3d.addColorset(makeMagicalColorSet('Ability', '#41ad49', '#000000', '#41ad49'), 'default');
	dice3d.addColorset(makeMagicalColorSet('Proficiency', '#ffe800', '#000000', '#ffe800'), 'default');
	dice3d.addColorset(makeMagicalColorSet('Setback', '#000000', '#ffffff', '#000000'), 'default');
	dice3d.addColorset(makeMagicalColorSet('Difficulty', '#6c2a84', '#ffffff', '#000000'), 'default');
	dice3d.addColorset(makeMagicalColorSet('Challenge', '#7d1821', '#ffffff', '#000000'), 'default');

	// Customizable System Dice
	(<(keyof typeof TYPES)[]>['Boost', 'Ability', 'Proficiency', 'Setback', 'Difficulty', 'Challenge']).forEach((die) => {
		dice3d.addColorset(makeCustomizableColorSet(die), 'default');
		dice3d.addDicePreset({
			type: TYPES[die].denom,
			labels: TYPES[die].labels,
			system: 'standard',
			colorset: `eoa-cust-${die.toLowerCase()}`,
		});
	});

	// Set up default color sets for the Genesys dice.
	dice3d.addDicePreset({
		type: 'db',
		labels: BoostDie.FACES,
		system: 'eoa',
		colorset: 'eoa-boost',
	});
	dice3d.addDicePreset({
		type: 'da',
		labels: AbilityDie.FACES,
		system: 'eoa',
		colorset: 'eoa-ability',
	});
	dice3d.addDicePreset({
		type: 'dp',
		labels: ProficiencyDie.FACES,
		system: 'eoa',
		colorset: 'eoa-proficiency',
	});
	dice3d.addDicePreset({
		type: 'ds',
		labels: SetbackDie.FACES,
		system: 'eoa',
		colorset: 'eoa-setback',
	});
	dice3d.addDicePreset({
		type: 'di',
		labels: DifficultyDie.FACES,
		system: 'eoa',
		colorset: 'eoa-difficulty',
	});
	dice3d.addDicePreset({
		type: 'dc',
		labels: ChallengeDie.FACES,
		system: 'eoa',
		colorset: 'eoa-challenge',
	});

	// Set up default color sets for the Magical Girl dice.
	dice3d.addDicePreset({
		type: 'db',
		labels: BoostDie.FACES,
		system: 'eoa-mg',
		colorset: 'eoa-mg-boost',
	});
	dice3d.addDicePreset({
		type: 'da',
		labels: AbilityDie.FACES,
		system: 'eoa-mg',
		colorset: 'eoa-mg-ability',
	});
	dice3d.addDicePreset({
		type: 'dp',
		labels: ProficiencyDie.FACES,
		system: 'eoa-mg',
		colorset: 'eoa-mg-proficiency',
	});
	dice3d.addDicePreset({
		type: 'ds',
		labels: SetbackDie.FACES,
		system: 'eoa-mg',
		colorset: 'eoa-mg-setback',
	});
	dice3d.addDicePreset({
		type: 'di',
		labels: DifficultyDie.FACES,
		system: 'eoa-mg',
		colorset: 'eoa-mg-difficulty',
	});
	dice3d.addDicePreset({
		type: 'dc',
		labels: ChallengeDie.FACES,
		system: 'eoa-mg',
		colorset: 'eoa-mg-challenge',
	});

	console.log('EoA | Dice So Nice! initialization complete.');
});
