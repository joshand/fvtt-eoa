/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameActor from '../actor/GameActor';
import BaseItemDataModel from '../item/data/BaseItemDataModel';
import GameItem from '../item/GameItem';

import './GameActorSheet.scss';
import DicePrompt from '../app/DicePrompt';

export default class GameActorSheet<ActorDataModel extends foundry.abstract.DataModel = foundry.abstract.DataModel, ItemDataModel extends BaseItemDataModel = BaseItemDataModel> extends GameActorSheet<
	GameActor<ActorDataModel>,
	GameItem<ItemDataModel>
> {
	static override get defaultOptions() {
		return {
			...super.defaultOptions,
			classes: ['eoa', 'sheet', 'actor'],
			width: 720,
			height: 640,
		};
	}

	override activateListeners(html: JQuery) {
		super.activateListeners(html);

		if (this.isEditable) {
			// Foundry v10 and v11 bind this functionality differently so instead we override that behavior with our own.
			html.find('img[data-edit]').off('click');
			html.find('img[data-edit]').on('click', this._onEditImage.bind(this));
		}

		setTimeout(() => {
			html.find('[data-skill-check]').on('click', async (event) => {
				const target = $(event.delegateTarget);

				// Grab the skill name & difficulty
				const skillName = <string>target.data('skill-check');
				const difficulty = parseInt(target.data('difficulty'));

				// Does this actor possess the skill in question?
				const matchingSkill = <GameItem>this.actor.items.find((i) => i.name.toLowerCase() === skillName.toLowerCase());

				const skillId = matchingSkill ? matchingSkill.id : '-';

				await DicePrompt.promptForRoll(this.actor, skillId, { startingDifficulty: difficulty });
			});
		}, 250);
	}
}
