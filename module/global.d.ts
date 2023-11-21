/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameActor from '../actor/GameActor';
import GameEffect from '../effects/GameEffect';
import GameItem from '../item/GameItem';
import GameCombat from '../combat/GameCombat';
import GameCombatant from '../combat/GameCombatant';
import GameCombatTracker from '../combat/GameCombatTracker';
import { GAME_CONFIG } from '../config';

declare global {
	const ui: FoundryUI;
	const canvas: Canvas;

	interface GameConfig
		extends Config<
			AmbientLightDocument,
			GameEffect,
			GameActor,
			ActorDirectory<GameActor>,
			ChatLog,
			ChatMessage,
			GameCombat,
			GameCombatant,
			GameCombatTracker,
			CompendiumDirectory,
			Hotbar,
			GameItem,
			Macro,
			MeasuredTemplateDocument,
			TileDocument,
			TokenDocument,
			Scene,
			User,
			EffectsCanvasGroup
		> {
		eoa: typeof GAME_CONFIG;
	}

	// Override the typings for various CONFIG values in order to provide strongly-typed config within the system.
	const CONFIG: GameConfig;

	const game: Game<GameActor, Actors, ChatMessage, GameCombat, GameItem, Macro, Scene, User>;
}
