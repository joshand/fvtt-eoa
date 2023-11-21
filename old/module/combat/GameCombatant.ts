/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameActor from '../actor/GameActor';
import AdversaryDataModel from '../actor/data/AdversaryDataModel';
import CharacterDataModel from '../actor/data/CharacterDataModel';
import GameCombat, { InitiativeSkill } from '../combat/GameCombat';
import GameItem from '../item/GameItem';
import SkillDataModel from '../item/data/SkillDataModel';
import MinionDataModel from '../actor/data/MinionDataModel';
import { Characteristic } from '../data/Characteristics';
import GameRoller from '../dice/GameRoller';
import { NAMESPACE as SETTINGS_NAMESPACE } from '../settings';
import { KEY_SUPER_CHARACTERISTICS } from '../settings/campaign';

export default class GameCombatant extends Combatant<GameCombat, GameActor> {
	initiativeSkill?: InitiativeSkill;

	get disposition() {
		switch ((this.actor.token ?? (this.actor.prototypeToken as any)).disposition) {
			case CONST.TOKEN_DISPOSITIONS.FRIENDLY:
				return 'friendly';

			case CONST.TOKEN_DISPOSITIONS.NEUTRAL:
				return 'neutral';

			case CONST.TOKEN_DISPOSITIONS.HOSTILE:
				return 'hostile';

			default:
				return 'neutral';
		}
	}

	override async rollInitiative(formula: string) {
		const roll = this.getInitiativeRoll(formula);
		await roll.evaluate({ async: true });
		const results = GameRoller.parseRollResults(roll);

		return this.update({ initiative: results.netSuccess + results.netAdvantage / 100 });
	}

	override getInitiativeRoll(skillName: string = 'Unskilled', charFallback: Characteristic = Characteristic.Brawn) {
		const skill = this.actor.items.find((i) => i.type === 'skill' && i.name.toLowerCase() === skillName.toLowerCase()) as GameItem<SkillDataModel> | undefined;
		const characteristic = skill?.systemData?.characteristic ?? charFallback;
		const system = this.actor.systemData as CharacterDataModel | AdversaryDataModel;
		const characteristicValue = system.characteristics[characteristic];

		let skillValue = skill?.systemData?.rank ?? 0;
		if (skill && this.actor.type === 'minion') {
			skillValue = Math.max(0, (this.actor.systemData as MinionDataModel).remainingMembers - 1);
		}

		const yellow = Math.min(characteristicValue, skillValue);
		const green = Math.max(characteristicValue, skillValue) - yellow;

		const allowSuperCharacteristics = game.settings.get(SETTINGS_NAMESPACE, KEY_SUPER_CHARACTERISTICS) as boolean;
		const useSuperCharacteristic = allowSuperCharacteristics && system.superCharacteristics.has(characteristic);

		return new Roll(`${yellow}dP${useSuperCharacteristic ? 'X' : ''}+${green}dA`);
	}
}
