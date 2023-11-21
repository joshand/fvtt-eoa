/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import { register as registerCampaignSettings } from './campaign';
import { register as registerStoryPoints } from './storyPoints';
import { register as registerUser } from './user';

import { register as registerAlpha } from './alpha';

/**
 * Namespace used to access system settings from {@link Game.settings}.
 */
export const NAMESPACE = 'eoa';

/**
 * Register all system settings.
 */
export function register() {
	registerCampaignSettings(NAMESPACE);
	registerStoryPoints(NAMESPACE);
	registerUser(NAMESPACE);

	registerAlpha(NAMESPACE);
}
