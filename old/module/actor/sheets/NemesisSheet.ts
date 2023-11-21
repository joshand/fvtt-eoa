/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import AdversarySheet from '../../actor/sheets/AdversarySheet';
import VueNemesisSheet from '../../vue/sheets/actor/NemesisSheet.vue';

/**
 * Actor sheet used for Player Characters
 */
export default class NemesisSheet extends AdversarySheet {
	override get vueComponent() {
		return VueNemesisSheet;
	}
}
