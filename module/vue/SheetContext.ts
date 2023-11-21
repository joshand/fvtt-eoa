/**
 * The Edge of Anarchy game system for Foundry Virtual Tabletop
 * A system for playing EoA
 * Author: Josh Anderson
 * Software License: MIT
 */

import GameActor from '../actor/GameActor';
import GameItem from '../item/GameItem';
import BaseItemDataModel from '../item/data/BaseItemDataModel';
import GameItemSheet from '../item/GameItemSheet';
import GameActorSheet from '../actor/GameActorSheet';

export type ContextBase = { [key: string]: any };

/**
 * This symbol is used by Vue apps in the system to inject sheet data.
 */
export const RootContext = Symbol('Vue Root Context');

/**
 * Typing for context data injected into Vue sheets.
 */
export interface BaseSheetContext<
	DocumentType extends foundry.abstract.Document = foundry.abstract.Document,
	SheetOptionsType extends DocumentSheetOptions = DocumentSheetOptions,
	SheetType extends DocumentSheet<DocumentType, SheetOptionsType> = DocumentSheet<DocumentType, SheetOptionsType>,
	SheetDataType extends DocumentSheetData<DocumentType> = DocumentSheetData<DocumentType>,
> extends ContextBase {
	/**
	 * A reference to the Sheet instance the vue app is rendering.
	 */
	sheet: SheetType;

	/**
	 * Rendering context data retrieved from `getData()`.
	 */
	data: SheetDataType;
}

export interface GameActorSheetData<ActorDataModel extends foundry.abstract.DataModel = foundry.abstract.DataModel> extends ActorSheetData<GameActor<ActorDataModel>> {
	actor: GameActor<ActorDataModel>;
}

/**
 * Typing for context data injected into Vue Actor sheets.
 */
export interface ActorSheetContext<
	ActorDataModel extends foundry.abstract.DataModel = foundry.abstract.DataModel,
	SheetType extends GameActorSheet<ActorDataModel> = GameActorSheet<ActorDataModel>,
	SheetDataType extends GameActorSheetData<ActorDataModel> = GameActorSheetData<ActorDataModel>,
> extends ContextBase {
	/**
	 * A reference to the Sheet instance the vue app is rendering.
	 */
	sheet: SheetType;

	/**
	 * Rendering context data retrieved from `getData()`.
	 */
	data: SheetDataType;
}

export interface GameItemSheetData<ItemDataModel extends BaseItemDataModel = BaseItemDataModel> extends ItemSheetData<GameItem<ItemDataModel>> {
	item: GameItem<ItemDataModel>;
}

/**
 * Typing for context data injected into Vue Item sheets.
 */
export interface ItemSheetContext<
	ItemDataModel extends BaseItemDataModel = BaseItemDataModel,
	SheetType extends GameItemSheet<ItemDataModel> = GameItemSheet<ItemDataModel>,
	SheetDataType extends GameItemSheetData<ItemDataModel> = GameItemSheetData<ItemDataModel>,
> extends ContextBase {
	/**
	 * A reference to the Sheet instance the vue app is rendering.
	 */
	sheet: SheetType;

	/**
	 * Rendering context data retrieved from `getData()`.
	 */
	data: SheetDataType;
}
