/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/templates/items/breed-sheet.html":
/*!*************************************************!*\
  !*** ./static/templates/items/breed-sheet.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.RaceName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Description Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                {{editor data.system.description.value target=\"system.description.value\" button=true owner=owner editable=editable}}\n            </div>\n\n            <div>\n                <br><br><strong>Lifepath Table (Roll 2d6 or Choose):</strong><hr>\n                {{#each data.system.skills as | skill |}}\n\n                <div class=\"form-group\">\n                    <label>{{skill.low}}-{{skill.high}}</label>\n                    <div class=\"form-fields\">\n                        <input type=\"text\" name=\"data.system.skills.{{@index}}.name\" value=\"{{skill.name}}\"\n                               placeholder=\"{{skill.name}}\">\n                        <input type=\"text\" name=\"data.system.skills.{{@index}}.description\" value=\"{{skill.description}}\"\n                               placeholder=\"{{skill.description}}\">\n                    </div>\n                    <label><ul><li><strong>Attributes:</strong> Str {{skill.str}}, Sta {{skill.sta}}, Agi {{skill.agi}}, Int {{skill.int}}, Sen {{skill.sen}}, Psy {{skill.psy}}</li></ul></label>\n                </div>\n\n                {{/each}}\n            </div>\n        </div>\n    </section>\n</form>\n");

/***/ }),

/***/ "./static/templates/items/origin-sheet.html":
/*!**************************************************!*\
  !*** ./static/templates/items/origin-sheet.html ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n  {{!-- Item Sheet Header --}}\n  <header class=\"sheet-header flexrow\">\n    <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n    <div class=\"header-details flexrow\">\n      <h1 class=\"charname\">\n        <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.OriginName'}}\">\n      </h1>\n\n      <div class=\"item-subtitle\">\n        <h4 class=\"item-type\">{{itemType}}</h4>\n        <span class=\"item-status\">{{itemStatus}}</span>\n      </div>\n    </div>\n  </header>\n\n  {{!-- Item Sheet Navigation --}}\n  <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n    <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n  </nav>\n\n  {{!-- Item Sheet Body --}}\n  <section class=\"sheet-body\">\n\n    {{!-- Description Tab --}}\n    <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n      <div class=\"item-properties\">\n        &nbsp;\n      </div>\n\n      <div class=\"description\">\n          {{editor data.system.description.value target=\"system.description.value\" button=true owner=owner editable=editable}}\n      </div>\n\n    </div>\n  </section>\n</form>\n");

/***/ }),

