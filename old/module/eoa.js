/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */


import { register as registerItems, CharacterCreationItemTypes, EquipmentItemTypes } from './item/index.js';


Hooks.once('init', async () => {
	console.debug('EoA | Initializing...');

	// System Documents
	// registerActors();
	// registerEffects();
	registerItems();

	// Misc. modules with one-time registrations
	// registerCombat();
	// registerEnrichers();
	// registerFonts();
	// registerDice();
	// registerHandlebarsHelpers();
	// registerSettings();
	// registerConfig();

	console.debug('EoA | Initialization Complete.');
});


// Import Configuration
// import EOA from "./module/config.mjs";
// import registerSystemSettings from "./module/settings.mjs";

// Import Submodules
// import * as applications from "./module/applications/_module.mjs";
// import * as canvas from "./module/canvas/_module.mjs";
// import * as dataModels from "./module/data/_module.mjs";
// import * as dice from "./module/dice/_module.mjs";
// import * as documents from "./module/documents/_module.mjs";
// import * as enrichers from "./module/enrichers.mjs";
// import * as migrations from "./module/migration.mjs";
// import * as utils from "./module/utils.mjs";
// import {ModuleArt} from "./module/module-art.mjs";

/* -------------------------------------------- */
/*  Define Module Structure                     */
/* -------------------------------------------- */

// globalThis.EOA = {
//   applications,
//   canvas,
//   config: EOA,
//   dataModels,
//   dice,
//   documents,
//   enrichers,
//   migrations,
//   utils
// };

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

// Hooks.once("init", function() {
//   console.log("EOA | Initializing the EOA Game System")
  // globalThis.EOA = game.EOA = Object.assign(game.system, globalThis.EOA);
  // console.log(`Version ${EOA.version}\n${EOA.ASCII}`);

  // Record Configuration Values
  // CONFIG.EOA = EOA;
  // CONFIG.ActiveEffect.documentClass = documents.ActiveEffectEoA;
  // CONFIG.Actor.documentClass = documents.ActorEoA;
  // CONFIG.Item.documentClass = documents.ItemEoA;
  // CONFIG.Token.documentClass = documents.TokenDocumentEoA;
  // CONFIG.Token.objectClass = canvas.TokenEoA;
  // CONFIG.time.roundTime = 6;
  // CONFIG.Dice.DamageRoll = dice.DamageRoll;
  // CONFIG.Dice.D20Roll = dice.D20Roll;
  // CONFIG.MeasuredTemplate.defaults.angle = 53.13;
  // CONFIG.ui.combat = applications.combat.CombatTrackerEoA;
  // game.EOA.isV10 = game.release.generation < 11;

  // Register System Settings
  // registerSystemSettings();

  // Validation strictness.
  // if ( game.EOA.isV10 ) _determineValidationStrictness();

  // Configure module art.
  // game.EOA.moduleArt = new ModuleArt();

  // Remove honor & sanity from configuration if they aren't enabled
  // if ( !game.settings.get("EOA", "honorScore") ) delete EOA.abilities.hon;
  // if ( !game.settings.get("EOA", "sanityScore") ) delete EOA.abilities.san;

  // Configure trackable & consumable attributes.
  // _configureTrackableAttributes();
  // _configureConsumableAttributes();

  // Patch Core Functions
  // Combatant.prototype.getInitiativeRoll = documents.combat.getInitiativeRoll;

  // Register Roll Extensions
  // CONFIG.Dice.rolls.push(dice.D20Roll);
  // CONFIG.Dice.rolls.push(dice.DamageRoll);

  // Hook up system data types
  // const modelType = game.EOA.isV10 ? "systemDataModels" : "dataModels";
  // CONFIG.Actor[modelType] = dataModels.actor.config;
  // CONFIG.Item[modelType] = dataModels.item.config;
  // CONFIG.JournalEntryPage[modelType] = dataModels.journal.config;

  // Register sheet application classes
  // Actors.unregisterSheet("core", ActorSheet);
  // Actors.registerSheet("EOA", applications.actor.ActorSheetEoACharacter, {
  //   types: ["character"],
  //   makeDefault: true,
  //   label: "EOA.SheetClassCharacter"
  // });
  // Actors.registerSheet("EOA", applications.actor.ActorSheetEoANPC, {
  //   types: ["npc"],
  //   makeDefault: true,
  //   label: "EOA.SheetClassNPC"
  // });
  // Actors.registerSheet("EOA", applications.actor.ActorSheetEoAVehicle, {
  //   types: ["vehicle"],
  //   makeDefault: true,
  //   label: "EOA.SheetClassVehicle"
  // });
  // Actors.registerSheet("EOA", applications.actor.GroupActorSheet, {
  //   types: ["group"],
  //   makeDefault: true,
  //   label: "EOA.SheetClassGroup"
  // });

  // Items.unregisterSheet("core", ItemSheet);
  // Items.registerSheet("EOA", applications.item.ItemSheetEoA, {
  //   makeDefault: true,
  //   label: "EOA.SheetClassItem"
  // });
  // DocumentSheetConfig.registerSheet(JournalEntryPage, "EOA", applications.journal.JournalClassPageSheet, {
  //   label: "EOA.SheetClassClassSummary",
  //   types: ["class"]
  // });

  // Preload Handlebars helpers & partials
  // utils.registerHandlebarsHelpers();
  // utils.preloadHandlebarsTemplates();

  // enrichers.registerCustomEnrichers();
