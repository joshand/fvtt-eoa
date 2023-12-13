
export class EoAActor extends Actor {

    /** @override */
    prepareData() {
        super.prepareData();
    }

    prepareBaseData() {

    }

    prepareDerivedData() {
        const actorData = this.data;
        const data = actorData.data;
        const flags = actorData.flags.boilerplate || {};

        console.log("prepareDerivedData");
        console.log(data);
        console.log(flags);

        // Make separate methods for each Actor type (character, npc, etc.) to keep
        // things organized.
        this._prepareCharacterData(actorData);
        this._prepareNpcData(actorData);
    }

    /**
    * Prepare Character type specific data
    */
    _prepareCharacterData(actorData) {
        if (actorData.type !== 'hero') return;

        // Make modifications to data here. For example:
        // const data = actorData.data;
        console.log("_prepareCharacterData");
        console.log(actorData.data);

        // Loop through ability scores, and add their modifiers to our sheet output.
        // for (let [key, ability] of Object.entries(data.abilities)) {
        //     // Calculate the modifier using d20 rules.
        //     ability.mod = Math.floor((ability.value - 10) / 2);
        // }
    }

    /**
    * Prepare NPC type specific data.
    */
    _prepareNpcData(actorData) {
        if (actorData.type !== 'npc') return;

        // Make modifications to data here. For example:
        // const data = actorData.data;
        console.log("_prepareNpcData");
        console.log(actorData.data);
        // data.xp = (data.cr * data.cr) * 100;
    }

    /**
     * Override getRollData() that's supplied to rolls.
     */
    getRollData() {
        const data = super.getRollData();

        // Prepare character roll data.
        this._getCharacterRollData(data);
        this._getNpcRollData(data);

        return data;
    }

    /**
     * Prepare character roll data.
     */
    _getCharacterRollData(data) {
        if (this.data.type !== 'hero') return;

        // Copy the ability scores to the top level, so that rolls can use
        // formulas like `@str.mod + 4`.
        // if (data.abilities) {
        //     for (let [k, v] of Object.entries(data.abilities)) {
        //         data[k] = foundry.utils.deepClone(v);
        //     }
        // }

        // Add level for easier access, or fall back to 0.
        // if (data.attributes.level) {
        //     data.lvl = data.attributes.level.value ?? 0;
        // }
        console.log("_getCharacterRollData");
        console.log(data);
    }

    /**
     * Prepare NPC roll data.
     */
    _getNpcRollData(data) {
        if (this.data.type !== 'npc') return;

        // Process additional NPC data here.
        console.log("_getNpcRollData");
        console.log(data);
    }
}