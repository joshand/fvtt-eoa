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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\n    .biography-editor .editor {\n        min-height: 100px !important;\n        height: 100%;\n        background-color: lightgray;\n        border: 1px solid darkgray;\n    }\n    .editor {\n        min-height: 100px !important;\n        height: 100px;\n        background-color: lightgray;\n        border: 1px solid darkgray;\n    }\n    td {\n        padding: 2px !important;\n    }\n    th {\n        text-align: left;\n    }\n    label.checkbox {\n        padding: 0;\n        height: 40px;\n        line-height: 0 !important;\n    }\n    .checkbox {\n        display: flex;\n        align-items: center;\n    }\n    .checkbox input[type=\"radio\"] {\n        position: relative;\n        top: 0; /* Adjust the vertical position as needed */\n        margin-right: 5px; /* Adjust the spacing between radio button and content */\n    }\n    form .form-group label {\n        line-height: 15px;\n    }\n    .number-spinner .input-group-btn:last-child>.btn {\n        margin-left: -1px;\n        border-top-left-radius: 0;\n        border-bottom-left-radius: 0;\n    }\n    .number-spinner .form-control {\n        width: 30px;\n        text-align: center;\n    }\n    .btn-plus,\n    .btn-minus {\n        width: 20px;\n    }\n    .content {\n        display: flex;\n        align-items: center;\n        /* Style the content div as needed */\n    }\n    .badge {\n        background-color: blue; /* Background color of the badge */\n        color: #fff; /* Text color of the badge */\n        border-radius: 50%; /* To make the badge round */\n        border: 1px solid white;\n        width: 25px; /* Adjust width and height as needed */\n        height: 25px;\n        text-align: center; /* Center the text */\n        margin-left: 5px; /* Adjust margin to place it next to the label */\n        padding-top: 3px;\n        font-size: small;\n    }\n</style>\n\n<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\" style=\"flex: none !important;\">\n    {{!-- Sheet Header --}}\n    <header class=\"sheet-header\">\n        {{!-- Header stuff goes here --}}\n        <img class=\"profile-img\" src=\"{{actor.img}}\" data-edit=\"img\" title=\"{{actor.name}}\" height=\"100\" width=\"100\" style=\"height: 128px !important; width: 128px !important;\"/>\n        <div class=\"header-fields\">\n            <h1 class=\"charname\">\n                <div class=\"form-fields flex1\" style=\"margin: 0 !important;\">\n                    <input name=\"name\" type=\"text\" value=\"{{actor.name}}\" placeholder=\"Name\" style=\"width:calc(100% - 110px)\"/>\n                    <input name=\"system.current_tl\" type=\"text\" value=\"{{data.system.current_tl}}\" placeholder=\"\" style=\"width:50px;\"/>\n                </div>\n            </h1>\n            {{#if has_stats}}\n                {{#each breed.0.system.skills as | skill |}}\n                    {{#if (eq skill.name ../data.system.breed_lifepath)}}\n                    <h3 style=\"padding: 0 15px; border-bottom: none !important;\">\n                        <table style=\"border: 1px black solid\">\n                            <tr>\n                                <td>\n                                    <label>STR</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.str}}</label>\n                                </td>\n                                <td>\n                                    <label>STA</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.sta}}</label>\n                                </td>\n                                <td>\n                                    <label>AGI</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.agi}}</label>\n                                </td>\n                                <td>\n                                    <label>INT</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.int}}</label>\n                                </td>\n                                <td>\n                                    <label>SEN</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.sen}}</label>\n                                </td>\n                                <td>\n                                    <label>PSY</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{skill.psy}}</label>\n                                </td>\n                            </tr>\n                        </table>\n                    </h3>\n                    {{/if}}\n                {{/each}}\n            {{else}}\n                <h3 style=\"padding: 0 15px; border-bottom: none !important;\">\n                    <table style=\"border: 1px black solid\">\n                        <tr>\n                            <td>\n                                <label>STR</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>STA</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>AGI</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>INT</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>SEN</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                            <td>\n                                <label>PSY</label><label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">0</label>\n                            </td>\n                        </tr>\n                    </table>\n                </h3>\n            {{/if}}\n\n            <h3 style=\"padding: 0 15px; border-bottom: none !important;\">\n                <table style=\"border: 1px black solid\">\n                    <tr>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>HP</label>\n                                <input type=\"text\" name=\"system.current_hp\" value=\"{{data.system.current_hp}}\" placeholder=\"0\" style=\"width: 45px;\">\n                                <label>/</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{max_hp}}</label>\n                                {{#if (eq breed.0.system.bonus.hp 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.hp}}</div>\n                                {{/if}}\n                                <input type=\"checkbox\" name=\"system.safety_on\" {{checked data.system.safety_on}}>\n                                <label>Safety</label>\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>NP</label>\n                                <input type=\"text\" name=\"system.current_np\" value=\"{{data.system.current_np}}\" placeholder=\"0\" style=\"width: 45px;\">\n                                <label>/</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{max_np}}</label>\n                                {{#if (eq breed.0.system.bonus.np 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.np}}</div>\n                                {{/if}}\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>NCU</label>\n<!--                                <input type=\"text\" name=\"system.current_ncu\" value=\"{{data.system.current_ncu}}\" placeholder=\"0\" style=\"width: 45px;\">-->\n                                    <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{consumed_ncu}}</label>\n                                <label>/</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{max_ncu}}</label>\n                                {{#if (eq breed.0.system.bonus.ncu 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.ncu}}</div>\n                                {{/if}}\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n            </h3>\n\n            <h3 style=\"padding: 0 15px\">\n                <table style=\"border: 1px black solid\">\n                    <tr>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>SP</label>\n                                <input type=\"text\" name=\"system.current_sp\" value=\"{{data.system.current_sp}}\" placeholder=\"0\" style=\"width: 45px;\">\n                                <label>/</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{max_sp}}</label>\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>Init</label>\n                                <label style=\"margin-left:8px; border:2px black dashed; padding:0 10px;\">{{init}}</label>\n                                {{#if (eq breed.0.system.bonus.init 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.init}}</div>\n                                {{/if}}\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1 content\">\n                                <label>IP</label>\n                                <input type=\"text\" name=\"system.current_ip\" value=\"{{data.system.current_ip}}\" placeholder=\"0\" style=\"width: 45px;\">\n                                {{#if (eq breed.0.system.bonus.ip 0)}}\n                                {{else}}\n                                    <div class=\"badge\">+{{breed.0.system.bonus.ip}}</div>\n                                {{/if}}\n                            </div>\n                        </td>\n                        <td>\n                            <div class=\"form-fields flex1\">\n                                <label>Credits</label>\n                                <input type=\"text\" name=\"system.current_money\" value=\"{{data.system.current_money}}\" placeholder=\"0\" style=\"width: 45px;\">\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n            </h3>\n<!--            <h1 class=\"charalias\"><input name=\"system.alias\" type=\"text\" value=\"{{data.system.alias}}\" placeholder=\"Alias\"/></h1>-->\n\n<!--                <div class=\"form-group\">-->\n<!--                    <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">-->\n<!--                        <label>Breed</label>-->\n<!--                        {{#if (eq breed.length 0)}}-->\n<!--                        <img src=\"icons/svg/mystery-man.svg\" />-->\n<!--                        <label>Unspecified</label>-->\n<!--                        {{else}}-->\n<!--                        <img src=\"{{breed.0.img}}\" />-->\n<!--                        <label>{{breed.0.name}}</label>-->\n<!--                        {{/if}}-->\n<!--                    </div>-->\n<!--                    <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">-->\n<!--                        <label>Origin</label>-->\n<!--                        {{#if (eq origin.length 0)}}-->\n<!--                        <img src=\"icons/svg/mystery-man.svg\" />-->\n<!--                        <label>Unspecified</label>-->\n<!--                        {{else}}-->\n<!--                        <img src=\"{{origin.0.img}}\" />-->\n<!--                        <label>{{origin.0.name}}</label>-->\n<!--                        {{/if}}-->\n<!--                    </div>-->\n<!--                    <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">-->\n<!--                        <label>Profession</label>-->\n<!--                        {{#if (eq profession.length 0)}}-->\n<!--                        <img src=\"icons/svg/mystery-man.svg\" />-->\n<!--                        <label>Unspecified</label>-->\n<!--                        {{else}}-->\n<!--                        <img src=\"{{profession.0.img}}\" />-->\n<!--                        <label>{{profession.0.name}}</label>-->\n<!--                        {{/if}}-->\n<!--                    </div>-->\n<!--                    <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">-->\n<!--                        <label>Faction</label>-->\n<!--                        {{#if (eq faction.length 0)}}-->\n<!--                        <img src=\"icons/svg/mystery-man.svg\" />-->\n<!--                        <label>Unspecified</label>-->\n<!--                        {{else}}-->\n<!--                        <img src=\"{{faction.0.img}}\" />-->\n<!--                        <label>{{faction.0.name}}</label>-->\n<!--                        {{/if}}-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--            <div class=\"resources grid grid-2col\">-->\n<!--                <div class=\"resource flex-group-center\">-->\n<!--                    <label for=\"system.health.value\" class=\"resource-label\">Health</label>-->\n<!--                    <div class=\"resource-content flexrow flex-center flex-between\">-->\n<!--                        <input type=\"text\" name=\"system.health.value\" value=\"{{system.health.value}}\" data-dtype=\"Number\"/>-->\n<!--                        <span> / </span>-->\n<!--                        <input type=\"text\" name=\"system.health.max\" value=\"{{system.health.max}}\" data-dtype=\"Number\"/>-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--                <div class=\"resource flex-group-center\">-->\n<!--                    <label for=\"system.power.value\" class=\"resource-label\">Power</label>-->\n<!--                    <div class=\"resource-content flexrow flex-center flex-between\">-->\n<!--                        <input type=\"text\" name=\"system.power.value\" value=\"{{system.power.value}}\" data-dtype=\"Number\"/>-->\n<!--                        <span> / </span>-->\n<!--                        <input type=\"text\" name=\"system.power.max\" value=\"{{system.power.max}}\" data-dtype=\"Number\"/>-->\n<!--                    </div>-->\n<!--                </div>-->\n\n<!--            </div> {{!&#45;&#45; closes the \"resources\" div &#45;&#45;}}-->\n\n<!--            <div class=\"abilities grid grid-3col\">-->\n<!--                {{#each system.abilities as |ability key|}}-->\n<!--                <div class=\"ability flexrow flex-group-center\">-->\n<!--                    <label for=\"system.abilities.{{key}}.value\" class=\"resource-label\">{{key}}</label>-->\n<!--                    <input type=\"text\" name=\"system.abilities.{{key}}.value\" value=\"{{ability.value}}\" data-dtype=\"Number\"/>-->\n<!--                    <span class=\"ability-mod\">{{numberFormat ability.mod decimals=0 sign=true}}</span>-->\n<!--                </div>-->\n<!--                {{/each}}-->\n<!--            </div>-->\n\n        </div> {{!-- closes the \"header-fields\" div --}}\n    </header>\n\n    {{!-- Sheet Tab Navigation --}}\n    <nav class=\"sheet-navigation tabs form-group\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Description</label>\n                <img src=\"systems/eoa/icons/history.png\" />\n                <label>&nbsp;<br>&nbsp;</label>\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"breed\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Breed</label>\n                {{#if (eq breed.length 0)}}\n                <img src=\"icons/svg/mystery-man.svg\" />\n                <label>Unspecified</label>\n                {{else}}\n                <img src=\"{{breed.0.img}}\" />\n                <label>{{breed.0.name}}<br>&nbsp;</label>\n                {{/if}}\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"origin\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Origin</label>\n                {{#if (eq origin.length 0)}}\n                <img src=\"icons/svg/mystery-man.svg\" />\n                <label>Unspecified</label>\n                {{else}}\n                <img src=\"{{origin.0.img}}\" />\n                <label>{{origin.0.name}}<br>&nbsp;</label>\n                {{/if}}\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"profession\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Profession</label>\n                {{#if (eq profession.length 0)}}\n                <img src=\"icons/svg/mystery-man.svg\" />\n                <label>Unspecified</label>\n                {{else}}\n                <img src=\"{{profession.0.img}}\" />\n                <label>{{profession.0.name}}<br>&nbsp;</label>\n                {{/if}}\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"faction\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Faction</label>\n                {{#if (eq faction.length 0)}}\n                <img src=\"icons/svg/mystery-man.svg\" />\n                <label>Unspecified</label>\n                {{else}}\n                <img src=\"{{faction.0.img}}\" />\n                <label>{{faction.0.name}}<br>&nbsp;</label>\n                {{/if}}\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"loadout\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Loadout</label>\n                {{#if (eq loadout.length 0)}}\n                <img src=\"icons/svg/mystery-man.svg\" />\n                <label>Unspecified<br>&nbsp;</label>\n                {{else}}\n                <img src=\"{{loadout.0.img}}\" />\n                <label>{{loadout.0.name}}</label>\n                {{/if}}\n            </div>\n        </a>\n        <a class=\"item\" data-tab=\"items\" style=\"padding: 10px;\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label>Items</label>\n                <img src=\"systems/eoa/icons/items.png\" />\n                <label>&nbsp;<br>&nbsp;</label>\n            </div>\n        </a>\n    </nav>\n\n    {{!-- Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Biography Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n            <div class=\"form-fields flex1 biography-editor\" style=\"flex-direction: column !important;\">\n                <label>Biography</label>\n                {{editor data.system.biography target=\"system.biography\" button=true owner=owner editable=editable}}\n\n                <label>Relationships</label>\n                {{editor data.system.relationships target=\"system.relationships\" button=true owner=owner editable=editable}}\n            </div>\n        </div>\n\n        {{!-- Breed Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"breed\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label><strong>Description</strong></label>\n                {{editor breed.0.system.description.value target=\"breed.0.system.description.value\" button=true owner=owner editable=false}}\n                <label><strong>Lifepath Table</strong> (Roll 2d6 or Choose)</label><br>\n                {{radioBoxes \"system.breed_lifepath\" breed_dict checked=breed_lifepath localize=true}}\n<!--                <table><tr><td>&nbsp;</td><td>Range</td><td>Name</td><td>Description</td></tr>-->\n<!--                {{#each breed.0.system.skills as | skill |}}-->\n<!--                    <tr>-->\n<!--                        <td><input type=\"radio\" name=\"data.system.breed_lifepath\" value=\"{{data.system.breed_lifepath}}\"></td>-->\n<!--                        <td>{{skill.low}}-{{skill.high}}</td>-->\n<!--                        <td>{{skill.name}}</td>-->\n<!--                        <td>{{skill.description}}</td>-->\n<!--                    </tr>-->\n<!--                    <tr>-->\n<!--                        <td>&nbsp;</td>-->\n<!--                        <td>&nbsp;</td>-->\n<!--                        <td colspan=\"2\"><strong>Attributes:</strong> Str {{skill.str}}, Sta {{skill.sta}}, Agi {{skill.agi}}, Int {{skill.int}}, Sen {{skill.sen}}, Psy {{skill.psy}}</td>-->\n<!--                    </tr>-->\n<!--                {{/each}}-->\n<!--                </table>-->\n            </div>\n        </div>\n\n        {{!-- Origin Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"origin\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label><strong>Description</strong></label>\n                {{editor origin.0.system.description.value target=\"origin.0.system.description.value\" button=true owner=owner editable=false}}\n                <div class=\"form-fields flex1\">\n                    <label><strong>Starting Money: </strong></label>\n                    <label>{{origin.0.system.starting_money}}</label>\n                </div>\n                <div class=\"form-fields flex1\">\n                    <label><strong>Origin Skills (Choose 3): </strong></label>\n                    {{#each origin.0.system.origin_skills as | oskill |}}\n                        <input type=\"checkbox\" name=\"system.origin_skills.{{oskill}}\" {{checked (lookup ../data.system.origin_skills oskill)}}>{{oskill}}\n                    {{/each}}\n                </div>\n                <label><strong>Ideals</strong></label><ul>\n                {{#each origin.0.system.ideals as | skill |}}\n                    <li><label>{{skill.description}}</label></li>\n                {{/each}}\n                </ul>\n                <label><strong>Lifepath Table</strong> (Roll 2d6 or Choose)</label>\n                {{radioBoxes \"system.origin_lifepath\" origin_dict checked=origin_lifepath localize=true}}\n            </div>\n        </div>\n\n        {{!-- Profession Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"profession\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label><strong>Description</strong></label>\n                {{editor profession.0.system.description.overview target=\"profession.0.system.description.overview\" button=true owner=owner editable=false}}\n                <label><strong>Signature Resource</strong></label>\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex1\">\n                        {{editor profession.0.system.signature_resource target=\"profession.0.system.signature_resource\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor profession.0.system.signature_resource_desc target=\"profession.0.system.signature_resource_desc\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor profession.0.system.signature_resource_effect target=\"profession.0.system.signature_resource_effect\" button=true owner=owner editable=false}}\n                    </div>\n                </div>\n                <label><strong>Flashback Ability</strong></label>\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex1\">\n                        {{editor profession.0.system.flashback_ability target=\"profession.0.system.flashback_ability\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor profession.0.system.flashback_trigger target=\"profession.0.system.flashback_trigger\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex3\">\n                        {{editor profession.0.system.flashback_effect target=\"profession.0.system.flashback_effect\" button=true owner=owner editable=false}}\n                    </div>\n                </div>\n                <label><strong>Signature Traits</strong></label>\n                {{#each profession.0.system.signature_traits as | skill |}}\n                <div class=\"form-group\">\n                    <div class=\"form-fields flex1\">\n                        {{editor skill.name target=\"skill.name\" button=true owner=owner editable=false}}\n                    </div>\n                    <div class=\"form-fields flex4\">\n                        {{editor skill.description target=\"skill.description\" button=true owner=owner editable=false}}\n                    </div>\n                </div>\n                {{/each}}\n                <label><strong>Skill List</strong> (Starting characters divide 5 points around this list. No skill can be higher than 2 at character creation)</label>\n                <table><tr><td>&nbsp;</td><td>Name</td><td>Description</td></tr>\n                {{#each profession.0.system.skill_list as | sk |}}\n                    <tr>\n                        <td style=\"width: 100px;\">\n                            <div class=\"input-group number-spinner\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default btn-minus\" type=\"button\">-</button>\n                                </span>\n                                <input type=\"text\" name=\"system.skill.{{sk._id}}.rank\" value=\"{{lookup (lookup ../data.system.skill sk._id) 'rank' }}\"\n                                       placeholder=\"0\" class=\"form-control text-center txt-skill\" min=\"0\" max=\"10\"\n                                       data-skill=\"{{name}}\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default btn-plus\" type=\"button\">+</button>\n                                </span>\n                            </div>\n                        </td>\n                        <td>{{sk.name}}</td>\n                        <td>{{{sk.description}}}</td>\n                    </tr>\n                {{/each}}\n                </table>\n\n                <label><strong>Nano Skill List</strong> (Starting characters have 2 points to spend on this, gaining a nano program from the selected skill)</label>\n                <table><tr><td>&nbsp;</td><td>Name</td><td>Nanoprograms</td></tr>\n                {{#each profession.0.system.nano_skill_list as | sk |}}\n                    <tr>\n                        <td style=\"width: 100px;\">\n                            <div class=\"input-group number-spinner\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default btn-minus\" type=\"button\">-</button>\n                                </span>\n                                <input type=\"text\" name=\"system.nanoskill.{{sk._id}}.rank\" value=\"{{lookup (lookup ../data.system.nanoskill sk._id) 'rank' }}\"\n                                       placeholder=\"0\" class=\"form-control text-center txt-skill\" min=\"0\" max=\"10\"\n                                       data-skill=\"{{name}}\">\n                                <span class=\"input-group-btn\">\n                                    <button class=\"btn btn-default btn-plus\" type=\"button\">+</button>\n                                </span>\n                            </div>\n                        </td>\n                        <td>{{sk.name}}<div style=\"text-transform: uppercase;\">{{sk.attributes}}</div></td>\n                        <td>\n                            <table><tr><td>&nbsp;</td><td>Name</td><td>Description</td></tr>\n                            {{#each sk.nanoprograms as | np |}}\n                                <tr>\n                                    <td style=\"width:60px;\">\n                                        <div class=\"form-fields flex1\">\n                                            <input type=\"checkbox\" name=\"system.nanoprogram.{{np._id}}\" {{checked (lookup ../../data.system.nanoprogram np._id)}}>\n                                            {{#if (lookup ../../data.system.nanoprogram np._id)}}\n                                            <img src=\"systems/eoa/images/die_icon.png\" alt=\"Roll Nanoprogram\" style=\"border: none !important;width: 20px;height: 20px;\" class=\"np-run\" data-actor=\"{{../../actor._id}}\" data-np-name=\"{{np.name}}\" data-np-cost=\"{{np.np}}\" {{#each sk.attributes as | attr |}} data-name{{@index}}=\"{{attr}}\" data-attr{{@index}}=\"{{lookup ../../../attrs attr}}\"{{/each}}>\n                                            {{/if}}\n                                        </div>\n                                    </td>\n                                    <td style=\"width:100px;\">\n                                        {{np.name}}\n                                    </td>\n                                    <td>\n                                        {{np.effect}} (NP: {{np.np}}, NCU: {{np.ncu}})\n                                    </td>\n                                </tr>\n                            {{/each}}\n                            </table>\n                        </td>\n                    </tr>\n                {{/each}}\n                </table>\n            </div>\n        </div>\n\n        {{!-- Faction Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"faction\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <label><strong>Description</strong></label>\n                {{editor faction.0.system.description.value target=\"faction.0.system.description.value\" button=true owner=owner editable=false}}\n                <div class=\"form-fields flex1\">\n                    <label><strong>Money Multiplier (* starting Origin money.): </strong></label>\n                    <label>{{faction.0.system.money_mult}}</label>\n                </div>\n                <label><strong>Lifepath Table</strong> (Roll 2d6 or Choose)</label>\n                {{radioBoxes \"system.faction_lifepath\" faction_dict checked=faction_lifepath localize=true}}\n            </div>\n        </div>\n\n        {{!-- Loadout Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"loadout\">\n            <div class=\"form-fields flex1\" style=\"flex-direction: column !important;\">\n                <strong><em>Weapons</em></strong>\n                <table>\n                    <tr>\n                        <th style=\"width: 125px\">Weapon/Attack</th>\n                        <th style=\"width: 175px\">Name</th>\n                        <th>Range</th>\n                        <th>Damage Formula</th>\n                        <th>Ammo</th>\n                    </tr>\n                    <tr>\n                        <td>Primary Weapon</td>\n                        <td>{{loadout.0.system.primary_weapon.name}}</td>\n                        <td>{{loadout.0.system.primary_weapon.effective_range}}</td>\n                        <td>{{primary_damage_formula}}</td>\n                        <td>N/A</td>\n                    </tr>\n                    {{#each loadout.0.system.primary_weapon.characteristics as | char |}}\n                    <tr>\n                        <td><strong>&nbsp;</strong></td>\n                        <td style=\"padding-left: 15px !important\">{{char.name}}</td>\n                        <td style=\"padding-left: 15px !important\" colspan=\"3\">{{char.description}}</td>\n                    </tr>\n                    {{/each}}\n                    <tr>\n                        <td>Special Weapon</td>\n                        <td>{{loadout.0.system.special_weapon.name}}</td>\n                        <td>{{loadout.0.system.special_weapon.effective_range}}</td>\n                        <td>{{special_damage_formula}}</td>\n                        <td>{{loadout.0.system.special_weapon.ammo}}</td>\n                    </tr>\n                    {{#each loadout.0.system.special_weapon.characteristics as | char |}}\n                    <tr>\n                        <td><strong>&nbsp;</strong></td>\n                        <td style=\"padding-left: 15px !important\">{{char.name}}</td>\n                        <td style=\"padding-left: 15px !important\" colspan=\"3\">{{char.description}}</td>\n                    </tr>\n                    {{/each}}\n                    <tr>\n                        <td>Heavy Weapon</td>\n                        <td>{{loadout.0.system.heavy_weapon.name}}</td>\n                        <td>{{loadout.0.system.heavy_weapon.effective_range}}</td>\n                        <td>{{heavy_damage_formula}}</td>\n                        <td>{{loadout.0.system.heavy_weapon.ammo}}</td>\n                    </tr>\n                    {{#each loadout.0.system.heavy_weapon.characteristics as | char |}}\n                    <tr>\n                        <td><strong>&nbsp;</strong></td>\n                        <td style=\"padding-left: 15px !important\">{{char.name}}</td>\n                        <td style=\"padding-left: 15px !important\" colspan=\"3\">{{char.description}}</td>\n                    </tr>\n                    {{/each}}\n                    <tr>\n                        <td>Melee Attack</td>\n                        <td>{{loadout.0.system.melee_attack.name}}</td>\n                        <td>{{loadout.0.system.melee_attack.effective_range}}</td>\n                        <td>{{melee_damage_formula}}</td>\n                        <td>N/A</td>\n                    </tr>\n                    {{#each loadout.0.system.melee_attack.characteristics as | char |}}\n                    <tr>\n                        <td><strong>&nbsp;</strong></td>\n                        <td style=\"padding-left: 15px !important\">{{char.name}}</td>\n                        <td style=\"padding-left: 15px !important\" colspan=\"3\">{{char.description}}</td>\n                    </tr>\n                    {{/each}}\n                </table>\n\n                <strong><em>Passives</em></strong>\n                <table>\n                    <tr>\n                        <th style=\"width: 125px\">Name</th>\n                        <th>Description</th>\n                    </tr>\n                    {{#each loadout.0.system.passives as | char |}}\n                    <tr>\n                        <td>{{char.name}}</td>\n                        <td>{{char.description}}</td>\n                    </tr>\n                    {{/each}}\n                </table>\n            </div>\n        </div>\n\n        {{!-- Owned Items Tab --}}\n        <div class=\"tab flexrow\" data-group=\"primary\" data-tab=\"items\">\n            <ol class=\"items-list\">\n                <li class=\"item flexrow item-header\">\n                    <div class=\"item-image\"></div>\n                    <div class=\"item-name\">Name</div>\n                    <div class=\"item-controls\">\n                        <a class=\"item-control item-create\" title=\"Create item\" data-type=\"item\"><i class=\"fas fa-plus\"></i> Add item</a>\n                    </div>\n                </li>\n                {{#each items as |item id|}}\n                <li class=\"item flexrow\" data-item-id=\"{{item._id}}\">\n                    <div class=\"item-image\"><img src=\"{{item.img}}\" title=\"{{item.name}}\" width=\"24\" height=\"24\"/></div>\n                    <h4 class=\"item-name\">{{item.name}}</h4>\n                    <div class=\"item-controls\">\n                        <a class=\"item-control item-edit\" title=\"Edit Item\"><i class=\"fas fa-edit\"></i></a>\n                        <a class=\"item-control item-delete\" title=\"Delete Item\"><i class=\"fas fa-trash\"></i></a>\n                    </div>\n                </li>\n                {{/each}}\n            </ol>\n        </div>\n\n    </section>\n</form>");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<style>\n    option:checked { color: red; }\n\n</style>\n<form class=\"{{cssClass}} flexcol\" autocomplete=\"off\">\n    {{!-- Item Sheet Header --}}\n    <header class=\"sheet-header flexrow\">\n        <img class=\"profile\" src=\"{{item.img}}\" title=\"{{item.name}}\" data-edit=\"img\">\n\n        <div class=\"header-details flexrow\">\n            <h1 class=\"charname\">\n                <input name=\"name\" type=\"text\" value=\"{{item.name}}\" placeholder=\"{{localize 'EOA.LoadoutName'}}\">\n            </h1>\n\n            <div class=\"item-subtitle\">\n                <h4 class=\"item-type\">{{itemType}}</h4>\n                <span class=\"item-status\">{{itemStatus}}</span>\n            </div>\n        </div>\n    </header>\n\n    {{!-- Item Sheet Navigation --}}\n    <nav class=\"sheet-navigation tabs\" data-group=\"primary\">\n        <a class=\"item active\" data-tab=\"description\">{{localize \"EOA.PrimaryWeapon\"}}</a>\n        <a class=\"item active\" data-tab=\"special\">{{localize \"EOA.SpecialWeapon\"}}</a>\n        <a class=\"item active\" data-tab=\"heavy\">{{localize \"EOA.HeavyWeapon\"}}</a>\n        <a class=\"item active\" data-tab=\"melee\">{{localize \"EOA.MeleeAttack\"}}</a>\n        <a class=\"item active\" data-tab=\"passives\">{{localize \"EOA.Passives\"}}</a>\n    </nav>\n\n    {{!-- Item Sheet Body --}}\n    <section class=\"sheet-body\">\n\n        {{!-- Primary Weapon Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"description\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Name</strong></label>\n                    <input type=\"text\" name=\"data.system.primary_weapon.name\" value=\"{{data.system.primary_weapon.name}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Range</strong></label>\n                    <select style=\"height:125px\" name=\"data.system.primary_weapon.effective_range\" multiple>\n                        {{selectOptions effective_range_choices selected=data.system.primary_weapon.effective_range localize=false}}\n                    </select>\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Damage Formula</strong></label>\n                    <input type=\"text\" name=\"data.system.primary_weapon.damage_formula\" value=\"{{primary_damage_formula}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Characteristics</strong></label>\n                    {{#each data.system.primary_weapon.characteristics as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n\n        {{!-- Special Weapon Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"special\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Name</strong></label>\n                    <input type=\"text\" name=\"data.system.special_weapon.name\" value=\"{{data.system.special_weapon.name}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Range</strong></label>\n                    <select style=\"height:125px\" name=\"data.system.special_weapon.effective_range\" multiple>\n                        {{selectOptions effective_range_choices selected=data.system.special_weapon.effective_range localize=false}}\n                    </select>\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Damage Formula</strong></label>\n                    <input type=\"text\" name=\"data.system.special_weapon.damage_formula\" value=\"{{special_damage_formula}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Ammo</strong></label>\n                    <input type=\"text\" name=\"data.system.special_weapon.ammo\" value=\"{{data.system.special_weapon.ammo}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Characteristics</strong></label>\n                    {{#each data.system.special_weapon.characteristics as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n\n        {{!-- Heavy Weapon Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"heavy\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Name</strong></label>\n                    <input type=\"text\" name=\"data.system.heavy_weapon.name\" value=\"{{data.system.heavy_weapon.name}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Range</strong></label>\n                    <select style=\"height:125px\" name=\"data.system.heavy_weapon.effective_range\" multiple>\n                        {{selectOptions effective_range_choices selected=data.system.heavy_weapon.effective_range localize=false}}\n                    </select>\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Damage Formula</strong></label>\n                    <input type=\"text\" name=\"data.system.heavy_weapon.damage_formula\" value=\"{{heavy_damage_formula}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Ammo</strong></label>\n                    <input type=\"text\" name=\"data.system.special_weapon.ammo\" value=\"{{data.system.special_weapon.ammo}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Characteristics</strong></label>\n                    {{#each data.system.heavy_weapon.characteristics as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n\n        {{!-- Melee Attack Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"melee\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Name</strong></label>\n                    <input type=\"text\" name=\"data.system.melee_attack.name\" value=\"{{data.system.melee_attack.name}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Range</strong></label>\n                    <select style=\"height:125px\" name=\"data.system.melee_attack.effective_range\" multiple>\n                        {{selectOptions effective_range_choices selected=data.system.melee_attack.effective_range localize=false}}\n                    </select>\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Damage Formula</strong></label>\n                    <input type=\"text\" name=\"data.system.melee_attack.damage_formula\" value=\"{{melee_damage_formula}}\" placeholder=\"0\" style=\"width: 200px\">\n                </div>\n\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Characteristics</strong></label>\n                    {{#each data.system.melee_attack.characteristics as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n\n        {{!-- Passives Tab --}}\n        <div class=\"tab flexrow active\" data-group=\"primary\" data-tab=\"passives\">\n\n            <div class=\"item-properties\">\n                &nbsp;\n            </div>\n\n            <div class=\"description\">\n                <div class=\"form-fields flex1 content\">\n                    <label><strong>Characteristics</strong></label>\n                    {{#each data.system.passives as | char |}}\n                        <div class=\"form-group\">\n                            <div class=\"form-fields flex1\">\n                                <input type=\"text\" name=\"char.name\" value=\"{{char.name}}\"\n                                       placeholder=\"{{char.name}}\">\n                            </div>\n                            <div class=\"form-fields flex4\">\n                                <input type=\"text\" name=\"char.description\" value=\"{{char.description}}\"\n                                       placeholder=\"{{char.description}}\">\n                            </div>\n                        </div>\n                    {{/each}}\n                </div>\n            </div>\n        </div>\n    </section>\n</form>\n");

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

function parse_formula(str_formula) {
    return str_formula.replace("{H}", " Hits ").replace("{T}", " Tier").replace("+", " +");
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
        context.loadout = context.items.filter(function (item) {
            return item.type === "loadout"
        })
        if (context.loadout.length > 0) {
            context.primary_damage_formula = parse_formula(context.loadout[0].system.primary_weapon.damage_formula);
            context.special_damage_formula = parse_formula(context.loadout[0].system.special_weapon.damage_formula);
            context.heavy_damage_formula = parse_formula(context.loadout[0].system.heavy_weapon.damage_formula);
            context.melee_damage_formula = parse_formula(context.loadout[0].system.melee_attack.damage_formula);
        }

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
        if (["breed", "origin", "profession", "faction", "loadout"].includes(itemData.type)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9hY3Rvci9hY3Rvci1oZXJvLXNoZWV0Lmh0bWwiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL2JyZWVkLXNoZWV0Lmh0bWwiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL2ZhY3Rpb24tc2hlZXQuaHRtbCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvbG9hZG91dC1zaGVldC5odG1sIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9vcmlnaW4tc2hlZXQuaHRtbCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvcHJvZmVzc2lvbi1zaGVldC5odG1sIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9za2lsbC1zaGVldC5odG1sIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3RlbXBsYXRlcy9pdGVtcy9zdXBwbHktc2hlZXQuaHRtbCIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaGVscGVyL1RlbXBsYXRlUHJlbG9hZGVyLnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL21vZHVsZS9pdGVtcy9CcmVlZFNoZWV0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL21vZHVsZS9pdGVtcy9GYWN0aW9uU2hlZXQudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2l0ZW1zL09yaWdpblNoZWV0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL21vZHVsZS9pdGVtcy9Qcm9mZXNzaW9uU2hlZXQudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2l0ZW1zL1NraWxsU2hlZXQudHMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2l0ZW1zL1N1cHBseVNoZWV0LnRzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3JjL2hlbHBlcnMvZGljZS5qcyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvYWN0b3JzL0FjdG9yU2hlZXQuanMiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvbW9kdWxlL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3NyYy9tb2R1bGUvaXRlbXMvTG9hZG91dFNoZWV0LmpzIiwid2VicGFjazovL3BsYWNlaG9sZGVyLy4vc3RhdGljL3NjcmlwdHMvZnV4LWRpY2Utcm9sbGVyLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci8uL3N0YXRpYy9zY3JpcHRzL2Z1eC1kaWNlLXJvbGxlci1yb2xsLmpzIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wbGFjZWhvbGRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BsYWNlaG9sZGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGxhY2Vob2xkZXIvLi9zcmMvZW9hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiPHN0eWxlPlxcbiAgICAuYmlvZ3JhcGh5LWVkaXRvciAuZWRpdG9yIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcXG4gICAgfVxcbiAgICAuZWRpdG9yIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyYXk7XFxuICAgIH1cXG4gICAgdGQge1xcbiAgICAgICAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgdGgge1xcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgfVxcbiAgICBsYWJlbC5jaGVja2JveCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAuY2hlY2tib3gge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmNoZWNrYm94IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiAwOyAvKiBBZGp1c3QgdGhlIHZlcnRpY2FsIHBvc2l0aW9uIGFzIG5lZWRlZCAqL1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7IC8qIEFkanVzdCB0aGUgc3BhY2luZyBiZXR3ZWVuIHJhZGlvIGJ1dHRvbiBhbmQgY29udGVudCAqL1xcbiAgICB9XFxuICAgIGZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XFxuICAgIH1cXG4gICAgLm51bWJlci1zcGlubmVyIC5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZD4uYnRuIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxuICAgIH1cXG4gICAgLm51bWJlci1zcGlubmVyIC5mb3JtLWNvbnRyb2wge1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgLmJ0bi1wbHVzLFxcbiAgICAuYnRuLW1pbnVzIHtcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgLyogU3R5bGUgdGhlIGNvbnRlbnQgZGl2IGFzIG5lZWRlZCAqL1xcbiAgICB9XFxuICAgIC5iYWRnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAvKiBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBiYWRnZSAqL1xcbiAgICAgICAgY29sb3I6ICNmZmY7IC8qIFRleHQgY29sb3Igb2YgdGhlIGJhZGdlICovXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIFRvIG1ha2UgdGhlIGJhZGdlIHJvdW5kICovXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgIHdpZHRoOiAyNXB4OyAvKiBBZGp1c3Qgd2lkdGggYW5kIGhlaWdodCBhcyBuZWVkZWQgKi9cXG4gICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIHRoZSB0ZXh0ICovXFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyAvKiBBZGp1c3QgbWFyZ2luIHRvIHBsYWNlIGl0IG5leHQgdG8gdGhlIGxhYmVsICovXFxuICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuXFxuPGZvcm0gY2xhc3M9XFxcInt7Y3NzQ2xhc3N9fSBmbGV4Y29sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgc3R5bGU9XFxcImZsZXg6IG5vbmUgIWltcG9ydGFudDtcXFwiPlxcbiAgICB7eyEtLSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXJcXFwiPlxcbiAgICAgICAge3shLS0gSGVhZGVyIHN0dWZmIGdvZXMgaGVyZSAtLX19XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlLWltZ1xcXCIgc3JjPVxcXCJ7e2FjdG9yLmltZ319XFxcIiBkYXRhLWVkaXQ9XFxcImltZ1xcXCIgdGl0bGU9XFxcInt7YWN0b3IubmFtZX19XFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgc3R5bGU9XFxcImhlaWdodDogMTI4cHggIWltcG9ydGFudDsgd2lkdGg6IDEyOHB4ICFpbXBvcnRhbnQ7XFxcIi8+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItZmllbGRzXFxcIj5cXG4gICAgICAgICAgICA8aDEgY2xhc3M9XFxcImNoYXJuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiIHN0eWxlPVxcXCJtYXJnaW46IDAgIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2FjdG9yLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIk5hbWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDpjYWxjKDEwMCUgLSAxMTBweClcXFwiLz5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJzeXN0ZW0uY3VycmVudF90bFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uY3VycmVudF90bH19XFxcIiBwbGFjZWhvbGRlcj1cXFwiXFxcIiBzdHlsZT1cXFwid2lkdGg6NTBweDtcXFwiLz5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9oMT5cXG4gICAgICAgICAgICB7eyNpZiBoYXNfc3RhdHN9fVxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIGJyZWVkLjAuc3lzdGVtLnNraWxscyBhcyB8IHNraWxsIHx9fVxcbiAgICAgICAgICAgICAgICAgICAge3sjaWYgKGVxIHNraWxsLm5hbWUgLi4vZGF0YS5zeXN0ZW0uYnJlZWRfbGlmZXBhdGgpfX1cXG4gICAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT1cXFwicGFkZGluZzogMCAxNXB4OyBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcImJvcmRlcjogMXB4IGJsYWNrIHNvbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TVFI8L2xhYmVsPjxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e3NraWxsLnN0cn19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNUQTwvbGFiZWw+PGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPnt7c2tpbGwuc3RhfX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QUdJPC9sYWJlbD48bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+e3tza2lsbC5hZ2l9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JTlQ8L2xhYmVsPjxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e3NraWxsLmludH19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNFTjwvbGFiZWw+PGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPnt7c2tpbGwuc2VufX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UFNZPC9sYWJlbD48bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+e3tza2lsbC5wc3l9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxcbiAgICAgICAgICAgICAgICAgICAge3svaWZ9fVxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICB7e2Vsc2V9fVxcbiAgICAgICAgICAgICAgICA8aDMgc3R5bGU9XFxcInBhZGRpbmc6IDAgMTVweDsgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcImJvcmRlcjogMXB4IGJsYWNrIHNvbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TVFI8L2xhYmVsPjxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj4wPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNUQTwvbGFiZWw+PGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPjA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QUdJPC9sYWJlbD48bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+MDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5JTlQ8L2xhYmVsPjxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj4wPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNFTjwvbGFiZWw+PGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPjA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UFNZPC9sYWJlbD48bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+MDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgICAgIDwvaDM+XFxuICAgICAgICAgICAge3svaWZ9fVxcblxcbiAgICAgICAgICAgIDxoMyBzdHlsZT1cXFwicGFkZGluZzogMCAxNXB4OyBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPVxcXCJib3JkZXI6IDFweCBibGFjayBzb2xpZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5IUDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLmN1cnJlbnRfaHBcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmN1cnJlbnRfaHB9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPi88L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPnt7bWF4X2hwfX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaWYgKGVxIGJyZWVkLjAuc3lzdGVtLmJvbnVzLmhwIDApfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPit7e2JyZWVkLjAuc3lzdGVtLmJvbnVzLmhwfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwic3lzdGVtLnNhZmV0eV9vblxcXCIge3tjaGVja2VkIGRhdGEuc3lzdGVtLnNhZmV0eV9vbn19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNhZmV0eTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OUDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLmN1cnJlbnRfbnBcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmN1cnJlbnRfbnB9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPi88L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVxcXCJtYXJnaW4tbGVmdDo4cHg7IGJvcmRlcjoycHggYmxhY2sgZGFzaGVkOyBwYWRkaW5nOjAgMTBweDtcXFwiPnt7bWF4X25wfX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sjaWYgKGVxIGJyZWVkLjAuc3lzdGVtLmJvbnVzLm5wIDApfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPit7e2JyZWVkLjAuc3lzdGVtLmJvbnVzLm5wfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5DVTwvbGFiZWw+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5jdXJyZW50X25jdVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uY3VycmVudF9uY3V9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogNDVweDtcXFwiPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e2NvbnN1bWVkX25jdX19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD4vPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e21heF9uY3V9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgYnJlZWQuMC5zeXN0ZW0uYm9udXMubmN1IDApfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmFkZ2VcXFwiPit7e2JyZWVkLjAuc3lzdGVtLmJvbnVzLm5jdX19PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pZn19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDwvaDM+XFxuXFxuICAgICAgICAgICAgPGgzIHN0eWxlPVxcXCJwYWRkaW5nOiAwIDE1cHhcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9XFxcImJvcmRlcjogMXB4IGJsYWNrIHNvbGlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNQPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uY3VycmVudF9zcFxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uY3VycmVudF9zcH19XFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3R5bGU9XFxcIndpZHRoOiA0NXB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+LzwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OjhweDsgYm9yZGVyOjJweCBibGFjayBkYXNoZWQ7IHBhZGRpbmc6MCAxMHB4O1xcXCI+e3ttYXhfc3B9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Jbml0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cXFwibWFyZ2luLWxlZnQ6OHB4OyBib3JkZXI6MnB4IGJsYWNrIGRhc2hlZDsgcGFkZGluZzowIDEwcHg7XFxcIj57e2luaXR9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgYnJlZWQuMC5zeXN0ZW0uYm9udXMuaW5pdCAwKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2Vsc2V9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJhZGdlXFxcIj4re3ticmVlZC4wLnN5c3RlbS5ib251cy5pbml0fX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPklQPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uY3VycmVudF9pcFxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uY3VycmVudF9pcH19XFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3R5bGU9XFxcIndpZHRoOiA0NXB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgYnJlZWQuMC5zeXN0ZW0uYm9udXMuaXAgMCl9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJiYWRnZVxcXCI+K3t7YnJlZWQuMC5zeXN0ZW0uYm9udXMuaXB9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaWZ9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNyZWRpdHM8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5jdXJyZW50X21vbmV5XFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5jdXJyZW50X21vbmV5fX1cXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDQ1cHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgPC9oMz5cXG48IS0tICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFyYWxpYXNcXFwiPjxpbnB1dCBuYW1lPVxcXCJzeXN0ZW0uYWxpYXNcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmFsaWFzfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJBbGlhc1xcXCIvPjwvaDE+LS0+XFxuXFxuPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QnJlZWQ8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgYnJlZWQubGVuZ3RoIDApfX0tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImljb25zL3N2Zy9teXN0ZXJ5LW1hbi5zdmdcXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5VbnNwZWNpZmllZDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ7e2JyZWVkLjAuaW1nfX1cXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e2JyZWVkLjAubmFtZX19PC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAge3svaWZ9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5PcmlnaW48L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiAoZXEgb3JpZ2luLmxlbmd0aCAwKX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJpY29ucy9zdmcvbXlzdGVyeS1tYW4uc3ZnXFxcIiAvPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VW5zcGVjaWZpZWQ8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7e2Vsc2V9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3tvcmlnaW4uMC5pbWd9fVxcXCIgLz4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7b3JpZ2luLjAubmFtZX19PC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAge3svaWZ9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Qcm9mZXNzaW9uPC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAge3sjaWYgKGVxIHByb2Zlc3Npb24ubGVuZ3RoIDApfX0tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImljb25zL3N2Zy9teXN0ZXJ5LW1hbi5zdmdcXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5VbnNwZWNpZmllZDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWxzZX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ7e3Byb2Zlc3Npb24uMC5pbWd9fVxcXCIgLz4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7cHJvZmVzc2lvbi4wLm5hbWV9fTwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX0tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RmFjdGlvbjwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIHt7I2lmIChlcSBmYWN0aW9uLmxlbmd0aCAwKX19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJpY29ucy9zdmcvbXlzdGVyeS1tYW4uc3ZnXFxcIiAvPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VW5zcGVjaWZpZWQ8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7e2Vsc2V9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3tmYWN0aW9uLjAuaW1nfX1cXFwiIC8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e2ZhY3Rpb24uMC5uYW1lfX08L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICB7ey9pZn19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzb3VyY2VzIGdyaWQgZ3JpZC0yY29sXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc291cmNlIGZsZXgtZ3JvdXAtY2VudGVyXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzeXN0ZW0uaGVhbHRoLnZhbHVlXFxcIiBjbGFzcz1cXFwicmVzb3VyY2UtbGFiZWxcXFwiPkhlYWx0aDwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicmVzb3VyY2UtY29udGVudCBmbGV4cm93IGZsZXgtY2VudGVyIGZsZXgtYmV0d2VlblxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uaGVhbHRoLnZhbHVlXFxcIiB2YWx1ZT1cXFwie3tzeXN0ZW0uaGVhbHRoLnZhbHVlfX1cXFwiIGRhdGEtZHR5cGU9XFxcIk51bWJlclxcXCIvPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gLyA8L3NwYW4+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uaGVhbHRoLm1heFxcXCIgdmFsdWU9XFxcInt7c3lzdGVtLmhlYWx0aC5tYXh9fVxcXCIgZGF0YS1kdHlwZT1cXFwiTnVtYmVyXFxcIi8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc291cmNlIGZsZXgtZ3JvdXAtY2VudGVyXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJzeXN0ZW0ucG93ZXIudmFsdWVcXFwiIGNsYXNzPVxcXCJyZXNvdXJjZS1sYWJlbFxcXCI+UG93ZXI8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJlc291cmNlLWNvbnRlbnQgZmxleHJvdyBmbGV4LWNlbnRlciBmbGV4LWJldHdlZW5cXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLnBvd2VyLnZhbHVlXFxcIiB2YWx1ZT1cXFwie3tzeXN0ZW0ucG93ZXIudmFsdWV9fVxcXCIgZGF0YS1kdHlwZT1cXFwiTnVtYmVyXFxcIi8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiAvIDwvc3Bhbj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5wb3dlci5tYXhcXFwiIHZhbHVlPVxcXCJ7e3N5c3RlbS5wb3dlci5tYXh9fVxcXCIgZGF0YS1kdHlwZT1cXFwiTnVtYmVyXFxcIi8+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgPC9kaXY+IHt7ISYjNDU7JiM0NTsgY2xvc2VzIHRoZSBcXFwicmVzb3VyY2VzXFxcIiBkaXYgJiM0NTsmIzQ1O319LS0+XFxuXFxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFiaWxpdGllcyBncmlkIGdyaWQtM2NvbFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICB7eyNlYWNoIHN5c3RlbS5hYmlsaXRpZXMgYXMgfGFiaWxpdHkga2V5fH19LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhYmlsaXR5IGZsZXhyb3cgZmxleC1ncm91cC1jZW50ZXJcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInN5c3RlbS5hYmlsaXRpZXMue3trZXl9fS52YWx1ZVxcXCIgY2xhc3M9XFxcInJlc291cmNlLWxhYmVsXFxcIj57e2tleX19PC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLmFiaWxpdGllcy57e2tleX19LnZhbHVlXFxcIiB2YWx1ZT1cXFwie3thYmlsaXR5LnZhbHVlfX1cXFwiIGRhdGEtZHR5cGU9XFxcIk51bWJlclxcXCIvPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJhYmlsaXR5LW1vZFxcXCI+e3tudW1iZXJGb3JtYXQgYWJpbGl0eS5tb2QgZGVjaW1hbHM9MCBzaWduPXRydWV9fTwvc3Bhbj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgICAgICAgICAge3svZWFjaH19LS0+XFxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxcblxcbiAgICAgICAgPC9kaXY+IHt7IS0tIGNsb3NlcyB0aGUgXFxcImhlYWRlci1maWVsZHNcXFwiIGRpdiAtLX19XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBTaGVldCBUYWIgTmF2aWdhdGlvbiAtLX19XFxuICAgIDxuYXYgY2xhc3M9XFxcInNoZWV0LW5hdmlnYXRpb24gdGFicyBmb3JtLWdyb3VwXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMTBweDtcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJzeXN0ZW1zL2VvYS9pY29ucy9oaXN0b3J5LnBuZ1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzxicj4mbmJzcDs8L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJicmVlZFxcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDEwcHg7XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+QnJlZWQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7eyNpZiAoZXEgYnJlZWQubGVuZ3RoIDApfX1cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImljb25zL3N2Zy9teXN0ZXJ5LW1hbi5zdmdcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5VbnNwZWNpZmllZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7ZWxzZX19XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ7e2JyZWVkLjAuaW1nfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD57e2JyZWVkLjAubmFtZX19PGJyPiZuYnNwOzwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwib3JpZ2luXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMTBweDtcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5PcmlnaW48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7eyNpZiAoZXEgb3JpZ2luLmxlbmd0aCAwKX19XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJpY29ucy9zdmcvbXlzdGVyeS1tYW4uc3ZnXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+VW5zcGVjaWZpZWQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7e2Vsc2V9fVxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3tvcmlnaW4uMC5pbWd9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt7b3JpZ2luLjAubmFtZX19PGJyPiZuYnNwOzwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwicHJvZmVzc2lvblxcXCIgc3R5bGU9XFxcInBhZGRpbmc6IDEwcHg7XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+UHJvZmVzc2lvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7I2lmIChlcSBwcm9mZXNzaW9uLmxlbmd0aCAwKX19XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJpY29ucy9zdmcvbXlzdGVyeS1tYW4uc3ZnXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+VW5zcGVjaWZpZWQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7e2Vsc2V9fVxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwie3twcm9mZXNzaW9uLjAuaW1nfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD57e3Byb2Zlc3Npb24uMC5uYW1lfX08YnI+Jm5ic3A7PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3svaWZ9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJmYWN0aW9uXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMTBweDtcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5GYWN0aW9uPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3sjaWYgKGVxIGZhY3Rpb24ubGVuZ3RoIDApfX1cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcImljb25zL3N2Zy9teXN0ZXJ5LW1hbi5zdmdcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD5VbnNwZWNpZmllZDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7ZWxzZX19XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ7e2ZhY3Rpb24uMC5pbWd9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt7ZmFjdGlvbi4wLm5hbWV9fTxicj4mbmJzcDs8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7ey9pZn19XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcImxvYWRvdXRcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAxMHB4O1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiIHN0eWxlPVxcXCJmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPkxvYWRvdXQ8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7eyNpZiAoZXEgbG9hZG91dC5sZW5ndGggMCl9fVxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiaWNvbnMvc3ZnL215c3RlcnktbWFuLnN2Z1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPlVuc3BlY2lmaWVkPGJyPiZuYnNwOzwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7ZWxzZX19XFxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVxcXCJ7e2xvYWRvdXQuMC5pbWd9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPnt7bG9hZG91dC4wLm5hbWV9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7L2lmfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwiaXRlbXNcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOiAxMHB4O1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiIHN0eWxlPVxcXCJmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPkl0ZW1zPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XFxcInN5c3RlbXMvZW9hL2ljb25zL2l0ZW1zLnBuZ1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPiZuYnNwOzxicj4mbmJzcDs8L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hPlxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gU2hlZXQgQm9keSAtLX19XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaGVldC1ib2R5XFxcIj5cXG5cXG4gICAgICAgIHt7IS0tIEJpb2dyYXBoeSBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3cgYWN0aXZlXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGJpb2dyYXBoeS1lZGl0b3JcXFwiIHN0eWxlPVxcXCJmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPkJpb2dyYXBoeTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmJpb2dyYXBoeSB0YXJnZXQ9XFxcInN5c3RlbS5iaW9ncmFwaHlcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPlJlbGF0aW9uc2hpcHM8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5yZWxhdGlvbnNoaXBzIHRhcmdldD1cXFwic3lzdGVtLnJlbGF0aW9uc2hpcHNcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gQnJlZWQgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiYnJlZWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkRlc2NyaXB0aW9uPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3IgYnJlZWQuMC5zeXN0ZW0uZGVzY3JpcHRpb24udmFsdWUgdGFyZ2V0PVxcXCJicmVlZC4wLnN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZVxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZmFsc2V9fVxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5MaWZlcGF0aCBUYWJsZTwvc3Ryb25nPiAoUm9sbCAyZDYgb3IgQ2hvb3NlKTwvbGFiZWw+PGJyPlxcbiAgICAgICAgICAgICAgICB7e3JhZGlvQm94ZXMgXFxcInN5c3RlbS5icmVlZF9saWZlcGF0aFxcXCIgYnJlZWRfZGljdCBjaGVja2VkPWJyZWVkX2xpZmVwYXRoIGxvY2FsaXplPXRydWV9fVxcbjwhLS0gICAgICAgICAgICAgICAgPHRhYmxlPjx0cj48dGQ+Jm5ic3A7PC90ZD48dGQ+UmFuZ2U8L3RkPjx0ZD5OYW1lPC90ZD48dGQ+RGVzY3JpcHRpb248L3RkPjwvdHI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICB7eyNlYWNoIGJyZWVkLjAuc3lzdGVtLnNraWxscyBhcyB8IHNraWxsIHx9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDx0cj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uYnJlZWRfbGlmZXBhdGhcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmJyZWVkX2xpZmVwYXRofX1cXFwiPjwvdGQ+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3NraWxsLmxvd319LXt7c2tpbGwuaGlnaH19PC90ZD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7c2tpbGwubmFtZX19PC90ZD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7c2tpbGwuZGVzY3JpcHRpb259fTwvdGQ+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC90cj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8dHI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4mbmJzcDs8L3RkPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Jm5ic3A7PC90ZD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XFxcIjJcXFwiPjxzdHJvbmc+QXR0cmlidXRlczo8L3N0cm9uZz4gU3RyIHt7c2tpbGwuc3RyfX0sIFN0YSB7e3NraWxsLnN0YX19LCBBZ2kge3tza2lsbC5hZ2l9fSwgSW50IHt7c2tpbGwuaW50fX0sIFNlbiB7e3NraWxsLnNlbn19LCBQc3kge3tza2lsbC5wc3l9fTwvdGQ+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC90cj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIHt7L2VhY2h9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgPC90YWJsZT4tLT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gT3JpZ2luIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvd1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcIm9yaWdpblxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiIHN0eWxlPVxcXCJmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+RGVzY3JpcHRpb248L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBvcmlnaW4uMC5zeXN0ZW0uZGVzY3JpcHRpb24udmFsdWUgdGFyZ2V0PVxcXCJvcmlnaW4uMC5zeXN0ZW0uZGVzY3JpcHRpb24udmFsdWVcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+U3RhcnRpbmcgTW9uZXk6IDwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3tvcmlnaW4uMC5zeXN0ZW0uc3RhcnRpbmdfbW9uZXl9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5PcmlnaW4gU2tpbGxzIChDaG9vc2UgMyk6IDwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICB7eyNlYWNoIG9yaWdpbi4wLnN5c3RlbS5vcmlnaW5fc2tpbGxzIGFzIHwgb3NraWxsIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwic3lzdGVtLm9yaWdpbl9za2lsbHMue3tvc2tpbGx9fVxcXCIge3tjaGVja2VkIChsb29rdXAgLi4vZGF0YS5zeXN0ZW0ub3JpZ2luX3NraWxscyBvc2tpbGwpfX0+e3tvc2tpbGx9fVxcbiAgICAgICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5JZGVhbHM8L3N0cm9uZz48L2xhYmVsPjx1bD5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBvcmlnaW4uMC5zeXN0ZW0uaWRlYWxzIGFzIHwgc2tpbGwgfH19XFxuICAgICAgICAgICAgICAgICAgICA8bGk+PGxhYmVsPnt7c2tpbGwuZGVzY3JpcHRpb259fTwvbGFiZWw+PC9saT5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkxpZmVwYXRoIFRhYmxlPC9zdHJvbmc+IChSb2xsIDJkNiBvciBDaG9vc2UpPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3tyYWRpb0JveGVzIFxcXCJzeXN0ZW0ub3JpZ2luX2xpZmVwYXRoXFxcIiBvcmlnaW5fZGljdCBjaGVja2VkPW9yaWdpbl9saWZlcGF0aCBsb2NhbGl6ZT10cnVlfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gUHJvZmVzc2lvbiBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3dcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJwcm9mZXNzaW9uXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCIgc3R5bGU9XFxcImZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXFwiPlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5EZXNjcmlwdGlvbjwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIHByb2Zlc3Npb24uMC5zeXN0ZW0uZGVzY3JpcHRpb24ub3ZlcnZpZXcgdGFyZ2V0PVxcXCJwcm9mZXNzaW9uLjAuc3lzdGVtLmRlc2NyaXB0aW9uLm92ZXJ2aWV3XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPlNpZ25hdHVyZSBSZXNvdXJjZTwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIHByb2Zlc3Npb24uMC5zeXN0ZW0uc2lnbmF0dXJlX3Jlc291cmNlIHRhcmdldD1cXFwicHJvZmVzc2lvbi4wLnN5c3RlbS5zaWduYXR1cmVfcmVzb3VyY2VcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIHByb2Zlc3Npb24uMC5zeXN0ZW0uc2lnbmF0dXJlX3Jlc291cmNlX2Rlc2MgdGFyZ2V0PVxcXCJwcm9mZXNzaW9uLjAuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZV9kZXNjXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBwcm9mZXNzaW9uLjAuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZV9lZmZlY3QgdGFyZ2V0PVxcXCJwcm9mZXNzaW9uLjAuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZV9lZmZlY3RcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+Rmxhc2hiYWNrIEFiaWxpdHk8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBwcm9mZXNzaW9uLjAuc3lzdGVtLmZsYXNoYmFja19hYmlsaXR5IHRhcmdldD1cXFwicHJvZmVzc2lvbi4wLnN5c3RlbS5mbGFzaGJhY2tfYWJpbGl0eVxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZmFsc2V9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3IgcHJvZmVzc2lvbi4wLnN5c3RlbS5mbGFzaGJhY2tfdHJpZ2dlciB0YXJnZXQ9XFxcInByb2Zlc3Npb24uMC5zeXN0ZW0uZmxhc2hiYWNrX3RyaWdnZXJcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIHByb2Zlc3Npb24uMC5zeXN0ZW0uZmxhc2hiYWNrX2VmZmVjdCB0YXJnZXQ9XFxcInByb2Zlc3Npb24uMC5zeXN0ZW0uZmxhc2hiYWNrX2VmZmVjdFxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZmFsc2V9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5TaWduYXR1cmUgVHJhaXRzPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBwcm9mZXNzaW9uLjAuc3lzdGVtLnNpZ25hdHVyZV90cmFpdHMgYXMgfCBza2lsbCB8fX1cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwubmFtZSB0YXJnZXQ9XFxcInNraWxsLm5hbWVcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIHNraWxsLmRlc2NyaXB0aW9uIHRhcmdldD1cXFwic2tpbGwuZGVzY3JpcHRpb25cXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPlNraWxsIExpc3Q8L3N0cm9uZz4gKFN0YXJ0aW5nIGNoYXJhY3RlcnMgZGl2aWRlIDUgcG9pbnRzIGFyb3VuZCB0aGlzIGxpc3QuIE5vIHNraWxsIGNhbiBiZSBoaWdoZXIgdGhhbiAyIGF0IGNoYXJhY3RlciBjcmVhdGlvbik8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8dGFibGU+PHRyPjx0ZD4mbmJzcDs8L3RkPjx0ZD5OYW1lPC90ZD48dGQ+RGVzY3JpcHRpb248L3RkPjwvdHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggcHJvZmVzc2lvbi4wLnN5c3RlbS5za2lsbF9saXN0IGFzIHwgc2sgfH19XFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbnVtYmVyLXNwaW5uZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1taW51c1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4tPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLnNraWxsLnt7c2suX2lkfX0ucmFua1xcXCIgdmFsdWU9XFxcInt7bG9va3VwIChsb29rdXAgLi4vZGF0YS5zeXN0ZW0uc2tpbGwgc2suX2lkKSAncmFuaycgfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgdGV4dC1jZW50ZXIgdHh0LXNraWxsXFxcIiBtaW49XFxcIjBcXFwiIG1heD1cXFwiMTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1za2lsbD1cXFwie3tuYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1wbHVzXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiPis8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tzay5uYW1lfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3tzay5kZXNjcmlwdGlvbn19fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXG5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+TmFubyBTa2lsbCBMaXN0PC9zdHJvbmc+IChTdGFydGluZyBjaGFyYWN0ZXJzIGhhdmUgMiBwb2ludHMgdG8gc3BlbmQgb24gdGhpcywgZ2FpbmluZyBhIG5hbm8gcHJvZ3JhbSBmcm9tIHRoZSBzZWxlY3RlZCBza2lsbCk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8dGFibGU+PHRyPjx0ZD4mbmJzcDs8L3RkPjx0ZD5OYW1lPC90ZD48dGQ+TmFub3Byb2dyYW1zPC90ZD48L3RyPlxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIHByb2Zlc3Npb24uMC5zeXN0ZW0ubmFub19za2lsbF9saXN0IGFzIHwgc2sgfH19XFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDogMTAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgbnVtYmVyLXNwaW5uZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1taW51c1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIj4tPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwic3lzdGVtLm5hbm9za2lsbC57e3NrLl9pZH19LnJhbmtcXFwiIHZhbHVlPVxcXCJ7e2xvb2t1cCAobG9va3VwIC4uL2RhdGEuc3lzdGVtLm5hbm9za2lsbCBzay5faWQpICdyYW5rJyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlciB0eHQtc2tpbGxcXFwiIG1pbj1cXFwiMFxcXCIgbWF4PVxcXCIxMFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNraWxsPVxcXCJ7e25hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLXBsdXNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCI+KzwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3NrLm5hbWV9fTxkaXYgc3R5bGU9XFxcInRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxcIj57e3NrLmF0dHJpYnV0ZXN9fTwvZGl2PjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+PHRyPjx0ZD4mbmJzcDs8L3RkPjx0ZD5OYW1lPC90ZD48dGQ+RGVzY3JpcHRpb248L3RkPjwvdHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggc2submFub3Byb2dyYW1zIGFzIHwgbnAgfH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJ3aWR0aDo2MHB4O1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgbmFtZT1cXFwic3lzdGVtLm5hbm9wcm9ncmFtLnt7bnAuX2lkfX1cXFwiIHt7Y2hlY2tlZCAobG9va3VwIC4uLy4uL2RhdGEuc3lzdGVtLm5hbm9wcm9ncmFtIG5wLl9pZCl9fT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7I2lmIChsb29rdXAgLi4vLi4vZGF0YS5zeXN0ZW0ubmFub3Byb2dyYW0gbnAuX2lkKX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwic3lzdGVtcy9lb2EvaW1hZ2VzL2RpZV9pY29uLnBuZ1xcXCIgYWx0PVxcXCJSb2xsIE5hbm9wcm9ncmFtXFxcIiBzdHlsZT1cXFwiYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7d2lkdGg6IDIwcHg7aGVpZ2h0OiAyMHB4O1xcXCIgY2xhc3M9XFxcIm5wLXJ1blxcXCIgZGF0YS1hY3Rvcj1cXFwie3suLi8uLi9hY3Rvci5faWR9fVxcXCIgZGF0YS1ucC1uYW1lPVxcXCJ7e25wLm5hbWV9fVxcXCIgZGF0YS1ucC1jb3N0PVxcXCJ7e25wLm5wfX1cXFwiIHt7I2VhY2ggc2suYXR0cmlidXRlcyBhcyB8IGF0dHIgfH19IGRhdGEtbmFtZXt7QGluZGV4fX09XFxcInt7YXR0cn19XFxcIiBkYXRhLWF0dHJ7e0BpbmRleH19PVxcXCJ7e2xvb2t1cCAuLi8uLi8uLi9hdHRycyBhdHRyfX1cXFwie3svZWFjaH19PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3svaWZ9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwid2lkdGg6MTAwcHg7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tucC5uYW1lfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tucC5lZmZlY3R9fSAoTlA6IHt7bnAubnB9fSwgTkNVOiB7e25wLm5jdX19KVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIEZhY3Rpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiZmFjdGlvblxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiIHN0eWxlPVxcXCJmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+RGVzY3JpcHRpb248L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBmYWN0aW9uLjAuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlIHRhcmdldD1cXFwiZmFjdGlvbi4wLnN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZVxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZmFsc2V9fVxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5Nb25leSBNdWx0aXBsaWVyICgqIHN0YXJ0aW5nIE9yaWdpbiBtb25leS4pOiA8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7ZmFjdGlvbi4wLnN5c3RlbS5tb25leV9tdWx0fX08L2xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+TGlmZXBhdGggVGFibGU8L3N0cm9uZz4gKFJvbGwgMmQ2IG9yIENob29zZSk8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICB7e3JhZGlvQm94ZXMgXFxcInN5c3RlbS5mYWN0aW9uX2xpZmVwYXRoXFxcIiBmYWN0aW9uX2RpY3QgY2hlY2tlZD1mYWN0aW9uX2xpZmVwYXRoIGxvY2FsaXplPXRydWV9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBMb2Fkb3V0IFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvd1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImxvYWRvdXRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIiBzdHlsZT1cXFwiZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xcXCI+XFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+PGVtPldlYXBvbnM8L2VtPjwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICA8dGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ3aWR0aDogMTI1cHhcXFwiPldlYXBvbi9BdHRhY2s8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cXFwid2lkdGg6IDE3NXB4XFxcIj5OYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmFuZ2U8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYW1hZ2UgRm9ybXVsYTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFtbW88L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+UHJpbWFyeSBXZWFwb248L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2xvYWRvdXQuMC5zeXN0ZW0ucHJpbWFyeV93ZWFwb24ubmFtZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tsb2Fkb3V0LjAuc3lzdGVtLnByaW1hcnlfd2VhcG9uLmVmZmVjdGl2ZV9yYW5nZX19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3twcmltYXJ5X2RhbWFnZV9mb3JtdWxhfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OL0E8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggbG9hZG91dC4wLnN5c3RlbS5wcmltYXJ5X3dlYXBvbi5jaGFyYWN0ZXJpc3RpY3MgYXMgfCBjaGFyIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPiZuYnNwOzwvc3Ryb25nPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudFxcXCI+e3tjaGFyLm5hbWV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudFxcXCIgY29sc3Bhbj1cXFwiM1xcXCI+e3tjaGFyLmRlc2NyaXB0aW9ufX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TcGVjaWFsIFdlYXBvbjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7bG9hZG91dC4wLnN5c3RlbS5zcGVjaWFsX3dlYXBvbi5uYW1lfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2xvYWRvdXQuMC5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uZWZmZWN0aXZlX3JhbmdlfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e3NwZWNpYWxfZGFtYWdlX2Zvcm11bGF9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7bG9hZG91dC4wLnN5c3RlbS5zcGVjaWFsX3dlYXBvbi5hbW1vfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggbG9hZG91dC4wLnN5c3RlbS5zcGVjaWFsX3dlYXBvbi5jaGFyYWN0ZXJpc3RpY3MgYXMgfCBjaGFyIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPiZuYnNwOzwvc3Ryb25nPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudFxcXCI+e3tjaGFyLm5hbWV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudFxcXCIgY29sc3Bhbj1cXFwiM1xcXCI+e3tjaGFyLmRlc2NyaXB0aW9ufX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5IZWF2eSBXZWFwb248L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2xvYWRvdXQuMC5zeXN0ZW0uaGVhdnlfd2VhcG9uLm5hbWV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7bG9hZG91dC4wLnN5c3RlbS5oZWF2eV93ZWFwb24uZWZmZWN0aXZlX3JhbmdlfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2hlYXZ5X2RhbWFnZV9mb3JtdWxhfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2xvYWRvdXQuMC5zeXN0ZW0uaGVhdnlfd2VhcG9uLmFtbW99fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAge3sjZWFjaCBsb2Fkb3V0LjAuc3lzdGVtLmhlYXZ5X3dlYXBvbi5jaGFyYWN0ZXJpc3RpY3MgYXMgfCBjaGFyIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Ryb25nPiZuYnNwOzwvc3Ryb25nPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudFxcXCI+e3tjaGFyLm5hbWV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPVxcXCJwYWRkaW5nLWxlZnQ6IDE1cHggIWltcG9ydGFudFxcXCIgY29sc3Bhbj1cXFwiM1xcXCI+e3tjaGFyLmRlc2NyaXB0aW9ufX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5NZWxlZSBBdHRhY2s8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2xvYWRvdXQuMC5zeXN0ZW0ubWVsZWVfYXR0YWNrLm5hbWV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7bG9hZG91dC4wLnN5c3RlbS5tZWxlZV9hdHRhY2suZWZmZWN0aXZlX3JhbmdlfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e21lbGVlX2RhbWFnZV9mb3JtdWxhfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OL0E8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggbG9hZG91dC4wLnN5c3RlbS5tZWxlZV9hdHRhY2suY2hhcmFjdGVyaXN0aWNzIGFzIHwgY2hhciB8fX1cXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHN0cm9uZz4mbmJzcDs8L3N0cm9uZz48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnRcXFwiPnt7Y2hhci5uYW1lfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT1cXFwicGFkZGluZy1sZWZ0OiAxNXB4ICFpbXBvcnRhbnRcXFwiIGNvbHNwYW49XFxcIjNcXFwiPnt7Y2hhci5kZXNjcmlwdGlvbn19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXG5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz48ZW0+UGFzc2l2ZXM8L2VtPjwvc3Ryb25nPlxcbiAgICAgICAgICAgICAgICA8dGFibGU+XFxuICAgICAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVxcXCJ3aWR0aDogMTI1cHhcXFwiPk5hbWU8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICAgICAge3sjZWFjaCBsb2Fkb3V0LjAuc3lzdGVtLnBhc3NpdmVzIGFzIHwgY2hhciB8fX1cXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tjaGFyLm5hbWV9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7Y2hhci5kZXNjcmlwdGlvbn19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gT3duZWQgSXRlbXMgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiaXRlbXNcXFwiPlxcbiAgICAgICAgICAgIDxvbCBjbGFzcz1cXFwiaXRlbXMtbGlzdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwiaXRlbSBmbGV4cm93IGl0ZW0taGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0taW1hZ2VcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIj5OYW1lPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLWNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbS1jb250cm9sIGl0ZW0tY3JlYXRlXFxcIiB0aXRsZT1cXFwiQ3JlYXRlIGl0ZW1cXFwiIGRhdGEtdHlwZT1cXFwiaXRlbVxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1wbHVzXFxcIj48L2k+IEFkZCBpdGVtPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggaXRlbXMgYXMgfGl0ZW0gaWR8fX1cXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJpdGVtIGZsZXhyb3dcXFwiIGRhdGEtaXRlbS1pZD1cXFwie3tpdGVtLl9pZH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0taW1hZ2VcXFwiPjxpbWcgc3JjPVxcXCJ7e2l0ZW0uaW1nfX1cXFwiIHRpdGxlPVxcXCJ7e2l0ZW0ubmFtZX19XFxcIiB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiLz48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS1uYW1lXFxcIj57e2l0ZW0ubmFtZX19PC9oND5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tY29udHJvbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtLWNvbnRyb2wgaXRlbS1lZGl0XFxcIiB0aXRsZT1cXFwiRWRpdCBJdGVtXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLWVkaXRcXFwiPjwvaT48L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0tY29udHJvbCBpdGVtLWRlbGV0ZVxcXCIgdGl0bGU9XFxcIkRlbGV0ZSBJdGVtXFxcIj48aSBjbGFzcz1cXFwiZmFzIGZhLXRyYXNoXFxcIj48L2k+PC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvb2w+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9zZWN0aW9uPlxcbjwvZm9ybT5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxmb3JtIGNsYXNzPVxcXCJ7e2Nzc0NsYXNzfX0gZmxleGNvbFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiPlxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEhlYWRlciAtLX19XFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcInNoZWV0LWhlYWRlciBmbGV4cm93XFxcIj5cXG4gICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGVcXFwiIHNyYz1cXFwie3tpdGVtLmltZ319XFxcIiB0aXRsZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgZGF0YS1lZGl0PVxcXCJpbWdcXFwiPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWRldGFpbHMgZmxleHJvd1xcXCI+XFxuICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJjaGFybmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVxcXCJuYW1lXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tpdGVtLm5hbWV9fVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7bG9jYWxpemUgJ0VPQS5SYWNlTmFtZSd9fVxcXCI+XFxuICAgICAgICAgICAgPC9oMT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXN1YnRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJpdGVtLXR5cGVcXFwiPnt7aXRlbVR5cGV9fTwvaDQ+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpdGVtLXN0YXR1c1xcXCI+e3tpdGVtU3RhdHVzfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgTmF2aWdhdGlvbiAtLX19XFxuICAgIDxuYXYgY2xhc3M9XFxcInNoZWV0LW5hdmlnYXRpb24gdGFic1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkRlc2NyaXB0aW9uXFxcIn19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJsaWZlcGF0aFxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkxpZmVwYXRoXFxcIn19PC9hPlxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBCb2R5IC0tfX1cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICAgICAge3shLS0gRGVzY3JpcHRpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24udmFsdWUgdGFyZ2V0PVxcXCJzeXN0ZW0uZGVzY3JpcHRpb24udmFsdWVcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gTGlmZXBhdGggVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImxpZmVwYXRoXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5MaWZlcGF0aCBUYWJsZSAoUm9sbCAyZDYgb3IgQ2hvb3NlKTo8L3N0cm9uZz48aHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uc2tpbGxzIGFzIHwgc2tpbGwgfH19XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e3NraWxsLmxvd319LXt7c2tpbGwuaGlnaH19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tAaW5kZXh9fS5uYW1lXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5uYW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXg0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QGluZGV4fX0uZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjx1bD48bGk+PHN0cm9uZz5BdHRyaWJ1dGVzOjwvc3Ryb25nPiBTdHIge3tza2lsbC5zdHJ9fSwgU3RhIHt7c2tpbGwuc3RhfX0sIEFnaSB7e3NraWxsLmFnaX19LCBJbnQge3tza2lsbC5pbnR9fSwgU2VuIHt7c2tpbGwuc2VufX0sIFBzeSB7e3NraWxsLnBzeX19PC9saT48L3VsPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8aHI+XFxuXFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG48L2Zvcm0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuUmFjZU5hbWUnfX1cXFwiPlxcbiAgICAgICAgICAgIDwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zdWJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5EZXNjcmlwdGlvblxcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwibGlmZXBhdGhcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5MaWZlcGF0aFxcXCJ9fTwvYT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgQm9keSAtLX19XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaGVldC1ib2R5XFxcIj5cXG5cXG4gICAgICAgIHt7IS0tIERlc2NyaXB0aW9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHggIWltcG9ydGFudFxcXCI+XFxuICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlIHRhcmdldD1cXFwic3lzdGVtLmRlc2NyaXB0aW9uLnZhbHVlXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TW9uZXkgTXVsdGlwbGllciAoKiBzdGFydGluZyBPcmlnaW4gbW9uZXkuKTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLm1vbmV5X211bHRcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLm1vbmV5X211bHR9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7ZGF0YS5zeXN0ZW0ubW9uZXlfbXVsdH19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gTGlmZXBhdGggVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImxpZmVwYXRoXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+TGlmZXBhdGggVGFibGUgKFJvbGwgMmQ2IG9yIENob29zZSk6PC9zdHJvbmc+PGhyPlxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLmxpZmVfcGF0aCBhcyB8IHNraWxsIHx9fVxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3tza2lsbC5sb3d9fS17e3NraWxsLmhpZ2h9fTwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QGluZGV4fX0ubmFtZVxcXCIgdmFsdWU9XFxcInt7c2tpbGwubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5uYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwuZGVzY3JpcHRpb24gdGFyZ2V0PVxcXCJza2lsbC5kZXNjcmlwdGlvblxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwuZXF1aXBtZW50IHRhcmdldD1cXFwic2tpbGwuZXF1aXBtZW50XFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcbjwvZm9ybT5cXG5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdHlsZT5cXG4gICAgb3B0aW9uOmNoZWNrZWQgeyBjb2xvcjogcmVkOyB9XFxuXFxuPC9zdHlsZT5cXG48Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuTG9hZG91dE5hbWUnfX1cXFwiPlxcbiAgICAgICAgICAgIDwvaDE+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1zdWJ0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaXRlbS10eXBlXFxcIj57e2l0ZW1UeXBlfX08L2g0PlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXRlbS1zdGF0dXNcXFwiPnt7aXRlbVN0YXR1c319PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvaGVhZGVyPlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IE5hdmlnYXRpb24gLS19fVxcbiAgICA8bmF2IGNsYXNzPVxcXCJzaGVldC1uYXZpZ2F0aW9uIHRhYnNcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5QcmltYXJ5V2VhcG9uXFxcIn19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwic3BlY2lhbFxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLlNwZWNpYWxXZWFwb25cXFwifX08L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiIGRhdGEtdGFiPVxcXCJoZWF2eVxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkhlYXZ5V2VhcG9uXFxcIn19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW0gYWN0aXZlXFxcIiBkYXRhLXRhYj1cXFwibWVsZWVcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5NZWxlZUF0dGFja1xcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcInBhc3NpdmVzXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuUGFzc2l2ZXNcXFwifX08L2E+XFxuICAgIDwvbmF2PlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEJvZHkgLS19fVxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2hlZXQtYm9keVxcXCI+XFxuXFxuICAgICAgICB7eyEtLSBQcmltYXJ5IFdlYXBvbiBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3cgYWN0aXZlXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tcHJvcGVydGllc1xcXCI+XFxuICAgICAgICAgICAgICAgICZuYnNwO1xcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5OYW1lPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5wcmltYXJ5X3dlYXBvbi5uYW1lXFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5wcmltYXJ5X3dlYXBvbi5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDIwMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+UmFuZ2U8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBzdHlsZT1cXFwiaGVpZ2h0OjEyNXB4XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5wcmltYXJ5X3dlYXBvbi5lZmZlY3RpdmVfcmFuZ2VcXFwiIG11bHRpcGxlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0T3B0aW9ucyBlZmZlY3RpdmVfcmFuZ2VfY2hvaWNlcyBzZWxlY3RlZD1kYXRhLnN5c3RlbS5wcmltYXJ5X3dlYXBvbi5lZmZlY3RpdmVfcmFuZ2UgbG9jYWxpemU9ZmFsc2V9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkRhbWFnZSBGb3JtdWxhPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5wcmltYXJ5X3dlYXBvbi5kYW1hZ2VfZm9ybXVsYVxcXCIgdmFsdWU9XFxcInt7cHJpbWFyeV9kYW1hZ2VfZm9ybXVsYX19XFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3R5bGU9XFxcIndpZHRoOiAyMDBweFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkNoYXJhY3RlcmlzdGljczwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLnByaW1hcnlfd2VhcG9uLmNoYXJhY3RlcmlzdGljcyBhcyB8IGNoYXIgfH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaGFyLm5hbWVcXFwiIHZhbHVlPVxcXCJ7e2NoYXIubmFtZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2NoYXIubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXg0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJjaGFyLmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tjaGFyLmRlc2NyaXB0aW9ufX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7Y2hhci5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIHt7IS0tIFNwZWNpYWwgV2VhcG9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJzcGVjaWFsXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+TmFtZTwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24ubmFtZVxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24ubmFtZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3R5bGU9XFxcIndpZHRoOiAyMDBweFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPlJhbmdlPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgc3R5bGU9XFxcImhlaWdodDoxMjVweFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uZWZmZWN0aXZlX3JhbmdlXFxcIiBtdWx0aXBsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdE9wdGlvbnMgZWZmZWN0aXZlX3JhbmdlX2Nob2ljZXMgc2VsZWN0ZWQ9ZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uZWZmZWN0aXZlX3JhbmdlIGxvY2FsaXplPWZhbHNlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5EYW1hZ2UgRm9ybXVsYTwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uZGFtYWdlX2Zvcm11bGFcXFwiIHZhbHVlPVxcXCJ7e3NwZWNpYWxfZGFtYWdlX2Zvcm11bGF9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjAwcHhcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5BbW1vPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5zcGVjaWFsX3dlYXBvbi5hbW1vXFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5zcGVjaWFsX3dlYXBvbi5hbW1vfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDIwMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+Q2hhcmFjdGVyaXN0aWNzPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uY2hhcmFjdGVyaXN0aWNzIGFzIHwgY2hhciB8fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNoYXIubmFtZVxcXCIgdmFsdWU9XFxcInt7Y2hhci5uYW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7Y2hhci5uYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNoYXIuZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e2NoYXIuZGVzY3JpcHRpb259fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tjaGFyLmRlc2NyaXB0aW9ufX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gSGVhdnkgV2VhcG9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJoZWF2eVxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgJm5ic3A7XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPk5hbWU8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLmhlYXZ5X3dlYXBvbi5uYW1lXFxcIiB2YWx1ZT1cXFwie3tkYXRhLnN5c3RlbS5oZWF2eV93ZWFwb24ubmFtZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3R5bGU9XFxcIndpZHRoOiAyMDBweFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPlJhbmdlPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgc3R5bGU9XFxcImhlaWdodDoxMjVweFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uaGVhdnlfd2VhcG9uLmVmZmVjdGl2ZV9yYW5nZVxcXCIgbXVsdGlwbGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tzZWxlY3RPcHRpb25zIGVmZmVjdGl2ZV9yYW5nZV9jaG9pY2VzIHNlbGVjdGVkPWRhdGEuc3lzdGVtLmhlYXZ5X3dlYXBvbi5lZmZlY3RpdmVfcmFuZ2UgbG9jYWxpemU9ZmFsc2V9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkRhbWFnZSBGb3JtdWxhPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5oZWF2eV93ZWFwb24uZGFtYWdlX2Zvcm11bGFcXFwiIHZhbHVlPVxcXCJ7e2hlYXZ5X2RhbWFnZV9mb3JtdWxhfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDIwMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+QW1tbzwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uYW1tb1xcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uYW1tb319XFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3R5bGU9XFxcIndpZHRoOiAyMDBweFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MSBjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48c3Ryb25nPkNoYXJhY3RlcmlzdGljczwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICB7eyNlYWNoIGRhdGEuc3lzdGVtLmhlYXZ5X3dlYXBvbi5jaGFyYWN0ZXJpc3RpY3MgYXMgfCBjaGFyIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2hhci5uYW1lXFxcIiB2YWx1ZT1cXFwie3tjaGFyLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tjaGFyLm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4NFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2hhci5kZXNjcmlwdGlvblxcXCIgdmFsdWU9XFxcInt7Y2hhci5kZXNjcmlwdGlvbn19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2NoYXIuZGVzY3JpcHRpb259fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBNZWxlZSBBdHRhY2sgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcIm1lbGVlXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+TmFtZTwvc3Ryb25nPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0ubWVsZWVfYXR0YWNrLm5hbWVcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLm1lbGVlX2F0dGFjay5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdHlsZT1cXFwid2lkdGg6IDIwMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+UmFuZ2U8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBzdHlsZT1cXFwiaGVpZ2h0OjEyNXB4XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5tZWxlZV9hdHRhY2suZWZmZWN0aXZlX3JhbmdlXFxcIiBtdWx0aXBsZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3NlbGVjdE9wdGlvbnMgZWZmZWN0aXZlX3JhbmdlX2Nob2ljZXMgc2VsZWN0ZWQ9ZGF0YS5zeXN0ZW0ubWVsZWVfYXR0YWNrLmVmZmVjdGl2ZV9yYW5nZSBsb2NhbGl6ZT1mYWxzZX19XFxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+RGFtYWdlIEZvcm11bGE8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLm1lbGVlX2F0dGFjay5kYW1hZ2VfZm9ybXVsYVxcXCIgdmFsdWU9XFxcInt7bWVsZWVfZGFtYWdlX2Zvcm11bGF9fVxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjAwcHhcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDEgY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PHN0cm9uZz5DaGFyYWN0ZXJpc3RpY3M8L3N0cm9uZz48L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5tZWxlZV9hdHRhY2suY2hhcmFjdGVyaXN0aWNzIGFzIHwgY2hhciB8fX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNoYXIubmFtZVxcXCIgdmFsdWU9XFxcInt7Y2hhci5uYW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7Y2hhci5uYW1lfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImNoYXIuZGVzY3JpcHRpb25cXFwiIHZhbHVlPVxcXCJ7e2NoYXIuZGVzY3JpcHRpb259fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tjaGFyLmRlc2NyaXB0aW9ufX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAge3shLS0gUGFzc2l2ZXMgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcInBhc3NpdmVzXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgxIGNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxzdHJvbmc+Q2hhcmFjdGVyaXN0aWNzPC9zdHJvbmc+PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0ucGFzc2l2ZXMgYXMgfCBjaGFyIHx9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2hhci5uYW1lXFxcIiB2YWx1ZT1cXFwie3tjaGFyLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tjaGFyLm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4NFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiY2hhci5kZXNjcmlwdGlvblxcXCIgdmFsdWU9XFxcInt7Y2hhci5kZXNjcmlwdGlvbn19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2NoYXIuZGVzY3JpcHRpb259fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvc2VjdGlvbj5cXG48L2Zvcm0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuT3JpZ2luTmFtZSd9fVxcXCI+XFxuICAgICAgICAgICAgPC9oMT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXN1YnRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJpdGVtLXR5cGVcXFwiPnt7aXRlbVR5cGV9fTwvaDQ+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpdGVtLXN0YXR1c1xcXCI+e3tpdGVtU3RhdHVzfX08L3NwYW4+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBOYXZpZ2F0aW9uIC0tfX1cXG4gICAgPG5hdiBjbGFzcz1cXFwic2hlZXQtbmF2aWdhdGlvbiB0YWJzXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuRGVzY3JpcHRpb25cXFwifX08L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcImlkZWFsc1xcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLklkZWFsc1xcXCJ9fTwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtXFxcIiBkYXRhLXRhYj1cXFwibGlmZXBhdGhcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5MaWZlcGF0aFxcXCJ9fTwvYT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgQm9keSAtLX19XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaGVldC1ib2R5XFxcIj5cXG5cXG4gICAgICAgIHt7IS0tIERlc2NyaXB0aW9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICZuYnNwO1xcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnRcXFwiPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZSB0YXJnZXQ9XFxcInN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZVxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXJ0aW5nIE1vbmV5PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc3RhcnRpbmdfbW9uZXlcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLnN0YXJ0aW5nX21vbmV5fX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2RhdGEuc3lzdGVtLnN0YXJ0aW5nX21vbmV5fX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+T3JpZ2luIFNraWxscyAoQ2hvb3NlIDMpPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0ub3JpZ2luX3NraWxsc1xcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0ub3JpZ2luX3NraWxsc319XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tkYXRhLnN5c3RlbS5vcmlnaW5fc2tpbGxzfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBJZGVhbHMgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImlkZWFsc1xcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaXRlbS1wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICZuYnNwO1xcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICA8c3Ryb25nPklkZWFsczo8L3N0cm9uZz48aHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uaWRlYWxzIGFzIHwgc2tpbGwgfH19XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5pZGVhbHMue3tAaW5kZXh9fS5kZXNjcmlwdGlvblxcXCIgdmFsdWU9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBMaWZlcGF0aCBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3cgYWN0aXZlXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwibGlmZXBhdGhcXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tcHJvcGVydGllc1xcXCI+XFxuICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5MaWZlcGF0aCBUYWJsZSAoUm9sbCAyZDYgb3IgQ2hvb3NlKTo8L3N0cm9uZz48aHI+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0ubGlmZV9wYXRoIGFzIHwgc2tpbGwgfH19XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e3NraWxsLmxvd319LXt7c2tpbGwuaGlnaH19PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tAaW5kZXh9fS5uYW1lXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5uYW1lfX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXg0XFxcIj5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCI+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwuZGVzY3JpcHRpb24gdGFyZ2V0PVxcXCJkYXRhLnN5c3RlbS5saWZlX3BhdGguZGVzY3JpcHRpb25cXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGhyPlxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3NlY3Rpb24+XFxuPC9mb3JtPlxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGZvcm0gY2xhc3M9XFxcInt7Y3NzQ2xhc3N9fSBmbGV4Y29sXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCI+XFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgSGVhZGVyIC0tfX1cXG4gICAgPGhlYWRlciBjbGFzcz1cXFwic2hlZXQtaGVhZGVyIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgPGltZyBjbGFzcz1cXFwicHJvZmlsZVxcXCIgc3JjPVxcXCJ7e2l0ZW0uaW1nfX1cXFwiIHRpdGxlPVxcXCJ7e2l0ZW0ubmFtZX19XFxcIiBkYXRhLWVkaXQ9XFxcImltZ1xcXCI+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItZGV0YWlscyBmbGV4cm93XFxcIj5cXG4gICAgICAgICAgICA8aDEgY2xhc3M9XFxcImNoYXJuYW1lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XFxcIm5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2l0ZW0ubmFtZX19XFxcIiBwbGFjZWhvbGRlcj1cXFwie3tsb2NhbGl6ZSAnRU9BLlJhY2VOYW1lJ319XFxcIj5cXG4gICAgICAgICAgICA8L2gxPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tc3VidGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIml0ZW0tdHlwZVxcXCI+e3tpdGVtVHlwZX19PC9oND5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tc3RhdHVzXFxcIj57e2l0ZW1TdGF0dXN9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBOYXZpZ2F0aW9uIC0tfX1cXG4gICAgPG5hdiBjbGFzcz1cXFwic2hlZXQtbmF2aWdhdGlvbiB0YWJzXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuRGVzY3JpcHRpb25cXFwifX08L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcInNpZ25hdHVyZS1hYmlsaXR5XFxcIj57e2xvY2FsaXplIFxcXCJFT0EuU2lnbmF0dXJlQWJpbGl0aWVzXFxcIn19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcIml0ZW1cXFwiIGRhdGEtdGFiPVxcXCJza2lsbHNcXFwiPnt7bG9jYWxpemUgXFxcIkVPQS5Ta2lsbHNcXFwifX08L2E+XFxuPCEtLSAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5kZXNjcmlwdGlvbi5za2lsbHMgYXMgfCBza2lsbCB8fX0tLT5cXG48IS0tICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbVxcXCIgZGF0YS10YWI9XFxcInt7c2tpbGwubmFtZX19XFxcIj57e3NraWxsLm5hbWV9fTwvYT4tLT5cXG48IS0tICAgICAgICB7ey9lYWNofX0tLT5cXG4gICAgPC9uYXY+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgQm9keSAtLX19XFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzaGVldC1ib2R5XFxcIj5cXG5cXG4gICAgICAgIHt7IS0tIERlc2NyaXB0aW9uIFRhYiAtLX19XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWIgZmxleHJvdyBhY3RpdmVcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuXFxuICAgICAgICAgICAgPCEtLSAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tcHJvcGVydGllc1xcXCI+LS0+XFxuICAgICAgICAgICAgPCEtLSAgICAgICAgJm5ic3A7LS0+XFxuICAgICAgICAgICAgPCEtLSAgICAgIDwvZGl2Pi0tPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnRcXFwiPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5kZXNjcmlwdGlvbi5vdmVydmlldyB0YXJnZXQ9XFxcInN5c3RlbS5kZXNjcmlwdGlvbi5vdmVydmlld1xcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZsYXNoYmFjayBBYmlsaXR5PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5GbGFzaGJhY2sgVHJpZ2dlcjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Rmxhc2hiYWNrIEVmZmVjdDwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uZmxhc2hiYWNrX2FiaWxpdHlcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLmZsYXNoYmFja19hYmlsaXR5fX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2RhdGEuc3lzdGVtLmZsYXNoYmFja19hYmlsaXR5fX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4M1xcXCI+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5mbGFzaGJhY2tfdHJpZ2dlclxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX3RyaWdnZXJ9fVxcXCItLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e2RhdGEuc3lzdGVtLmZsYXNoYmFja190cmlnZ2VyfX1cXFwiPi0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ZWRpdG9yIGRhdGEuc3lzdGVtLmZsYXNoYmFja190cmlnZ2VyIHRhcmdldD1cXFwiZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX3RyaWdnZXJcXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX2VmZmVjdFxcXCIgdmFsdWU9XFxcInt7ZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX2VmZmVjdH19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7ZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX2VmZmVjdH19XFxcIj4tLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5mbGFzaGJhY2tfZWZmZWN0IHRhcmdldD1cXFwiZGF0YS5zeXN0ZW0uZmxhc2hiYWNrX2VmZmVjdFxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U2lnbmF0dXJlIFJlc291cmNlPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RWZmZWN0PC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkcyBmbGV4MlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInN5c3RlbS5zaWduYXR1cmVfcmVzb3VyY2VcXFwiIHZhbHVlPVxcXCJ7e2RhdGEuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZX19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tkYXRhLnN5c3RlbS5zaWduYXR1cmVfcmVzb3VyY2V9fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5zaWduYXR1cmVfcmVzb3VyY2VfZGVzYyB0YXJnZXQ9XFxcImRhdGEuc3lzdGVtLnNpZ25hdHVyZV9yZXNvdXJjZV9kZXNjXFxcIiBidXR0b249dHJ1ZSBvd25lcj1vd25lciBlZGl0YWJsZT1lZGl0YWJsZX19XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzIGZsZXgzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5zaWduYXR1cmVfcmVzb3VyY2VfZWZmZWN0IHRhcmdldD1cXFwiZGF0YS5zeXN0ZW0uc2lnbmF0dXJlX3Jlc291cmNlX2VmZmVjdFxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBTaWduYXR1cmUgQWJpbGl0eSBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3dcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJzaWduYXR1cmUtYWJpbGl0eVxcXCI+XFxuXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8YnI+XFxuICAgICAgICAgICAgICAgIDxzdHJvbmc+U2lnbmF0dXJlIFRyYWl0czwvc3Ryb25nPjxocj5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5zaWduYXR1cmVfdHJhaXRzIGFzIHwgc2tpbGwgfH19XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uc2lnbmF0dXJlX3RyYWl0cy57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2lnbmF0dXJlX3RyYWl0cy57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCI+LS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAge3tlZGl0b3Igc2tpbGwuZGVzY3JpcHRpb24gdGFyZ2V0PVxcXCJza2lsbC5kZXNjcmlwdGlvblxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICB7eyEtLSBTa2lsbHMgVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93XFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwic2tpbGxzXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Ta2lsbCBMaXN0PC9zdHJvbmc+IChTdGFydGluZyBjaGFyYWN0ZXJzIGRpdmlkZSA1IHBvaW50cyBhcm91bmQgdGhpcyBsaXN0LiBObyBza2lsbCBjYW4gYmUgaGlnaGVyIHRoYW4gMiBhdCBjaGFyYWN0ZXIgY3JlYXRpb24pOjxocj5cXG4gICAgICAgICAgICAgICAge3sjZWFjaCBkYXRhLnN5c3RlbS5za2lsbF9saXN0IGFzIHwgc2tpbGwgfH19XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDFcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uc2tpbGxfbGlzdC57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7c2tpbGwubmFtZX19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHMgZmxleDRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJzeXN0ZW0uc2tpbGxfbGlzdC57e0BpbmRleH19LmRlc2NyaXB0aW9uXFxcIiB2YWx1ZT1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3tza2lsbC5kZXNjcmlwdGlvbn19XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8L2Rpdj5cXG5cXG48IS0tICAgICAgICB7eyEmIzQ1OyYjNDU7IFNraWxscyBUYWJzICYjNDU7JiM0NTt9fS0tPlxcbjwhLS0gICAgICAgIHt7I2VhY2ggZGF0YS5zeXN0ZW0uc2tpbGxzIGFzIHwgc2tpbGwgfH19LS0+XFxuPCEtLSAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3dcXFwiIGRhdGEtZ3JvdXA9XFxcInByaW1hcnlcXFwiIGRhdGEtdGFiPVxcXCJ7e3NraWxsLm5hbWV9fVxcXCI+LS0+XFxuXFxuPCEtLSAgICAgICAgICAgIDxkaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICB7e2l9fS0tPlxcbjwhLS0gICAgICAgICAgICAgICAgPGJyPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWZpZWxkc1xcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJkYXRhLnN5c3RlbS5za2lsbHMue3tAaW5kZXh9fS5kZXNjcmlwdGlvblxcXCIgdmFsdWU9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCItLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3NraWxsLmRlc2NyaXB0aW9ufX1cXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSZsdDshJm5kYXNoOyAgICAgICAgICAgICAgICA8c3Ryb25nPkRlc2NyaXB0aW9uOjwvc3Ryb25nPiA8aW5wdXQgY2xhc3M9XFxcImVvYS1pbi1wbGFjZS1ib3hcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCIgdmFsdWU9XFxcInt7c2tpbGwuZGVzY3JpcHRpb259fVxcXCIgLz4mbmRhc2g7Jmd0Oy0tPlxcblxcbjwhLS0gICAgICAgICAgICAgICAgPGJyPjxicj48c3Ryb25nPk5hbm9wcm9ncmFtczo8L3N0cm9uZz48aHI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICB7eyNlYWNoIHNraWxsLnByb2dyYW1zIGFzIHwgcGdtIHx9fS0tPlxcblxcbjwhLS0gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0AuLi9pbmRleH19LnByb2dyYW0ue3tAaW5kZXh9fS5uYW1lXFxcIiB2YWx1ZT1cXFwie3twZ20ubmFtZX19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLm5hbWV9fVxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1maWVsZHNcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZGF0YS5zeXN0ZW0uc2tpbGxzLnt7QC4uL2luZGV4fX0ucHJvZ3JhbS57e0BpbmRleH19Lm5hbWVcXFwiIHZhbHVlPVxcXCJ7e3BnbS5kZXNjcmlwdGlvbn19XFxcIi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGdtLmRlc2NyaXB0aW9ufX1cXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuXFxuPCEtLSAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFub3BvaW50IENvc3Q8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0AuLi9pbmRleH19LnByb2dyYW0ue3tAaW5kZXh9fS5ucFxcXCIgdmFsdWU9XFxcInt7cGdtLm5wfX1cXFwiLS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twZ20ubnB9fVxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OQ1U8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0AuLi9pbmRleH19LnByb2dyYW0ue3tAaW5kZXh9fS5uY3VcXFwiIHZhbHVlPVxcXCJ7e3BnbS5uY3V9fVxcXCItLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3BnbS5uY3V9fVxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FZmZlY3Q8L2xhYmVsPi0tPlxcbjwhLS0gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZmllbGRzXFxcIj4tLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImRhdGEuc3lzdGVtLnNraWxscy57e0AuLi9pbmRleH19LnByb2dyYW0ue3tAaW5kZXh9fS5lZmZlY3RcXFwiIHZhbHVlPVxcXCJ7e3BnbS5lZmZlY3R9fVxcXCItLT5cXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3BnbS5lZmZlY3R9fVxcXCI+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICAgICAgPC9kaXY+LS0+XFxuPCEtLSAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tJmx0OyEmbmRhc2g7ICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImVvYS1pbi1wbGFjZS1ib3hcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7cGdtLm5hbWV9fVxcXCIgdmFsdWU9XFxcInt7cGdtLm5hbWV9fVxcXCIgLz4mbmRhc2g7Jmd0Oy0tPlxcbjwhLS0mbHQ7ISZuZGFzaDsgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZW9hLWluLXBsYWNlLWJveFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwie3twZ20uZGVzY3JpcHRpb259fVxcXCIgdmFsdWU9XFxcInt7cGdtLmRlc2NyaXB0aW9ufX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJEZXNjcmlwdGlvblxcXCIgLz4mbmRhc2g7Jmd0Oy0tPlxcbjwhLS0mbHQ7ISZuZGFzaDsgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZW9hLWlubGluZS1sYWJlbFxcXCI+TmFub3BvaW50IENvc3Q6IDwvbGFiZWw+PGlucHV0IGNsYXNzPVxcXCJlb2EtaW5saW5lLWJveCBlb2Etd2lkdGgtMzBcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7cGdtLm5wfX1cXFwiIHZhbHVlPVxcXCJ7e3BnbS5ucH19XFxcIiAvPiZuZGFzaDsmZ3Q7LS0+XFxuPCEtLSZsdDshJm5kYXNoOyAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJlb2EtaW5saW5lLWxhYmVsXFxcIj5OQ1U6IDwvbGFiZWw+PGlucHV0IGNsYXNzPVxcXCJlb2EtaW5saW5lLWJveCBlb2Etd2lkdGgtMzBcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7cGdtLm5jdX19XFxcIiB2YWx1ZT1cXFwie3twZ20ubmN1fX1cXFwiIC8+Jm5kYXNoOyZndDstLT5cXG48IS0tJmx0OyEmbmRhc2g7ICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImVvYS1pbmxpbmUtbGFiZWxcXFwiPkVmZmVjdDogPC9sYWJlbD48aW5wdXQgY2xhc3M9XFxcImVvYS1pbmxpbmUtYm94IGVvYS13aWR0aC00ODBcXFwiIHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInt7cGdtLmVmZmVjdH19XFxcIiB2YWx1ZT1cXFwie3twZ20uZWZmZWN0fX1cXFwiIC8+Jm5kYXNoOyZndDstLT5cXG48IS0tICAgICAgICAgICAgICAgIDxocj4tLT5cXG48IS0tICAgICAgICAgICAgICAgIHt7L2VhY2h9fS0tPlxcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG48IS0tICAgICAgICA8L2Rpdj4tLT5cXG48IS0tICAgICAgICB7ey9lYWNofX0tLT5cXG4gICAgPC9zZWN0aW9uPlxcblxcbjwhLS0gICAgPGZvb3RlciBjbGFzcz1cXFwic2hlZXQtZm9vdGVyXFxcIj4tLT5cXG48IS0tICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+PGkgY2xhc3M9XFxcImZhcyBmYS1zYXZlXFxcIj48L2k+IHt7bG9jYWxpemUgc3VibWl0VGV4dH19PC9idXR0b24+LS0+XFxuPCEtLSAgICA8L2Zvb3Rlcj4tLT5cXG48L2Zvcm0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuU2tpbGxOYW1lJ319XFxcIj5cXG4gICAgICAgICAgICA8L2gxPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tc3VidGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIml0ZW0tdHlwZVxcXCI+e3tpdGVtVHlwZX19PC9oND5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIml0ZW0tc3RhdHVzXFxcIj57e2l0ZW1TdGF0dXN9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2hlYWRlcj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBOYXZpZ2F0aW9uIC0tfX1cXG4gICAgPG5hdiBjbGFzcz1cXFwic2hlZXQtbmF2aWdhdGlvbiB0YWJzXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJpdGVtIGFjdGl2ZVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj57e2xvY2FsaXplIFxcXCJFT0EuRGVzY3JpcHRpb25cXFwifX08L2E+XFxuICAgIDwvbmF2PlxcblxcbiAgICB7eyEtLSBJdGVtIFNoZWV0IEJvZHkgLS19fVxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2hlZXQtYm9keVxcXCI+XFxuXFxuICAgICAgICB7eyEtLSBEZXNjcmlwdGlvbiBUYWIgLS19fVxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiIGZsZXhyb3cgYWN0aXZlXFxcIiBkYXRhLWdyb3VwPVxcXCJwcmltYXJ5XFxcIiBkYXRhLXRhYj1cXFwiZGVzY3JpcHRpb25cXFwiPlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIml0ZW0tcHJvcGVydGllc1xcXCI+XFxuICAgICAgICAgICAgICAgICZuYnNwO1xcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJyPlxcbiAgICAgICAgICAgICAgICB7e2VkaXRvciBkYXRhLnN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZSB0YXJnZXQ9XFxcInN5c3RlbS5kZXNjcmlwdGlvbi52YWx1ZVxcXCIgYnV0dG9uPXRydWUgb3duZXI9b3duZXIgZWRpdGFibGU9ZWRpdGFibGV9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvc2VjdGlvbj5cXG48L2Zvcm0+XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCI8Zm9ybSBjbGFzcz1cXFwie3tjc3NDbGFzc319IGZsZXhjb2xcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIj5cXG4gICAge3shLS0gSXRlbSBTaGVldCBIZWFkZXIgLS19fVxcbiAgICA8aGVhZGVyIGNsYXNzPVxcXCJzaGVldC1oZWFkZXIgZmxleHJvd1xcXCI+XFxuICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlXFxcIiBzcmM9XFxcInt7aXRlbS5pbWd9fVxcXCIgdGl0bGU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIGRhdGEtZWRpdD1cXFwiaW1nXFxcIj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1kZXRhaWxzIGZsZXhyb3dcXFwiPlxcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cXFwiY2hhcm5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cXFwibmFtZVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7aXRlbS5uYW1lfX1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7e2xvY2FsaXplICdFT0EuU3VwcGx5TmFtZSd9fVxcXCI+XFxuICAgICAgICAgICAgPC9oMT5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXN1YnRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJpdGVtLXR5cGVcXFwiPnt7aXRlbVR5cGV9fTwvaDQ+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpdGVtLXN0YXR1c1xcXCI+e3tpdGVtU3RhdHVzfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9oZWFkZXI+XFxuXFxuICAgIHt7IS0tIEl0ZW0gU2hlZXQgTmF2aWdhdGlvbiAtLX19XFxuICAgIDxuYXYgY2xhc3M9XFxcInNoZWV0LW5hdmlnYXRpb24gdGFic1xcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwiaXRlbSBhY3RpdmVcXFwiIGRhdGEtdGFiPVxcXCJkZXNjcmlwdGlvblxcXCI+e3tsb2NhbGl6ZSBcXFwiRU9BLkRlc2NyaXB0aW9uXFxcIn19PC9hPlxcbiAgICA8L25hdj5cXG5cXG4gICAge3shLS0gSXRlbSBTaGVldCBCb2R5IC0tfX1cXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcInNoZWV0LWJvZHlcXFwiPlxcblxcbiAgICAgICAge3shLS0gRGVzY3JpcHRpb24gVGFiIC0tfX1cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYiBmbGV4cm93IGFjdGl2ZVxcXCIgZGF0YS1ncm91cD1cXFwicHJpbWFyeVxcXCIgZGF0YS10YWI9XFxcImRlc2NyaXB0aW9uXFxcIj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpdGVtLXByb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAmbmJzcDtcXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxicj5cXG4gICAgICAgICAgICAgICAge3tlZGl0b3IgZGF0YS5zeXN0ZW0uZGVzY3JpcHRpb24gdGFyZ2V0PVxcXCJzeXN0ZW0uZGVzY3JpcHRpb25cXFwiIGJ1dHRvbj10cnVlIG93bmVyPW93bmVyIGVkaXRhYmxlPWVkaXRhYmxlfX1cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICA8L3NlY3Rpb24+XFxuPC9mb3JtPlxcblwiOyIsImltcG9ydCBcIi4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvYWN0b3IvYWN0b3ItaGVyby1zaGVldC5odG1sXCI7IGltcG9ydCBcIi4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvYnJlZWQtc2hlZXQuaHRtbFwiOyBpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL2ZhY3Rpb24tc2hlZXQuaHRtbFwiOyBpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL2xvYWRvdXQtc2hlZXQuaHRtbFwiOyBpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL29yaWdpbi1zaGVldC5odG1sXCI7IGltcG9ydCBcIi4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvcHJvZmVzc2lvbi1zaGVldC5odG1sXCI7IGltcG9ydCBcIi4uLy4uLy4uL3N0YXRpYy90ZW1wbGF0ZXMvaXRlbXMvc2tpbGwtc2hlZXQuaHRtbFwiOyBpbXBvcnQgXCIuLi8uLi8uLi9zdGF0aWMvdGVtcGxhdGVzL2l0ZW1zL3N1cHBseS1zaGVldC5odG1sXCI7XG5cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZVByZWxvYWRlciB7XG4gICAgLyoqXG4gICAgICogUHJlbG9hZCBhIHNldCBvZiB0ZW1wbGF0ZXMgdG8gY29tcGlsZSBhbmQgY2FjaGUgdGhlbSBmb3IgZmFzdCBhY2Nlc3MgZHVyaW5nIHJlbmRlcmluZ1xuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBwcmVsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcygpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVQYXRocyA9IFtcIm1vZHVsZXMvdGVtcGxhdGUvdGVtcGxhdGVzL2l0ZW1zL3N1cHBseS1zaGVldC5odG1sXCIsIFwibW9kdWxlcy90ZW1wbGF0ZS90ZW1wbGF0ZXMvaXRlbXMvc2tpbGwtc2hlZXQuaHRtbFwiLCBcIm1vZHVsZXMvdGVtcGxhdGUvdGVtcGxhdGVzL2l0ZW1zL3Byb2Zlc3Npb24tc2hlZXQuaHRtbFwiLCBcIm1vZHVsZXMvdGVtcGxhdGUvdGVtcGxhdGVzL2l0ZW1zL29yaWdpbi1zaGVldC5odG1sXCIsIFwibW9kdWxlcy90ZW1wbGF0ZS90ZW1wbGF0ZXMvaXRlbXMvbG9hZG91dC1zaGVldC5odG1sXCIsIFwibW9kdWxlcy90ZW1wbGF0ZS90ZW1wbGF0ZXMvaXRlbXMvZmFjdGlvbi1zaGVldC5odG1sXCIsIFwibW9kdWxlcy90ZW1wbGF0ZS90ZW1wbGF0ZXMvaXRlbXMvYnJlZWQtc2hlZXQuaHRtbFwiLCBcIm1vZHVsZXMvdGVtcGxhdGUvdGVtcGxhdGVzL2FjdG9yL2FjdG9yLWhlcm8tc2hlZXQuaHRtbFwiXTtcbiAgICAgICAgcmV0dXJuIGxvYWRUZW1wbGF0ZXModGVtcGxhdGVQYXRocyk7XG4gICAgfVxufVxuIiwiXG4vKipcbiAqIEBleHRlbmRzIHtJdGVtU2hlZXR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFb0FCcmVlZFNoZWV0IGV4dGVuZHMgSXRlbVNoZWV0IHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIGZvdW5kcnkudXRpbHMubWVyZ2VPYmplY3Qoc3VwZXIuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgIGNsYXNzZXM6IFtcImVvYVwiLCBcInNoZWV0XCIsIFwiaXRlbVwiXSxcbiAgICAgIHRlbXBsYXRlOiBcInN5c3RlbXMvZW9hL3RlbXBsYXRlcy9pdGVtcy9icmVlZC1zaGVldC5odG1sXCIsXG4gICAgICB3aWR0aDogODUwLFxuICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICB0YWJzOiBbe25hdlNlbGVjdG9yOiBcIi5zaGVldC1uYXZpZ2F0aW9uXCIsIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLCBpbml0aWFsOiBcImRlc2NyaXB0aW9uXCJ9XSxcbiAgICAgIGRyYWdEcm9wOiBbe2RyYWdTZWxlY3RvcjogXCIuZHJhZ2dhYmxlXCIsIGRyb3BTZWxlY3RvcjogbnVsbH1dLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHN1cGVyLmdldERhdGEoKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICAgIC8vIGNvbnRleHQuc3lzdGVtRGF0YSA9IGNvbnRleHQuZGF0YS5zeXN0ZW07XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sKSB7XG4gICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG5cbiAgICAvLyBhY2Nlc3NpYmlsaXR5KHRoaXMuaXRlbSwgaHRtbCk7XG5cbiAgICAvLyBFdmVyeXRoaW5nIGJlbG93IGhlcmUgaXMgb25seSBuZWVkZWQgaWYgdGhlIHNoZWV0IGlzIGVkaXRhYmxlXG4gICAgaWYgKCAhdGhpcy5pc0VkaXRhYmxlICkgcmV0dXJuO1xuICB9XG59XG4iLCJcbi8qKlxuICogQGV4dGVuZHMge0l0ZW1TaGVldH1cbiAqL1xuZXhwb3J0IGNsYXNzIEVvQUZhY3Rpb25TaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvZmFjdGlvbi1zaGVldC5odG1sXCIsXG4gICAgICB3aWR0aDogODUwLFxuICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICB0YWJzOiBbe25hdlNlbGVjdG9yOiBcIi5zaGVldC1uYXZpZ2F0aW9uXCIsIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLCBpbml0aWFsOiBcImRlc2NyaXB0aW9uXCJ9XSxcbiAgICAgIGRyYWdEcm9wOiBbe2RyYWdTZWxlY3RvcjogXCIuZHJhZ2dhYmxlXCIsIGRyb3BTZWxlY3RvcjogbnVsbH1dLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHN1cGVyLmdldERhdGEoKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICAgIC8vIGNvbnRleHQuc3lzdGVtRGF0YSA9IGNvbnRleHQuZGF0YS5zeXN0ZW07XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sKSB7XG4gICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG5cbiAgICAvLyBhY2Nlc3NpYmlsaXR5KHRoaXMuaXRlbSwgaHRtbCk7XG5cbiAgICAvLyBFdmVyeXRoaW5nIGJlbG93IGhlcmUgaXMgb25seSBuZWVkZWQgaWYgdGhlIHNoZWV0IGlzIGVkaXRhYmxlXG4gICAgaWYgKCAhdGhpcy5pc0VkaXRhYmxlICkgcmV0dXJuO1xuICB9XG59XG4iLCJcbi8qKlxuICogQGV4dGVuZHMge0l0ZW1TaGVldH1cbiAqL1xuZXhwb3J0IGNsYXNzIEVvQU9yaWdpblNoZWV0IGV4dGVuZHMgSXRlbVNoZWV0IHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIGZvdW5kcnkudXRpbHMubWVyZ2VPYmplY3Qoc3VwZXIuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgIGNsYXNzZXM6IFtcImVvYVwiLCBcInNoZWV0XCIsIFwiaXRlbVwiXSxcbiAgICAgIHRlbXBsYXRlOiBcInN5c3RlbXMvZW9hL3RlbXBsYXRlcy9pdGVtcy9vcmlnaW4tc2hlZXQuaHRtbFwiLFxuICAgICAgd2lkdGg6IDg1MCxcbiAgICAgIGhlaWdodDogNDgwLFxuICAgICAgdGFiczogW3tuYXZTZWxlY3RvcjogXCIuc2hlZXQtbmF2aWdhdGlvblwiLCBjb250ZW50U2VsZWN0b3I6IFwiLnNoZWV0LWJvZHlcIiwgaW5pdGlhbDogXCJkZXNjcmlwdGlvblwifV0sXG4gICAgICBkcmFnRHJvcDogW3tkcmFnU2VsZWN0b3I6IFwiLmRyYWdnYWJsZVwiLCBkcm9wU2VsZWN0b3I6IG51bGx9XSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBnZXREYXRhKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzdXBlci5nZXREYXRhKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcbiAgICAvLyBjb250ZXh0LnN5c3RlbURhdGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCkge1xuICAgIHN1cGVyLmFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpO1xuXG4gICAgLy8gYWNjZXNzaWJpbGl0eSh0aGlzLml0ZW0sIGh0bWwpO1xuXG4gICAgLy8gRXZlcnl0aGluZyBiZWxvdyBoZXJlIGlzIG9ubHkgbmVlZGVkIGlmIHRoZSBzaGVldCBpcyBlZGl0YWJsZVxuICAgIGlmICggIXRoaXMuaXNFZGl0YWJsZSApIHJldHVybjtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVvQVByb2Zlc3Npb25TaGVldCBleHRlbmRzIEl0ZW1TaGVldCB7XG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBzdGF0aWMgZ2V0IGRlZmF1bHRPcHRpb25zKCkge1xuICAgIHJldHVybiBmb3VuZHJ5LnV0aWxzLm1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICBjbGFzc2VzOiBbXCJlb2FcIiwgXCJzaGVldFwiLCBcIml0ZW1cIl0sXG4gICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvaXRlbXMvcHJvZmVzc2lvbi1zaGVldC5odG1sXCIsXG4gICAgICB3aWR0aDogODUwLFxuICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICB0YWJzOiBbe25hdlNlbGVjdG9yOiBcIi5zaGVldC1uYXZpZ2F0aW9uXCIsIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLCBpbml0aWFsOiBcImRlc2NyaXB0aW9uXCJ9XSxcbiAgICAgIGRyYWdEcm9wOiBbe2RyYWdTZWxlY3RvcjogXCIuZHJhZ2dhYmxlXCIsIGRyb3BTZWxlY3RvcjogbnVsbH1dLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHN1cGVyLmdldERhdGEoKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICAgIC8vIGNvbnRleHQuc3lzdGVtRGF0YSA9IGNvbnRleHQuZGF0YS5zeXN0ZW07XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sKSB7XG4gICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG5cbiAgICAvLyBhY2Nlc3NpYmlsaXR5KHRoaXMuaXRlbSwgaHRtbCk7XG5cbiAgICAvLyBFdmVyeXRoaW5nIGJlbG93IGhlcmUgaXMgb25seSBuZWVkZWQgaWYgdGhlIHNoZWV0IGlzIGVkaXRhYmxlXG4gICAgaWYgKCAhdGhpcy5pc0VkaXRhYmxlICkgcmV0dXJuO1xuICB9XG59XG4iLCJcbi8qKlxuICogQGV4dGVuZHMge0l0ZW1TaGVldH1cbiAqL1xuZXhwb3J0IGNsYXNzIEVvQVNraWxsU2hlZXQgZXh0ZW5kcyBJdGVtU2hlZXQge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gZm91bmRyeS51dGlscy5tZXJnZU9iamVjdChzdXBlci5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgY2xhc3NlczogW1wiZW9hXCIsIFwic2hlZXRcIiwgXCJpdGVtXCJdLFxuICAgICAgdGVtcGxhdGU6IFwic3lzdGVtcy9lb2EvdGVtcGxhdGVzL2l0ZW1zL3NraWxsLXNoZWV0Lmh0bWxcIixcbiAgICAgIHdpZHRoOiA4NTAsXG4gICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgIHRhYnM6IFt7bmF2U2VsZWN0b3I6IFwiLnNoZWV0LW5hdmlnYXRpb25cIiwgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIn1dLFxuICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5kcmFnZ2FibGVcIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3VwZXIuZ2V0RGF0YSgpO1xuXG4gICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgLy8gY29udGV4dC5zeXN0ZW1EYXRhID0gY29udGV4dC5kYXRhLnN5c3RlbTtcblxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcbiAgICBzdXBlci5hY3RpdmF0ZUxpc3RlbmVycyhodG1sKTtcblxuICAgIC8vIGFjY2Vzc2liaWxpdHkodGhpcy5pdGVtLCBodG1sKTtcblxuICAgIC8vIEV2ZXJ5dGhpbmcgYmVsb3cgaGVyZSBpcyBvbmx5IG5lZWRlZCBpZiB0aGUgc2hlZXQgaXMgZWRpdGFibGVcbiAgICBpZiAoICF0aGlzLmlzRWRpdGFibGUgKSByZXR1cm47XG4gIH1cbn1cbiIsIlxuLyoqXG4gKiBAZXh0ZW5kcyB7SXRlbVNoZWV0fVxuICovXG5leHBvcnQgY2xhc3MgRW9BU3VwcGx5U2hlZXQgZXh0ZW5kcyBJdGVtU2hlZXQge1xuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICByZXR1cm4gZm91bmRyeS51dGlscy5tZXJnZU9iamVjdChzdXBlci5kZWZhdWx0T3B0aW9ucywge1xuICAgICAgY2xhc3NlczogW1wiZW9hXCIsIFwic2hlZXRcIiwgXCJpdGVtXCJdLFxuICAgICAgdGVtcGxhdGU6IFwic3lzdGVtcy9lb2EvdGVtcGxhdGVzL2l0ZW1zL3N1cHBseS1zaGVldC5odG1sXCIsXG4gICAgICB3aWR0aDogODUwLFxuICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICB0YWJzOiBbe25hdlNlbGVjdG9yOiBcIi5zaGVldC1uYXZpZ2F0aW9uXCIsIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLCBpbml0aWFsOiBcImRlc2NyaXB0aW9uXCJ9XSxcbiAgICAgIGRyYWdEcm9wOiBbe2RyYWdTZWxlY3RvcjogXCIuZHJhZ2dhYmxlXCIsIGRyb3BTZWxlY3RvcjogbnVsbH1dLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIGdldERhdGEoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHN1cGVyLmdldERhdGEoKTtcblxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICAgIC8vIGNvbnRleHQuc3lzdGVtRGF0YSA9IGNvbnRleHQuZGF0YS5zeXN0ZW07XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sKSB7XG4gICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG5cbiAgICAvLyBhY2Nlc3NpYmlsaXR5KHRoaXMuaXRlbSwgaHRtbCk7XG5cbiAgICAvLyBFdmVyeXRoaW5nIGJlbG93IGhlcmUgaXMgb25seSBuZWVkZWQgaWYgdGhlIHNoZWV0IGlzIGVkaXRhYmxlXG4gICAgaWYgKCAhdGhpcy5pc0VkaXRhYmxlICkgcmV0dXJuO1xuICB9XG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gUm9sbFRlc3Qoe1xuICAgIG51bWJlck9mRGljZSA9IDIsXG4gICAgbnVtYmVyT2ZTaWRlcyA9IDYsXG4gICAgZGVmYXVsdFRocmVzaG9sZCA9IDUsXG4gICAgZm9jdXNBY3Rpb24gPSBmYWxzZSxcbiAgICBtYXJrc21hblRyYWl0ID0gZmFsc2UgfSA9IHt9KSB7XG5cbiAgICBsZXQgdGhyZXNob2xkID0gZGVmYXVsdFRocmVzaG9sZDtcbiAgICBpZiAoZm9jdXNBY3Rpb24gJiYgKGZvY3VzQWN0aW9uID09PSAndHJ1ZScpKVxuICAgIHtcbiAgICAgICAgdGhyZXNob2xkID0gdGhyZXNob2xkIC0gMTtcbiAgICB9XG5cbiAgICBpZiAobWFya3NtYW5UcmFpdCAmJiAobWFya3NtYW5UcmFpdCA9PT0gJ3RydWUnKSlcbiAgICB7XG4gICAgICAgIHRocmVzaG9sZCA9IHRocmVzaG9sZCAtIDE7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJvbGxGb3J1bWxhID0gYCR7bnVtYmVyT2ZEaWNlfWQke251bWJlck9mU2lkZXN9Y3M+PSR7dGhyZXNob2xkfWA7XG5cbiAgICAvLyBFeGVjdXRlIHRoZSByb2xsXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IG5ldyBSb2xsKHJvbGxGb3J1bWxhLCB7fSkuZXZhbHVhdGUoeydhc3luYyc6IHRydWV9KVxuICAgIGxldCByZW5kZXJlZFJvbGwgPSBhd2FpdCByZW5kZXJUZW1wbGF0ZShcInN5c3RlbXMvdGlueWQ2L3RlbXBsYXRlcy9wYXJ0aWFscy90ZXN0LXJlc3VsdC5oYnNcIiwgeyByb2xsUmVzdWx0OiByZXN1bHQgfSk7XG4gICAgLy8gbGV0IHJlbmRlcmVkUm9sbCA9IGF3YWl0IHJlc3VsdC5yZW5kZXIoeyByZXN1bHQ6IHJlc3VsdCwgdGVtcGxhdGU6IFwic3lzdGVtcy90aW55ZDYvdGVtcGxhdGVzL3BhcnRpYWxzL3Rlc3QtcmVzdWx0Lmhic1wiIH0pO1xuXG4gICAgY29uc3QgY2hhdERhdGEgPSB7XG4gICAgICAgIHNwZWFrZXI6IENoYXRNZXNzYWdlLmdldFNwZWFrZXIoKSxcbiAgICAgICAgY29udGVudDogcmVuZGVyZWRSb2xsXG4gICAgfTtcblxuICAgIHJlc3VsdC50b01lc3NhZ2UoY2hhdERhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9jdXNPcHRpb24oZm9ybSwgZWxlbWVudCkge1xuICAgIGZvcm0uZmluZChcIi5kaWUtcm9sbGVyID4gLnJvbGwtZGljZVwiKS5lYWNoKChuLCB0YWcpID0+IHtcbiAgICAgICAgdGFnLmRhdGFzZXQuZW5hYmxlRm9jdXMgPSBlbGVtZW50LmNoZWNrZWRcbiAgICB9KTtcblxuICAgIGlmIChlbGVtZW50LmNoZWNrZWQpXG4gICAge1xuICAgICAgICBmb3JtLmZpbmQoXCIuYWN0aW9uLW1vZGlmaWVycyAudG9nZ2xlLW1hcmtzbWFuXCIpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGNvbnN0IG1hcmtzbWFuRWxlbWVudCA9IGZvcm0uZmluZChcIi5hY3Rpb24tbW9kaWZpZXJzIC50b2dnbGUtbWFya3NtYW5cIik7XG4gICAgICAgIG1hcmtzbWFuRWxlbWVudC5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XG4gICAgICAgIG1hcmtzbWFuRWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWFya3NtYW5PcHRpb24oZm9ybSwgZWxlbWVudClcbntcbiAgICBmb3JtLmZpbmQoXCIuZGllLXJvbGxlciA+IC5yb2xsLWRpY2VcIikuZWFjaCgobiwgdGFnKSA9PiB7XG4gICAgICAgIHRhZy5kYXRhc2V0LmVuYWJsZU1hcmtzbWFuID0gZWxlbWVudC5jaGVja2VkO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGljZVRvRmFjZXModmFsdWUsIGNvbnRlbnQpXG57XG4gICAgc3dpdGNoICh2YWx1ZSlcbiAgICB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWRpY2Utb25lXCI7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWRpY2UtdHdvXCI7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWRpY2UtdGhyZWVcIjtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcmV0dXJuIFwiZmEtZGljZS1mb3VyXCI7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgIHJldHVybiBcImZhLWRpY2UtZml2ZVwiO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gXCJmYS1kaWNlLXNpeFwiO1xuICAgIH1cblxuICAgIHJldHVybiBcImZhLWRpY2UtZDZcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpY2VUb0ZhY2VzQWx0KHZhbHVlLCBjb250ZW50KVxue1xuICAgIHN3aXRjaCAodmFsdWUpXG4gICAge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gXCJlb2EtZGljZS1vbmVcIjtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIFwiZW9hLWRpY2UtdHdvXCI7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiBcImVvYS1kaWNlLXRocmVlXCI7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHJldHVybiBcImVvYS1kaWNlLWZvdXJcIjtcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgcmV0dXJuIFwiZW9hLWRpY2UtZml2ZVwiO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICByZXR1cm4gXCJlb2EtZGljZS1zaXhcIjtcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgcmV0dXJuIFwiZW9hLWRpY2Utc2V2ZW5cIjtcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgcmV0dXJuIFwiZW9hLWRpY2UtZWlnaHRcIjtcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgcmV0dXJuIFwiZW9hLWRpY2UtbmluZVwiO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgcmV0dXJuIFwiZW9hLWRpY2UtdGVuXCI7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICByZXR1cm4gXCJlb2EtZGljZS1lbGV2ZW5cIjtcbiAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgIHJldHVybiBcImVvYS1kaWNlLXR3ZWx2ZVwiO1xuICAgIH1cblxuICAgIHJldHVybiBcImZhLWRpY2UtZDZcIjtcbn0iLCJpbXBvcnQgeyBSb2xsRnV4RGljZSB9IGZyb20gICAnL3N0YXRpYy9zY3JpcHRzL2Z1eC1kaWNlLXJvbGxlci1yb2xsLmpzJztcblxuLy8gc2xlZXAgdGltZSBleHBlY3RzIG1pbGxpc2Vjb25kc1xuZnVuY3Rpb24gc2xlZXAgKHRpbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VfZm9ybXVsYShzdHJfZm9ybXVsYSkge1xuICAgIHJldHVybiBzdHJfZm9ybXVsYS5yZXBsYWNlKFwie0h9XCIsIFwiIEhpdHMgXCIpLnJlcGxhY2UoXCJ7VH1cIiwgXCIgVGllclwiKS5yZXBsYWNlKFwiK1wiLCBcIiArXCIpO1xufVxuXG4vKipcbiAqIEV4dGVuZCB0aGUgYmFzaWMgQWN0b3JTaGVldCB3aXRoIHNvbWUgdmVyeSBzaW1wbGUgbW9kaWZpY2F0aW9uc1xuICogQGV4dGVuZHMge0FjdG9yU2hlZXR9XG4gKi9cbmV4cG9ydCBjbGFzcyBFb0FBY3RvclNoZWV0IGV4dGVuZHMgQWN0b3JTaGVldCB7XG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgc3RhdGljIGdldCBkZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0KHN1cGVyLmRlZmF1bHRPcHRpb25zLCB7XG4gICAgICAgICAgICBjbGFzc2VzOiBbXCJib2lsZXJwbGF0ZVwiLCBcInNoZWV0XCIsIFwiYWN0b3JcIl0sXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJzeXN0ZW1zL2VvYS90ZW1wbGF0ZXMvYWN0b3IvYWN0b3Itc2hlZXQuaHRtbFwiLFxuICAgICAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgICAgIGhlaWdodDogODAwLFxuICAgICAgICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5pdGVtLWxpc3QgLml0ZW1cIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgICAgICAgICB0YWJzOiBbe25hdlNlbGVjdG9yOiBcIi5zaGVldC1uYXZpZ2F0aW9uXCIsIGNvbnRlbnRTZWxlY3RvcjogXCIuc2hlZXQtYm9keVwiLCBpbml0aWFsOiBcImZlYXR1cmVzXCJ9XVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgZ2V0IHRlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gYHN5c3RlbXMvZW9hL3RlbXBsYXRlcy9hY3Rvci9hY3Rvci0ke3RoaXMuYWN0b3IudHlwZX0tc2hlZXQuaHRtbGA7XG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cbiAgICBnZXREYXRhKCkge1xuICAgICAgICAvLyBSZXRyaWV2ZSB0aGUgZGF0YSBzdHJ1Y3R1cmUgZnJvbSB0aGUgYmFzZSBzaGVldC4gWW91IGNhbiBpbnNwZWN0IG9yIGxvZ1xuICAgICAgICAvLyB0aGUgY29udGV4dCB2YXJpYWJsZSB0byBzZWUgdGhlIHN0cnVjdHVyZSwgYnV0IHNvbWUga2V5IHByb3BlcnRpZXMgZm9yXG4gICAgICAgIC8vIHNoZWV0cyBhcmUgdGhlIGFjdG9yIG9iamVjdCwgdGhlIGRhdGEgb2JqZWN0LCB3aGV0aGVyIG9yIG5vdCBpdCdzXG4gICAgICAgIC8vIGVkaXRhYmxlLCB0aGUgaXRlbXMgYXJyYXksIGFuZCB0aGUgZWZmZWN0cyBhcnJheS5cbiAgICAgICAgY29uc3QgY29udGV4dCA9IHN1cGVyLmdldERhdGEoKTtcblxuICAgICAgICAvLyBVc2UgYSBzYWZlIGNsb25lIG9mIHRoZSBhY3RvciBkYXRhIGZvciBmdXJ0aGVyIG9wZXJhdGlvbnMuXG4gICAgICAgIGNvbnN0IGFjdG9yRGF0YSA9IHRoaXMuYWN0b3IudG9PYmplY3QoZmFsc2UpO1xuXG4gICAgICAgIC8vIEFkZCB0aGUgYWN0b3IncyBkYXRhIHRvIGNvbnRleHQuZGF0YSBmb3IgZWFzaWVyIGFjY2VzcywgYXMgd2VsbCBhcyBmbGFncy5cbiAgICAgICAgLy8gY29udGV4dC5kYXRhID0gYWN0b3JEYXRhLnN5c3RlbTtcbiAgICAgICAgLy8gY29udGV4dC5mbGFncyA9IGFjdG9yRGF0YS5mbGFncztcbiAgICAgICAgY29udGV4dC5jb25maWcgPSBDT05GSUcuZW9hO1xuICAgICAgICBjb250ZXh0Lm1heF9ocCA9IDA7XG4gICAgICAgIGNvbnRleHQubWF4X25wID0gMDtcbiAgICAgICAgY29udGV4dC5pbml0ID0gMDtcbiAgICAgICAgY29udGV4dC5icmVlZCA9IGNvbnRleHQuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlID09PSBcImJyZWVkXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5icmVlZF9kaWN0ID0ge307XG4gICAgICAgIGNvbnRleHQuYnJlZWRfbGlmZXBhdGggPSBjb250ZXh0LmRhdGEuc3lzdGVtLmJyZWVkX2xpZmVwYXRoO1xuICAgICAgICBpZiAoY29udGV4dC5icmVlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5icmVlZF9saWZlcGF0aCAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRleHQuYnJlZWRfbGlmZXBhdGgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnRleHQuYnJlZWRbMF0uc3lzdGVtLnNraWxscyk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dHJfdmFscyA9IGNvbnRleHQuYnJlZWRbMF0uc3lzdGVtLnNraWxscy5maWx0ZXIoZSA9PiBlW1wibmFtZVwiXSA9PT0gY29udGV4dC5icmVlZF9saWZlcGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJfdmFscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dHJfdmFsc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubWF4X2hwID0gKHBhcnNlSW50KGF0dHJfdmFsc1swXS5zdHIpICsgcGFyc2VJbnQoYXR0cl92YWxzWzBdLnN0YSkpICogMTA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQubWF4X25wID0gKHBhcnNlSW50KGF0dHJfdmFsc1swXS5pbnQpICsgcGFyc2VJbnQoYXR0cl92YWxzWzBdLnBzeSkpICogMTA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaW5pdCA9IChwYXJzZUludChhdHRyX3ZhbHNbMF0uc2VuKSArIHBhcnNlSW50KGF0dHJfdmFsc1swXS5hZ2kpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGV4dC5tYXhfc3AgPSA2O1xuICAgICAgICAgICAgICAgIGNvbnRleHQubWF4X25jdSA9IDEwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5icmVlZFswXS5zeXN0ZW0uc2tpbGxzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5icmVlZF9kaWN0W2VsLm5hbWVdID0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcIj4ke2VsLmxvd30tJHtlbC5oaWdofTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkcyBmbGV4MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFwiPiR7ZWwubmFtZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRzIGZsZXg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcIj4ke2VsLmRlc2NyaXB0aW9ufTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRzIGZsZXg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcIj48c3Ryb25nPkF0dHJpYnV0ZXM6PC9zdHJvbmc+IFN0ciAke2VsLnN0cn0sIFN0YSAke2VsLnN0YX0sIEFnaSAke2VsLmFnaX0sIEludCAke2VsLmludH0sIFNlbiAke2VsLnNlbn0sIFBzeSAke2VsLnBzeX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LmF0dHJzID0ge307XG4gICAgICAgIGlmICgoY29udGV4dC5icmVlZC5sZW5ndGggPiAwKSAmJiAoY29udGV4dC5icmVlZF9saWZlcGF0aCAhPT0gXCJcIikpIHtcbiAgICAgICAgICAgIGNvbnRleHQuaGFzX3N0YXRzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnRleHQuYnJlZWRbMF0uc3lzdGVtLnNraWxscy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbC5uYW1lID09PSBjb250ZXh0LmJyZWVkX2xpZmVwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuYXR0cnMgPSB7XCJzdHJcIjogZWwuc3RyLCBcInN0YVwiOiBlbC5zdGEsIFwiYWdpXCI6IGVsLmFnaSwgXCJpbnRcIjogZWwuaW50LCBcInNlblwiOiBlbC5zZW4sIFwicHN5XCI6IGVsLnBzeX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0Lmhhc19zdGF0cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRleHQub3JpZ2luID0gY29udGV4dC5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgPT09IFwib3JpZ2luXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5vcmlnaW5fZGljdCA9IHt9O1xuICAgICAgICBpZiAoY29udGV4dC5vcmlnaW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29udGV4dC5vcmlnaW5bMF0uc3lzdGVtLmxpZmVfcGF0aC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRleHQub3JpZ2luX2RpY3RbZWwubmFtZV0gPSBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwid2lkdGg6IDEwMCU7IGZsZXg6IG5vbmUgIWltcG9ydGFudDsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50XCI+JHtlbC5sb3d9LSR7ZWwuaGlnaH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZHMgZmxleDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJ3aWR0aDogMTAwJTsgZmxleDogbm9uZSAhaW1wb3J0YW50OyB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnRcIj4ke2VsLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRzIGZsZXg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwid2lkdGg6IDEwMCU7IGZsZXg6IG5vbmUgIWltcG9ydGFudDsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50XCI+JHtlbC5kZXNjcmlwdGlvbn08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0Lm9yaWdpbl9saWZlcGF0aCA9IGNvbnRleHQuZGF0YS5zeXN0ZW0ub3JpZ2luX2xpZmVwYXRoO1xuICAgICAgICBjb250ZXh0LnByb2Zlc3Npb24gPSBjb250ZXh0Lml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udHlwZSA9PT0gXCJwcm9mZXNzaW9uXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5za2lsbCA9IGNvbnRleHQuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlID09PSBcInNraWxsXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29udGV4dC5mYWN0aW9uID0gY29udGV4dC5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGUgPT09IFwiZmFjdGlvblwiXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnRleHQubG9hZG91dCA9IGNvbnRleHQuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50eXBlID09PSBcImxvYWRvdXRcIlxuICAgICAgICB9KVxuICAgICAgICBpZiAoY29udGV4dC5sb2Fkb3V0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnRleHQucHJpbWFyeV9kYW1hZ2VfZm9ybXVsYSA9IHBhcnNlX2Zvcm11bGEoY29udGV4dC5sb2Fkb3V0WzBdLnN5c3RlbS5wcmltYXJ5X3dlYXBvbi5kYW1hZ2VfZm9ybXVsYSk7XG4gICAgICAgICAgICBjb250ZXh0LnNwZWNpYWxfZGFtYWdlX2Zvcm11bGEgPSBwYXJzZV9mb3JtdWxhKGNvbnRleHQubG9hZG91dFswXS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uZGFtYWdlX2Zvcm11bGEpO1xuICAgICAgICAgICAgY29udGV4dC5oZWF2eV9kYW1hZ2VfZm9ybXVsYSA9IHBhcnNlX2Zvcm11bGEoY29udGV4dC5sb2Fkb3V0WzBdLnN5c3RlbS5oZWF2eV93ZWFwb24uZGFtYWdlX2Zvcm11bGEpO1xuICAgICAgICAgICAgY29udGV4dC5tZWxlZV9kYW1hZ2VfZm9ybXVsYSA9IHBhcnNlX2Zvcm11bGEoY29udGV4dC5sb2Fkb3V0WzBdLnN5c3RlbS5tZWxlZV9hdHRhY2suZGFtYWdlX2Zvcm11bGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5mYWN0aW9uX2RpY3QgPSB7fTtcbiAgICAgICAgaWYgKGNvbnRleHQuZmFjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb250ZXh0LmZhY3Rpb25bMF0uc3lzdGVtLmxpZmVfcGF0aC5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZmFjdGlvbl9kaWN0W2VsLm5hbWVdID0gYFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFwiPiR7ZWwubG93fS0ke2VsLmhpZ2h9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRzIGZsZXgxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwid2lkdGg6IDEwMCU7IGZsZXg6IG5vbmUgIWltcG9ydGFudDsgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50XCI+JHtlbC5uYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkcyBmbGV4NFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIndpZHRoOiAxMDAlOyBmbGV4OiBub25lICFpbXBvcnRhbnQ7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudFwiPiR7ZWwuZGVzY3JpcHRpb259PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsID0gXCJcIjtcbiAgICAgICAgY29udGV4dC5jb25zdW1lZF9uY3UgPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IG5wX2sgaW4gY29udGV4dC5kYXRhLnN5c3RlbS5uYW5vcHJvZ3JhbSkge1xuICAgICAgICAgICAgZWwgPSBjb250ZXh0LmRhdGEuc3lzdGVtLm5hbm9wcm9ncmFtW25wX2tdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbCA9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgICAgIGlmIChlbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC5wcm9mZXNzaW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucHJvZmVzc2lvblswXS5zeXN0ZW0ubmFub19za2lsbF9saXN0LmZvckVhY2goKG5zbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5zbC5uYW5vcHJvZ3JhbXMuZm9yRWFjaCgobnApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5wX2sgPT09IG5wLl9pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5jb25zdW1lZF9uY3UgKz0gbnAubmN1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQuZmFjdGlvbl9saWZlcGF0aCA9IGNvbnRleHQuZGF0YS5zeXN0ZW0uZmFjdGlvbl9saWZlcGF0aDtcbiAgICAgICAgLy8gY29udGV4dC5pdGVtcyA9IGNvbnRleHQuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHsgcmV0dXJuIFtcImJyZWVkXCIsIFwib3JpZ2luXCIsIFwicHJvZmVzc2lvblwiLCBcImZhY3Rpb25cIl0uaW5jbHVkZXMoaXRlbSkgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXREYXRhXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZXh0KTtcblxuICAgICAgICAvLyBQcmVwYXJlIGNoYXJhY3RlciBkYXRhIGFuZCBpdGVtcy5cbiAgICAgICAgaWYgKGFjdG9yRGF0YS50eXBlID09PSAnaGVybycpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXBhcmVJdGVtcyhjb250ZXh0KTtcbiAgICAgICAgICAgIC8vIHRoaXMuX3ByZXBhcmVDaGFyYWN0ZXJEYXRhKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlcGFyZSBOUEMgZGF0YSBhbmQgaXRlbXMuXG4gICAgICAgIGlmIChhY3RvckRhdGEudHlwZSA9PT0gJ25wYycpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXBhcmVJdGVtcyhjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCByb2xsIGRhdGEgZm9yIFRpbnlNQ0UgZWRpdG9ycy5cbiAgICAgICAgLy8gY29udGV4dC5yb2xsRGF0YSA9IGNvbnRleHQuYWN0b3IuZ2V0Um9sbERhdGEoKTtcblxuICAgICAgICAvLyBQcmVwYXJlIGFjdGl2ZSBlZmZlY3RzXG4gICAgICAgIC8vIGNvbnRleHQuZWZmZWN0cyA9IHByZXBhcmVBY3RpdmVFZmZlY3RDYXRlZ29yaWVzKHRoaXMuYWN0b3IuZWZmZWN0cyk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRleHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3JnYW5pemUgYW5kIGNsYXNzaWZ5IEl0ZW1zIGZvciBDaGFyYWN0ZXIgc2hlZXRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFjdG9yRGF0YSBUaGUgYWN0b3IgdG8gcHJlcGFyZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBfcHJlcGFyZUl0ZW1zKGNvbnRleHQpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBjb250YWluZXJzLlxuICAgICAgICBjb25zdCBnZWFyID0gW107XG4gICAgICAgIGNvbnN0IGZlYXR1cmVzID0gW107XG4gICAgICAgIGNvbnN0IHNwZWxscyA9IHtcbiAgICAgICAgICAgIDA6IFtdLFxuICAgICAgICAgICAgMTogW10sXG4gICAgICAgICAgICAyOiBbXSxcbiAgICAgICAgICAgIDM6IFtdLFxuICAgICAgICAgICAgNDogW10sXG4gICAgICAgICAgICA1OiBbXSxcbiAgICAgICAgICAgIDY6IFtdLFxuICAgICAgICAgICAgNzogW10sXG4gICAgICAgICAgICA4OiBbXSxcbiAgICAgICAgICAgIDk6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGl0ZW1zLCBhbGxvY2F0aW5nIHRvIGNvbnRhaW5lcnNcbiAgICAgICAgLy8gZm9yIChsZXQgaSBvZiBjb250ZXh0Lml0ZW1zKSB7XG4gICAgICAgIC8vICAgICBpLmltZyA9IGkuaW1nIHx8IERFRkFVTFRfVE9LRU47XG4gICAgICAgIC8vICAgICAvLyBBcHBlbmQgdG8gZ2Vhci5cbiAgICAgICAgLy8gICAgIGlmIChpLnR5cGUgPT09ICdpdGVtJykge1xuICAgICAgICAvLyAgICAgICAgIGdlYXIucHVzaChpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIC8vIEFwcGVuZCB0byBmZWF0dXJlcy5cbiAgICAgICAgLy8gICAgIGVsc2UgaWYgKGkudHlwZSA9PT0gJ2ZlYXR1cmUnKSB7XG4gICAgICAgIC8vICAgICAgICAgZmVhdHVyZXMucHVzaChpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIC8vIEFwcGVuZCB0byBzcGVsbHMuXG4gICAgICAgIC8vICAgICBlbHNlIGlmIChpLnR5cGUgPT09ICdzcGVsbCcpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoaS5zeXN0ZW0uc3BlbGxMZXZlbCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgc3BlbGxzW2kuc3lzdGVtLnNwZWxsTGV2ZWxdLnB1c2goaSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gQXNzaWduIGFuZCByZXR1cm5cbiAgICAgICAgY29udGV4dC5nZWFyID0gZ2VhcjtcbiAgICAgICAgY29udGV4dC5mZWF0dXJlcyA9IGZlYXR1cmVzO1xuICAgICAgICBjb250ZXh0LnNwZWxscyA9IHNwZWxscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPcmdhbml6ZSBhbmQgY2xhc3NpZnkgSXRlbXMgZm9yIENoYXJhY3RlciBzaGVldHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYWN0b3JEYXRhIFRoZSBhY3RvciB0byBwcmVwYXJlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIF9wcmVwYXJlQ2hhcmFjdGVyRGF0YShjb250ZXh0KSB7XG4gICAgICAgIC8vIEhhbmRsZSBhYmlsaXR5IHNjb3Jlcy5cbiAgICAgICAgLy8gZm9yIChsZXQgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGNvbnRleHQuc3lzdGVtLmFiaWxpdGllcykpIHtcbiAgICAgICAgLy8gICAgIHYubGFiZWwgPSBnYW1lLmkxOG4ubG9jYWxpemUoQ09ORklHLkJPSUxFUlBMQVRFLmFiaWxpdGllc1trXSkgPz8gaztcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zb2xlLmxvZyhcIl9wcmVwYXJlQ2hhcmFjdGVyRGF0YVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coY29udGV4dCk7XG4gICAgfVxuXG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGFjdGl2YXRlTGlzdGVuZXJzKGh0bWwpIHtcbiAgICAgICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG5cbiAgICAgICAgLy8gUmVuZGVyIHRoZSBpdGVtIHNoZWV0IGZvciB2aWV3aW5nL2VkaXRpbmcgcHJpb3IgdG8gdGhlIGVkaXRhYmxlIGNoZWNrLlxuICAgICAgICBodG1sLmZpbmQoJy5pdGVtLWVkaXQnKS5jbGljayhldiA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9ICQoZXYuY3VycmVudFRhcmdldCkucGFyZW50cyhcIi5pdGVtXCIpO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuYWN0b3IuaXRlbXMuZ2V0KGxpLmRhdGEoXCJpdGVtSWRcIikpO1xuICAgICAgICAgICAgaWYgKChpdGVtKSAmJiAoaXRlbS5zaGVldCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnNoZWV0LnJlbmRlcih0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBFdmVyeXRoaW5nIGJlbG93IGhlcmUgaXMgb25seSBuZWVkZWQgaWYgdGhlIHNoZWV0IGlzIGVkaXRhYmxlXG4gICAgICAgIGlmICghdGhpcy5pc0VkaXRhYmxlKSByZXR1cm47XG5cbiAgICAgICAgLy8gQWRkIEludmVudG9yeSBJdGVtXG4gICAgICAgIGh0bWwuZmluZCgnLml0ZW0tY3JlYXRlJykuY2xpY2sodGhpcy5fb25JdGVtQ3JlYXRlLmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIERlbGV0ZSBJbnZlbnRvcnkgSXRlbVxuICAgICAgICBodG1sLmZpbmQoJy5pdGVtLWRlbGV0ZScpLmNsaWNrKGV2ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gJChldi5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKFwiLml0ZW1cIik7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5hY3Rvci5pdGVtcy5nZXQobGkuZGF0YShcIml0ZW1JZFwiKSk7XG4gICAgICAgICAgICBpZiAoKGl0ZW0pICYmIChpdGVtLnNoZWV0KSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaS5zbGlkZVVwKDIwMCwgKCkgPT4gdGhpcy5yZW5kZXIoZmFsc2UpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaHRtbC5maW5kKCcuYnRuLW1pbnVzJykuY2xpY2soZXYgPT4ge1xuICAgICAgICAgICAgbGV0IGlucHV0ID0gJChldi5jdXJyZW50VGFyZ2V0KS5wYXJlbnRzKCkuc2libGluZ3MoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyk7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBwYXJzZUludChpbnB1dC52YWwoKSk7XG4gICAgICAgICAgICBpZiAodmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsKHZhbHVlIC0gMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbCgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBodG1sLmZpbmQoJy5idG4tcGx1cycpLmNsaWNrKGV2ID0+IHtcbiAgICAgICAgICAgIGxldCBpbnB1dCA9ICQoZXYuY3VycmVudFRhcmdldCkucGFyZW50cygpLnNpYmxpbmdzKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMTApIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWwodmFsdWUgKyAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQudmFsKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWwoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGh0bWwuZmluZCgnLnR4dC1za2lsbCcpLmNoYW5nZShldiA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSAkKGV2LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWwoMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID4gMTApIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWwoMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBodG1sLmZpbmQoJy5ucC1ydW4nKS5jbGljayhldiA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSAkKGV2LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgbGV0IGExID0gaW5wdXQuZGF0YShcImF0dHIwXCIpO1xuICAgICAgICAgICAgbGV0IGEyID0gaW5wdXQuZGF0YShcImF0dHIxXCIpO1xuICAgICAgICAgICAgbGV0IG4xID0gaW5wdXQuZGF0YShcIm5hbWUwXCIpO1xuICAgICAgICAgICAgbGV0IG4yID0gaW5wdXQuZGF0YShcIm5hbWUxXCIpO1xuICAgICAgICAgICAgbGV0IG5tID0gaW5wdXQuZGF0YShcIm5wLW5hbWVcIik7XG4gICAgICAgICAgICBsZXQgbmMgPSBpbnB1dC5kYXRhKFwibnAtY29zdFwiKTtcbiAgICAgICAgICAgIGxldCBhYyA9IGlucHV0LmRhdGEoXCJhY3RvclwiKTtcbiAgICAgICAgICAgIGxldCBhID0gZ2FtZS5hY3RvcnMuZ2V0KGFjKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobm0pO1xuICAgICAgICAgICAgbGV0IGlucHV0VmFsdWUgPSBpbnB1dC5jbG9zZXN0KCd0cicpLnBhcmVudHMoJ3RyJykuZmluZCgnaW5wdXQudHh0LXNraWxsJykudmFsKCk7XG4gICAgICAgICAgICBpZiAoKGlucHV0VmFsdWUgPT09IFwiXCIpIHx8IChpc05hTihpbnB1dFZhbHVlKSkpIHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkaWNlY291bnQgPSBwYXJzZUludChhMSkgKyBwYXJzZUludChhMikgKyBwYXJzZUludChpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgIGxldCBtID0gYS5uYW1lICsgXCIgcnVucyAnXCIgKyBubSArIFwiJyBuYW5vcHJvZ3JhbSEgXCIgKyBuMSArIFwiKFwiICsgYTEgKyBcIikgKyBcIiArIG4yICsgXCIoXCIgKyBhMiArIFwiKSArIHJhbmsoXCIgKyBpbnB1dFZhbHVlICsgXCIpID0gXCIgKyBkaWNlY291bnQ7XG4gICAgICAgICAgICBsZXQgcm9sbCA9IFJvbGxGdXhEaWNlKGRpY2Vjb3VudCwgMCwgMCwgbSk7XG5cbiAgICAgICAgICAgIGEudXBkYXRlKHtzeXN0ZW06IHtjdXJyZW50X25wOiBhLnN5c3RlbS5jdXJyZW50X25wIC0gcGFyc2VJbnQobmMpfX0pXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBjcmVhdGluZyBhIG5ldyBPd25lZCBJdGVtIGZvciB0aGUgYWN0b3IgdXNpbmcgaW5pdGlhbCBkYXRhIGRlZmluZWQgaW4gdGhlIEhUTUwgZGF0YXNldFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50ICAgVGhlIG9yaWdpbmF0aW5nIGNsaWNrIGV2ZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBfb25JdGVtQ3JlYXRlKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIC8vIEdldCB0aGUgdHlwZSBvZiBpdGVtIHRvIGNyZWF0ZS5cbiAgICAgICAgY29uc3QgdHlwZSA9IGhlYWRlci5kYXRhc2V0LnR5cGU7XG4gICAgICAgIC8vIEdyYWIgYW55IGRhdGEgYXNzb2NpYXRlZCB3aXRoIHRoaXMgY29udHJvbC5cbiAgICAgICAgY29uc3QgZGF0YSA9IGR1cGxpY2F0ZShoZWFkZXIuZGF0YXNldCk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgYSBkZWZhdWx0IG5hbWUuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBgTmV3ICR7dHlwZS5jYXBpdGFsaXplKCl9YDtcbiAgICAgICAgLy8gUHJlcGFyZSB0aGUgaXRlbSBvYmplY3QuXG4gICAgICAgIGNvbnN0IGl0ZW1EYXRhID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH07XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdHlwZSBmcm9tIHRoZSBkYXRhc2V0IHNpbmNlIGl0J3MgaW4gdGhlIGl0ZW1EYXRhLnR5cGUgcHJvcC5cbiAgICAgICAgZGVsZXRlIGl0ZW1EYXRhLmRhdGFbXCJ0eXBlXCJdO1xuXG4gICAgICAgIC8vIEZpbmFsbHksIGNyZWF0ZSB0aGUgaXRlbSFcbiAgICAgICAgcmV0dXJuIGF3YWl0IEl0ZW0uY3JlYXRlKGl0ZW1EYXRhLCB7cGFyZW50OiB0aGlzLmFjdG9yfSk7XG4gICAgfVxuXG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGFzeW5jIF9vbkRyb3BJdGVtQ3JlYXRlKGl0ZW1EYXRhKSB7XG4gICAgICAgIC8vIGxldCBpdGVtcyA9IGl0ZW1EYXRhIGluc3RhbmNlb2YgQXJyYXkgPyBpdGVtRGF0YSA6IFtpdGVtRGF0YV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zKTtcbiAgICAgICAgLy8gY29uc3QgdG9DcmVhdGUgPSBbXTtcbiAgICAgICAgLy8gZm9yICggY29uc3QgaXRlbSBvZiBpdGVtcyApIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX29uRHJvcFNpbmdsZUl0ZW0oaXRlbSk7XG4gICAgICAgIC8vICAgICBpZiAoIHJlc3VsdCApIHRvQ3JlYXRlLnB1c2gocmVzdWx0KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvL1xuICAgICAgICAvLyAvLyBDcmVhdGUgdGhlIG93bmVkIGl0ZW1zIGFzIG5vcm1hbFxuICAgICAgICAvLyByZXR1cm4gdGhpcy5hY3Rvci5jcmVhdGVFbWJlZGRlZERvY3VtZW50cyhcIkl0ZW1cIiwgdG9DcmVhdGUpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiX29uRHJvcEl0ZW1DcmVhdGVcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1EYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcm9wcGVkIGl0ZW0gZGF0YVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbURhdGEpO1xuICAgICAgICBsZXQgYWxsX2l0ZW1zID0gdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIGxldCBpdGVtID0gbnVsbDtcbiAgICAgICAgaWYgKFtcImJyZWVkXCIsIFwib3JpZ2luXCIsIFwicHJvZmVzc2lvblwiLCBcImZhY3Rpb25cIiwgXCJsb2Fkb3V0XCJdLmluY2x1ZGVzKGl0ZW1EYXRhLnR5cGUpKSB7XG4gICAgICAgICAgICBsZXQgZGVsX2l0ZW1zID0gYWxsX2l0ZW1zLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7IHJldHVybiAoKGl0ZW0udHlwZSA9PT0gaXRlbURhdGEudHlwZSkgJiYgKGl0ZW0uaWQgPT09IGl0ZW1EYXRhLmlkKSkgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZVwiKTtcbiAgICAgICAgICAgIGRlbF9pdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsKTtcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5hY3Rvci5pdGVtcy5nZXQoZWwuX2lkKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW0gZGVsZXRlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kZWxldGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW0gbm90IGZvdW5kXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gaWYgKGl0ZW1EYXRhLnR5cGUgPT09IFwicHJvZmVzc2lvblwiKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJwcm9mZXNzaW9uIGNoYW5nZVwiKTtcbiAgICAgICAgICAgIC8vICAgICBsZXQgZGVsX2l0ZW1zID0gYWxsX2l0ZW1zLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7IHJldHVybiAoaXRlbS50eXBlID09PSBcInNraWxsXCIpIH0pO1xuICAgICAgICAgICAgLy8gICAgIC8vIGlmIHNraWxscyBhcmUgYXNzaWduZWQsIGRlbGV0ZSB0aGVtIG9uIHByb2Zlc3Npb24gY2hhbmdlXG4gICAgICAgICAgICAvLyAgICAgaWYgKGRlbF9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGRlbF9pdGVtcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaXRlbSA9IHRoaXMuYWN0b3IuaXRlbXMuZ2V0KGVsLl9pZCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGl0ZW0uZGVsZXRlKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICAvLyB0YWtlIHNraWxscyBmb3IgdGhpcyBwcm9mZXNzaW9uIGZyb20gdGhlIGNvbXBlbmRpdW0gYW5kIGFkZCB0aGVtIHRvIHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIC8vICAgICBsZXQgc2tpbGxfcGFjayA9IGdhbWUucGFja3MuZ2V0KFwiZW9hLnNraWxsc1wiKVxuICAgICAgICAgICAgLy8gICAgIGxldCBza2lsbF9pbmRleCA9IEFycmF5LmZyb20oc2tpbGxfcGFjay5pbmRleClcbiAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCBza2lsbCBvZiBza2lsbF9pbmRleCkge1xuICAgICAgICAgICAgLy8gICAgICAgICBsZXQgaXRlbSA9IGF3YWl0IHNraWxsX3BhY2suZ2V0RG9jdW1lbnQoc2tpbGwuX2lkKVxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoaXRlbS5zeXN0ZW0ucHJvZmVzc2lvbnMuaW5jbHVkZXMoaXRlbURhdGEuc3lzdGVtLmlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhza2lsbCk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmFjdG9yLmNyZWF0ZU93bmVkSXRlbShza2lsbClcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWN0b3IuY3JlYXRlRW1iZWRkZWREb2N1bWVudHMoJ0l0ZW0nLCBbaXRlbV0pXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coYWN0LnN5c3RlbS5wcm9mZXNzaW9ucyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGxldCBpdGVtcyA9IEFycmF5LmZyb20oYWN0Lml0ZW1zKVxuICAgICAgICAgICAgLy8gICAgICAgICAvLyBsZXQgdXBkYXRlcyA9IFtdXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGZvciAobGV0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGFsbF9pdGVtcyk7XG4gICAgICAgICAgICAvLyAgICAgLy8gY29uc3QgcGFjayA9IGdhbWUucGFja3MuZ2V0KFwiZW9hLnNraWxsc1wiKTtcbiAgICAgICAgICAgIC8vICAgICAvLyBhd2FpdCBwYWNrLmdldEluZGV4KCk7XG4gICAgICAgICAgICAvLyAgICAgLy8gLy8gY29uc3QgZWZmZWN0SWQgPSBwYWNrLmluZGV4LmZpbmQoZSA9PiBlLm5hbWUgPT09IGVmZmVjdE5hbWUpLl9pZDtcbiAgICAgICAgICAgIC8vICAgICAvLyBjb25zdCBhY3RvciA9IGdhbWUudXNlci5jaGFyYWN0ZXI7XG4gICAgICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2cocGFjay5pbmRleCk7XG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IGUgPSBudWxsO1xuICAgICAgICAgICAgLy8gICAgIC8vIHBhY2suaW5kZXguZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAvLyAgICAgZSA9IHBhY2suZ2V0RW50cnkoZWwuX2lkKTtcbiAgICAgICAgICAgIC8vICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vICAgICAvLyBsZXQgYWRkX2l0ZW1zID0gYWxsX2l0ZW1zLml0ZW1zLmZpbHRlcihmdW5jdGlvbihpdGVtKSB7IHJldHVybiAoKGl0ZW0udHlwZSA9PT0gXCJwcm9mZXNzaW9uXCIpICYmIChpdGVtLnN5c3RlbS5kYXRhLnByb2Zlc3Npb25zLmluY2x1ZGVzKGFsbF9pdGVtcy5zeXN0ZW0uZGF0YS4pKSkgfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zdCBjaGFuZ2UgZGF0YSAmIGxpc3RcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1EYXRhKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWxsX2l0ZW1zKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLl9vbkRyb3BJdGVtQ3JlYXRlKGl0ZW1EYXRhKTtcbiAgICB9XG5cbiAgICBhc3luYyBfb25Ecm9wU2luZ2xlSXRlbShpdGVtRGF0YSkge1xuICAgICAgICByZXR1cm4gc3VwZXIuX29uRHJvcFNpbmdsZUl0ZW0oaXRlbURhdGEpO1xuICAgIH1cblxuICAgIC8vIGFzeW5jIGZ1bmN0aW9uIGZyZWVTa2lsbFJhbmsoc2tpbGw6IEdlbmVzeXNJdGVtPFNraWxsRGF0YU1vZGVsPiwgYWRqdXN0bWVudDogbnVtYmVyKSB7XG4gICAgLy8gICAgIGF3YWl0IHRvUmF3KHNraWxsKS51cGRhdGUoe1xuICAgIC8vICAgICAgICAgJ3N5c3RlbS5yYW5rJzogTWF0aC5tYXgoMCwgc2tpbGwuc3lzdGVtRGF0YS5yYW5rICsgYWRqdXN0bWVudCksXG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbn1cbiIsImV4cG9ydCBjb25zdCBlb2EgPSB7fTtcblxuZW9hLmF0dGFja1R5cGVzID0ge1xuICAgIG5vbmU6IFwiXCIsXG4gICAgZ3VuczogXCJlb2EuYXR0YWNrLmd1bnNcIixcbiAgICBrbml2ZXM6IFwiZW9hLmF0dGFjay5rbml2ZXNcIlxufSIsIlxuLyoqXG4gKiBAZXh0ZW5kcyB7SXRlbVNoZWV0fVxuICovXG5leHBvcnQgY2xhc3MgRW9BTG9hZG91dFNoZWV0IGV4dGVuZHMgSXRlbVNoZWV0IHtcbiAgLyoqIEBpbmhlcml0ZG9jICovXG4gIHN0YXRpYyBnZXQgZGVmYXVsdE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIGZvdW5kcnkudXRpbHMubWVyZ2VPYmplY3Qoc3VwZXIuZGVmYXVsdE9wdGlvbnMsIHtcbiAgICAgIGNsYXNzZXM6IFtcImVvYVwiLCBcInNoZWV0XCIsIFwiaXRlbVwiXSxcbiAgICAgIHRlbXBsYXRlOiBcInN5c3RlbXMvZW9hL3RlbXBsYXRlcy9pdGVtcy9sb2Fkb3V0LXNoZWV0Lmh0bWxcIixcbiAgICAgIHdpZHRoOiA4NTAsXG4gICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgIHRhYnM6IFt7bmF2U2VsZWN0b3I6IFwiLnNoZWV0LW5hdmlnYXRpb25cIiwgY29udGVudFNlbGVjdG9yOiBcIi5zaGVldC1ib2R5XCIsIGluaXRpYWw6IFwiZGVzY3JpcHRpb25cIn1dLFxuICAgICAgZHJhZ0Ryb3A6IFt7ZHJhZ1NlbGVjdG9yOiBcIi5kcmFnZ2FibGVcIiwgZHJvcFNlbGVjdG9yOiBudWxsfV0sXG4gICAgfSk7XG4gIH1cblxuICAvKiogQGluaGVyaXRkb2MgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3VwZXIuZ2V0RGF0YSgpO1xuXG4gICAgY29udGV4dC5lZmZlY3RpdmVfcmFuZ2VfY2hvaWNlcyA9IHtlbmdhZ2VkOiBcIkVuZ2FnZWRcIiwgbWVsZWU6IFwiTWVsZWVcIiwgY2xvc2U6IFwiQ2xvc2VcIiwgbmVhcjogXCJOZWFyXCIsIG1pZDogXCJNaWRcIiwgZmFyOiBcIkZhclwifTtcbiAgICBjb250ZXh0LnByaW1hcnlfZGFtYWdlX2Zvcm11bGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtLnByaW1hcnlfd2VhcG9uLmRhbWFnZV9mb3JtdWxhO1xuICAgIGNvbnRleHQuc3BlY2lhbF9kYW1hZ2VfZm9ybXVsYSA9IGNvbnRleHQuZGF0YS5zeXN0ZW0uc3BlY2lhbF93ZWFwb24uZGFtYWdlX2Zvcm11bGE7XG4gICAgY29udGV4dC5oZWF2eV9kYW1hZ2VfZm9ybXVsYSA9IGNvbnRleHQuZGF0YS5zeXN0ZW0uaGVhdnlfd2VhcG9uLmRhbWFnZV9mb3JtdWxhO1xuICAgIGNvbnRleHQubWVsZWVfZGFtYWdlX2Zvcm11bGEgPSBjb250ZXh0LmRhdGEuc3lzdGVtLm1lbGVlX2F0dGFjay5kYW1hZ2VfZm9ybXVsYTtcblxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICAgIC8vIGNvbnRleHQuc3lzdGVtRGF0YSA9IGNvbnRleHQuZGF0YS5zeXN0ZW07XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIC8qKiBAaW5oZXJpdGRvYyAqL1xuICBhY3RpdmF0ZUxpc3RlbmVycyhodG1sKSB7XG4gICAgc3VwZXIuYWN0aXZhdGVMaXN0ZW5lcnMoaHRtbCk7XG5cbiAgICAvLyBhY2Nlc3NpYmlsaXR5KHRoaXMuaXRlbSwgaHRtbCk7XG5cbiAgICAvLyBFdmVyeXRoaW5nIGJlbG93IGhlcmUgaXMgb25seSBuZWVkZWQgaWYgdGhlIHNoZWV0IGlzIGVkaXRhYmxlXG4gICAgaWYgKCAhdGhpcy5pc0VkaXRhYmxlICkgcmV0dXJuO1xuICB9XG59XG4iLCIvKiBDb25zdGFudHMgdXNlZCovXG5leHBvcnQgY29uc3QgRlVYX0NPTlNUID0ge1xuICBTWVNURU1fVkFSSUFOVFM6IHtcbiAgICBGVV9DTEFTU0lDOiAwLFxuICAgIEZVX1YyOiAxLFxuICAgIEFDVElPTl9UQUxFUzogMixcbiAgICBORU9OX0NJVFlfT1ZFUkRSSVZFOiAzLFxuICAgIEVBUlRIREFXTl9BR0VfT0ZfTEVHRU5EOiA0XG4gIH1cbn07XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFN5c3RlbVZhcmlhbnROYW1lKGlzeXN0ZW12YXJpYW50KSB7XG4gIGxldCBzeXN0ZW12YXJpYW50bmFtZSA9ICdVbmtub3duIFZhcmlhbnQnO1xuICBzd2l0Y2ggKGlzeXN0ZW12YXJpYW50LnRvU3RyaW5nKCkpIHtcbiAgICBjYXNlIEZVWF9DT05TVC5TWVNURU1fVkFSSUFOVFMuRlVfQ0xBU1NJQy50b1N0cmluZygpOlxuICAgICAgc3lzdGVtdmFyaWFudG5hbWUgPSBnYW1lLmkxOG4ubG9jYWxpemUoJ2Z1eC1kaWNlLXJvbGxlci5zZXR0aW5ncy5TWVNURU1fVkFSSUFOVF9GVV9DTEFTU0lDJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZVWF9DT05TVC5TWVNURU1fVkFSSUFOVFMuRlVfVjIudG9TdHJpbmcoKTpcbiAgICAgIHN5c3RlbXZhcmlhbnRuYW1lID0gZ2FtZS5pMThuLmxvY2FsaXplKCdmdXgtZGljZS1yb2xsZXIuc2V0dGluZ3MuU1lTVEVNX1ZBUklBTlRfRlVfVjInKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRlVYX0NPTlNULlNZU1RFTV9WQVJJQU5UUy5BQ1RJT05fVEFMRVMudG9TdHJpbmcoKTpcbiAgICAgIHN5c3RlbXZhcmlhbnRuYW1lID0gZ2FtZS5pMThuLmxvY2FsaXplKCdmdXgtZGljZS1yb2xsZXIuc2V0dGluZ3MuU1lTVEVNX1ZBUklBTlRfQUNUSU9OX1RBTEVTJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZVWF9DT05TVC5TWVNURU1fVkFSSUFOVFMuTkVPTl9DSVRZX09WRVJEUklWRS50b1N0cmluZygpOlxuICAgICAgc3lzdGVtdmFyaWFudG5hbWUgPSBnYW1lLmkxOG4ubG9jYWxpemUoJ2Z1eC1kaWNlLXJvbGxlci5zZXR0aW5ncy5TWVNURU1fVkFSSUFOVF9ORU9OX0NJVFlfT1ZFUkRSSVZFJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIEZVWF9DT05TVC5TWVNURU1fVkFSSUFOVFMuRUFSVEhEQVdOX0FHRV9PRl9MRUdFTkQudG9TdHJpbmcoKTpcbiAgICAgIHN5c3RlbXZhcmlhbnRuYW1lID0gZ2FtZS5pMThuLmxvY2FsaXplKCdmdXgtZGljZS1yb2xsZXIuc2V0dGluZ3MuU1lTVEVNX1ZBUklBTlRfRUFSVEhEQVdOX0FHRV9PRl9MRUdFTkQnKTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBzeXN0ZW12YXJpYW50bmFtZTtcbn1cblxuIiwiaW1wb3J0IHsgRlVYX0NPTlNUIH0gZnJvbSAgICcuL2Z1eC1kaWNlLXJvbGxlci1jb25zdGFudHMuanMnO1xuY29uc3QgX21vZHVsZV9pZCA9ICdlb2EnOyAgLy8gbW9kdWxlcyB0cnVlIG5hbWUoaWQpXG5hc3luYyBmdW5jdGlvbiBSb2xsRDZzKGZhY2VzKXtcbiAgbGV0IHJvbGw9YXdhaXQgbmV3IFJvbGwoZmFjZXMgKyBcImQ2XCIpLnJvbGwoe2FzeW5jOiB0cnVlfSk7XG4gIHJldHVybiByb2xsO1xufVxuYXN5bmMgZnVuY3Rpb24gUm9sbEQ4cyhmYWNlcyl7XG4gIGxldCByb2xsPWF3YWl0IG5ldyBSb2xsKGZhY2VzICsgXCJkOFwiKS5yb2xsKHthc3luYzogdHJ1ZX0pO1xuICByZXR1cm4gcm9sbDtcbn1cbmZ1bmN0aW9uIGdldEdhbWVTZXR0aW5nKHNldHRpbmdOYW1lKXtcbiAgcmV0dXJuICBnYW1lLnNldHRpbmdzLmdldChfbW9kdWxlX2lkLCBzZXR0aW5nTmFtZSk7XG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUm9sbEZ1eERpY2UoYWN0aW9uZGljZSwgYXVnbWVudGRpY2UsIGRhbmdlcmRpY2UsIG1zZyA9IG51bGwpIHtcbiAgICBpZiAoYWN0aW9uZGljZSA9PSAwICYmIGF1Z21lbnRkaWNlID09IDAgJiYgZGFuZ2VyZGljZSA9PSAwKSB7XG4gICAgICAvL25vIGRpY2UsIGFib3J0XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGxldCBoYXJkbW9kZSA9IGdldEdhbWVTZXR0aW5nKCdPUFRJT05fSEFSRF9NT0RFJyk7XG4gICAgbGV0IGhhcmRtb2RlID0gZmFsc2U7XG4gICAgLy8gbGV0IHN5c3RlbXZhcmlhbnQgPSBnZXRHYW1lU2V0dGluZygnT1BUSU9OX1NZU1RFTV9WQVJJQU5UJyk7XG4gICAgbGV0IHN5c3RlbXZhcmlhbnQgPSBGVVhfQ09OU1QuU1lTVEVNX1ZBUklBTlRTLkZVX1YyO1xuICAgIC8vIGxldCBib3RjaF92YWx1ZSA9IGdldEdhbWVTZXR0aW5nKCdPUFRJT05fQk9UQ0hfVkFMVUUnKTtcbiAgICBsZXQgYm90Y2hfdmFsdWUgPSAxO1xuICAgIC8vIGxldCBvcHRpb25fbWF0Y2hpbmdkaWNlID0gZ2V0R2FtZVNldHRpbmcoJ09QVElPTl9GVV9DTEFTU0lDX01BVENISU5HX0RJQ0UnKTtcbiAgICBsZXQgb3B0aW9uX21hdGNoaW5nZGljZSA9IGZhbHNlO1xuXG4gICAgLy8gcmVkdWNlIGRpY2UgaWYgRlUgQ2xhc3NpYyAgICBcbiAgICBpZiAoc3lzdGVtdmFyaWFudCA9PSBGVVhfQ09OU1QuU1lTVEVNX1ZBUklBTlRTLkZVX0NMQVNTSUMpIHtcbiAgICAgIC8vIDVhLCAzZCA9PiAyYVxuICAgICAgLy8gMmEsIDNkID0+IDFkXG4gICAgICAvLyAyYSwgMmQgPT5cbiAgICAgIGlmIChkYW5nZXJkaWNlID09IGFjdGlvbmRpY2UpIHtcbiAgICAgICAgYWN0aW9uZGljZSA9IDA7XG4gICAgICAgIGRhbmdlcmRpY2UgPSAyO1xuICAgICAgfSBlbHNlIGlmIChkYW5nZXJkaWNlID4gYWN0aW9uZGljZSkge1xuICAgICAgICAvLyBtb3JlIHBlbmFsdHkgdGhhbiBib251c1xuICAgICAgICBkYW5nZXJkaWNlID0gZGFuZ2VyZGljZSAtIGFjdGlvbmRpY2UgKyAyO1xuICAgICAgICBhY3Rpb25kaWNlID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uZGljZSA+IGRhbmdlcmRpY2UpIHtcbiAgICAgICAgLy8gYm9udXMgaXMgcmVkdWNlZCBieSBwZW5hbHR5XG4gICAgICAgIGFjdGlvbmRpY2UgPSBhY3Rpb25kaWNlIC0gZGFuZ2VyZGljZTtcbiAgICAgICAgZGFuZ2VyZGljZSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVkdWNlIGRpY2UgaWYgRWFydGhkYXduIEFnZSBvZiBsZWdlbmRcbiAgICBpZiAoc3lzdGVtdmFyaWFudCA9PSBGVVhfQ09OU1QuU1lTVEVNX1ZBUklBTlRTLkVBUlRIREFXTl9BR0VfT0ZfTEVHRU5EKSB7XG4gICAgICAvLyBpbiBFREFvTCwgdGhlIHJvbGwgaXMgYWx3YXlzIDFkNiBwbHVzIGEgcmVkdWNlZCBzZXQgb2YgbmVnYXRpdmUgYW5kL29yIHBvc2l0aXZlIGZ1ZGdlIGRpY2UoMWQ2IHdoZXJlIDUtNiBtZWFucyArLy0gZWxzZSBpZ25vcmVkKVxuICAgICAgaWYoYWN0aW9uZGljZT4xICYmIGRhbmdlcmRpY2U+MCl7XG4gICAgICAgIGlmIChhY3Rpb25kaWNlPT1kYW5nZXJkaWNlKXtcbiAgICAgICAgICBhY3Rpb25kaWNlPTE7XG4gICAgICAgICAgZGFuZ2VyZGljZT0xO1xuICAgICAgICB9IGVsc2UgaWYoYWN0aW9uZGljZT5kYW5nZXJkaWNlKXtcbiAgICAgICAgICBhY3Rpb25kaWNlPWFjdGlvbmRpY2UgLSBkYW5nZXJkaWNlO1xuICAgICAgICAgIGRhbmdlcmRpY2U9MDtcbiAgICAgICAgfSBlbHNlIGlmKGFjdGlvbmRpY2U8ZGFuZ2VyZGljZSl7XG4gICAgICAgICAgZGFuZ2VyZGljZT1kYW5nZXJkaWNlIC0gYWN0aW9uZGljZSArMTtcbiAgICAgICAgICBhY3Rpb25kaWNlPTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gcm9sbCBkaWNlXG4gICAgbGV0IGF1Z21lbnRkaWNlcmVzdWx0cyA9IGF3YWl0IFJvbGxEOHMoYXVnbWVudGRpY2UpO1xuICAgIC8vIHJvbGwgZGljZVxuICAgIGxldCBhY3Rpb25kaWNlcmVzdWx0cyA9IGF3YWl0IFJvbGxENnMoYWN0aW9uZGljZSk7XG4gICAgLy8gY29uc29sZS5sb2coYWN0aW9uZGljZXJlc3VsdHMpO1xuICAgIGxldCBkYW5nZXJkaWNlcmVzdWx0cyA9IGF3YWl0IFJvbGxENnMoZGFuZ2VyZGljZSk7XG5cbiAgICAvLyBwcmVwYXJlIHJlc3VsdCBhcnJheVxuICAgIGxldCBhcnJGaW5hbHMgPSBbMCwgMCwgMCwgMCwgMCwgMF07ICAvLyBhcnJheSBmb3IgcmVzdWx0IGNvdW50cywgc2xvdCBjb3JyZXNwb25kcyB0byBmYWNlIHZhbHVlIDEtIDZcbiAgICAvLyBhY3Rpb24gZGljZVxuICAgIGxldCBhY3Rpb25yZXN1bHQgPSAnJztcbiAgICBsZXQgYWN0aW9uc3NvcnRlZCA9IFtdO1xuICAgIGxldCBhY3Rpb25zdW5zb3J0ZWQgPSBbXTtcbiAgICBpZiAoYWN0aW9uZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gaW5jcmVtZW50IGZpbmFsc1xuICAgICAgICBhcnJGaW5hbHNbYWN0aW9uZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQgLSAxXSA9IGFyckZpbmFsc1thY3Rpb25kaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdCAtIDFdICsgMTtcbiAgICAgICAgYWN0aW9uc3NvcnRlZC5wdXNoKGFjdGlvbmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0KTtcbiAgICAgICAgYWN0aW9uc3Vuc29ydGVkLnB1c2goYWN0aW9uZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQpXG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC8vIHNvcnQgYWN0aW9uIHJlc3VsdHNcbiAgICBhY3Rpb25zc29ydGVkLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBhIC0gYjtcbiAgICB9KTtcbiAgICAvLyBidWlsZCByZXN1bHQgc3RyaW5nIGZvciBhY3Rpb24gZGljZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uc3NvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICBhY3Rpb25yZXN1bHQgPSAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvYWN0aW9uZGllX3ZhbHVlXycgKyBhY3Rpb25zc29ydGVkW2ldICsgJy5wbmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6LTNweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbnJlc3VsdCA9IGFjdGlvbnJlc3VsdCArICcnICsgJzxpbWcgc3JjPVwic3lzdGVtcy9lb2EvaW1hZ2VzL2FjdGlvbmRpZV92YWx1ZV8nICsgYWN0aW9uc3NvcnRlZFtpXSArICcucG5nXCIgc3R5bGU9XCJtYXJnaW4tdG9wOi0zcHg7bWFyZ2luLWxlZnQ6MnB4O1wiPic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXVnbWVudCBkaWNlXG4gICAgbGV0IGF1Z21lbnRyZXN1bHQgPSAnJztcbiAgICBsZXQgYXVnbWVudHNvcnRlZCA9IFtdO1xuICAgIGxldCBhdWdtZW50dW5zb3J0ZWQgPSBbXTtcbiAgICBpZiAoYXVnbWVudGRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdWdtZW50ZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJGaW5hbHNbYXVnbWVudGRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0IC0gMV0gPSBhcnJGaW5hbHNbYXVnbWVudGRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0IC0gMV0gLSAxO1xuICAgICAgICBhdWdtZW50c29ydGVkLnB1c2goYXVnbWVudGRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0KTtcbiAgICAgICAgYXVnbWVudHVuc29ydGVkLnB1c2goYXVnbWVudGRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gc29ydCBhdWdtZW50IHJlc3VsdFxuICAgIGF1Z21lbnRzb3J0ZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEgLSBiO1xuICAgIH0pO1xuICAgIC8vIGJ1aWxkIHJlc3VsdCBzdHJpbmcgZm9yIGF1Z21lbnQgZGljZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXVnbWVudHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICBhdWdtZW50cmVzdWx0ID0gJzxpbWcgc3JjPVwic3lzdGVtcy9lb2EvaW1hZ2VzL2F1Z21lbnRkaWVfdmFsdWVfJyArIGF1Z21lbnRzb3J0ZWRbaV0gKyAnLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDowcHg7bWFyZ2luLWxlZnQ6MnB4O1wiPic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdWdtZW50cmVzdWx0ID0gYXVnbWVudHJlc3VsdCArICcnICsgJzxpbWcgc3JjPVwic3lzdGVtcy9lb2EvaW1hZ2VzL2F1Z21lbnRkaWVfdmFsdWVfJyArIGF1Z21lbnRzb3J0ZWRbaV0gKyAnLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDowcHg7bWFyZ2luLWxlZnQ6MnB4O1wiPic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9kYW5nZXIgZGljZVxuICAgIGxldCBkYW5nZXJyZXN1bHQgPSAnJztcbiAgICBsZXQgZGFuZ2Vyc29ydGVkID0gW107XG4gICAgbGV0IGRhbmdlcnVuc29ydGVkID0gW107XG4gICAgaWYgKGRhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYW5nZXJkaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGRlYyBmaW5hbHNcbiAgICAgICAgaWYgKGhhcmRtb2RlKSB7XG4gICAgICAgICAgLy8gSW4gaGFyZCBtb2RlIGVhY2ggRGFuZ2VyIGRpZSBjYW5jZWxzIGFsbCBBY3Rpb24gZGljZSB3aXRoIGEgbWF0Y2hpbmcgdmFsdWUuXG4gICAgICAgICAgYXJyRmluYWxzW2RhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0IC0gMV0gPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyckZpbmFsc1tkYW5nZXJkaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdCAtIDFdID0gYXJyRmluYWxzW2RhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0IC0gMV0gLSAxO1xuICAgICAgICB9XG4gICAgICAgIGRhbmdlcnNvcnRlZC5wdXNoKGRhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0KTtcbiAgICAgICAgZGFuZ2VydW5zb3J0ZWQucHVzaChkYW5nZXJkaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHNvcnQgZGFuZ2VyIHJlc3VsdFxuICAgIGRhbmdlcnNvcnRlZC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgLy8gYnVpbGQgcmVzdWx0IHN0cmluZyBmb3IgZGFuZ2VyIGRpY2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhbmdlcnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICBkYW5nZXJyZXN1bHQgPSAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvZGFuZ2VyZGllX3ZhbHVlXycgKyBkYW5nZXJzb3J0ZWRbaV0gKyAnLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDowcHg7bWFyZ2luLWxlZnQ6MnB4O1wiPic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYW5nZXJyZXN1bHQgPSBkYW5nZXJyZXN1bHQgKyAnJyArICc8aW1nIHNyYz1cInN5c3RlbXMvZW9hL2ltYWdlcy9kYW5nZXJkaWVfdmFsdWVfJyArIGRhbmdlcnNvcnRlZFtpXSArICcucG5nXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjBweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZmluZCBoaWdoZXN0IHJlbWFpbmluZyBwb3NpdGl2ZSBpbiBmaW5hbHNcbiAgICBsZXQgaGlnaGVzdCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIGlmIChhcnJGaW5hbHNbaV0gPiAwKSB7XG4gICAgICAgIGhpZ2hlc3QgPSBpICsgMTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IG9yYWNsZSA9ICcnO1xuICAgIGxldCBib29ucyA9IDA7XG4gICAgbGV0IGJvdGNoZXMgPSAwO1xuICAgIGxldCByb2xsdmFsdWUgPSAwO1xuICAgIGxldCBoYXNjcml0ID0gZmFsc2U7XG4gICAgbGV0IGhhc2Z1bWJsZSA9IGZhbHNlXG4gICAgbGV0IHN1Ym1zZyA9ICcnO1xuICAgIGxldCBmbGF2b3J0ZXh0ID0gJyc7XG4gICAgaWYgKHN5c3RlbXZhcmlhbnQgPT0gRlVYX0NPTlNULlNZU1RFTV9WQVJJQU5UUy5GVV9DTEFTU0lDKSB7XG4gICAgICAvLyBjbGFzc2ljIGZ1XG4gICAgICBmbGF2b3J0ZXh0ID0gJ0JlYXRpbmcgdGhlIE9kZHMnO1xuICAgICAgXG4gICAgICBpZiAoYWN0aW9uZGljZSA9PSAwKSB7XG4gICAgICAgIC8vIHVzZSBsb3dlc3RcbiAgICAgICAgLy8gdXNlZCBmb3IgZnUgY2xhc3NpYyAgICBcbiAgICAgICAgbGV0IGxvd2VzdGRhbmdlcmRpY2UgPSAwO1xuICAgICAgICBpZiAoZGFuZ2Vyc29ydGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsb3dlc3RkYW5nZXJkaWNlID0gZGFuZ2Vyc29ydGVkWzBdO1xuICAgICAgICAgIHJvbGx2YWx1ZSA9IGxvd2VzdGRhbmdlcmRpY2U7XG4gICAgICAgICAgaWYgKG9wdGlvbl9tYXRjaGluZ2RpY2UpIHtcbiAgICAgICAgICAgIGxldCBtYXRjaGluZ2RpY2UgPSAwO1xuICAgICAgICAgICAgLy8gbm93IGxvb2sgZm9yIGV4dHJhIGZhaWx1cmUobWF0Y2hpbmcgZGljZSlcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGFuZ2Vyc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGlmIChkYW5nZXJzb3J0ZWRbaV0gPT0gbG93ZXN0ZGFuZ2VyZGljZSkge1xuICAgICAgICAgICAgICAgIG1hdGNoaW5nZGljZSA9IG1hdGNoaW5nZGljZSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoaW5nZGljZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChyb2xsdmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGx2YWx1ZSA9IHJvbGx2YWx1ZSAtIDE7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBib3RjaGVzID0gYm90Y2hlcyArIDE7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB1c2UgaGlnaGVzdCBhY3Rpb24gZGljZVxuICAgICAgICByb2xsdmFsdWUgPSBoaWdoZXN0O1xuICAgICAgICAvLyBub3cgbG9vayBmb3IgYm9vbnMobWF0Y2hpbmcgZGljZSlcbiAgICAgICAgaWYgKG9wdGlvbl9tYXRjaGluZ2RpY2UpIHtcbiAgICAgICAgICBsZXQgbWF0Y2hpbmdkaWNlID0gMDtcbiAgICAgICAgICAvLyBub3cgbG9vayBmb3IgZXh0cmEgc3VjY2VzcyhtYXRjaGluZyBkaWNlKVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uc3NvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbnNzb3J0ZWRbaV0gPT0gaGlnaGVzdCkge1xuICAgICAgICAgICAgICBtYXRjaGluZ2RpY2UgPSBtYXRjaGluZ2RpY2UgKyAxO1xuICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdkaWNlID4gMSkge1xuICAgICAgICAgICAgICAgIGlmIChyb2xsdmFsdWUgPCA2KSB7XG4gICAgICAgICAgICAgICAgICByb2xsdmFsdWUgPSByb2xsdmFsdWUgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBib29ucyA9IGJvb25zICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN1Ym1zZyA9ICdSZXN1bHQ6ICcgKyByb2xsdmFsdWU7XG4gICAgICBzd2l0Y2ggKHJvbGx2YWx1ZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgIC8vIHRoaXMgc2hvdWxkIG5ldmVyIGhhcHBlbiBpbiBGVSBjbGFzc2ljICAgICAgICAgIFxuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgb3JhY2xlID0gJ05PIEFORC4uLic7XG4gICAgICAgICAgaWYgKGJvdGNoZXMgPiAwKSB7XG4gICAgICAgICAgICBoYXNmdW1ibGUgPSB0cnVlO1xuICAgICAgICAgICAgc3VibXNnID0gc3VibXNnICsgJyArICcgKyBib3RjaGVzICsgJyhCb3RjaChlcykpICc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgb3JhY2xlID0gJ05PJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG9yYWNsZSA9ICdOTyBCVVQuLi4nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgb3JhY2xlID0gJ1lFUyBCVVQuLi4nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgb3JhY2xlID0gJ1lFUyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBvcmFjbGUgPSAnWUVTIEFORC4uLic7XG4gICAgICAgICAgaWYgKGJvb25zID4gMCkge1xuICAgICAgICAgICAgaGFzY3JpdCA9IHRydWU7XG4gICAgICAgICAgICBzdWJtc2cgPSBzdWJtc2cgKyAnICsgJyArIGJvb25zICsgJyhCb29uKHMpKSAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IFxuICAgIGVsc2UgaWYgKHN5c3RlbXZhcmlhbnQgPT0gRlVYX0NPTlNULlNZU1RFTV9WQVJJQU5UUy5BQ1RJT05fVEFMRVMgfHwgc3lzdGVtdmFyaWFudCA9PSBGVVhfQ09OU1QuU1lTVEVNX1ZBUklBTlRTLk5FT05fQ0lUWV9PVkVSRFJJVkUpIHtcbiAgICAgIC8vIHVzZSB0aGUgb3JhY2xlIGZyb20gQWN0aW9uVGFsZXMoTmVvbiBDaXR5IE92ZXJkcml2ZSkgXG4gICAgICBmbGF2b3J0ZXh0ID0gJ1RoZSBDaGVjayByZXR1cm5lZCc7XG4gICAgICAvLyB1c2UgaGlnaGVzdCBhY3Rpb24gZGljZVxuICAgICAgcm9sbHZhbHVlID0gaGlnaGVzdDtcbiAgICAgIHN1Ym1zZyA9ICdSZXN1bHQ6ICcgKyByb2xsdmFsdWU7XG4gICAgICBzd2l0Y2ggKHJvbGx2YWx1ZSkge1xuICAgICAgICAvLyBpbiBOQ08gQk9UQ0g6IElmIGFsbCB0aGUgYWN0aW9uIGRpY2UgaGF2ZSBiZWVuIGNhbmNlbGVkIG91dCwgb3IgdGhlIG9ubHkgcmVtYWluaW5nIFxuICAgICAgICAvLyBhY3Rpb24gZGljZSBhcmUgMe+/vXMsIHlvdSBoYXZlIGNyaXRpY2FsbHkgZmFpbGVkLiBUaGluZ3MgaGF2ZSBnb25lIHZlcnkgd3JvbmcgYW5kIFxuICAgICAgICAvLyB0aGUgY29uc2VxdWVuY2VzIHdpbGwgYmUgdGVycmlibGUuXG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG9yYWNsZSA9ICdCT1RDSCc7XG4gICAgICAgICAgaGFzZnVtYmxlID0gdHJ1ZTtcbiAgICAgICAgICBzdWJtc2cgPSAnUmVzdWx0OiAnICsgYm90Y2hfdmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIG9yYWNsZSA9ICdGQUlMVVJFJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgb3JhY2xlID0gJ1BBUlRJQUwgU1VDQ0VTUyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICBvcmFjbGUgPSAnU1VDQ0VTUyc7XG4gICAgICAgICAgLy8gY2hlY2sgZm9yIGJvb25cbiAgICAgICAgICBib29ucyA9IGFyckZpbmFsc1s1XSAtIDE7XG4gICAgICAgICAgaWYgKGJvb25zID4gMCkge1xuICAgICAgICAgICAgaGFzY3JpdCA9IHRydWU7XG4gICAgICAgICAgICBzdWJtc2cgPSBzdWJtc2cgKyAnICsgJyArIGJvb25zICsgJyhCb29uKHMpKSAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IFxuICAgIGVsc2UgaWYgKHN5c3RlbXZhcmlhbnQgPT0gRlVYX0NPTlNULlNZU1RFTV9WQVJJQU5UUy5FQVJUSERBV05fQUdFX09GX0xFR0VORCkge1xuICAgICAgLy8gdXNlIHRoZSBvcmFjbGUgZnJvbSAgRURBb0xcbiAgICAgIGZsYXZvcnRleHQgPSAnQmVhdGluZyB0aGUgT2Rkcyc7XG4gICAgICBcbiAgICAgIC8vIEVEQW9MIHdvcmtkIGRpZmZlcmVudCB0aGFuIHRoZSBvdGhlcnMgc28gaGVyZSB3aWxsIGJlIGEgY29tcGxldGUgcmUtcmVhZGluZyBvZiBkaWNlIHJvbGxcbiAgICAgIHJvbGx2YWx1ZT0xOyAvLyBzZXQgZGVmYXVsdFxuICAgICAgaWYgKGFjdGlvbmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoID4gMCkgeyAgICAgICAgICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25kaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGUgZmlyc3QgYWN0aW9uIGRpY2UgaXMgdGhlIGJhc2UgZGllXG4gICAgICAgICAgICByb2xsdmFsdWU9IGFjdGlvbmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbMF0ucmVzdWx0OyAgICAgICAgICAgIFxuICAgICAgICAgICAgYWN0aW9ucmVzdWx0ID0gJzxpbWcgc3JjPVwic3lzdGVtcy9lb2EvaW1hZ2VzL2FjdGlvbmRpZV92YWx1ZV8nICsgYWN0aW9uZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQgKyAnLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDotM3B4O21hcmdpbi1sZWZ0OjJweDtcIj4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub3cgbG9vayBmb3IgYm9udXMgZGljZSB0aGF0IGhhdmUgcmVzdWx0IDUtNlxuICAgICAgICAgICAgaWYoYWN0aW9uZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQ+PTUpe1xuICAgICAgICAgICAgICAvLyBhICsgICBcbiAgICAgICAgICAgICAgaWYocm9sbHZhbHVlPDYpe1xuICAgICAgICAgICAgICAgIHJvbGx2YWx1ZT1yb2xsdmFsdWUrMTtcbiAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGJvb25zPWJvb25zKzE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYWN0aW9ucmVzdWx0ID0gYWN0aW9ucmVzdWx0ICsgJycgKyAnPGltZyBzcmM9XCJzeXN0ZW1zL2VvYS9pbWFnZXMvYWN0aW9uZGllX3ZhbHVlX2Z1ZGdlX3N1Y2Nlc3MucG5nXCIgc3R5bGU9XCJtYXJnaW4tdG9wOi0zcHg7bWFyZ2luLWxlZnQ6MnB4O1wiPic7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgIGFjdGlvbnJlc3VsdCA9IGFjdGlvbnJlc3VsdCArICcnICsgJzxpbWcgc3JjPVwic3lzdGVtcy9lb2EvaW1hZ2VzL2FjdGlvbmRpZV92YWx1ZV9ibGFuay5wbmdcIiBzdHlsZT1cIm1hcmdpbi10b3A6LTNweDttYXJnaW4tbGVmdDoycHg7XCI+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbm93IGNoZWNrIHRoZSBwZW5hbHR5IGRpY2VcbiAgICAgIGlmIChkYW5nZXJkaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzLmxlbmd0aCA+IDApIHsgIFxuICAgICAgICBsZXQgaW1hZ2VmaWxlPScnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAvLyBub3cgbG9vayBmb3IgcGVuYWx0eSBkaWNlIHRoYXQgaGF2ZSByZXN1bHQgNS02XG4gICAgICAgICAgaWYoZGFuZ2VyZGljZXJlc3VsdHMudGVybXNbMF0ucmVzdWx0c1tpXS5yZXN1bHQ+PTUpe1xuICAgICAgICAgICAgLy8gYSAtXG4gICAgICAgICAgICBpZihyb2xsdmFsdWU+MSl7XG4gICAgICAgICAgICAgIHJvbGx2YWx1ZT1yb2xsdmFsdWUgLTE7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgIGJvdGNoZXM9Ym90Y2hlcysxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW1hZ2VmaWxlPSdkYW5nZXJkaWVfdmFsdWVfZnVkZ2VfZmFpbCc7XG4gICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgaW1hZ2VmaWxlPSdkYW5nZXJkaWVfdmFsdWVfYmxhbmsnO1xuICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgZGFuZ2VycmVzdWx0ID0gJzxpbWcgc3JjPVwic3lzdGVtcy9lb2EvaW1hZ2VzLycgKyBpbWFnZWZpbGUgKyAnLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDowcHg7bWFyZ2luLWxlZnQ6MnB4O1wiPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhbmdlcnJlc3VsdCA9IGRhbmdlcnJlc3VsdCArICcnICsgJzxpbWcgc3JjPVwic3lzdGVtcy9lb2EvaW1hZ2VzLycgKyBpbWFnZWZpbGUgKyAnLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXRvcDowcHg7bWFyZ2luLWxlZnQ6MnB4O1wiPic7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAgICAgICBcbiAgICAgIHN1Ym1zZyA9ICdSZXN1bHQ6ICcgKyByb2xsdmFsdWU7XG4gICAgICBzd2l0Y2ggKHJvbGx2YWx1ZSkgeyAgICAgICAgXG4gICAgICAgIGNhc2UgMDogICAgICAgICBcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIG9yYWNsZSA9ICdOTywgQU5EJzsgIFxuICAgICAgICAgIGlmKGJvdGNoZXM+MCl7XG4gICAgICAgICAgICBoYXNmdW1ibGUgPSB0cnVlO1xuICAgICAgICAgICAgc3VibXNnID0gc3VibXNnICsgJyArICcgKyBib3RjaGVzICsgJyhCb3RjaChzKSkgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBvcmFjbGUgPSAnTk8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgb3JhY2xlID0gJ05PLCBCVVQnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgb3JhY2xlID0gJ1lFUywgQlVUJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgIG9yYWNsZSA9ICdZRVMnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgb3JhY2xlID0gJ1lFUywgQU5EJzsgXG4gICAgICAgICAgaWYoYm9vbnM+MCl7XG4gICAgICAgICAgICBoYXNjcml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1Ym1zZyA9IHN1Ym1zZyArICcgKyAnICsgYm9vbnMgKyAnKEJvb24ocykpICc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICAvLyBTdGFuZGFyZCBGVTIgb3JhY2xlXG4gICAgICBmbGF2b3J0ZXh0ID0gJ1RoZSBPcmFjbGUgYW5zd2VyZWQnO1xuICAgICAgcm9sbHZhbHVlID0gaGlnaGVzdDtcbiAgICAgIHN1Ym1zZyA9ICdSZXN1bHQ6ICcgKyByb2xsdmFsdWU7XG4gICAgICBzd2l0Y2ggKHJvbGx2YWx1ZSkge1xuICAgICAgICAvLyBJbiBGVTIgQm90Y2g6IGlmIGFsbCB0aGUgKCBhcmUgY2FuY2VsbGVkLCBcbiAgICAgICAgLy8gdGhlIHJlc3VsdCBjb3VudHMgYXMgYSByb2xsIG9mIO+/vTHvv70uXG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBvcmFjbGUgPSAnQk9UQ0gnO1xuICAgICAgICAgIGhhc2Z1bWJsZSA9IHRydWU7XG4gICAgICAgICAgc3VibXNnID0gJ1Jlc3VsdDogJyArIGJvdGNoX3ZhbHVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgb3JhY2xlID0gJ05PIEFORC4uLic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBvcmFjbGUgPSAnTk8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgb3JhY2xlID0gJ05PIEJVVC4uLic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBvcmFjbGUgPSAnWUVTIEJVVC4uLic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICBvcmFjbGUgPSAnWUVTJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgIG9yYWNsZSA9ICdZRVMgQU5ELi4uJztcbiAgICAgICAgICAvLyBjaGVjayBmb3IgYm9vblxuICAgICAgICAgIGJvb25zID0gYXJyRmluYWxzWzVdIC0gMTtcbiAgICAgICAgICBpZiAoYm9vbnMgPiAwKSB7XG4gICAgICAgICAgICBoYXNjcml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHN1Ym1zZyA9IHN1Ym1zZyArICcgKyAnICsgYm9vbnMgKyAnKEJvb24ocykpICc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICAvL1xuICAgIC8vIHJvbGxpbmcgYW5kIGNhbGN1bHRpb24gY29tcGxldGUsIG5vdyBmb3IgcmVzdWx0IGRpc3BsYXlcbiAgICAvL1xuICAgIGxldCByb2xsZGljZSA9ICcnO1xuICAgIGxldCBwdWJsaWNtb2RlPWZhbHNlO1xuICAgIGxldCBibGluZG1vZGUgPSBmYWxzZTtcbiAgICBsZXQgcHJpdmF0ZW1vZGU9ZmFsc2U7XG4gICAgbGV0IGdtbW9kZT1mYWxzZTtcbiAgICBsZXQgc2VsZm1vZGU9ZmFsc2U7XG4gICAgbGV0IHJvbGx0eXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJvbGwtdHlwZS1zZWxlY3RcIik7XG4gICAgbGV0IHJ0eXBldmFsdWUgPSByb2xsdHlwZVswXS52YWx1ZTtcbiAgICBsZXQgcnZhbHVlID0gQ09OU1QuQ0hBVF9NRVNTQUdFX1RZUEVTLk9USEVSO1xuICAgIHN3aXRjaCAocnR5cGV2YWx1ZSkgeyAgICAgIC8vcm9sbCwgZ21yb2xsLGJsaW5kcm9sbCxzZWxmcm9sbFxuICAgICAgY2FzZSBDT05TVC5ESUNFX1JPTExfTU9ERVMuUFVCTElDOlxuICAgICAgICBwdWJsaWNtb2RlPXRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBDT05TVC5ESUNFX1JPTExfTU9ERVMuUFJJVkFURTpcbiAgICAgICAgZ21tb2RlID0gdHJ1ZTtcbiAgICAgICAgcHJpdmF0ZW1vZGU9dHJ1ZTtcbiAgICAgICAgcnZhbHVlID0gMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENPTlNULkRJQ0VfUk9MTF9NT0RFUy5CTElORDpcbiAgICAgICAgcnZhbHVlID0gMTtcbiAgICAgICAgYmxpbmRtb2RlID0gdHJ1ZTtcbiAgICAgICAgZ21tb2RlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENPTlNULkRJQ0VfUk9MTF9NT0RFUy5TRUxGOlxuICAgICAgICBzZWxmbW9kZT10cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICAgIFxuICAgIC8vIG5vdyBpZiB0aGUgbW9kdWxlIGRpY2Utc28tbmljZSBpcyBhY3RpdmF0ZWRcbiAgICBpZiAoZ2FtZS5kaWNlM2QgIT0gbnVsbCkgeyAgICAgICAgICAgIFxuICAgICAgLy9keW5hbWljIGJ1aWxpbmcgZGljZSByb2xscyBmb3IgZDNcbiAgICAgIGxldCBkaWNlM2RpY2U9W107ICAgICAgXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnNzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGRpZXJlc3VsdD17XG4gICAgICAgICAgcmVzdWx0OiBhY3Rpb25zc29ydGVkW2ldLFxuICAgICAgICAgIHJlc3VsdExhYmVsOiBhY3Rpb25zc29ydGVkW2ldLFxuICAgICAgICAgIHR5cGU6IFwiZDZcIixcbiAgICAgICAgICB2ZWN0b3JzOiBbXSxcbiAgICAgICAgICBvcHRpb25zOiB7Y29sb3JzZXQ6XCJ3aGl0ZVwifVxuICAgICAgICB9O1xuICAgICAgICBkaWNlM2RpY2UucHVzaChkaWVyZXN1bHQpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYW5nZXJzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGRpZXJlc3VsdD17XG4gICAgICAgICAgcmVzdWx0OiBkYW5nZXJzb3J0ZWRbaV0sXG4gICAgICAgICAgcmVzdWx0TGFiZWw6IGRhbmdlcnNvcnRlZFtpXSxcbiAgICAgICAgICB0eXBlOiBcImQ2XCIsXG4gICAgICAgICAgdmVjdG9yczogW10sXG4gICAgICAgICAgb3B0aW9uczoge2NvbG9yc2V0OlwiYmxhY2tcIn1cbiAgICAgICAgfTtcbiAgICAgICAgZGljZTNkaWNlLnB1c2goZGllcmVzdWx0KTtcbiAgICAgIH0gICAgICAgICAgICAgICAgICBcbiAgICAgIGxldCBkaWNlM2RkYXRhPSB7XG4gICAgICAgIHRocm93czogW3tcbiAgICAgICAgICAgIGRpY2U6ZGljZTNkaWNlIFxuICAgICAgICAgIH1dXG4gICAgICB9OyAgICAgIFxuICAgICAgbGV0IHVzZXI9Z2FtZS51c2VyOyAgICAgIFxuICAgICAgbGV0IHN5bmNocm9uaXplPWZhbHNlO1xuICAgICAgbGV0IHdoaXNwZXI7XG4gICAgICBsZXQgYmxpbmQgPSBmYWxzZTsgICAgICBcbiAgICAgIGlmKHB1YmxpY21vZGUpe1xuICAgICAgICBzeW5jaHJvbml6ZT10cnVlO1xuICAgICAgfSAgICAgIFxuICAgICAgaWYocHJpdmF0ZW1vZGUpe1xuICAgICAgICBzeW5jaHJvbml6ZT10cnVlO1xuICAgICAgICB3aGlzcGVyPUNoYXRNZXNzYWdlLmdldFdoaXNwZXJSZWNpcGllbnRzKCdHTScpO1xuICAgICAgfVxuICAgICAgaWYgKGJsaW5kbW9kZSl7XG4gICAgICAgIGJsaW5kPXRydWU7XG4gICAgICAgIHN5bmNocm9uaXplPXRydWU7XG4gICAgICAgIHdoaXNwZXI9Q2hhdE1lc3NhZ2UuZ2V0V2hpc3BlclJlY2lwaWVudHMoJ0dNJyk7XG4gICAgICB9ICAgICAgXG4gICAgICBpZihzZWxmbW9kZSl7XG4gICAgICAgIHN5bmNocm9uaXplPWZhbHNlO1xuICAgICAgfSAgICAgIFxuICAgICAgLy8gYWx3YXlzIHNob3cgZm9yIGdtXG4gICAgICBpZiAoZ2FtZS51c2VyLmlzR00pIHtcbiAgICAgICAgYmxpbmQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGdhbWUuZGljZTNkLnNob3coZGljZTNkZGF0YSwgdXNlciwgc3luY2hyb25pemUsIHdoaXNwZXIsIGJsaW5kKVxuICAgIH1cbiAgICBcbiAgICBsZXQgbXNnaW1nO1xuICAgIGxldCBtc2duYW1lO1xuICAgIGlmIChnYW1lLnVzZXIuY2hhcmFjdGVyICE9IG51bGwpIHtcbiAgICAgIG1zZ2ltZyA9IGdhbWUudXNlci5jaGFyYWN0ZXIuZGF0YS5pbWc7XG4gICAgICBtc2duYW1lID0gZ2FtZS51c2VyLmNoYXJhY3Rlci5kYXRhLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZ2ltZyA9IGdhbWUudXNlci5hdmF0YXI7XG4gICAgICBtc2duYW1lID0gZ2FtZS51c2VyLm5hbWU7XG4gICAgfVxuICAgIC8vIGRldGVybWluZSBydW5uaW5nIHN5c3RlbSAgICBcbiAgICBsZXQgcnVubmluZ3N5c3RlbW5hbWUgPSBnYW1lLnN5c3RlbS5pZDsgLy8gc2FuZGJveFxuICAgIGlmIChydW5uaW5nc3lzdGVtbmFtZSA9PSAnc2FuZGJveCcpIHtcbiAgICAgIC8vIHNwZWNpYWwgaGFuZGxpbmcgZm9yIHNhbmRib3ggICAgXG4gICAgICBsZXQgcm9sbERhdGEgPSB7XG4gICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgaW1nOiBtc2dpbWcsXG4gICAgICAgICAgbmFtZTogbXNnbmFtZVxuICAgICAgICB9LFxuICAgICAgICBhY3RvcjogbXNnbmFtZSxcbiAgICAgICAgZmxhdm9yOiBmbGF2b3J0ZXh0LFxuICAgICAgICBmb3JtdWxhOiAnJyxcbiAgICAgICAgbW9kOiAnJyxcbiAgICAgICAgcmVzdWx0OiBvcmFjbGUsXG4gICAgICAgIHVzZXI6IGdhbWUudXNlci5uYW1lLFxuICAgICAgICBjb25kaXRpb25hbDogc3VibXNnLFxuICAgICAgICBpc2NyaXQ6IGhhc2NyaXQsXG4gICAgICAgIGlzZnVtYmxlOiBoYXNmdW1ibGUsXG4gICAgICAgIGJsaW5kOiBibGluZG1vZGUsXG4gICAgICAgIGFjdGlvbjogYWN0aW9ucmVzdWx0LFxuICAgICAgICBkYW5nZXI6IGRhbmdlcnJlc3VsdCxcbiAgICAgICAgc3VtbWFyeTogc3VibXNnICsgJyA9PiAnICsgb3JhY2xlLFxuICAgICAgICBtc2c6IG1zZ1xuICAgICAgfTtcblxuICAgICAgcmVuZGVyVGVtcGxhdGUoYHN5c3RlbXMvJHtfbW9kdWxlX2lkfS90ZW1wbGF0ZXMvZnV4LWRpY2Utcm9sbGVyLWNoYXRtc2ctc2FuZGJveC5oYnNgLCByb2xsRGF0YSkudGhlbihodG1sID0+IHtcbiAgICAgICAgbGV0IG1lc3NhZ2VEYXRhID0ge1xuICAgICAgICAgIGNvbnRlbnQ6IGh0bWwsXG4gICAgICAgICAgdHlwZTogcnZhbHVlLFxuICAgICAgICAgIGJsaW5kOiBibGluZG1vZGVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJ0eXBldmFsdWUgPT0gQ09OU1QuRElDRV9ST0xMX01PREVTLlBSSVZBVEUgfHwgcnR5cGV2YWx1ZSA9PSBDT05TVC5ESUNFX1JPTExfTU9ERVMuQkxJTkQpIHtcbiAgICAgICAgICBtZXNzYWdlRGF0YS53aGlzcGVyID0gQ2hhdE1lc3NhZ2UuZ2V0V2hpc3BlclJlY2lwaWVudHMoJ0dNJyk7XG4gICAgICAgIH0gZWxzZSBpZiAocnR5cGV2YWx1ZSA9PSBDT05TVC5ESUNFX1JPTExfTU9ERVMuU0VMRikge1xuICAgICAgICAgIC8vIHdoaXNwZXIgdG8gc2VsZiAgXG4gICAgICAgICAgbWVzc2FnZURhdGEud2hpc3BlciA9IENoYXRNZXNzYWdlLmdldFdoaXNwZXJSZWNpcGllbnRzKGdhbWUudXNlci5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3bWVzc2FnZSA9IENoYXRNZXNzYWdlLmNyZWF0ZShtZXNzYWdlRGF0YSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gYW55IG90aGVyIHN5c3RlbVxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgbGV0IGFjdGlvbnJvbGxzPVtdO1xuICAgICAgbGV0IGF1Z21lbnRyb2xscz1bXTtcbiAgICAgIGxldCBkYW5nZXJyb2xscz1bXTtcbiAgICAgIFxuICAgICAgaWYgKHN5c3RlbXZhcmlhbnQgPT0gRlVYX0NPTlNULlNZU1RFTV9WQVJJQU5UUy5FQVJUSERBV05fQUdFX09GX0xFR0VORCkge1xuICAgICAgICAvLyBkb24gdXNlIHRoZSBzb3J0ZWQgYXJyYXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25kaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGRpZXJlc3VsdD17XG4gICAgICAgICAgICBjbGFzc2VzOidkaWUgZDYnLFxuICAgICAgICAgICAgcmVzdWx0OiBhY3Rpb25kaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdFxuICAgICAgICAgIH07XG4gICAgICAgICAgYWN0aW9ucm9sbHMucHVzaChkaWVyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXVnbWVudGRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgZGllcmVzdWx0PXtcbiAgICAgICAgICAgIGNsYXNzZXM6J2RpZSBkOCcsXG4gICAgICAgICAgICByZXN1bHQ6IGF1Z21lbnRkaWNlcmVzdWx0cy50ZXJtc1swXS5yZXN1bHRzW2ldLnJlc3VsdFxuICAgICAgICAgIH07XG4gICAgICAgICAgYXVnbWVudHJvbGxzLnB1c2goZGllcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgZGllcmVzdWx0PXtcbiAgICAgICAgICAgIGNsYXNzZXM6J2RpZSBkNicsXG4gICAgICAgICAgICByZXN1bHQ6IGRhbmdlcmRpY2VyZXN1bHRzLnRlcm1zWzBdLnJlc3VsdHNbaV0ucmVzdWx0XG4gICAgICAgICAgfTtcbiAgICAgICAgICBkYW5nZXJyb2xscy5wdXNoKGRpZXJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9IGVsc2V7ICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uc3Vuc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGRpZXJlc3VsdD17XG4gICAgICAgICAgICBjbGFzc2VzOidkaWUgZDYnLFxuICAgICAgICAgICAgcmVzdWx0OiBhY3Rpb25zdW5zb3J0ZWRbaV1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGFjdGlvbnJvbGxzLnB1c2goZGllcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF1Z21lbnR1bnNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxldCBkaWVyZXN1bHQ9e1xuICAgICAgICAgICAgY2xhc3NlczonZGllIGQ4JyxcbiAgICAgICAgICAgIHJlc3VsdDogYXVnbWVudHVuc29ydGVkW2ldXG4gICAgICAgICAgfTtcbiAgICAgICAgICBhdWdtZW50cm9sbHMucHVzaChkaWVyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGFuZ2VydW5zb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsZXQgZGllcmVzdWx0PXtcbiAgICAgICAgICAgIGNsYXNzZXM6J2RpZSBkNicsXG4gICAgICAgICAgICByZXN1bHQ6IGRhbmdlcnVuc29ydGVkW2ldXG4gICAgICAgICAgfTtcbiAgICAgICAgICBkYW5nZXJyb2xscy5wdXNoKGRpZXJlc3VsdCk7XG4gICAgICAgIH0gIFxuICAgICAgfVxuICAgICAgXG4gICAgICBsZXQgcGFydHM9W1xuICAgICAgICB7XG4gICAgICAgICAgZmFjZXM6NixcbiAgICAgICAgICBmbGF2b3I6J3doaXRlJyxcbiAgICAgICAgICBmb3JtdWxhOidBY3Rpb24gRGljZScsXG4gICAgICAgICAgcm9sbHM6YWN0aW9ucm9sbHMsXG4gICAgICAgICAgdG90YWw6YWN0aW9uZGljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmFjZXM6OCxcbiAgICAgICAgICBmbGF2b3I6J2dyZWVuJyxcbiAgICAgICAgICBmb3JtdWxhOidBdWdtZW50IERpY2UnLFxuICAgICAgICAgIHJvbGxzOmF1Z21lbnRyb2xscyxcbiAgICAgICAgICB0b3RhbDphdWdtZW50ZGljZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmFjZXM6NixcbiAgICAgICAgICBmbGF2b3I6J2JsYWNrJyxcbiAgICAgICAgICBmb3JtdWxhOidFZGdlIERpY2UnLFxuICAgICAgICAgIHJvbGxzOmRhbmdlcnJvbGxzLFxuICAgICAgICAgIHRvdGFsOmRhbmdlcmRpY2VcbiAgICAgICAgfVxuICAgICAgXTtcbiAgICAgIFxuICAgICAgbGV0IHJvbGxEYXRhID0ge1xuICAgICAgICB0b2tlbjoge1xuICAgICAgICAgIGltZzogbXNnaW1nLFxuICAgICAgICAgIG5hbWU6IG1zZ25hbWVcbiAgICAgICAgfSxcbiAgICAgICAgYWN0b3I6IG1zZ25hbWUsXG4gICAgICAgIGZsYXZvcjogZmxhdm9ydGV4dCxcbiAgICAgICAgZm9ybXVsYTogc3VibXNnLFxuICAgICAgICB0b3RhbDpvcmFjbGUgLFxuICAgICAgICBwYXJ0czpwYXJ0cyxcbiAgICAgICAgXG4gICAgICAgIG1vZDogJycsXG4gICAgICAgIHJlc3VsdDogb3JhY2xlICxcbiAgICAgICAgdXNlcjogZ2FtZS51c2VyLm5hbWUsXG4gICAgICAgIGNvbmRpdGlvbmFsOiBzdWJtc2csXG4gICAgICAgIGlzY3JpdDogaGFzY3JpdCxcbiAgICAgICAgaXNmdW1ibGU6IGhhc2Z1bWJsZSxcbiAgICAgICAgYmxpbmQ6IGJsaW5kbW9kZSxcbiAgICAgICAgYXVnbWVudDogYXVnbWVudHJlc3VsdCxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb25yZXN1bHQsXG4gICAgICAgIGRhbmdlcjogZGFuZ2VycmVzdWx0LFxuICAgICAgICBzdW1tYXJ5OiBzdWJtc2cgKyAnID0+ICcgKyBvcmFjbGUsXG4gICAgICAgIG1zZzogbXNnXG4gICAgICB9O1xuXG4gICAgICBjb25zb2xlLmxvZyhyb2xsRGF0YSk7XG4gICAgICByZW5kZXJUZW1wbGF0ZShgc3lzdGVtcy8ke19tb2R1bGVfaWR9L3RlbXBsYXRlcy9mdXgtZGljZS1yb2xsZXItY2hhdG1zZy1jb3JlLmhic2AsIHJvbGxEYXRhKS50aGVuKGh0bWwgPT4ge1xuICAgICAgICBsZXQgbWVzc2FnZURhdGEgPSB7XG4gICAgICAgICAgY29udGVudDogaHRtbCxcbiAgICAgICAgICB0eXBlOiBydmFsdWUsXG4gICAgICAgICAgYmxpbmQ6IGJsaW5kbW9kZVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgaWYgKHJ0eXBldmFsdWUgPT0gQ09OU1QuRElDRV9ST0xMX01PREVTLlBSSVZBVEUgfHwgcnR5cGV2YWx1ZSA9PSBDT05TVC5ESUNFX1JPTExfTU9ERVMuQkxJTkQpIHtcbiAgICAgICAgICBtZXNzYWdlRGF0YS53aGlzcGVyID0gQ2hhdE1lc3NhZ2UuZ2V0V2hpc3BlclJlY2lwaWVudHMoJ0dNJyk7XG4gICAgICAgIH0gZWxzZSBpZiAocnR5cGV2YWx1ZSA9PSBDT05TVC5ESUNFX1JPTExfTU9ERVMuU0VMRikge1xuICAgICAgICAgIC8vIHdoaXNwZXIgdG8gc2VsZiAgXG4gICAgICAgICAgbWVzc2FnZURhdGEud2hpc3BlciA9IENoYXRNZXNzYWdlLmdldFdoaXNwZXJSZWNpcGllbnRzKGdhbWUudXNlci5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV3bWVzc2FnZSA9IENoYXRNZXNzYWdlLmNyZWF0ZShtZXNzYWdlRGF0YSk7XG4gICAgICB9KTsgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHJvbGx2YWx1ZSArIGJvb25zO1xuXG4gIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZW9hIH0gZnJvbSBcIi4vbW9kdWxlL2NvbmZpZy5qc1wiO1xuaW1wb3J0IHsgVGVtcGxhdGVQcmVsb2FkZXIgfSBmcm9tIFwiLi9tb2R1bGUvaGVscGVyL1RlbXBsYXRlUHJlbG9hZGVyXCI7XG5pbXBvcnQgeyBFb0FCcmVlZFNoZWV0IH0gZnJvbSBcIi4vbW9kdWxlL2l0ZW1zL0JyZWVkU2hlZXRcIjtcbmltcG9ydCB7IEVvQVByb2Zlc3Npb25TaGVldCB9IGZyb20gXCIuL21vZHVsZS9pdGVtcy9Qcm9mZXNzaW9uU2hlZXRcIjtcbmltcG9ydCB7IEVvQU9yaWdpblNoZWV0IH0gZnJvbSBcIi4vbW9kdWxlL2l0ZW1zL09yaWdpblNoZWV0XCI7XG5pbXBvcnQgeyBFb0FGYWN0aW9uU2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvRmFjdGlvblNoZWV0XCI7XG5pbXBvcnQgeyBFb0FBY3RvclNoZWV0IH0gZnJvbSBcIi4vbW9kdWxlL2FjdG9ycy9BY3RvclNoZWV0XCI7XG5pbXBvcnQgeyBFb0FTa2lsbFNoZWV0IH0gZnJvbSBcIi4vbW9kdWxlL2l0ZW1zL1NraWxsU2hlZXRcIjtcbmltcG9ydCB7IEVvQVN1cHBseVNoZWV0IH0gZnJvbSBcIi4vbW9kdWxlL2l0ZW1zL1N1cHBseVNoZWV0XCI7XG5pbXBvcnQgeyBFb0FMb2Fkb3V0U2hlZXQgfSBmcm9tIFwiLi9tb2R1bGUvaXRlbXMvTG9hZG91dFNoZWV0XCI7XG5pbXBvcnQgKiBhcyBEaWNlIGZyb20gXCIuL2hlbHBlcnMvZGljZS5qc1wiO1xuXG5Ib29rcy5vbmNlKFwiaW5pdFwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT1FZGdlIG9mIEFuYXJjaHk9PT09PT09PT09PT09PT09PT09PT1cIilcbiAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT1Mb2FkPT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKVxuICAgIENPTkZJR1tcImVvYVwiXSA9IGVvYTtcblxuICAgIEl0ZW1zLnVucmVnaXN0ZXJTaGVldChcImNvcmVcIiwgSXRlbVNoZWV0KTtcbiAgICBJdGVtcy5yZWdpc3RlclNoZWV0KFwiZW9hXCIsIEVvQUJyZWVkU2hlZXQsIHtcbiAgICAgICAgdHlwZXM6IFtcImJyZWVkXCJdLFxuICAgICAgICBtYWtlRGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1zLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BUHJvZmVzc2lvblNoZWV0LCB7XG4gICAgICAgIHR5cGVzOiBbXCJwcm9mZXNzaW9uXCJdLFxuICAgICAgICBtYWtlRGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1zLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BT3JpZ2luU2hlZXQsIHtcbiAgICAgICAgdHlwZXM6IFtcIm9yaWdpblwiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcbiAgICBJdGVtcy5yZWdpc3RlclNoZWV0KFwiZW9hXCIsIEVvQUZhY3Rpb25TaGVldCwge1xuICAgICAgICB0eXBlczogW1wiZmFjdGlvblwiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcbiAgICBJdGVtcy5yZWdpc3RlclNoZWV0KFwiZW9hXCIsIEVvQVNraWxsU2hlZXQsIHtcbiAgICAgICAgdHlwZXM6IFtcInNraWxsXCJdLFxuICAgICAgICBtYWtlRGVmYXVsdDogdHJ1ZVxuICAgIH0pO1xuICAgIEl0ZW1zLnJlZ2lzdGVyU2hlZXQoXCJlb2FcIiwgRW9BU3VwcGx5U2hlZXQsIHtcbiAgICAgICAgdHlwZXM6IFtcInN1cHBseVwiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcbiAgICBJdGVtcy5yZWdpc3RlclNoZWV0KFwiZW9hXCIsIEVvQUxvYWRvdXRTaGVldCwge1xuICAgICAgICB0eXBlczogW1wibG9hZG91dFwiXSxcbiAgICAgICAgbWFrZURlZmF1bHQ6IHRydWVcbiAgICB9KTtcblxuICAgIEFjdG9ycy5yZWdpc3RlclNoZWV0KFwiZW9hXCIsIEVvQUFjdG9yU2hlZXQsIHtcbiAgICAgICAgdHlwZXM6IFtcImhlcm9cIl0sXG4gICAgICAgIG1ha2VEZWZhdWx0OiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBhd2FpdCBUZW1wbGF0ZVByZWxvYWRlci5wcmVsb2FkSGFuZGxlYmFyc1RlbXBsYXRlcygpO1xuICAgIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJmYWNlXCIsIERpY2UuZGljZVRvRmFjZXMpO1xuICAgIC8vIGF3YWl0IFRlbXBsYXRlUHJlbG9hZGVyLnByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCk7XG4gICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihcImZhY2UyXCIsIERpY2UuZGljZVRvRmFjZXNBbHQpO1xufSk7XG5cbkhvb2tzLm9uY2UoXCJyZWFkeVwiLCBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT1FZGdlIG9mIEFuYXJjaHk9PT09PT09PT09PT09PT09PT09PT09PVwiKVxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1SZWFkeT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIilcblxufSk7XG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuXG4gICAgICAgIGlmIChtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImFwcGx5XCIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGUgaW4gX3RlbXBsYXRlQ2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF90ZW1wbGF0ZUNhY2hlLCB0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90ZW1wbGF0ZUNhY2hlW3RlbXBsYXRlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFRlbXBsYXRlUHJlbG9hZGVyLnByZWxvYWRIYW5kbGViYXJzVGVtcGxhdGVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcHBsaWNhdGlvbiBpbiB1aS53aW5kb3dzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodWkud2luZG93cywgYXBwbGljYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1aS53aW5kb3dzW2FwcGxpY2F0aW9uXS5yZW5kZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=