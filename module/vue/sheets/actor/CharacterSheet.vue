<script lang="ts" setup>
import { computed, inject, onBeforeMount, onBeforeUpdate, ref, toRaw } from 'vue';
import { ActorSheetContext, RootContext } from '../../SheetContext';
import CharacterDataModel from '../../../actor/data/CharacterDataModel';
import CharacterMeta from '../../sheets/actor/character/CharacterMeta.vue';
import CombatStat from '../../components/character/CombatStat.vue';
import Localized from '../../components/Localized.vue';
import EffectsView from '../../views/EffectsView.vue';

import JournalTab from '../../sheets/actor/character/JournalTab.vue';
import SkillsTab from '../../sheets/actor/character/SkillsTab.vue';
import TalentsTab from '../../sheets/actor/character/TalentsTab.vue';
import InventoryTab from '../../sheets/actor/character/InventoryTab.vue';
import CombatTab from '../../sheets/actor/character/CombatTab.vue';

const context = inject<ActorSheetContext<CharacterDataModel>>(RootContext)!;
const system = computed(() => toRaw(context.data.actor).systemData);

const effects = ref<any>([]);

async function addEffect(category: string) {
	await toRaw(context.sheet.actor).createEmbeddedDocuments('ActiveEffect', [
		{
			label: context.data.actor.name,
			icon: 'icons/svg/aura.svg',
			disabled: category === 'suppressed',
			duration: category === 'temporary' ? { rounds: 1 } : undefined,
		},
	]);
}

function updateEffects() {
	effects.value = [...toRaw(context.data.actor).effects];
}

onBeforeMount(updateEffects);
onBeforeUpdate(updateEffects);
</script>

<template>
	<div class="character-sheet">
		<CharacterMeta />

		<section class="combat-stat-row">
			<CombatStat label="EoA.Labels.SoakValue" :value="system.totalSoak" />

			<CombatStat
				label="EoA.Labels.Wounds"
				primary-label="EoA.Labels.Threshold"
				:value="system.wounds.max"
				has-secondary
				secondary-label="EoA.Labels.Current"
				secondary-name="system.wounds.value"
				:secondary-value="system.wounds.value"
			/>

			<CombatStat
				label="EoA.Labels.Strain"
				primary-label="EoA.Labels.Threshold"
				:value="system.strain.max"
				has-secondary
				secondary-label="EoA.Labels.Current"
				secondary-name="system.strain.value"
				:secondary-value="system.strain.value"
			/>

			<CombatStat
				label="EoA.Labels.Defense"
				primary-label="EoA.Labels.DefenseRanged"
				:value="system.totalDefense.ranged"
				has-secondary
				secondary-label="EoA.Labels.DefenseMelee"
				:secondary-value="system.totalDefense.melee"
				read-only
			/>
		</section>

		<nav class="sheet-tabs" data-group="primary">
			<div class="spacer"></div>

			<a class="item" data-tab="skills"><Localized label="EoA.Tabs.Skills" /></a>
			<a class="item" data-tab="combat"><Localized label="EoA.Tabs.Combat" /></a>
			<a class="item" data-tab="talents"><Localized label="EoA.Tabs.Talents" /></a>
			<!--			<a class="item" data-tab="magic"><Localized label="EoA.Tabs.Magic"/></a>-->
			<a class="item" data-tab="inventory"><Localized label="EoA.Tabs.Inventory" /></a>
			<a class="item" data-tab="effects"><Localized label="EoA.Tabs.Effects" /></a>
			<a class="item" data-tab="journal"><Localized label="EoA.Tabs.Journal" /></a>

			<div class="spacer"></div>
		</nav>

		<section class="sheet-body">
			<div class="tab" data-tab="skills"><SkillsTab /></div>

			<div class="tab" data-tab="combat"><CombatTab /></div>

			<div class="tab" data-tab="talents"><TalentsTab /></div>

			<!--			<div class="tab" data-tab="magic">MAGIC</div>-->

			<div class="tab" data-tab="inventory"><InventoryTab /></div>

			<div class="tab" data-tab="effects">
				<EffectsView :effects="[...effects]" @add-effect="addEffect" />
			</div>

			<div class="tab" data-tab="journal">
				<JournalTab />
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped>
.character-sheet {
	width: 100%;
	height: 100%;

	display: grid;
	// Meta, Combat Stats, Tabs, tab content
	grid-template-rows: repeat(3, auto) 1fr;
	gap: 0.5em;
}

// Container for the character's secondary combat stats (wounds, strain, etc.)
.combat-stat-row {
	// By default, evenly space the items across the full sheet width.
	display: flex;
	gap: 1em;
	align-items: center;
	justify-content: space-around;

	// When the sheet is wider than 700px, simply center the stat boxes.
	@container sheet (min-width: 700px) {
		display: flex;
		justify-content: center;

		.combat-stat {
			width: 165px;
		}
	}
}
</style>
