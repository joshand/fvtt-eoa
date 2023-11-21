<script lang="ts" setup>
import AdversarySheet from '../../sheets/actor/AdversarySheet.vue';
import { computed, inject, toRaw } from 'vue';
import GameItem from '../../../item/GameItem';
import SkillDataModel from '../../../item/data/SkillDataModel';
import { ActorSheetContext, RootContext } from '../../SheetContext';
import DicePrompt from '../../../app/DicePrompt';
import Localized from '../../components/Localized.vue';
import ContextMenu from '../../components/ContextMenu.vue';
import MenuItem from '../../components/MenuItem.vue';
import SkillRanks from '../../components/character/SkillRanks.vue';
import CombatStat from '../../components/character/CombatStat.vue';
import MinionDataModel from '../../../actor/data/MinionDataModel';

const context = inject<ActorSheetContext<MinionDataModel>>(RootContext)!;
const actor = computed(() => toRaw(context.data.actor));
const system = computed(() => toRaw(context.data.actor).systemData);

const skills = computed(() => actor.value.items.filter((i) => i.type === 'skill') as GameItem<SkillDataModel>[]);

const editLabel = game.i18n.localize('EoA.Labels.Edit');
const deleteLabel = game.i18n.localize('EoA.Labels.Delete');

async function rollSkill(skill: GameItem<SkillDataModel>) {
	await DicePrompt.promptForRoll(toRaw(context.data.actor), skill.id);
}

async function editItem(item: GameItem) {
	await toRaw(item).sheet.render(true);
}

async function deleteItem(item: GameItem) {
	await toRaw(item).delete();
}
</script>

<template>
	<AdversarySheet>
		<template v-slot:stats>
			<CombatStat
				v-if="actor.isToken"
				label="EoA.Labels.GroupSize"
				primary-label="EoA.Adversary.Base"
				name="system.groupSize"
				:value="system.groupSize"
				has-secondary
				secondary-read-only
				secondary-label="EoA.Adversary.Remaining"
				:secondary-value="system.remainingMembers"
				edit-primary
			/>

			<CombatStat v-else label="EoA.Labels.GroupSize" name="system.groupSize" :value="system.groupSize" edit-primary />

			<CombatStat label="EoA.Labels.Soak" name="system.soak" :value="system.soak" edit-primary />

			<CombatStat
				v-if="actor.isToken"
				label="EoA.Labels.Wounds"
				primary-label="EoA.Labels.Threshold"
				:value="system.groupWoundThreshold"
				has-secondary
				secondary-label="EoA.Labels.Current"
				secondary-name="system.wounds.value"
				:secondary-value="system.wounds.value"
			/>

			<CombatStat v-else label="EoA.Labels.WoundThreshold" name="system.wounds.threshold" :value="system.wounds.threshold" edit-primary />

			<CombatStat
				label="EoA.Labels.Defense"
				primary-label="EoA.Labels.DefenseRanged"
				:value="system.defense.ranged"
				name="system.defense.ranged"
				has-secondary
				secondary-name="system.defense.melee"
				secondary-label="EoA.Labels.DefenseMelee"
				:secondary-value="system.defense.melee"
				edit-primary
			/>
		</template>

		<template v-slot:skills>
			<span class="header"><Localized label="EoA.Adversary.MinionSkills" />:</span>
			<div class="container">
				<Localized v-if="skills.length === 0" label="EoA.Adversary.None" />
				<ContextMenu v-for="skill in skills" :key="skill.id" class="skill">
					<template v-slot:menu-items>
						<MenuItem @click="editItem(skill)">
							<template v-slot:icon><i class="fas fa-edit"></i></template>
							{{ editLabel }}
						</MenuItem>

						<MenuItem @click="deleteItem(skill)">
							<template v-slot:icon><i class="fas fa-trash"></i></template>
							{{ deleteLabel }}
						</MenuItem>
					</template>

					<a @click="rollSkill(skill)">
						<span>{{ skill.name }}</span>
						<SkillRanks :skill-value="Math.max(0, system.remainingMembers - 1)" :characteristic-value="system.characteristics[skill.systemData.characteristic]" />
					</a>
				</ContextMenu>
			</div>
		</template>
	</AdversarySheet>
</template>
