
/**
 * @extends {ItemSheet}
 */
export class EoABreedSheet extends ItemSheet {
  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["eoa", "sheet", "item"],
      template: "systems/eoa/templates/items/breed-sheet.html",
      width: 850,
      height: 480,
      tabs: [{navSelector: ".sheet-navigation", contentSelector: ".sheet-body", initial: "description"}],
      dragDrop: [{dragSelector: ".draggable", dropSelector: null}],
    });
  }

  /** @inheritdoc */
  getData() {
    const context = super.getData();

    console.log(context);
    // context.systemData = context.data.system;

    return context;
  }

  /** @inheritdoc */
  activateListeners(html) {
    super.activateListeners(html);

    // accessibility(this.item, html);

    // Everything below here is only needed if the sheet is editable
    if ( !this.isEditable ) return;
  }
}