/***/ "./static/templates/items/profession-sheet.html":
/*!******************************************************!*\
  !*** ./static/templates/items/profession-sheet.html ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.RaceName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n        <a class=\"item\" data-tab=\"signature-ability\">{{localize \"EOA.SignatureAbility\"}}</a>\n        {{#each data.system.description.skills as | skill |}}\n        <a class=\"item\" data-tab=\"{{skill.name}}\">{{skill.name}}</a>\n        {{/each}}\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Description Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <!--      <div class=\"item-properties\">-->\n            <!--        &nbsp;-->\n            <!--      </div>-->\n\n            <div class=\"description\">\n                <br>\n                {{editor data.system.description.overview target=\"system.description.overview\" button=true owner=owner editable=editable}}\n            </div>\n\n        </div>\n\n        {{!-- Signature Ability Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"signature-ability\">\n\n            <div>\n                <br>\n                <div class=\"form-group\">\n                    <label>Signature Ability</label>\n                    <div class=\"form-fields\">\n                        <input type=\"text\" name=\"data.system.description.signature_ability\" value=\"{{data.system.description.signature_ability}}\"\n                               placeholder=\"{{data.system.description.signature_ability}}\">\n                    </div>\n                </div>\n\n<!--                <strong>Signature Ability:</strong> <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{data.system.description.signature_ability}}\" value=\"{{data.system.description.signature_ability}}\" />-->\n\n                <br><br><strong>Description:</strong><br>\n                {{editor data.system.description.signature_description target=\"system.description.signature_description\" button=true owner=owner editable=editable}}\n            </div>\n\n        </div>\n\n        {{!-- Skills Tabs --}}\n        {{#each data.system.skills as | skill |}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"{{skill.name}}\">\n\n            <div>\n                {{i}}\n                <br>\n                <div class=\"form-group\">\n                    <label>Description</label>\n                    <div class=\"form-fields\">\n                        <input type=\"text\" name=\"data.system.skills.{{@index}}.description\" value=\"{{skill.description}}\"\n                               placeholder=\"{{skill.description}}\">\n                    </div>\n                </div>\n<!--                <strong>Description:</strong> <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{skill.description}}\" value=\"{{skill.description}}\" />-->\n\n                <br><br><strong>Nanoprograms:</strong><hr>\n                {{#each skill.programs as | pgm |}}\n\n                <div class=\"form-group\">\n                    <label>Name</label>\n                    <div class=\"form-fields\">\n                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.name\" value=\"{{pgm.name}}\"\n                               placeholder=\"{{pgm.name}}\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Description</label>\n                    <div class=\"form-fields\">\n                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.name\" value=\"{{pgm.description}}\"\n                               placeholder=\"{{pgm.description}}\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Nanopoint Cost</label>\n                    <div class=\"form-fields\">\n                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.np\" value=\"{{pgm.np}}\"\n                               placeholder=\"{{pgm.np}}\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>NCU</label>\n                    <div class=\"form-fields\">\n                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.ncu\" value=\"{{pgm.ncu}}\"\n                               placeholder=\"{{pgm.ncu}}\">\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Effect</label>\n                    <div class=\"form-fields\">\n                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.effect\" value=\"{{pgm.effect}}\"\n                               placeholder=\"{{pgm.effect}}\">\n                    </div>\n                </div>\n\n<!--                    <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{pgm.name}}\" value=\"{{pgm.name}}\" />-->\n<!--                    <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{pgm.description}}\" value=\"{{pgm.description}}\" placeholder=\"Description\" />-->\n<!--                    <label class=\"eoa-inline-label\">Nanopoint Cost: </label><input class=\"eoa-inline-box eoa-width-30\" type=\"text\" name=\"{{pgm.np}}\" value=\"{{pgm.np}}\" />-->\n<!--                    <label class=\"eoa-inline-label\">NCU: </label><input class=\"eoa-inline-box eoa-width-30\" type=\"text\" name=\"{{pgm.ncu}}\" value=\"{{pgm.ncu}}\" />-->\n<!--                    <label class=\"eoa-inline-label\">Effect: </label><input class=\"eoa-inline-box eoa-width-480\" type=\"text\" name=\"{{pgm.effect}}\" value=\"{{pgm.effect}}\" />-->\n                <hr>\n                {{/each}}\n            </div>\n\n        </div>\n        {{/each}}\n    </section>\n\n<!--    <footer class=\"sheet-footer\">-->\n<!--        <button type=\"submit\"><i class=\"fas fa-save\"></i> {{localize submitText}}</button>-->\n<!--    </footer>-->\n</form>\n");

/***/ }),

/***/ "./src/module/helper/TemplatePreloader.ts":
/*!************************************************!*\
  !*** ./src/module/helper/TemplatePreloader.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplatePreloader: () => (/* binding */ TemplatePreloader)
/* harmony export */ });
/* harmony import */ var _static_templates_items_breed_sheet_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../static/templates/items/breed-sheet.html */ "./static/templates/items/breed-sheet.html");
/* harmony import */ var _static_templates_items_origin_sheet_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/templates/items/origin-sheet.html */ "./static/templates/items/origin-sheet.html");
/* harmony import */ var _static_templates_items_profession_sheet_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/templates/items/profession-sheet.html */ "./static/templates/items/profession-sheet.html");



class TemplatePreloader {
    /**
     * Preload a set of templates to compile and cache them for fast access during rendering
     */
    static async preloadHandlebarsTemplates() {
        const templatePaths = ["modules/template/templates/items/profession-sheet.html", "modules/template/templates/items/origin-sheet.html", "modules/template/templates/items/breed-sheet.html"];
        return loadTemplates(templatePaths);
    }
}


/***/ }),

/***/ "./src/module/items/BreedSheet.ts":
/*!****************************************!*\
  !*** ./src/module/items/BreedSheet.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EoABreedSheet: () => (/* binding */ EoABreedSheet)
/* harmony export */ });
/**
 * @extends {ItemSheet}
 */
