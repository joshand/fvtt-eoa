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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n  {{!-- Item Sheet Header --}}\n  <header class=\"sheet-header flexrow\">\n    <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n    <div class=\"header-details flexrow\">\n      <h1 class=\"charname\">\n        <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.RaceName'}}\">\n      </h1>\n\n      <div class=\"item-subtitle\">\n        <h4 class=\"item-type\">{{itemType}}</h4>\n        <span class=\"item-status\">{{itemStatus}}</span>\n      </div>\n    </div>\n  </header>\n\n  {{!-- Item Sheet Navigation --}}\n  <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n    <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n  </nav>\n\n  {{!-- Item Sheet Body --}}\n  <section class=\"sheet-body\">\n\n    {{!-- Description Tab --}}\n    <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n      <div class=\"item-properties\">\n        &nbsp;\n      </div>\n\n      <div class=\"description\">\n          {{editor data.system.description.value target=\"system.description.value\" button=true owner=owner editable=editable}}\n      </div>\n\n    </div>\n  </section>\n</form>\n");

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
/* harmony import */ var _static_templates_items_profession_sheet_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/templates/items/profession-sheet.html */ "./static/templates/items/profession-sheet.html");


class TemplatePreloader {
    /**
     * Preload a set of templates to compile and cache them for fast access during rendering
     */
    static async preloadHandlebarsTemplates() {
        const templatePaths = ["modules/template/templates/items/profession-sheet.html", "modules/template/templates/items/breed-sheet.html"];
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



Hooks.once("init", async () => {
    console.log("========================Edge of Anarchy=====================");
    console.log("=============================HMR============================");
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("eoa", _module_items_BreedSheet__WEBPACK_IMPORTED_MODULE_1__.EoABreedSheet, {
        types: ["breed"],
        makeDefault: true
    });
    Items.registerSheet("eoa", _module_items_ProfessionSheet__WEBPACK_IMPORTED_MODULE_2__.EoAProfessionSheet, {
        types: ["profession"],
        makeDefault: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUMsZ0VBQWdFLENBQUM7SUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQztBQUVqRixDQUFDLENBQUMsQ0FBQztBQUdILElBQUksSUFBc0MsRUFBRSxDQUFDO0lBQ3pDLElBQUksS0FBVSxFQUFFLEVBa0JmO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9icmVlZC1zaGVldC5odG1sIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9wcm9mZXNzaW9uLXNoZWV0Lmh0bWwiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2hlbHBlci9UZW1wbGF0ZVByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaXRlbXMvQnJlZWRTaGVldC50cyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaXRlbXMvUHJvZmVzc2lvblNoZWV0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvZW9hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0gY2xhc3M9XFxcInt7Y3NzQ2xhc3N9fSBmbGV4Y29sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCI+XFxuICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItZGV0YWlscyBmbGV4cm93XFxcIj5cXG4gICAgICA8aDEgY2xhc3M9XFxcImNoYXJuYW1lXFxcIj5cXG4gICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5SYWNlTmFtZSd9fVxcXCI+XFxuICAgICAgPC9oMT5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXN1YnRpdGxlXFxcIj5cXG4gICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tc3RhdHVzXFxcIj57e2l0ZW1TdGF0dXN9fTwvc3Bhbj5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2hlYWRlcj5cXG5cXG4gIHt7IS0tIEl0ZW0gU2hlZXQgTmF2aWdhdGlvbiAtLX19XFxuICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICA8YSBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkRlc2NyaXB0aW9uXFxcIn19PC9hPlxcbiAgPC9uYXY+XFxuXFxuICB7eyEtLSBJdGVtIFNoZWV0IEJvZHkgLS19fVxcbiAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICB7eyEtLSBEZXNjcmlwdGlvbiBUYWIgLS19fVxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICZuYnNwO1xcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24udmFsdWUgdGFyZ2V0PVxcXCJzeXN0ZW0uZGVzY3JpcHRpb24udmFsdWVcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuICA8L3NlY3Rpb24+XFxuPC9mb3JtPlxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0gY2xhc3M9XFxcInt7Y3NzQ2xhc3N9fSBmbGV4Y29sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCI+XFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgSGVhZGVyIC0tfX1cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwic2hlZXQtaGVhZGVyIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwicHJvZmlsZVxcXCIgc3JjPVxcXCJ7e2l0ZW0uaW1nfX1cXFwiIHRpdGxlPVxcXCJ7e2l0ZW0ubmFtZX19XFxcIiBkYXRhLWVkaXQ9XFxcImltZ1xcXCI+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItZGV0YWlscyBmbGV4cm93XFxcIj5cXG4gICAgICAgICAgICA8aDEgY2xhc3M9XFxcImNoYXJuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2l0ZW0ubmFtZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwie3tsb2NhbGl6ZSAnRU9BLlJhY2VOYW1lJ319XFxcIj5cXG4gICAgICAgICAgICA8L2gxPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tc3VidGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIml0ZW0tdHlwZVxcXCI+e3tpdGVtVHlwZX19PC9oND5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tc3RhdHVzXFxcIj57e2l0ZW1TdGF0dXN9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBOYXZpZ2F0aW9uIC0tfX1cXG4gICAgPG5hdiBjbGFzcz1cXFwic2hlZXQtbmF2aWdhdGlvbiB0YWJzXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuRGVzY3JpcHRpb25cXFwifX08L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcInNpZ25hdHVyZS1hYmlsaXR5XFxcIj57e2xvY2FsaXplIFxcXCJFT0EuU2lnbmF0dXJlQWJpbGl0eVxcXCJ9fTwvYT5cXG4gICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24uc2tpbGxzIGFzIHwgc2tpbGwgfH19XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcInt7c2tpbGwubmFtZX19XFxcIj57e3NraWxsLm5hbWV9fTwvYT5cXG4gICAgICAgIHt7L2VhY2h9fVxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBCb2R5IC0tfX1cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICAgICAge3shLS0gRGVzY3JpcHRpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8IS0tICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tICAgICAgICAmbmJzcDstLT5cXG4gICAgICAgICAgICA8IS0tICAgICAgPC9kaXY+LS0+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLm92ZXJ2aWV3IHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLm92ZXJ2aWV3XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIFNpZ25hdHVyZSBBYmlsaXR5IFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvd1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcInNpZ25hdHVyZS1hYmlsaXR5XFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNpZ25hdHVyZSBBYmlsaXR5PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24uc2lnbmF0dXJlX2FiaWxpdHlcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnNpZ25hdHVyZV9hYmlsaXR5fX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2RhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnNpZ25hdHVyZV9hYmlsaXR5fX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbjwhLS0gICAgICAgICAgICAgICAgPHN0cm9uZz5TaWduYXR1cmUgQWJpbGl0eTo8L3N0cm9uZz4gPGlucHV0IGNsYXNzPVxcXCJlb2EtaW4tcGxhY2UtYm94XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ7e2RhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnNpZ25hdHVyZV9hYmlsaXR5fX1cXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnNpZ25hdHVyZV9hYmlsaXR5fX1cXFwiIC8+LS0+XFxuXFxuICAgICAgICAgICAgICAgIDxicj48YnI+PHN0cm9uZz5EZXNjcmlwdGlvbjo8L3N0cm9uZz48YnI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnNpZ25hdHVyZV9kZXNjcmlwdGlvbiB0YXJnZXQ9XFxcInN5c3RlbS5kZXNjcmlwdGlvbi5zaWduYXR1cmVfZGVzY3JpcHRpb25cXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gU2tpbGxzIFRhYnMgLS19fVxcbiAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5za2lsbHMgYXMgfCBza2lsbCB8fX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwie3tza2lsbC5uYW1lfX1cXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIHt7aX19XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tAaW5kZXh9fS5kZXNjcmlwdGlvblxcXCIgdmFsdWU9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuPCEtLSAgICAgICAgICAgICAgICA8c3Ryb25nPkRlc2NyaXB0aW9uOjwvc3Ryb25nPiA8aW5wdXQgY2xhc3M9XFxcImVvYS1pbi1wbGFjZS1ib3hcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCIgdmFsdWU9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCIgLz4tLT5cXG5cXG4gICAgICAgICAgICAgICAgPGJyPjxicj48c3Ryb25nPk5hbm9wcm9ncmFtczo8L3N0cm9uZz48aHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggc2tpbGwucHJvZ3JhbXMgYXMgfCBwZ20gfH19XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tALi4vaW5kZXh9fS5wcm9ncmFtLnt7QGluZGV4fX0ubmFtZVxcXCIgdmFsdWU9XFxcInt7cGdtLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3BnbS5kZXNjcmlwdGlvbn19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twZ20uZGVzY3JpcHRpb259fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbm9wb2ludCBDb3N0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19Lm5wXFxcIiB2YWx1ZT1cXFwie3twZ20ubnB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLm5wfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OQ1U8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tALi4vaW5kZXh9fS5wcm9ncmFtLnt7QGluZGV4fX0ubmN1XFxcIiB2YWx1ZT1cXFwie3twZ20ubmN1fX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3BnbS5uY3V9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVmZmVjdDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0AuLi9pbmRleH19LnByb2dyYW0ue3tAaW5kZXh9fS5lZmZlY3RcXFwiIHZhbHVlPVxcXCJ7e3BnbS5lZmZlY3R9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLmVmZmVjdH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImVvYS1pbi1wbGFjZS1ib3hcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7cGdtLm5hbWV9fVxcXCIgdmFsdWU9XFxcInt7cGdtLm5hbWV9fVxcXCIgLz4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImVvYS1pbi1wbGFjZS1ib3hcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7cGdtLmRlc2NyaXB0aW9ufX1cXFwiIHZhbHVlPVxcXCJ7e3BnbS5kZXNjcmlwdGlvbn19XFxcIiBwbGFjZWhvbGRlcj1cXFwiRGVzY3JpcHRpb25cXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJlb2EtaW5saW5lLWxhYmVsXFxcIj5OYW5vcG9pbnQgQ29zdDogPC9sYWJlbD48aW5wdXQgY2xhc3M9XFxcImVvYS1pbmxpbmUtYm94IGVvYS13aWR0aC0zMFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20ubnB9fVxcXCIgdmFsdWU9XFxcInt7cGdtLm5wfX1cXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJlb2EtaW5saW5lLWxhYmVsXFxcIj5OQ1U6IDwvbGFiZWw+PGlucHV0IGNsYXNzPVxcXCJlb2EtaW5saW5lLWJveCBlb2Etd2lkdGgtMzBcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7cGdtLm5jdX19XFxcIiB2YWx1ZT1cXFwie3twZ20ubmN1fX1cXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJlb2EtaW5saW5lLWxhYmVsXFxcIj5FZmZlY3Q6IDwvbGFiZWw+PGlucHV0IGNsYXNzPVxcXCJlb2EtaW5saW5lLWJveCBlb2Etd2lkdGgtNDgwXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ7e3BnbS5lZmZlY3R9fVxcXCIgdmFsdWU9XFxcInt7cGdtLmVmZmVjdH19XFxcIiAvPi0tPlxcbiAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICB7ey9lYWNofX1cXG4gICAgPC9zZWN0aW9uPlxcblxcbjwhLS0gICAgPGZvb3RlciBjbGFzcz1cXFwic2hlZXQtZm9vdGVyXFxcIj4tLT5cXG48IS0tICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1zYXZlXFxcIj48L2k+IHt7bG9jYWxpemUgc3VibWl0VGV4dH19PC9idXR0b24+LS0+XFxuPCEtLSAgICA8L2Zvb3Rlcj4tLT5cXG48L2Zvcm0+XFxuXCI7IiwiaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9icmVlZC1zaGVldC5odG1sXCI7IGltcG9ydCBcIi4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvcHJvZmVzc2lvbi1zaGVldC5odG1sXCI7XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByZWxvYWRlciB7XG4gICAgLyoqXG4gICAgICogUHJlbG9hZCBhIHNldCBvZiB0ZW1wbGF0ZXMgdG8gY29tcGlsZSBhbmQgY2FjaGUgdGhlbSBmb3IgZmFzdCBhY2Nlc3MgZHVyaW5nIHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBwcmVsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcygpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVQYXRocyA9IFtcIm1vZHVsZXMvdGVtcGxhdGUvdGVtcGxhdGVzL2l0ZW1zL3Byb2Zlc3Npb24tc2hlZXQuaHRtbFwiLCBcIm1vZHVsZXMvdGVtcGxhdGUvdGVtcGxhdGVzL2l0ZW1zL2JyZWVkLXNoZWV0Lmh0bWxcIl07XG4gICAgICAgIHJldHVybiBsb2FkVGVtcGxhdGVzKHRlbXBsYXRlUGF0aHMpO1xuICAgIH1cbn1cbiIsIlxuLyoqXG4gKiBAZXh0ZW5kcyB7SXRlbVNoZWV0fVxuICovXG5leHBvcnQgY2xhc3MgRW9BQnJlZWRTaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvYnJlZWQtc2hlZXQuaHRtbFwiLFxuICAgICAgd2lkdGg6IDg1MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtbmF2aWdhdGlvblwiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwifV0sXG4gICAgICBkcmFnRHJvcDogW3tkcmFnU2VsZWN0b3I6IFwiLmRyYWdnYWJsZVwiLCBkcm9wU2VsZWN0b3I6IG51bGx9XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICAvLyBjb250ZXh0LnN5c3RlbURhdGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xuICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuXG4gICAgLy8gYWNjZXNzaWJpbGl0eSh0aGlzLml0ZW0sIGh0bWwpO1xuXG4gICAgLy8gRXZlcnl0aGluZyBiZWxvdyBoZXJlIGlzIG9ubHkgbmVlZGVkIGlmIHRoZSBzaGVldCBpcyBlZGl0YWJsZVxuICAgIGlmICggIXRoaXMuaXNFZGl0YWJsZSApIHJldHVybjtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVvQVByb2Zlc3Npb25TaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvcHJvZmVzc2lvbi1zaGVldC5odG1sXCIsXG4gICAgICB3aWR0aDogODUwLFxuICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICB0YWJzOiBbe25hdlNlbGVjdG9yOiBcIi5zaGVldC1uYXZpZ2F0aW9uXCIsIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLCBpbml0aWFsOiBcImRlc2NyaXB0aW9uXCJ9XSxcbiAgICAgIGRyYWdEcm9wOiBbe2RyYWdTZWxlY3RvcjogXCIuZHJhZ2dhYmxlXCIsIGRyb3BTZWxlY3RvcjogbnVsbH1dLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHN1cGVyLmdldERhdGEoKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICAgIC8vIGNvbnRleHQuc3lzdGVtRGF0YSA9IGNvbnRleHQuZGF0YS5zeXN0ZW07XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sKSB7XG4gICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG5cbiAgICAvLyBhY2Nlc3NpYmlsaXR5KHRoaXMuaXRlbSwgaHRtbCk7XG5cbiAgICAvLyBFdmVyeXRoaW5nIGJlbG93IGhlcmUgaXMgb25seSBuZWVkZWQgaWYgdGhlIHNoZWV0IGlzIGVkaXRhYmxlXG4gICAgaWYgKCAhdGhpcy5pc0VkaXRhYmxlICkgcmV0dXJuO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFRlbXBsYXRlUHJlbG9hZGVyIH0gZnJvbSBcIi4vbW9kdWxlL2hlbHBlci9UZW1wbGF0ZVByZWxvYWRlclwiO1xuaW1wb3J0IHsgRW9BQnJlZWRTaGVldCB9IGZyb20gXCIuL21vZHVsZS9pdGVtcy9CcmVlZFNoZWV0XCI7XG5pbXBvcnQgeyBFb0FQcm9mZXNzaW9uU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvUHJvZmVzc2lvblNoZWV0XCI7XG5cbkhvb2tzLm9uY2UoXCJpbml0XCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PUVkZ2Ugb2YgQW5hcmNoeT09PT09PT09PT09PT09PT09PT09PVwiKVxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1ITVI9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXG5cbiAgICBJdGVtcy51bnJlZ2lzdGVyU2hlZXQoXCJjb3JlXCIsIEl0ZW1TaGVldCk7XG4gICAgSXRlbXMucmVnaXN0ZXJTaGVldChcImVvYVwiLCBFb0FCcmVlZFNoZWV0LCB7XG4gICAgICAgIHR5cGVzOiBbXCJicmVlZFwiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcbiAgICBJdGVtcy5yZWdpc3RlclNoZWV0KFwiZW9hXCIsIEVvQVByb2Zlc3Npb25TaGVldCwge1xuICAgICAgICB0eXBlczogW1wicHJvZmVzc2lvblwiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcbn0pO1xuXG5Ib29rcy5vbmNlKFwicmVhZHlcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09RWRnZSBvZiBBbmFyY2h5PT09PT09PT09PT09PT09PT09PT09PT1cIilcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09UmVhZHk9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXG5cbn0pO1xuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcblxuICAgICAgICBpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gXCJhcHBseVwiKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRlbXBsYXRlIGluIF90ZW1wbGF0ZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfdGVtcGxhdGVDYWNoZSwgdGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGVtcGxhdGVDYWNoZVt0ZW1wbGF0ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBUZW1wbGF0ZVByZWxvYWRlci5wcmVsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBwbGljYXRpb24gaW4gdWkud2luZG93cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHVpLndpbmRvd3MsIGFwcGxpY2F0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdWkud2luZG93c1thcHBsaWNhdGlvbl0ucmVuZGVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9