/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
export class EoAActorSheet extends ActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["boilerplate", "sheet", "actor"],
            template: "systems/eoa/templates/actor/actor-sheet.html",
            width: 800,
            height: 800,
            dragDrop: [{dragSelector: ".item-list .item", dropSelector: null}],
            tabs: [{navSelector: ".sheet-navigation", contentSelector: ".sheet-body", initial: "features"}]
        });
    }

    /** @override */
    get template() {
        return `systems/eoa/templates/actor/actor-${this.actor.type}-sheet.html`;
    }

    /* -------------------------------------------- */

    /** @override */
    getData() {
        // Retrieve the data structure from the base sheet. You can inspect or log
        // the context variable to see the structure, but some key properties for
        // sheets are the actor object, the data object, whether or not it's
        // editable, the items array, and the effects array.
        const context = super.getData();

        // Use a safe clone of the actor data for further operations.
        const actorData = this.actor.toObject(false);

        // Add the actor's data to context.data for easier access, as well as flags.
        // context.data = actorData.system;
        // context.flags = actorData.flags;
        context.config = CONFIG.eoa;
        context.breed = context.items.filter(function(item) { return item.type === "breed" })
        context.breed_dict = {};
        context.breed[0].system.skills.forEach((el) => {
            context.breed_dict[el.name] = `
                <div class="form-group" style="width: 100%">
                    <div class="flex1">
                        <label style="width: 100%; flex: none !important; text-align: left !important">${el.low}-${el.high}</label>
                    </div>
                    <div class="form-fields flex1">
                        <label style="width: 100%; flex: none !important; text-align: left !important">${el.name}</label>
                    </div>
                    <div class="form-fields flex4">
                        <label style="width: 100%; flex: none !important; text-align: left !important">${el.description}</label>
                    </div>
                </div>
            `;
        });
        context.breed_lifepath = context.data.system.background.breed_lifepath;
        context.origin = context.items.filter(function(item) { return item.type === "origin" })
        context.origin_dict = {};
        context.origin[0].system.life_path.forEach((el) => {
            context.origin_dict[el.name] = `
                <div class="form-group" style="width: 100%">
                    <div class="flex1">
                        <label style="width: 100%; flex: none !important; text-align: left !important">${el.low}-${el.high}</label>
                    </div>
                    <div class="form-fields flex1">
                        <label style="width: 100%; flex: none !important; text-align: left !important">${el.name}</label>
                    </div>
                    <div class="form-fields flex4">
                        <label style="width: 100%; flex: none !important; text-align: left !important">${el.description}</label>
                    </div>
                </div>
            `;
        });
        context.origin_lifepath = context.data.system.background.origin_lifepath;
        context.profession = context.items.filter(function(item) { return item.type === "profession" })
        context.skill = context.items.filter(function(item) { return item.type === "skill" })
        context.faction = context.items.filter(function(item) { return item.type === "faction" })
        context.faction_dict = {};
        context.faction[0].system.life_path.forEach((el) => {
            context.faction_dict[el.name] = `
                <div class="form-group" style="width: 100%">
                    <div class="flex1">
                        <label style="width: 100%; flex: none !important; text-align: left !important">${el.low}-${el.high}</label>
                    </div>
                    <div class="form-fields flex1">
                        <label style="width: 100%; flex: none !important; text-align: left !important">${el.name}</label>
                    </div>
                    <div class="form-fields flex4">
                        <label style="width: 100%; flex: none !important; text-align: left !important">${el.description}</label>
                    </div>
                </div>
            `;
        });
        context.faction_lifepath = context.data.system.background.faction_lifepath;
        // context.items = context.items.filter(function(item) { return ["breed", "origin", "profession", "faction"].includes(item) })
        console.log("getData");
        console.log(context);

        // Prepare character data and items.
        if (actorData.type === 'hero') {
            this._prepareItems(context);
            // this._prepareCharacterData(context);
        }

        // Prepare NPC data and items.
        if (actorData.type === 'npc') {
            this._prepareItems(context);
        }

        // Add roll data for TinyMCE editors.
        // context.rollData = context.actor.getRollData();

        // Prepare active effects
        // context.effects = prepareActiveEffectCategories(this.actor.effects);

        return context;
    }

    /**
     * Organize and classify Items for Character sheets.
     *
     * @param {Object} actorData The actor to prepare.
     *
     * @return {undefined}
     */
    _prepareItems(context) {
        // Initialize containers.
        const gear = [];
        const features = [];
        const spells = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: []
        };

        // Iterate through items, allocating to containers
        // for (let i of context.items) {
        //     i.img = i.img || DEFAULT_TOKEN;
        //     // Append to gear.
        //     if (i.type === 'item') {
        //         gear.push(i);
        //     }
        //     // Append to features.
        //     else if (i.type === 'feature') {
        //         features.push(i);
        //     }
        //     // Append to spells.
        //     else if (i.type === 'spell') {
        //         if (i.system.spellLevel != undefined) {
        //             spells[i.system.spellLevel].push(i);
        //         }
        //     }
        // }

        // Assign and return
        context.gear = gear;
        context.features = features;
        context.spells = spells;
    }

    /**
     * Organize and classify Items for Character sheets.
     *
     * @param {Object} actorData The actor to prepare.
     *
     * @return {undefined}
     */
    _prepareCharacterData(context) {
        // Handle ability scores.
        // for (let [k, v] of Object.entries(context.system.abilities)) {
        //     v.label = game.i18n.localize(CONFIG.BOILERPLATE.abilities[k]) ?? k;
        // }
        console.log("_prepareCharacterData");
        console.log(context);
    }

    /** @override */
    activateListeners(html) {
        super.activateListeners(html);

        // Render the item sheet for viewing/editing prior to the editable check.
        html.find('.item-edit').click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.items.get(li.data("itemId"));
            if ((item) && (item.sheet)) {
                item.sheet.render(true);
            }
        });

        // -------------------------------------------------------------
        // Everything below here is only needed if the sheet is editable
        if (!this.isEditable) return;

        // Add Inventory Item
        html.find('.item-create').click(this._onItemCreate.bind(this));

        // Delete Inventory Item
        html.find('.item-delete').click(ev => {
            const li = $(ev.currentTarget).parents(".item");
            const item = this.actor.items.get(li.data("itemId"));
            if ((item) && (item.sheet)) {
                item.delete();
            }
            li.slideUp(200, () => this.render(false));
        });

        html.find('.btn-minus').click(ev => {
            let input = $(ev.currentTarget).parents().siblings('input[type="text"]');
            let value = parseInt(input.val());
            if (value > 0) {
                input.val(value - 1);
            }
            console.log(input.data("skill"));
        });

        html.find('.btn-plus').click(ev => {
            let input = $(ev.currentTarget).parents().siblings('input[type="text"]');
            let value = parseInt(input.val());
            if (value < 10) {
                input.val(value + 1);
            }
            console.log(input.data("skill"));
        });

        html.find('.txt-skill').change(ev => {
            let input = $(ev.currentTarget);
            let value = parseInt(input.val());
            if (isNaN(value) || value < 0) {
                input.val(0);
            } else if (value > 10) {
                input.val(10);
            }
            console.log(input.data("skill"));
        });
    }

    /* -------------------------------------------- */

    /**
     * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
     * @param {Event} event   The originating click event
     * @private
     */
    async _onItemCreate(event) {
        event.preventDefault();
        const header = event.currentTarget;
        // Get the type of item to create.
        const type = header.dataset.type;
        // Grab any data associated with this control.
        const data = duplicate(header.dataset);
        // Initialize a default name.
        const name = `New ${type.capitalize()}`;
        // Prepare the item object.
        const itemData = {
            name: name,
            type: type,
            data: data
        };
        // Remove the type from the dataset since it's in the itemData.type prop.
        delete itemData.data["type"];

        // Finally, create the item!
        return await Item.create(itemData, {parent: this.actor});
    }

    /** @override */
    async _onDropItemCreate(itemData) {
        // let items = itemData instanceof Array ? itemData : [itemData];
        // console.log(items);
        // const toCreate = [];
        // for ( const item of items ) {
        //     const result = await this._onDropSingleItem(item);
        //     if ( result ) toCreate.push(result);
        // }
        //
        // // Create the owned items as normal
        // return this.actor.createEmbeddedDocuments("Item", toCreate);

        // console.log("_onDropItemCreate");
        // console.log(itemData);
        console.log("dropped item data");
        console.log(itemData);
        let all_items = this.getData();
        let item = null;
        if (["breed", "origin", "profession", "faction"].includes(itemData.type)) {
            let del_items = all_items.items.filter(function(item) { return ((item.type === itemData.type) && (item.id === itemData.id)) });
            console.log("delete");
            del_items.forEach((el) => {
                console.log(el);
                item = this.actor.items.get(el._id);
                if (item) {
                    console.log("item deleted");
                    item.delete();
                } else {
                    console.log("item not found");
                }
            });
            if (itemData.type === "profession") {
                console.log("profession change");
                let del_items = all_items.items.filter(function(item) { return (item.type === "skill") });
                // if skills are assigned, delete them on profession change
                if (del_items.length > 0) {
                    del_items.forEach((el) => {
                        item = this.actor.items.get(el._id);
                        if (item) {
                            item.delete();
                        }
                    });
                }
                // take skills for this profession from the compendium and add them to the character
                let skill_pack = game.packs.get("eoa.skills")
                let skill_index = Array.from(skill_pack.index)
                for (let skill of skill_index) {
                    let item = await skill_pack.getDocument(skill._id)
                    if (item.system.professions.includes(itemData.system.identifier)) {
                        // console.log(skill);
                        // this.actor.createOwnedItem(skill)
                        await this.actor.createEmbeddedDocuments('Item', [item])
                    }
                    // console.log(act.system.professions);
                    // let items = Array.from(act.items)
                    // let updates = []
                    // for (let item of items) {
                    //     console.log(item);
                    // }
                }
                // console.log(all_items);
                // const pack = game.packs.get("eoa.skills");
                // await pack.getIndex();
                // // const effectId = pack.index.find(e => e.name === effectName)._id;
                // const actor = game.user.character;
                // console.log(pack.index);
                // let e = null;
                // pack.index.forEach((el) => {
                //     e = pack.getEntry(el._id);
                // });
                // let add_items = all_items.items.filter(function(item) { return ((item.type === "profession") && (item.system.data.professions.includes(all_items.system.data.))) });

            }
        }
        // console.log("post change data & list");
        // console.log(itemData);
        // console.log(all_items);
        return super._onDropItemCreate(itemData);
    }

    async _onDropSingleItem(itemData) {
        return super._onDropSingleItem(itemData);
    }

    // async function freeSkillRank(skill: GenesysItem<SkillDataModel>, adjustment: number) {
    //     await toRaw(skill).update({
    //         'system.rank': Math.max(0, skill.systemData.rank + adjustment),
    //     });
    // }

}
