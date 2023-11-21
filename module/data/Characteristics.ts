/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

export enum Characteristic {
	Brawn = 'brawn',
	Agility = 'agility',
	Intellect = 'intellect',
	Cunning = 'cunning',
	Willpower = 'willpower',
	Presence = 'presence',
}

export type CharacteristicsContainer = {
	brawn: number;
	agility: number;
	intellect: number;
	cunning: number;
	willpower: number;
	presence: number;
};
