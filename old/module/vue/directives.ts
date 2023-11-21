/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

function doLocalize(el: HTMLInputElement, binding: any) {
	if (typeof binding.arg !== 'string') {
		console.warn(`Attempt to localize non-string attribute '${binding.arg}'`);
		return;
	}

	if (typeof binding.value !== 'string' || binding.value.trim().length === 0) {
		console.warn(`Attempt to localize non-string or empty key '${binding.value}'`);
		return;
	}

	const localized = game.i18n.localize(<string>binding.value);

	(<string>binding.arg).split(',').forEach((attribute) => {
		el.setAttribute(attribute, localized);
	});
}

export const vLocalize = {
	beforeMount: doLocalize,
	updated: doLocalize,
};
