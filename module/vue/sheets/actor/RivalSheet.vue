<script lang="ts" setup>
import AdversarySheet from '../../sheets/actor/AdversarySheet.vue';
import { computed, inject, toRaw } from 'vue';
import { ActorSheetContext, RootContext } from '../../SheetContext';
import CombatStat from '../../components/character/CombatStat.vue';
import RivalDataModel from '../../../actor/data/RivalDataModel';

const context = inject<ActorSheetContext<RivalDataModel>>(RootContext)!;
const system = computed(() => toRaw(context.data.actor).systemData);
</script>

<template>
	<AdversarySheet>
		<template v-slot:stats>
			<CombatStat label="EoA.Labels.Soak" name="system.soak" :value="system.soak" edit-primary />

			<CombatStat
				label="EoA.Labels.Wounds"
				primary-label="EoA.Labels.Threshold"
				name="system.wounds.max"
				:value="system.wounds.max"
				edit-primary
				has-secondary
				secondary-label="EoA.Labels.Current"
				secondary-name="system.wounds.value"
				:secondary-value="system.wounds.value"
			/>

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
	</AdversarySheet>
</template>
