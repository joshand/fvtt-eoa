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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\n    .biography-editor .editor {\n        min-height: 100px !important;\n        height: 100%;\n        background-color: lightgray;\n        border: 1px solid darkgray;\n    }\n    .editor {\n        min-height: 100px !important;\n        height: 100px;\n        background-color: lightgray;\n        border: 1px solid darkgray;\n    }\n    td {\n        padding: 2px !important;\n    }\n    label.checkbox {\n        padding: 0;\n        height: 40px;\n        line-height: 0 !important;\n    }\n    .checkbox {\n        display: flex;\n        align-items: center;\n    }\n    .checkbox input[type=\"radio\"] {\n        position: relative;\n        top: 0; /* Adjust the vertical position as needed */\n        margin-right: 5px; /* Adjust the spacing between radio button and content */\n    }\n    form .form-group label {\n        line-height: 15px;\n    }\n    .number-spinner .input-group-btn:last-child>.btn {\n        margin-left: -1px;\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n    .number-spinner .form-control {\n        width: 30px;\n        text-align: center;\n    }\n    .btn-plus,\n    .btn-minus {\n        width: 20px;\n    }\n    .content {\n        display: flex;\n        align-items: center;\n        /* Style the content div as needed */\n    }\n    .badge {\n        background-color: blue; /* Background color of the badge */\n        color: #fff; /* Text color of the badge */\n        border-radius: 50%; /* To make the badge round */\n        border: 1px solid white;\n        width: 25px; /* Adjust width and height as needed */\n        height: 25px;\n        text-align: center; /* Center the text */\n        margin-left: 5px; /* Adjust margin to place it next to the label */\n        padding-top: 3px;\n        font-size: small;\n    }\n</style>\n\n<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\" style=\"flex: none !important;\">\n    {{!-- Sheet Header --}}\n    <header class=\"sheet-header\">\n        {{!-- Header stuff goes here --}}\n        <img class=\"profile-img\" src=\"{{actor.img}}\" data-edit=\"img\" title=\"{{actor.name}}\" height=\"100\" width=\"100\" style=\"height: 128px !important; width: 128px !important;\"/>\n        <div class=\"header-fields\">\n            <h1 class=\"charname\">\n                <div class=\"form-fields flex1\" style=\"margin: 0 !important;\">\n                    <input name=\"name\" type=\"text\" value=\"{{actor.name}}\" placeholder=\"Name\" style=\"width:calc(100% - 110px)\"/>\n                    <input name=\"system.current_tl\" type=\"text\" value=\"{{data.system.current_tl}}\" placeholder=\"\" style=\"width:50px;\"/>\n                </div>\n            </h1>\n            {{#if has_stats}}\n                {{#each breed.0.system.skills as | skill |}}\n                    {{#if (eq skill.name ../data.system.breed_lifepath)}}\n                    <h3 style=\"padding: 0 15px; border-bottom: none !important;\">\n                        <table style=\"border: 1px black solid\">\n                            <tr>\n                                <td>\n                                    <label>STR</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.str}}</label>\n                                </td>\n                                <td>\n                                    <label>STA</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.sta}}</label>\n                                </td>\n                                <td>\n                                    <label>AGI</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.agi}}</label>\n                                </td>\n                                <td>\n                                    <label>INT</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.int}}</label>\n                                </td>\n                                <td>\n                                    <label>SEN</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.sen}}</label>\n                                </td>\n                                <td>\n                                    <label>PSY</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.psy}}</label>\n                                </td>\n                            </tr>\n                        </table>\n                    </h3>\n                    {{/if}}\n                {{/each}}\n            {{else}}\n                <h3 style=\"padding: 0 15px; border-bottom: none !important;\">\n                    <table style=\"border: 1px black solid\">\n                        <tr>\n                            <td>\n                                <label>STR</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>STA</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>AGI</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>INT</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>SEN</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>PSY</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                        </tr>\n                    </table>\n                </h3>\n            {{/if}}\n\n            <h3 style=\"padding: 0 15px; border-bottom: none !important;\">\n                <table style=\"border: 1px black solid\">\n                    <tr>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>HP</label>\n                                <input type=\"text\" name=\"system.current_hp\" value=\"{{data.system.current_hp}}\" placeholder=\"0\" style=\"width: 45px;\">\n                                <label>/</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{max_hp}}</label>\n                                {{#if (eq breed.0.system.bonus.hp 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.hp}}</div>\n                                {{/if}}\n                                <input type=\"checkbox\" name=\"system.safety_on\" {{checked data.system.safety_on}}>\n                                <label>Safety</label>\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>NP</label>\n                                <input type=\"text\" name=\"system.current_np\" value=\"{{data.system.current_np}}\" placeholder=\"0\" style=\"width: 45px;\">\n                                <label>/</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{max_np}}</label>\n                                {{#if (eq breed.0.system.bonus.np 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.np}}</div>\n                                {{/if}}\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>NCU</label>\n<!--                                <input type=\"text\" name=\"system.current_ncu\" value=\"{{data.system.current_ncu}}\" placeholder=\"0\" style=\"width: 45px;\">-->\n                                    <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{consumed_ncu}}</label>\n                                <label>/</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{max_ncu}}</label>\n                                {{#if (eq breed.0.system.bonus.ncu 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.ncu}}</div>\n                                {{/if}}\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n            </h3>\n\n            <h3 style=\"padding: 0 15px\">\n                <table style=\"border: 1px black solid\">\n                    <tr>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>SP</label>\n                                <input type=\"text\" name=\"system.current_sp\" value=\"{{data.system.current_sp}}\" placeholder=\"0\" style=\"width: 45px;\">\n                                <label>/</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{max_sp}}</label>\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>Init</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{init}}</label>\n                                {{#if (eq breed.0.system.bonus.init 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.init}}</div>\n                                {{/if}}\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>IP</label>\n                                <input type=\"text\" name=\"system.current_ip\" value=\"{{data.system.current_ip}}\" placeholder=\"0\" style=\"width: 45px;\">\n                                {{#if (eq breed.0.system.bonus.ip 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.ip}}</div>\n                                {{/if}}\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1\">\n                                <label>Credits</label>\n                                <input type=\"text\" name=\"system.current_money\" value=\"{{data.system.current_money}}\" placeholder=\"0\" style=\"width: 45px;\">\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n            </h3>\n<!--            <h1 class=\"charalias\"><input name=\"system.alias\" type=\"text\" value=\"{{data.system.alias}}\" placeholder=\"Alias\"/></h1>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">-->\n<!--                        <label>Breed</label>-->\n<!--                        {{#if (eq breed.length 0)}}-->\n<!--                        <img src=\"icons/svg/mystery-man.svg\" />-->\n<!--                        <label>Unspecified</label>-->\n<!--                        {{else}}-->\n<!--                        <img src=\"{{breed.0.img}}\" />-->\n<!--                        <label>{{breed.0.name}}</label>-->\n<!--                        {{/if}}-->\n<!--                    </div>-->\n<!--                    <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">-->\n<!--                        <label>Origin</label>-->\n<!--                        {{#if (eq origin.length 0)}}-->\n<!--                        <img src=\"icons/svg/mystery-man.svg\" />-->\n<!--                        <label>Unspecified</label>-->\n<!--                        {{else}}-->\n<!--                        <img src=\"{{origin.0.img}}\" />-->\n<!--                        <label>{{origin.0.name}}</label>-->\n<!--                        {{/if}}-->\n<!--                    </div>-->\n<!--                    <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">-->\n<!--                        <label>Profession</label>-->\n<!--                        {{#if (eq profession.length 0)}}-->\n<!--                        <img src=\"icons/svg/mystery-man.svg\" />-->\n<!--                        <label>Unspecified</label>-->\n<!--                        {{else}}-->\n<!--                        <img src=\"{{profession.0.img}}\" />-->\n<!--                        <label>{{profession.0.name}}</label>-->\n<!--                        {{/if}}-->\n<!--                    </div>-->\n<!--                    <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">-->\n<!--                        <label>Faction</label>-->\n<!--                        {{#if (eq faction.length 0)}}-->\n<!--                        <img src=\"icons/svg/mystery-man.svg\" />-->\n<!--                        <label>Unspecified</label>-->\n<!--                        {{else}}-->\n<!--                        <img src=\"{{faction.0.img}}\" />-->\n<!--                        <label>{{faction.0.name}}</label>-->\n<!--                        {{/if}}-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--            <div class=\"resources grid grid-2col\">-->\n<!--                <div class=\"resource flex-group-center\">-->\n<!--                    <label for=\"system.health.value\" class=\"resource-label\">Health</label>-->\n<!--                    <div class=\"resource-content flexrow flex-center flex-between\">-->\n<!--                        <input type=\"text\" name=\"system.health.value\" value=\"{{system.health.value}}\" data-dtype=\"Number\"/>-->\n<!--                        <span> / </span>-->\n<!--                        <input type=\"text\" name=\"system.health.max\" value=\"{{system.health.max}}\" data-dtype=\"Number\"/>-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"resource flex-group-center\">-->\n<!--                    <label for=\"system.power.value\" class=\"resource-label\">Power</label>-->\n<!--                    <div class=\"resource-content flexrow flex-center flex-between\">-->\n<!--                        <input type=\"text\" name=\"system.power.value\" value=\"{{system.power.value}}\" data-dtype=\"Number\"/>-->\n<!--                        <span> / </span>-->\n<!--                        <input type=\"text\" name=\"system.power.max\" value=\"{{system.power.max}}\" data-dtype=\"Number\"/>-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--            </div> {{!&#45;&#45; closes the \"resources\" div &#45;&#45;}}-->\n\n<!--            <div class=\"abilities grid grid-3col\">-->\n<!--                {{#each system.abilities as |ability key|}}-->\n<!--                <div class=\"ability flexrow flex-group-center\">-->\n<!--                    <label for=\"system.abilities.{{key}}.value\" class=\"resource-label\">{{key}}</label>-->\n<!--                    <input type=\"text\" name=\"system.abilities.{{key}}.value\" value=\"{{ability.value}}\" data-dtype=\"Number\"/>-->\n<!--                    <span class=\"ability-mod\">{{numberFormat ability.mod decimals=0 sign=true}}</span>-->\n<!--                </div>-->\n<!--                {{/each}}-->\n<!--            </div>-->\n\n        </div> {{!-- closes the \"header-fields\" div --}}\n    </header>\n\n    {{!-- Sheet Tab Navigation --}}\n    <nav class=\"sheet-navigation tabs form-group\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Description</label>\n                <img src=\"systems/eoa/icons/history.png\" />\n                <label>&nbsp;</label>\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"breed\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Breed</label>\n                {{#if (eq breed.length 0)}}\n                <img src=\"icons/svg/mystery-man.svg\" />\n                <label>Unspecified</label>\n                {{else}}\n                <img src=\"{{breed.0.img}}\" />\n                <label>{{breed.0.name}}</label>\n                {{/if}}\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"origin\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Origin</label>\n                {{#if (eq origin.length 0)}}\n                <img src=\"icons/svg/mystery-man.svg\" />\n                <label>Unspecified</label>\n                {{else}}\n                <img src=\"{{origin.0.img}}\" />\n                <label>{{origin.0.name}}</label>\n                {{/if}}\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"profession\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Profession</label>\n                {{#if (eq profession.length 0)}}\n                <img src=\"icons/svg/mystery-man.svg\" />\n                <label>Unspecified</label>\n                {{else}}\n                <img src=\"{{profession.0.img}}\" />\n                <label>{{profession.0.name}}</label>\n                {{/if}}\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"faction\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Faction</label>\n                {{#if (eq faction.length 0)}}\n                <img src=\"icons/svg/mystery-man.svg\" />\n                <label>Unspecified</label>\n                {{else}}\n                <img src=\"{{faction.0.img}}\" />\n                <label>{{faction.0.name}}</label>\n                {{/if}}\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"items\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Items</label>\n                <img src=\"systems/eoa/icons/items.png\" />\n                <label>&nbsp;</label>\n            </div>\n        </a>\n    </nav>\n\n    {{!-- Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Biography Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n            <div class=\"form-fields flex1 biography-editor\" style=\"flex-direction: column !important;\">\n                <label>Biography</label>\n                {{editor data.system.biography target=\"system.biography\" button=true owner=owner editable=editable}}\n\n                <label>Relationships</label>\n                {{editor data.system.relationships target=\"system.relationships\" button=true owner=owner editable=editable}}\n            </div>\n        </div>\n\n        {{!-- Breed Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"breed\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label><strong>Description</strong></label>\n                {{editor breed.0.system.description.value target=\"breed.0.system.description.value\" button=true owner=owner editable=false}}\n                <label><strong>Lifepath Table</strong> (Roll 2d6 or Choose)</label><br>\n                {{radioBoxes \"system.breed_lifepath\" breed_dict checked=breed_lifepath localize=true}}\n<!--                <table><tr><td>&nbsp;</td><td>Range</td><td>Name</td><td>Description</td></tr>-->\n<!--                {{#each breed.0.system.skills as | skill |}}-->\n<!--                    <tr>-->\n<!--                        <td><input type=\"radio\" name=\"data.system.breed_lifepath\" value=\"{{data.system.breed_lifepath}}\"></td>-->\n<!--                        <td>{{skill.low}}-{{skill.high}}</td>-->\n<!--                        <td>{{skill.name}}</td>-->\n<!--                        <td>{{skill.description}}</td>-->\n<!--                    </tr>-->\n<!--                    <tr>-->\n<!--                        <td>&nbsp;</td>-->\n<!--                        <td>&nbsp;</td>-->\n<!--                        <td colspan=\"2\"><strong>Attributes:</strong> Str {{skill.str}}, Sta {{skill.sta}}, Agi {{skill.agi}}, Int {{skill.int}}, Sen {{skill.sen}}, Psy {{skill.psy}}</td>-->\n<!--                    </tr>-->\n<!--                {{/each}}-->\n<!--                </table>-->\n            </div>\n        </div>\n\n        {{!-- Origin Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"origin\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label><strong>Description</strong></label>\n                {{editor origin.0.system.description.value target=\"origin.0.system.description.value\" button=true owner=owner editable=false}}\n                <div class=\"form-fields flex1\">\n                    <label><strong>Starting Money: </strong></label>\n                    <label>{{origin.0.system.starting_money}}</label>\n                </div>\n                <div class=\"form-fields flex1\">\n                    <label><strong>Origin Skills (Choose 3): </strong></label>\n                    {{#each origin.0.system.origin_skills as | oskill |}}\n                        <input type=\"checkbox\" name=\"system.origin_skills.{{oskill}}\" {{checked (lookup ../data.system.origin_skills oskill)}}>{{oskill}}\n                    {{/each}}\n                </div>\n                <label><strong>Ideals</strong></label><ul>\n                {{#each origin.0.system.ideals as | skill |}}\n                    <li><label>{{skill.description}}</label></li>\n                {{/each}}\n                </ul>\n                <label><strong>Lifepath Table</strong> (Roll 2d6 or Choose)</label>\n                {{radioBoxes \"system.origin_lifepath\" origin_dict checked=origin_lifepath localize=true}}\n            </div>\n        </div>\n\n        {{!-- Profession Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"profession\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label><strong>Description</strong></label>\n                {{editor profession.0.system.description.overview target=\"profession.0.system.description.overview\" button=true owner=owner editable=false}}\n                <label><strong>Signature Resource</strong></label>\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex1\">\n                        {{editor profession.0.system.signature_resource target=\"profession.0.system.signature_resource\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor profession.0.system.signature_resource_desc target=\"profession.0.system.signature_resource_desc\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor profession.0.system.signature_resource_effect target=\"profession.0.system.signature_resource_effect\" button=true owner=owner editable=false}}\n                    </div>\n                </div>\n                <label><strong>Flashback Ability</strong></label>\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex1\">\n                        {{editor profession.0.system.flashback_ability target=\"profession.0.system.flashback_ability\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor profession.0.system.flashback_trigger target=\"profession.0.system.flashback_trigger\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor profession.0.system.flashback_effect target=\"profession.0.system.flashback_effect\" button=true owner=owner editable=false}}\n                    </div>\n                </div>\n                <label><strong>Signature Traits</strong></label>\n                {{#each profession.0.system.signature_traits as | skill |}}\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex1\">\n                        {{editor skill.name target=\"skill.name\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex4\">\n                        {{editor skill.description target=\"skill.description\" button=true owner=owner editable=false}}\n                    </div>\n                </div>\n                {{/each}}\n                <label><strong>Skill List</strong> (Starting characters divide 5 points around this list. No skill can be higher than 2 at character creation)</label>\n                <table><tr><td>&nbsp;</td><td>Name</td><td>Description</td></tr>\n                {{#each profession.0.system.skill_list as | sk |}}\n                    <tr>\n                        <td style=\"width: 100px;\">\n                            <div class=\"input-group number-spinner\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default btn-minus\" type=\"button\">-</button>\n                                </span>\n                                <input type=\"text\" name=\"system.skill.{{sk._id}}.rank\" value=\"{{lookup (lookup ../data.system.skill sk._id) 'rank' }}\"\n                                       placeholder=\"0\" class=\"form-control text-center txt-skill\" min=\"0\" max=\"10\"\n                                       data-skill=\"{{name}}\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default btn-plus\" type=\"button\">+</button>\n                                </span>\n                            </div>\n                        </td>\n                        <td>{{sk.name}}</td>\n                        <td>{{{sk.description}}}</td>\n                    </tr>\n                {{/each}}\n                </table>\n\n                <label><strong>Nano Skill List</strong> (Starting characters have 2 points to spend on this, gaining a nano program from the selected skill)</label>\n                <table><tr><td>&nbsp;</td><td>Name</td><td>Nanoprograms</td></tr>\n                {{#each profession.0.system.nano_skill_list as | sk |}}\n                    <tr>\n                        <td style=\"width: 100px;\">\n                            <div class=\"input-group number-spinner\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default btn-minus\" type=\"button\">-</button>\n                                </span>\n                                <input type=\"text\" name=\"system.nanoskill.{{sk._id}}.rank\" value=\"{{lookup (lookup ../data.system.nanoskill sk._id) 'rank' }}\"\n                                       placeholder=\"0\" class=\"form-control text-center txt-skill\" min=\"0\" max=\"10\"\n                                       data-skill=\"{{name}}\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default btn-plus\" type=\"button\">+</button>\n                                </span>\n                            </div>\n                        </td>\n                        <td>{{sk.name}}<div style=\"text-transform: uppercase;\">{{sk.attributes}}</div></td>\n                        <td>\n                            <table><tr><td>&nbsp;</td><td>Name</td><td>Description</td></tr>\n                            {{#each sk.nanoprograms as | np |}}\n                                <tr>\n                                    <td style=\"width:60px;\">\n                                        <div class=\"form-fields flex1\">\n                                            <input type=\"checkbox\" name=\"system.nanoprogram.{{np._id}}\" {{checked (lookup ../../data.system.nanoprogram np._id)}}>\n                                            {{#if (lookup ../../data.system.nanoprogram np._id)}}\n                                            <img src=\"systems/eoa/images/die_icon.png\" alt=\"Roll Nanoprogram\" style=\"border: none !important;width: 20px;height: 20px;\" class=\"np-run\" data-actor=\"{{../../actor._id}}\" data-np-name=\"{{np.name}}\" data-np-cost=\"{{np.np}}\" {{#each sk.attributes as | attr |}} data-name{{@index}}=\"{{attr}}\" data-attr{{@index}}=\"{{lookup ../../../attrs attr}}\"{{/each}}>\n                                            {{/if}}\n                                        </div>\n                                    </td>\n                                    <td style=\"width:100px;\">\n                                        {{np.name}}\n                                    </td>\n                                    <td>\n                                        {{np.effect}} (NP: {{np.np}}, NCU: {{np.ncu}})\n                                    </td>\n                                </tr>\n                            {{/each}}\n                            </table>\n                        </td>\n                    </tr>\n                {{/each}}\n                </table>\n            </div>\n        </div>\n\n        {{!-- Faction Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"faction\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label><strong>Description</strong></label>\n                {{editor faction.0.system.description.value target=\"faction.0.system.description.value\" button=true owner=owner editable=false}}\n                <div class=\"form-fields flex1\">\n                    <label><strong>Money Multiplier (* starting Origin money.): </strong></label>\n                    <label>{{faction.0.system.money_mult}}</label>\n                </div>\n                <label><strong>Lifepath Table</strong> (Roll 2d6 or Choose)</label>\n                {{radioBoxes \"system.faction_lifepath\" faction_dict checked=faction_lifepath localize=true}}\n            </div>\n        </div>\n\n        {{!-- Owned Items Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"items\">\n            <ol class=\"items-list\">\n                <li class=\"item flexrow item-header\">\n                    <div class=\"item-image\"></div>\n                    <div class=\"item-name\">Name</div>\n                    <div class=\"item-controls\">\n                        <a class=\"item-control item-create\" title=\"Create item\" data-type=\"item\"><i class=\"fas fa-plus\"></i> Add item</a>\n                    </div>\n                </li>\n                {{#each items as |item id|}}\n                <li class=\"item flexrow\" data-item-id=\"{{item._id}}\">\n                    <div class=\"item-image\"><img src=\"{{item.img}}\" title=\"{{item.name}}\" width=\"24\" height=\"24\"/></div>\n                    <h4 class=\"item-name\">{{item.name}}</h4>\n                    <div class=\"item-controls\">\n                        <a class=\"item-control item-edit\" title=\"Edit Item\"><i class=\"fas fa-edit\"></i></a>\n                        <a class=\"item-control item-delete\" title=\"Delete Item\"><i class=\"fas fa-trash\"></i></a>\n                    </div>\n                </li>\n                {{/each}}\n            </ol>\n        </div>\n\n    </section>\n</form>");

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

/***/ "./static/templates/items/loadout-sheet.html":
/*!***************************************************!*\
  !*** ./static/templates/items/loadout-sheet.html ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.LoadoutName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.PrimaryWeapon\"}}</a>\n        <a class=\"item active\" data-tab=\"special\">{{localize \"EOA.SpecialWeapon\"}}</a>\n        <a class=\"item active\" data-tab=\"heavy\">{{localize \"EOA.HeavyWeapon\"}}</a>\n        <a class=\"item active\" data-tab=\"melee\">{{localize \"EOA.MeleeAttack\"}}</a>\n        <a class=\"item active\" data-tab=\"passives\">{{localize \"EOA.Passives\"}}</a>\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Primary Weapon Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"data.system.primary_weapon.name\" value=\"{{data.system.primary_weapon.name}}\" placeholder=\"0\" style=\"width: 45px;\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Range</label>\n                    <select name=\"data.system.primary_weapon.effective_range\" multiple>\n                        {{selectOptions effective_range_choices selected=data.system.primary_weapon.effective_range localize=false}}\n                    </select>\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Damage Formula</label>\n                    <input type=\"text\" name=\"data.system.primary_weapon.damage_formula\" value=\"{{primary_damage_formula}}\" placeholder=\"0\" style=\"width: 45px;\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Characteristics</label>\n                    {{#each data.system.primary_weapon.characteristics as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n\n        {{!-- Special Weapon Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"special\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"data.system.special_weapon.name\" value=\"{{data.system.special_weapon.name}}\" placeholder=\"0\" style=\"width: 45px;\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Range</label>\n                    <select name=\"data.system.special_weapon.effective_range\" multiple>\n                        {{selectOptions effective_range_choices selected=data.system.special_weapon.effective_range localize=false}}\n                    </select>\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Damage Formula</label>\n                    <input type=\"text\" name=\"data.system.special_weapon.damage_formula\" value=\"{{special_damage_formula}}\" placeholder=\"0\" style=\"width: 45px;\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Characteristics</label>\n                    {{#each data.system.special_weapon.characteristics as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n\n        {{!-- Heavy Weapon Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"heavy\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"data.system.heavy_weapon.name\" value=\"{{data.system.heavy_weapon.name}}\" placeholder=\"0\" style=\"width: 45px;\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Range</label>\n                    <select name=\"data.system.heavy_weapon.effective_range\" multiple>\n                        {{selectOptions effective_range_choices selected=data.system.heavy_weapon.effective_range localize=false}}\n                    </select>\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Damage Formula</label>\n                    <input type=\"text\" name=\"data.system.heavy_weapon.damage_formula\" value=\"{{heavy_damage_formula}}\" placeholder=\"0\" style=\"width: 45px;\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Characteristics</label>\n                    {{#each data.system.heavy_weapon.characteristics as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n\n        {{!-- Melee Attack Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"melee\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label>Name</label>\n                    <input type=\"text\" name=\"data.system.melee_attack.name\" value=\"{{data.system.melee_attack.name}}\" placeholder=\"0\" style=\"width: 45px;\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Range</label>\n                    <select name=\"data.system.melee_attack.effective_range\" multiple>\n                        {{selectOptions effective_range_choices selected=data.system.melee_attack.effective_range localize=false}}\n                    </select>\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Damage Formula</label>\n                    <input type=\"text\" name=\"data.system.melee_attack.damage_formula\" value=\"{{melee_damage_formula}}\" placeholder=\"0\" style=\"width: 45px;\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label>Characteristics</label>\n                    {{#each data.system.melee_attack.characteristics as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n\n        {{!-- Passives Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"passives\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label>Characteristics</label>\n                    {{#each data.system.passives as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n    </section>\n</form>\n");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.RaceName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n        <a class=\"item\" data-tab=\"signature-ability\">{{localize \"EOA.SignatureAbilities\"}}</a>\n        <a class=\"item\" data-tab=\"skills\">{{localize \"EOA.Skills\"}}</a>\n<!--        {{#each data.system.description.skills as | skill |}}-->\n<!--        <a class=\"item\" data-tab=\"{{skill.name}}\">{{skill.name}}</a>-->\n<!--        {{/each}}-->\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Description Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <!--      <div class=\"item-properties\">-->\n            <!--        &nbsp;-->\n            <!--      </div>-->\n\n            <div class=\"description\">\n                <br>\n                <div style=\"height: 100px !important\">\n                {{editor data.system.description.overview target=\"system.description.overview\" button=true owner=owner editable=editable}}\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex2\">\n                        <label>Flashback Ability</label>\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        <label>Flashback Trigger</label>\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        <label>Flashback Effect</label>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex2\">\n                        <input type=\"text\" name=\"system.flashback_ability\" value=\"{{data.system.flashback_ability}}\"\n                               placeholder=\"{{data.system.flashback_ability}}\">\n                    </div>\n                    <div class=\"form-fields flex3\">\n<!--                        <input type=\"text\" name=\"data.system.flashback_trigger\" value=\"{{data.system.flashback_trigger}}\"-->\n<!--                               placeholder=\"{{data.system.flashback_trigger}}\">-->\n                        {{editor data.system.flashback_trigger target=\"data.system.flashback_trigger\" button=true owner=owner editable=editable}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n<!--                        <input type=\"text\" name=\"data.system.flashback_effect\" value=\"{{data.system.flashback_effect}}\"-->\n<!--                               placeholder=\"{{data.system.flashback_effect}}\">-->\n                        {{editor data.system.flashback_effect target=\"data.system.flashback_effect\" button=true owner=owner editable=editable}}\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex2\">\n                        <label>Signature Resource</label>\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        <label>Description</label>\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        <label>Effect</label>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex2\">\n                        <input type=\"text\" name=\"system.signature_resource\" value=\"{{data.system.signature_resource}}\"\n                               placeholder=\"{{data.system.signature_resource}}\">\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor data.system.signature_resource_desc target=\"data.system.signature_resource_desc\" button=true owner=owner editable=editable}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor data.system.signature_resource_effect target=\"data.system.signature_resource_effect\" button=true owner=owner editable=editable}}\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        {{!-- Signature Ability Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"signature-ability\">\n\n            <div class=\"description\">\n                <br>\n                <strong>Signature Traits</strong><hr>\n                {{#each data.system.signature_traits as | skill |}}\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex2\">\n                        <input type=\"text\" name=\"system.signature_traits.{{@index}}.name\" value=\"{{skill.name}}\"\n                               placeholder=\"{{skill.name}}\">\n                    </div>\n                    <div class=\"form-fields flex4\">\n<!--                        <input type=\"text\" name=\"data.system.signature_traits.{{@index}}.description\" value=\"{{skill.description}}\"-->\n<!--                               placeholder=\"{{skill.description}}\">-->\n                        {{editor skill.description target=\"skill.description\" button=true owner=owner editable=editable}}\n                    </div>\n                </div>\n\n                <hr>\n                {{/each}}\n            </div>\n\n        </div>\n\n        {{!-- Skills Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"skills\">\n\n            <div class=\"description\">\n                <br>\n                <strong>Skill List</strong> (Starting characters divide 5 points around this list. No skill can be higher than 2 at character creation):<hr>\n                {{#each data.system.skill_list as | skill |}}\n\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex1\">\n                        <input type=\"text\" name=\"system.skill_list.{{@index}}.name\" value=\"{{skill.name}}\"\n                               placeholder=\"{{skill.name}}\">\n                    </div>\n                    <div class=\"form-fields flex4\">\n                        <input type=\"text\" name=\"system.skill_list.{{@index}}.description\" value=\"{{skill.description}}\"\n                               placeholder=\"{{skill.description}}\">\n                    </div>\n                </div>\n\n                {{/each}}\n            </div>\n\n        </div>\n\n<!--        {{!&#45;&#45; Skills Tabs &#45;&#45;}}-->\n<!--        {{#each data.system.skills as | skill |}}-->\n<!--        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"{{skill.name}}\">-->\n\n<!--            <div>-->\n<!--                {{i}}-->\n<!--                <br>-->\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Description</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@index}}.description\" value=\"{{skill.description}}\"-->\n<!--                               placeholder=\"{{skill.description}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n<!--&lt;!&ndash;                <strong>Description:</strong> <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{skill.description}}\" value=\"{{skill.description}}\" />&ndash;&gt;-->\n\n<!--                <br><br><strong>Nanoprograms:</strong><hr>-->\n<!--                {{#each skill.programs as | pgm |}}-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Name</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.name\" value=\"{{pgm.name}}\"-->\n<!--                               placeholder=\"{{pgm.name}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Description</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.name\" value=\"{{pgm.description}}\"-->\n<!--                               placeholder=\"{{pgm.description}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Nanopoint Cost</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.np\" value=\"{{pgm.np}}\"-->\n<!--                               placeholder=\"{{pgm.np}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>NCU</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.ncu\" value=\"{{pgm.ncu}}\"-->\n<!--                               placeholder=\"{{pgm.ncu}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <label>Effect</label>-->\n<!--                    <div class=\"form-fields\">-->\n<!--                        <input type=\"text\" name=\"data.system.skills.{{@../index}}.program.{{@index}}.effect\" value=\"{{pgm.effect}}\"-->\n<!--                               placeholder=\"{{pgm.effect}}\">-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--&lt;!&ndash;                    <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{pgm.name}}\" value=\"{{pgm.name}}\" />&ndash;&gt;-->\n<!--&lt;!&ndash;                    <input class=\"eoa-in-place-box\" type=\"text\" name=\"{{pgm.description}}\" value=\"{{pgm.description}}\" placeholder=\"Description\" />&ndash;&gt;-->\n<!--&lt;!&ndash;                    <label class=\"eoa-inline-label\">Nanopoint Cost: </label><input class=\"eoa-inline-box eoa-width-30\" type=\"text\" name=\"{{pgm.np}}\" value=\"{{pgm.np}}\" />&ndash;&gt;-->\n<!--&lt;!&ndash;                    <label class=\"eoa-inline-label\">NCU: </label><input class=\"eoa-inline-box eoa-width-30\" type=\"text\" name=\"{{pgm.ncu}}\" value=\"{{pgm.ncu}}\" />&ndash;&gt;-->\n<!--&lt;!&ndash;                    <label class=\"eoa-inline-label\">Effect: </label><input class=\"eoa-inline-box eoa-width-480\" type=\"text\" name=\"{{pgm.effect}}\" value=\"{{pgm.effect}}\" />&ndash;&gt;-->\n<!--                <hr>-->\n<!--                {{/each}}-->\n<!--            </div>-->\n\n<!--        </div>-->\n<!--        {{/each}}-->\n    </section>\n\n<!--    <footer class=\"sheet-footer\">-->\n<!--        <button type=\"submit\"><i class=\"fas fa-save\"></i> {{localize submitText}}</button>-->\n<!--    </footer>-->\n</form>\n");

/***/ }),

/***/ "./static/templates/items/skill-sheet.html":
/*!*************************************************!*\
  !*** ./static/templates/items/skill-sheet.html ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.SkillName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Description Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <br>\n                {{editor data.system.description.value target=\"system.description.value\" button=true owner=owner editable=editable}}\n            </div>\n\n        </div>\n\n    </section>\n</form>\n");

/***/ }),

