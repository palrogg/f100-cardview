/**!
 * MixItUp MultiFilter v3.3.4
 * A UI-builder for powerful multidimensional filtering
 * Build 6bbb142d-9851-4ca8-b6d4-f760362d93ec
 *
 * Requires mixitup.js >= v^3.1.2
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup-multifilter/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup-multifilter/licenses/
 *
 *            Non-commercial use permitted under same terms as  license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(u){"use strict";var e=function(l){var E=l.h,n;if(n=[["A",/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g],["AA",/[\uA732]/g],["AE",/[\u00C6\u01FC\u01E2]/g],["AO",/[\uA734]/g],["AU",/[\uA736]/g],["AV",/[\uA738\uA73A]/g],["AY",/[\uA73C]/g],["B",/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g],["C",/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g],["D",/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g],["DZ",/[\u01F1\u01C4]/g],["Dz",/[\u01F2\u01C5]/g],["E",/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g],["F",/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g],["G",/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g],["H",/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g],["I",/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g],["J",/[\u004A\u24BF\uFF2A\u0134\u0248]/g],["K",/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g],["L",/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g],["LJ",/[\u01C7]/g],["Lj",/[\u01C8]/g],["M",/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g],["N",/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g],["NJ",/[\u01CA]/g],["Nj",/[\u01CB]/g],["O",/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g],["OI",/[\u01A2]/g],["OO",/[\uA74E]/g],["OU",/[\u0222]/g],["P",/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g],["Q",/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g],["R",/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g],["S",/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g],["T",/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g],["TZ",/[\uA728]/g],["U",/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g],["V",/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g],["VY",/[\uA760]/g],["W",/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g],["X",/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g],["Y",/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g],["Z",/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g],["a",/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g],["aa",/[\uA733]/g],["ae",/[\u00E6\u01FD\u01E3]/g],["ao",/[\uA735]/g],["au",/[\uA737]/g],["av",/[\uA739\uA73B]/g],["ay",/[\uA73D]/g],["b",/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g],["c",/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g],["d",/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g],["dz",/[\u01F3\u01C6]/g],["e",/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g],["f",/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g],["g",/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g],["h",/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g],["hv",/[\u0195]/g],["i",/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g],["j",/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g],["k",/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g],["l",/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g],["lj",/[\u01C9]/g],["m",/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g],["n",/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g],["nj",/[\u01CC]/g],["o",/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g],["oi",/[\u01A3]/g],["ou",/[\u0223]/g],["oo",/[\uA74F]/g],["p",/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g],["q",/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g],["r",/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g],["s",/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g],["t",/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g],["tz",/[\uA729]/g],["u",/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g],["v",/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g],["vy",/[\uA761]/g],["w",/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g],["x",/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g],["y",/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g],["z",/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g]],!l.CORE_VERSION||!E.compareVersions(e.REQUIRE_CORE_VERSION,l.CORE_VERSION))throw new Error("[MixItUp Multifilter] MixItUp Multifilter v"+e.EXTENSION_VERSION+" requires at least MixItUp v"+e.REQUIRE_CORE_VERSION);
/**
         * A group of optional callback functions to be invoked at various
         * points within the lifecycle of a mixer operation.
         *
         * @constructor
         * @memberof    mixitup.Config
         * @name        callbacks
         * @namespace
         * @public
         * @since       3.0.0
         */l.ConfigCallbacks.registerAction("afterConstruct","multifilter",function(){
/**
             * A callback function invoked whenever MultiFilter filter groups
             * are parsed. This occurs whenever the user interacts with filter
             * group UI, or when the `parseFilterGroups()` API method is called,
             * but before the resulting filter operation has been triggered.
             *
             * By default, this generates the appropriate compound selector and
             * filters the mixer using a `multimix()` API call internally. This
             * callback can be used to transform the multimix command object sent
             * to this API call.
             *
             * This is particularly useful when additional behavior such as sorting
             * or pagination must be taken into account when using the MultiFilter API.
             *
             * The callback receives the generated multimix command object, and must
             * also return a valid multimix command object.
             *
             * @example <caption>Example: Overriding the default filtering behavior with `onParseFilterGroups`</caption>
             * var mixer = mixitup(containerEl, {
             *     callbacks: {
             *         onParseFilterGroups: function(command) {
             *             command.paginate = 3;
             *             command.sort = 'default:desc';
             *
             *             return command;
             *         }
             *     }
             * });
             *
             * @name        onParseFilterGroups
             * @memberof    mixitup.Config.callbacks
             * @instance
             * @type        {function}
             * @default     null
             */
this.onParseFilterGroups=null}),
/**
         * A group of properties defining the behavior of your multifilter UI.
         *
         * @constructor
         * @memberof    mixitup.Config
         * @name        multifilter
         * @namespace
         * @public
         * @since       3.0.0
         */
