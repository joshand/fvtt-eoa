/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

/**
 * Current Story Points data.
 */
export const KEY_STORY_POINTS = 'storyPoints';

/**
 * Structure of actual story point data stored in settings.
 */
export type StoryPointData = {
	/**
	 * Number of Story Points available to players.
	 */
	gm: number;

	/**
	 * Number of Story Points available to the GM.
	 */
	player: number;
};

export function register(namespace: string) {
	game.settings.register(namespace, KEY_STORY_POINTS, {
		name: 'StoryPoints',
		scope: 'world',
		config: false,
		default: {
			gm: 0,
			player: 0,
		},
		type: Object,
	});
}
