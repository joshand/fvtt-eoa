/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./static/templates/actor/actor-hero-sheet.html":
/*!******************************************************!*\
  !*** ./static/templates/actor/actor-hero-sheet.html ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} {{actor.type}} flexcol\" autocomplete=\"off\">\n\n    {{!-- Sheet Header --}}\n    <header class=\"sheet-header\">\n        {{!-- Header stuff goes here --}}\n        <img class=\"profile-img\" src=\"{{actor.img}}\" data-edit=\"img\" title=\"{{actor.name}}\" height=\"100\" width=\"100\"/>\n        <div class=\"header-fields\">\n            <h1 class=\"charname\"><input name=\"name\" type=\"text\" value=\"{{actor.name}}\" placeholder=\"Name\"/></h1>\n            <h1 class=\"charalias\"><input name=\"background.alias\" type=\"text\" value=\"{{actor.background.alias}}\" placeholder=\"Alias\"/></h1>\n            <div class=\"resources grid grid-2col\">\n                <div class=\"resource flex-group-center\">\n                    <label for=\"system.health.value\" class=\"resource-label\">Health</label>\n                    <div class=\"resource-content flexrow flex-center flex-between\">\n                        <input type=\"text\" name=\"system.health.value\" value=\"{{system.health.value}}\" data-dtype=\"Number\"/>\n                        <span> / </span>\n                        <input type=\"text\" name=\"system.health.max\" value=\"{{system.health.max}}\" data-dtype=\"Number\"/>\n                    </div>\n                </div>\n\n                <div class=\"resource flex-group-center\">\n                    <label for=\"system.power.value\" class=\"resource-label\">Power</label>\n                    <div class=\"resource-content flexrow flex-center flex-between\">\n                        <input type=\"text\" name=\"system.power.value\" value=\"{{system.power.value}}\" data-dtype=\"Number\"/>\n                        <span> / </span>\n                        <input type=\"text\" name=\"system.power.max\" value=\"{{system.power.max}}\" data-dtype=\"Number\"/>\n                    </div>\n                </div>\n\n            </div> {{!-- closes the \"resources\" div --}}\n\n            <div class=\"abilities grid grid-3col\">\n                {{#each system.abilities as |ability key|}}\n                <div class=\"ability flexrow flex-group-center\">\n                    <label for=\"system.abilities.{{key}}.value\" class=\"resource-label\">{{key}}</label>\n                    <input type=\"text\" name=\"system.abilities.{{key}}.value\" value=\"{{ability.value}}\" data-dtype=\"Number\"/>\n                    <span class=\"ability-mod\">{{numberFormat ability.mod decimals=0 sign=true}}</span>\n                </div>\n                {{/each}}\n            </div>\n\n        </div> {{!-- closes the \"header-fields\" div --}}\n    </header>\n\n    {{!-- Sheet Tab Navigation --}}\n    <nav class=\"sheet-tabs tabs\" data-group=\"primary\">\n        <a class=\"item\" data-tab=\"description\">Description</a>\n        <a class=\"item\" data-tab=\"items\">Items</a>\n    </nav>\n\n    {{!-- Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Biography Tab --}}\n        <div class=\"tab biography\" data-group=\"primary\" data-tab=\"description\">\n            {{editor content=system.biography target=\"system.biography\" button=true owner=owner editable=editable}}\n        </div>\n\n        {{!-- Owned Items Tab --}}\n        <div class=\"tab items\" data-group=\"primary\" data-tab=\"items\">\n            <ol class=\"items-list\">\n                <li class=\"item flexrow item-header\">\n                    <div class=\"item-image\"></div>\n                    <div class=\"item-name\">Name</div>\n                    <div class=\"item-controls\">\n                        <a class=\"item-control item-create\" title=\"Create item\" data-type=\"item\"><i class=\"fas fa-plus\"></i> Add item</a>\n                    </div>\n                </li>\n                {{#each items as |item id|}}\n                <li class=\"item flexrow\" data-item-id=\"{{item._id}}\">\n                    <div class=\"item-image\"><img src=\"{{item.img}}\" title=\"{{item.name}}\" width=\"24\" height=\"24\"/></div>\n                    <h4 class=\"item-name\">{{item.name}}</h4>\n                    <div class=\"item-controls\">\n                        <a class=\"item-control item-edit\" title=\"Edit Item\"><i class=\"fas fa-edit\"></i></a>\n                        <a class=\"item-control item-delete\" title=\"Delete Item\"><i class=\"fas fa-trash\"></i></a>\n                    </div>\n                </li>\n                {{/each}}\n            </ol>\n        </div>\n\n    </section>\n</form>");

/***/ }),

/***/ "./static/templates/items/breed-sheet.html":
/*!*************************************************!*\
  !*** ./static/templates/items/breed-sheet.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.RaceName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n        <a class=\"item\" data-tab=\"lifepath\">{{localize \"EOA.Lifepath\"}}</a>\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Description Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <br>\n                {{editor data.system.description.value target=\"system.description.value\" button=true owner=owner editable=editable}}\n            </div>\n\n        </div>\n\n        {{!-- Lifepath Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"lifepath\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <br>\n                <strong>Lifepath Table (Roll 2d6 or Choose):</strong><hr>\n                {{#each data.system.skills as | skill |}}\n\n                <div class=\"form-group\">\n                    <div class=\"flex1\">\n                        <label>{{skill.low}}-{{skill.high}}</label>\n                    </div>\n                    <div class=\"form-fields flex1\">\n                        <input type=\"text\" name=\"data.system.skills.{{@index}}.name\" value=\"{{skill.name}}\"\n                               placeholder=\"{{skill.name}}\">\n                    </div>\n                    <div class=\"form-fields flex4\">\n                        <input type=\"text\" name=\"data.system.skills.{{@index}}.description\" value=\"{{skill.description}}\"\n                               placeholder=\"{{skill.description}}\">\n                    </div>\n                </div>\n                <div>\n                    <label><ul><li><strong>Attributes:</strong> Str {{skill.str}}, Sta {{skill.sta}}, Agi {{skill.agi}}, Int {{skill.int}}, Sen {{skill.sen}}, Psy {{skill.psy}}</li></ul></label>\n                </div>\n                <hr>\n\n                {{/each}}\n            </div>\n        </div>\n    </section>\n</form>\n");

/***/ }),

