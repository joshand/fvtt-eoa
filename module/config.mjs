import { preLocalize } from "./utils.mjs";

// Namespace Configuration Values
const EOA = {};

// ASCII Artwork
EOA.ASCII = `_______________________________
 _____          __
|  ___|        |  \\
| |__     _    |   \\
|  __|  // \\  |____\\
| |___  || ||  |     \\
|____/  \\_//  |      \\
_______________________________`;

/**
 * Configuration data for abilities.
 *
 * @typedef {object} AbilityConfiguration
 * @property {string} label                               Localized label.
 * @property {string} abbreviation                        Localized abbreviation.
 * @property {string} fullKey                             Fully written key used as alternate for enrichers.
 * @property {string} [type]                              Whether this is a "physical" or "mental" ability.
 * @property {Object<string, number|string>}  [defaults]  Default values for this ability based on actor type.
 *                                                        If a string is used, the system will attempt to fetch.
 *                                                        the value of the specified ability.
 */

/**
 * The set of Ability Scores used within the system.
 * @enum {AbilityConfiguration}
 */
EOA.abilities = {
  str: {
    label: "EOA.AbilityStr",
    abbreviation: "EOA.AbilityStrAbbr",
    type: "physical",
    fullKey: "strength"
  },
  agi: {
    label: "EOA.AbilityAgi",
    abbreviation: "EOA.AbilityAgiAbbr",
    type: "physical",
    fullKey: "agility"
  },
  sta: {
    label: "EOA.AbilitySta",
    abbreviation: "EOA.AbilityStaAbbr",
    type: "physical",
    fullKey: "stamina"
  },
  int: {
    label: "EOA.AbilityInt",
    abbreviation: "EOA.AbilityIntAbbr",
    type: "mental",
    fullKey: "intelligence"
  },
  sen: {
    label: "EOA.AbilitySen",
    abbreviation: "EOA.AbilitySenAbbr",
    type: "mental",
    fullKey: "senses"
  },
  psy: {
    label: "EOA.AbilityPsy",
    abbreviation: "EOA.AbilityPsyAbbr",
    type: "mental",
    fullKey: "psyche"
  }
};
preLocalize("abilities", { keys: ["label", "abbreviation"] });

/**
 * Configure which ability score is used as the default modifier for initiative rolls.
 * @type {string}
 */
EOA.initiativeAbility = "dex";

/**
 * Configure which ability score is used when calculating hit points per level.
 * @type {string}
 */
EOA.hitPointsAbility = "sta";

/* -------------------------------------------- */

/**
 * Maximum allowed character level.
 * @type {number}
 */
EOA.maxLevel = 20;

/**
 * Maximum ability score value allowed by default.
 * @type {number}
 */
EOA.maxAbilityScore = 20;

/**
 * XP required to achieve each character level.
 * @type {number[]}
 */
EOA.CHARACTER_EXP_LEVELS = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
];

/**
 * XP granted for each challenge rating.
 * @type {number[]}
 */
EOA.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

/**
 * @typedef {object} CharacterFlagConfig
 * @property {string} name
 * @property {string} hint
 * @property {string} section
 * @property {typeof boolean|string|number} type
 * @property {string} placeholder
 * @property {string[]} [abilities]
 * @property {Object<string, string>} [choices]
 * @property {string[]} [skills]
 */


/* -------------------------------------------- */
/*  Sources                                     */
/* -------------------------------------------- */

/**
 * List of books available as sources.
 * @enum {string}
 */
EOA.sourceBooks = {
  "GDoc": "SOURCE.BOOK.SRD"
};
preLocalize("sourceBooks", { sort: true });

/* -------------------------------------------- */
/*  Enrichment                                  */
/* -------------------------------------------- */

let _enrichmentLookup;
Object.defineProperty(EOA, "enrichmentLookup", {
  get() {
    if ( !_enrichmentLookup ) {
      _enrichmentLookup = {
        abilities: foundry.utils.deepClone(EOA.abilities),
        skills: foundry.utils.deepClone(EOA.skills),
        tools: foundry.utils.deepClone(EOA.toolIds)
      };
      Object.values(EOA.abilities).forEach(a => _enrichmentLookup.abilities[a.fullKey] = a);
      Object.values(EOA.skills).forEach(s => _enrichmentLookup.skills[s.fullKey] = s);
    }
    return _enrichmentLookup;
  },
  enumerable: true
});

/* -------------------------------------------- */

/**
 * Patch an existing config enum to allow conversion from string values to object values without
 * breaking existing modules that are expecting strings.
 * @param {string} key          Key within EOA that has been replaced with an enum of objects.
 * @param {string} fallbackKey  Key within the new config object from which to get the fallback value.
 * @param {object} [options]    Additional options passed through to logCompatibilityWarning.
 */
function patchConfig(key, fallbackKey, options) {
  /** @override */
  function toString() {
    const message = `The value of CONFIG.EOA.${key} has been changed to an object.`
      +` The former value can be acccessed from .${fallbackKey}.`;
    foundry.utils.logCompatibilityWarning(message, options);
    return this[fallbackKey];
  }

  Object.values(EOA[key]).forEach(o => {
    if ( foundry.utils.getType(o) !== "Object" ) return;
    o.toString = toString;
  });
}

/* -------------------------------------------- */

export default EOA;
