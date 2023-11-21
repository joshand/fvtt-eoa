/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import { NAMESPACE as SETTINGS_NAMESPACE } from './settings';
import { KEY_USE_MAGICAL_GIRL_SYMBOLS } from './settings/user';

export const GAME_CONFIG = {
	/**
	 * Whether to use the Magical Girl symbols where possible in the system.
	 */
	useMagicalGirlSymbols: true,
};

/**
 * Called during 'init' hook to initialize the Genesys config data.
 */
export function register() {
	CONFIG.eoa = GAME_CONFIG;
}

/**
 * Called on 'ready' to initialize values that rely on items established in init.
 */
export function ready() {
	CONFIG.eoa.useMagicalGirlSymbols = game.settings.get(SETTINGS_NAMESPACE, KEY_USE_MAGICAL_GIRL_SYMBOLS) as boolean;
}