class EoABreedSheet extends ItemSheet {
    /** @inheritdoc */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["eoa", "sheet", "item"],
            template: "systems/eoa/templates/items/breed-sheet.html",
            width: 850,
            height: 480,
            tabs: [{ navSelector: ".sheet-navigation", contentSelector: ".sheet-body", initial: "description" }],
            dragDrop: [{ dragSelector: ".draggable", dropSelector: null }],
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
        if (!this.isEditable)
            return;
    }
}


/***/ }),

/***/ "./src/module/items/OriginSheet.ts":
/*!*****************************************!*\
  !*** ./src/module/items/OriginSheet.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EoAOriginSheet: () => (/* binding */ EoAOriginSheet)
/* harmony export */ });
/**
 * @extends {ItemSheet}
 */
class EoAOriginSheet extends ItemSheet {
    /** @inheritdoc */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["eoa", "sheet", "item"],
            template: "systems/eoa/templates/items/origin-sheet.html",
            width: 850,
            height: 480,
            tabs: [{ navSelector: ".sheet-navigation", contentSelector: ".sheet-body", initial: "description" }],
            dragDrop: [{ dragSelector: ".draggable", dropSelector: null }],
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
        if (!this.isEditable)
            return;
    }
}


/***/ }),

/***/ "./src/module/items/ProfessionSheet.ts":
/*!*********************************************!*\
  !*** ./src/module/items/ProfessionSheet.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EoAProfessionSheet: () => (/* binding */ EoAProfessionSheet)
/* harmony export */ });
class EoAProfessionSheet extends ItemSheet {
    /** @inheritdoc */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["eoa", "sheet", "item"],
            template: "systems/eoa/templates/items/profession-sheet.html",
            width: 850,
            height: 480,
            tabs: [{ navSelector: ".sheet-navigation", contentSelector: ".sheet-body", initial: "description" }],
            dragDrop: [{ dragSelector: ".draggable", dropSelector: null }],
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
        if (!this.isEditable)
            return;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/eoa.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_helper_TemplatePreloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/helper/TemplatePreloader */ "./src/module/helper/TemplatePreloader.ts");
/* harmony import */ var _module_items_BreedSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/items/BreedSheet */ "./src/module/items/BreedSheet.ts");
/* harmony import */ var _module_items_ProfessionSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/items/ProfessionSheet */ "./src/module/items/ProfessionSheet.ts");
/* harmony import */ var _module_items_OriginSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/items/OriginSheet */ "./src/module/items/OriginSheet.ts");




