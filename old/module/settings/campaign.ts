/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

/**
 * The Skills Compendium to use for default skill data.
 */
export const KEY_SKILLS_COMPENDIUM = 'skillsCompendium';

/**
 * The name of the skill to use for healing Critical Injuries.
 */
export const KEY_SKILL_FOR_INJURIES = 'skillForInjuries';

/**
 * Name of the currency used for the setting.
 */
export const KEY_MONEY_NAME = 'currency';

/**
 * Number of free skill ranks characters gain from careers.
 */
export const KEY_CAREER_SKILL_RANKS = 'careerSkillRanks';

/**
 * Whether to allow use of the Uncoupling Skills from Characteristics alternate rule.
 */
export const KEY_UNCOUPLE_SKILLS_FROM_CHARACTERISTICS = 'uncoupleSkills';

/**
 * Default skills compendium to use if the setting is misconfigured.
 */
export const DEFAULT_SKILLS_COMPENDIUM = 'eoa.crb-skills';

/**
 * Whether to show Damage, Critical, and Qualities on attack roll chat cards even when the roll was a failure.
 */
export const KEY_SHOW_DAMAGE_ON_FAILURE = 'showDamageOnFailure';

/**
 * Whether to use the optional rule for super-characteristics.
 */
export const KEY_SUPER_CHARACTERISTICS = 'useSuperCharacteristics';

/**
 * Register campaign settings.
 * @param namespace Namespace to register settings under.
 */
export function register(namespace: string) {
	game.settings.register(namespace, KEY_SKILLS_COMPENDIUM, {
		name: game.i18n.localize('EoA.Settings.SkillsCompendium'),
		hint: game.i18n.localize('EoA.Settings.SkillsCompendiumHint'),
		scope: 'world',
		config: true,
		default: DEFAULT_SKILLS_COMPENDIUM,
		type: String,
	});

	game.settings.register(namespace, KEY_SKILL_FOR_INJURIES, {
		name: game.i18n.localize('EoA.Settings.SkillForInjuries'),
		hint: game.i18n.localize('EoA.Settings.SkillForInjuriesHint'),
		scope: 'world',
		config: true,
		default: 'Resilience',
		type: String,
	});

	game.settings.register(namespace, KEY_MONEY_NAME, {
		name: game.i18n.localize('EoA.Settings.Money'),
		hint: game.i18n.localize('EoA.Settings.MoneyHint'),
		scope: 'world',
		config: true,
		default: 'Money',
		type: String,
	});

	game.settings.register(namespace, KEY_CAREER_SKILL_RANKS, {
		name: game.i18n.localize('EoA.Settings.CareerSkillRanks'),
		hint: game.i18n.localize('EoA.Settings.CareerSkillRanksHint'),
		scope: 'world',
		config: true,
		default: 4,
		type: Number,
	});

	game.settings.register(namespace, KEY_UNCOUPLE_SKILLS_FROM_CHARACTERISTICS, {
		name: game.i18n.localize('EoA.Settings.UncoupleSkillsAlternateRule'),
		hint: game.i18n.localize('EoA.Settings.UncoupleSkillsAlternateRuleHint'),
		scope: 'world',
		config: true,
		default: false,
		type: Boolean,
	});

	game.settings.register(namespace, KEY_SHOW_DAMAGE_ON_FAILURE, {
		name: game.i18n.localize('EoA.Settings.ShowDamageOnFailure'),
		hint: game.i18n.localize('EoA.Settings.ShowDamageOnFailureHint'),
		scope: 'world',
		config: true,
		default: false,
		type: Boolean,
	});

	game.settings.register(namespace, KEY_SUPER_CHARACTERISTICS, {
		name: game.i18n.localize('EoA.Settings.SuperCharacteristics'),
		hint: game.i18n.localize('EoA.Settings.SuperCharacteristicsHint'),
		scope: 'world',
		config: true,
		default: false,
		type: Boolean,
	});
}