l.ConfigMultifilter=function(){
/**
             * A boolean dictating whether or not to enable multifilter functionality.
             *
             * If `true`, MixItUp will query the DOM for any elements with a
             * `data-filter-group` attribute present on instantiation.
             *
             * @name        enable
             * @memberof    mixitup.Config.multifilter
             * @instance
             * @type        {boolean}
             * @default     false
             */
this.enable=!1,
/**
             * A string dictating the logic to use when concatenating selectors within
             * individual filter groups.
             *
             * If set to `'or'` (default), targets will be shown if they match any
             * active filter in the group.
             *
             * If set to `'and'`, targets will be shown only if they match
             * all active filters in the group.
             *
             * @name        logicWithinGroup
             * @memberof    mixitup.Config.multifilter
             * @instance
             * @type        {string}
             * @default     'or'
             */
this.logicWithinGroup="or",
/**
             * A string dictating the logic to use when concatenating each group's
             * selectors into one single selector.
             *
             * If set to `'and'` (default), targets will be shown only if they match
             * the combined active selectors of all groups.
             *
             * If set to `'or'`, targets will be shown if they match the active selectors
             * of any individual group.
             *
             * @name        logicBetweenGroups
             * @memberof    mixitup.Config.multifilter
             * @instance
             * @type        {string}
             * @default     'and'
             */
this.logicBetweenGroups="and",
/**
             * An integer dictating the minimum number of characters at which the value
             * of a text input will be included as a multifilter. This prevents short or
             * incomplete words with many potential matches from triggering
             * filter operations.
             *
             * @name        minSearchLength
             * @memberof    mixitup.Config.multifilter
             * @instance
             * @type        {number}
             * @default     3
             */
this.minSearchLength=3,
/**
             * A string dictating when the parsing of filter groups should occur.
             *
             * If set to `'change'` (default), the mixer will be filtered whenever the
             * filtering UI is interacted with. The mode provides real-time filtering with
             * instant feedback.
             *
             * If set to `'submit'`, the mixer will only be filtered when a submit button is
             * clicked (if using a `<form>` element as a parent). This enables the user to firstly
             * make their selection, and then trigger filtering once they have
             * finished making their selection.
             *
             * Alternatively, the `mixer.parseFilterGroups()` method can be called via the API at any
             * time to trigger the parsing of filter groups and filter the mixer.
             *
             * @name        parseOn
             * @memberof    mixitup.Config.multifilter
             * @instance
             * @type        {string}
             * @default     'change'
             */
this.parseOn="change",
/**
             * An integer dictating the duration in ms that must elapse between keyup
             * events in order to trigger a change.
             *
             * Setting a comfortable delay of ~350ms prevents the mixer from being
             * thrashed while typing occurs.
             *
             * @name        keyupThrottleDuration
             * @memberof    mixitup.Config.multifilter
             * @instance
             * @type        {number}
             * @default     350
             */
this.keyupThrottleDuration=350,E.seal(this)},
/**
         * The MixItUp configuration object is extended with properties relating to
         * the MultiFilter extension.
         *
         * For the full list of configuration options, please refer to the MixItUp
         * core documentation.
         *
         * @constructor
         * @memberof    mixitup
         * @name        Config
         * @namespace
         * @public
         * @since       2.0.0
         */