/***/ "./static/templates/items/faction-sheet.html":
/*!***************************************************!*\
  !*** ./static/templates/items/faction-sheet.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.RaceName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n        <a class=\"item\" data-tab=\"lifepath\">{{localize \"EOA.Lifepath\"}}</a>\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Description Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <br>\n                <div style=\"height: 100px !important\">\n                {{editor data.system.description.value target=\"system.description.value\" button=true owner=owner editable=editable}}\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields\">\n                        <label>Money Multiplier (* starting Origin money.)</label>\n                        <input type=\"text\" name=\"data.system.money_mult\" value=\"{{data.system.money_mult}}\"\n                               placeholder=\"{{data.system.money_mult}}\">\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n        {{!-- Lifepath Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"lifepath\">\n\n            <div class=\"item-properties\">\n              &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <br>\n                <strong>Lifepath Table (Roll 2d6 or Choose):</strong><hr>\n                {{#each data.system.life_path as | skill |}}\n\n                <div class=\"form-group\">\n                    <div class=\"flex1\">\n                        <label>{{skill.low}}-{{skill.high}}</label>\n                    </div>\n                    <div class=\"form-fields flex2\">\n                        <input type=\"text\" name=\"data.system.skills.{{@index}}.name\" value=\"{{skill.name}}\"\n                               placeholder=\"{{skill.name}}\">\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor skill.description target=\"skill.description\" button=true owner=owner editable=editable}}\n                    </div>\n                    <div class=\"form-fields flex2\">\n                        {{editor skill.equipment target=\"skill.equipment\" button=true owner=owner editable=editable}}\n                    </div>\n                </div>\n\n                <hr>\n                {{/each}}\n            </div>\n\n        </div>\n    </section>\n</form>\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.OriginName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n              </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n        <a class=\"item\" data-tab=\"ideals\">{{localize \"EOA.Ideals\"}}</a>\n        <a class=\"item\" data-tab=\"lifepath\">{{localize \"EOA.Lifepath\"}}</a>\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Description Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <div class=\"item-properties\">\n              &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <br>\n                <div style=\"height: 100px !important\">\n                {{editor data.system.description.value target=\"system.description.value\" button=true owner=owner editable=editable}}\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields\">\n                        <label>Starting Money</label>\n                        <input type=\"text\" name=\"data.system.starting_money\" value=\"{{data.system.starting_money}}\"\n                               placeholder=\"{{data.system.starting_money}}\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"form-fields\">\n                        <label>Origin Skills (Choose 3)</label>\n                        <input type=\"text\" name=\"data.system.origin_skills\" value=\"{{data.system.origin_skills}}\"\n                               placeholder=\"{{data.system.origin_skills}}\">\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        {{!-- Ideals Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"ideals\">\n\n            <div class=\"item-properties\">\n              &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <br>\n                <strong>Ideals:</strong><hr>\n                {{#each data.system.ideals as | skill |}}\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex4\">\n                        <input type=\"text\" name=\"data.system.ideals.{{@index}}.description\" value=\"{{skill.description}}\"\n                               placeholder=\"{{skill.description}}\">\n                    </div>\n                </div>\n\n                {{/each}}\n            </div>\n\n        </div>\n\n        {{!-- Lifepath Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"lifepath\">\n\n            <div class=\"item-properties\">\n              &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <br>\n                <strong>Lifepath Table (Roll 2d6 or Choose):</strong><hr>\n                {{#each data.system.life_path as | skill |}}\n\n                <div class=\"form-group\">\n                    <div class=\"flex1\">\n                        <label>{{skill.low}}-{{skill.high}}</label>\n                    </div>\n                    <div class=\"form-fields flex1\">\n                        <input type=\"text\" name=\"data.system.skills.{{@index}}.name\" value=\"{{skill.name}}\"\n                               placeholder=\"{{skill.name}}\">\n                    </div>\n                    <div class=\"form-fields flex4\">\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@index}}.description\" value=\"{{skill.description}}\"-->\n<!--                               placeholder=\"{{skill.description}}\">-->\n                        {{editor skill.description target=\"data.system.life_path.description\" button=true owner=owner editable=editable}}\n                    </div>\n                </div>\n\n                <hr>\n                {{/each}}\n            </div>\n\n        </div>\n    </section>\n</form>\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.RaceName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n        <a class=\"item\" data-tab=\"signature-ability\">{{localize \"EOA.SignatureAbilities\"}}</a>\n        <a class=\"item\" data-tab=\"skills\">{{localize \"EOA.Skills\"}}</a>\n<!--        {{#each data.system.description.skills as | skill |}}-->\n<!--        <a class=\"item\" data-tab=\"{{skill.name}}\">{{skill.name}}</a>-->\n<!--        {{/each}}-->\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Description Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <!--      <div class=\"item-properties\">-->\n            <!--        &nbsp;-->\n            <!--      </div>-->\n\n            <div class=\"description\">\n                <br>\n                <div style=\"height: 100px !important\">\n                {{editor data.system.description.overview target=\"system.description.overview\" button=true owner=owner editable=editable}}\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex2\">\n                        <label>Flashback Ability</label>\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        <label>Flashback Trigger</label>\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        <label>Flashback Effect</label>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex2\">\n                        <input type=\"text\" name=\"data.system.flashback_ability\" value=\"{{data.system.flashback_ability}}\"\n                               placeholder=\"{{data.system.flashback_ability}}\">\n                    </div>\n                    <div class=\"form-fields flex3\">\n<!--                        <input type=\"text\" name=\"data.system.flashback_trigger\" value=\"{{data.system.flashback_trigger}}\"-->\n<!--                               placeholder=\"{{data.system.flashback_trigger}}\">-->\n                        {{editor data.system.flashback_trigger target=\"data.system.flashback_trigger\" button=true owner=owner editable=editable}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n<!--                        <input type=\"text\" name=\"data.system.flashback_effect\" value=\"{{data.system.flashback_effect}}\"-->\n<!--                               placeholder=\"{{data.system.flashback_effect}}\">-->\n                        {{editor data.system.flashback_effect target=\"data.system.flashback_effect\" button=true owner=owner editable=editable}}\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        {{!-- Signature Ability Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"signature-ability\">\n\n            <div class=\"description\">\n                <br>\n                <strong>Signature Traits</strong><hr>\n                {{#each data.system.signature_traits as | skill |}}\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex2\">\n                        <input type=\"text\" name=\"data.system.signature_traits.{{@index}}.name\" value=\"{{skill.name}}\"\n                               placeholder=\"{{skill.name}}\">\n                    </div>\n                    <div class=\"form-fields flex4\">\n<!--                        <input type=\"text\" name=\"data.system.signature_traits.{{@index}}.description\" value=\"{{skill.description}}\"-->\n<!--                               placeholder=\"{{skill.description}}\">-->\n                        {{editor skill.description target=\"skill.description\" button=true owner=owner editable=editable}}\n                    </div>\n                </div>\n\n                <hr>\n                {{/each}}\n            </div>\n\n        </div>\n\n        {{!-- Skills Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"skills\">\n\n            <div class=\"description\">\n                <br>\n                <strong>Skill List</strong> (Starting characters divide 10 points around this list. No skill can be higher than 2 at character creation):<hr>\n                {{#each data.system.skill_list as | skill |}}\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex1\">\n                        <input type=\"text\" name=\"data.system.skill_list.{{@index}}.name\" value=\"{{skill.name}}\"\n                               placeholder=\"{{skill.name}}\">\n                    </div>\n                    <div class=\"form-fields flex4\">\n                        <input type=\"text\" name=\"data.system.skill_list.{{@index}}.description\" value=\"{{skill.description}}\"\n                               placeholder=\"{{skill.description}}\">\n                    </div>\n                </div>\n\n                {{/each}}\n            </div>\n\n        </div>\n\n<!--        {{!&#45;&#45; Skills Tabs &#45;&#45;}}-->\n<!--        {{#each data.system.skills as | skill |}}-->\n<!--        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"{{skill.name}}\">-->\n\n<!--            <div>-->\n<!--                {{i}}-->\n<!--                <br>-->\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Description</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@index}}.description\" value=\"{{skill.description}}\"-->\n<!--                               placeholder=\"{{skill.description}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--&lt;!&ndash;                <strong>Description:</strong> <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{skill.description}}\" value=\"{{skill.description}}\" />&ndash;&gt;-->\n\n<!--                <br><br><strong>Nanoprograms:</strong><hr>-->\n<!--                {{#each skill.programs as | pgm |}}-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Name</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.name\" value=\"{{pgm.name}}\"-->\n<!--                               placeholder=\"{{pgm.name}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Description</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.name\" value=\"{{pgm.description}}\"-->\n<!--                               placeholder=\"{{pgm.description}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Nanopoint Cost</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.np\" value=\"{{pgm.np}}\"-->\n<!--                               placeholder=\"{{pgm.np}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>NCU</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.ncu\" value=\"{{pgm.ncu}}\"-->\n<!--                               placeholder=\"{{pgm.ncu}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Effect</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.effect\" value=\"{{pgm.effect}}\"-->\n<!--                               placeholder=\"{{pgm.effect}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--&lt;!&ndash;                    <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{pgm.name}}\" value=\"{{pgm.name}}\" />&ndash;&gt;-->\n<!--&lt;!&ndash;                    <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{pgm.description}}\" value=\"{{pgm.description}}\" placeholder=\"Description\" />&ndash;&gt;-->\n<!--&lt;!&ndash;                    <label class=\"eoa-inline-label\">Nanopoint Cost: </label><input class=\"eoa-inline-box eoa-width-30\" type=\"text\" name=\"{{pgm.np}}\" value=\"{{pgm.np}}\" />&ndash;&gt;-->\n<!--&lt;!&ndash;                    <label class=\"eoa-inline-label\">NCU: </label><input class=\"eoa-inline-box eoa-width-30\" type=\"text\" name=\"{{pgm.ncu}}\" value=\"{{pgm.ncu}}\" />&ndash;&gt;-->\n<!--&lt;!&ndash;                    <label class=\"eoa-inline-label\">Effect: </label><input class=\"eoa-inline-box eoa-width-480\" type=\"text\" name=\"{{pgm.effect}}\" value=\"{{pgm.effect}}\" />&ndash;&gt;-->\n<!--                <hr>-->\n<!--                {{/each}}-->\n<!--            </div>-->\n\n<!--        </div>-->\n<!--        {{/each}}-->\n    </section>\n\n<!--    <footer class=\"sheet-footer\">-->\n<!--        <button type=\"submit\"><i class=\"fas fa-save\"></i> {{localize submitText}}</button>-->\n<!--    </footer>-->\n</form>\n");

/***/ }),

/***/ "./src/module/actors/ActorSheet.ts":
/*!*****************************************!*\
  !*** ./src/module/actors/ActorSheet.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EoAActorSheet: () => (/* binding */ EoAActorSheet)
/* harmony export */ });
/**
 * Extend the basic ActorSheet with some very simple modifications
 * @extends {ActorSheet}
 */
class EoAActorSheet extends ActorSheet {
    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["boilerplate", "sheet", "actor"],
            template: "systems/eoa/templates/actor/actor-sheet.html",
            width: 600,
            height: 600,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "features" }]
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
        // context.data = actorData.data;
        // context.flags = actorData.flags;
        console.log("getData");
        console.log(actorData);
        // Prepare character data and items.
        if (actorData.type == 'hero') {
            this._prepareItems(context);
            this._prepareCharacterData(context);
        }
        // Prepare NPC data and items.
        if (actorData.type == 'npc') {
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
        if (!this.isEditable)
            return;
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
        return await Item.create(itemData, { parent: this.actor });
    }
}


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
/* harmony import */ var _static_templates_actor_actor_hero_sheet_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../static/templates/actor/actor-hero-sheet.html */ "./static/templates/actor/actor-hero-sheet.html");
/* harmony import */ var _static_templates_items_breed_sheet_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/templates/items/breed-sheet.html */ "./static/templates/items/breed-sheet.html");
/* harmony import */ var _static_templates_items_faction_sheet_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/templates/items/faction-sheet.html */ "./static/templates/items/faction-sheet.html");
/* harmony import */ var _static_templates_items_origin_sheet_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/templates/items/origin-sheet.html */ "./static/templates/items/origin-sheet.html");
/* harmony import */ var _static_templates_items_profession_sheet_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/templates/items/profession-sheet.html */ "./static/templates/items/profession-sheet.html");





