/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import AdversarySheet from '../../actor/sheets/AdversarySheet';
import VueRivalSheet from '../../vue/sheets/actor/RivalSheet.vue';

/**
 * Actor sheet used for Player Characters
 */
export default class RivalSheet extends AdversarySheet {
	override get vueComponent() {
		return VueRivalSheet;
	}
}