l.Config.registerAction("beforeConstruct","multifilter",function(){this.multifilter=new l.ConfigMultifilter}),l.MultifilterFormEventTracker=function(){this.form=null,this.totalBound=0,this.totalHandled=0,E.seal(this)},l.FilterGroupDom=function(){this.el=null,this.form=null,E.seal(this)},l.FilterGroup=function(){this.name="",this.dom=new l.FilterGroupDom,this.activeSelectors=[],this.activeFilters=[],this.activeToggles=[],this.handler=null,this.mixer=null,this.logic="or",this.parseOn="change",this.keyupTimeout=-1,E.seal(this)},E.extend(l.FilterGroup.prototype,{
/**
             * @private
             * @param {HTMLELement}     el
             * @param {mixitup.Mixer}   mixer
             * @return {void}
             */
init:function(u,e){var t=this,i=u.getAttribute("data-logic");t.dom.el=u,this.name=t.dom.el.getAttribute("data-filter-group")||"",t.cacheDom(),t.dom.form&&t.enableButtons(),t.mixer=e,(i&&"and"===i.toLowerCase()||"and"===e.config.multifilter.logicWithinGroup)&&(
// override default group logic
t.logic="and"),t.bindEvents()},
/**
             * @private
             * @return {void}
             */
cacheDom:function(){var u=this;u.dom.form=E.closestParent(u.dom.el,"form",!0)},enableButtons:function(){var u,e=this.dom.form.querySelectorAll('button[type="submit"]:disabled'),t=null,i=-1;for(i=0;t=e[i];i++)t.disabled&&(t.disabled=!1)},
/**
             * @private
             * @return {void}
             */
bindEvents:function(){var e=this;e.handler=function(u){switch(u.type){case"reset":case"submit":e.handleFormEvent(u);break;default:e["handle"+E.pascalCase(u.type)](u)}},E.on(e.dom.el,"click",e.handler),E.on(e.dom.el,"change",e.handler),E.on(e.dom.el,"keyup",e.handler),e.dom.form&&(E.on(e.dom.form,"reset",e.handler),E.on(e.dom.form,"submit",e.handler))},
/**
             * @private
             * @return {void}
             */
unbindEvents:function(){var u=this;E.off(u.dom.el,"click",u.handler),E.off(u.dom.el,"change",u.handler),E.off(u.dom.el,"keyup",u.handler),u.dom.form&&(E.off(u.dom.form,"reset",u.handler),E.off(u.dom.form,"submit",u.handler)),u.handler=null},
/**
             * @private
             * @param   {MouseEvent} e
             * @return  {void}
             */
handleClick:function(u){var e=this,t=e.mixer,i=null,r=E.closestParent(u.target,"[data-filter], [data-toggle]",!0),l="",o=-1,n="";r&&((l=e.mixer.config.selectors.control)&&!r.matches(l)||(u.stopPropagation(),t.lastClicked||(t.lastClicked=r),"function"==typeof t.config.callbacks.onMixClick&&!1===(i=t.config.callbacks.onMixClick.call(t.lastClicked,t.state,u,e))||(r.matches("[data-filter]")?(n=r.getAttribute("data-filter"),e.activeToggles=[],e.activeSelectors=e.activeFilters=[n]):r.matches("[data-toggle]")&&(n=r.getAttribute("data-toggle"),e.activeFilters=[],-1<(o=e.activeToggles.indexOf(n))?e.activeToggles.splice(o,1):e.activeToggles.push(n),"and"===e.logic?
// Compress into single node
e.activeSelectors=[e.activeToggles]:e.activeSelectors=e.activeToggles),e.updateControls(),"change"===e.mixer.config.multifilter.parseOn&&e.mixer.parseFilterGroups())))},
/**
             * @private
             * @param   {Event} e
             * @return  {void}
             */
handleChange:function(u){var e=this,t=u.target;switch(u.stopPropagation(),t.type){case"text":case"search":case"email":case"select-one":case"radio":e.getSingleValue(t);break;case"checkbox":case"select-multiple":e.getMultipleValues(t);break}"change"===e.mixer.config.multifilter.parseOn&&e.mixer.parseFilterGroups()},handleKeyup:function(u){var e=this,t=u.target;
// NB: Selects can fire keyup events (e.g. multiselect, textual search)
["text","search","email"].indexOf(t.type)<0||("change"===e.mixer.config.multifilter.parseOn?(clearTimeout(e.keyupTimeout),e.keyupTimeout=setTimeout(function(){e.getSingleValue(t),e.mixer.parseFilterGroups()},e.mixer.config.multifilter.keyupThrottleDuration)):e.mixer.getSingleValue(t))},
/**
             * @private
             * @param   {Event} e
             * @return  {void}
             */
handleFormEvent:function(u){var e=this,t=null,i=null,r=-1;if("submit"===u.type&&u.preventDefault(),"reset"===u.type&&(e.activeFilters=e.activeToggles=e.activeSelectors=[],e.updateControls()),e.mixer.multifilterFormEventTracker)t=e.mixer.multifilterFormEventTracker;else for((t=e.mixer.multifilterFormEventTracker=new l.MultifilterFormEventTracker).form=u.target,r=0;i=e.mixer.filterGroups[r];r++)i.dom.form===u.target&&t.totalBound++;u.target===t.form&&(t.totalHandled++,t.totalHandled===t.totalBound&&(e.mixer.multifilterFormEventTracker=null,"submit"!==u.type&&"change"!==e.mixer.config.multifilter.parseOn||e.mixer.parseFilterGroups()))},
/**
             * @private
             * @param   {HTMLELement} input
             * @return  {void}
             */
getSingleValue:function(u){var e=this,t=null,i="",r="",l="",o=-1;if(u.type.match(/text|search|email/g)){if(!(i=u.getAttribute("data-search-attribute")))throw new Error("[MixItUp MultiFilter] A valid `data-search-attribute` must be present on text inputs");if(u.value.length<e.mixer.config.multifilter.minSearchLength)return void(e.activeSelectors=e.activeFilters=e.activeToggles=[""]);
// Lowercase and trim
// Replace diacritics
for(l=u.value.toLowerCase().trim(),o=0;t=n[o];o++)l=l.replace(t[1],t[0]);
// Strip non-word characters
r="["+i+'*="'+(l=l.replace(/\W+/g," "))+'"]'}else r=u.value;"string"==typeof u.value&&(e.activeSelectors=e.activeToggles=e.activeFilters=r?[r]:[])},
/**
             * @private
             * @param   {HTMLELement} input
             * @return  {void}
             */
getMultipleValues:function(u){var e=this,t=[],i="",r=null,l=null,o=-1;switch(u.type){case"checkbox":i='input[type="checkbox"]';break;case"select-multiple":i="option"}for(l=e.dom.el.querySelectorAll(i),o=0;r=l[o];o++)(r.checked||r.selected)&&r.value&&t.push(r.value);e.activeFilters=[],e.activeToggles=t,"and"===e.logic?
// Compress into single node
e.activeSelectors=[t]:e.activeSelectors=t},
/**
             * @private
             * @param   {Array.<HTMLELement>} [controlEls]
             * @return  {void}
             */
updateControls:function(u){var e=this,t=null,i="",r="",l="",o=-1;for(r=["[data-filter]"+(i=e.mixer.config.selectors.control.trim()),"[data-toggle]"+i].join(", "),u=u||e.dom.el.querySelectorAll(r),o=0;t=u[o];o++)l=Boolean(t.getAttribute("data-toggle"))?"toggle":"filter",e.updateControl(t,l)},
/**
             * @private
             * @param   {HTMLELement}   controlEl
             * @param   {string}        type
             * @return  {void}
             */
updateControl:function(u,e){var t=this,i=u.getAttribute("data-"+e),r=t.activeToggles.concat(t.activeFilters),l="";l=E.getClassname(t.mixer.config.classNames,e,t.mixer.config.classNames.modifierActive),-1<r.indexOf(i)?E.addClass(u,l):E.removeClass(u,l)},
/**
             * @private
             */
updateUi:function(){var u=this,e=u.dom.el.querySelectorAll("[data-filter], [data-toggle]"),t=u.dom.el.querySelectorAll('input[type="radio"], input[type="checkbox"], option'),i=u.activeToggles.concat(u.activeFilters),r=!1,l=null,o=-1;for(e.length&&u.updateControls(e,!0),o=0;l=t[o];o++)switch(r=-1<i.indexOf(l.value),l.tagName.toLowerCase()){case"option":l.selected=r;break;case"input":l.checked=r;break}}}),l.MixerDom.registerAction("afterConstruct","multifilter",function(){this.filterGroups=[]}),
/**
         * The `mixitup.Mixer` class is extended with API methods relating to
         * the MultiFilter extension.
         *
         * For the full list of API methods, please refer to the MixItUp
         * core documentation.
         *
         * @constructor
         * @namespace
         * @name        Mixer
         * @memberof    mixitup
         * @public
         * @since       3.0.0
         */