class TemplatePreloader {
    /**
     * Preload a set of templates to compile and cache them for fast access during rendering
     */
    static async preloadHandlebarsTemplates() {
        const templatePaths = ["modules/template/templates/items/profession-sheet.html", "modules/template/templates/items/origin-sheet.html", "modules/template/templates/items/faction-sheet.html", "modules/template/templates/items/breed-sheet.html", "modules/template/templates/actor/actor-hero-sheet.html"];
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

/***/ "./src/module/items/FactionSheet.ts":
/*!******************************************!*\
  !*** ./src/module/items/FactionSheet.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EoAFactionSheet: () => (/* binding */ EoAFactionSheet)
/* harmony export */ });
/**
 * @extends {ItemSheet}
 */
class EoAFactionSheet extends ItemSheet {
    /** @inheritdoc */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["eoa", "sheet", "item"],
            template: "systems/eoa/templates/items/faction-sheet.html",
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


/***/ }),

/***/ "./src/helpers/dice.js":
/*!*****************************!*\
  !*** ./src/helpers/dice.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RollTest: () => (/* binding */ RollTest),
/* harmony export */   diceToFaces: () => (/* binding */ diceToFaces),
/* harmony export */   setFocusOption: () => (/* binding */ setFocusOption),
/* harmony export */   setMarksmanOption: () => (/* binding */ setMarksmanOption)
/* harmony export */ });
async function RollTest({
    numberOfDice = 2,
    numberOfSides = 6,
    defaultThreshold = 5,
    focusAction = false,
    marksmanTrait = false } = {}) {

    let threshold = defaultThreshold;
    if (focusAction && (focusAction === 'true'))
    {
        threshold = threshold - 1;
    }

    if (marksmanTrait && (marksmanTrait === 'true'))
    {
        threshold = threshold - 1;
    }
    
    const rollForumla = `${numberOfDice}d${numberOfSides}cs>=${threshold}`;

    // Execute the roll
    let result = await new Roll(rollForumla, {}).evaluate({'async': true})
    let renderedRoll = await renderTemplate("systems/tinyd6/templates/partials/test-result.hbs", { rollResult: result });
    // let renderedRoll = await result.render({ result: result, template: "systems/tinyd6/templates/partials/test-result.hbs" });

    const chatData = {
        speaker: ChatMessage.getSpeaker(),
        content: renderedRoll
    };

    result.toMessage(chatData);
}

function setFocusOption(form, element) {
    form.find(".die-roller > .roll-dice").each((n, tag) => {
        tag.dataset.enableFocus = element.checked
    });

    if (element.checked)
    {
        form.find(".action-modifiers .toggle-marksman").prop("disabled", false);
    }
    else
    {
        const marksmanElement = form.find(".action-modifiers .toggle-marksman");
        marksmanElement.prop("checked", false);
        marksmanElement.prop("disabled", true);
    }
}

function setMarksmanOption(form, element)
{
    form.find(".die-roller > .roll-dice").each((n, tag) => {
        tag.dataset.enableMarksman = element.checked;
    });
}

