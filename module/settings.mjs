/**
 * Register all of the system's settings.
 */
export default function registerSystemSettings() {
  // Internal System Migration Version
  game.settings.register("eoa", "systemMigrationVersion", {
    name: "System Migration Version",
    scope: "world",
    config: false,
    type: String,
    default: ""
  });

  // Rest Recovery Rules
  game.settings.register("eoa", "restVariant", {
    name: "SETTINGS.eoaRestN",
    hint: "SETTINGS.eoaRestL",
    scope: "world",
    config: true,
    default: "normal",
    type: String,
    choices: {
      normal: "SETTINGS.eoaRestPHB",
      gritty: "SETTINGS.eoaRestGritty",
      epic: "SETTINGS.eoaRestEpic"
    }
  });

  // Diagonal Movement Rule
  game.settings.register("eoa", "diagonalMovement", {
    name: "SETTINGS.eoaDiagN",
    hint: "SETTINGS.eoaDiagL",
    scope: "world",
    config: true,
    default: "555",
    type: String,
    choices: {
      555: "SETTINGS.eoaDiagPHB",
      5105: "SETTINGS.eoaDiagDMG",
      EUCL: "SETTINGS.eoaDiagEuclidean"
    },
    onChange: rule => canvas.grid.diagonalRule = rule
  });

  // Allow rotating square templates
  game.settings.register("eoa", "gridAlignedSquareTemplates", {
    name: "SETTINGS.eoaGridAlignedSquareTemplatesN",
    hint: "SETTINGS.eoaGridAlignedSquareTemplatesL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean
  });

  // Proficiency modifier type
  game.settings.register("eoa", "proficiencyModifier", {
    name: "SETTINGS.eoaProfN",
    hint: "SETTINGS.eoaProfL",
    scope: "world",
    config: true,
    default: "bonus",
    type: String,
    choices: {
      bonus: "SETTINGS.eoaProfBonus",
      dice: "SETTINGS.eoaProfDice"
    }
  });

  // Allow feats during Ability Score Improvements
  game.settings.register("eoa", "allowFeats", {
    name: "SETTINGS.eoaFeatsN",
    hint: "SETTINGS.eoaFeatsL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean
  });

  // Use Honor ability score
  game.settings.register("eoa", "honorScore", {
    name: "SETTINGS.eoaHonorN",
    hint: "SETTINGS.eoaHonorL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true
  });

  // Use Sanity ability score
  game.settings.register("eoa", "sanityScore", {
    name: "SETTINGS.eoaSanityN",
    hint: "SETTINGS.eoaSanityL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true
  });

  // Apply Dexterity as Initiative Tiebreaker
  game.settings.register("eoa", "initiativeDexTiebreaker", {
    name: "SETTINGS.eoaInitTBN",
    hint: "SETTINGS.eoaInitTBL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Record Currency Weight
  game.settings.register("eoa", "currencyWeight", {
    name: "SETTINGS.eoaCurWtN",
    hint: "SETTINGS.eoaCurWtL",
    scope: "world",
    config: true,
    default: true,
    type: Boolean
  });

  // Disable Experience Tracking
  game.settings.register("eoa", "disableExperienceTracking", {
    name: "SETTINGS.eoaNoExpN",
    hint: "SETTINGS.eoaNoExpL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Disable Advancements
  game.settings.register("eoa", "disableAdvancements", {
    name: "SETTINGS.eoaNoAdvancementsN",
    hint: "SETTINGS.eoaNoAdvancementsL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Collapse Item Cards (by default)
  game.settings.register("eoa", "autoCollapseItemCards", {
    name: "SETTINGS.eoaAutoCollapseCardN",
    hint: "SETTINGS.eoaAutoCollapseCardL",
    scope: "client",
    config: true,
    default: false,
    type: Boolean,
    onChange: s => {
      ui.chat.render();
    }
  });

  // Allow Polymorphing
  game.settings.register("eoa", "allowPolymorphing", {
    name: "SETTINGS.eoaAllowPolymorphingN",
    hint: "SETTINGS.eoaAllowPolymorphingL",
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Polymorph Settings
  game.settings.register("eoa", "polymorphSettings", {
    scope: "client",
    default: {
      keepPhysical: false,
      keepMental: false,
      keepSaves: false,
      keepSkills: false,
      mergeSaves: false,
      mergeSkills: false,
      keepClass: false,
      keepFeats: false,
      keepSpells: false,
      keepItems: false,
      keepBio: false,
      keepVision: true,
      keepSelf: false,
      keepAE: false,
      keepOriginAE: true,
      keepOtherOriginAE: true,
      keepFeatAE: true,
      keepSpellAE: true,
      keepEquipmentAE: true,
      keepClassAE: true,
      keepBackgroundAE: true,
      transformTokens: true
    }
  });

  // Metric Unit Weights
  game.settings.register("eoa", "metricWeightUnits", {
    name: "SETTINGS.eoaMetricN",
    hint: "SETTINGS.eoaMetricL",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Critical Damage Modifiers
  game.settings.register("eoa", "criticalDamageModifiers", {
    name: "SETTINGS.eoaCriticalModifiersN",
    hint: "SETTINGS.eoaCriticalModifiersL",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Critical Damage Maximize
  game.settings.register("eoa", "criticalDamageMaxDice", {
    name: "SETTINGS.eoaCriticalMaxDiceN",
    hint: "SETTINGS.eoaCriticalMaxDiceL",
    scope: "world",
    config: true,
    type: Boolean,
    default: false
  });

  // Strict validation
  game.settings.register("eoa", "strictValidation", {
    scope: "world",
    config: false,
    type: Boolean,
    default: true
  });
}