/***/ "./static/templates/items/supply-sheet.html":
/*!**************************************************!*\
  !*** ./static/templates/items/supply-sheet.html ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.SupplyName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.Description\"}}</a>\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Description Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <br>\n                {{editor data.system.description target=\"system.description\" button=true owner=owner editable=editable}}\n            </div>\n\n        </div>\n\n    </section>\n</form>\n");

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
/* harmony import */ var _static_templates_items_loadout_sheet_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/templates/items/loadout-sheet.html */ "./static/templates/items/loadout-sheet.html");
/* harmony import */ var _static_templates_items_origin_sheet_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/templates/items/origin-sheet.html */ "./static/templates/items/origin-sheet.html");
/* harmony import */ var _static_templates_items_profession_sheet_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../static/templates/items/profession-sheet.html */ "./static/templates/items/profession-sheet.html");
/* harmony import */ var _static_templates_items_skill_sheet_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../static/templates/items/skill-sheet.html */ "./static/templates/items/skill-sheet.html");
/* harmony import */ var _static_templates_items_supply_sheet_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../static/templates/items/supply-sheet.html */ "./static/templates/items/supply-sheet.html");








class TemplatePreloader {
    /**
     * Preload a set of templates to compile and cache them for fast access during rendering
     */
    static async preloadHandlebarsTemplates() {
        const templatePaths = ["modules/template/templates/items/supply-sheet.html", "modules/template/templates/items/skill-sheet.html", "modules/template/templates/items/profession-sheet.html", "modules/template/templates/items/origin-sheet.html", "modules/template/templates/items/loadout-sheet.html", "modules/template/templates/items/faction-sheet.html", "modules/template/templates/items/breed-sheet.html", "modules/template/templates/actor/actor-hero-sheet.html"];
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

/***/ "./src/module/items/SkillSheet.ts":
/*!****************************************!*\
  !*** ./src/module/items/SkillSheet.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EoASkillSheet: () => (/* binding */ EoASkillSheet)
/* harmony export */ });
/**
 * @extends {ItemSheet}
 */
class EoASkillSheet extends ItemSheet {
    /** @inheritdoc */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["eoa", "sheet", "item"],
            template: "systems/eoa/templates/items/skill-sheet.html",
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

/***/ "./src/module/items/SupplySheet.ts":
/*!*****************************************!*\
  !*** ./src/module/items/SupplySheet.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EoASupplySheet: () => (/* binding */ EoASupplySheet)
/* harmony export */ });
/**
 * @extends {ItemSheet}
 */
class EoASupplySheet extends ItemSheet {
    /** @inheritdoc */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["eoa", "sheet", "item"],
            template: "systems/eoa/templates/items/supply-sheet.html",
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
/* harmony export */   diceToFacesAlt: () => (/* binding */ diceToFacesAlt),
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

function diceToFacesAlt(value, content)
{
    switch (value)
    {
        case 1:
            return "eoa-dice-one";
        case 2:
            return "eoa-dice-two";
        case 3:
            return "eoa-dice-three";
        case 4:
            return "eoa-dice-four";
        case 5:
            return "eoa-dice-five";
        case 6:
            return "eoa-dice-six";
        case 7:
            return "eoa-dice-seven";
        case 8:
            return "eoa-dice-eight";
        case 9:
            return "eoa-dice-nine";
        case 10:
            return "eoa-dice-ten";
        case 11:
            return "eoa-dice-eleven";
        case 12:
            return "eoa-dice-twelve";
    }

    return "fa-dice-d6";
}

/***/ }),

/***/ "./src/module/actors/ActorSheet.js":
/*!*****************************************!*\
  !*** ./src/module/actors/ActorSheet.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EoAActorSheet: () => (/* binding */ EoAActorSheet)
/* harmony export */ });
/* harmony import */ var _static_scripts_fux_dice_roller_roll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../static/scripts/fux-dice-roller-roll.js */ "./static/scripts/fux-dice-roller-roll.js");


// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

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
        context.max_hp = 0;
        context.max_np = 0;
        context.init = 0;
        context.breed = context.items.filter(function (item) {
            return item.type === "breed"
        })
        context.breed_dict = {};
        context.breed_lifepath = context.data.system.breed_lifepath;
        if (context.breed.length > 0) {
            if (context.breed_lifepath !== "") {
                // console.log(context.breed_lifepath);
                // console.log(context.breed[0].system.skills);
                let attr_vals = context.breed[0].system.skills.filter(e => e["name"] === context.breed_lifepath);
                if (attr_vals.length > 0) {
                    // console.log(attr_vals[0]);
                    context.max_hp = (parseInt(attr_vals[0].str) + parseInt(attr_vals[0].sta)) * 10;
                    context.max_np = (parseInt(attr_vals[0].int) + parseInt(attr_vals[0].psy)) * 10;
                    context.init = (parseInt(attr_vals[0].sen) + parseInt(attr_vals[0].agi));
                }
                context.max_sp = 6;
                context.max_ncu = 10;
            }
            context.breed[0].system.skills.forEach((el) => {
                context.breed_dict[el.name] = `
                    <div class="form-group" style="width: 100%">
                        <div class="flex1">
                            <label style="width: 100%; flex: none !important; text-align: left !important;">${el.low}-${el.high}</label>
                        </div>
                        <div class="form-fields flex1">
                            <label style="width: 100%; flex: none !important; text-align: left !important">${el.name}</label>
                        </div>
                        <div class="wrapper" style="width: 100%; display: flex; flex-direction: column !important; align-items: flex-start;">
                            <div class="form-fields flex4">
                                <label style="width: 100%; flex: none !important; text-align: left !important;">${el.description}</label>
                            </div>
                            <div class="form-fields flex4">
                                <label style="width: 100%; flex: none !important; text-align: left !important;"><strong>Attributes:</strong> Str ${el.str}, Sta ${el.sta}, Agi ${el.agi}, Int ${el.int}, Sen ${el.sen}, Psy ${el.psy}</label>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        context.attrs = {};
        if ((context.breed.length > 0) && (context.breed_lifepath !== "")) {
            context.has_stats = true;
            context.breed[0].system.skills.forEach((el) => {
                if (el.name === context.breed_lifepath) {
                    context.attrs = {"str": el.str, "sta": el.sta, "agi": el.agi, "int": el.int, "sen": el.sen, "psy": el.psy};
                }
            });
        } else {
            context.has_stats = false;
        }
        context.origin = context.items.filter(function (item) {
            return item.type === "origin"
        })
        context.origin_dict = {};
        if (context.origin.length > 0) {
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
        }
        context.origin_lifepath = context.data.system.origin_lifepath;
        context.profession = context.items.filter(function (item) {
            return item.type === "profession"
        })
        context.skill = context.items.filter(function (item) {
            return item.type === "skill"
        })
        context.faction = context.items.filter(function (item) {
            return item.type === "faction"
        })
        context.faction_dict = {};
        if (context.faction.length > 0) {
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
        }
        let el = "";
        context.consumed_ncu = 0;
        for (const np_k in context.data.system.nanoprogram) {
            el = context.data.system.nanoprogram[np_k];
            if (typeof el == "boolean") {
                if (el === true) {
                    if (context.profession.length > 0) {
                        context.profession[0].system.nano_skill_list.forEach((nsl) => {
                            nsl.nanoprograms.forEach((np) => {
                                if (np_k === np._id) {
                                    context.consumed_ncu += np.ncu;
                                }
                            });
                        });
                    }
                }
            }
        }

        context.faction_lifepath = context.data.system.faction_lifepath;
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
            } else if (input.val() === "") {
                input.val(0);
            }
        });

        html.find('.btn-plus').click(ev => {
            let input = $(ev.currentTarget).parents().siblings('input[type="text"]');
            let value = parseInt(input.val());
            if (value < 10) {
                input.val(value + 1);
            } else if (input.val() === "") {
                input.val(1);
            }
        });

        html.find('.txt-skill').change(ev => {
            let input = $(ev.currentTarget);
            let value = parseInt(input.val());
            if (isNaN(value) || value < 0) {
                input.val(0);
            } else if (value > 10) {
                input.val(10);
            }
        });

        html.find('.np-run').click(ev => {
            let input = $(ev.currentTarget);
            let a1 = input.data("attr0");
            let a2 = input.data("attr1");
            let n1 = input.data("name0");
            let n2 = input.data("name1");
            let nm = input.data("np-name");
            let nc = input.data("np-cost");
            let ac = input.data("actor");
            let a = game.actors.get(ac);

            // console.log(nm);
            let inputValue = input.closest('tr').parents('tr').find('input.txt-skill').val();
            if ((inputValue === "") || (isNaN(inputValue))) {
                inputValue = 0;
            }
            let dicecount = parseInt(a1) + parseInt(a2) + parseInt(inputValue);
            let m = a.name + " runs '" + nm + "' nanoprogram! " + n1 + "(" + a1 + ") + " + n2 + "(" + a2 + ") + rank(" + inputValue + ") = " + dicecount;
            let roll = (0,_static_scripts_fux_dice_roller_roll_js__WEBPACK_IMPORTED_MODULE_0__.RollFuxDice)(dicecount, 0, 0, m);

            a.update({system: {current_np: a.system.current_np - parseInt(nc)}})
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
            // if (itemData.type === "profession") {
            //     console.log("profession change");
            //     let del_items = all_items.items.filter(function(item) { return (item.type === "skill") });
            //     // if skills are assigned, delete them on profession change
            //     if (del_items.length > 0) {
            //         del_items.forEach((el) => {
            //             item = this.actor.items.get(el._id);
            //             if (item) {
            //                 item.delete();
            //             }
            //         });
            //     }
            //     // take skills for this profession from the compendium and add them to the character
            //     let skill_pack = game.packs.get("eoa.skills")
            //     let skill_index = Array.from(skill_pack.index)
            //     for (let skill of skill_index) {
            //         let item = await skill_pack.getDocument(skill._id)
            //         if (item.system.professions.includes(itemData.system.identifier)) {
            //             // console.log(skill);
            //             // this.actor.createOwnedItem(skill)
            //             await this.actor.createEmbeddedDocuments('Item', [item])
            //         }
            //         // console.log(act.system.professions);
            //         // let items = Array.from(act.items)
            //         // let updates = []
            //         // for (let item of items) {
            //         //     console.log(item);
            //         // }
            //     }
            //     // console.log(all_items);
            //     // const pack = game.packs.get("eoa.skills");
            //     // await pack.getIndex();
            //     // // const effectId = pack.index.find(e => e.name === effectName)._id;
            //     // const actor = game.user.character;
            //     // console.log(pack.index);
            //     // let e = null;
            //     // pack.index.forEach((el) => {
            //     //     e = pack.getEntry(el._id);
            //     // });
            //     // let add_items = all_items.items.filter(function(item) { return ((item.type === "profession") && (item.system.data.professions.includes(all_items.system.data.))) });
            //
            // }
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


/***/ }),

/***/ "./src/module/config.js":
/*!******************************!*\
  !*** ./src/module/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eoa: () => (/* binding */ eoa)
/* harmony export */ });
const eoa = {};

eoa.attackTypes = {
    none: "",
    guns: "eoa.attack.guns",
    knives: "eoa.attack.knives"
}

/***/ }),

/***/ "./src/module/items/LoadoutSheet.js":
/*!******************************************!*\
  !*** ./src/module/items/LoadoutSheet.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EoALoadoutSheet: () => (/* binding */ EoALoadoutSheet)
/* harmony export */ });

/**
 * @extends {ItemSheet}
 */
class EoALoadoutSheet extends ItemSheet {
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


/***/ }),

/***/ "./static/scripts/fux-dice-roller-constants.js":
/*!*****************************************************!*\
  !*** ./static/scripts/fux-dice-roller-constants.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FUX_CONST: () => (/* binding */ FUX_CONST),
/* harmony export */   SystemVariantName: () => (/* binding */ SystemVariantName)
/* harmony export */ });
/* Constants used*/
const FUX_CONST = {
  SYSTEM_VARIANTS: {
    FU_CLASSIC: 0,
    FU_V2: 1,
    ACTION_TALES: 2,
    NEON_CITY_OVERDRIVE: 3,
    EARTHDAWN_AGE_OF_LEGEND: 4
  }
};


function SystemVariantName(isystemvariant) {
  let systemvariantname = 'Unknown Variant';
  switch (isystemvariant.toString()) {
    case FUX_CONST.SYSTEM_VARIANTS.FU_CLASSIC.toString():
      systemvariantname = game.i18n.localize('fux-dice-roller.settings.SYSTEM_VARIANT_FU_CLASSIC');
      break;
    case FUX_CONST.SYSTEM_VARIANTS.FU_V2.toString():
      systemvariantname = game.i18n.localize('fux-dice-roller.settings.SYSTEM_VARIANT_FU_V2');
      break;
    case FUX_CONST.SYSTEM_VARIANTS.ACTION_TALES.toString():
      systemvariantname = game.i18n.localize('fux-dice-roller.settings.SYSTEM_VARIANT_ACTION_TALES');
      break;
    case FUX_CONST.SYSTEM_VARIANTS.NEON_CITY_OVERDRIVE.toString():
      systemvariantname = game.i18n.localize('fux-dice-roller.settings.SYSTEM_VARIANT_NEON_CITY_OVERDRIVE');
      break;
    case FUX_CONST.SYSTEM_VARIANTS.EARTHDAWN_AGE_OF_LEGEND.toString():
      systemvariantname = game.i18n.localize('fux-dice-roller.settings.SYSTEM_VARIANT_EARTHDAWN_AGE_OF_LEGEND');
      break;
  }
  return systemvariantname;
}



/***/ }),

/***/ "./static/scripts/fux-dice-roller-roll.js":
/*!************************************************!*\
  !*** ./static/scripts/fux-dice-roller-roll.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RollFuxDice: () => (/* binding */ RollFuxDice)
/* harmony export */ });
/* harmony import */ var _fux_dice_roller_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fux-dice-roller-constants.js */ "./static/scripts/fux-dice-roller-constants.js");

const _module_id = 'eoa';  // modules true name(id)
async function RollD6s(faces){
  let roll=await new Roll(faces + "d6").roll({async: true});
  return roll;
}
async function RollD8s(faces){
  let roll=await new Roll(faces + "d8").roll({async: true});
  return roll;
}
function getGameSetting(settingName){
  return  game.settings.get(_module_id, settingName);
}
async function RollFuxDice(actiondice, augmentdice, dangerdice, msg = null) {
    if (actiondice == 0 && augmentdice == 0 && dangerdice == 0) {
      //no dice, abort
      return;
    }
    // let hardmode = getGameSetting('OPTION_HARD_MODE');
    let hardmode = false;
    // let systemvariant = getGameSetting('OPTION_SYSTEM_VARIANT');
    let systemvariant = _fux_dice_roller_constants_js__WEBPACK_IMPORTED_MODULE_0__.FUX_CONST.SYSTEM_VARIANTS.FU_V2;
    // let botch_value = getGameSetting('OPTION_BOTCH_VALUE');
    let botch_value = 1;
    // let option_matchingdice = getGameSetting('OPTION_FU_CLASSIC_MATCHING_DICE');
    let option_matchingdice = false;

    // reduce dice if FU Classic    
    if (systemvariant == _fux_dice_roller_constants_js__WEBPACK_IMPORTED_MODULE_0__.FUX_CONST.SYSTEM_VARIANTS.FU_CLASSIC) {
      // 5a, 3d => 2a
      // 2a, 3d => 1d
      // 2a, 2d =>
      if (dangerdice == actiondice) {
        actiondice = 0;
        dangerdice = 2;
      } else if (dangerdice > actiondice) {
        // more penalty than bonus
        dangerdice = dangerdice - actiondice + 2;
        actiondice = 0;
      } else if (actiondice > dangerdice) {
        // bonus is reduced by penalty
        actiondice = actiondice - dangerdice;
        dangerdice = 0;
      }
    }

    // reduce dice if Earthdawn Age of legend
    if (systemvariant == _fux_dice_roller_constants_js__WEBPACK_IMPORTED_MODULE_0__.FUX_CONST.SYSTEM_VARIANTS.EARTHDAWN_AGE_OF_LEGEND) {
      // in EDAoL, the roll is always 1d6 plus a reduced set of negative and/or positive fudge dice(1d6 where 5-6 means +/- else ignored)
      if(actiondice>1 && dangerdice>0){
        if (actiondice==dangerdice){
          actiondice=1;
          dangerdice=1;
        } else if(actiondice>dangerdice){
          actiondice=actiondice - dangerdice;
          dangerdice=0;
        } else if(actiondice<dangerdice){
          dangerdice=dangerdice - actiondice +1;
          actiondice=1;
        }
      }
    }
    // roll dice
    let augmentdiceresults = await RollD8s(augmentdice);
    // roll dice
    let actiondiceresults = await RollD6s(actiondice);
    // console.log(actiondiceresults);
    let dangerdiceresults = await RollD6s(dangerdice);

    // prepare result array
    let arrFinals = [0, 0, 0, 0, 0, 0];  // array for result counts, slot corresponds to face value 1- 6
    // action dice
    let actionresult = '';
    let actionssorted = [];
    let actionsunsorted = [];
    if (actiondiceresults.terms[0].results.length > 0) {
      for (let i = 0; i < actiondiceresults.terms[0].results.length; i++) {
        // increment finals
        arrFinals[actiondiceresults.terms[0].results[i].result - 1] = arrFinals[actiondiceresults.terms[0].results[i].result - 1] + 1;
        actionssorted.push(actiondiceresults.terms[0].results[i].result);
        actionsunsorted.push(actiondiceresults.terms[0].results[i].result)
      }
    }
    
    // sort action results
    actionssorted.sort(function (a, b) {
      return a - b;
    });
    // build result string for action dice
    for (let i = 0; i < actionssorted.length; i++) {
      if (i == 0) {
        actionresult = '<img src="systems/eoa/images/actiondie_value_' + actionssorted[i] + '.png" style="margin-top:-3px;margin-left:2px;">';
      } else {
        actionresult = actionresult + '' + '<img src="systems/eoa/images/actiondie_value_' + actionssorted[i] + '.png" style="margin-top:-3px;margin-left:2px;">';
      }
    }

    // augment dice
    let augmentresult = '';
    let augmentsorted = [];
    let augmentunsorted = [];
    if (augmentdiceresults.terms[0].results.length > 0) {
      for (let i = 0; i < augmentdiceresults.terms[0].results.length; i++) {
        arrFinals[augmentdiceresults.terms[0].results[i].result - 1] = arrFinals[augmentdiceresults.terms[0].results[i].result - 1] - 1;
        augmentsorted.push(augmentdiceresults.terms[0].results[i].result);
        augmentunsorted.push(augmentdiceresults.terms[0].results[i].result);
      }
    }
    // sort augment result
    augmentsorted.sort(function (a, b) {
      return a - b;
    });
    // build result string for augment dice
    for (let i = 0; i < augmentsorted.length; i++) {
      if (i == 0) {
        augmentresult = '<img src="systems/eoa/images/augmentdie_value_' + augmentsorted[i] + '.png" style="margin-top:0px;margin-left:2px;">';
      } else {
        augmentresult = augmentresult + '' + '<img src="systems/eoa/images/augmentdie_value_' + augmentsorted[i] + '.png" style="margin-top:0px;margin-left:2px;">';
      }
    }

    //danger dice
    let dangerresult = '';
    let dangersorted = [];
    let dangerunsorted = [];
    if (dangerdiceresults.terms[0].results.length > 0) {
      for (let i = 0; i < dangerdiceresults.terms[0].results.length; i++) {
        // dec finals
        if (hardmode) {
          // In hard mode each Danger die cancels all Action dice with a matching value.
          arrFinals[dangerdiceresults.terms[0].results[i].result - 1] = 0;
        } else {
          arrFinals[dangerdiceresults.terms[0].results[i].result - 1] = arrFinals[dangerdiceresults.terms[0].results[i].result - 1] - 1;
        }
        dangersorted.push(dangerdiceresults.terms[0].results[i].result);
        dangerunsorted.push(dangerdiceresults.terms[0].results[i].result);
      }
    }
    // sort danger result
    dangersorted.sort(function (a, b) {
      return a - b;
    });
    // build result string for danger dice
    for (let i = 0; i < dangersorted.length; i++) {
      if (i == 0) {
        dangerresult = '<img src="systems/eoa/images/dangerdie_value_' + dangersorted[i] + '.png" style="margin-top:0px;margin-left:2px;">';
      } else {
        dangerresult = dangerresult + '' + '<img src="systems/eoa/images/dangerdie_value_' + dangersorted[i] + '.png" style="margin-top:0px;margin-left:2px;">';
      }
    }
    // find highest remaining positive in finals
    let highest = 0;
    for (let i = 0; i < 6; i++) {
      if (arrFinals[i] > 0) {
        highest = i + 1;
      }
    }
    let oracle = '';
    let boons = 0;
    let botches = 0;
    let rollvalue = 0;
    let hascrit = false;
    let hasfumble = false
    let submsg = '';
    let flavortext = '';
    if (systemvariant == _fux_dice_roller_constants_js__WEBPACK_IMPORTED_MODULE_0__.FUX_CONST.SYSTEM_VARIANTS.FU_CLASSIC) {
      // classic fu
      flavortext = 'Beating the Odds';
      
      if (actiondice == 0) {
        // use lowest
        // used for fu classic    
        let lowestdangerdice = 0;
        if (dangersorted.length > 0) {
          lowestdangerdice = dangersorted[0];
          rollvalue = lowestdangerdice;
          if (option_matchingdice) {
            let matchingdice = 0;
            // now look for extra failure(matching dice)
            for (let i = 0; i < dangersorted.length; i++) {
              if (dangersorted[i] == lowestdangerdice) {
                matchingdice = matchingdice + 1;
                if (matchingdice > 1) {
                  if (rollvalue > 1) {
                    rollvalue = rollvalue - 1;
                  } else {
                    botches = botches + 1;
                  }
                }
              }
            }
          }
        }
      } else {
        // use highest action dice
        rollvalue = highest;
        // now look for boons(matching dice)
        if (option_matchingdice) {
          let matchingdice = 0;
          // now look for extra success(matching dice)
          for (let i = 0; i < actionssorted.length; i++) {
            if (actionssorted[i] == highest) {
              matchingdice = matchingdice + 1;
              if (matchingdice > 1) {
                if (rollvalue < 6) {
                  rollvalue = rollvalue + 1;
                } else {
                  boons = boons + 1;
                }
              }
            }
          }
        }
      }
      submsg = 'Result: ' + rollvalue;
      switch (rollvalue) {
        case 0:
        // this should never happen in FU classic          
        case 1:
          oracle = 'NO AND...';
          if (botches > 0) {
            hasfumble = true;
            submsg = submsg + ' + ' + botches + '(Botch(es)) ';
          }
          break;
        case 2:
          oracle = 'NO';
          break;
        case 3:
          oracle = 'NO BUT...';
          break;
        case 4:
          oracle = 'YES BUT...';
          break;
        case 5:
          oracle = 'YES';
          break;
        case 6:
          oracle = 'YES AND...';
          if (boons > 0) {
            hascrit = true;
            submsg = submsg + ' + ' + boons + '(Boon(s)) ';
          }
          break;
      }
    } 
    else if (systemvariant == _fux_dice_roller_constants_js__WEBPACK_IMPORTED_MODULE_0__.FUX_CONST.SYSTEM_VARIANTS.ACTION_TALES || systemvariant == _fux_dice_roller_constants_js__WEBPACK_IMPORTED_MODULE_0__.FUX_CONST.SYSTEM_VARIANTS.NEON_CITY_OVERDRIVE) {
      // use the oracle from ActionTales(Neon City Overdrive) 
      flavortext = 'The Check returned';
      // use highest action dice
      rollvalue = highest;
      submsg = 'Result: ' + rollvalue;
      switch (rollvalue) {
        // in NCO BOTCH: If all the action dice have been canceled out, or the only remaining 
        // action dice are 1�s, you have critically failed. Things have gone very wrong and 
        // the consequences will be terrible.
        case 0:
        case 1:
          oracle = 'BOTCH';
          hasfumble = true;
          submsg = 'Result: ' + botch_value;
          break;
        case 2:
        case 3:
          oracle = 'FAILURE';
          break;
        case 4:
        case 5:
          oracle = 'PARTIAL SUCCESS';
          break;
        case 6:
          oracle = 'SUCCESS';
          // check for boon
          boons = arrFinals[5] - 1;
          if (boons > 0) {
            hascrit = true;
            submsg = submsg + ' + ' + boons + '(Boon(s)) ';
          }
          break;
      }
    } 
    else if (systemvariant == _fux_dice_roller_constants_js__WEBPACK_IMPORTED_MODULE_0__.FUX_CONST.SYSTEM_VARIANTS.EARTHDAWN_AGE_OF_LEGEND) {
      // use the oracle from  EDAoL
      flavortext = 'Beating the Odds';
      
      // EDAoL workd different than the others so here will be a complete re-reading of dice roll
      rollvalue=1; // set default
      if (actiondiceresults.terms[0].results.length > 0) {                
        for (let i = 0; i < actiondiceresults.terms[0].results.length; i++) {                    
          if (i == 0) {
            // the first action dice is the base die
            rollvalue= actiondiceresults.terms[0].results[0].result;            
            actionresult = '<img src="systems/eoa/images/actiondie_value_' + actiondiceresults.terms[0].results[i].result + '.png" style="margin-top:-3px;margin-left:2px;">';
          } else {
            // now look for bonus dice that have result 5-6
            if(actiondiceresults.terms[0].results[i].result>=5){
              // a +   
              if(rollvalue<6){
                rollvalue=rollvalue+1;
              } else{
                boons=boons+1;
              }
              actionresult = actionresult + '' + '<img src="systems/eoa/images/actiondie_value_fudge_success.png" style="margin-top:-3px;margin-left:2px;">';
            } else{
              actionresult = actionresult + '' + '<img src="systems/eoa/images/actiondie_value_blank.png" style="margin-top:-3px;margin-left:2px;">';
            }
            
          }
        }
      }
      // now check the penalty dice
      if (dangerdiceresults.terms[0].results.length > 0) {  
        let imagefile='';
        for (let i = 0; i < dangerdiceresults.terms[0].results.length; i++) {
          // now look for penalty dice that have result 5-6
          if(dangerdiceresults.terms[0].results[i].result>=5){
            // a -
            if(rollvalue>1){
              rollvalue=rollvalue -1;
            } else{
              botches=botches+1;
            }
            imagefile='dangerdie_value_fudge_fail';
          } else{
            imagefile='dangerdie_value_blank';
          }          
          if (i == 0) {
            dangerresult = '<img src="systems/eoa/images/' + imagefile + '.png" style="margin-top:0px;margin-left:2px;">';
          } else {
            dangerresult = dangerresult + '' + '<img src="systems/eoa/images/' + imagefile + '.png" style="margin-top:0px;margin-left:2px;">';
          }
          
        }
      }
            
      submsg = 'Result: ' + rollvalue;
      switch (rollvalue) {        
        case 0:         
        case 1:
          oracle = 'NO, AND';  
          if(botches>0){
            hasfumble = true;
            submsg = submsg + ' + ' + botches + '(Botch(s)) ';
          }
          break;
        case 2:
          oracle = 'NO';
          break;
        case 3:
          oracle = 'NO, BUT';
          break;
        case 4:
          oracle = 'YES, BUT';
          break;
        case 5:
          oracle = 'YES';
          break;
        case 6:
          oracle = 'YES, AND'; 
          if(boons>0){
            hascrit = true;
            submsg = submsg + ' + ' + boons + '(Boon(s)) ';
          }
          break;
      }
    } 
    else {
      // Standard FU2 oracle
      flavortext = 'The Oracle answered';
      rollvalue = highest;
      submsg = 'Result: ' + rollvalue;
      switch (rollvalue) {
        // In FU2 Botch: if all the ( are cancelled, 
        // the result counts as a roll of �1�.
        case 0:
          oracle = 'BOTCH';
          hasfumble = true;
          submsg = 'Result: ' + botch_value;
          break;
        case 1:
          oracle = 'NO AND...';
          break;
        case 2:
          oracle = 'NO';
          break;
        case 3:
          oracle = 'NO BUT...';
          break;
        case 4:
          oracle = 'YES BUT...';
          break;
        case 5:
          oracle = 'YES';
          break;
        case 6:
          oracle = 'YES AND...';
          // check for boon
          boons = arrFinals[5] - 1;
          if (boons > 0) {
            hascrit = true;
            submsg = submsg + ' + ' + boons + '(Boon(s)) ';
          }
          break;
      }
    }
    //
    // rolling and calcultion complete, now for result display
    //
    let rolldice = '';
    let publicmode=false;
    let blindmode = false;
    let privatemode=false;
    let gmmode=false;
    let selfmode=false;
    let rolltype = document.getElementsByClassName("roll-type-select");
    let rtypevalue = rolltype[0].value;
    let rvalue = CONST.CHAT_MESSAGE_TYPES.OTHER;
    switch (rtypevalue) {      //roll, gmroll,blindroll,selfroll
      case CONST.DICE_ROLL_MODES.PUBLIC:
        publicmode=true;
        break;
      case CONST.DICE_ROLL_MODES.PRIVATE:
        gmmode = true;
        privatemode=true;
        rvalue = 1;
        break;
      case CONST.DICE_ROLL_MODES.BLIND:
        rvalue = 1;
        blindmode = true;
        gmmode = true;
        break;
      case CONST.DICE_ROLL_MODES.SELF:
        selfmode=true;
        break;
      default:
    }
    
    // now if the module dice-so-nice is activated
    if (game.dice3d != null) {            
      //dynamic builing dice rolls for d3
      let dice3dice=[];      
      for (let i = 0; i < actionssorted.length; i++) {
        let dieresult={
          result: actionssorted[i],
          resultLabel: actionssorted[i],
          type: "d6",
          vectors: [],
          options: {colorset:"white"}
        };
        dice3dice.push(dieresult);
      }
      for (let i = 0; i < dangersorted.length; i++) {
        let dieresult={
          result: dangersorted[i],
          resultLabel: dangersorted[i],
          type: "d6",
          vectors: [],
          options: {colorset:"black"}
        };
        dice3dice.push(dieresult);
      }                  
      let dice3ddata= {
        throws: [{
            dice:dice3dice 
          }]
      };      
      let user=game.user;      
      let synchronize=false;
      let whisper;
      let blind = false;      
      if(publicmode){
        synchronize=true;
      }      
      if(privatemode){
        synchronize=true;
        whisper=ChatMessage.getWhisperRecipients('GM');
      }
      if (blindmode){
        blind=true;
        synchronize=true;
        whisper=ChatMessage.getWhisperRecipients('GM');
      }      
      if(selfmode){
        synchronize=false;
      }      
      // always show for gm
      if (game.user.isGM) {
        blind = false;
      }
      await game.dice3d.show(dice3ddata, user, synchronize, whisper, blind)
    }
    
    let msgimg;
    let msgname;
    if (game.user.character != null) {
      msgimg = game.user.character.data.img;
      msgname = game.user.character.data.name;
    } else {
      msgimg = game.user.avatar;
      msgname = game.user.name;
    }
    // determine running system    
    let runningsystemname = game.system.id; // sandbox
    if (runningsystemname == 'sandbox') {
      // special handling for sandbox    
      let rollData = {
        token: {
          img: msgimg,
          name: msgname
        },
        actor: msgname,
        flavor: flavortext,
        formula: '',
        mod: '',
        result: oracle,
        user: game.user.name,
        conditional: submsg,
        iscrit: hascrit,
        isfumble: hasfumble,
        blind: blindmode,
        action: actionresult,
        danger: dangerresult,
        summary: submsg + ' => ' + oracle,
        msg: msg
      };

      renderTemplate(`systems/${_module_id}/templates/fux-dice-roller-chatmsg-sandbox.hbs`, rollData).then(html => {
        let messageData = {
          content: html,
          type: rvalue,
          blind: blindmode
        };
        if (rtypevalue == CONST.DICE_ROLL_MODES.PRIVATE || rtypevalue == CONST.DICE_ROLL_MODES.BLIND) {
          messageData.whisper = ChatMessage.getWhisperRecipients('GM');
        } else if (rtypevalue == CONST.DICE_ROLL_MODES.SELF) {
          // whisper to self  
          messageData.whisper = ChatMessage.getWhisperRecipients(game.user.name);
        }
        let newmessage = ChatMessage.create(messageData);
      });
    } else {
      // ----------------
      // any other system
      // ----------------
      let actionrolls=[];
      let augmentrolls=[];
      let dangerrolls=[];
      
      if (systemvariant == _fux_dice_roller_constants_js__WEBPACK_IMPORTED_MODULE_0__.FUX_CONST.SYSTEM_VARIANTS.EARTHDAWN_AGE_OF_LEGEND) {
        // don use the sorted array
        for (let i = 0; i < actiondiceresults.terms[0].results.length; i++) {
          let dieresult={
            classes:'die d6',
            result: actiondiceresults.terms[0].results[i].result
          };
          actionrolls.push(dieresult);
        }
        for (let i = 0; i < augmentdiceresults.terms[0].results.length; i++) {
          let dieresult={
            classes:'die d8',
            result: augmentdiceresults.terms[0].results[i].result
          };
          augmentrolls.push(dieresult);
        }
        for (let i = 0; i < dangerdiceresults.terms[0].results.length; i++) {
          let dieresult={
            classes:'die d6',
            result: dangerdiceresults.terms[0].results[i].result
          };
          dangerrolls.push(dieresult);
        }
        
      } else{      
        for (let i = 0; i < actionsunsorted.length; i++) {
          let dieresult={
            classes:'die d6',
            result: actionsunsorted[i]
          };
          actionrolls.push(dieresult);
        }
        for (let i = 0; i < augmentunsorted.length; i++) {
          let dieresult={
            classes:'die d8',
            result: augmentunsorted[i]
          };
          augmentrolls.push(dieresult);
        }
        for (let i = 0; i < dangerunsorted.length; i++) {
          let dieresult={
            classes:'die d6',
            result: dangerunsorted[i]
          };
          dangerrolls.push(dieresult);
        }  
      }
      
      let parts=[
        {
          faces:6,
          flavor:'white',
          formula:'Action Dice',
          rolls:actionrolls,
          total:actiondice
        },
        {
          faces:8,
          flavor:'green',
          formula:'Augment Dice',
          rolls:augmentrolls,
          total:augmentdice
        },
        {
          faces:6,
          flavor:'black',
          formula:'Edge Dice',
          rolls:dangerrolls,
          total:dangerdice
        }
      ];
      
      let rollData = {
        token: {
          img: msgimg,
          name: msgname
        },
        actor: msgname,
        flavor: flavortext,
        formula: submsg,
        total:oracle ,
        parts:parts,
        
        mod: '',
        result: oracle ,
        user: game.user.name,
        conditional: submsg,
        iscrit: hascrit,
        isfumble: hasfumble,
        blind: blindmode,
        augment: augmentresult,
        action: actionresult,
        danger: dangerresult,
        summary: submsg + ' => ' + oracle,
        msg: msg
      };

      console.log(rollData);
      renderTemplate(`systems/${_module_id}/templates/fux-dice-roller-chatmsg-core.hbs`, rollData).then(html => {
        let messageData = {
          content: html,
          type: rvalue,
          blind: blindmode
        };
        
        if (rtypevalue == CONST.DICE_ROLL_MODES.PRIVATE || rtypevalue == CONST.DICE_ROLL_MODES.BLIND) {
          messageData.whisper = ChatMessage.getWhisperRecipients('GM');
        } else if (rtypevalue == CONST.DICE_ROLL_MODES.SELF) {
          // whisper to self  
          messageData.whisper = ChatMessage.getWhisperRecipients(game.user.name);
        }
        let newmessage = ChatMessage.create(messageData);
      });       
    }

    return rollvalue + boons;

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
/* harmony import */ var _module_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/config.js */ "./src/module/config.js");
/* harmony import */ var _module_helper_TemplatePreloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/helper/TemplatePreloader */ "./src/module/helper/TemplatePreloader.ts");
/* harmony import */ var _module_items_BreedSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/items/BreedSheet */ "./src/module/items/BreedSheet.ts");
/* harmony import */ var _module_items_ProfessionSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/items/ProfessionSheet */ "./src/module/items/ProfessionSheet.ts");
/* harmony import */ var _module_items_OriginSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/items/OriginSheet */ "./src/module/items/OriginSheet.ts");
/* harmony import */ var _module_items_FactionSheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/items/FactionSheet */ "./src/module/items/FactionSheet.ts");
/* harmony import */ var _module_actors_ActorSheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/actors/ActorSheet */ "./src/module/actors/ActorSheet.js");
/* harmony import */ var _module_items_SkillSheet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/items/SkillSheet */ "./src/module/items/SkillSheet.ts");
/* harmony import */ var _module_items_SupplySheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/items/SupplySheet */ "./src/module/items/SupplySheet.ts");
/* harmony import */ var _module_items_LoadoutSheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/items/LoadoutSheet */ "./src/module/items/LoadoutSheet.js");
/* harmony import */ var _helpers_dice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/dice.js */ "./src/helpers/dice.js");











Hooks.once("init", async () => {
    console.log("========================Edge of Anarchy=====================");
    console.log("============================Load============================");
    CONFIG["eoa"] = _module_config_js__WEBPACK_IMPORTED_MODULE_0__.eoa;
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("eoa", _module_items_BreedSheet__WEBPACK_IMPORTED_MODULE_2__.EoABreedSheet, {
        types: ["breed"],
        makeDefault: true
    });
    Items.registerSheet("eoa", _module_items_ProfessionSheet__WEBPACK_IMPORTED_MODULE_3__.EoAProfessionSheet, {
        types: ["profession"],
        makeDefault: true
    });
    Items.registerSheet("eoa", _module_items_OriginSheet__WEBPACK_IMPORTED_MODULE_4__.EoAOriginSheet, {
        types: ["origin"],
        makeDefault: true
    });
    Items.registerSheet("eoa", _module_items_FactionSheet__WEBPACK_IMPORTED_MODULE_5__.EoAFactionSheet, {
        types: ["faction"],
        makeDefault: true
    });
    Items.registerSheet("eoa", _module_items_SkillSheet__WEBPACK_IMPORTED_MODULE_7__.EoASkillSheet, {
        types: ["skill"],
        makeDefault: true
    });
    Items.registerSheet("eoa", _module_items_SupplySheet__WEBPACK_IMPORTED_MODULE_8__.EoASupplySheet, {
        types: ["supply"],
        makeDefault: true
    });
    Items.registerSheet("eoa", _module_items_LoadoutSheet__WEBPACK_IMPORTED_MODULE_9__.EoALoadoutSheet, {
        types: ["loadout"],
        makeDefault: true
    });
    Actors.registerSheet("eoa", _module_actors_ActorSheet__WEBPACK_IMPORTED_MODULE_6__.EoAActorSheet, {
        types: ["hero"],
        makeDefault: true
    });
    // await TemplatePreloader.preloadHandlebarsTemplates();
    Handlebars.registerHelper("face", _helpers_dice_js__WEBPACK_IMPORTED_MODULE_10__.diceToFaces);
    // await TemplatePreloader.preloadHandlebarsTemplates();
    Handlebars.registerHelper("face2", _helpers_dice_js__WEBPACK_IMPORTED_MODULE_10__.diceToFacesAlt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxJQUFJLEVBQUU7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnRUFBZ0UsQ0FBQztJQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLGdFQUFnRSxDQUFDO0FBRWpGLENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxJQUFzQyxFQUFFLENBQUM7SUFDekMsSUFBSSxLQUFVLEVBQUUsRUFrQmY7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvdGVtcGxhdGVzL2FjdG9yL2FjdG9yLWhlcm8tc2hlZXQuaHRtbCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvYnJlZWQtc2hlZXQuaHRtbCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvZmFjdGlvbi1zaGVldC5odG1sIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9sb2Fkb3V0LXNoZWV0Lmh0bWwiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL29yaWdpbi1zaGVldC5odG1sIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9wcm9mZXNzaW9uLXNoZWV0Lmh0bWwiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL3NraWxsLXNoZWV0Lmh0bWwiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL3N1cHBseS1zaGVldC5odG1sIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL21vZHVsZS9oZWxwZXIvVGVtcGxhdGVQcmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2l0ZW1zL0JyZWVkU2hlZXQudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2l0ZW1zL0ZhY3Rpb25TaGVldC50cyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaXRlbXMvT3JpZ2luU2hlZXQudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2l0ZW1zL1Byb2Zlc3Npb25TaGVldC50cyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaXRlbXMvU2tpbGxTaGVldC50cyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaXRlbXMvU3VwcGx5U2hlZXQudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvaGVscGVycy9kaWNlLmpzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL21vZHVsZS9hY3RvcnMvQWN0b3JTaGVldC5qcyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvY29uZmlnLmpzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL21vZHVsZS9pdGVtcy9Mb2Fkb3V0U2hlZXQuanMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvc2NyaXB0cy9mdXgtZGljZS1yb2xsZXItY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3NjcmlwdHMvZnV4LWRpY2Utcm9sbGVyLXJvbGwuanMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9lb2EudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI8c3R5bGU+XFxuICAgIC5iaW9ncmFwaHktZWRpdG9yIC5lZGl0b3Ige1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmF5O1xcbiAgICB9XFxuICAgIC5lZGl0b3Ige1xcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHggIWltcG9ydGFudDtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcXG4gICAgfVxcbiAgICB0ZCB7XFxuICAgICAgICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICBsYWJlbC5jaGVja2JveCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAuY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiAwOyAvKiBBZGp1c3QgdGhlIHZlcnRpY2FsIHBvc2l0aW9uIGFzIG5lZWRlZCAqL1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIEFkanVzdCB0aGUgc3BhY2luZyBiZXR3ZWVuIHJhZGlvIGJ1dHRvbiBhbmQgY29udGVudCAqL1xcbiAgICB9XFxuICAgIGZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICAgIH1cXG4gICAgLm51bWJlci1zcGlubmVyIC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgIH1cXG4gICAgLm51bWJlci1zcGlubmVyIC5mb3JtLWNvbnRyb2wge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmJ0bi1wbHVzLFxcbiAgICAuYnRuLW1pbnVzIHtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogU3R5bGUgdGhlIGNvbnRlbnQgZGl2IGFzIG5lZWRlZCAqL1xcbiAgICB9XFxuICAgIC5iYWRnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBiYWRnZSAqL1xcbiAgICAgICAgY29sb3I6ICNmZmY7IC8qIFRleHQgY29sb3Igb2YgdGhlIGJhZGdlICovXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIFRvIG1ha2UgdGhlIGJhZGdlIHJvdW5kICovXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgIHdpZHRoOiAyNXB4OyAvKiBBZGp1c3Qgd2lkdGggYW5kIGhlaWdodCBhcyBuZWVkZWQgKi9cXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSB0ZXh0ICovXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyAvKiBBZGp1c3QgbWFyZ2luIHRvIHBsYWNlIGl0IG5leHQgdG8gdGhlIGxhYmVsICovXFxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXFxuPGZvcm0gY2xhc3M9XFxcInt7Y3NzQ2xhc3N9fSBmbGV4Y29sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgc3R5bGU9XFxcImZsZXg6IG5vbmUgIWltcG9ydGFudDtcXFwiPlxcbiAgICB7eyEtLSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXJcXFwiPlxcbiAgICAgICAge3shLS0gSGVhZGVyIHN0dWZmIGdvZXMgaGVyZSAtLX19XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlLWltZ1xcXCIgc3JjPVxcXCJ7e2FjdG9yLmltZ319XFxcIiBkYXRhLWVkaXQ9XFxcImltZ1xcXCIgdGl0bGU9XFxcInt7YWN0b3IubmFtZX19XFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgc3R5bGU9XFxcImhlaWdodDogMTI4cHggIWltcG9ydGFudDsgd2lkdGg6IDEyOHB4ICFpbXBvcnRhbnQ7XFxcIi8+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItZmllbGRzXFxcIj5cXG4gICAgICAgICAgICA8aDEgY2xhc3M9XFxcImNoYXJuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiIHN0eWxlPVxcXCJtYXJnaW46IDAgIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2FjdG9yLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDpjYWxjKDEwMCUgLSAxMTBweClcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJzeXN0ZW0uY3VycmVudF90bFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uY3VycmVudF90bH19XFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDtcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9oMT5cXG4gICAgICAgICAgICB7eyNpZiBoYXNfc3RhdHN9fVxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIGJyZWVkLjAuc3lzdGVtLnNraWxscyBhcyB8IHNraWxsIHx9fVxcbiAgICAgICAgICAgICAgICAgICAge3sjaWYgKGVxIHNraWxsLm5hbWUgLi4vZGF0YS5zeXN0ZW0uYnJlZWRfbGlmZXBhdGgpfX1cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT1cXFwicGFkZGluZzogMCAxNXB4OyBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcImJvcmRlcjogMXB4IGJsYWNrIHNvbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TVFI8L2xhYmVsPjxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e3NraWxsLnN0cn19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNUQTwvbGFiZWw+PGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPnt7c2tpbGwuc3RhfX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QUdJPC9sYWJlbD48bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+e3tza2lsbC5hZ2l9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JTlQ8L2xhYmVsPjxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e3NraWxsLmludH19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNFTjwvbGFiZWw+PGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPnt7c2tpbGwuc2VufX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UFNZPC9sYWJlbD48bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+e3tza2lsbC5wc3l9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAge3svaWZ9fVxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICB7e2Vsc2V9fVxcbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9XFxcInBhZGRpbmc6IDAgMTVweDsgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcImJvcmRlcjogMXB4IGJsYWNrIHNvbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TVFI8L2xhYmVsPjxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj4wPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNUQTwvbGFiZWw+PGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPjA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QUdJPC9sYWJlbD48bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+MDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JTlQ8L2xhYmVsPjxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj4wPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNFTjwvbGFiZWw+PGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPjA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UFNZPC9sYWJlbD48bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+MDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvaDM+XFxuICAgICAgICAgICAge3svaWZ9fVxcblxcbiAgICAgICAgICAgIDxoMyBzdHlsZT1cXFwicGFkZGluZzogMCAxNXB4OyBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPVxcXCJib3JkZXI6IDFweCBibGFjayBzb2xpZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5IUDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLmN1cnJlbnRfaHBcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmN1cnJlbnRfaHB9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPi88L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPnt7bWF4X2hwfX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaWYgKGVxIGJyZWVkLjAuc3lzdGVtLmJvbnVzLmhwIDApfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPit7e2JyZWVkLjAuc3lzdGVtLmJvbnVzLmhwfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwic3lzdGVtLnNhZmV0eV9vblxcXCIge3tjaGVja2VkIGRhdGEuc3lzdGVtLnNhZmV0eV9vbn19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNhZmV0eTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OUDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLmN1cnJlbnRfbnBcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmN1cnJlbnRfbnB9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPi88L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPnt7bWF4X25wfX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaWYgKGVxIGJyZWVkLjAuc3lzdGVtLmJvbnVzLm5wIDApfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPit7e2JyZWVkLjAuc3lzdGVtLmJvbnVzLm5wfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5DVTwvbGFiZWw+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5jdXJyZW50X25jdVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uY3VycmVudF9uY3V9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e2NvbnN1bWVkX25jdX19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4vPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e21heF9uY3V9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgYnJlZWQuMC5zeXN0ZW0uYm9udXMubmN1IDApfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPit7e2JyZWVkLjAuc3lzdGVtLmJvbnVzLm5jdX19PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pZn19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDwvaDM+XFxuXFxuICAgICAgICAgICAgPGgzIHN0eWxlPVxcXCJwYWRkaW5nOiAwIDE1cHhcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcImJvcmRlcjogMXB4IGJsYWNrIHNvbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNQPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uY3VycmVudF9zcFxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uY3VycmVudF9zcH19XFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3R5bGU9XFxcIndpZHRoOiA0NXB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+LzwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+e3ttYXhfc3B9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Jbml0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e2luaXR9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgYnJlZWQuMC5zeXN0ZW0uYm9udXMuaW5pdCAwKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2Vsc2V9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhZGdlXFxcIj4re3ticmVlZC4wLnN5c3RlbS5ib251cy5pbml0fX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPklQPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uY3VycmVudF9pcFxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uY3VycmVudF9pcH19XFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3R5bGU9XFxcIndpZHRoOiA0NXB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgYnJlZWQuMC5zeXN0ZW0uYm9udXMuaXAgMCl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWRnZVxcXCI+K3t7YnJlZWQuMC5zeXN0ZW0uYm9udXMuaXB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaWZ9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNyZWRpdHM8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5jdXJyZW50X21vbmV5XFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5jdXJyZW50X21vbmV5fX1cXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDQ1cHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgPC9oMz5cXG48IS0tICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFyYWxpYXNcXFwiPjxpbnB1dCBuYW1lPVxcXCJzeXN0ZW0uYWxpYXNcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmFsaWFzfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJBbGlhc1xcXCIvPjwvaDE+LS0+XFxuXFxuPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QnJlZWQ8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgYnJlZWQubGVuZ3RoIDApfX0tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImljb25zL3N2Zy9teXN0ZXJ5LW1hbi5zdmdcXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5VbnNwZWNpZmllZDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ7e2JyZWVkLjAuaW1nfX1cXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e2JyZWVkLjAubmFtZX19PC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAge3svaWZ9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5PcmlnaW48L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgb3JpZ2luLmxlbmd0aCAwKX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJpY29ucy9zdmcvbXlzdGVyeS1tYW4uc3ZnXFxcIiAvPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VW5zcGVjaWZpZWQ8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7e2Vsc2V9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3tvcmlnaW4uMC5pbWd9fVxcXCIgLz4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7b3JpZ2luLjAubmFtZX19PC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAge3svaWZ9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9mZXNzaW9uPC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAge3sjaWYgKGVxIHByb2Zlc3Npb24ubGVuZ3RoIDApfX0tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImljb25zL3N2Zy9teXN0ZXJ5LW1hbi5zdmdcXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5VbnNwZWNpZmllZDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ7e3Byb2Zlc3Npb24uMC5pbWd9fVxcXCIgLz4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7cHJvZmVzc2lvbi4wLm5hbWV9fTwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX0tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmFjdGlvbjwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIHt7I2lmIChlcSBmYWN0aW9uLmxlbmd0aCAwKX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJpY29ucy9zdmcvbXlzdGVyeS1tYW4uc3ZnXFxcIiAvPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VW5zcGVjaWZpZWQ8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7e2Vsc2V9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3tmYWN0aW9uLjAuaW1nfX1cXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e2ZhY3Rpb24uMC5uYW1lfX08L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7ey9pZn19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzb3VyY2VzIGdyaWQgZ3JpZC0yY29sXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc291cmNlIGZsZXgtZ3JvdXAtY2VudGVyXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzeXN0ZW0uaGVhbHRoLnZhbHVlXFxcIiBjbGFzcz1cXFwicmVzb3VyY2UtbGFiZWxcXFwiPkhlYWx0aDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzb3VyY2UtY29udGVudCBmbGV4cm93IGZsZXgtY2VudGVyIGZsZXgtYmV0d2VlblxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uaGVhbHRoLnZhbHVlXFxcIiB2YWx1ZT1cXFwie3tzeXN0ZW0uaGVhbHRoLnZhbHVlfX1cXFwiIGRhdGEtZHR5cGU9XFxcIk51bWJlclxcXCIvPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gLyA8L3NwYW4+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uaGVhbHRoLm1heFxcXCIgdmFsdWU9XFxcInt7c3lzdGVtLmhlYWx0aC5tYXh9fVxcXCIgZGF0YS1kdHlwZT1cXFwiTnVtYmVyXFxcIi8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc291cmNlIGZsZXgtZ3JvdXAtY2VudGVyXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzeXN0ZW0ucG93ZXIudmFsdWVcXFwiIGNsYXNzPVxcXCJyZXNvdXJjZS1sYWJlbFxcXCI+UG93ZXI8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc291cmNlLWNvbnRlbnQgZmxleHJvdyBmbGV4LWNlbnRlciBmbGV4LWJldHdlZW5cXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLnBvd2VyLnZhbHVlXFxcIiB2YWx1ZT1cXFwie3tzeXN0ZW0ucG93ZXIudmFsdWV9fVxcXCIgZGF0YS1kdHlwZT1cXFwiTnVtYmVyXFxcIi8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAvIDwvc3Bhbj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5wb3dlci5tYXhcXFwiIHZhbHVlPVxcXCJ7e3N5c3RlbS5wb3dlci5tYXh9fVxcXCIgZGF0YS1kdHlwZT1cXFwiTnVtYmVyXFxcIi8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgPC9kaXY+IHt7ISYjNDU7JiM0NTsgY2xvc2VzIHRoZSBcXFwicmVzb3VyY2VzXFxcIiBkaXYgJiM0NTsmIzQ1O319LS0+XFxuXFxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFiaWxpdGllcyBncmlkIGdyaWQtM2NvbFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICB7eyNlYWNoIHN5c3RlbS5hYmlsaXRpZXMgYXMgfGFiaWxpdHkga2V5fH19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYmlsaXR5IGZsZXhyb3cgZmxleC1ncm91cC1jZW50ZXJcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN5c3RlbS5hYmlsaXRpZXMue3trZXl9fS52YWx1ZVxcXCIgY2xhc3M9XFxcInJlc291cmNlLWxhYmVsXFxcIj57e2tleX19PC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLmFiaWxpdGllcy57e2tleX19LnZhbHVlXFxcIiB2YWx1ZT1cXFwie3thYmlsaXR5LnZhbHVlfX1cXFwiIGRhdGEtZHR5cGU9XFxcIk51bWJlclxcXCIvPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhYmlsaXR5LW1vZFxcXCI+e3tudW1iZXJGb3JtYXQgYWJpbGl0eS5tb2QgZGVjaW1hbHM9MCBzaWduPXRydWV9fTwvc3Bhbj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgICAgICAgICAge3svZWFjaH19LS0+XFxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbiAgICAgICAgPC9kaXY+IHt7IS0tIGNsb3NlcyB0aGUgXFxcImhlYWRlci1maWVsZHNcXFwiIGRpdiAtLX19XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBTaGVldCBUYWIgTmF2aWdhdGlvbiAtLX19XFxuICAgIDxuYXYgY2xhc3M9XFxcInNoZWV0LW5hdmlnYXRpb24gdGFicyBmb3JtLWdyb3VwXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMTBweDtcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJzeXN0ZW1zL2VvYS9pY29ucy9oaXN0b3J5LnBuZ1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzwvbGFiZWw+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcImJyZWVkXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMTBweDtcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5CcmVlZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7I2lmIChlcSBicmVlZC5sZW5ndGggMCl9fVxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaWNvbnMvc3ZnL215c3RlcnktbWFuLnN2Z1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPlVuc3BlY2lmaWVkPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3tlbHNlfX1cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcInt7YnJlZWQuMC5pbWd9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt7YnJlZWQuMC5uYW1lfX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7ey9pZn19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcIm9yaWdpblxcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDEwcHg7XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+T3JpZ2luPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3sjaWYgKGVxIG9yaWdpbi5sZW5ndGggMCl9fVxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaWNvbnMvc3ZnL215c3RlcnktbWFuLnN2Z1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPlVuc3BlY2lmaWVkPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3tlbHNlfX1cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcInt7b3JpZ2luLjAuaW1nfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD57e29yaWdpbi4wLm5hbWV9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwicHJvZmVzc2lvblxcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDEwcHg7XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZmVzc2lvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7I2lmIChlcSBwcm9mZXNzaW9uLmxlbmd0aCAwKX19XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJpY29ucy9zdmcvbXlzdGVyeS1tYW4uc3ZnXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+VW5zcGVjaWZpZWQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7e2Vsc2V9fVxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3twcm9mZXNzaW9uLjAuaW1nfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD57e3Byb2Zlc3Npb24uMC5uYW1lfX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7ey9pZn19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcImZhY3Rpb25cXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAxMHB4O1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiIHN0eWxlPVxcXCJmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPkZhY3Rpb248L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7eyNpZiAoZXEgZmFjdGlvbi5sZW5ndGggMCl9fVxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaWNvbnMvc3ZnL215c3RlcnktbWFuLnN2Z1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPlVuc3BlY2lmaWVkPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3tlbHNlfX1cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcInt7ZmFjdGlvbi4wLmltZ319XFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+e3tmYWN0aW9uLjAubmFtZX19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3svaWZ9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJpdGVtc1xcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDEwcHg7XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+SXRlbXM8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwic3lzdGVtcy9lb2EvaWNvbnMvaXRlbXMucG5nXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+Jm5ic3A7PC9sYWJlbD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIFNoZWV0IEJvZHkgLS19fVxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2hlZXQtYm9keVxcXCI+XFxuXFxuICAgICAgICB7eyEtLSBCaW9ncmFwaHkgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBiaW9ncmFwaHktZWRpdG9yXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5CaW9ncmFwaHk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5iaW9ncmFwaHkgdGFyZ2V0PVxcXCJzeXN0ZW0uYmlvZ3JhcGh5XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuXFxuICAgICAgICAgICAgICAgIDxsYWJlbD5SZWxhdGlvbnNoaXBzPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0ucmVsYXRpb25zaGlwcyB0YXJnZXQ9XFxcInN5c3RlbS5yZWxhdGlvbnNoaXBzXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIEJyZWVkIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvd1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImJyZWVkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5EZXNjcmlwdGlvbjwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGJyZWVkLjAuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlIHRhcmdldD1cXFwiYnJlZWQuMC5zeXN0ZW0uZGVzY3JpcHRpb24udmFsdWVcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+TGlmZXBhdGggVGFibGU8L3N0cm9uZz4gKFJvbGwgMmQ2IG9yIENob29zZSk8L2xhYmVsPjxicj5cXG4gICAgICAgICAgICAgICAge3tyYWRpb0JveGVzIFxcXCJzeXN0ZW0uYnJlZWRfbGlmZXBhdGhcXFwiIGJyZWVkX2RpY3QgY2hlY2tlZD1icmVlZF9saWZlcGF0aCBsb2NhbGl6ZT10cnVlfX1cXG48IS0tICAgICAgICAgICAgICAgIDx0YWJsZT48dHI+PHRkPiZuYnNwOzwvdGQ+PHRkPlJhbmdlPC90ZD48dGQ+TmFtZTwvdGQ+PHRkPkRlc2NyaXB0aW9uPC90ZD48L3RyPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAge3sjZWFjaCBicmVlZC4wLnN5c3RlbS5za2lsbHMgYXMgfCBza2lsbCB8fX0tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8dHI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cXFwicmFkaW9cXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLmJyZWVkX2xpZmVwYXRoXFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5icmVlZF9saWZlcGF0aH19XFxcIj48L3RkPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tza2lsbC5sb3d9fS17e3NraWxsLmhpZ2h9fTwvdGQ+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3NraWxsLm5hbWV9fTwvdGQ+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3NraWxsLmRlc2NyaXB0aW9ufX08L3RkPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDwvdHI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPHRyPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPHRkPiZuYnNwOzwvdGQ+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCIyXFxcIj48c3Ryb25nPkF0dHJpYnV0ZXM6PC9zdHJvbmc+IFN0ciB7e3NraWxsLnN0cn19LCBTdGEge3tza2lsbC5zdGF9fSwgQWdpIHt7c2tpbGwuYWdpfX0sIEludCB7e3NraWxsLmludH19LCBTZW4ge3tza2lsbC5zZW59fSwgUHN5IHt7c2tpbGwucHN5fX08L3RkPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDwvdHI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICB7ey9lYWNofX0tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvdGFibGU+LS0+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIE9yaWdpbiBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3dcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJvcmlnaW5cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkRlc2NyaXB0aW9uPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3Igb3JpZ2luLjAuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlIHRhcmdldD1cXFwib3JpZ2luLjAuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPlN0YXJ0aW5nIE1vbmV5OiA8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7b3JpZ2luLjAuc3lzdGVtLnN0YXJ0aW5nX21vbmV5fX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+T3JpZ2luIFNraWxscyAoQ2hvb3NlIDMpOiA8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAge3sjZWFjaCBvcmlnaW4uMC5zeXN0ZW0ub3JpZ2luX3NraWxscyBhcyB8IG9za2lsbCB8fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInN5c3RlbS5vcmlnaW5fc2tpbGxzLnt7b3NraWxsfX1cXFwiIHt7Y2hlY2tlZCAobG9va3VwIC4uL2RhdGEuc3lzdGVtLm9yaWdpbl9za2lsbHMgb3NraWxsKX19Pnt7b3NraWxsfX1cXG4gICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+SWRlYWxzPC9zdHJvbmc+PC9sYWJlbD48dWw+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggb3JpZ2luLjAuc3lzdGVtLmlkZWFscyBhcyB8IHNraWxsIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgPGxpPjxsYWJlbD57e3NraWxsLmRlc2NyaXB0aW9ufX08L2xhYmVsPjwvbGk+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5MaWZlcGF0aCBUYWJsZTwvc3Ryb25nPiAoUm9sbCAyZDYgb3IgQ2hvb3NlKTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7cmFkaW9Cb3hlcyBcXFwic3lzdGVtLm9yaWdpbl9saWZlcGF0aFxcXCIgb3JpZ2luX2RpY3QgY2hlY2tlZD1vcmlnaW5fbGlmZXBhdGggbG9jYWxpemU9dHJ1ZX19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIFByb2Zlc3Npb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwicHJvZmVzc2lvblxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiIHN0eWxlPVxcXCJmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+RGVzY3JpcHRpb248L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBwcm9mZXNzaW9uLjAuc3lzdGVtLmRlc2NyaXB0aW9uLm92ZXJ2aWV3IHRhcmdldD1cXFwicHJvZmVzc2lvbi4wLnN5c3RlbS5kZXNjcmlwdGlvbi5vdmVydmlld1xcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZmFsc2V9fVxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5TaWduYXR1cmUgUmVzb3VyY2U8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBwcm9mZXNzaW9uLjAuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZSB0YXJnZXQ9XFxcInByb2Zlc3Npb24uMC5zeXN0ZW0uc2lnbmF0dXJlX3Jlc291cmNlXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBwcm9mZXNzaW9uLjAuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZV9kZXNjIHRhcmdldD1cXFwicHJvZmVzc2lvbi4wLnN5c3RlbS5zaWduYXR1cmVfcmVzb3VyY2VfZGVzY1xcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZmFsc2V9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3IgcHJvZmVzc2lvbi4wLnN5c3RlbS5zaWduYXR1cmVfcmVzb3VyY2VfZWZmZWN0IHRhcmdldD1cXFwicHJvZmVzc2lvbi4wLnN5c3RlbS5zaWduYXR1cmVfcmVzb3VyY2VfZWZmZWN0XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkZsYXNoYmFjayBBYmlsaXR5PC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3IgcHJvZmVzc2lvbi4wLnN5c3RlbS5mbGFzaGJhY2tfYWJpbGl0eSB0YXJnZXQ9XFxcInByb2Zlc3Npb24uMC5zeXN0ZW0uZmxhc2hiYWNrX2FiaWxpdHlcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIHByb2Zlc3Npb24uMC5zeXN0ZW0uZmxhc2hiYWNrX3RyaWdnZXIgdGFyZ2V0PVxcXCJwcm9mZXNzaW9uLjAuc3lzdGVtLmZsYXNoYmFja190cmlnZ2VyXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBwcm9mZXNzaW9uLjAuc3lzdGVtLmZsYXNoYmFja19lZmZlY3QgdGFyZ2V0PVxcXCJwcm9mZXNzaW9uLjAuc3lzdGVtLmZsYXNoYmFja19lZmZlY3RcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+U2lnbmF0dXJlIFRyYWl0czwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggcHJvZmVzc2lvbi4wLnN5c3RlbS5zaWduYXR1cmVfdHJhaXRzIGFzIHwgc2tpbGwgfH19XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIHNraWxsLm5hbWUgdGFyZ2V0PVxcXCJza2lsbC5uYW1lXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXg0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBza2lsbC5kZXNjcmlwdGlvbiB0YXJnZXQ9XFxcInNraWxsLmRlc2NyaXB0aW9uXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5Ta2lsbCBMaXN0PC9zdHJvbmc+IChTdGFydGluZyBjaGFyYWN0ZXJzIGRpdmlkZSA1IHBvaW50cyBhcm91bmQgdGhpcyBsaXN0LiBObyBza2lsbCBjYW4gYmUgaGlnaGVyIHRoYW4gMiBhdCBjaGFyYWN0ZXIgY3JlYXRpb24pPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPHRhYmxlPjx0cj48dGQ+Jm5ic3A7PC90ZD48dGQ+TmFtZTwvdGQ+PHRkPkRlc2NyaXB0aW9uPC90ZD48L3RyPlxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIHByb2Zlc3Npb24uMC5zeXN0ZW0uc2tpbGxfbGlzdCBhcyB8IHNrIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMHB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIG51bWJlci1zcGlubmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tbWludXNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+LTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5za2lsbC57e3NrLl9pZH19LnJhbmtcXFwiIHZhbHVlPVxcXCJ7e2xvb2t1cCAobG9va3VwIC4uL2RhdGEuc3lzdGVtLnNraWxsIHNrLl9pZCkgJ3JhbmsnIH19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyIHR4dC1za2lsbFxcXCIgbWluPVxcXCIwXFxcIiBtYXg9XFxcIjEwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtc2tpbGw9XFxcInt7bmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tcGx1c1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4rPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7c2submFtZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3t7c2suZGVzY3JpcHRpb259fX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuXFxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPk5hbm8gU2tpbGwgTGlzdDwvc3Ryb25nPiAoU3RhcnRpbmcgY2hhcmFjdGVycyBoYXZlIDIgcG9pbnRzIHRvIHNwZW5kIG9uIHRoaXMsIGdhaW5pbmcgYSBuYW5vIHByb2dyYW0gZnJvbSB0aGUgc2VsZWN0ZWQgc2tpbGwpPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPHRhYmxlPjx0cj48dGQ+Jm5ic3A7PC90ZD48dGQ+TmFtZTwvdGQ+PHRkPk5hbm9wcm9ncmFtczwvdGQ+PC90cj5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBwcm9mZXNzaW9uLjAuc3lzdGVtLm5hbm9fc2tpbGxfbGlzdCBhcyB8IHNrIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6IDEwMHB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIG51bWJlci1zcGlubmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tbWludXNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+LTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5uYW5vc2tpbGwue3tzay5faWR9fS5yYW5rXFxcIiB2YWx1ZT1cXFwie3tsb29rdXAgKGxvb2t1cCAuLi9kYXRhLnN5c3RlbS5uYW5vc2tpbGwgc2suX2lkKSAncmFuaycgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXIgdHh0LXNraWxsXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1za2lsbD1cXFwie3tuYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1wbHVzXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPis8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tzay5uYW1lfX08ZGl2IHN0eWxlPVxcXCJ0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcXCI+e3tzay5hdHRyaWJ1dGVzfX08L2Rpdj48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlPjx0cj48dGQ+Jm5ic3A7PC90ZD48dGQ+TmFtZTwvdGQ+PHRkPkRlc2NyaXB0aW9uPC90ZD48L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNlYWNoIHNrLm5hbm9wcm9ncmFtcyBhcyB8IG5wIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6NjBweDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInN5c3RlbS5uYW5vcHJvZ3JhbS57e25wLl9pZH19XFxcIiB7e2NoZWNrZWQgKGxvb2t1cCAuLi8uLi9kYXRhLnN5c3RlbS5uYW5vcHJvZ3JhbSBucC5faWQpfX0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAobG9va3VwIC4uLy4uL2RhdGEuc3lzdGVtLm5hbm9wcm9ncmFtIG5wLl9pZCl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcInN5c3RlbXMvZW9hL2ltYWdlcy9kaWVfaWNvbi5wbmdcXFwiIGFsdD1cXFwiUm9sbCBOYW5vcHJvZ3JhbVxcXCIgc3R5bGU9XFxcImJvcmRlcjogbm9uZSAhaW1wb3J0YW50O3dpZHRoOiAyMHB4O2hlaWdodDogMjBweDtcXFwiIGNsYXNzPVxcXCJucC1ydW5cXFwiIGRhdGEtYWN0b3I9XFxcInt7Li4vLi4vYWN0b3IuX2lkfX1cXFwiIGRhdGEtbnAtbmFtZT1cXFwie3tucC5uYW1lfX1cXFwiIGRhdGEtbnAtY29zdD1cXFwie3tucC5ucH19XFxcIiB7eyNlYWNoIHNrLmF0dHJpYnV0ZXMgYXMgfCBhdHRyIHx9fSBkYXRhLW5hbWV7e0BpbmRleH19PVxcXCJ7e2F0dHJ9fVxcXCIgZGF0YS1hdHRye3tAaW5kZXh9fT1cXFwie3tsb29rdXAgLi4vLi4vLi4vYXR0cnMgYXR0cn19XFxcInt7L2VhY2h9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XFxcIndpZHRoOjEwMHB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bnAubmFtZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bnAuZWZmZWN0fX0gKE5QOiB7e25wLm5wfX0sIE5DVToge3tucC5uY3V9fSlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBGYWN0aW9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvd1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImZhY3Rpb25cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkRlc2NyaXB0aW9uPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3IgZmFjdGlvbi4wLnN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZSB0YXJnZXQ9XFxcImZhY3Rpb24uMC5zeXN0ZW0uZGVzY3JpcHRpb24udmFsdWVcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+TW9uZXkgTXVsdGlwbGllciAoKiBzdGFydGluZyBPcmlnaW4gbW9uZXkuKTogPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e2ZhY3Rpb24uMC5zeXN0ZW0ubW9uZXlfbXVsdH19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkxpZmVwYXRoIFRhYmxlPC9zdHJvbmc+IChSb2xsIDJkNiBvciBDaG9vc2UpPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3tyYWRpb0JveGVzIFxcXCJzeXN0ZW0uZmFjdGlvbl9saWZlcGF0aFxcXCIgZmFjdGlvbl9kaWN0IGNoZWNrZWQ9ZmFjdGlvbl9saWZlcGF0aCBsb2NhbGl6ZT10cnVlfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gT3duZWQgSXRlbXMgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiaXRlbXNcXFwiPlxcbiAgICAgICAgICAgIDxvbCBjbGFzcz1cXFwiaXRlbXMtbGlzdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaXRlbSBmbGV4cm93IGl0ZW0taGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0taW1hZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIj5OYW1lPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbS1jb250cm9sIGl0ZW0tY3JlYXRlXFxcIiB0aXRsZT1cXFwiQ3JlYXRlIGl0ZW1cXFwiIGRhdGEtdHlwZT1cXFwiaXRlbVxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1wbHVzXFxcIj48L2k+IEFkZCBpdGVtPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggaXRlbXMgYXMgfGl0ZW0gaWR8fX1cXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtIGZsZXhyb3dcXFwiIGRhdGEtaXRlbS1pZD1cXFwie3tpdGVtLl9pZH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0taW1hZ2VcXFwiPjxpbWcgc3JjPVxcXCJ7e2l0ZW0uaW1nfX1cXFwiIHRpdGxlPVxcXCJ7e2l0ZW0ubmFtZX19XFxcIiB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiLz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIj57e2l0ZW0ubmFtZX19PC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udHJvbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtLWNvbnRyb2wgaXRlbS1lZGl0XFxcIiB0aXRsZT1cXFwiRWRpdCBJdGVtXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLWVkaXRcXFwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0tY29udHJvbCBpdGVtLWRlbGV0ZVxcXCIgdGl0bGU9XFxcIkRlbGV0ZSBJdGVtXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLXRyYXNoXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvb2w+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9zZWN0aW9uPlxcbjwvZm9ybT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIGNsYXNzPVxcXCJ7e2Nzc0NsYXNzfX0gZmxleGNvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiPlxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcInNoZWV0LWhlYWRlciBmbGV4cm93XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWRldGFpbHMgZmxleHJvd1xcXCI+XFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFybmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5SYWNlTmFtZSd9fVxcXCI+XFxuICAgICAgICAgICAgPC9oMT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXN1YnRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJpdGVtLXR5cGVcXFwiPnt7aXRlbVR5cGV9fTwvaDQ+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpdGVtLXN0YXR1c1xcXCI+e3tpdGVtU3RhdHVzfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgTmF2aWdhdGlvbiAtLX19XFxuICAgIDxuYXYgY2xhc3M9XFxcInNoZWV0LW5hdmlnYXRpb24gdGFic1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkRlc2NyaXB0aW9uXFxcIn19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJsaWZlcGF0aFxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkxpZmVwYXRoXFxcIn19PC9hPlxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBCb2R5IC0tfX1cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICAgICAge3shLS0gRGVzY3JpcHRpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24udmFsdWUgdGFyZ2V0PVxcXCJzeXN0ZW0uZGVzY3JpcHRpb24udmFsdWVcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gTGlmZXBhdGggVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImxpZmVwYXRoXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5MaWZlcGF0aCBUYWJsZSAoUm9sbCAyZDYgb3IgQ2hvb3NlKTo8L3N0cm9uZz48aHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uc2tpbGxzIGFzIHwgc2tpbGwgfH19XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e3NraWxsLmxvd319LXt7c2tpbGwuaGlnaH19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tAaW5kZXh9fS5uYW1lXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5uYW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXg0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QGluZGV4fX0uZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjx1bD48bGk+PHN0cm9uZz5BdHRyaWJ1dGVzOjwvc3Ryb25nPiBTdHIge3tza2lsbC5zdHJ9fSwgU3RhIHt7c2tpbGwuc3RhfX0sIEFnaSB7e3NraWxsLmFnaX19LCBJbnQge3tza2lsbC5pbnR9fSwgU2VuIHt7c2tpbGwuc2VufX0sIFBzeSB7e3NraWxsLnBzeX19PC9saT48L3VsPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8aHI+XFxuXFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG48L2Zvcm0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuUmFjZU5hbWUnfX1cXFwiPlxcbiAgICAgICAgICAgIDwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zdWJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwibGlmZXBhdGhcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5MaWZlcGF0aFxcXCJ9fTwvYT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgQm9keSAtLX19XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaGVldC1ib2R5XFxcIj5cXG5cXG4gICAgICAgIHt7IS0tIERlc2NyaXB0aW9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHggIWltcG9ydGFudFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlIHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TW9uZXkgTXVsdGlwbGllciAoKiBzdGFydGluZyBPcmlnaW4gbW9uZXkuKTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLm1vbmV5X211bHRcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLm1vbmV5X211bHR9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7ZGF0YS5zeXN0ZW0ubW9uZXlfbXVsdH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gTGlmZXBhdGggVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImxpZmVwYXRoXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+TGlmZXBhdGggVGFibGUgKFJvbGwgMmQ2IG9yIENob29zZSk6PC9zdHJvbmc+PGhyPlxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLmxpZmVfcGF0aCBhcyB8IHNraWxsIHx9fVxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3tza2lsbC5sb3d9fS17e3NraWxsLmhpZ2h9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QGluZGV4fX0ubmFtZVxcXCIgdmFsdWU9XFxcInt7c2tpbGwubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5uYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwuZGVzY3JpcHRpb24gdGFyZ2V0PVxcXCJza2lsbC5kZXNjcmlwdGlvblxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwuZXF1aXBtZW50IHRhcmdldD1cXFwic2tpbGwuZXF1aXBtZW50XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvZm9ybT5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIGNsYXNzPVxcXCJ7e2Nzc0NsYXNzfX0gZmxleGNvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiPlxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcInNoZWV0LWhlYWRlciBmbGV4cm93XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWRldGFpbHMgZmxleHJvd1xcXCI+XFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFybmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5Mb2Fkb3V0TmFtZSd9fVxcXCI+XFxuICAgICAgICAgICAgPC9oMT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXN1YnRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJpdGVtLXR5cGVcXFwiPnt7aXRlbVR5cGV9fTwvaDQ+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpdGVtLXN0YXR1c1xcXCI+e3tpdGVtU3RhdHVzfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgTmF2aWdhdGlvbiAtLX19XFxuICAgIDxuYXYgY2xhc3M9XFxcInNoZWV0LW5hdmlnYXRpb24gdGFic1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLlByaW1hcnlXZWFwb25cXFwifX08L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiIGRhdGEtdGFiPVxcXCJzcGVjaWFsXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuU3BlY2lhbFdlYXBvblxcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcImhlYXZ5XFxcIj57e2xvY2FsaXplIFxcXCJFT0EuSGVhdnlXZWFwb25cXFwifX08L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiIGRhdGEtdGFiPVxcXCJtZWxlZVxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLk1lbGVlQXR0YWNrXFxcIn19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwicGFzc2l2ZXNcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5QYXNzaXZlc1xcXCJ9fTwvYT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgQm9keSAtLX19XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaGVldC1ib2R5XFxcIj5cXG5cXG4gICAgICAgIHt7IS0tIFByaW1hcnkgV2VhcG9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5wcmltYXJ5X3dlYXBvbi5uYW1lXFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5wcmltYXJ5X3dlYXBvbi5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDQ1cHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJhbmdlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cXFwiZGF0YS5zeXN0ZW0ucHJpbWFyeV93ZWFwb24uZWZmZWN0aXZlX3JhbmdlXFxcIiBtdWx0aXBsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdE9wdGlvbnMgZWZmZWN0aXZlX3JhbmdlX2Nob2ljZXMgc2VsZWN0ZWQ9ZGF0YS5zeXN0ZW0ucHJpbWFyeV93ZWFwb24uZWZmZWN0aXZlX3JhbmdlIGxvY2FsaXplPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGFtYWdlIEZvcm11bGE8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnByaW1hcnlfd2VhcG9uLmRhbWFnZV9mb3JtdWxhXFxcIiB2YWx1ZT1cXFwie3twcmltYXJ5X2RhbWFnZV9mb3JtdWxhfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDQ1cHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoYXJhY3RlcmlzdGljczwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLnByaW1hcnlfd2VhcG9uLmNoYXJhY3RlcmlzdGljcyBhcyB8IGNoYXIgfH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaGFyLm5hbWVcXFwiIHZhbHVlPVxcXCJ7e2NoYXIubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2NoYXIubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXg0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaGFyLmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tjaGFyLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7Y2hhci5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIFNwZWNpYWwgV2VhcG9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJzcGVjaWFsXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNwZWNpYWxfd2VhcG9uLm5hbWVcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLnNwZWNpYWxfd2VhcG9uLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UmFuZ2U8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVxcXCJkYXRhLnN5c3RlbS5zcGVjaWFsX3dlYXBvbi5lZmZlY3RpdmVfcmFuZ2VcXFwiIG11bHRpcGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0T3B0aW9ucyBlZmZlY3RpdmVfcmFuZ2VfY2hvaWNlcyBzZWxlY3RlZD1kYXRhLnN5c3RlbS5zcGVjaWFsX3dlYXBvbi5lZmZlY3RpdmVfcmFuZ2UgbG9jYWxpemU9ZmFsc2V9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EYW1hZ2UgRm9ybXVsYTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uZGFtYWdlX2Zvcm11bGFcXFwiIHZhbHVlPVxcXCJ7e3NwZWNpYWxfZGFtYWdlX2Zvcm11bGF9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hhcmFjdGVyaXN0aWNzPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uY2hhcmFjdGVyaXN0aWNzIGFzIHwgY2hhciB8fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNoYXIubmFtZVxcXCIgdmFsdWU9XFxcInt7Y2hhci5uYW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7Y2hhci5uYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNoYXIuZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e2NoYXIuZGVzY3JpcHRpb259fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tjaGFyLmRlc2NyaXB0aW9ufX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gSGVhdnkgV2VhcG9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJoZWF2eVxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5oZWF2eV93ZWFwb24ubmFtZVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uaGVhdnlfd2VhcG9uLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UmFuZ2U8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVxcXCJkYXRhLnN5c3RlbS5oZWF2eV93ZWFwb24uZWZmZWN0aXZlX3JhbmdlXFxcIiBtdWx0aXBsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdE9wdGlvbnMgZWZmZWN0aXZlX3JhbmdlX2Nob2ljZXMgc2VsZWN0ZWQ9ZGF0YS5zeXN0ZW0uaGVhdnlfd2VhcG9uLmVmZmVjdGl2ZV9yYW5nZSBsb2NhbGl6ZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRhbWFnZSBGb3JtdWxhPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5oZWF2eV93ZWFwb24uZGFtYWdlX2Zvcm11bGFcXFwiIHZhbHVlPVxcXCJ7e2hlYXZ5X2RhbWFnZV9mb3JtdWxhfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDQ1cHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNoYXJhY3RlcmlzdGljczwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLmhlYXZ5X3dlYXBvbi5jaGFyYWN0ZXJpc3RpY3MgYXMgfCBjaGFyIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2hhci5uYW1lXFxcIiB2YWx1ZT1cXFwie3tjaGFyLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tjaGFyLm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4NFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2hhci5kZXNjcmlwdGlvblxcXCIgdmFsdWU9XFxcInt7Y2hhci5kZXNjcmlwdGlvbn19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2NoYXIuZGVzY3JpcHRpb259fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBNZWxlZSBBdHRhY2sgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcIm1lbGVlXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLm1lbGVlX2F0dGFjay5uYW1lXFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5tZWxlZV9hdHRhY2submFtZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3R5bGU9XFxcIndpZHRoOiA0NXB4O1xcXCI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5SYW5nZTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XFxcImRhdGEuc3lzdGVtLm1lbGVlX2F0dGFjay5lZmZlY3RpdmVfcmFuZ2VcXFwiIG11bHRpcGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0T3B0aW9ucyBlZmZlY3RpdmVfcmFuZ2VfY2hvaWNlcyBzZWxlY3RlZD1kYXRhLnN5c3RlbS5tZWxlZV9hdHRhY2suZWZmZWN0aXZlX3JhbmdlIGxvY2FsaXplPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGFtYWdlIEZvcm11bGE8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLm1lbGVlX2F0dGFjay5kYW1hZ2VfZm9ybXVsYVxcXCIgdmFsdWU9XFxcInt7bWVsZWVfZGFtYWdlX2Zvcm11bGF9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q2hhcmFjdGVyaXN0aWNzPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0ubWVsZWVfYXR0YWNrLmNoYXJhY3RlcmlzdGljcyBhcyB8IGNoYXIgfH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaGFyLm5hbWVcXFwiIHZhbHVlPVxcXCJ7e2NoYXIubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2NoYXIubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXg0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaGFyLmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tjaGFyLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7Y2hhci5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIFBhc3NpdmVzIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJwYXNzaXZlc1xcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5DaGFyYWN0ZXJpc3RpY3M8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5wYXNzaXZlcyBhcyB8IGNoYXIgfH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaGFyLm5hbWVcXFwiIHZhbHVlPVxcXCJ7e2NoYXIubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2NoYXIubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXg0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaGFyLmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tjaGFyLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7Y2hhci5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvZm9ybT5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIGNsYXNzPVxcXCJ7e2Nzc0NsYXNzfX0gZmxleGNvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiPlxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcInNoZWV0LWhlYWRlciBmbGV4cm93XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWRldGFpbHMgZmxleHJvd1xcXCI+XFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFybmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5PcmlnaW5OYW1lJ319XFxcIj5cXG4gICAgICAgICAgICA8L2gxPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tc3VidGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIml0ZW0tdHlwZVxcXCI+e3tpdGVtVHlwZX19PC9oND5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tc3RhdHVzXFxcIj57e2l0ZW1TdGF0dXN9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwiaWRlYWxzXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuSWRlYWxzXFxcIn19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJsaWZlcGF0aFxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkxpZmVwYXRoXFxcIn19PC9hPlxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBCb2R5IC0tfX1cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICAgICAge3shLS0gRGVzY3JpcHRpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHggIWltcG9ydGFudFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlIHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhcnRpbmcgTW9uZXk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5zdGFydGluZ19tb25leVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uc3RhcnRpbmdfbW9uZXl9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7ZGF0YS5zeXN0ZW0uc3RhcnRpbmdfbW9uZXl9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5PcmlnaW4gU2tpbGxzIChDaG9vc2UgMyk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5vcmlnaW5fc2tpbGxzXFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5vcmlnaW5fc2tpbGxzfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2RhdGEuc3lzdGVtLm9yaWdpbl9za2lsbHN9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIElkZWFscyBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3cgYWN0aXZlXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiaWRlYWxzXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SWRlYWxzOjwvc3Ryb25nPjxocj5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5pZGVhbHMgYXMgfCBza2lsbCB8fX1cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4NFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLmlkZWFscy57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIExpZmVwYXRoIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJsaWZlcGF0aFxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICZuYnNwO1xcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkxpZmVwYXRoIFRhYmxlIChSb2xsIDJkNiBvciBDaG9vc2UpOjwvc3Ryb25nPjxocj5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5saWZlX3BhdGggYXMgfCBza2lsbCB8fX1cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7c2tpbGwubG93fX0te3tza2lsbC5oaWdofX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QGluZGV4fX0uZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBza2lsbC5kZXNjcmlwdGlvbiB0YXJnZXQ9XFxcImRhdGEuc3lzdGVtLmxpZmVfcGF0aC5kZXNjcmlwdGlvblxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG48L2Zvcm0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuUmFjZU5hbWUnfX1cXFwiPlxcbiAgICAgICAgICAgIDwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zdWJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwic2lnbmF0dXJlLWFiaWxpdHlcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5TaWduYXR1cmVBYmlsaXRpZXNcXFwifX08L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcInNraWxsc1xcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLlNraWxsc1xcXCJ9fTwvYT5cXG48IS0tICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnNraWxscyBhcyB8IHNraWxsIHx9fS0tPlxcbjwhLS0gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwie3tza2lsbC5uYW1lfX1cXFwiPnt7c2tpbGwubmFtZX19PC9hPi0tPlxcbjwhLS0gICAgICAgIHt7L2VhY2h9fS0tPlxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBCb2R5IC0tfX1cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICAgICAge3shLS0gRGVzY3JpcHRpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8IS0tICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj4tLT5cXG4gICAgICAgICAgICA8IS0tICAgICAgICAmbmJzcDstLT5cXG4gICAgICAgICAgICA8IS0tICAgICAgPC9kaXY+LS0+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHggIWltcG9ydGFudFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLm92ZXJ2aWV3IHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLm92ZXJ2aWV3XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmxhc2hiYWNrIEFiaWxpdHk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZsYXNoYmFjayBUcmlnZ2VyPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GbGFzaGJhY2sgRWZmZWN0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5mbGFzaGJhY2tfYWJpbGl0eVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX2FiaWxpdHl9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7ZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX2FiaWxpdHl9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgzXFxcIj5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLmZsYXNoYmFja190cmlnZ2VyXFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5mbGFzaGJhY2tfdHJpZ2dlcn19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7ZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX3RyaWdnZXJ9fVxcXCI+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX3RyaWdnZXIgdGFyZ2V0PVxcXCJkYXRhLnN5c3RlbS5mbGFzaGJhY2tfdHJpZ2dlclxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5mbGFzaGJhY2tfZWZmZWN0XFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5mbGFzaGJhY2tfZWZmZWN0fX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tkYXRhLnN5c3RlbS5mbGFzaGJhY2tfZWZmZWN0fX1cXFwiPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmZsYXNoYmFja19lZmZlY3QgdGFyZ2V0PVxcXCJkYXRhLnN5c3RlbS5mbGFzaGJhY2tfZWZmZWN0XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TaWduYXR1cmUgUmVzb3VyY2U8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FZmZlY3Q8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uc2lnbmF0dXJlX3Jlc291cmNlfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2RhdGEuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZV9kZXNjIHRhcmdldD1cXFwiZGF0YS5zeXN0ZW0uc2lnbmF0dXJlX3Jlc291cmNlX2Rlc2NcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZV9lZmZlY3QgdGFyZ2V0PVxcXCJkYXRhLnN5c3RlbS5zaWduYXR1cmVfcmVzb3VyY2VfZWZmZWN0XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIFNpZ25hdHVyZSBBYmlsaXR5IFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvd1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcInNpZ25hdHVyZS1hYmlsaXR5XFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5TaWduYXR1cmUgVHJhaXRzPC9zdHJvbmc+PGhyPlxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLnNpZ25hdHVyZV90cmFpdHMgYXMgfCBza2lsbCB8fX1cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5zaWduYXR1cmVfdHJhaXRzLnt7QGluZGV4fX0ubmFtZVxcXCIgdmFsdWU9XFxcInt7c2tpbGwubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5uYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4NFxcXCI+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5zaWduYXR1cmVfdHJhaXRzLnt7QGluZGV4fX0uZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBza2lsbC5kZXNjcmlwdGlvbiB0YXJnZXQ9XFxcInNraWxsLmRlc2NyaXB0aW9uXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIFNraWxscyBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3dcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJza2lsbHNcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPlNraWxsIExpc3Q8L3N0cm9uZz4gKFN0YXJ0aW5nIGNoYXJhY3RlcnMgZGl2aWRlIDUgcG9pbnRzIGFyb3VuZCB0aGlzIGxpc3QuIE5vIHNraWxsIGNhbiBiZSBoaWdoZXIgdGhhbiAyIGF0IGNoYXJhY3RlciBjcmVhdGlvbik6PGhyPlxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLnNraWxsX2xpc3QgYXMgfCBza2lsbCB8fX1cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5za2lsbF9saXN0Lnt7QGluZGV4fX0ubmFtZVxcXCIgdmFsdWU9XFxcInt7c2tpbGwubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5uYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4NFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5za2lsbF9saXN0Lnt7QGluZGV4fX0uZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbjwhLS0gICAgICAgIHt7ISYjNDU7JiM0NTsgU2tpbGxzIFRhYnMgJiM0NTsmIzQ1O319LS0+XFxuPCEtLSAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5za2lsbHMgYXMgfCBza2lsbCB8fX0tLT5cXG48IS0tICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvd1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcInt7c2tpbGwubmFtZX19XFxcIj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgPGRpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIHt7aX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8YnI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tJmx0OyEmbmRhc2g7ICAgICAgICAgICAgICAgIDxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+IDxpbnB1dCBjbGFzcz1cXFwiZW9hLWluLXBsYWNlLWJveFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIiAvPiZuZGFzaDsmZ3Q7LS0+XFxuXFxuPCEtLSAgICAgICAgICAgICAgICA8YnI+PGJyPjxzdHJvbmc+TmFub3Byb2dyYW1zOjwvc3Ryb25nPjxocj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIHt7I2VhY2ggc2tpbGwucHJvZ3JhbXMgYXMgfCBwZ20gfH19LS0+XFxuXFxuPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3BnbS5uYW1lfX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twZ20ubmFtZX19XFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkc1xcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tALi4vaW5kZXh9fS5wcm9ncmFtLnt7QGluZGV4fX0ubmFtZVxcXCIgdmFsdWU9XFxcInt7cGdtLmRlc2NyaXB0aW9ufX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twZ20uZGVzY3JpcHRpb259fVxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW5vcG9pbnQgQ29zdDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19Lm5wXFxcIiB2YWx1ZT1cXFwie3twZ20ubnB9fVxcXCItLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3BnbS5ucH19XFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5DVTwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19Lm5jdVxcXCIgdmFsdWU9XFxcInt7cGdtLm5jdX19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLm5jdX19XFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVmZmVjdDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19LmVmZmVjdFxcXCIgdmFsdWU9XFxcInt7cGdtLmVmZmVjdH19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLmVmZmVjdH19XFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0mbHQ7ISZuZGFzaDsgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZW9hLWluLXBsYWNlLWJveFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20ubmFtZX19XFxcIiB2YWx1ZT1cXFwie3twZ20ubmFtZX19XFxcIiAvPiZuZGFzaDsmZ3Q7LS0+XFxuPCEtLSZsdDshJm5kYXNoOyAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJlb2EtaW4tcGxhY2UtYm94XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ7e3BnbS5kZXNjcmlwdGlvbn19XFxcIiB2YWx1ZT1cXFwie3twZ20uZGVzY3JpcHRpb259fVxcXCIgcGxhY2Vob2xkZXI9XFxcIkRlc2NyaXB0aW9uXFxcIiAvPiZuZGFzaDsmZ3Q7LS0+XFxuPCEtLSZsdDshJm5kYXNoOyAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJlb2EtaW5saW5lLWxhYmVsXFxcIj5OYW5vcG9pbnQgQ29zdDogPC9sYWJlbD48aW5wdXQgY2xhc3M9XFxcImVvYS1pbmxpbmUtYm94IGVvYS13aWR0aC0zMFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20ubnB9fVxcXCIgdmFsdWU9XFxcInt7cGdtLm5wfX1cXFwiIC8+Jm5kYXNoOyZndDstLT5cXG48IS0tJmx0OyEmbmRhc2g7ICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImVvYS1pbmxpbmUtbGFiZWxcXFwiPk5DVTogPC9sYWJlbD48aW5wdXQgY2xhc3M9XFxcImVvYS1pbmxpbmUtYm94IGVvYS13aWR0aC0zMFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20ubmN1fX1cXFwiIHZhbHVlPVxcXCJ7e3BnbS5uY3V9fVxcXCIgLz4mbmRhc2g7Jmd0Oy0tPlxcbjwhLS0mbHQ7ISZuZGFzaDsgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZW9hLWlubGluZS1sYWJlbFxcXCI+RWZmZWN0OiA8L2xhYmVsPjxpbnB1dCBjbGFzcz1cXFwiZW9hLWlubGluZS1ib3ggZW9hLXdpZHRoLTQ4MFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20uZWZmZWN0fX1cXFwiIHZhbHVlPVxcXCJ7e3BnbS5lZmZlY3R9fVxcXCIgLz4mbmRhc2g7Jmd0Oy0tPlxcbjwhLS0gICAgICAgICAgICAgICAgPGhyPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAge3svZWFjaH19LS0+XFxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbjwhLS0gICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgIHt7L2VhY2h9fS0tPlxcbiAgICA8L3NlY3Rpb24+XFxuXFxuPCEtLSAgICA8Zm9vdGVyIGNsYXNzPVxcXCJzaGVldC1mb290ZXJcXFwiPi0tPlxcbjwhLS0gICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLXNhdmVcXFwiPjwvaT4ge3tsb2NhbGl6ZSBzdWJtaXRUZXh0fX08L2J1dHRvbj4tLT5cXG48IS0tICAgIDwvZm9vdGVyPi0tPlxcbjwvZm9ybT5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIGNsYXNzPVxcXCJ7e2Nzc0NsYXNzfX0gZmxleGNvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiPlxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcInNoZWV0LWhlYWRlciBmbGV4cm93XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWRldGFpbHMgZmxleHJvd1xcXCI+XFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFybmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5Ta2lsbE5hbWUnfX1cXFwiPlxcbiAgICAgICAgICAgIDwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zdWJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgQm9keSAtLX19XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaGVldC1ib2R5XFxcIj5cXG5cXG4gICAgICAgIHt7IS0tIERlc2NyaXB0aW9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlIHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9zZWN0aW9uPlxcbjwvZm9ybT5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIGNsYXNzPVxcXCJ7e2Nzc0NsYXNzfX0gZmxleGNvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiPlxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcInNoZWV0LWhlYWRlciBmbGV4cm93XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWRldGFpbHMgZmxleHJvd1xcXCI+XFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFybmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5TdXBwbHlOYW1lJ319XFxcIj5cXG4gICAgICAgICAgICA8L2gxPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tc3VidGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIml0ZW0tdHlwZVxcXCI+e3tpdGVtVHlwZX19PC9oND5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tc3RhdHVzXFxcIj57e2l0ZW1TdGF0dXN9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBOYXZpZ2F0aW9uIC0tfX1cXG4gICAgPG5hdiBjbGFzcz1cXFwic2hlZXQtbmF2aWdhdGlvbiB0YWJzXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuRGVzY3JpcHRpb25cXFwifX08L2E+XFxuICAgIDwvbmF2PlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEJvZHkgLS19fVxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2hlZXQtYm9keVxcXCI+XFxuXFxuICAgICAgICB7eyEtLSBEZXNjcmlwdGlvbiBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3cgYWN0aXZlXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tcHJvcGVydGllc1xcXCI+XFxuICAgICAgICAgICAgICAgICZuYnNwO1xcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5kZXNjcmlwdGlvbiB0YXJnZXQ9XFxcInN5c3RlbS5kZXNjcmlwdGlvblxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvc2VjdGlvbj5cXG48L2Zvcm0+XFxuXCI7IiwiaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy9hY3Rvci9hY3Rvci1oZXJvLXNoZWV0Lmh0bWxcIjsgaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9icmVlZC1zaGVldC5odG1sXCI7IGltcG9ydCBcIi4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvZmFjdGlvbi1zaGVldC5odG1sXCI7IGltcG9ydCBcIi4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvbG9hZG91dC1zaGVldC5odG1sXCI7IGltcG9ydCBcIi4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvb3JpZ2luLXNoZWV0Lmh0bWxcIjsgaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9wcm9mZXNzaW9uLXNoZWV0Lmh0bWxcIjsgaW1wb3J0IFwiLi4vLi4vLi4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9za2lsbC1zaGVldC5odG1sXCI7IGltcG9ydCBcIi4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvc3VwcGx5LXNoZWV0Lmh0bWxcIjtcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUHJlbG9hZGVyIHtcbiAgICAvKipcbiAgICAgKiBQcmVsb2FkIGEgc2V0IG9mIHRlbXBsYXRlcyB0byBjb21waWxlIGFuZCBjYWNoZSB0aGVtIGZvciBmYXN0IGFjY2VzcyBkdXJpbmcgcmVuZGVyaW5nXG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIHByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZVBhdGhzID0gW1wibW9kdWxlcy90ZW1wbGF0ZS90ZW1wbGF0ZXMvaXRlbXMvc3VwcGx5LXNoZWV0Lmh0bWxcIiwgXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9pdGVtcy9za2lsbC1zaGVldC5odG1sXCIsIFwibW9kdWxlcy90ZW1wbGF0ZS90ZW1wbGF0ZXMvaXRlbXMvcHJvZmVzc2lvbi1zaGVldC5odG1sXCIsIFwibW9kdWxlcy90ZW1wbGF0ZS90ZW1wbGF0ZXMvaXRlbXMvb3JpZ2luLXNoZWV0Lmh0bWxcIiwgXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9pdGVtcy9sb2Fkb3V0LXNoZWV0Lmh0bWxcIiwgXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9pdGVtcy9mYWN0aW9uLXNoZWV0Lmh0bWxcIiwgXCJtb2R1bGVzL3RlbXBsYXRlL3RlbXBsYXRlcy9pdGVtcy9icmVlZC1zaGVldC5odG1sXCIsIFwibW9kdWxlcy90ZW1wbGF0ZS90ZW1wbGF0ZXMvYWN0b3IvYWN0b3ItaGVyby1zaGVldC5odG1sXCJdO1xuICAgICAgICByZXR1cm4gbG9hZFRlbXBsYXRlcyh0ZW1wbGF0ZVBhdGhzKTtcbiAgICB9XG59XG4iLCJcbi8qKlxuICogQGV4dGVuZHMge0l0ZW1TaGVldH1cbiAqL1xuZXhwb3J0IGNsYXNzIEVvQUJyZWVkU2hlZXQgZXh0ZW5kcyBJdGVtU2hlZXQge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gZm91bmRyeS51dGlscy5tZXJnZU9iamVjdChzdXBlci5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgY2xhc3NlczogW1wiZW9hXCIsIFwic2hlZXRcIiwgXCJpdGVtXCJdLFxuICAgICAgdGVtcGxhdGU6IFwic3lzdGVtcy9lb2EvdGVtcGxhdGVzL2l0ZW1zL2JyZWVkLXNoZWV0Lmh0bWxcIixcbiAgICAgIHdpZHRoOiA4NTAsXG4gICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgIHRhYnM6IFt7bmF2U2VsZWN0b3I6IFwiLnNoZWV0LW5hdmlnYXRpb25cIiwgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIn1dLFxuICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5kcmFnZ2FibGVcIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3VwZXIuZ2V0RGF0YSgpO1xuXG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgLy8gY29udGV4dC5zeXN0ZW1EYXRhID0gY29udGV4dC5kYXRhLnN5c3RlbTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcbiAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcblxuICAgIC8vIGFjY2Vzc2liaWxpdHkodGhpcy5pdGVtLCBodG1sKTtcblxuICAgIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgaGVyZSBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgc2hlZXQgaXMgZWRpdGFibGVcbiAgICBpZiAoICF0aGlzLmlzRWRpdGFibGUgKSByZXR1cm47XG4gIH1cbn1cbiIsIlxuLyoqXG4gKiBAZXh0ZW5kcyB7SXRlbVNoZWV0fVxuICovXG5leHBvcnQgY2xhc3MgRW9BRmFjdGlvblNoZWV0IGV4dGVuZHMgSXRlbVNoZWV0IHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIGZvdW5kcnkudXRpbHMubWVyZ2VPYmplY3Qoc3VwZXIuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgIGNsYXNzZXM6IFtcImVvYVwiLCBcInNoZWV0XCIsIFwiaXRlbVwiXSxcbiAgICAgIHRlbXBsYXRlOiBcInN5c3RlbXMvZW9hL3RlbXBsYXRlcy9pdGVtcy9mYWN0aW9uLXNoZWV0Lmh0bWxcIixcbiAgICAgIHdpZHRoOiA4NTAsXG4gICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgIHRhYnM6IFt7bmF2U2VsZWN0b3I6IFwiLnNoZWV0LW5hdmlnYXRpb25cIiwgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIn1dLFxuICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5kcmFnZ2FibGVcIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3VwZXIuZ2V0RGF0YSgpO1xuXG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgLy8gY29udGV4dC5zeXN0ZW1EYXRhID0gY29udGV4dC5kYXRhLnN5c3RlbTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcbiAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcblxuICAgIC8vIGFjY2Vzc2liaWxpdHkodGhpcy5pdGVtLCBodG1sKTtcblxuICAgIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgaGVyZSBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgc2hlZXQgaXMgZWRpdGFibGVcbiAgICBpZiAoICF0aGlzLmlzRWRpdGFibGUgKSByZXR1cm47XG4gIH1cbn1cbiIsIlxuLyoqXG4gKiBAZXh0ZW5kcyB7SXRlbVNoZWV0fVxuICovXG5leHBvcnQgY2xhc3MgRW9BT3JpZ2luU2hlZXQgZXh0ZW5kcyBJdGVtU2hlZXQge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gZm91bmRyeS51dGlscy5tZXJnZU9iamVjdChzdXBlci5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgY2xhc3NlczogW1wiZW9hXCIsIFwic2hlZXRcIiwgXCJpdGVtXCJdLFxuICAgICAgdGVtcGxhdGU6IFwic3lzdGVtcy9lb2EvdGVtcGxhdGVzL2l0ZW1zL29yaWdpbi1zaGVldC5odG1sXCIsXG4gICAgICB3aWR0aDogODUwLFxuICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICB0YWJzOiBbe25hdlNlbGVjdG9yOiBcIi5zaGVldC1uYXZpZ2F0aW9uXCIsIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLCBpbml0aWFsOiBcImRlc2NyaXB0aW9uXCJ9XSxcbiAgICAgIGRyYWdEcm9wOiBbe2RyYWdTZWxlY3RvcjogXCIuZHJhZ2dhYmxlXCIsIGRyb3BTZWxlY3RvcjogbnVsbH1dLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHN1cGVyLmdldERhdGEoKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICAgIC8vIGNvbnRleHQuc3lzdGVtRGF0YSA9IGNvbnRleHQuZGF0YS5zeXN0ZW07XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sKSB7XG4gICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG5cbiAgICAvLyBhY2Nlc3NpYmlsaXR5KHRoaXMuaXRlbSwgaHRtbCk7XG5cbiAgICAvLyBFdmVyeXRoaW5nIGJlbG93IGhlcmUgaXMgb25seSBuZWVkZWQgaWYgdGhlIHNoZWV0IGlzIGVkaXRhYmxlXG4gICAgaWYgKCAhdGhpcy5pc0VkaXRhYmxlICkgcmV0dXJuO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRW9BUHJvZmVzc2lvblNoZWV0IGV4dGVuZHMgSXRlbVNoZWV0IHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIGZvdW5kcnkudXRpbHMubWVyZ2VPYmplY3Qoc3VwZXIuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgIGNsYXNzZXM6IFtcImVvYVwiLCBcInNoZWV0XCIsIFwiaXRlbVwiXSxcbiAgICAgIHRlbXBsYXRlOiBcInN5c3RlbXMvZW9hL3RlbXBsYXRlcy9pdGVtcy9wcm9mZXNzaW9uLXNoZWV0Lmh0bWxcIixcbiAgICAgIHdpZHRoOiA4NTAsXG4gICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgIHRhYnM6IFt7bmF2U2VsZWN0b3I6IFwiLnNoZWV0LW5hdmlnYXRpb25cIiwgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIn1dLFxuICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5kcmFnZ2FibGVcIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3VwZXIuZ2V0RGF0YSgpO1xuXG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgLy8gY29udGV4dC5zeXN0ZW1EYXRhID0gY29udGV4dC5kYXRhLnN5c3RlbTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcbiAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcblxuICAgIC8vIGFjY2Vzc2liaWxpdHkodGhpcy5pdGVtLCBodG1sKTtcblxuICAgIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgaGVyZSBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgc2hlZXQgaXMgZWRpdGFibGVcbiAgICBpZiAoICF0aGlzLmlzRWRpdGFibGUgKSByZXR1cm47XG4gIH1cbn1cbiIsIlxuLyoqXG4gKiBAZXh0ZW5kcyB7SXRlbVNoZWV0fVxuICovXG5leHBvcnQgY2xhc3MgRW9BU2tpbGxTaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvc2tpbGwtc2hlZXQuaHRtbFwiLFxuICAgICAgd2lkdGg6IDg1MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtbmF2aWdhdGlvblwiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwifV0sXG4gICAgICBkcmFnRHJvcDogW3tkcmFnU2VsZWN0b3I6IFwiLmRyYWdnYWJsZVwiLCBkcm9wU2VsZWN0b3I6IG51bGx9XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICAvLyBjb250ZXh0LnN5c3RlbURhdGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xuICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuXG4gICAgLy8gYWNjZXNzaWJpbGl0eSh0aGlzLml0ZW0sIGh0bWwpO1xuXG4gICAgLy8gRXZlcnl0aGluZyBiZWxvdyBoZXJlIGlzIG9ubHkgbmVlZGVkIGlmIHRoZSBzaGVldCBpcyBlZGl0YWJsZVxuICAgIGlmICggIXRoaXMuaXNFZGl0YWJsZSApIHJldHVybjtcbiAgfVxufVxuIiwiXG4vKipcbiAqIEBleHRlbmRzIHtJdGVtU2hlZXR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFb0FTdXBwbHlTaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvc3VwcGx5LXNoZWV0Lmh0bWxcIixcbiAgICAgIHdpZHRoOiA4NTAsXG4gICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgIHRhYnM6IFt7bmF2U2VsZWN0b3I6IFwiLnNoZWV0LW5hdmlnYXRpb25cIiwgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIn1dLFxuICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5kcmFnZ2FibGVcIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3VwZXIuZ2V0RGF0YSgpO1xuXG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgLy8gY29udGV4dC5zeXN0ZW1EYXRhID0gY29udGV4dC5kYXRhLnN5c3RlbTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcbiAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcblxuICAgIC8vIGFjY2Vzc2liaWxpdHkodGhpcy5pdGVtLCBodG1sKTtcblxuICAgIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgaGVyZSBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgc2hlZXQgaXMgZWRpdGFibGVcbiAgICBpZiAoICF0aGlzLmlzRWRpdGFibGUgKSByZXR1cm47XG4gIH1cbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBSb2xsVGVzdCh7XG4gICAgbnVtYmVyT2ZEaWNlID0gMixcbiAgICBudW1iZXJPZlNpZGVzID0gNixcbiAgICBkZWZhdWx0VGhyZXNob2xkID0gNSxcbiAgICBmb2N1c0FjdGlvbiA9IGZhbHNlLFxuICAgIG1hcmtzbWFuVHJhaXQgPSBmYWxzZSB9ID0ge30pIHtcblxuICAgIGxldCB0aHJlc2hvbGQgPSBkZWZhdWx0VGhyZXNob2xkO1xuICAgIGlmIChmb2N1c0FjdGlvbiAmJiAoZm9jdXNBY3Rpb24gPT09ICd0cnVlJykpXG4gICAge1xuICAgICAgICB0aHJlc2hvbGQgPSB0aHJlc2hvbGQgLSAxO1xuICAgIH1cblxuICAgIGlmIChtYXJrc21hblRyYWl0ICYmIChtYXJrc21hblRyYWl0ID09PSAndHJ1ZScpKVxuICAgIHtcbiAgICAgICAgdGhyZXNob2xkID0gdGhyZXNob2xkIC0gMTtcbiAgICB9XG4gICAgXG4gICAgY29uc3Qgcm9sbEZvcnVtbGEgPSBgJHtudW1iZXJPZkRpY2V9ZCR7bnVtYmVyT2ZTaWRlc31jcz49JHt0aHJlc2hvbGR9YDtcblxuICAgIC8vIEV4ZWN1dGUgdGhlIHJvbGxcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgbmV3IFJvbGwocm9sbEZvcnVtbGEsIHt9KS5ldmFsdWF0ZSh7J2FzeW5jJzogdHJ1ZX0pXG4gICAgbGV0IHJlbmRlcmVkUm9sbCA9IGF3YWl0IHJlbmRlclRlbXBsYXRlKFwic3lzdGVtcy90aW55ZDYvdGVtcGxhdGVzL3BhcnRpYWxzL3Rlc3QtcmVzdWx0Lmhic1wiLCB7IHJvbGxSZXN1bHQ6IHJlc3VsdCB9KTtcbiAgICAvLyBsZXQgcmVuZGVyZWRSb2xsID0gYXdhaXQgcmVzdWx0LnJlbmRlcih7IHJlc3VsdDogcmVzdWx0LCB0ZW1wbGF0ZTogXCJzeXN0ZW1zL3RpbnlkNi90ZW1wbGF0ZXMvcGFydGlhbHMvdGVzdC1yZXN1bHQuaGJzXCIgfSk7XG5cbiAgICBjb25zdCBjaGF0RGF0YSA9IHtcbiAgICAgICAgc3BlYWtlcjogQ2hhdE1lc3NhZ2UuZ2V0U3BlYWtlcigpLFxuICAgICAgICBjb250ZW50OiByZW5kZXJlZFJvbGxcbiAgICB9O1xuXG4gICAgcmVzdWx0LnRvTWVzc2FnZShjaGF0RGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb2N1c09wdGlvbihmb3JtLCBlbGVtZW50KSB7XG4gICAgZm9ybS5maW5kKFwiLmRpZS1yb2xsZXIgPiAucm9sbC1kaWNlXCIpLmVhY2goKG4sIHRhZykgPT4ge1xuICAgICAgICB0YWcuZGF0YXNldC5lbmFibGVGb2N1cyA9IGVsZW1lbnQuY2hlY2tlZFxuICAgIH0pO1xuXG4gICAgaWYgKGVsZW1lbnQuY2hlY2tlZClcbiAgICB7XG4gICAgICAgIGZvcm0uZmluZChcIi5hY3Rpb24tbW9kaWZpZXJzIC50b2dnbGUtbWFya3NtYW5cIikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgY29uc3QgbWFya3NtYW5FbGVtZW50ID0gZm9ybS5maW5kKFwiLmFjdGlvbi1tb2RpZmllcnMgLnRvZ2dsZS1tYXJrc21hblwiKTtcbiAgICAgICAgbWFya3NtYW5FbGVtZW50LnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcbiAgICAgICAgbWFya3NtYW5FbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRNYXJrc21hbk9wdGlvbihmb3JtLCBlbGVtZW50KVxue1xuICAgIGZvcm0uZmluZChcIi5kaWUtcm9sbGVyID4gLnJvbGwtZGljZVwiKS5lYWNoKChuLCB0YWcpID0+IHtcbiAgICAgICAgdGFnLmRhdGFzZXQuZW5hYmxlTWFya3NtYW4gPSBlbGVtZW50LmNoZWNrZWQ7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWNlVG9GYWNlcyh2YWx1ZSwgY29udGVudClcbntcbiAgICBzd2l0Y2ggKHZhbHVlKVxuICAgIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtZGljZS1vbmVcIjtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtZGljZS10d29cIjtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtZGljZS10aHJlZVwiO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1kaWNlLWZvdXJcIjtcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtZGljZS1maXZlXCI7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWRpY2Utc2l4XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiZmEtZGljZS1kNlwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGljZVRvRmFjZXNBbHQodmFsdWUsIGNvbnRlbnQpXG57XG4gICAgc3dpdGNoICh2YWx1ZSlcbiAgICB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBcImVvYS1kaWNlLW9uZVwiO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gXCJlb2EtZGljZS10d29cIjtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIFwiZW9hLWRpY2UtdGhyZWVcIjtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIFwiZW9hLWRpY2UtZm91clwiO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICByZXR1cm4gXCJlb2EtZGljZS1maXZlXCI7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIHJldHVybiBcImVvYS1kaWNlLXNpeFwiO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICByZXR1cm4gXCJlb2EtZGljZS1zZXZlblwiO1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICByZXR1cm4gXCJlb2EtZGljZS1laWdodFwiO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICByZXR1cm4gXCJlb2EtZGljZS1uaW5lXCI7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICByZXR1cm4gXCJlb2EtZGljZS10ZW5cIjtcbiAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgIHJldHVybiBcImVvYS1kaWNlLWVsZXZlblwiO1xuICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgcmV0dXJuIFwiZW9hLWRpY2UtdHdlbHZlXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiZmEtZGljZS1kNlwiO1xufSIsImltcG9ydCB7IFJvbGxGdXhEaWNlIH0gZnJvbSAgICcvc3RhdGljL3NjcmlwdHMvZnV4LWRpY2Utcm9sbGVyLXJvbGwuanMnO1xuXG4vLyBzbGVlcCB0aW1lIGV4cGVjdHMgbWlsbGlzZWNvbmRzXG5mdW5jdGlvbiBzbGVlcCAodGltZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xufVxuXG4vKipcbiAqIEV4dGVuZCB0aGUgYmFzaWMgQWN0b3JTaGVldCB3aXRoIHNvbWUgdmVyeSBzaW1wbGUgbW9kaWZpY2F0aW9uc1xuICogQGV4dGVuZHMge0FjdG9yU2hlZXR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFb0FBY3RvclNoZWV0IGV4dGVuZHMgQWN0b3JTaGVldCB7XG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJib2lsZXJwbGF0ZVwiLCBcInNoZWV0XCIsIFwiYWN0b3JcIl0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvYWN0b3IvYWN0b3Itc2hlZXQuaHRtbFwiLFxuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIGhlaWdodDogODAwLFxuICAgICAgICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5pdGVtLWxpc3QgLml0ZW1cIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgICAgICAgICB0YWJzOiBbe25hdlNlbGVjdG9yOiBcIi5zaGVldC1uYXZpZ2F0aW9uXCIsIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLCBpbml0aWFsOiBcImZlYXR1cmVzXCJ9XVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gYHN5c3RlbXMvZW9hL3RlbXBsYXRlcy9hY3Rvci9hY3Rvci0ke3RoaXMuYWN0b3IudHlwZX0tc2hlZXQuaHRtbGA7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBnZXREYXRhKCkge1xuICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgZGF0YSBzdHJ1Y3R1cmUgZnJvbSB0aGUgYmFzZSBzaGVldC4gWW91IGNhbiBpbnNwZWN0IG9yIGxvZ1xuICAgICAgICAvLyB0aGUgY29udGV4dCB2YXJpYWJsZSB0byBzZWUgdGhlIHN0cnVjdHVyZSwgYnV0IHNvbWUga2V5IHByb3BlcnRpZXMgZm9yXG4gICAgICAgIC8vIHNoZWV0cyBhcmUgdGhlIGFjdG9yIG9iamVjdCwgdGhlIGRhdGEgb2JqZWN0LCB3aGV0aGVyIG9yIG5vdCBpdCdzXG4gICAgICAgIC8vIGVkaXRhYmxlLCB0aGUgaXRlbXMgYXJyYXksIGFuZCB0aGUgZWZmZWN0cyBhcnJheS5cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHN1cGVyLmdldERhdGEoKTtcblxuICAgICAgICAvLyBVc2UgYSBzYWZlIGNsb25lIG9mIHRoZSBhY3RvciBkYXRhIGZvciBmdXJ0aGVyIG9wZXJhdGlvbnMuXG4gICAgICAgIGNvbnN0IGFjdG9yRGF0YSA9IHRoaXMuYWN0b3IudG9PYmplY3QoZmFsc2UpO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgYWN0b3IncyBkYXRhIHRvIGNvbnRleHQuZGF0YSBmb3IgZWFzaWVyIGFjY2VzcywgYXMgd2VsbCBhcyBmbGFncy5cbiAgICAgICAgLy8gY29udGV4dC5kYXRhID0gYWN0b3JEYXRhLnN5c3RlbTtcbiAgICAgICAgLy8gY29udGV4dC5mbGFncyA9IGFjdG9yRGF0YS5mbGFncztcbiAgICAgICAgY29udGV4dC5jb25maWcgPSBDT05GSUcuZW9hO1xuICAgICAgICBjb250ZXh0Lm1heF9ocCA9IDA7XG4gICAgICAgIGNvbnRleHQubWF4X25wID0gMDtcbiAgICAgICAgY29udGV4dC5pbml0ID0gMDtcbiAgICAgICAgY29udGV4dC5icmVlZCA9IGNvbnRleHQuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlID09PSBcImJyZWVkXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5icmVlZF9kaWN0ID0ge307XG4gICAgICAgIGNvbnRleHQuYnJlZWRfbGlmZXBhdGggPSBjb250ZXh0LmRhdGEuc3lzdGVtLmJyZWVkX2xpZmVwYXRoO1xuICAgICAgICBpZiAoY29udGV4dC5icmVlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5icmVlZF9saWZlcGF0aCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRleHQuYnJlZWRfbGlmZXBhdGgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRleHQuYnJlZWRbMF0uc3lzdGVtLnNraWxscyk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHJfdmFscyA9IGNvbnRleHQuYnJlZWRbMF0uc3lzdGVtLnNraWxscy5maWx0ZXIoZSA9PiBlW1wibmFtZVwiXSA9PT0gY29udGV4dC5icmVlZF9saWZlcGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJfdmFscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dHJfdmFsc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubWF4X2hwID0gKHBhcnNlSW50KGF0dHJfdmFsc1swXS5zdHIpICsgcGFyc2VJbnQoYXR0cl92YWxzWzBdLnN0YSkpICogMTA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubWF4X25wID0gKHBhcnNlSW50KGF0dHJfdmFsc1swXS5pbnQpICsgcGFyc2VJbnQoYXR0cl92YWxzWzBdLnBzeSkpICogMTA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaW5pdCA9IChwYXJzZUludChhdHRyX3ZhbHNbMF0uc2VuKSArIHBhcnNlSW50KGF0dHJfdmFsc1swXS5hZ2kpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGV4dC5tYXhfc3AgPSA2O1xuICAgICAgICAgICAgICAgIGNvbnRleHQubWF4X25jdSA9IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5icmVlZFswXS5zeXN0ZW0uc2tpbGxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5icmVlZF9kaWN0W2VsLm5hbWVdID0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcIj4ke2VsLmxvd30tJHtlbC5oaWdofTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkcyBmbGV4MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFwiPiR7ZWwubmFtZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRzIGZsZXg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcIj4ke2VsLmRlc2NyaXB0aW9ufTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRzIGZsZXg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcIj48c3Ryb25nPkF0dHJpYnV0ZXM6PC9zdHJvbmc+IFN0ciAke2VsLnN0cn0sIFN0YSAke2VsLnN0YX0sIEFnaSAke2VsLmFnaX0sIEludCAke2VsLmludH0sIFNlbiAke2VsLnNlbn0sIFBzeSAke2VsLnBzeX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmF0dHJzID0ge307XG4gICAgICAgIGlmICgoY29udGV4dC5icmVlZC5sZW5ndGggPiAwKSAmJiAoY29udGV4dC5icmVlZF9saWZlcGF0aCAhPT0gXCJcIikpIHtcbiAgICAgICAgICAgIGNvbnRleHQuaGFzX3N0YXRzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRleHQuYnJlZWRbMF0uc3lzdGVtLnNraWxscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbC5uYW1lID09PSBjb250ZXh0LmJyZWVkX2xpZmVwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuYXR0cnMgPSB7XCJzdHJcIjogZWwuc3RyLCBcInN0YVwiOiBlbC5zdGEsIFwiYWdpXCI6IGVsLmFnaSwgXCJpbnRcIjogZWwuaW50LCBcInNlblwiOiBlbC5zZW4sIFwicHN5XCI6IGVsLnBzeX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0Lmhhc19zdGF0cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQub3JpZ2luID0gY29udGV4dC5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgPT09IFwib3JpZ2luXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5vcmlnaW5fZGljdCA9IHt9O1xuICAgICAgICBpZiAoY29udGV4dC5vcmlnaW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGV4dC5vcmlnaW5bMF0uc3lzdGVtLmxpZmVfcGF0aC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRleHQub3JpZ2luX2RpY3RbZWwubmFtZV0gPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwid2lkdGg6IDEwMCU7IGZsZXg6IG5vbmUgIWltcG9ydGFudDsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50XCI+JHtlbC5sb3d9LSR7ZWwuaGlnaH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZHMgZmxleDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZmxleDogbm9uZSAhaW1wb3J0YW50OyB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnRcIj4ke2VsLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRzIGZsZXg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwid2lkdGg6IDEwMCU7IGZsZXg6IG5vbmUgIWltcG9ydGFudDsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50XCI+JHtlbC5kZXNjcmlwdGlvbn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0Lm9yaWdpbl9saWZlcGF0aCA9IGNvbnRleHQuZGF0YS5zeXN0ZW0ub3JpZ2luX2xpZmVwYXRoO1xuICAgICAgICBjb250ZXh0LnByb2Zlc3Npb24gPSBjb250ZXh0Lml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZSA9PT0gXCJwcm9mZXNzaW9uXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5za2lsbCA9IGNvbnRleHQuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlID09PSBcInNraWxsXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5mYWN0aW9uID0gY29udGV4dC5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgPT09IFwiZmFjdGlvblwiXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnRleHQuZmFjdGlvbl9kaWN0ID0ge307XG4gICAgICAgIGlmIChjb250ZXh0LmZhY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGV4dC5mYWN0aW9uWzBdLnN5c3RlbS5saWZlX3BhdGguZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmZhY3Rpb25fZGljdFtlbC5uYW1lXSA9IGBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZmxleDogbm9uZSAhaW1wb3J0YW50OyB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnRcIj4ke2VsLmxvd30tJHtlbC5oaWdofTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkcyBmbGV4MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFwiPiR7ZWwubmFtZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZHMgZmxleDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZmxleDogbm9uZSAhaW1wb3J0YW50OyB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnRcIj4ke2VsLmRlc2NyaXB0aW9ufTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbCA9IFwiXCI7XG4gICAgICAgIGNvbnRleHQuY29uc3VtZWRfbmN1ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBucF9rIGluIGNvbnRleHQuZGF0YS5zeXN0ZW0ubmFub3Byb2dyYW0pIHtcbiAgICAgICAgICAgIGVsID0gY29udGV4dC5kYXRhLnN5c3RlbS5uYW5vcHJvZ3JhbVtucF9rXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWwgPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRleHQucHJvZmVzc2lvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnByb2Zlc3Npb25bMF0uc3lzdGVtLm5hbm9fc2tpbGxfbGlzdC5mb3JFYWNoKChuc2wpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuc2wubmFub3Byb2dyYW1zLmZvckVhY2goKG5wKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChucF9rID09PSBucC5faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuY29uc3VtZWRfbmN1ICs9IG5wLm5jdTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0LmZhY3Rpb25fbGlmZXBhdGggPSBjb250ZXh0LmRhdGEuc3lzdGVtLmZhY3Rpb25fbGlmZXBhdGg7XG4gICAgICAgIC8vIGNvbnRleHQuaXRlbXMgPSBjb250ZXh0Lml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7IHJldHVybiBbXCJicmVlZFwiLCBcIm9yaWdpblwiLCBcInByb2Zlc3Npb25cIiwgXCJmYWN0aW9uXCJdLmluY2x1ZGVzKGl0ZW0pIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RGF0YVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coY29udGV4dCk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBjaGFyYWN0ZXIgZGF0YSBhbmQgaXRlbXMuXG4gICAgICAgIGlmIChhY3RvckRhdGEudHlwZSA9PT0gJ2hlcm8nKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmVwYXJlSXRlbXMoY29udGV4dCk7XG4gICAgICAgICAgICAvLyB0aGlzLl9wcmVwYXJlQ2hhcmFjdGVyRGF0YShjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZXBhcmUgTlBDIGRhdGEgYW5kIGl0ZW1zLlxuICAgICAgICBpZiAoYWN0b3JEYXRhLnR5cGUgPT09ICducGMnKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmVwYXJlSXRlbXMoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgcm9sbCBkYXRhIGZvciBUaW55TUNFIGVkaXRvcnMuXG4gICAgICAgIC8vIGNvbnRleHQucm9sbERhdGEgPSBjb250ZXh0LmFjdG9yLmdldFJvbGxEYXRhKCk7XG5cbiAgICAgICAgLy8gUHJlcGFyZSBhY3RpdmUgZWZmZWN0c1xuICAgICAgICAvLyBjb250ZXh0LmVmZmVjdHMgPSBwcmVwYXJlQWN0aXZlRWZmZWN0Q2F0ZWdvcmllcyh0aGlzLmFjdG9yLmVmZmVjdHMpO1xuXG4gICAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9yZ2FuaXplIGFuZCBjbGFzc2lmeSBJdGVtcyBmb3IgQ2hhcmFjdGVyIHNoZWV0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBhY3RvckRhdGEgVGhlIGFjdG9yIHRvIHByZXBhcmUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgX3ByZXBhcmVJdGVtcyhjb250ZXh0KSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgY29udGFpbmVycy5cbiAgICAgICAgY29uc3QgZ2VhciA9IFtdO1xuICAgICAgICBjb25zdCBmZWF0dXJlcyA9IFtdO1xuICAgICAgICBjb25zdCBzcGVsbHMgPSB7XG4gICAgICAgICAgICAwOiBbXSxcbiAgICAgICAgICAgIDE6IFtdLFxuICAgICAgICAgICAgMjogW10sXG4gICAgICAgICAgICAzOiBbXSxcbiAgICAgICAgICAgIDQ6IFtdLFxuICAgICAgICAgICAgNTogW10sXG4gICAgICAgICAgICA2OiBbXSxcbiAgICAgICAgICAgIDc6IFtdLFxuICAgICAgICAgICAgODogW10sXG4gICAgICAgICAgICA5OiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBpdGVtcywgYWxsb2NhdGluZyB0byBjb250YWluZXJzXG4gICAgICAgIC8vIGZvciAobGV0IGkgb2YgY29udGV4dC5pdGVtcykge1xuICAgICAgICAvLyAgICAgaS5pbWcgPSBpLmltZyB8fCBERUZBVUxUX1RPS0VOO1xuICAgICAgICAvLyAgICAgLy8gQXBwZW5kIHRvIGdlYXIuXG4gICAgICAgIC8vICAgICBpZiAoaS50eXBlID09PSAnaXRlbScpIHtcbiAgICAgICAgLy8gICAgICAgICBnZWFyLnB1c2goaSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICAvLyBBcHBlbmQgdG8gZmVhdHVyZXMuXG4gICAgICAgIC8vICAgICBlbHNlIGlmIChpLnR5cGUgPT09ICdmZWF0dXJlJykge1xuICAgICAgICAvLyAgICAgICAgIGZlYXR1cmVzLnB1c2goaSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICAvLyBBcHBlbmQgdG8gc3BlbGxzLlxuICAgICAgICAvLyAgICAgZWxzZSBpZiAoaS50eXBlID09PSAnc3BlbGwnKSB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGkuc3lzdGVtLnNwZWxsTGV2ZWwgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNwZWxsc1tpLnN5c3RlbS5zcGVsbExldmVsXS5wdXNoKGkpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIEFzc2lnbiBhbmQgcmV0dXJuXG4gICAgICAgIGNvbnRleHQuZ2VhciA9IGdlYXI7XG4gICAgICAgIGNvbnRleHQuZmVhdHVyZXMgPSBmZWF0dXJlcztcbiAgICAgICAgY29udGV4dC5zcGVsbHMgPSBzcGVsbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3JnYW5pemUgYW5kIGNsYXNzaWZ5IEl0ZW1zIGZvciBDaGFyYWN0ZXIgc2hlZXRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFjdG9yRGF0YSBUaGUgYWN0b3IgdG8gcHJlcGFyZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBfcHJlcGFyZUNoYXJhY3RlckRhdGEoY29udGV4dCkge1xuICAgICAgICAvLyBIYW5kbGUgYWJpbGl0eSBzY29yZXMuXG4gICAgICAgIC8vIGZvciAobGV0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhjb250ZXh0LnN5c3RlbS5hYmlsaXRpZXMpKSB7XG4gICAgICAgIC8vICAgICB2LmxhYmVsID0gZ2FtZS5pMThuLmxvY2FsaXplKENPTkZJRy5CT0lMRVJQTEFURS5hYmlsaXRpZXNba10pID8/IGs7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJfcHJlcGFyZUNoYXJhY3RlckRhdGFcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sKSB7XG4gICAgICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuXG4gICAgICAgIC8vIFJlbmRlciB0aGUgaXRlbSBzaGVldCBmb3Igdmlld2luZy9lZGl0aW5nIHByaW9yIHRvIHRoZSBlZGl0YWJsZSBjaGVjay5cbiAgICAgICAgaHRtbC5maW5kKCcuaXRlbS1lZGl0JykuY2xpY2soZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSAkKGV2LmN1cnJlbnRUYXJnZXQpLnBhcmVudHMoXCIuaXRlbVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmFjdG9yLml0ZW1zLmdldChsaS5kYXRhKFwiaXRlbUlkXCIpKTtcbiAgICAgICAgICAgIGlmICgoaXRlbSkgJiYgKGl0ZW0uc2hlZXQpKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5zaGVldC5yZW5kZXIodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgLy8gRXZlcnl0aGluZyBiZWxvdyBoZXJlIGlzIG9ubHkgbmVlZGVkIGlmIHRoZSBzaGVldCBpcyBlZGl0YWJsZVxuICAgICAgICBpZiAoIXRoaXMuaXNFZGl0YWJsZSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIEFkZCBJbnZlbnRvcnkgSXRlbVxuICAgICAgICBodG1sLmZpbmQoJy5pdGVtLWNyZWF0ZScpLmNsaWNrKHRoaXMuX29uSXRlbUNyZWF0ZS5iaW5kKHRoaXMpKTtcblxuICAgICAgICAvLyBEZWxldGUgSW52ZW50b3J5IEl0ZW1cbiAgICAgICAgaHRtbC5maW5kKCcuaXRlbS1kZWxldGUnKS5jbGljayhldiA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9ICQoZXYuY3VycmVudFRhcmdldCkucGFyZW50cyhcIi5pdGVtXCIpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuYWN0b3IuaXRlbXMuZ2V0KGxpLmRhdGEoXCJpdGVtSWRcIikpO1xuICAgICAgICAgICAgaWYgKChpdGVtKSAmJiAoaXRlbS5zaGVldCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmRlbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGkuc2xpZGVVcCgyMDAsICgpID0+IHRoaXMucmVuZGVyKGZhbHNlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGh0bWwuZmluZCgnLmJ0bi1taW51cycpLmNsaWNrKGV2ID0+IHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9ICQoZXYuY3VycmVudFRhcmdldCkucGFyZW50cygpLnNpYmxpbmdzKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gMCkge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbCh2YWx1ZSAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWwoKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaHRtbC5maW5kKCcuYnRuLXBsdXMnKS5jbGljayhldiA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSAkKGV2LmN1cnJlbnRUYXJnZXQpLnBhcmVudHMoKS5zaWJsaW5ncygnaW5wdXRbdHlwZT1cInRleHRcIl0nKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbCgpKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsKHZhbHVlICsgMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbCgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBodG1sLmZpbmQoJy50eHQtc2tpbGwnKS5jaGFuZ2UoZXYgPT4ge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gJChldi5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KGlucHV0LnZhbCgpKTtcbiAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsKDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsKDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaHRtbC5maW5kKCcubnAtcnVuJykuY2xpY2soZXYgPT4ge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gJChldi5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGxldCBhMSA9IGlucHV0LmRhdGEoXCJhdHRyMFwiKTtcbiAgICAgICAgICAgIGxldCBhMiA9IGlucHV0LmRhdGEoXCJhdHRyMVwiKTtcbiAgICAgICAgICAgIGxldCBuMSA9IGlucHV0LmRhdGEoXCJuYW1lMFwiKTtcbiAgICAgICAgICAgIGxldCBuMiA9IGlucHV0LmRhdGEoXCJuYW1lMVwiKTtcbiAgICAgICAgICAgIGxldCBubSA9IGlucHV0LmRhdGEoXCJucC1uYW1lXCIpO1xuICAgICAgICAgICAgbGV0IG5jID0gaW5wdXQuZGF0YShcIm5wLWNvc3RcIik7XG4gICAgICAgICAgICBsZXQgYWMgPSBpbnB1dC5kYXRhKFwiYWN0b3JcIik7XG4gICAgICAgICAgICBsZXQgYSA9IGdhbWUuYWN0b3JzLmdldChhYyk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5tKTtcbiAgICAgICAgICAgIGxldCBpbnB1dFZhbHVlID0gaW5wdXQuY2xvc2VzdCgndHInKS5wYXJlbnRzKCd0cicpLmZpbmQoJ2lucHV0LnR4dC1za2lsbCcpLnZhbCgpO1xuICAgICAgICAgICAgaWYgKChpbnB1dFZhbHVlID09PSBcIlwiKSB8fCAoaXNOYU4oaW5wdXRWYWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGljZWNvdW50ID0gcGFyc2VJbnQoYTEpICsgcGFyc2VJbnQoYTIpICsgcGFyc2VJbnQoaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICBsZXQgbSA9IGEubmFtZSArIFwiIHJ1bnMgJ1wiICsgbm0gKyBcIicgbmFub3Byb2dyYW0hIFwiICsgbjEgKyBcIihcIiArIGExICsgXCIpICsgXCIgKyBuMiArIFwiKFwiICsgYTIgKyBcIikgKyByYW5rKFwiICsgaW5wdXRWYWx1ZSArIFwiKSA9IFwiICsgZGljZWNvdW50O1xuICAgICAgICAgICAgbGV0IHJvbGwgPSBSb2xsRnV4RGljZShkaWNlY291bnQsIDAsIDAsIG0pO1xuXG4gICAgICAgICAgICBhLnVwZGF0ZSh7c3lzdGVtOiB7Y3VycmVudF9ucDogYS5zeXN0ZW0uY3VycmVudF9ucCAtIHBhcnNlSW50KG5jKX19KVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgY3JlYXRpbmcgYSBuZXcgT3duZWQgSXRlbSBmb3IgdGhlIGFjdG9yIHVzaW5nIGluaXRpYWwgZGF0YSBkZWZpbmVkIGluIHRoZSBIVE1MIGRhdGFzZXRcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAgIFRoZSBvcmlnaW5hdGluZyBjbGljayBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX29uSXRlbUNyZWF0ZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAvLyBHZXQgdGhlIHR5cGUgb2YgaXRlbSB0byBjcmVhdGUuXG4gICAgICAgIGNvbnN0IHR5cGUgPSBoZWFkZXIuZGF0YXNldC50eXBlO1xuICAgICAgICAvLyBHcmFiIGFueSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGNvbnRyb2wuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBkdXBsaWNhdGUoaGVhZGVyLmRhdGFzZXQpO1xuICAgICAgICAvLyBJbml0aWFsaXplIGEgZGVmYXVsdCBuYW1lLlxuICAgICAgICBjb25zdCBuYW1lID0gYE5ldyAke3R5cGUuY2FwaXRhbGl6ZSgpfWA7XG4gICAgICAgIC8vIFByZXBhcmUgdGhlIGl0ZW0gb2JqZWN0LlxuICAgICAgICBjb25zdCBpdGVtRGF0YSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9O1xuICAgICAgICAvLyBSZW1vdmUgdGhlIHR5cGUgZnJvbSB0aGUgZGF0YXNldCBzaW5jZSBpdCdzIGluIHRoZSBpdGVtRGF0YS50eXBlIHByb3AuXG4gICAgICAgIGRlbGV0ZSBpdGVtRGF0YS5kYXRhW1widHlwZVwiXTtcblxuICAgICAgICAvLyBGaW5hbGx5LCBjcmVhdGUgdGhlIGl0ZW0hXG4gICAgICAgIHJldHVybiBhd2FpdCBJdGVtLmNyZWF0ZShpdGVtRGF0YSwge3BhcmVudDogdGhpcy5hY3Rvcn0pO1xuICAgIH1cblxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBhc3luYyBfb25Ecm9wSXRlbUNyZWF0ZShpdGVtRGF0YSkge1xuICAgICAgICAvLyBsZXQgaXRlbXMgPSBpdGVtRGF0YSBpbnN0YW5jZW9mIEFycmF5ID8gaXRlbURhdGEgOiBbaXRlbURhdGFdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtcyk7XG4gICAgICAgIC8vIGNvbnN0IHRvQ3JlYXRlID0gW107XG4gICAgICAgIC8vIGZvciAoIGNvbnN0IGl0ZW0gb2YgaXRlbXMgKSB7XG4gICAgICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9vbkRyb3BTaW5nbGVJdGVtKGl0ZW0pO1xuICAgICAgICAvLyAgICAgaWYgKCByZXN1bHQgKSB0b0NyZWF0ZS5wdXNoKHJlc3VsdCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gLy8gQ3JlYXRlIHRoZSBvd25lZCBpdGVtcyBhcyBub3JtYWxcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuYWN0b3IuY3JlYXRlRW1iZWRkZWREb2N1bWVudHMoXCJJdGVtXCIsIHRvQ3JlYXRlKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIl9vbkRyb3BJdGVtQ3JlYXRlXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtRGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZHJvcHBlZCBpdGVtIGRhdGFcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1EYXRhKTtcbiAgICAgICAgbGV0IGFsbF9pdGVtcyA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICBsZXQgaXRlbSA9IG51bGw7XG4gICAgICAgIGlmIChbXCJicmVlZFwiLCBcIm9yaWdpblwiLCBcInByb2Zlc3Npb25cIiwgXCJmYWN0aW9uXCJdLmluY2x1ZGVzKGl0ZW1EYXRhLnR5cGUpKSB7XG4gICAgICAgICAgICBsZXQgZGVsX2l0ZW1zID0gYWxsX2l0ZW1zLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7IHJldHVybiAoKGl0ZW0udHlwZSA9PT0gaXRlbURhdGEudHlwZSkgJiYgKGl0ZW0uaWQgPT09IGl0ZW1EYXRhLmlkKSkgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiKTtcbiAgICAgICAgICAgIGRlbF9pdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsKTtcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5hY3Rvci5pdGVtcy5nZXQoZWwuX2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW0gZGVsZXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kZWxldGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW0gbm90IGZvdW5kXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gaWYgKGl0ZW1EYXRhLnR5cGUgPT09IFwicHJvZmVzc2lvblwiKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwcm9mZXNzaW9uIGNoYW5nZVwiKTtcbiAgICAgICAgICAgIC8vICAgICBsZXQgZGVsX2l0ZW1zID0gYWxsX2l0ZW1zLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7IHJldHVybiAoaXRlbS50eXBlID09PSBcInNraWxsXCIpIH0pO1xuICAgICAgICAgICAgLy8gICAgIC8vIGlmIHNraWxscyBhcmUgYXNzaWduZWQsIGRlbGV0ZSB0aGVtIG9uIHByb2Zlc3Npb24gY2hhbmdlXG4gICAgICAgICAgICAvLyAgICAgaWYgKGRlbF9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGRlbF9pdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaXRlbSA9IHRoaXMuYWN0b3IuaXRlbXMuZ2V0KGVsLl9pZCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGl0ZW0uZGVsZXRlKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICAvLyB0YWtlIHNraWxscyBmb3IgdGhpcyBwcm9mZXNzaW9uIGZyb20gdGhlIGNvbXBlbmRpdW0gYW5kIGFkZCB0aGVtIHRvIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIC8vICAgICBsZXQgc2tpbGxfcGFjayA9IGdhbWUucGFja3MuZ2V0KFwiZW9hLnNraWxsc1wiKVxuICAgICAgICAgICAgLy8gICAgIGxldCBza2lsbF9pbmRleCA9IEFycmF5LmZyb20oc2tpbGxfcGFjay5pbmRleClcbiAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCBza2lsbCBvZiBza2lsbF9pbmRleCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgaXRlbSA9IGF3YWl0IHNraWxsX3BhY2suZ2V0RG9jdW1lbnQoc2tpbGwuX2lkKVxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoaXRlbS5zeXN0ZW0ucHJvZmVzc2lvbnMuaW5jbHVkZXMoaXRlbURhdGEuc3lzdGVtLmlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhza2lsbCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmFjdG9yLmNyZWF0ZU93bmVkSXRlbShza2lsbClcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWN0b3IuY3JlYXRlRW1iZWRkZWREb2N1bWVudHMoJ0l0ZW0nLCBbaXRlbV0pXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0LnN5c3RlbS5wcm9mZXNzaW9ucyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGxldCBpdGVtcyA9IEFycmF5LmZyb20oYWN0Lml0ZW1zKVxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBsZXQgdXBkYXRlcyA9IFtdXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGFsbF9pdGVtcyk7XG4gICAgICAgICAgICAvLyAgICAgLy8gY29uc3QgcGFjayA9IGdhbWUucGFja3MuZ2V0KFwiZW9hLnNraWxsc1wiKTtcbiAgICAgICAgICAgIC8vICAgICAvLyBhd2FpdCBwYWNrLmdldEluZGV4KCk7XG4gICAgICAgICAgICAvLyAgICAgLy8gLy8gY29uc3QgZWZmZWN0SWQgPSBwYWNrLmluZGV4LmZpbmQoZSA9PiBlLm5hbWUgPT09IGVmZmVjdE5hbWUpLl9pZDtcbiAgICAgICAgICAgIC8vICAgICAvLyBjb25zdCBhY3RvciA9IGdhbWUudXNlci5jaGFyYWN0ZXI7XG4gICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocGFjay5pbmRleCk7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IGUgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIC8vIHBhY2suaW5kZXguZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgZSA9IHBhY2suZ2V0RW50cnkoZWwuX2lkKTtcbiAgICAgICAgICAgIC8vICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vICAgICAvLyBsZXQgYWRkX2l0ZW1zID0gYWxsX2l0ZW1zLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7IHJldHVybiAoKGl0ZW0udHlwZSA9PT0gXCJwcm9mZXNzaW9uXCIpICYmIChpdGVtLnN5c3RlbS5kYXRhLnByb2Zlc3Npb25zLmluY2x1ZGVzKGFsbF9pdGVtcy5zeXN0ZW0uZGF0YS4pKSkgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zdCBjaGFuZ2UgZGF0YSAmIGxpc3RcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1EYXRhKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWxsX2l0ZW1zKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9vbkRyb3BJdGVtQ3JlYXRlKGl0ZW1EYXRhKTtcbiAgICB9XG5cbiAgICBhc3luYyBfb25Ecm9wU2luZ2xlSXRlbShpdGVtRGF0YSkge1xuICAgICAgICByZXR1cm4gc3VwZXIuX29uRHJvcFNpbmdsZUl0ZW0oaXRlbURhdGEpO1xuICAgIH1cblxuICAgIC8vIGFzeW5jIGZ1bmN0aW9uIGZyZWVTa2lsbFJhbmsoc2tpbGw6IEdlbmVzeXNJdGVtPFNraWxsRGF0YU1vZGVsPiwgYWRqdXN0bWVudDogbnVtYmVyKSB7XG4gICAgLy8gICAgIGF3YWl0IHRvUmF3KHNraWxsKS51cGRhdGUoe1xuICAgIC8vICAgICAgICAgJ3N5c3RlbS5yYW5rJzogTWF0aC5tYXgoMCwgc2tpbGwuc3lzdGVtRGF0YS5yYW5rICsgYWRqdXN0bWVudCksXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxufVxuIiwiZXhwb3J0IGNvbnN0IGVvYSA9IHt9O1xuXG5lb2EuYXR0YWNrVHlwZXMgPSB7XG4gICAgbm9uZTogXCJcIixcbiAgICBndW5zOiBcImVvYS5hdHRhY2suZ3Vuc1wiLFxuICAgIGtuaXZlczogXCJlb2EuYXR0YWNrLmtuaXZlc1wiXG59IiwiXG4vKipcbiAqIEBleHRlbmRzIHtJdGVtU2hlZXR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFb0FMb2Fkb3V0U2hlZXQgZXh0ZW5kcyBJdGVtU2hlZXQge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gZm91bmRyeS51dGlscy5tZXJnZU9iamVjdChzdXBlci5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgY2xhc3NlczogW1wiZW9hXCIsIFwic2hlZXRcIiwgXCJpdGVtXCJdLFxuICAgICAgdGVtcGxhdGU6IFwic3lzdGVtcy9lb2EvdGVtcGxhdGVzL2l0ZW1zL2xvYWRvdXQtc2hlZXQuaHRtbFwiLFxuICAgICAgd2lkdGg6IDg1MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtbmF2aWdhdGlvblwiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwifV0sXG4gICAgICBkcmFnRHJvcDogW3tkcmFnU2VsZWN0b3I6IFwiLmRyYWdnYWJsZVwiLCBkcm9wU2VsZWN0b3I6IG51bGx9XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICBjb250ZXh0LmVmZmVjdGl2ZV9yYW5nZV9jaG9pY2VzID0ge2VuZ2FnZWQ6IFwiRW5nYWdlZFwiLCBtZWxlZTogXCJNZWxlZVwiLCBjbG9zZTogXCJDbG9zZVwiLCBuZWFyOiBcIk5lYXJcIiwgbWlkOiBcIk1pZFwiLCBmYXI6IFwiRmFyXCJ9O1xuICAgIGNvbnRleHQucHJpbWFyeV9kYW1hZ2VfZm9ybXVsYSA9IGNvbnRleHQuZGF0YS5zeXN0ZW0ucHJpbWFyeV93ZWFwb24uZGFtYWdlX2Zvcm11bGE7XG4gICAgY29udGV4dC5zcGVjaWFsX2RhbWFnZV9mb3JtdWxhID0gY29udGV4dC5kYXRhLnN5c3RlbS5zcGVjaWFsX3dlYXBvbi5kYW1hZ2VfZm9ybXVsYTtcbiAgICBjb250ZXh0LmhlYXZ5X2RhbWFnZV9mb3JtdWxhID0gY29udGV4dC5kYXRhLnN5c3RlbS5oZWF2eV93ZWFwb24uZGFtYWdlX2Zvcm11bGE7XG4gICAgY29udGV4dC5tZWxlZV9kYW1hZ2VfZm9ybXVsYSA9IGNvbnRleHQuZGF0YS5zeXN0ZW0ubWVsZWVfYXR0YWNrLmRhbWFnZV9mb3JtdWxhO1xuXG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgLy8gY29udGV4dC5zeXN0ZW1EYXRhID0gY29udGV4dC5kYXRhLnN5c3RlbTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcbiAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcblxuICAgIC8vIGFjY2Vzc2liaWxpdHkodGhpcy5pdGVtLCBodG1sKTtcblxuICAgIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgaGVyZSBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgc2hlZXQgaXMgZWRpdGFibGVcbiAgICBpZiAoICF0aGlzLmlzRWRpdGFibGUgKSByZXR1cm47XG4gIH1cbn1cbiIsIi8qIENvbnN0YW50cyB1c2VkKi9cbmV4cG9ydCBjb25zdCBGVVhfQ09OU1QgPSB7XG4gIFNZU1RFTV9WQVJJQU5UUzoge1xuICAgIEZVX0NMQVNTSUM6IDAsXG4gICAgRlVfVjI6IDEsXG4gICAgQUNUSU9OX1RBTEVTOiAyLFxuICAgIE5FT05fQ0lUWV9PVkVSRFJJVkU6IDMsXG4gICAgRUFSVEhEQVdOX0FHRV9PRl9MRUdFTkQ6IDRcbiAgfVxufTtcblxuXG5leHBvcnQgZnVuY3Rpb24gU3lzdGVtVmFyaWFudE5hbWUoaXN5c3RlbXZhcmlhbnQpIHtcbiAgbGV0IHN5c3RlbXZhcmlhbnRuYW1lID0gJ1Vua25vd24gVmFyaWFudCc7XG4gIHN3aXRjaCAoaXN5c3RlbXZhcmlhbnQudG9TdHJpbmcoKSkge1xuICAgIGNhc2UgRlVYX0NPTlNULlNZU1RFTV9WQVJJQU5UUy5GVV9DTEFTU0lDLnRvU3RyaW5nKCk6XG4gICAgICBzeXN0ZW12YXJpYW50bmFtZSA9IGdhbWUuaTE4bi5sb2NhbGl6ZSgnZnV4LWRpY2Utcm9sbGVyLnNldHRpbmdzLlNZU1RFTV9WQVJJQU5UX0ZVX0NMQVNTSUMnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRlVYX0NPTlNULlNZU1RFTV9WQVJJQU5UUy5GVV9WMi50b1N0cmluZygpOlxuICAgICAgc3lzdGVtdmFyaWFudG5hbWUgPSBnYW1lLmkxOG4ubG9jYWxpemUoJ2Z1eC1kaWNlLXJvbGxlci5zZXR0aW5ncy5TWVNURU1fVkFSSUFOVF9GVV9WMicpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBGVVhfQ09OU1QuU1lTVEVNX1ZBUklBTlRTLkFDVElPTl9UQUxFUy50b1N0cmluZygpOlxuICAgICAgc3lzdGVtdmFyaWFudG5hbWUgPSBnYW1lLmkxOG4ubG9jYWxpemUoJ2Z1eC1kaWNlLXJvbGxlci5zZXR0aW5ncy5TWVNURU1fVkFSSUFOVF9BQ1RJT05fVEFMRVMnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRlVYX0NPTlNULlNZU1RFTV9WQVJJQU5UUy5ORU9OX0NJVFlfT1ZFUkRSSVZFLnRvU3RyaW5nKCk6XG4gICAgICBzeXN0ZW12YXJpYW50bmFtZSA9IGdhbWUuaTE4bi5sb2NhbGl6ZSgnZnV4LWRpY2Utcm9sbGVyLnNldHRpbmdzLlNZU1RFTV9WQVJJQU5UX05FT05fQ0lUWV9PVkVSRFJJVkUnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRlVYX0NPTlNULlNZU1RFTV9WQVJJQU5UUy5FQVJUSERBV05fQUdFX09GX0xFR0VORC50b1N0cmluZygpOlxuICAgICAgc3lzdGVtdmFyaWFudG5hbWUgPSBnYW1lLmkxOG4ubG9jYWxpemUoJ2Z1eC1kaWNlLXJvbGxlci5zZXR0aW5ncy5TWVNURU1fVkFSSUFOVF9FQVJUSERBV05fQUdFX09GX0xFR0VORCcpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIHN5c3RlbXZhcmlhbnRuYW1lO1xufVxuXG4iLCJpbXBvcnQgeyBGVVhfQ09OU1QgfSBmcm9tICAgJy4vZnV4LWRpY2Utcm9sbGVyLWNvbnN0YW50cy5qcyc7XG5jb25zdCBfbW9kdWxlX2lkID0gJ2VvYSc7ICAvLyBtb2R1bGVzIHRydWUgbmFtZShpZClcbmFzeW5jIGZ1bmN0aW9uIFJvbGxENnMoZmFjZXMpe1xuICBsZXQgcm9sbD1hd2FpdCBuZXcgUm9sbChmYWNlcyArIFwiZDZcIikucm9sbCh7YXN5bmM6IHRydWV9KTtcbiAgcmV0dXJuIHJvbGw7XG59XG5hc3luYyBmdW5jdGlvbiBSb2xsRDhzKGZhY2VzKXtcbiAgbGV0IHJvbGw9YXdhaXQgbmV3IFJvbGwoZmFjZXMgKyBcImQ4XCIpLnJvbGwoe2FzeW5jOiB0cnVlfSk7XG4gIHJldHVybiByb2xsO1xufVxuZnVuY3Rpb24gZ2V0R2FtZVNldHRpbmcoc2V0dGluZ05hbWUpe1xuICByZXR1cm4gIGdhbWUuc2V0dGluZ3MuZ2V0KF9tb2R1bGVfaWQsIHNldHRpbmdOYW1lKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBSb2xsRnV4RGljZShhY3Rpb25kaWNlLCBhdWdtZW50ZGljZSwgZGFuZ2VyZGljZSwgbXNnID0gbnVsbCkge1xuICAgIGlmIChhY3Rpb25kaWNlID09IDAgJiYgYXVnbWVudGRpY2UgPT0gMCAmJiBkYW5nZXJkaWNlID09IDApIHtcbiAgICAgIC8vbm8gZGljZSwgYWJvcnRcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbGV0IGhhcmRtb2RlID0gZ2V0R2FtZVNldHRpbmcoJ09QVElPTl9IQVJEX01PREUnKTtcbiAgICBsZXQgaGFyZG1vZGUgPSBmYWxzZTtcbiAgICAvLyBsZXQgc3lzdGVtdmFyaWFudCA9IGdldEdhbWVTZXR0aW5nKCdPUFRJT05fU1lTVEVNX1ZBUklBTlQnKTtcbiAgICBsZXQgc3lzdGVtdmFyaWFudCA9IEZVWF9DT05TVC5TWVNURU1fVkFSSUFOVFMuRlVfVjI7XG4gICAgLy8gbGV0IGJvdGNoX3ZhbHVlID0gZ2V0R2FtZVNldHRpbmcoJ09QVElPTl9CT1RDSF9WQUxVRScpO1xuICAgIGxldCBib3RjaF92YWx1ZSA9IDE7XG4gICAgLy8gbGV0IG9wdGlvbl9tYXRjaGluZ2RpY2UgPSBnZXRHYW1lU2V0dGluZygnT1BUSU9OX0ZVX0NMQVNTSUNfTUFUQ0hJTkdfRElDRScpO1xuICAgIGxldCBvcHRpb25fbWF0Y2hpbmdkaWNlID0gZmFsc2U7XG5cbiAgICAvLyByZWR1Y2UgZGljZSBpZiBGVSBDbGFzc2ljICAgIFxuICAgIGlmIChzeXN0ZW12YXJpYW50ID09IEZVWF9DT05TVC5TWVNURU1fVkFSSUFOVFMuRlVfQ0xBU1NJQykge1xuICAgICAgLy8gNWEsIDNkID0+IDJhXG4gICAgICAvLyAyYSwgM2QgPT4gMWRcbiAgICAgIC8vIDJhLCAyZCA9PlxuICAgICAgaWYgKGRhbmdlcmRpY2UgPT0gYWN0aW9uZGljZSkge1xuICAgICAgICBhY3Rpb25kaWNlID0gMDtcbiAgICAgICAgZGFuZ2VyZGljZSA9IDI7XG4gICAgICB9IGVsc2UgaWYgKGRhbmdlcmRpY2UgPiBhY3Rpb25kaWNlKSB7XG4gICAgICAgIC8vIG1vcmUgcGVuYWx0eSB0aGFuIGJvbnVzXG4gICAgICAgIGRhbmdlcmRpY2UgPSBkYW5nZXJkaWNlIC0gYWN0aW9uZGljZSArIDI7XG4gICAgICAgIGFjdGlvbmRpY2UgPSAwO1xuICAgICAgfSBlbHNlIGlmIChhY3Rpb25kaWNlID4gZGFuZ2VyZGljZSkge1xuICAgICAgICAvLyBib251cyBpcyByZWR1Y2VkIGJ5IHBlbmFsdHlcbiAgICAgICAgYWN0aW9uZGljZSA9IGFjdGlvbmRpY2UgLSBkYW5nZXJkaWNlO1xuICAgICAgICBkYW5nZXJkaWNlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZWR1Y2UgZGljZSBpZiBFYXJ0aGRhd24gQWdlIG9mIGxlZ2VuZFxuICAgIGlmIChzeXN0ZW12YXJpYW50ID09IEZVWF9DT05TVC5TWVNURU1fVkFSSUFOVFMuRUFSVEhEQVdOX0FHRV9PRl9MRUdFTkQpIHtcbiAgICAgIC8vIGluIEVEQW9MLCB0aGUgcm9sbCBpcyBhbHdheXMgMWQ2IHBsdXMgYSByZWR1Y2VkIHNldCBvZiBuZWdhdGl2ZSBhbmQvb3IgcG9zaXRpdmUgZnVkZ2UgZGljZSgxZDYgd2hlcmUgNS02IG1lYW5zICsvLSBlbHNlIGlnbm9yZWQpXG4gICAgICBpZihhY3Rpb25kaWNlPjEgJiYgZGFuZ2VyZGljZT4wKXtcbiAgICAgICAgaWYgKGFjdGlvbmRpY2U9PWRhbmdlcmRpY2Upe1xuICAgICAgICAgIGFjdGlvbmRpY2U9MTtcbiAgICAgICAgICBkYW5nZXJkaWNlPTE7XG4gICAgICAgIH0gZWxzZSBpZihhY3Rpb25kaWNlPmRhbmdlcmRpY2Upe1xuICAgICAgICAgIGFjdGlvbmRpY2U9YWN0aW9uZGljZSAtIGRhbmdlcmRpY2U7XG4gICAgICAgICAgZGFuZ2VyZGljZT0wO1xuICAgICAgICB9IGVsc2UgaWYoYWN0aW9uZGljZTxkYW5nZXJkaWNlKXtcbiAgICAgICAgICBkYW5nZXJkaWNlPWRhbmdlcmRpY2UgLSBhY3Rpb25kaWNlICsxO1xuICAgICAgICAgIGFjdGlvbmRpY2U9MTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyByb2xsIGRpY2VcbiAgICBsZXQgYXVnbWVudGRpY2VyZXN1bHRzID0gYXdhaXQgUm9sbEQ4cyhhdWdtZW50ZGljZSk7XG4gICAgLy8gcm9sbCBkaWNlXG4gICAgbGV0IGFjdGlvbmRpY2VyZXN1bHRzID0gYXdhaXQgUm9sbEQ2cyhhY3Rpb25kaWNlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb25kaWNlcmVzdWx0cyk7XG4gICAgbGV0IGRhbmdlcmRpY2VyZXN1bHRzID0gYXdhaXQgUm9sbEQ2cyhkYW5nZXJkaWNlKTtcblxuICAgIC8vIHByZXBhcmUgcmVzdWx0IGFycmF5XG4gICAgbGV0IGFyckZpbmFscyA9IFswLCAwLCAwLCAwLCAwLCAwXTsgIC8vIGFycmF5IGZvciByZXN1bHQgY291bnRzLCBzbG90IGNvcnJlc3BvbmRzIHRvIGZhY2UgdmFsdWUgMS0gNlxuICAgIC8vIGFjdGlvbiBkaWNlXG4gICAgbGV0IGFjdGlvbnJlc3VsdCA9ICcnO1xuICAgIGxldCBhY3Rpb25zc29ydGVkID0gW107XG4gICAgbGV0IGFjdGlvbnN1bnNvcnRlZCA9IFtdO1xuICAgIGlmIChhY3Rpb25kaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBpbmNyZW1lbnQgZmluYWxzXG4gICAgICAgIGFyckZpbmFsc1thY3Rpb25kaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdCAtIDFdID0gYXJyRmluYWxzW2FjdGlvbmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0IC0gMV0gKyAxO1xuICAgICAgICBhY3Rpb25zc29ydGVkLnB1c2goYWN0aW9uZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQpO1xuICAgICAgICBhY3Rpb25zdW5zb3J0ZWQucHVzaChhY3Rpb25kaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdClcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gc29ydCBhY3Rpb24gcmVzdWx0c1xuICAgIGFjdGlvbnNzb3J0ZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH0pO1xuICAgIC8vIGJ1aWxkIHJlc3VsdCBzdHJpbmcgZm9yIGFjdGlvbiBkaWNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgIGFjdGlvbnJlc3VsdCA9ICc8aW1nIHNyYz1cInN5c3RlbXMvZW9hL2ltYWdlcy9hY3Rpb25kaWVfdmFsdWVfJyArIGFjdGlvbnNzb3J0ZWRbaV0gKyAnLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDotM3B4O21hcmdpbi1sZWZ0OjJweDtcIj4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9ucmVzdWx0ID0gYWN0aW9ucmVzdWx0ICsgJycgKyAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvYWN0aW9uZGllX3ZhbHVlXycgKyBhY3Rpb25zc29ydGVkW2ldICsgJy5wbmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6LTNweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBhdWdtZW50IGRpY2VcbiAgICBsZXQgYXVnbWVudHJlc3VsdCA9ICcnO1xuICAgIGxldCBhdWdtZW50c29ydGVkID0gW107XG4gICAgbGV0IGF1Z21lbnR1bnNvcnRlZCA9IFtdO1xuICAgIGlmIChhdWdtZW50ZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF1Z21lbnRkaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyckZpbmFsc1thdWdtZW50ZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQgLSAxXSA9IGFyckZpbmFsc1thdWdtZW50ZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQgLSAxXSAtIDE7XG4gICAgICAgIGF1Z21lbnRzb3J0ZWQucHVzaChhdWdtZW50ZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQpO1xuICAgICAgICBhdWdtZW50dW5zb3J0ZWQucHVzaChhdWdtZW50ZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBzb3J0IGF1Z21lbnQgcmVzdWx0XG4gICAgYXVnbWVudHNvcnRlZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgLy8gYnVpbGQgcmVzdWx0IHN0cmluZyBmb3IgYXVnbWVudCBkaWNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdWdtZW50c29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgIGF1Z21lbnRyZXN1bHQgPSAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvYXVnbWVudGRpZV92YWx1ZV8nICsgYXVnbWVudHNvcnRlZFtpXSArICcucG5nXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjBweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1Z21lbnRyZXN1bHQgPSBhdWdtZW50cmVzdWx0ICsgJycgKyAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvYXVnbWVudGRpZV92YWx1ZV8nICsgYXVnbWVudHNvcnRlZFtpXSArICcucG5nXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjBweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL2RhbmdlciBkaWNlXG4gICAgbGV0IGRhbmdlcnJlc3VsdCA9ICcnO1xuICAgIGxldCBkYW5nZXJzb3J0ZWQgPSBbXTtcbiAgICBsZXQgZGFuZ2VydW5zb3J0ZWQgPSBbXTtcbiAgICBpZiAoZGFuZ2VyZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZGVjIGZpbmFsc1xuICAgICAgICBpZiAoaGFyZG1vZGUpIHtcbiAgICAgICAgICAvLyBJbiBoYXJkIG1vZGUgZWFjaCBEYW5nZXIgZGllIGNhbmNlbHMgYWxsIEFjdGlvbiBkaWNlIHdpdGggYSBtYXRjaGluZyB2YWx1ZS5cbiAgICAgICAgICBhcnJGaW5hbHNbZGFuZ2VyZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQgLSAxXSA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJyRmluYWxzW2RhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0IC0gMV0gPSBhcnJGaW5hbHNbZGFuZ2VyZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQgLSAxXSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZGFuZ2Vyc29ydGVkLnB1c2goZGFuZ2VyZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQpO1xuICAgICAgICBkYW5nZXJ1bnNvcnRlZC5wdXNoKGRhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc29ydCBkYW5nZXIgcmVzdWx0XG4gICAgZGFuZ2Vyc29ydGVkLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICAvLyBidWlsZCByZXN1bHQgc3RyaW5nIGZvciBkYW5nZXIgZGljZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGFuZ2Vyc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgIGRhbmdlcnJlc3VsdCA9ICc8aW1nIHNyYz1cInN5c3RlbXMvZW9hL2ltYWdlcy9kYW5nZXJkaWVfdmFsdWVfJyArIGRhbmdlcnNvcnRlZFtpXSArICcucG5nXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjBweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhbmdlcnJlc3VsdCA9IGRhbmdlcnJlc3VsdCArICcnICsgJzxpbWcgc3JjPVwic3lzdGVtcy9lb2EvaW1hZ2VzL2RhbmdlcmRpZV92YWx1ZV8nICsgZGFuZ2Vyc29ydGVkW2ldICsgJy5wbmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6MHB4O21hcmdpbi1sZWZ0OjJweDtcIj4nO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmaW5kIGhpZ2hlc3QgcmVtYWluaW5nIHBvc2l0aXZlIGluIGZpbmFsc1xuICAgIGxldCBoaWdoZXN0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgaWYgKGFyckZpbmFsc1tpXSA+IDApIHtcbiAgICAgICAgaGlnaGVzdCA9IGkgKyAxO1xuICAgICAgfVxuICAgIH1cbiAgICBsZXQgb3JhY2xlID0gJyc7XG4gICAgbGV0IGJvb25zID0gMDtcbiAgICBsZXQgYm90Y2hlcyA9IDA7XG4gICAgbGV0IHJvbGx2YWx1ZSA9IDA7XG4gICAgbGV0IGhhc2NyaXQgPSBmYWxzZTtcbiAgICBsZXQgaGFzZnVtYmxlID0gZmFsc2VcbiAgICBsZXQgc3VibXNnID0gJyc7XG4gICAgbGV0IGZsYXZvcnRleHQgPSAnJztcbiAgICBpZiAoc3lzdGVtdmFyaWFudCA9PSBGVVhfQ09OU1QuU1lTVEVNX1ZBUklBTlRTLkZVX0NMQVNTSUMpIHtcbiAgICAgIC8vIGNsYXNzaWMgZnVcbiAgICAgIGZsYXZvcnRleHQgPSAnQmVhdGluZyB0aGUgT2Rkcyc7XG4gICAgICBcbiAgICAgIGlmIChhY3Rpb25kaWNlID09IDApIHtcbiAgICAgICAgLy8gdXNlIGxvd2VzdFxuICAgICAgICAvLyB1c2VkIGZvciBmdSBjbGFzc2ljICAgIFxuICAgICAgICBsZXQgbG93ZXN0ZGFuZ2VyZGljZSA9IDA7XG4gICAgICAgIGlmIChkYW5nZXJzb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxvd2VzdGRhbmdlcmRpY2UgPSBkYW5nZXJzb3J0ZWRbMF07XG4gICAgICAgICAgcm9sbHZhbHVlID0gbG93ZXN0ZGFuZ2VyZGljZTtcbiAgICAgICAgICBpZiAob3B0aW9uX21hdGNoaW5nZGljZSkge1xuICAgICAgICAgICAgbGV0IG1hdGNoaW5nZGljZSA9IDA7XG4gICAgICAgICAgICAvLyBub3cgbG9vayBmb3IgZXh0cmEgZmFpbHVyZShtYXRjaGluZyBkaWNlKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYW5nZXJzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGRhbmdlcnNvcnRlZFtpXSA9PSBsb3dlc3RkYW5nZXJkaWNlKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hpbmdkaWNlID0gbWF0Y2hpbmdkaWNlICsgMTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdkaWNlID4gMSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHJvbGx2YWx1ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9sbHZhbHVlID0gcm9sbHZhbHVlIC0gMTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJvdGNoZXMgPSBib3RjaGVzICsgMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHVzZSBoaWdoZXN0IGFjdGlvbiBkaWNlXG4gICAgICAgIHJvbGx2YWx1ZSA9IGhpZ2hlc3Q7XG4gICAgICAgIC8vIG5vdyBsb29rIGZvciBib29ucyhtYXRjaGluZyBkaWNlKVxuICAgICAgICBpZiAob3B0aW9uX21hdGNoaW5nZGljZSkge1xuICAgICAgICAgIGxldCBtYXRjaGluZ2RpY2UgPSAwO1xuICAgICAgICAgIC8vIG5vdyBsb29rIGZvciBleHRyYSBzdWNjZXNzKG1hdGNoaW5nIGRpY2UpXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uc3NvcnRlZFtpXSA9PSBoaWdoZXN0KSB7XG4gICAgICAgICAgICAgIG1hdGNoaW5nZGljZSA9IG1hdGNoaW5nZGljZSArIDE7XG4gICAgICAgICAgICAgIGlmIChtYXRjaGluZ2RpY2UgPiAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJvbGx2YWx1ZSA8IDYpIHtcbiAgICAgICAgICAgICAgICAgIHJvbGx2YWx1ZSA9IHJvbGx2YWx1ZSArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGJvb25zID0gYm9vbnMgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3VibXNnID0gJ1Jlc3VsdDogJyArIHJvbGx2YWx1ZTtcbiAgICAgIHN3aXRjaCAocm9sbHZhbHVlKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgLy8gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuIGluIEZVIGNsYXNzaWMgICAgICAgICAgXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBvcmFjbGUgPSAnTk8gQU5ELi4uJztcbiAgICAgICAgICBpZiAoYm90Y2hlcyA+IDApIHtcbiAgICAgICAgICAgIGhhc2Z1bWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzdWJtc2cgPSBzdWJtc2cgKyAnICsgJyArIGJvdGNoZXMgKyAnKEJvdGNoKGVzKSkgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBvcmFjbGUgPSAnTk8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgb3JhY2xlID0gJ05PIEJVVC4uLic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBvcmFjbGUgPSAnWUVTIEJVVC4uLic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBvcmFjbGUgPSAnWUVTJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIG9yYWNsZSA9ICdZRVMgQU5ELi4uJztcbiAgICAgICAgICBpZiAoYm9vbnMgPiAwKSB7XG4gICAgICAgICAgICBoYXNjcml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1Ym1zZyA9IHN1Ym1zZyArICcgKyAnICsgYm9vbnMgKyAnKEJvb24ocykpICc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gXG4gICAgZWxzZSBpZiAoc3lzdGVtdmFyaWFudCA9PSBGVVhfQ09OU1QuU1lTVEVNX1ZBUklBTlRTLkFDVElPTl9UQUxFUyB8fCBzeXN0ZW12YXJpYW50ID09IEZVWF9DT05TVC5TWVNURU1fVkFSSUFOVFMuTkVPTl9DSVRZX09WRVJEUklWRSkge1xuICAgICAgLy8gdXNlIHRoZSBvcmFjbGUgZnJvbSBBY3Rpb25UYWxlcyhOZW9uIENpdHkgT3ZlcmRyaXZlKSBcbiAgICAgIGZsYXZvcnRleHQgPSAnVGhlIENoZWNrIHJldHVybmVkJztcbiAgICAgIC8vIHVzZSBoaWdoZXN0IGFjdGlvbiBkaWNlXG4gICAgICByb2xsdmFsdWUgPSBoaWdoZXN0O1xuICAgICAgc3VibXNnID0gJ1Jlc3VsdDogJyArIHJvbGx2YWx1ZTtcbiAgICAgIHN3aXRjaCAocm9sbHZhbHVlKSB7XG4gICAgICAgIC8vIGluIE5DTyBCT1RDSDogSWYgYWxsIHRoZSBhY3Rpb24gZGljZSBoYXZlIGJlZW4gY2FuY2VsZWQgb3V0LCBvciB0aGUgb25seSByZW1haW5pbmcgXG4gICAgICAgIC8vIGFjdGlvbiBkaWNlIGFyZSAx77+9cywgeW91IGhhdmUgY3JpdGljYWxseSBmYWlsZWQuIFRoaW5ncyBoYXZlIGdvbmUgdmVyeSB3cm9uZyBhbmQgXG4gICAgICAgIC8vIHRoZSBjb25zZXF1ZW5jZXMgd2lsbCBiZSB0ZXJyaWJsZS5cbiAgICAgICAgY2FzZSAwOlxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgb3JhY2xlID0gJ0JPVENIJztcbiAgICAgICAgICBoYXNmdW1ibGUgPSB0cnVlO1xuICAgICAgICAgIHN1Ym1zZyA9ICdSZXN1bHQ6ICcgKyBib3RjaF92YWx1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgb3JhY2xlID0gJ0ZBSUxVUkUnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBvcmFjbGUgPSAnUEFSVElBTCBTVUNDRVNTJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIG9yYWNsZSA9ICdTVUNDRVNTJztcbiAgICAgICAgICAvLyBjaGVjayBmb3IgYm9vblxuICAgICAgICAgIGJvb25zID0gYXJyRmluYWxzWzVdIC0gMTtcbiAgICAgICAgICBpZiAoYm9vbnMgPiAwKSB7XG4gICAgICAgICAgICBoYXNjcml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1Ym1zZyA9IHN1Ym1zZyArICcgKyAnICsgYm9vbnMgKyAnKEJvb24ocykpICc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gXG4gICAgZWxzZSBpZiAoc3lzdGVtdmFyaWFudCA9PSBGVVhfQ09OU1QuU1lTVEVNX1ZBUklBTlRTLkVBUlRIREFXTl9BR0VfT0ZfTEVHRU5EKSB7XG4gICAgICAvLyB1c2UgdGhlIG9yYWNsZSBmcm9tICBFREFvTFxuICAgICAgZmxhdm9ydGV4dCA9ICdCZWF0aW5nIHRoZSBPZGRzJztcbiAgICAgIFxuICAgICAgLy8gRURBb0wgd29ya2QgZGlmZmVyZW50IHRoYW4gdGhlIG90aGVycyBzbyBoZXJlIHdpbGwgYmUgYSBjb21wbGV0ZSByZS1yZWFkaW5nIG9mIGRpY2Ugcm9sbFxuICAgICAgcm9sbHZhbHVlPTE7IC8vIHNldCBkZWZhdWx0XG4gICAgICBpZiAoYWN0aW9uZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0cy5sZW5ndGggPiAwKSB7ICAgICAgICAgICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoOyBpKyspIHsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBhY3Rpb24gZGljZSBpcyB0aGUgYmFzZSBkaWVcbiAgICAgICAgICAgIHJvbGx2YWx1ZT0gYWN0aW9uZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1swXS5yZXN1bHQ7ICAgICAgICAgICAgXG4gICAgICAgICAgICBhY3Rpb25yZXN1bHQgPSAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvYWN0aW9uZGllX3ZhbHVlXycgKyBhY3Rpb25kaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdCArICcucG5nXCIgc3R5bGU9XCJtYXJnaW4tdG9wOi0zcHg7bWFyZ2luLWxlZnQ6MnB4O1wiPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vdyBsb29rIGZvciBib251cyBkaWNlIHRoYXQgaGF2ZSByZXN1bHQgNS02XG4gICAgICAgICAgICBpZihhY3Rpb25kaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdD49NSl7XG4gICAgICAgICAgICAgIC8vIGEgKyAgIFxuICAgICAgICAgICAgICBpZihyb2xsdmFsdWU8Nil7XG4gICAgICAgICAgICAgICAgcm9sbHZhbHVlPXJvbGx2YWx1ZSsxO1xuICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgYm9vbnM9Ym9vbnMrMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhY3Rpb25yZXN1bHQgPSBhY3Rpb25yZXN1bHQgKyAnJyArICc8aW1nIHNyYz1cInN5c3RlbXMvZW9hL2ltYWdlcy9hY3Rpb25kaWVfdmFsdWVfZnVkZ2Vfc3VjY2Vzcy5wbmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6LTNweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgYWN0aW9ucmVzdWx0ID0gYWN0aW9ucmVzdWx0ICsgJycgKyAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvYWN0aW9uZGllX3ZhbHVlX2JsYW5rLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDotM3B4O21hcmdpbi1sZWZ0OjJweDtcIj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBub3cgY2hlY2sgdGhlIHBlbmFsdHkgZGljZVxuICAgICAgaWYgKGRhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoID4gMCkgeyAgXG4gICAgICAgIGxldCBpbWFnZWZpbGU9Jyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGFuZ2VyZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIC8vIG5vdyBsb29rIGZvciBwZW5hbHR5IGRpY2UgdGhhdCBoYXZlIHJlc3VsdCA1LTZcbiAgICAgICAgICBpZihkYW5nZXJkaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdD49NSl7XG4gICAgICAgICAgICAvLyBhIC1cbiAgICAgICAgICAgIGlmKHJvbGx2YWx1ZT4xKXtcbiAgICAgICAgICAgICAgcm9sbHZhbHVlPXJvbGx2YWx1ZSAtMTtcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgYm90Y2hlcz1ib3RjaGVzKzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWFnZWZpbGU9J2RhbmdlcmRpZV92YWx1ZV9mdWRnZV9mYWlsJztcbiAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBpbWFnZWZpbGU9J2RhbmdlcmRpZV92YWx1ZV9ibGFuayc7XG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICBkYW5nZXJyZXN1bHQgPSAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvJyArIGltYWdlZmlsZSArICcucG5nXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjBweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGFuZ2VycmVzdWx0ID0gZGFuZ2VycmVzdWx0ICsgJycgKyAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvJyArIGltYWdlZmlsZSArICcucG5nXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjBweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgc3VibXNnID0gJ1Jlc3VsdDogJyArIHJvbGx2YWx1ZTtcbiAgICAgIHN3aXRjaCAocm9sbHZhbHVlKSB7ICAgICAgICBcbiAgICAgICAgY2FzZSAwOiAgICAgICAgIFxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgb3JhY2xlID0gJ05PLCBBTkQnOyAgXG4gICAgICAgICAgaWYoYm90Y2hlcz4wKXtcbiAgICAgICAgICAgIGhhc2Z1bWJsZSA9IHRydWU7XG4gICAgICAgICAgICBzdWJtc2cgPSBzdWJtc2cgKyAnICsgJyArIGJvdGNoZXMgKyAnKEJvdGNoKHMpKSAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG9yYWNsZSA9ICdOTyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBvcmFjbGUgPSAnTk8sIEJVVCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBvcmFjbGUgPSAnWUVTLCBCVVQnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgb3JhY2xlID0gJ1lFUyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBvcmFjbGUgPSAnWUVTLCBBTkQnOyBcbiAgICAgICAgICBpZihib29ucz4wKXtcbiAgICAgICAgICAgIGhhc2NyaXQgPSB0cnVlO1xuICAgICAgICAgICAgc3VibXNnID0gc3VibXNnICsgJyArICcgKyBib29ucyArICcoQm9vbihzKSkgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBcbiAgICBlbHNlIHtcbiAgICAgIC8vIFN0YW5kYXJkIEZVMiBvcmFjbGVcbiAgICAgIGZsYXZvcnRleHQgPSAnVGhlIE9yYWNsZSBhbnN3ZXJlZCc7XG4gICAgICByb2xsdmFsdWUgPSBoaWdoZXN0O1xuICAgICAgc3VibXNnID0gJ1Jlc3VsdDogJyArIHJvbGx2YWx1ZTtcbiAgICAgIHN3aXRjaCAocm9sbHZhbHVlKSB7XG4gICAgICAgIC8vIEluIEZVMiBCb3RjaDogaWYgYWxsIHRoZSAoIGFyZSBjYW5jZWxsZWQsIFxuICAgICAgICAvLyB0aGUgcmVzdWx0IGNvdW50cyBhcyBhIHJvbGwgb2Yg77+9Me+/vS5cbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIG9yYWNsZSA9ICdCT1RDSCc7XG4gICAgICAgICAgaGFzZnVtYmxlID0gdHJ1ZTtcbiAgICAgICAgICBzdWJtc2cgPSAnUmVzdWx0OiAnICsgYm90Y2hfdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBvcmFjbGUgPSAnTk8gQU5ELi4uJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIG9yYWNsZSA9ICdOTyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBvcmFjbGUgPSAnTk8gQlVULi4uJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIG9yYWNsZSA9ICdZRVMgQlVULi4uJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG9yYWNsZSA9ICdZRVMnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgb3JhY2xlID0gJ1lFUyBBTkQuLi4nO1xuICAgICAgICAgIC8vIGNoZWNrIGZvciBib29uXG4gICAgICAgICAgYm9vbnMgPSBhcnJGaW5hbHNbNV0gLSAxO1xuICAgICAgICAgIGlmIChib29ucyA+IDApIHtcbiAgICAgICAgICAgIGhhc2NyaXQgPSB0cnVlO1xuICAgICAgICAgICAgc3VibXNnID0gc3VibXNnICsgJyArICcgKyBib29ucyArICcoQm9vbihzKSkgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIC8vXG4gICAgLy8gcm9sbGluZyBhbmQgY2FsY3VsdGlvbiBjb21wbGV0ZSwgbm93IGZvciByZXN1bHQgZGlzcGxheVxuICAgIC8vXG4gICAgbGV0IHJvbGxkaWNlID0gJyc7XG4gICAgbGV0IHB1YmxpY21vZGU9ZmFsc2U7XG4gICAgbGV0IGJsaW5kbW9kZSA9IGZhbHNlO1xuICAgIGxldCBwcml2YXRlbW9kZT1mYWxzZTtcbiAgICBsZXQgZ21tb2RlPWZhbHNlO1xuICAgIGxldCBzZWxmbW9kZT1mYWxzZTtcbiAgICBsZXQgcm9sbHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicm9sbC10eXBlLXNlbGVjdFwiKTtcbiAgICBsZXQgcnR5cGV2YWx1ZSA9IHJvbGx0eXBlWzBdLnZhbHVlO1xuICAgIGxldCBydmFsdWUgPSBDT05TVC5DSEFUX01FU1NBR0VfVFlQRVMuT1RIRVI7XG4gICAgc3dpdGNoIChydHlwZXZhbHVlKSB7ICAgICAgLy9yb2xsLCBnbXJvbGwsYmxpbmRyb2xsLHNlbGZyb2xsXG4gICAgICBjYXNlIENPTlNULkRJQ0VfUk9MTF9NT0RFUy5QVUJMSUM6XG4gICAgICAgIHB1YmxpY21vZGU9dHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENPTlNULkRJQ0VfUk9MTF9NT0RFUy5QUklWQVRFOlxuICAgICAgICBnbW1vZGUgPSB0cnVlO1xuICAgICAgICBwcml2YXRlbW9kZT10cnVlO1xuICAgICAgICBydmFsdWUgPSAxO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ09OU1QuRElDRV9ST0xMX01PREVTLkJMSU5EOlxuICAgICAgICBydmFsdWUgPSAxO1xuICAgICAgICBibGluZG1vZGUgPSB0cnVlO1xuICAgICAgICBnbW1vZGUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ09OU1QuRElDRV9ST0xMX01PREVTLlNFTEY6XG4gICAgICAgIHNlbGZtb2RlPXRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gICAgXG4gICAgLy8gbm93IGlmIHRoZSBtb2R1bGUgZGljZS1zby1uaWNlIGlzIGFjdGl2YXRlZFxuICAgIGlmIChnYW1lLmRpY2UzZCAhPSBudWxsKSB7ICAgICAgICAgICAgXG4gICAgICAvL2R5bmFtaWMgYnVpbGluZyBkaWNlIHJvbGxzIGZvciBkM1xuICAgICAgbGV0IGRpY2UzZGljZT1bXTsgICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uc3NvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZGllcmVzdWx0PXtcbiAgICAgICAgICByZXN1bHQ6IGFjdGlvbnNzb3J0ZWRbaV0sXG4gICAgICAgICAgcmVzdWx0TGFiZWw6IGFjdGlvbnNzb3J0ZWRbaV0sXG4gICAgICAgICAgdHlwZTogXCJkNlwiLFxuICAgICAgICAgIHZlY3RvcnM6IFtdLFxuICAgICAgICAgIG9wdGlvbnM6IHtjb2xvcnNldDpcIndoaXRlXCJ9XG4gICAgICAgIH07XG4gICAgICAgIGRpY2UzZGljZS5wdXNoKGRpZXJlc3VsdCk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhbmdlcnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZGllcmVzdWx0PXtcbiAgICAgICAgICByZXN1bHQ6IGRhbmdlcnNvcnRlZFtpXSxcbiAgICAgICAgICByZXN1bHRMYWJlbDogZGFuZ2Vyc29ydGVkW2ldLFxuICAgICAgICAgIHR5cGU6IFwiZDZcIixcbiAgICAgICAgICB2ZWN0b3JzOiBbXSxcbiAgICAgICAgICBvcHRpb25zOiB7Y29sb3JzZXQ6XCJibGFja1wifVxuICAgICAgICB9O1xuICAgICAgICBkaWNlM2RpY2UucHVzaChkaWVyZXN1bHQpO1xuICAgICAgfSAgICAgICAgICAgICAgICAgIFxuICAgICAgbGV0IGRpY2UzZGRhdGE9IHtcbiAgICAgICAgdGhyb3dzOiBbe1xuICAgICAgICAgICAgZGljZTpkaWNlM2RpY2UgXG4gICAgICAgICAgfV1cbiAgICAgIH07ICAgICAgXG4gICAgICBsZXQgdXNlcj1nYW1lLnVzZXI7ICAgICAgXG4gICAgICBsZXQgc3luY2hyb25pemU9ZmFsc2U7XG4gICAgICBsZXQgd2hpc3BlcjtcbiAgICAgIGxldCBibGluZCA9IGZhbHNlOyAgICAgIFxuICAgICAgaWYocHVibGljbW9kZSl7XG4gICAgICAgIHN5bmNocm9uaXplPXRydWU7XG4gICAgICB9ICAgICAgXG4gICAgICBpZihwcml2YXRlbW9kZSl7XG4gICAgICAgIHN5bmNocm9uaXplPXRydWU7XG4gICAgICAgIHdoaXNwZXI9Q2hhdE1lc3NhZ2UuZ2V0V2hpc3BlclJlY2lwaWVudHMoJ0dNJyk7XG4gICAgICB9XG4gICAgICBpZiAoYmxpbmRtb2RlKXtcbiAgICAgICAgYmxpbmQ9dHJ1ZTtcbiAgICAgICAgc3luY2hyb25pemU9dHJ1ZTtcbiAgICAgICAgd2hpc3Blcj1DaGF0TWVzc2FnZS5nZXRXaGlzcGVyUmVjaXBpZW50cygnR00nKTtcbiAgICAgIH0gICAgICBcbiAgICAgIGlmKHNlbGZtb2RlKXtcbiAgICAgICAgc3luY2hyb25pemU9ZmFsc2U7XG4gICAgICB9ICAgICAgXG4gICAgICAvLyBhbHdheXMgc2hvdyBmb3IgZ21cbiAgICAgIGlmIChnYW1lLnVzZXIuaXNHTSkge1xuICAgICAgICBibGluZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgYXdhaXQgZ2FtZS5kaWNlM2Quc2hvdyhkaWNlM2RkYXRhLCB1c2VyLCBzeW5jaHJvbml6ZSwgd2hpc3BlciwgYmxpbmQpXG4gICAgfVxuICAgIFxuICAgIGxldCBtc2dpbWc7XG4gICAgbGV0IG1zZ25hbWU7XG4gICAgaWYgKGdhbWUudXNlci5jaGFyYWN0ZXIgIT0gbnVsbCkge1xuICAgICAgbXNnaW1nID0gZ2FtZS51c2VyLmNoYXJhY3Rlci5kYXRhLmltZztcbiAgICAgIG1zZ25hbWUgPSBnYW1lLnVzZXIuY2hhcmFjdGVyLmRhdGEubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnaW1nID0gZ2FtZS51c2VyLmF2YXRhcjtcbiAgICAgIG1zZ25hbWUgPSBnYW1lLnVzZXIubmFtZTtcbiAgICB9XG4gICAgLy8gZGV0ZXJtaW5lIHJ1bm5pbmcgc3lzdGVtICAgIFxuICAgIGxldCBydW5uaW5nc3lzdGVtbmFtZSA9IGdhbWUuc3lzdGVtLmlkOyAvLyBzYW5kYm94XG4gICAgaWYgKHJ1bm5pbmdzeXN0ZW1uYW1lID09ICdzYW5kYm94Jykge1xuICAgICAgLy8gc3BlY2lhbCBoYW5kbGluZyBmb3Igc2FuZGJveCAgICBcbiAgICAgIGxldCByb2xsRGF0YSA9IHtcbiAgICAgICAgdG9rZW46IHtcbiAgICAgICAgICBpbWc6IG1zZ2ltZyxcbiAgICAgICAgICBuYW1lOiBtc2duYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGFjdG9yOiBtc2duYW1lLFxuICAgICAgICBmbGF2b3I6IGZsYXZvcnRleHQsXG4gICAgICAgIGZvcm11bGE6ICcnLFxuICAgICAgICBtb2Q6ICcnLFxuICAgICAgICByZXN1bHQ6IG9yYWNsZSxcbiAgICAgICAgdXNlcjogZ2FtZS51c2VyLm5hbWUsXG4gICAgICAgIGNvbmRpdGlvbmFsOiBzdWJtc2csXG4gICAgICAgIGlzY3JpdDogaGFzY3JpdCxcbiAgICAgICAgaXNmdW1ibGU6IGhhc2Z1bWJsZSxcbiAgICAgICAgYmxpbmQ6IGJsaW5kbW9kZSxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25yZXN1bHQsXG4gICAgICAgIGRhbmdlcjogZGFuZ2VycmVzdWx0LFxuICAgICAgICBzdW1tYXJ5OiBzdWJtc2cgKyAnID0+ICcgKyBvcmFjbGUsXG4gICAgICAgIG1zZzogbXNnXG4gICAgICB9O1xuXG4gICAgICByZW5kZXJUZW1wbGF0ZShgc3lzdGVtcy8ke19tb2R1bGVfaWR9L3RlbXBsYXRlcy9mdXgtZGljZS1yb2xsZXItY2hhdG1zZy1zYW5kYm94Lmhic2AsIHJvbGxEYXRhKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSB7XG4gICAgICAgICAgY29udGVudDogaHRtbCxcbiAgICAgICAgICB0eXBlOiBydmFsdWUsXG4gICAgICAgICAgYmxpbmQ6IGJsaW5kbW9kZVxuICAgICAgICB9O1xuICAgICAgICBpZiAocnR5cGV2YWx1ZSA9PSBDT05TVC5ESUNFX1JPTExfTU9ERVMuUFJJVkFURSB8fCBydHlwZXZhbHVlID09IENPTlNULkRJQ0VfUk9MTF9NT0RFUy5CTElORCkge1xuICAgICAgICAgIG1lc3NhZ2VEYXRhLndoaXNwZXIgPSBDaGF0TWVzc2FnZS5nZXRXaGlzcGVyUmVjaXBpZW50cygnR00nKTtcbiAgICAgICAgfSBlbHNlIGlmIChydHlwZXZhbHVlID09IENPTlNULkRJQ0VfUk9MTF9NT0RFUy5TRUxGKSB7XG4gICAgICAgICAgLy8gd2hpc3BlciB0byBzZWxmICBcbiAgICAgICAgICBtZXNzYWdlRGF0YS53aGlzcGVyID0gQ2hhdE1lc3NhZ2UuZ2V0V2hpc3BlclJlY2lwaWVudHMoZ2FtZS51c2VyLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXdtZXNzYWdlID0gQ2hhdE1lc3NhZ2UuY3JlYXRlKG1lc3NhZ2VEYXRhKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBhbnkgb3RoZXIgc3lzdGVtXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tXG4gICAgICBsZXQgYWN0aW9ucm9sbHM9W107XG4gICAgICBsZXQgYXVnbWVudHJvbGxzPVtdO1xuICAgICAgbGV0IGRhbmdlcnJvbGxzPVtdO1xuICAgICAgXG4gICAgICBpZiAoc3lzdGVtdmFyaWFudCA9PSBGVVhfQ09OU1QuU1lTVEVNX1ZBUklBTlRTLkVBUlRIREFXTl9BR0VfT0ZfTEVHRU5EKSB7XG4gICAgICAgIC8vIGRvbiB1c2UgdGhlIHNvcnRlZCBhcnJheVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgZGllcmVzdWx0PXtcbiAgICAgICAgICAgIGNsYXNzZXM6J2RpZSBkNicsXG4gICAgICAgICAgICByZXN1bHQ6IGFjdGlvbmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBhY3Rpb25yb2xscy5wdXNoKGRpZXJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdWdtZW50ZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBkaWVyZXN1bHQ9e1xuICAgICAgICAgICAgY2xhc3NlczonZGllIGQ4JyxcbiAgICAgICAgICAgIHJlc3VsdDogYXVnbWVudGRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBhdWdtZW50cm9sbHMucHVzaChkaWVyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGFuZ2VyZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBkaWVyZXN1bHQ9e1xuICAgICAgICAgICAgY2xhc3NlczonZGllIGQ2JyxcbiAgICAgICAgICAgIHJlc3VsdDogZGFuZ2VyZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIGRhbmdlcnJvbGxzLnB1c2goZGllcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0gZWxzZXsgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zdW5zb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgZGllcmVzdWx0PXtcbiAgICAgICAgICAgIGNsYXNzZXM6J2RpZSBkNicsXG4gICAgICAgICAgICByZXN1bHQ6IGFjdGlvbnN1bnNvcnRlZFtpXVxuICAgICAgICAgIH07XG4gICAgICAgICAgYWN0aW9ucm9sbHMucHVzaChkaWVyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXVnbWVudHVuc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGRpZXJlc3VsdD17XG4gICAgICAgICAgICBjbGFzc2VzOidkaWUgZDgnLFxuICAgICAgICAgICAgcmVzdWx0OiBhdWdtZW50dW5zb3J0ZWRbaV1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGF1Z21lbnRyb2xscy5wdXNoKGRpZXJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYW5nZXJ1bnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBkaWVyZXN1bHQ9e1xuICAgICAgICAgICAgY2xhc3NlczonZGllIGQ2JyxcbiAgICAgICAgICAgIHJlc3VsdDogZGFuZ2VydW5zb3J0ZWRbaV1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGRhbmdlcnJvbGxzLnB1c2goZGllcmVzdWx0KTtcbiAgICAgICAgfSAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBwYXJ0cz1bXG4gICAgICAgIHtcbiAgICAgICAgICBmYWNlczo2LFxuICAgICAgICAgIGZsYXZvcjond2hpdGUnLFxuICAgICAgICAgIGZvcm11bGE6J0FjdGlvbiBEaWNlJyxcbiAgICAgICAgICByb2xsczphY3Rpb25yb2xscyxcbiAgICAgICAgICB0b3RhbDphY3Rpb25kaWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmYWNlczo4LFxuICAgICAgICAgIGZsYXZvcjonZ3JlZW4nLFxuICAgICAgICAgIGZvcm11bGE6J0F1Z21lbnQgRGljZScsXG4gICAgICAgICAgcm9sbHM6YXVnbWVudHJvbGxzLFxuICAgICAgICAgIHRvdGFsOmF1Z21lbnRkaWNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmYWNlczo2LFxuICAgICAgICAgIGZsYXZvcjonYmxhY2snLFxuICAgICAgICAgIGZvcm11bGE6J0VkZ2UgRGljZScsXG4gICAgICAgICAgcm9sbHM6ZGFuZ2Vycm9sbHMsXG4gICAgICAgICAgdG90YWw6ZGFuZ2VyZGljZVxuICAgICAgICB9XG4gICAgICBdO1xuICAgICAgXG4gICAgICBsZXQgcm9sbERhdGEgPSB7XG4gICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgaW1nOiBtc2dpbWcsXG4gICAgICAgICAgbmFtZTogbXNnbmFtZVxuICAgICAgICB9LFxuICAgICAgICBhY3RvcjogbXNnbmFtZSxcbiAgICAgICAgZmxhdm9yOiBmbGF2b3J0ZXh0LFxuICAgICAgICBmb3JtdWxhOiBzdWJtc2csXG4gICAgICAgIHRvdGFsOm9yYWNsZSAsXG4gICAgICAgIHBhcnRzOnBhcnRzLFxuICAgICAgICBcbiAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgcmVzdWx0OiBvcmFjbGUgLFxuICAgICAgICB1c2VyOiBnYW1lLnVzZXIubmFtZSxcbiAgICAgICAgY29uZGl0aW9uYWw6IHN1Ym1zZyxcbiAgICAgICAgaXNjcml0OiBoYXNjcml0LFxuICAgICAgICBpc2Z1bWJsZTogaGFzZnVtYmxlLFxuICAgICAgICBibGluZDogYmxpbmRtb2RlLFxuICAgICAgICBhdWdtZW50OiBhdWdtZW50cmVzdWx0LFxuICAgICAgICBhY3Rpb246IGFjdGlvbnJlc3VsdCxcbiAgICAgICAgZGFuZ2VyOiBkYW5nZXJyZXN1bHQsXG4gICAgICAgIHN1bW1hcnk6IHN1Ym1zZyArICcgPT4gJyArIG9yYWNsZSxcbiAgICAgICAgbXNnOiBtc2dcbiAgICAgIH07XG5cbiAgICAgIGNvbnNvbGUubG9nKHJvbGxEYXRhKTtcbiAgICAgIHJlbmRlclRlbXBsYXRlKGBzeXN0ZW1zLyR7X21vZHVsZV9pZH0vdGVtcGxhdGVzL2Z1eC1kaWNlLXJvbGxlci1jaGF0bXNnLWNvcmUuaGJzYCwgcm9sbERhdGEpLnRoZW4oaHRtbCA9PiB7XG4gICAgICAgIGxldCBtZXNzYWdlRGF0YSA9IHtcbiAgICAgICAgICBjb250ZW50OiBodG1sLFxuICAgICAgICAgIHR5cGU6IHJ2YWx1ZSxcbiAgICAgICAgICBibGluZDogYmxpbmRtb2RlXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBpZiAocnR5cGV2YWx1ZSA9PSBDT05TVC5ESUNFX1JPTExfTU9ERVMuUFJJVkFURSB8fCBydHlwZXZhbHVlID09IENPTlNULkRJQ0VfUk9MTF9NT0RFUy5CTElORCkge1xuICAgICAgICAgIG1lc3NhZ2VEYXRhLndoaXNwZXIgPSBDaGF0TWVzc2FnZS5nZXRXaGlzcGVyUmVjaXBpZW50cygnR00nKTtcbiAgICAgICAgfSBlbHNlIGlmIChydHlwZXZhbHVlID09IENPTlNULkRJQ0VfUk9MTF9NT0RFUy5TRUxGKSB7XG4gICAgICAgICAgLy8gd2hpc3BlciB0byBzZWxmICBcbiAgICAgICAgICBtZXNzYWdlRGF0YS53aGlzcGVyID0gQ2hhdE1lc3NhZ2UuZ2V0V2hpc3BlclJlY2lwaWVudHMoZ2FtZS51c2VyLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXdtZXNzYWdlID0gQ2hhdE1lc3NhZ2UuY3JlYXRlKG1lc3NhZ2VEYXRhKTtcbiAgICAgIH0pOyAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4gcm9sbHZhbHVlICsgYm9vbnM7XG5cbiAgfVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBlb2EgfSBmcm9tIFwiLi9tb2R1bGUvY29uZmlnLmpzXCI7XG5pbXBvcnQgeyBUZW1wbGF0ZVByZWxvYWRlciB9IGZyb20gXCIuL21vZHVsZS9oZWxwZXIvVGVtcGxhdGVQcmVsb2FkZXJcIjtcbmltcG9ydCB7IEVvQUJyZWVkU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvQnJlZWRTaGVldFwiO1xuaW1wb3J0IHsgRW9BUHJvZmVzc2lvblNoZWV0IH0gZnJvbSBcIi4vbW9kdWxlL2l0ZW1zL1Byb2Zlc3Npb25TaGVldFwiO1xuaW1wb3J0IHsgRW9BT3JpZ2luU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvT3JpZ2luU2hlZXRcIjtcbmltcG9ydCB7IEVvQUZhY3Rpb25TaGVldCB9IGZyb20gXCIuL21vZHVsZS9pdGVtcy9GYWN0aW9uU2hlZXRcIjtcbmltcG9ydCB7IEVvQUFjdG9yU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvYWN0b3JzL0FjdG9yU2hlZXRcIjtcbmltcG9ydCB7IEVvQVNraWxsU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvU2tpbGxTaGVldFwiO1xuaW1wb3J0IHsgRW9BU3VwcGx5U2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvU3VwcGx5U2hlZXRcIjtcbmltcG9ydCB7IEVvQUxvYWRvdXRTaGVldCB9IGZyb20gXCIuL21vZHVsZS9pdGVtcy9Mb2Fkb3V0U2hlZXRcIjtcbmltcG9ydCAqIGFzIERpY2UgZnJvbSBcIi4vaGVscGVycy9kaWNlLmpzXCI7XG5cbkhvb2tzLm9uY2UoXCJpbml0XCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PUVkZ2Ugb2YgQW5hcmNoeT09PT09PT09PT09PT09PT09PT09PVwiKVxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PUxvYWQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpXG4gICAgQ09ORklHW1wiZW9hXCJdID0gZW9hO1xuXG4gICAgSXRlbXMudW5yZWdpc3RlclNoZWV0KFwiY29yZVwiLCBJdGVtU2hlZXQpO1xuICAgIEl0ZW1zLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BQnJlZWRTaGVldCwge1xuICAgICAgICB0eXBlczogW1wiYnJlZWRcIl0sXG4gICAgICAgIG1ha2VEZWZhdWx0OiB0cnVlXG4gICAgfSk7XG4gICAgSXRlbXMucmVnaXN0ZXJTaGVldChcImVvYVwiLCBFb0FQcm9mZXNzaW9uU2hlZXQsIHtcbiAgICAgICAgdHlwZXM6IFtcInByb2Zlc3Npb25cIl0sXG4gICAgICAgIG1ha2VEZWZhdWx0OiB0cnVlXG4gICAgfSk7XG4gICAgSXRlbXMucmVnaXN0ZXJTaGVldChcImVvYVwiLCBFb0FPcmlnaW5TaGVldCwge1xuICAgICAgICB0eXBlczogW1wib3JpZ2luXCJdLFxuICAgICAgICBtYWtlRGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1zLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BRmFjdGlvblNoZWV0LCB7XG4gICAgICAgIHR5cGVzOiBbXCJmYWN0aW9uXCJdLFxuICAgICAgICBtYWtlRGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1zLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BU2tpbGxTaGVldCwge1xuICAgICAgICB0eXBlczogW1wic2tpbGxcIl0sXG4gICAgICAgIG1ha2VEZWZhdWx0OiB0cnVlXG4gICAgfSk7XG4gICAgSXRlbXMucmVnaXN0ZXJTaGVldChcImVvYVwiLCBFb0FTdXBwbHlTaGVldCwge1xuICAgICAgICB0eXBlczogW1wic3VwcGx5XCJdLFxuICAgICAgICBtYWtlRGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1zLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BTG9hZG91dFNoZWV0LCB7XG4gICAgICAgIHR5cGVzOiBbXCJsb2Fkb3V0XCJdLFxuICAgICAgICBtYWtlRGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgQWN0b3JzLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BQWN0b3JTaGVldCwge1xuICAgICAgICB0eXBlczogW1wiaGVyb1wiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIGF3YWl0IFRlbXBsYXRlUHJlbG9hZGVyLnByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCk7XG4gICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihcImZhY2VcIiwgRGljZS5kaWNlVG9GYWNlcyk7XG4gICAgLy8gYXdhaXQgVGVtcGxhdGVQcmVsb2FkZXIucHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKTtcbiAgICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKFwiZmFjZTJcIiwgRGljZS5kaWNlVG9GYWNlc0FsdCk7XG59KTtcblxuSG9va3Mub25jZShcInJlYWR5XCIsIGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PUVkZ2Ugb2YgQW5hcmNoeT09PT09PT09PT09PT09PT09PT09PT09XCIpXG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVJlYWR5PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxuXG59KTtcblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG5cbiAgICAgICAgaWYgKG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiYXBwbHlcIikge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0ZW1wbGF0ZSBpbiBfdGVtcGxhdGVDYWNoZSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX3RlbXBsYXRlQ2FjaGUsIHRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RlbXBsYXRlQ2FjaGVbdGVtcGxhdGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVGVtcGxhdGVQcmVsb2FkZXIucHJlbG9hZEhhbmRsZWJhcnNUZW1wbGF0ZXMoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwcGxpY2F0aW9uIGluIHVpLndpbmRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh1aS53aW5kb3dzLCBhcHBsaWNhdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLndpbmRvd3NbYXBwbGljYXRpb25dLnJlbmRlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==