function diceToFaces(value, content)
{
    switch (value)
    {
        case 1:
            return "fa-dice-one";
        case 2:
            return "fa-dice-two";
        case 3:
            return "fa-dice-three";
        case 4:
            return "fa-dice-four";
        case 5:
            return "fa-dice-five";
        case 6:
            return "fa-dice-six";
    }

    return "fa-dice-d6";
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
/* harmony import */ var _module_items_FactionSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/items/FactionSheet */ "./src/module/items/FactionSheet.ts");
/* harmony import */ var _module_actors_ActorSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/actors/ActorSheet */ "./src/module/actors/ActorSheet.ts");
/* harmony import */ var _helpers_dice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/dice.js */ "./src/helpers/dice.js");







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
    Items.registerSheet("eoa", _module_items_FactionSheet__WEBPACK_IMPORTED_MODULE_4__.EoAFactionSheet, {
        types: ["faction"],
        makeDefault: true
    });
    Actors.registerSheet("eoa", _module_actors_ActorSheet__WEBPACK_IMPORTED_MODULE_5__.EoAActorSheet, {
        types: ["hero"],
        makeDefault: true
    });
    Handlebars.registerHelper("face", _helpers_dice_js__WEBPACK_IMPORTED_MODULE_6__.diceToFaces);
    Handlebars.registerHelper('ifCond', function (v1, v2, options) {
        if (v1 === v2) {
            return options.fn(this);
        }
        return options.inverse(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUM7UUFDZixXQUFXLEVBQUUsSUFBSTtLQUNwQixDQUFDLENBQUM7SUFFSCxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSx5REFBZ0IsQ0FBQyxDQUFDO0lBRXBELFVBQVUsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPO1FBQzFELElBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQ2IsT0FBTyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUM7SUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQztBQUVqRixDQUFDLENBQUMsQ0FBQztBQUdILElBQUksSUFBc0MsRUFBRSxDQUFDO0lBQ3pDLElBQUksS0FBVSxFQUFFLEVBa0JmO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9hY3Rvci9hY3Rvci1oZXJvLXNoZWV0Lmh0bWwiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL2JyZWVkLXNoZWV0Lmh0bWwiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL2ZhY3Rpb24tc2hlZXQuaHRtbCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvb3JpZ2luLXNoZWV0Lmh0bWwiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL3Byb2Zlc3Npb24tc2hlZXQuaHRtbCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvYWN0b3JzL0FjdG9yU2hlZXQudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2hlbHBlci9UZW1wbGF0ZVByZWxvYWRlci50cyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaXRlbXMvQnJlZWRTaGVldC50cyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaXRlbXMvRmFjdGlvblNoZWV0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL21vZHVsZS9pdGVtcy9PcmlnaW5TaGVldC50cyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaXRlbXMvUHJvZmVzc2lvblNoZWV0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL2hlbHBlcnMvZGljZS5qcyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL2VvYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIGNsYXNzPVxcXCJ7e2Nzc0NsYXNzfX0ge3thY3Rvci50eXBlfX0gZmxleGNvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiPlxcblxcbiAgICB7eyEtLSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXJcXFwiPlxcbiAgICAgICAge3shLS0gSGVhZGVyIHN0dWZmIGdvZXMgaGVyZSAtLX19XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlLWltZ1xcXCIgc3JjPVxcXCJ7e2FjdG9yLmltZ319XFxcIiBkYXRhLWVkaXQ9XFxcImltZ1xcXCIgdGl0bGU9XFxcInt7YWN0b3IubmFtZX19XFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIvPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFybmFtZVxcXCI+PGlucHV0IG5hbWU9XFxcIm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2FjdG9yLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWVcXFwiLz48L2gxPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcmFsaWFzXFxcIj48aW5wdXQgbmFtZT1cXFwiYmFja2dyb3VuZC5hbGlhc1xcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7YWN0b3IuYmFja2dyb3VuZC5hbGlhc319XFxcIiBwbGFjZWhvbGRlcj1cXFwiQWxpYXNcXFwiLz48L2gxPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc291cmNlcyBncmlkIGdyaWQtMmNvbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc291cmNlIGZsZXgtZ3JvdXAtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN5c3RlbS5oZWFsdGgudmFsdWVcXFwiIGNsYXNzPVxcXCJyZXNvdXJjZS1sYWJlbFxcXCI+SGVhbHRoPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc291cmNlLWNvbnRlbnQgZmxleHJvdyBmbGV4LWNlbnRlciBmbGV4LWJldHdlZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uaGVhbHRoLnZhbHVlXFxcIiB2YWx1ZT1cXFwie3tzeXN0ZW0uaGVhbHRoLnZhbHVlfX1cXFwiIGRhdGEtZHR5cGU9XFxcIk51bWJlclxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAvIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLmhlYWx0aC5tYXhcXFwiIHZhbHVlPVxcXCJ7e3N5c3RlbS5oZWFsdGgubWF4fX1cXFwiIGRhdGEtZHR5cGU9XFxcIk51bWJlclxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyZXNvdXJjZSBmbGV4LWdyb3VwLWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzeXN0ZW0ucG93ZXIudmFsdWVcXFwiIGNsYXNzPVxcXCJyZXNvdXJjZS1sYWJlbFxcXCI+UG93ZXI8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzb3VyY2UtY29udGVudCBmbGV4cm93IGZsZXgtY2VudGVyIGZsZXgtYmV0d2VlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5wb3dlci52YWx1ZVxcXCIgdmFsdWU9XFxcInt7c3lzdGVtLnBvd2VyLnZhbHVlfX1cXFwiIGRhdGEtZHR5cGU9XFxcIk51bWJlclxcXCIvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAvIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLnBvd2VyLm1heFxcXCIgdmFsdWU9XFxcInt7c3lzdGVtLnBvd2VyLm1heH19XFxcIiBkYXRhLWR0eXBlPVxcXCJOdW1iZXJcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj4ge3shLS0gY2xvc2VzIHRoZSBcXFwicmVzb3VyY2VzXFxcIiBkaXYgLS19fVxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFiaWxpdGllcyBncmlkIGdyaWQtM2NvbFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggc3lzdGVtLmFiaWxpdGllcyBhcyB8YWJpbGl0eSBrZXl8fX1cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWJpbGl0eSBmbGV4cm93IGZsZXgtZ3JvdXAtY2VudGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN5c3RlbS5hYmlsaXRpZXMue3trZXl9fS52YWx1ZVxcXCIgY2xhc3M9XFxcInJlc291cmNlLWxhYmVsXFxcIj57e2tleX19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uYWJpbGl0aWVzLnt7a2V5fX0udmFsdWVcXFwiIHZhbHVlPVxcXCJ7e2FiaWxpdHkudmFsdWV9fVxcXCIgZGF0YS1kdHlwZT1cXFwiTnVtYmVyXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiYWJpbGl0eS1tb2RcXFwiPnt7bnVtYmVyRm9ybWF0IGFiaWxpdHkubW9kIGRlY2ltYWxzPTAgc2lnbj10cnVlfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PiB7eyEtLSBjbG9zZXMgdGhlIFxcXCJoZWFkZXItZmllbGRzXFxcIiBkaXYgLS19fVxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAge3shLS0gU2hlZXQgVGFiIE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC10YWJzIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+RGVzY3JpcHRpb248L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcIml0ZW1zXFxcIj5JdGVtczwvYT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIFNoZWV0IEJvZHkgLS19fVxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2hlZXQtYm9keVxcXCI+XFxuXFxuICAgICAgICB7eyEtLSBCaW9ncmFwaHkgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBiaW9ncmFwaHlcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAge3tlZGl0b3IgY29udGVudD1zeXN0ZW0uYmlvZ3JhcGh5IHRhcmdldD1cXFwic3lzdGVtLmJpb2dyYXBoeVxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBPd25lZCBJdGVtcyBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGl0ZW1zXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiaXRlbXNcXFwiPlxcbiAgICAgICAgICAgIDxvbCBjbGFzcz1cXFwiaXRlbXMtbGlzdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaXRlbSBmbGV4cm93IGl0ZW0taGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0taW1hZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIj5OYW1lPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbS1jb250cm9sIGl0ZW0tY3JlYXRlXFxcIiB0aXRsZT1cXFwiQ3JlYXRlIGl0ZW1cXFwiIGRhdGEtdHlwZT1cXFwiaXRlbVxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1wbHVzXFxcIj48L2k+IEFkZCBpdGVtPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggaXRlbXMgYXMgfGl0ZW0gaWR8fX1cXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtIGZsZXhyb3dcXFwiIGRhdGEtaXRlbS1pZD1cXFwie3tpdGVtLl9pZH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0taW1hZ2VcXFwiPjxpbWcgc3JjPVxcXCJ7e2l0ZW0uaW1nfX1cXFwiIHRpdGxlPVxcXCJ7e2l0ZW0ubmFtZX19XFxcIiB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiLz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIj57e2l0ZW0ubmFtZX19PC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udHJvbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtLWNvbnRyb2wgaXRlbS1lZGl0XFxcIiB0aXRsZT1cXFwiRWRpdCBJdGVtXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLWVkaXRcXFwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0tY29udHJvbCBpdGVtLWRlbGV0ZVxcXCIgdGl0bGU9XFxcIkRlbGV0ZSBJdGVtXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLXRyYXNoXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvb2w+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9zZWN0aW9uPlxcbjwvZm9ybT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIGNsYXNzPVxcXCJ7e2Nzc0NsYXNzfX0gZmxleGNvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiPlxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcInNoZWV0LWhlYWRlciBmbGV4cm93XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWRldGFpbHMgZmxleHJvd1xcXCI+XFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFybmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5SYWNlTmFtZSd9fVxcXCI+XFxuICAgICAgICAgICAgPC9oMT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXN1YnRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJpdGVtLXR5cGVcXFwiPnt7aXRlbVR5cGV9fTwvaDQ+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpdGVtLXN0YXR1c1xcXCI+e3tpdGVtU3RhdHVzfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgTmF2aWdhdGlvbiAtLX19XFxuICAgIDxuYXYgY2xhc3M9XFxcInNoZWV0LW5hdmlnYXRpb24gdGFic1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkRlc2NyaXB0aW9uXFxcIn19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJsaWZlcGF0aFxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkxpZmVwYXRoXFxcIn19PC9hPlxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBCb2R5IC0tfX1cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICAgICAge3shLS0gRGVzY3JpcHRpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24udmFsdWUgdGFyZ2V0PVxcXCJzeXN0ZW0uZGVzY3JpcHRpb24udmFsdWVcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gTGlmZXBhdGggVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImxpZmVwYXRoXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5MaWZlcGF0aCBUYWJsZSAoUm9sbCAyZDYgb3IgQ2hvb3NlKTo8L3N0cm9uZz48aHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uc2tpbGxzIGFzIHwgc2tpbGwgfH19XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e3NraWxsLmxvd319LXt7c2tpbGwuaGlnaH19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tAaW5kZXh9fS5uYW1lXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5uYW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXg0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QGluZGV4fX0uZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjx1bD48bGk+PHN0cm9uZz5BdHRyaWJ1dGVzOjwvc3Ryb25nPiBTdHIge3tza2lsbC5zdHJ9fSwgU3RhIHt7c2tpbGwuc3RhfX0sIEFnaSB7e3NraWxsLmFnaX19LCBJbnQge3tza2lsbC5pbnR9fSwgU2VuIHt7c2tpbGwuc2VufX0sIFBzeSB7e3NraWxsLnBzeX19PC9saT48L3VsPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8aHI+XFxuXFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG48L2Zvcm0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuUmFjZU5hbWUnfX1cXFwiPlxcbiAgICAgICAgICAgIDwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zdWJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwibGlmZXBhdGhcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5MaWZlcGF0aFxcXCJ9fTwvYT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgQm9keSAtLX19XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaGVldC1ib2R5XFxcIj5cXG5cXG4gICAgICAgIHt7IS0tIERlc2NyaXB0aW9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHggIWltcG9ydGFudFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlIHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TW9uZXkgTXVsdGlwbGllciAoKiBzdGFydGluZyBPcmlnaW4gbW9uZXkuKTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLm1vbmV5X211bHRcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLm1vbmV5X211bHR9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7ZGF0YS5zeXN0ZW0ubW9uZXlfbXVsdH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gTGlmZXBhdGggVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImxpZmVwYXRoXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+TGlmZXBhdGggVGFibGUgKFJvbGwgMmQ2IG9yIENob29zZSk6PC9zdHJvbmc+PGhyPlxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLmxpZmVfcGF0aCBhcyB8IHNraWxsIHx9fVxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3tza2lsbC5sb3d9fS17e3NraWxsLmhpZ2h9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QGluZGV4fX0ubmFtZVxcXCIgdmFsdWU9XFxcInt7c2tpbGwubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5uYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwuZGVzY3JpcHRpb24gdGFyZ2V0PVxcXCJza2lsbC5kZXNjcmlwdGlvblxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwuZXF1aXBtZW50IHRhcmdldD1cXFwic2tpbGwuZXF1aXBtZW50XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvZm9ybT5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIGNsYXNzPVxcXCJ7e2Nzc0NsYXNzfX0gZmxleGNvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiPlxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcInNoZWV0LWhlYWRlciBmbGV4cm93XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWRldGFpbHMgZmxleHJvd1xcXCI+XFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFybmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5PcmlnaW5OYW1lJ319XFxcIj5cXG4gICAgICAgICAgICA8L2gxPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tc3VidGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIml0ZW0tdHlwZVxcXCI+e3tpdGVtVHlwZX19PC9oND5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tc3RhdHVzXFxcIj57e2l0ZW1TdGF0dXN9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwiaWRlYWxzXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuSWRlYWxzXFxcIn19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJsaWZlcGF0aFxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkxpZmVwYXRoXFxcIn19PC9hPlxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBCb2R5IC0tfX1cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICAgICAge3shLS0gRGVzY3JpcHRpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHggIWltcG9ydGFudFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlIHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhcnRpbmcgTW9uZXk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5zdGFydGluZ19tb25leVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uc3RhcnRpbmdfbW9uZXl9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7ZGF0YS5zeXN0ZW0uc3RhcnRpbmdfbW9uZXl9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5PcmlnaW4gU2tpbGxzIChDaG9vc2UgMyk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5vcmlnaW5fc2tpbGxzXFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5vcmlnaW5fc2tpbGxzfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2RhdGEuc3lzdGVtLm9yaWdpbl9za2lsbHN9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIElkZWFscyBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3cgYWN0aXZlXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiaWRlYWxzXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SWRlYWxzOjwvc3Ryb25nPjxocj5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5pZGVhbHMgYXMgfCBza2lsbCB8fX1cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4NFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLmlkZWFscy57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIExpZmVwYXRoIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJsaWZlcGF0aFxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICZuYnNwO1xcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkxpZmVwYXRoIFRhYmxlIChSb2xsIDJkNiBvciBDaG9vc2UpOjwvc3Ryb25nPjxocj5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5saWZlX3BhdGggYXMgfCBza2lsbCB8fX1cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7c2tpbGwubG93fX0te3tza2lsbC5oaWdofX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QGluZGV4fX0uZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBza2lsbC5kZXNjcmlwdGlvbiB0YXJnZXQ9XFxcImRhdGEuc3lzdGVtLmxpZmVfcGF0aC5kZXNjcmlwdGlvblxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG48L2Zvcm0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuUmFjZU5hbWUnfX1cXFwiPlxcbiAgICAgICAgICAgIDwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zdWJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwic2lnbmF0dXJlLWFiaWxpdHlcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5TaWduYXR1cmVBYmlsaXRpZXNcXFwifX08L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcInNraWxsc1xcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLlNraWxsc1xcXCJ9fTwvYT5cXG48IS0tICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnNraWxscyBhcyB8IHNraWxsIHx9fS0tPlxcbjwhLS0gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwie3tza2lsbC5uYW1lfX1cXFwiPnt7c2tpbGwubmFtZX19PC9hPi0tPlxcbjwhLS0gICAgICAgIHt7L2VhY2h9fS0tPlxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBCb2R5IC0tfX1cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICAgICAge3shLS0gRGVzY3JpcHRpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8IS0tICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tICAgICAgICAmbmJzcDstLT5cXG4gICAgICAgICAgICA8IS0tICAgICAgPC9kaXY+LS0+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHggIWltcG9ydGFudFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLm92ZXJ2aWV3IHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLm92ZXJ2aWV3XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmxhc2hiYWNrIEFiaWxpdHk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZsYXNoYmFjayBUcmlnZ2VyPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GbGFzaGJhY2sgRWZmZWN0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLmZsYXNoYmFja19hYmlsaXR5XFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5mbGFzaGJhY2tfYWJpbGl0eX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tkYXRhLnN5c3RlbS5mbGFzaGJhY2tfYWJpbGl0eX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX3RyaWdnZXJcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmZsYXNoYmFja190cmlnZ2VyfX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tkYXRhLnN5c3RlbS5mbGFzaGJhY2tfdHJpZ2dlcn19XFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5mbGFzaGJhY2tfdHJpZ2dlciB0YXJnZXQ9XFxcImRhdGEuc3lzdGVtLmZsYXNoYmFja190cmlnZ2VyXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgzXFxcIj5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLmZsYXNoYmFja19lZmZlY3RcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmZsYXNoYmFja19lZmZlY3R9fVxcXCItLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2RhdGEuc3lzdGVtLmZsYXNoYmFja19lZmZlY3R9fVxcXCI+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX2VmZmVjdCB0YXJnZXQ9XFxcImRhdGEuc3lzdGVtLmZsYXNoYmFja19lZmZlY3RcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gU2lnbmF0dXJlIEFiaWxpdHkgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwic2lnbmF0dXJlLWFiaWxpdHlcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlNpZ25hdHVyZSBUcmFpdHM8L3N0cm9uZz48aHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uc2lnbmF0dXJlX3RyYWl0cyBhcyB8IHNraWxsIHx9fVxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2lnbmF0dXJlX3RyYWl0cy57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2lnbmF0dXJlX3RyYWl0cy57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCI+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwuZGVzY3JpcHRpb24gdGFyZ2V0PVxcXCJza2lsbC5kZXNjcmlwdGlvblxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBTa2lsbHMgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwic2tpbGxzXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Ta2lsbCBMaXN0PC9zdHJvbmc+IChTdGFydGluZyBjaGFyYWN0ZXJzIGRpdmlkZSAxMCBwb2ludHMgYXJvdW5kIHRoaXMgbGlzdC4gTm8gc2tpbGwgY2FuIGJlIGhpZ2hlciB0aGFuIDIgYXQgY2hhcmFjdGVyIGNyZWF0aW9uKTo8aHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uc2tpbGxfbGlzdCBhcyB8IHNraWxsIHx9fVxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxfbGlzdC57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbF9saXN0Lnt7QGluZGV4fX0uZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbjwhLS0gICAgICAgIHt7ISYjNDU7JiM0NTsgU2tpbGxzIFRhYnMgJiM0NTsmIzQ1O319LS0+XFxuPCEtLSAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5za2lsbHMgYXMgfCBza2lsbCB8fX0tLT5cXG48IS0tICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvd1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcInt7c2tpbGwubmFtZX19XFxcIj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgPGRpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIHt7aX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8YnI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tJmx0OyEmbmRhc2g7ICAgICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+IDxpbnB1dCBjbGFzcz1cXFwiZW9hLWluLXBsYWNlLWJveFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIiAvPiZuZGFzaDsmZ3Q7LS0+XFxuXFxuPCEtLSAgICAgICAgICAgICAgICA8YnI+PGJyPjxzdHJvbmc+TmFub3Byb2dyYW1zOjwvc3Ryb25nPjxocj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIHt7I2VhY2ggc2tpbGwucHJvZ3JhbXMgYXMgfCBwZ20gfH19LS0+XFxuXFxuPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3BnbS5uYW1lfX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twZ20ubmFtZX19XFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkc1xcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tALi4vaW5kZXh9fS5wcm9ncmFtLnt7QGluZGV4fX0ubmFtZVxcXCIgdmFsdWU9XFxcInt7cGdtLmRlc2NyaXB0aW9ufX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twZ20uZGVzY3JpcHRpb259fVxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW5vcG9pbnQgQ29zdDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19Lm5wXFxcIiB2YWx1ZT1cXFwie3twZ20ubnB9fVxcXCItLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3BnbS5ucH19XFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5DVTwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19Lm5jdVxcXCIgdmFsdWU9XFxcInt7cGdtLm5jdX19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLm5jdX19XFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVmZmVjdDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19LmVmZmVjdFxcXCIgdmFsdWU9XFxcInt7cGdtLmVmZmVjdH19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLmVmZmVjdH19XFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0mbHQ7ISZuZGFzaDsgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZW9hLWluLXBsYWNlLWJveFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20ubmFtZX19XFxcIiB2YWx1ZT1cXFwie3twZ20ubmFtZX19XFxcIiAvPiZuZGFzaDsmZ3Q7LS0+XFxuPCEtLSZsdDshJm5kYXNoOyAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJlb2EtaW4tcGxhY2UtYm94XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ7e3BnbS5kZXNjcmlwdGlvbn19XFxcIiB2YWx1ZT1cXFwie3twZ20uZGVzY3JpcHRpb259fVxcXCIgcGxhY2Vob2xkZXI9XFxcIkRlc2NyaXB0aW9uXFxcIiAvPiZuZGFzaDsmZ3Q7LS0+XFxuPCEtLSZsdDshJm5kYXNoOyAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJlb2EtaW5saW5lLWxhYmVsXFxcIj5OYW5vcG9pbnQgQ29zdDogPC9sYWJlbD48aW5wdXQgY2xhc3M9XFxcImVvYS1pbmxpbmUtYm94IGVvYS13aWR0aC0zMFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20ubnB9fVxcXCIgdmFsdWU9XFxcInt7cGdtLm5wfX1cXFwiIC8+Jm5kYXNoOyZndDstLT5cXG48IS0tJmx0OyEmbmRhc2g7ICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImVvYS1pbmxpbmUtbGFiZWxcXFwiPk5DVTogPC9sYWJlbD48aW5wdXQgY2xhc3M9XFxcImVvYS1pbmxpbmUtYm94IGVvYS13aWR0aC0zMFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20ubmN1fX1cXFwiIHZhbHVlPVxcXCJ7e3BnbS5uY3V9fVxcXCIgLz4mbmRhc2g7Jmd0Oy0tPlxcbjwhLS0mbHQ7ISZuZGFzaDsgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZW9hLWlubGluZS1sYWJlbFxcXCI+RWZmZWN0OiA8L2xhYmVsPjxpbnB1dCBjbGFzcz1cXFwiZW9hLWlubGluZS1ib3ggZW9hLXdpZHRoLTQ4MFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20uZWZmZWN0fX1cXFwiIHZhbHVlPVxcXCJ7e3BnbS5lZmZlY3R9fVxcXCIgLz4mbmRhc2g7Jmd0Oy0tPlxcbjwhLS0gICAgICAgICAgICAgICAgPGhyPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAge3svZWFjaH19LS0+XFxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0gICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgIHt7L2VhY2h9fS0tPlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuPCEtLSAgICA8Zm9vdGVyIGNsYXNzPVxcXCJzaGVldC1mb290ZXJcXFwiPi0tPlxcbjwhLS0gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLXNhdmVcXFwiPjwvaT4ge3tsb2NhbGl6ZSBzdWJtaXRUZXh0fX08L2J1dHRvbj4tLT5cXG48IS0tICAgIDwvZm9vdGVyPi0tPlxcbjwvZm9ybT5cXG5cIjsiLCIvKipcbiAqIEV4dGVuZCB0aGUgYmFzaWMgQWN0b3JTaGVldCB3aXRoIHNvbWUgdmVyeSBzaW1wbGUgbW9kaWZpY2F0aW9uc1xuICogQGV4dGVuZHMge0FjdG9yU2hlZXR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFb0FBY3RvclNoZWV0IGV4dGVuZHMgQWN0b3JTaGVldCB7XG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJib2lsZXJwbGF0ZVwiLCBcInNoZWV0XCIsIFwiYWN0b3JcIl0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvYWN0b3IvYWN0b3Itc2hlZXQuaHRtbFwiLFxuICAgICAgICAgICAgd2lkdGg6IDYwMCxcbiAgICAgICAgICAgIGhlaWdodDogNjAwLFxuICAgICAgICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtdGFic1wiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJmZWF0dXJlc1wifV1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGBzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvYWN0b3IvYWN0b3ItJHt0aGlzLmFjdG9yLnR5cGV9LXNoZWV0Lmh0bWxgO1xuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgLy8gUmV0cmlldmUgdGhlIGRhdGEgc3RydWN0dXJlIGZyb20gdGhlIGJhc2Ugc2hlZXQuIFlvdSBjYW4gaW5zcGVjdCBvciBsb2dcbiAgICAgICAgLy8gdGhlIGNvbnRleHQgdmFyaWFibGUgdG8gc2VlIHRoZSBzdHJ1Y3R1cmUsIGJ1dCBzb21lIGtleSBwcm9wZXJ0aWVzIGZvclxuICAgICAgICAvLyBzaGVldHMgYXJlIHRoZSBhY3RvciBvYmplY3QsIHRoZSBkYXRhIG9iamVjdCwgd2hldGhlciBvciBub3QgaXQnc1xuICAgICAgICAvLyBlZGl0YWJsZSwgdGhlIGl0ZW1zIGFycmF5LCBhbmQgdGhlIGVmZmVjdHMgYXJyYXkuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICAgICAgLy8gVXNlIGEgc2FmZSBjbG9uZSBvZiB0aGUgYWN0b3IgZGF0YSBmb3IgZnVydGhlciBvcGVyYXRpb25zLlxuICAgICAgICBjb25zdCBhY3RvckRhdGEgPSB0aGlzLmFjdG9yLnRvT2JqZWN0KGZhbHNlKTtcblxuICAgICAgICAvLyBBZGQgdGhlIGFjdG9yJ3MgZGF0YSB0byBjb250ZXh0LmRhdGEgZm9yIGVhc2llciBhY2Nlc3MsIGFzIHdlbGwgYXMgZmxhZ3MuXG4gICAgICAgIC8vIGNvbnRleHQuZGF0YSA9IGFjdG9yRGF0YS5kYXRhO1xuICAgICAgICAvLyBjb250ZXh0LmZsYWdzID0gYWN0b3JEYXRhLmZsYWdzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldERhdGFcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGFjdG9yRGF0YSk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBjaGFyYWN0ZXIgZGF0YSBhbmQgaXRlbXMuXG4gICAgICAgIGlmIChhY3RvckRhdGEudHlwZSA9PSAnaGVybycpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXBhcmVJdGVtcyhjb250ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXBhcmVDaGFyYWN0ZXJEYXRhKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlcGFyZSBOUEMgZGF0YSBhbmQgaXRlbXMuXG4gICAgICAgIGlmIChhY3RvckRhdGEudHlwZSA9PSAnbnBjJykge1xuICAgICAgICAgICAgdGhpcy5fcHJlcGFyZUl0ZW1zKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHJvbGwgZGF0YSBmb3IgVGlueU1DRSBlZGl0b3JzLlxuICAgICAgICAvLyBjb250ZXh0LnJvbGxEYXRhID0gY29udGV4dC5hY3Rvci5nZXRSb2xsRGF0YSgpO1xuXG4gICAgICAgIC8vIFByZXBhcmUgYWN0aXZlIGVmZmVjdHNcbiAgICAgICAgLy8gY29udGV4dC5lZmZlY3RzID0gcHJlcGFyZUFjdGl2ZUVmZmVjdENhdGVnb3JpZXModGhpcy5hY3Rvci5lZmZlY3RzKTtcblxuICAgICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcmdhbml6ZSBhbmQgY2xhc3NpZnkgSXRlbXMgZm9yIENoYXJhY3RlciBzaGVldHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYWN0b3JEYXRhIFRoZSBhY3RvciB0byBwcmVwYXJlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIF9wcmVwYXJlSXRlbXMoY29udGV4dCkge1xuICAgICAgICAvLyBJbml0aWFsaXplIGNvbnRhaW5lcnMuXG4gICAgICAgIGNvbnN0IGdlYXIgPSBbXTtcbiAgICAgICAgY29uc3QgZmVhdHVyZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc3BlbGxzID0ge1xuICAgICAgICAgICAgMDogW10sXG4gICAgICAgICAgICAxOiBbXSxcbiAgICAgICAgICAgIDI6IFtdLFxuICAgICAgICAgICAgMzogW10sXG4gICAgICAgICAgICA0OiBbXSxcbiAgICAgICAgICAgIDU6IFtdLFxuICAgICAgICAgICAgNjogW10sXG4gICAgICAgICAgICA3OiBbXSxcbiAgICAgICAgICAgIDg6IFtdLFxuICAgICAgICAgICAgOTogW11cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggaXRlbXMsIGFsbG9jYXRpbmcgdG8gY29udGFpbmVyc1xuICAgICAgICAvLyBmb3IgKGxldCBpIG9mIGNvbnRleHQuaXRlbXMpIHtcbiAgICAgICAgLy8gICAgIGkuaW1nID0gaS5pbWcgfHwgREVGQVVMVF9UT0tFTjtcbiAgICAgICAgLy8gICAgIC8vIEFwcGVuZCB0byBnZWFyLlxuICAgICAgICAvLyAgICAgaWYgKGkudHlwZSA9PT0gJ2l0ZW0nKSB7XG4gICAgICAgIC8vICAgICAgICAgZ2Vhci5wdXNoKGkpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgLy8gQXBwZW5kIHRvIGZlYXR1cmVzLlxuICAgICAgICAvLyAgICAgZWxzZSBpZiAoaS50eXBlID09PSAnZmVhdHVyZScpIHtcbiAgICAgICAgLy8gICAgICAgICBmZWF0dXJlcy5wdXNoKGkpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgLy8gQXBwZW5kIHRvIHNwZWxscy5cbiAgICAgICAgLy8gICAgIGVsc2UgaWYgKGkudHlwZSA9PT0gJ3NwZWxsJykge1xuICAgICAgICAvLyAgICAgICAgIGlmIChpLnN5c3RlbS5zcGVsbExldmVsICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICBzcGVsbHNbaS5zeXN0ZW0uc3BlbGxMZXZlbF0ucHVzaChpKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBBc3NpZ24gYW5kIHJldHVyblxuICAgICAgICBjb250ZXh0LmdlYXIgPSBnZWFyO1xuICAgICAgICBjb250ZXh0LmZlYXR1cmVzID0gZmVhdHVyZXM7XG4gICAgICAgIGNvbnRleHQuc3BlbGxzID0gc3BlbGxzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGFuZCBjbGFzc2lmeSBJdGVtcyBmb3IgQ2hhcmFjdGVyIHNoZWV0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhY3RvckRhdGEgVGhlIGFjdG9yIHRvIHByZXBhcmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgX3ByZXBhcmVDaGFyYWN0ZXJEYXRhKGNvbnRleHQpIHtcbiAgICAgICAgLy8gSGFuZGxlIGFiaWxpdHkgc2NvcmVzLlxuICAgICAgICAvLyBmb3IgKGxldCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoY29udGV4dC5zeXN0ZW0uYWJpbGl0aWVzKSkge1xuICAgICAgICAvLyAgICAgdi5sYWJlbCA9IGdhbWUuaTE4bi5sb2NhbGl6ZShDT05GSUcuQk9JTEVSUExBVEUuYWJpbGl0aWVzW2tdKSA/PyBrO1xuICAgICAgICAvLyB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiX3ByZXBhcmVDaGFyYWN0ZXJEYXRhXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xuICAgICAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcblxuICAgICAgICAvLyBSZW5kZXIgdGhlIGl0ZW0gc2hlZXQgZm9yIHZpZXdpbmcvZWRpdGluZyBwcmlvciB0byB0aGUgZWRpdGFibGUgY2hlY2suXG4gICAgICAgIGh0bWwuZmluZCgnLml0ZW0tZWRpdCcpLmNsaWNrKGV2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gJChldi5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKFwiLml0ZW1cIik7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5hY3Rvci5pdGVtcy5nZXQobGkuZGF0YShcIml0ZW1JZFwiKSk7XG4gICAgICAgICAgICBpZiAoKGl0ZW0pICYmIChpdGVtLnNoZWV0KSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2hlZXQucmVuZGVyKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgaGVyZSBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgc2hlZXQgaXMgZWRpdGFibGVcbiAgICAgICAgaWYgKCF0aGlzLmlzRWRpdGFibGUpIHJldHVybjtcblxuICAgICAgICAvLyBBZGQgSW52ZW50b3J5IEl0ZW1cbiAgICAgICAgaHRtbC5maW5kKCcuaXRlbS1jcmVhdGUnKS5jbGljayh0aGlzLl9vbkl0ZW1DcmVhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgLy8gRGVsZXRlIEludmVudG9yeSBJdGVtXG4gICAgICAgIGh0bWwuZmluZCgnLml0ZW0tZGVsZXRlJykuY2xpY2soZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSAkKGV2LmN1cnJlbnRUYXJnZXQpLnBhcmVudHMoXCIuaXRlbVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFjdG9yLml0ZW1zLmdldChsaS5kYXRhKFwiaXRlbUlkXCIpKTtcbiAgICAgICAgICAgIGlmICgoaXRlbSkgJiYgKGl0ZW0uc2hlZXQpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kZWxldGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpLnNsaWRlVXAoMjAwLCAoKSA9PiB0aGlzLnJlbmRlcihmYWxzZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNyZWF0aW5nIGEgbmV3IE93bmVkIEl0ZW0gZm9yIHRoZSBhY3RvciB1c2luZyBpbml0aWFsIGRhdGEgZGVmaW5lZCBpbiB0aGUgSFRNTCBkYXRhc2V0XG4gICAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgICBUaGUgb3JpZ2luYXRpbmcgY2xpY2sgZXZlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9vbkl0ZW1DcmVhdGUoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICAgICAgLy8gR2V0IHRoZSB0eXBlIG9mIGl0ZW0gdG8gY3JlYXRlLlxuICAgICAgICBjb25zdCB0eXBlID0gaGVhZGVyLmRhdGFzZXQudHlwZTtcbiAgICAgICAgLy8gR3JhYiBhbnkgZGF0YSBhc3NvY2lhdGVkIHdpdGggdGhpcyBjb250cm9sLlxuICAgICAgICBjb25zdCBkYXRhID0gZHVwbGljYXRlKGhlYWRlci5kYXRhc2V0KTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBhIGRlZmF1bHQgbmFtZS5cbiAgICAgICAgY29uc3QgbmFtZSA9IGBOZXcgJHt0eXBlLmNhcGl0YWxpemUoKX1gO1xuICAgICAgICAvLyBQcmVwYXJlIHRoZSBpdGVtIG9iamVjdC5cbiAgICAgICAgY29uc3QgaXRlbURhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSB0eXBlIGZyb20gdGhlIGRhdGFzZXQgc2luY2UgaXQncyBpbiB0aGUgaXRlbURhdGEudHlwZSBwcm9wLlxuICAgICAgICBkZWxldGUgaXRlbURhdGEuZGF0YVtcInR5cGVcIl07XG5cbiAgICAgICAgLy8gRmluYWxseSwgY3JlYXRlIHRoZSBpdGVtIVxuICAgICAgICByZXR1cm4gYXdhaXQgSXRlbS5jcmVhdGUoaXRlbURhdGEsIHtwYXJlbnQ6IHRoaXMuYWN0b3J9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2FjdG9yL2FjdG9yLWhlcm8tc2hlZXQuaHRtbFwiOyBpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL2JyZWVkLXNoZWV0Lmh0bWxcIjsgaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9mYWN0aW9uLXNoZWV0Lmh0bWxcIjsgaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9vcmlnaW4tc2hlZXQuaHRtbFwiOyBpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL3Byb2Zlc3Npb24tc2hlZXQuaHRtbFwiO1xuXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVQcmVsb2FkZXIge1xuICAgIC8qKlxuICAgICAqIFByZWxvYWQgYSBzZXQgb2YgdGVtcGxhdGVzIHRvIGNvbXBpbGUgYW5kIGNhY2hlIHRoZW0gZm9yIGZhc3QgYWNjZXNzIGR1cmluZyByZW5kZXJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgYXN5bmMgcHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlUGF0aHMgPSBbXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9pdGVtcy9wcm9mZXNzaW9uLXNoZWV0Lmh0bWxcIiwgXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9pdGVtcy9vcmlnaW4tc2hlZXQuaHRtbFwiLCBcIm1vZHVsZXMvdGVtcGxhdGUvdGVtcGxhdGVzL2l0ZW1zL2ZhY3Rpb24tc2hlZXQuaHRtbFwiLCBcIm1vZHVsZXMvdGVtcGxhdGUvdGVtcGxhdGVzL2l0ZW1zL2JyZWVkLXNoZWV0Lmh0bWxcIiwgXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9hY3Rvci9hY3Rvci1oZXJvLXNoZWV0Lmh0bWxcIl07XG4gICAgICAgIHJldHVybiBsb2FkVGVtcGxhdGVzKHRlbXBsYXRlUGF0aHMpO1xuICAgIH1cbn1cbiIsIlxuLyoqXG4gKiBAZXh0ZW5kcyB7SXRlbVNoZWV0fVxuICovXG5leHBvcnQgY2xhc3MgRW9BQnJlZWRTaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvYnJlZWQtc2hlZXQuaHRtbFwiLFxuICAgICAgd2lkdGg6IDg1MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtbmF2aWdhdGlvblwiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwifV0sXG4gICAgICBkcmFnRHJvcDogW3tkcmFnU2VsZWN0b3I6IFwiLmRyYWdnYWJsZVwiLCBkcm9wU2VsZWN0b3I6IG51bGx9XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICAvLyBjb250ZXh0LnN5c3RlbURhdGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xuICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuXG4gICAgLy8gYWNjZXNzaWJpbGl0eSh0aGlzLml0ZW0sIGh0bWwpO1xuXG4gICAgLy8gRXZlcnl0aGluZyBiZWxvdyBoZXJlIGlzIG9ubHkgbmVlZGVkIGlmIHRoZSBzaGVldCBpcyBlZGl0YWJsZVxuICAgIGlmICggIXRoaXMuaXNFZGl0YWJsZSApIHJldHVybjtcbiAgfVxufVxuIiwiXG4vKipcbiAqIEBleHRlbmRzIHtJdGVtU2hlZXR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFb0FGYWN0aW9uU2hlZXQgZXh0ZW5kcyBJdGVtU2hlZXQge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gZm91bmRyeS51dGlscy5tZXJnZU9iamVjdChzdXBlci5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgY2xhc3NlczogW1wiZW9hXCIsIFwic2hlZXRcIiwgXCJpdGVtXCJdLFxuICAgICAgdGVtcGxhdGU6IFwic3lzdGVtcy9lb2EvdGVtcGxhdGVzL2l0ZW1zL2ZhY3Rpb24tc2hlZXQuaHRtbFwiLFxuICAgICAgd2lkdGg6IDg1MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtbmF2aWdhdGlvblwiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwifV0sXG4gICAgICBkcmFnRHJvcDogW3tkcmFnU2VsZWN0b3I6IFwiLmRyYWdnYWJsZVwiLCBkcm9wU2VsZWN0b3I6IG51bGx9XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICAvLyBjb250ZXh0LnN5c3RlbURhdGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xuICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuXG4gICAgLy8gYWNjZXNzaWJpbGl0eSh0aGlzLml0ZW0sIGh0bWwpO1xuXG4gICAgLy8gRXZlcnl0aGluZyBiZWxvdyBoZXJlIGlzIG9ubHkgbmVlZGVkIGlmIHRoZSBzaGVldCBpcyBlZGl0YWJsZVxuICAgIGlmICggIXRoaXMuaXNFZGl0YWJsZSApIHJldHVybjtcbiAgfVxufVxuIiwiXG4vKipcbiAqIEBleHRlbmRzIHtJdGVtU2hlZXR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFb0FPcmlnaW5TaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvb3JpZ2luLXNoZWV0Lmh0bWxcIixcbiAgICAgIHdpZHRoOiA4NTAsXG4gICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgIHRhYnM6IFt7bmF2U2VsZWN0b3I6IFwiLnNoZWV0LW5hdmlnYXRpb25cIiwgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIn1dLFxuICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5kcmFnZ2FibGVcIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3VwZXIuZ2V0RGF0YSgpO1xuXG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgLy8gY29udGV4dC5zeXN0ZW1EYXRhID0gY29udGV4dC5kYXRhLnN5c3RlbTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcbiAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcblxuICAgIC8vIGFjY2Vzc2liaWxpdHkodGhpcy5pdGVtLCBodG1sKTtcblxuICAgIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgaGVyZSBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgc2hlZXQgaXMgZWRpdGFibGVcbiAgICBpZiAoICF0aGlzLmlzRWRpdGFibGUgKSByZXR1cm47XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFb0FQcm9mZXNzaW9uU2hlZXQgZXh0ZW5kcyBJdGVtU2hlZXQge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gZm91bmRyeS51dGlscy5tZXJnZU9iamVjdChzdXBlci5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgY2xhc3NlczogW1wiZW9hXCIsIFwic2hlZXRcIiwgXCJpdGVtXCJdLFxuICAgICAgdGVtcGxhdGU6IFwic3lzdGVtcy9lb2EvdGVtcGxhdGVzL2l0ZW1zL3Byb2Zlc3Npb24tc2hlZXQuaHRtbFwiLFxuICAgICAgd2lkdGg6IDg1MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtbmF2aWdhdGlvblwiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwifV0sXG4gICAgICBkcmFnRHJvcDogW3tkcmFnU2VsZWN0b3I6IFwiLmRyYWdnYWJsZVwiLCBkcm9wU2VsZWN0b3I6IG51bGx9XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICAvLyBjb250ZXh0LnN5c3RlbURhdGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xuICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuXG4gICAgLy8gYWNjZXNzaWJpbGl0eSh0aGlzLml0ZW0sIGh0bWwpO1xuXG4gICAgLy8gRXZlcnl0aGluZyBiZWxvdyBoZXJlIGlzIG9ubHkgbmVlZGVkIGlmIHRoZSBzaGVldCBpcyBlZGl0YWJsZVxuICAgIGlmICggIXRoaXMuaXNFZGl0YWJsZSApIHJldHVybjtcbiAgfVxufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFJvbGxUZXN0KHtcbiAgICBudW1iZXJPZkRpY2UgPSAyLFxuICAgIG51bWJlck9mU2lkZXMgPSA2LFxuICAgIGRlZmF1bHRUaHJlc2hvbGQgPSA1LFxuICAgIGZvY3VzQWN0aW9uID0gZmFsc2UsXG4gICAgbWFya3NtYW5UcmFpdCA9IGZhbHNlIH0gPSB7fSkge1xuXG4gICAgbGV0IHRocmVzaG9sZCA9IGRlZmF1bHRUaHJlc2hvbGQ7XG4gICAgaWYgKGZvY3VzQWN0aW9uICYmIChmb2N1c0FjdGlvbiA9PT0gJ3RydWUnKSlcbiAgICB7XG4gICAgICAgIHRocmVzaG9sZCA9IHRocmVzaG9sZCAtIDE7XG4gICAgfVxuXG4gICAgaWYgKG1hcmtzbWFuVHJhaXQgJiYgKG1hcmtzbWFuVHJhaXQgPT09ICd0cnVlJykpXG4gICAge1xuICAgICAgICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgLSAxO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByb2xsRm9ydW1sYSA9IGAke251bWJlck9mRGljZX1kJHtudW1iZXJPZlNpZGVzfWNzPj0ke3RocmVzaG9sZH1gO1xuXG4gICAgLy8gRXhlY3V0ZSB0aGUgcm9sbFxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBuZXcgUm9sbChyb2xsRm9ydW1sYSwge30pLmV2YWx1YXRlKHsnYXN5bmMnOiB0cnVlfSlcbiAgICBsZXQgcmVuZGVyZWRSb2xsID0gYXdhaXQgcmVuZGVyVGVtcGxhdGUoXCJzeXN0ZW1zL3RpbnlkNi90ZW1wbGF0ZXMvcGFydGlhbHMvdGVzdC1yZXN1bHQuaGJzXCIsIHsgcm9sbFJlc3VsdDogcmVzdWx0IH0pO1xuICAgIC8vIGxldCByZW5kZXJlZFJvbGwgPSBhd2FpdCByZXN1bHQucmVuZGVyKHsgcmVzdWx0OiByZXN1bHQsIHRlbXBsYXRlOiBcInN5c3RlbXMvdGlueWQ2L3RlbXBsYXRlcy9wYXJ0aWFscy90ZXN0LXJlc3VsdC5oYnNcIiB9KTtcblxuICAgIGNvbnN0IGNoYXREYXRhID0ge1xuICAgICAgICBzcGVha2VyOiBDaGF0TWVzc2FnZS5nZXRTcGVha2VyKCksXG4gICAgICAgIGNvbnRlbnQ6IHJlbmRlcmVkUm9sbFxuICAgIH07XG5cbiAgICByZXN1bHQudG9NZXNzYWdlKGNoYXREYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZvY3VzT3B0aW9uKGZvcm0sIGVsZW1lbnQpIHtcbiAgICBmb3JtLmZpbmQoXCIuZGllLXJvbGxlciA+IC5yb2xsLWRpY2VcIikuZWFjaCgobiwgdGFnKSA9PiB7XG4gICAgICAgIHRhZy5kYXRhc2V0LmVuYWJsZUZvY3VzID0gZWxlbWVudC5jaGVja2VkXG4gICAgfSk7XG5cbiAgICBpZiAoZWxlbWVudC5jaGVja2VkKVxuICAgIHtcbiAgICAgICAgZm9ybS5maW5kKFwiLmFjdGlvbi1tb2RpZmllcnMgLnRvZ2dsZS1tYXJrc21hblwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBjb25zdCBtYXJrc21hbkVsZW1lbnQgPSBmb3JtLmZpbmQoXCIuYWN0aW9uLW1vZGlmaWVycyAudG9nZ2xlLW1hcmtzbWFuXCIpO1xuICAgICAgICBtYXJrc21hbkVsZW1lbnQucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xuICAgICAgICBtYXJrc21hbkVsZW1lbnQucHJvcChcImRpc2FibGVkXCIsIHRydWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldE1hcmtzbWFuT3B0aW9uKGZvcm0sIGVsZW1lbnQpXG57XG4gICAgZm9ybS5maW5kKFwiLmRpZS1yb2xsZXIgPiAucm9sbC1kaWNlXCIpLmVhY2goKG4sIHRhZykgPT4ge1xuICAgICAgICB0YWcuZGF0YXNldC5lbmFibGVNYXJrc21hbiA9IGVsZW1lbnQuY2hlY2tlZDtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpY2VUb0ZhY2VzKHZhbHVlLCBjb250ZW50KVxue1xuICAgIHN3aXRjaCAodmFsdWUpXG4gICAge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1kaWNlLW9uZVwiO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1kaWNlLXR3b1wiO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1kaWNlLXRocmVlXCI7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWRpY2UtZm91clwiO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1kaWNlLWZpdmVcIjtcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtZGljZS1zaXhcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJmYS1kaWNlLWQ2XCI7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBUZW1wbGF0ZVByZWxvYWRlciB9IGZyb20gXCIuL21vZHVsZS9oZWxwZXIvVGVtcGxhdGVQcmVsb2FkZXJcIjtcbmltcG9ydCB7IEVvQUJyZWVkU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvQnJlZWRTaGVldFwiO1xuaW1wb3J0IHsgRW9BUHJvZmVzc2lvblNoZWV0IH0gZnJvbSBcIi4vbW9kdWxlL2l0ZW1zL1Byb2Zlc3Npb25TaGVldFwiO1xuaW1wb3J0IHsgRW9BT3JpZ2luU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvT3JpZ2luU2hlZXRcIjtcbmltcG9ydCB7IEVvQUZhY3Rpb25TaGVldCB9IGZyb20gXCIuL21vZHVsZS9pdGVtcy9GYWN0aW9uU2hlZXRcIjtcbmltcG9ydCB7IEVvQUFjdG9yU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvYWN0b3JzL0FjdG9yU2hlZXRcIjtcbmltcG9ydCAqIGFzIERpY2UgZnJvbSBcIi4vaGVscGVycy9kaWNlLmpzXCI7XG5cbkhvb2tzLm9uY2UoXCJpbml0XCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PUVkZ2Ugb2YgQW5hcmNoeT09PT09PT09PT09PT09PT09PT09PVwiKVxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PUxvYWQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXG5cbiAgICBJdGVtcy51bnJlZ2lzdGVyU2hlZXQoXCJjb3JlXCIsIEl0ZW1TaGVldCk7XG4gICAgSXRlbXMucmVnaXN0ZXJTaGVldChcImVvYVwiLCBFb0FCcmVlZFNoZWV0LCB7XG4gICAgICAgIHR5cGVzOiBbXCJicmVlZFwiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcbiAgICBJdGVtcy5yZWdpc3RlclNoZWV0KFwiZW9hXCIsIEVvQVByb2Zlc3Npb25TaGVldCwge1xuICAgICAgICB0eXBlczogW1wicHJvZmVzc2lvblwiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcbiAgICBJdGVtcy5yZWdpc3RlclNoZWV0KFwiZW9hXCIsIEVvQU9yaWdpblNoZWV0LCB7XG4gICAgICAgIHR5cGVzOiBbXCJvcmlnaW5cIl0sXG4gICAgICAgIG1ha2VEZWZhdWx0OiB0cnVlXG4gICAgfSk7XG4gICAgSXRlbXMucmVnaXN0ZXJTaGVldChcImVvYVwiLCBFb0FGYWN0aW9uU2hlZXQsIHtcbiAgICAgICAgdHlwZXM6IFtcImZhY3Rpb25cIl0sXG4gICAgICAgIG1ha2VEZWZhdWx0OiB0cnVlXG4gICAgfSk7XG4gICAgQWN0b3JzLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BQWN0b3JTaGVldCwge1xuICAgICAgICB0eXBlczogW1wiaGVyb1wiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcblxuICAgIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJmYWNlXCIsIERpY2UuZGljZVRvRmFjZXMpO1xuXG4gICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcignaWZDb25kJywgZnVuY3Rpb24odjEsIHYyLCBvcHRpb25zKSB7XG4gICAgICBpZih2MSA9PT0gdjIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuZm4odGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0pO1xufSk7XG5cbkhvb2tzLm9uY2UoXCJyZWFkeVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT1FZGdlIG9mIEFuYXJjaHk9PT09PT09PT09PT09PT09PT09PT09PVwiKVxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1SZWFkeT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIilcblxufSk7XG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuXG4gICAgICAgIGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImFwcGx5XCIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgaW4gX3RlbXBsYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF90ZW1wbGF0ZUNhY2hlLCB0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90ZW1wbGF0ZUNhY2hlW3RlbXBsYXRlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFRlbXBsYXRlUHJlbG9hZGVyLnByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcHBsaWNhdGlvbiBpbiB1aS53aW5kb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodWkud2luZG93cywgYXBwbGljYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aS53aW5kb3dzW2FwcGxpY2F0aW9uXS5yZW5kZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=