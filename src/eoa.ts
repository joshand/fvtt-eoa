import { TemplatePreloader } from "./module/helper/TemplatePreloader";
import { EoABreedSheet } from "./module/items/BreedSheet";
import { EoAProfessionSheet } from "./module/items/ProfessionSheet";
import { EoAOriginSheet } from "./module/items/OriginSheet";
import { EoAFactionSheet } from "./module/items/FactionSheet";
import * as Dice from "./helpers/dice.js";

Hooks.once("init", async () => {
    console.log("========================Edge of Anarchy=====================")
    console.log("============================Load============================")

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("eoa", EoABreedSheet, {
        types: ["breed"],
        makeDefault: true
    });
    Items.registerSheet("eoa", EoAProfessionSheet, {
        types: ["profession"],
        makeDefault: true
    });
    Items.registerSheet("eoa", EoAOriginSheet, {
        types: ["origin"],
        makeDefault: true
    });
    Items.registerSheet("eoa", EoAFactionSheet, {
        types: ["faction"],
        makeDefault: true
    });

    Handlebars.registerHelper("face", Dice.diceToFaces);

    Handlebars.registerHelper('ifCond', function(v1, v2, options) {
      if(v1 === v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    });
});

Hooks.once("ready", async () => {
    console.log("========================Edge of Anarchy=======================")
    console.log("=============================Ready============================")

});


if (process.env.NODE_ENV === "development") {
    if (module.hot) {
        module.hot.accept();

        if (module.hot.status() === "apply") {
            for (const template in _templateCache) {
                if (Object.prototype.hasOwnProperty.call(_templateCache, template)) {
                    delete _templateCache[template];
                }
            }

            TemplatePreloader.preloadHandlebarsTemplates().then(() => {
                for (const application in ui.windows) {
                    if (Object.prototype.hasOwnProperty.call(ui.windows, application)) {
                        ui.windows[application].render(true);
                    }
                }
            });
        }
    }
}