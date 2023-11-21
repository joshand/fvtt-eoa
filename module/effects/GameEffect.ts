/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameItem from '../item/GameItem';
import GameActor from '../actor/GameActor';
import TalentDataModel from '../item/data/TalentDataModel';

export default class GameEffect extends ActiveEffect {
	override get isSuppressed() {
		return this.disabled;
	}

	get originItem(): GameItem | undefined {
		if (!this.origin || !(this.parent instanceof GameActor) || !this.origin.includes('.Item.')) {
			return undefined;
		}

		const itemId = this.origin.split('.Item.')[1];

		return (this.parent as GameActor).items.get(itemId) as GameItem | undefined;
	}

	override apply(actor: Actor, change: ApplicableChangeData<this>): unknown {
		const originItem = this.originItem;

		console.error('Applying Effect!');
		console.log(originItem);

		if (originItem && originItem.systemData instanceof TalentDataModel) {
			const talentData = <TalentDataModel>originItem.systemData;

			const rank = talentData.rank;
			const value = parseInt(change.value) * rank;
			if (!isNaN(value)) {
				change.value = value.toString();
			}
		}

		return super.apply(actor, change);
	}
}