l.Mixer.registerAction("afterConstruct","multifilter",function(){this.filterGroups=[],this.filterGroupsHash={},this.multifilterFormEventTracker=null}),l.Mixer.registerAction("afterCacheDom","multifilter",function(){var u=this,e=null;if(u.config.multifilter.enable){switch(u.config.controls.scope){case"local":e=u.dom.container;break;case"global":e=u.dom.document;break;default:throw new Error(l.messages.ERROR_CONFIG_INVALID_CONTROLS_SCOPE)}u.dom.filterGroups=e.querySelectorAll("[data-filter-group]")}}),l.Mixer.registerAction("beforeInitControls","multifilter",function(){var u=this;u.config.multifilter.enable&&(u.config.controls.live=!0)}),l.Mixer.registerAction("afterSanitizeConfig","multifilter",function(){var u=this;u.config.multifilter.logicBetweenGroups=u.config.multifilter.logicBetweenGroups.toLowerCase().trim(),u.config.multifilter.logicWithinGroup=u.config.multifilter.logicWithinGroup.toLowerCase().trim()}),l.Mixer.registerAction("afterAttach","multifilter",function(){var u=this;u.dom.filterGroups.length&&u.indexFilterGroups()}),l.Mixer.registerAction("afterUpdateControls","multifilter",function(){var u=this,e=null,t=-1;for(t=0;e=u.filterGroups[t];t++)e.updateControls()}),l.Mixer.registerAction("beforeDestroy","multifilter",function(){var u=this,e=null,t=-1;for(t=0;e=u.filterGroups[t];t++)e.unbindEvents()}),l.Mixer.extend(
/** @lends mixitup.Mixer */
{
/**
             * @private
             * @return {void}
             */
indexFilterGroups:function(){var u=this,e=null,t=null,i=-1;for(i=0;t=u.dom.filterGroups[i];i++)if((e=new l.FilterGroup).init(t,u),u.filterGroups.push(e),e.name){
// If present, also index by name
if(void 0!==u.filterGroupsHash[e.name])throw new Error('[MixItUp MultiFilter] A filter group with name "'+e.name+'" already exists');u.filterGroupsHash[e.name]=e}},
/**
             * @private
             * @instance
             * @since   2.0.0
             * @param   {Array<*>}  args
             * @return  {mixitup.UserInstruction}
             */
parseParseFilterGroupsArgs:function(u){var e=this,t=new l.UserInstruction,i=null,r=-1;for(t.animate=e.config.animation.enable,t.command=new l.CommandFilter,r=0;r<u.length;r++)"boolean"==typeof(i=u[r])?t.animate=i:"function"==typeof i&&(t.callback=i);return E.freeze(t),t},
/**
             * Recursively builds up paths between all possible permutations
             * of filter group nodes according to the defined logic.
             *
             * @private
             * @return {Array.<Array.<string>>}
             */
getFilterGroupPaths:function(){var u=this,t=null,i=null,e=null,r=[],l=[],o=[],n=-1;for(n=0;n<u.filterGroups.length;n++)
// Filter out groups without any active filters
(e=u.filterGroups[n].activeSelectors).length&&(r.push(e),
// Initialise tracker for each group
o.push(0));return t=function(){var u=null,e=[],t=-1;for(t=0;t<r.length;t++)u=r[t][o[t]],Array.isArray(u)&&(
// AND logic within group
u=u.join("")),e.push(u);e=E.clean(e),l.push(e)},i=function(u){for(var e=r[u=u||0];o[u]<e.length;)u<r.length-1?
// If not last, recurse
i(u+1):
// Last, build selector
t(),o[u]++;o[u]=0},r.length?(i(),l):""},
/**
             * Builds up a selector string from a provided paths array.
             *
             * @private
             * @param  {Array.<Array.<string>>} paths
             * @return {string}
             */
buildSelectorFromPaths:function(u){var e=this,t=null,i=[],r="",l="",o=-1;if(!u.length)return"";if("or"===e.config.multifilter.logicBetweenGroups&&(l=", "),1<u.length){for(o=0;o<u.length;o++)r=(t=u[o]).join(l),i.indexOf(r)<0&&i.push(r);return i.join(", ")}return u[0].join(l)},
/**
             * Traverses the currently active filters in all groups, building up a
             * compound selector string as per the defined logic. A filter operation
             * is then called on the mixer using the resulting selector.
             *
             * This method can be used to programmatically trigger the parsing of
             * filter groups after manipulations to a group's active selector(s) by
             * the `.setFilterGroupSelectors()` API method.
             *
             * @example
             *
             * .parseFilterGroups([animate] [, callback])
             *
             * @example <caption>Example: Triggering parsing after programmatically changing the values of a filter group</caption>
             *
             * mixer.setFilterGroupSelectors('color', ['.green', '.blue']);
             *
             * mixer.parseFilterGroups();
             *
             * @public
             * @since 3.0.0
             * @param       {boolean}   [animate=true]
             *      An optional boolean dictating whether the operation should animate, or occur syncronously with no animation. `true` by default.
             * @param       {function}  [callback=null]
             *      An optional callback function to be invoked after the operation has completed.
             * @return      {Promise.<mixitup.State>}
             *      A promise resolving with the current state object.
             */
parseFilterGroups:function(){var u=this,e=u.parseFilterArgs(arguments),t=u.getFilterGroupPaths(),i=u.buildSelectorFromPaths(t),r=null,l={};return""===i&&(i=u.config.controls.toggleDefault),e.command.selector=i,l.filter=e.command,"function"==typeof(r=u.config.callbacks.onParseFilterGroups)&&(l=r(l)),u.multimix(l,e.animate,e.callback)},
/**
             * Programmatically sets one or more active selectors for a specific filter
             * group and updates the group's UI.
             *
             * Because MixItUp has no way of knowing how to break down a provided
             * compound selector into its component groups, we can not use the
             * standard `.filter()` or `toggleOn()/toggleOff()` API methods when using
             * the MultiFilter extension. Instead, this method allows us to perform
             * multi-dimensional filtering via the API by setting the active selectors of
             * individual groups and then triggering the `.parseFilterGroups()` method.
             *
             * If setting multiple active selectors, do not pass a compound selector.
             * Instead, pass an array with each item containing a single selector
             * string as in example 2.
             *
             * @example
             *
             * .setFilterGroupSelectors(groupName, selectors)
             *
             * @example <caption>Example 1: Setting a single active selector for a "color" group</caption>
             *
             * mixer.setFilterGroupSelectors('color', '.green');
             *
             * mixer.parseFilterGroups();
             *
             * @example <caption>Example 2: Setting multiple active selectors for a "size" group</caption>
             *
             * mixer.setFilterGroupSelectors('size', ['.small', '.large']);
             *
             * mixer.parseFilterGroups();
             *
             * @public
             * @since   3.2.0
             * @param   {string}                    groupName   The name of the filter group as defined in the markup via the `data-filter-group` attribute.
             * @param   {(string|Array.<string>)}   selectors   A single selector string, or multiple selector strings as an array.
             * @return  {void}
             */
setFilterGroupSelectors:function(u,e){var t=this,i=null;if(e=Array.isArray(e)?e:[e],void 0===(i=t.filterGroupsHash[u]))throw new Error('[MixItUp MultiFilter] No filter group could be found with the name "'+u+'"');i.activeToggles=e.slice(),"and"===i.logic?
// Compress into single node
i.activeSelectors=[i.activeToggles]:i.activeSelectors=i.activeToggles,i.updateUi(i.activeToggles)},
/**
             * Returns an array of active selectors for a specific filter group.
             *
             * @example
             *
             * .getFilterGroupSelectors(groupName)
             *
             * @example <caption>Example: Retrieving the active selectors for a "size" group</caption>
             *
             * mixer.getFilterGroupSelectors('size'); // ['.small', '.large']
             *
             * @public
             * @since   3.2.0
             * @param   {string}    groupName   The name of the filter group as defined in the markup via the `data-filter-group` attribute.
             * @return  {void}
             */
getFilterGroupSelectors:function(u){var e,t=null;if(void 0===(t=this.filterGroupsHash[u]))throw new Error('[MixItUp MultiFilter] No filter group could be found with the name "'+u+'"');return t.activeToggles.slice()}}),l.Facade.registerAction("afterConstruct","multifilter",function(u){this.parseFilterGroups=u.parseFilterGroups.bind(u),this.setFilterGroupSelectors=u.setFilterGroupSelectors.bind(u),this.getFilterGroupSelectors=u.getFilterGroupSelectors.bind(u)})};if(e.TYPE="mixitup-extension",e.NAME="mixitup-multifilter",e.EXTENSION_VERSION="3.3.4",e.REQUIRE_CORE_VERSION="^3.1.2","object"==typeof exports&&"object"==typeof module)module.exports=e;else if("function"==typeof define&&define.amd)define(function(){return e});else{if(!u.mixitup||"function"!=typeof u.mixitup)throw new Error("[MixItUp MultiFilter] MixItUp core not found");e(u.mixitup)}}(window);