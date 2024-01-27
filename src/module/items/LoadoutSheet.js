
/**
 * @extends {ItemSheet}
 */
export class EoALoadoutSheet extends ItemSheet {
  /** @inheritdoc */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["eoa", "sheet", "item"],
      template: "systems/eoa/templates/items/loadout-sheet.html",
      width: 850,
      height: 480,
      tabs: [{navSelector: ".sheet-navigation", contentSelector: ".sheet-body", initial: "description"}],
      dragDrop: [{dragSelector: ".draggable", dropSelector: null}],
    });
  }

  /** @inheritdoc */
  getData() {
    const context = super.getData();

    context.effective_range_choices = {engaged: "Engaged", melee: "Melee", close: "Close", near: "Near", mid: "Mid", far: "Far"};
    context.primary_damage_formula = context.data.system.primary_weapon.damage_formula;
    context.special_damage_formula = context.data.system.special_weapon.damage_formula;
    context.heavy_damage_formula = context.data.system.heavy_weapon.damage_formula;
    context.melee_damage_formula = context.data.system.melee_attack.damage_formula;

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
