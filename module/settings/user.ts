/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

/**
 * Whether the user wishes to use the Magical Girl symbols.
 */
export const KEY_USE_MAGICAL_GIRL_SYMBOLS = 'useMagicalGirlSymbols';

/**
 * Number of simulated rolls to do to calculate the dice pool success chance. A value of 0 disables the feature.
 */
export const KEY_DICE_POOL_APPROXIMATION = 'dicePoolApproximation';

export function register(namespace: string) {
	game.settings.register(namespace, KEY_USE_MAGICAL_GIRL_SYMBOLS, {
		name: game.i18n.localize('EoA.Settings.UseMagicalGirlSymbols'),
		hint: game.i18n.localize('EoA.Settings.UseMagicalGirlSymbolsHint'),
		scope: 'client',
		config: true,
		default: false,
		type: Boolean,
		requiresReload: true,
	});

	game.settings.register(namespace, KEY_DICE_POOL_APPROXIMATION, {
		name: game.i18n.localize('EoA.Settings.DicePoolApproximation'),
		hint: game.i18n.localize('EoA.Settings.DicePoolApproximationHint'),
		scope: 'client',
		config: true,
		default: 0,
		type: Number,
	});
}
