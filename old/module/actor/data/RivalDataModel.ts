/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameActor from '../../actor/GameActor';
import AdversaryDataModel from '../../actor/data/AdversaryDataModel';
import IHasPreCreate from '../../data/IHasPreCreate';

export default abstract class RivalDataModel extends AdversaryDataModel implements IHasPreCreate<GameActor<RivalDataModel>> {
	abstract wounds: {
		value: number;
		max: number;
	};

	async preCreate(actor: GameActor<RivalDataModel>, _data: PreDocumentId<any>, _options: DocumentModificationContext<GameActor<RivalDataModel>>, _user: foundry.documents.BaseUser) {
		const prototypeToken = {
			bar1: { attribute: 'wounds' },
		};

		await actor.updateSource({ prototypeToken });
	}

	static override defineSchema() {
		const fields = foundry.data.fields;

		return {
			...super.defineSchema(),
			wounds: new fields.SchemaField({
				value: new fields.NumberField({ initial: 0 }),
				max: new fields.NumberField({ initial: 0 }),
			}),
		};
	}
}
