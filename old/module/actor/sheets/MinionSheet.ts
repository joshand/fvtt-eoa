/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import AdversarySheet from '../../actor/sheets/AdversarySheet';
import VueMinionSheet from '../../vue/sheets/actor/MinionSheet.vue';
import GameItem from '../../item/GameItem';
import BaseItemDataModel from '../../item/data/BaseItemDataModel';

/**
 * Actor sheet used for Player Characters
 */
export default class MinionSheet extends AdversarySheet {
	override get vueComponent() {
		return VueMinionSheet;
	}

	protected override async _onDropItem(event: DragEvent, data: DropCanvasData<'Item', GameItem<BaseItemDataModel>>) {
		if (!this.isEditable || !data.uuid) {
			return false;
		}

		const droppedItem: GameItem | undefined = await (<any>GameItem.implementation).fromDropData(data);
		if (!droppedItem) {
			return false;
		}

		// If the dropped item is a Skill, verify we don't already have it on the sheet.
		if (droppedItem.type === 'skill' && this.actor.items.find((i) => i.type === droppedItem.type && i.name.toLowerCase() === droppedItem.name.toLowerCase())) {
			return false;
		}

		return super._onDropItem(event, data);
	}
}