Hooks.once("init", async () => {
    console.log("========================Edge of Anarchy=====================");
    console.log("============================Load============================");
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("eoa", _module_items_BreedSheet__WEBPACK_IMPORTED_MODULE_1__.EoABreedSheet, {
        types: ["breed"],
        makeDefault: true
    });
    Items.registerSheet("eoa", _module_items_ProfessionSheet__WEBPACK_IMPORTED_MODULE_2__.EoAProfessionSheet, {
        types: ["profession"],
        makeDefault: true
    });
    Items.registerSheet("eoa", _module_items_OriginSheet__WEBPACK_IMPORTED_MODULE_3__.EoAOriginSheet, {
        types: ["origin"],
        makeDefault: true
    });
    Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });
});
Hooks.once("ready", async () => {
    console.log("========================Edge of Anarchy=======================");
    console.log("=============================Ready============================");
});
if (true) {
    if (false) {}
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsbUVBQWEsRUFBRTtRQUN0QyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDaEIsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsNkVBQWtCLEVBQUU7UUFDM0MsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3JCLFdBQVcsRUFBRSxJQUFJO0tBQ3BCLENBQUMsQ0FBQztJQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLHFFQUFjLEVBQUU7UUFDdkMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQ2pCLFdBQVcsRUFBRSxJQUFJO0tBQ3BCLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFVBQVMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPO1FBQzlELE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUM7SUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQztBQUVqRixDQUFDLENBQUMsQ0FBQztBQUdILElBQUksSUFBc0MsRUFBRSxDQUFDO0lBQ3pDLElBQUksS0FBVSxFQUFFLEVBa0JmO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9icmVlZC1zaGVldC5odG1sIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9vcmlnaW4tc2hlZXQuaHRtbCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvcHJvZmVzc2lvbi1zaGVldC5odG1sIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL21vZHVsZS9oZWxwZXIvVGVtcGxhdGVQcmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2l0ZW1zL0JyZWVkU2hlZXQudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2l0ZW1zL09yaWdpblNoZWV0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL21vZHVsZS9pdGVtcy9Qcm9mZXNzaW9uU2hlZXQudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9lb2EudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuUmFjZU5hbWUnfX1cXFwiPlxcbiAgICAgICAgICAgIDwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zdWJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgQm9keSAtLX19XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaGVldC1ib2R5XFxcIj5cXG5cXG4gICAgICAgIHt7IS0tIERlc2NyaXB0aW9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZSB0YXJnZXQ9XFxcInN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZVxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxicj48YnI+PHN0cm9uZz5MaWZlcGF0aCBUYWJsZSAoUm9sbCAyZDYgb3IgQ2hvb3NlKTo8L3N0cm9uZz48aHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uc2tpbGxzIGFzIHwgc2tpbGwgfH19XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7c2tpbGwubG93fX0te3tza2lsbC5oaWdofX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tAaW5kZXh9fS5uYW1lXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5uYW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjx1bD48bGk+PHN0cm9uZz5BdHRyaWJ1dGVzOjwvc3Ryb25nPiBTdHIge3tza2lsbC5zdHJ9fSwgU3RhIHt7c2tpbGwuc3RhfX0sIEFnaSB7e3NraWxsLmFnaX19LCBJbnQge3tza2lsbC5pbnR9fSwgU2VuIHt7c2tpbGwuc2VufX0sIFBzeSB7e3NraWxsLnBzeX19PC9saT48L3VsPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuPC9mb3JtPlxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0gY2xhc3M9XFxcInt7Y3NzQ2xhc3N9fSBmbGV4Y29sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCI+XFxuICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItZGV0YWlscyBmbGV4cm93XFxcIj5cXG4gICAgICA8aDEgY2xhc3M9XFxcImNoYXJuYW1lXFxcIj5cXG4gICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5PcmlnaW5OYW1lJ319XFxcIj5cXG4gICAgICA8L2gxPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tc3VidGl0bGVcXFwiPlxcbiAgICAgICAgPGg0IGNsYXNzPVxcXCJpdGVtLXR5cGVcXFwiPnt7aXRlbVR5cGV9fTwvaDQ+XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gIDwvaGVhZGVyPlxcblxcbiAge3shLS0gSXRlbSBTaGVldCBOYXZpZ2F0aW9uIC0tfX1cXG4gIDxuYXYgY2xhc3M9XFxcInNoZWV0LW5hdmlnYXRpb24gdGFic1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCI+XFxuICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuRGVzY3JpcHRpb25cXFwifX08L2E+XFxuICA8L25hdj5cXG5cXG4gIHt7IS0tIEl0ZW0gU2hlZXQgQm9keSAtLX19XFxuICA8c2VjdGlvbiBjbGFzcz1cXFwic2hlZXQtYm9keVxcXCI+XFxuXFxuICAgIHt7IS0tIERlc2NyaXB0aW9uIFRhYiAtLX19XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgJm5ic3A7XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZSB0YXJnZXQ9XFxcInN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZVxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG4gIDwvc2VjdGlvbj5cXG48L2Zvcm0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuUmFjZU5hbWUnfX1cXFwiPlxcbiAgICAgICAgICAgIDwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zdWJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwic2lnbmF0dXJlLWFiaWxpdHlcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5TaWduYXR1cmVBYmlsaXR5XFxcIn19PC9hPlxcbiAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5kZXNjcmlwdGlvbi5za2lsbHMgYXMgfCBza2lsbCB8fX1cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwie3tza2lsbC5uYW1lfX1cXFwiPnt7c2tpbGwubmFtZX19PC9hPlxcbiAgICAgICAge3svZWFjaH19XFxuICAgIDwvbmF2PlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEJvZHkgLS19fVxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2hlZXQtYm9keVxcXCI+XFxuXFxuICAgICAgICB7eyEtLSBEZXNjcmlwdGlvbiBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3cgYWN0aXZlXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPlxcblxcbiAgICAgICAgICAgIDwhLS0gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPi0tPlxcbiAgICAgICAgICAgIDwhLS0gICAgICAgICZuYnNwOy0tPlxcbiAgICAgICAgICAgIDwhLS0gICAgICA8L2Rpdj4tLT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24ub3ZlcnZpZXcgdGFyZ2V0PVxcXCJzeXN0ZW0uZGVzY3JpcHRpb24ub3ZlcnZpZXdcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gU2lnbmF0dXJlIEFiaWxpdHkgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwic2lnbmF0dXJlLWFiaWxpdHlcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2lnbmF0dXJlIEFiaWxpdHk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5kZXNjcmlwdGlvbi5zaWduYXR1cmVfYWJpbGl0eVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24uc2lnbmF0dXJlX2FiaWxpdHl9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7ZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24uc2lnbmF0dXJlX2FiaWxpdHl9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuPCEtLSAgICAgICAgICAgICAgICA8c3Ryb25nPlNpZ25hdHVyZSBBYmlsaXR5Ojwvc3Ryb25nPiA8aW5wdXQgY2xhc3M9XFxcImVvYS1pbi1wbGFjZS1ib3hcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7ZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24uc2lnbmF0dXJlX2FiaWxpdHl9fVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24uc2lnbmF0dXJlX2FiaWxpdHl9fVxcXCIgLz4tLT5cXG5cXG4gICAgICAgICAgICAgICAgPGJyPjxicj48c3Ryb25nPkRlc2NyaXB0aW9uOjwvc3Ryb25nPjxicj5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24uc2lnbmF0dXJlX2Rlc2NyaXB0aW9uIHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLnNpZ25hdHVyZV9kZXNjcmlwdGlvblxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBTa2lsbHMgVGFicyAtLX19XFxuICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLnNraWxscyBhcyB8IHNraWxsIHx9fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3dcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAge3tpfX1cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG48IS0tICAgICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+IDxpbnB1dCBjbGFzcz1cXFwiZW9hLWluLXBsYWNlLWJveFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIiAvPi0tPlxcblxcbiAgICAgICAgICAgICAgICA8YnI+PGJyPjxzdHJvbmc+TmFub3Byb2dyYW1zOjwvc3Ryb25nPjxocj5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBza2lsbC5wcm9ncmFtcyBhcyB8IHBnbSB8fX1cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0AuLi9pbmRleH19LnByb2dyYW0ue3tAaW5kZXh9fS5uYW1lXFxcIiB2YWx1ZT1cXFwie3twZ20ubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twZ20ubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tALi4vaW5kZXh9fS5wcm9ncmFtLnt7QGluZGV4fX0ubmFtZVxcXCIgdmFsdWU9XFxcInt7cGdtLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3BnbS5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFub3BvaW50IENvc3Q8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tALi4vaW5kZXh9fS5wcm9ncmFtLnt7QGluZGV4fX0ubnBcXFwiIHZhbHVlPVxcXCJ7e3BnbS5ucH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twZ20ubnB9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5DVTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0AuLi9pbmRleH19LnByb2dyYW0ue3tAaW5kZXh9fS5uY3VcXFwiIHZhbHVlPVxcXCJ7e3BnbS5uY3V9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLm5jdX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RWZmZWN0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19LmVmZmVjdFxcXCIgdmFsdWU9XFxcInt7cGdtLmVmZmVjdH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twZ20uZWZmZWN0fX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZW9hLWluLXBsYWNlLWJveFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20ubmFtZX19XFxcIiB2YWx1ZT1cXFwie3twZ20ubmFtZX19XFxcIiAvPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZW9hLWluLXBsYWNlLWJveFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20uZGVzY3JpcHRpb259fVxcXCIgdmFsdWU9XFxcInt7cGdtLmRlc2NyaXB0aW9ufX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJEZXNjcmlwdGlvblxcXCIgLz4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImVvYS1pbmxpbmUtbGFiZWxcXFwiPk5hbm9wb2ludCBDb3N0OiA8L2xhYmVsPjxpbnB1dCBjbGFzcz1cXFwiZW9hLWlubGluZS1ib3ggZW9hLXdpZHRoLTMwXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ7e3BnbS5ucH19XFxcIiB2YWx1ZT1cXFwie3twZ20ubnB9fVxcXCIgLz4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImVvYS1pbmxpbmUtbGFiZWxcXFwiPk5DVTogPC9sYWJlbD48aW5wdXQgY2xhc3M9XFxcImVvYS1pbmxpbmUtYm94IGVvYS13aWR0aC0zMFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20ubmN1fX1cXFwiIHZhbHVlPVxcXCJ7e3BnbS5uY3V9fVxcXCIgLz4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImVvYS1pbmxpbmUtbGFiZWxcXFwiPkVmZmVjdDogPC9sYWJlbD48aW5wdXQgY2xhc3M9XFxcImVvYS1pbmxpbmUtYm94IGVvYS13aWR0aC00ODBcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7cGdtLmVmZmVjdH19XFxcIiB2YWx1ZT1cXFwie3twZ20uZWZmZWN0fX1cXFwiIC8+LS0+XFxuICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIHt7L2VhY2h9fVxcbiAgICA8L3NlY3Rpb24+XFxuXFxuPCEtLSAgICA8Zm9vdGVyIGNsYXNzPVxcXCJzaGVldC1mb290ZXJcXFwiPi0tPlxcbjwhLS0gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLXNhdmVcXFwiPjwvaT4ge3tsb2NhbGl6ZSBzdWJtaXRUZXh0fX08L2J1dHRvbj4tLT5cXG48IS0tICAgIDwvZm9vdGVyPi0tPlxcbjwvZm9ybT5cXG5cIjsiLCJpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL2JyZWVkLXNoZWV0Lmh0bWxcIjsgaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9vcmlnaW4tc2hlZXQuaHRtbFwiOyBpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL3Byb2Zlc3Npb24tc2hlZXQuaHRtbFwiO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcmVsb2FkZXIge1xuICAgIC8qKlxuICAgICAqIFByZWxvYWQgYSBzZXQgb2YgdGVtcGxhdGVzIHRvIGNvbXBpbGUgYW5kIGNhY2hlIHRoZW0gZm9yIGZhc3QgYWNjZXNzIGR1cmluZyByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgcHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlUGF0aHMgPSBbXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9pdGVtcy9wcm9mZXNzaW9uLXNoZWV0Lmh0bWxcIiwgXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9pdGVtcy9vcmlnaW4tc2hlZXQuaHRtbFwiLCBcIm1vZHVsZXMvdGVtcGxhdGUvdGVtcGxhdGVzL2l0ZW1zL2JyZWVkLXNoZWV0Lmh0bWxcIl07XG4gICAgICAgIHJldHVybiBsb2FkVGVtcGxhdGVzKHRlbXBsYXRlUGF0aHMpO1xuICAgIH1cbn1cbiIsIlxuLyoqXG4gKiBAZXh0ZW5kcyB7SXRlbVNoZWV0fVxuICovXG5leHBvcnQgY2xhc3MgRW9BQnJlZWRTaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvYnJlZWQtc2hlZXQuaHRtbFwiLFxuICAgICAgd2lkdGg6IDg1MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtbmF2aWdhdGlvblwiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwifV0sXG4gICAgICBkcmFnRHJvcDogW3tkcmFnU2VsZWN0b3I6IFwiLmRyYWdnYWJsZVwiLCBkcm9wU2VsZWN0b3I6IG51bGx9XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICAvLyBjb250ZXh0LnN5c3RlbURhdGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xuICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuXG4gICAgLy8gYWNjZXNzaWJpbGl0eSh0aGlzLml0ZW0sIGh0bWwpO1xuXG4gICAgLy8gRXZlcnl0aGluZyBiZWxvdyBoZXJlIGlzIG9ubHkgbmVlZGVkIGlmIHRoZSBzaGVldCBpcyBlZGl0YWJsZVxuICAgIGlmICggIXRoaXMuaXNFZGl0YWJsZSApIHJldHVybjtcbiAgfVxufVxuIiwiXG4vKipcbiAqIEBleHRlbmRzIHtJdGVtU2hlZXR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFb0FPcmlnaW5TaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvb3JpZ2luLXNoZWV0Lmh0bWxcIixcbiAgICAgIHdpZHRoOiA4NTAsXG4gICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgIHRhYnM6IFt7bmF2U2VsZWN0b3I6IFwiLnNoZWV0LW5hdmlnYXRpb25cIiwgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIn1dLFxuICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5kcmFnZ2FibGVcIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3VwZXIuZ2V0RGF0YSgpO1xuXG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgLy8gY29udGV4dC5zeXN0ZW1EYXRhID0gY29udGV4dC5kYXRhLnN5c3RlbTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcbiAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcblxuICAgIC8vIGFjY2Vzc2liaWxpdHkodGhpcy5pdGVtLCBodG1sKTtcblxuICAgIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgaGVyZSBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgc2hlZXQgaXMgZWRpdGFibGVcbiAgICBpZiAoICF0aGlzLmlzRWRpdGFibGUgKSByZXR1cm47XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFb0FQcm9mZXNzaW9uU2hlZXQgZXh0ZW5kcyBJdGVtU2hlZXQge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gZm91bmRyeS51dGlscy5tZXJnZU9iamVjdChzdXBlci5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgY2xhc3NlczogW1wiZW9hXCIsIFwic2hlZXRcIiwgXCJpdGVtXCJdLFxuICAgICAgdGVtcGxhdGU6IFwic3lzdGVtcy9lb2EvdGVtcGxhdGVzL2l0ZW1zL3Byb2Zlc3Npb24tc2hlZXQuaHRtbFwiLFxuICAgICAgd2lkdGg6IDg1MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtbmF2aWdhdGlvblwiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwifV0sXG4gICAgICBkcmFnRHJvcDogW3tkcmFnU2VsZWN0b3I6IFwiLmRyYWdnYWJsZVwiLCBkcm9wU2VsZWN0b3I6IG51bGx9XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICAvLyBjb250ZXh0LnN5c3RlbURhdGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xuICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuXG4gICAgLy8gYWNjZXNzaWJpbGl0eSh0aGlzLml0ZW0sIGh0bWwpO1xuXG4gICAgLy8gRXZlcnl0aGluZyBiZWxvdyBoZXJlIGlzIG9ubHkgbmVlZGVkIGlmIHRoZSBzaGVldCBpcyBlZGl0YWJsZVxuICAgIGlmICggIXRoaXMuaXNFZGl0YWJsZSApIHJldHVybjtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUZW1wbGF0ZVByZWxvYWRlciB9IGZyb20gXCIuL21vZHVsZS9oZWxwZXIvVGVtcGxhdGVQcmVsb2FkZXJcIjtcbmltcG9ydCB7IEVvQUJyZWVkU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvQnJlZWRTaGVldFwiO1xuaW1wb3J0IHsgRW9BUHJvZmVzc2lvblNoZWV0IH0gZnJvbSBcIi4vbW9kdWxlL2l0ZW1zL1Byb2Zlc3Npb25TaGVldFwiO1xuaW1wb3J0IHsgRW9BT3JpZ2luU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvT3JpZ2luU2hlZXRcIjtcblxuSG9va3Mub25jZShcImluaXRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09RWRnZSBvZiBBbmFyY2h5PT09PT09PT09PT09PT09PT09PT09XCIpXG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09TG9hZD09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIilcblxuICAgIEl0ZW1zLnVucmVnaXN0ZXJTaGVldChcImNvcmVcIiwgSXRlbVNoZWV0KTtcbiAgICBJdGVtcy5yZWdpc3RlclNoZWV0KFwiZW9hXCIsIEVvQUJyZWVkU2hlZXQsIHtcbiAgICAgICAgdHlwZXM6IFtcImJyZWVkXCJdLFxuICAgICAgICBtYWtlRGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1zLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BUHJvZmVzc2lvblNoZWV0LCB7XG4gICAgICAgIHR5cGVzOiBbXCJwcm9mZXNzaW9uXCJdLFxuICAgICAgICBtYWtlRGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1zLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BT3JpZ2luU2hlZXQsIHtcbiAgICAgICAgdHlwZXM6IFtcIm9yaWdpblwiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcblxuICAgIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoJ2lmRXF1YWxzJywgZnVuY3Rpb24oYXJnMSwgYXJnMiwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gKGFyZzEgPT0gYXJnMikgPyBvcHRpb25zLmZuKHRoaXMpIDogb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xufSk7XG5cbkhvb2tzLm9uY2UoXCJyZWFkeVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT1FZGdlIG9mIEFuYXJjaHk9PT09PT09PT09PT09PT09PT09PT09PVwiKVxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1SZWFkeT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIilcblxufSk7XG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuXG4gICAgICAgIGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImFwcGx5XCIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgaW4gX3RlbXBsYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF90ZW1wbGF0ZUNhY2hlLCB0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90ZW1wbGF0ZUNhY2hlW3RlbXBsYXRlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFRlbXBsYXRlUHJlbG9hZGVyLnByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcHBsaWNhdGlvbiBpbiB1aS53aW5kb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodWkud2luZG93cywgYXBwbGljYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aS53aW5kb3dzW2FwcGxpY2F0aW9uXS5yZW5kZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=