// });

/**
 * Determine if this is a 'legacy' world with permissive validation, or one where strict validation is enabled.
 * @internal
 */
// function _determineValidationStrictness() {
//   dataModels.SystemDataModel._enableV10Validation = game.settings.get("EOA", "strictValidation");
// }

/**
 * Update the world's validation strictness setting based on whether validation errors were encountered.
 * @internal
 */
// async function _configureValidationStrictness() {
//   if ( !game.user.isGM ) return;
//   const invalidDocuments = game.actors.invalidDocumentIds.size + game.items.invalidDocumentIds.size
//     + game.scenes.invalidDocumentIds.size;
//   const strictValidation = game.settings.get("EOA", "strictValidation");
//   if ( invalidDocuments && strictValidation ) {
//     await game.settings.set("EOA", "strictValidation", false);
//     game.socket.emit("reload");
//     foundry.utils.debouncedReload();
//   }
// }

/**
 * Configure explicit lists of attributes that are trackable on the token HUD and in the combat tracker.
 * @internal
 */
// function _configureTrackableAttributes() {
//   const common = {
//     bar: [],
//     value: [
//       ...Object.keys(EOA.abilities).map(ability => `abilities.${ability}.value`),
//       ...Object.keys(EOA.movementTypes).map(movement => `attributes.movement.${movement}`),
//       "attributes.ac.value", "attributes.init.total"
//     ]
//   };
//
//   const creature = {
//     bar: [...common.bar, "attributes.hp", "spells.pact"],
//     value: [
//       ...common.value,
//       ...Object.keys(EOA.skills).map(skill => `skills.${skill}.passive`),
//       ...Object.keys(EOA.senses).map(sense => `attributes.senses.${sense}`),
//       "attributes.spelldc"
//     ]
//   };
//
//   CONFIG.Actor.trackableAttributes = {
//     character: {
//       bar: [...creature.bar, "resources.primary", "resources.secondary", "resources.tertiary", "details.xp"],
//       value: [...creature.value]
//     },
//     npc: {
//       bar: [...creature.bar, "resources.legact", "resources.legres"],
//       value: [...creature.value, "details.cr", "details.spellLevel", "details.xp.value"]
//     },
//     vehicle: {
//       bar: [...common.bar, "attributes.hp"],
//       value: [...common.value]
//     },
//     group: {
//       bar: [],
//       value: []
//     }
//   };
// }

/**
 * Configure which attributes are available for item consumption.
 * @internal
 */
// function _configureConsumableAttributes() {
//   CONFIG.EOA.consumableResources = [
//     ...Object.keys(EOA.abilities).map(ability => `abilities.${ability}.value`),
//     "attributes.ac.flat",
//     "attributes.hp.value",
//     ...Object.keys(EOA.senses).map(sense => `attributes.senses.${sense}`),
//     ...Object.keys(EOA.movementTypes).map(type => `attributes.movement.${type}`),
//     ...Object.keys(EOA.currencies).map(denom => `currency.${denom}`),
//     "details.xp.value",
//     "resources.primary.value", "resources.secondary.value", "resources.tertiary.value",
//     "resources.legact.value", "resources.legres.value",
//     "spells.pact.value",
//     ...Array.fromRange(Object.keys(EOA.spellLevels).length - 1, 1).map(level => `spells.spell${level}.value`)
//   ];
// }

