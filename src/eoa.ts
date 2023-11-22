import { TemplatePreloader } from "./module/helper/TemplatePreloader";
import { EoABreedSheet } from "./module/items/BreedSheet";

Hooks.once("init", async () => {
    console.log("========================Edge of Anarchy=====================")
    console.log("=============================HMR============================")

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("eoa", EoABreedSheet, {makeDefault: true});
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