/* -------------------------------------------- */
/*  Foundry VTT Setup                           */
/* -------------------------------------------- */

/**
 * Prepare attribute lists.
 */
Hooks.once("setup", function() {
  // CONFIG.EOA.trackableAttributes = expandAttributeList(CONFIG.EOA.trackableAttributes);
  // // game.EOA.moduleArt.registerModuleArt();
  //
  // // Apply custom compendium styles to the SRD rules compendium.
  // if ( !game.EOA.isV10 ) {
  //   const rules = game.packs.get("EOA.rules");
  //   rules.applicationClass = applications.journal.SRDCompendium;
  // }
});

/* --------------------------------------------- */

/**
 * Expand a list of attribute paths into an object that can be traversed.
 * @param {string[]} attributes  The initial attributes configuration.
 * @returns {object}  The expanded object structure.
 */
// function expandAttributeList(attributes) {
//   return attributes.reduce((obj, attr) => {
//     foundry.utils.setProperty(obj, attr, true);
//     return obj;
//   }, {});
// }

/* --------------------------------------------- */

/**
 * Perform one-time pre-localization and sorting of some configuration objects
 */
// Hooks.once("i18nInit", () => utils.performPreLocalization(CONFIG.EOA));

/* -------------------------------------------- */
/*  Foundry VTT Ready                           */
/* -------------------------------------------- */

/**
 * Once the entire VTT framework is initialized, check to see if we should perform a data migration
 */
Hooks.once("ready", function() {
  // if ( game.EOA.isV10 ) {
  //   // Configure validation strictness.
  //   _configureValidationStrictness();
  //
  //   // Apply custom compendium styles to the SRD rules compendium.
  //   const rules = game.packs.get("EOA.rules");
  //   rules.apps = [new applications.journal.SRDCompendium(rules)];
  // }
  //
  // // Wait to register hotbar drop hook on ready so that modules could register earlier if they want to
  // Hooks.on("hotbarDrop", (bar, data, slot) => {
  //   if ( ["Item", "ActiveEffect"].includes(data.type) ) {
  //     documents.macro.createEoAMacro(data, slot);
  //     return false;
  //   }
  // });
  //
  // // Determine whether a system migration is required and feasible
  // if ( !game.user.isGM ) return;
  // const cv = game.settings.get("EOA", "systemMigrationVersion") || game.world.flags.EOA?.version;
  // const totalDocuments = game.actors.size + game.scenes.size + game.items.size;
  // if ( !cv && totalDocuments === 0 ) return game.settings.set("EOA", "systemMigrationVersion", game.system.version);
  // if ( cv && !isNewerVersion(game.system.flags.needsMigrationVersion, cv) ) return;
  //
  // // Perform the migration
  // if ( cv && isNewerVersion(game.system.flags.compatibleMigrationVersion, cv) ) {
  //   ui.notifications.error("MIGRATION.EoAVersionTooOldWarning", {localize: true, permanent: true});
  // }
  // migrations.migrateWorld();
});

/* -------------------------------------------- */
/*  Canvas Initialization                       */
/* -------------------------------------------- */

Hooks.on("canvasInit", gameCanvas => {
  // gameCanvas.grid.diagonalRule = game.settings.get("EOA", "diagonalMovement");
  // SquareGrid.prototype.measureDistances = canvas.measureDistances;
});

/* -------------------------------------------- */
/*  Other Hooks                                 */
/* -------------------------------------------- */

// Hooks.on("renderChatMessage", documents.chat.onRenderChatMessage);
// Hooks.on("getChatLogEntryContext", documents.chat.addChatMessageContextOptions);
//
// Hooks.on("renderChatLog", (app, html, data) => documents.ItemEoA.chatListeners(html));
// Hooks.on("renderChatPopout", (app, html, data) => documents.ItemEoA.chatListeners(html));
// Hooks.on("getActorDirectoryEntryContext", documents.ActorEoA.addDirectoryContextOptions);

/* -------------------------------------------- */
/*  Bundled Module Exports                      */
/* -------------------------------------------- */

// export {
//   applications,
//   canvas,
//   dataModels,
//   dice,
//   documents,
//   enrichers,
//   migrations,
//   utils,
//   EOA
// };
