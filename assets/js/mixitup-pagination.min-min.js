/**!
 * MixItUp Pagination v3.3.0
 * Client-side pagination for filtered and sorted content
 * Build 875b7d31-63d1-4040-ac6f-b1c814027891
 *
 * Requires mixitup.js >= v^3.1.8
 *
 * @copyright Copyright 2014-2017 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup-pagination/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup-pagination/licenses/
 *
 *            Non-commercial use permitted under same terms as  license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
!function(a){"use strict";var t=function(u){var d=u.h;if(!u.CORE_VERSION||!d.compareVersions(t.REQUIRE_CORE_VERSION,u.CORE_VERSION))throw new Error("[MixItUp Pagination] MixItUp Pagination "+t.EXTENSION_VERSION+" requires at least MixItUp "+t.REQUIRE_CORE_VERSION);u.ConfigCallbacks.registerAction("afterConstruct","pagination",function(){this.onPaginateStart=null,this.onPaginateEnd=null}),u.ConfigClassNames.registerAction("afterConstruct","pagination",function(){this.elementPager="control",this.elementPageList="page-list",this.elementPageStats="page-stats",this.modifierFirst="first",this.modifierLast="last",this.modifierPrev="prev",this.modifierNext="next",this.modifierTruncationMarker="truncation-marker"}),u.ConfigLoad.registerAction("afterConstruct","pagination",function(){this.page=1}),u.ConfigPagination=function(){this.generatePageList=!0,this.generatePageStats=!0,this.maintainActivePage=!0,this.loop=!1,this.hidePageListIfSinglePage=!1,this.hidePageStatsIfSinglePage=!1,this.limit=-1,this.maxPagers=5,d.seal(this)},u.ConfigRender.registerAction("afterConstruct","pagination",function(){this.pager=null,this.pageStats=null}),u.ConfigSelectors.registerAction("afterConstruct","pagination",function(){this.pageList=".mixitup-page-list",this.pageStats=".mixitup-page-stats"}),u.ConfigTemplates.registerAction("afterConstruct","pagination",function(){this.pager='<button type="button" class="${classNames}" data-page="${pageNumber}">${pageNumber}</button>',this.pagerPrev='<button type="button" class="${classNames}" data-page="prev">&laquo;</button>',this.pagerNext='<button type="button" class="${classNames}" data-page="next">&raquo;</button>',this.pagerTruncationMarker='<span class="${classNames}">&hellip;</span>',this.pageStats="${startPageAt} to ${endPageAt} of ${totalTargets}",this.pageStatsSingle="${startPageAt} of ${totalTargets}",this.pageStatsFail="None found"}),u.Config.registerAction("beforeConstruct","pagination",function(){this.pagination=new u.ConfigPagination}),u.ModelPager=function(){this.pageNumber=-1,this.classNames="",this.classList=[],this.isDisabled=!1,this.isPrev=!1,this.isNext=!1,this.isPageLink=!1,this.isTruncationMarker=!1,d.seal(this)},u.ModelPageStats=function(){this.startPageAt=-1,this.endPageAt=-1,this.totalTargets=-1,d.seal(this)},u.UiClassNames.registerAction("afterConstruct","pagination",function(){this.first="",this.last="",this.prev="",this.next="",this.first="",this.last="",this.truncated="",this.truncationMarker=""}),u.controlDefinitions.push(new u.ControlDefinition("pager","[data-page]",!0,"pageListEls")),u.Control.registerFilter("commandsHandleClick","pagination",function(a,t){var i=this,e={},n="",s=-1,o=null,g=null,r=-1;if(!i.selector||"[data-page]"!==i.selector)return a;for(g=d.closestParent(t.target,i.selector,!0,i.bound[0].dom.document),r=0;o=i.bound[r];r++)e=a[r],!o.config.pagination||o.config.pagination.limit<0||o.config.pagination.limit===1/0?a[r]=null:!g||d.hasClass(g,o.classNamesPager.active)||d.hasClass(g,o.classNamesPager.disabled)?a[r]=null:(n=g.getAttribute("data-page"),e.paginate="prev"===n?"prev":"next"===n?"next":parseInt(n),o.lastClicked&&(o.lastClicked=g));return a}),u.CommandMultimix.registerAction("afterConstruct","pagination",function(){this.paginate=null}),u.CommandPaginate=function(){this.page=-1,this.limit=-1,this.action="",this.anchor=null,d.seal(this)},u.Events.registerAction("afterConstruct","pagination",function(){this.paginateStart=null,this.paginateEnd=null}),u.events=new u.Events,u.Operation.registerAction("afterConstruct","pagination",function(){this.startPagination=null,this.newPagination=null,this.startTotalPages=-1,this.newTotalPages=-1}),u.State.registerAction("afterConstruct","pagination",function(){this.activePagination=null,this.totalPages=-1}),u.MixerDom.registerAction("afterConstruct","pagination",function(){this.pageListEls=[],this.pageStatsEls=[]}),u.Mixer.registerAction("afterConstruct","pagination",function(){this.classNamesPager=new u.UiClassNames,this.classNamesPageList=new u.UiClassNames,this.classNamesPageStats=new u.UiClassNames}),u.Mixer.registerAction("afterAttach","pagination",function(){var a=this,t=null,i=-1;if(!(a.config.pagination.limit<0)){if(a.classNamesPager.base=d.getClassname(a.config.classNames,"pager"),a.classNamesPager.active=d.getClassname(a.config.classNames,"pager",a.config.classNames.modifierActive),a.classNamesPager.disabled=d.getClassname(a.config.classNames,"pager",a.config.classNames.modifierDisabled),a.classNamesPager.first=d.getClassname(a.config.classNames,"pager",a.config.classNames.modifierFirst),a.classNamesPager.last=d.getClassname(a.config.classNames,"pager",a.config.classNames.modifierLast),a.classNamesPager.prev=d.getClassname(a.config.classNames,"pager",a.config.classNames.modifierPrev),a.classNamesPager.next=d.getClassname(a.config.classNames,"pager",a.config.classNames.modifierNext),a.classNamesPager.truncationMarker=d.getClassname(a.config.classNames,"pager",a.config.classNames.modifierTruncationMarker),a.classNamesPageList.base=d.getClassname(a.config.classNames,"page-list"),a.classNamesPageList.disabled=d.getClassname(a.config.classNames,"page-list",a.config.classNames.modifierDisabled),a.classNamesPageStats.base=d.getClassname(a.config.classNames,"page-stats"),a.classNamesPageStats.disabled=d.getClassname(a.config.classNames,"page-stats",a.config.classNames.modifierDisabled),a.config.pagination.generatePageList&&0<a.dom.pageListEls.length)for(i=0;t=a.dom.pageListEls[i];i++)a.renderPageListEl(t,a.lastOperation);if(a.config.pagination.generatePageStats&&0<a.dom.pageStatsEls.length)for(i=0;t=a.dom.pageStatsEls[i];i++)a.renderPageStatsEl(t,a.lastOperation)}}),u.Mixer.registerAction("afterSanitizeConfig","pagination",function(){var i=this,e=i.config.callbacks.onMixStart,t=i.config.callbacks.onMixEnd,n=i.config.callbacks.onPaginateStart,s=i.config.callbacks.onPaginateEnd,o=!1;i.config.pagination.limit<0||(i.classNamesPager=new u.UiClassNames,i.classNamesPageList=new u.UiClassNames,i.classNamesPageStats=new u.UiClassNames,i.config.callbacks.onMixStart=function(a,t){a.activePagination.limit===t.activePagination.limit&&a.activePagination.page===t.activePagination.page||(o=!0),"function"==typeof e&&e.apply(i.dom.container,arguments),o&&(u.events.fire("paginateStart",i.dom.container,{state:a,futureState:t,instance:i},i.dom.document),"function"==typeof n&&n.apply(i.dom.container,arguments))},i.config.callbacks.onMixEnd=function(a){"function"==typeof t&&t.apply(i.dom.container,arguments),o&&(o=!1,u.events.fire("paginateEnd",i.dom.container,{state:a,instance:i},i.dom.document),"function"==typeof s&&s.apply(i.dom.container,arguments))})}),u.Mixer.registerFilter("operationGetInitialState","pagination",function(a,t){var i;return this.config.pagination.limit<0||(a.newPagination=t.activePagination),a}),u.Mixer.registerFilter("stateGetInitialState","pagination",function(a){var t=this;return t.config.pagination.limit<0||(a.activePagination=new u.CommandPaginate,a.activePagination.page=t.config.load.page,a.activePagination.limit=t.config.pagination.limit),a}),u.Mixer.registerAction("afterGetFinalMixData","pagination",function(){var a=this;a.config.pagination.limit<0||"number"==typeof a.config.pagination.maxPagers&&(a.config.pagination.maxPagers=Math.max(5,a.config.pagination.maxPagers))}),u.Mixer.registerAction("afterCacheDom","pagination",function(){var a=this,t=null;if(!(a.config.pagination.limit<0)&&a.config.pagination.generatePageList){switch(a.config.controls.scope){case"local":t=a.dom.container;break;case"global":t=a.dom.document;break;default:throw new Error(u.messages.ERROR_CONFIG_INVALID_CONTROLS_SCOPE)}a.dom.pageListEls=t.querySelectorAll(a.config.selectors.pageList),a.dom.pageStatsEls=t.querySelectorAll(a.config.selectors.pageStats)}}),u.Mixer.registerFilter("stateBuildState","pagination",function(a,t){var i;return this.config.pagination.limit<0||(a.activePagination=t.newPagination,a.totalPages=t.newTotalPages),a}),u.Mixer.registerFilter("instructionParseMultimixArgs","pagination",function(a){var t=this;return t.config.pagination.limit<0||!a.command.paginate||a.command.paginate instanceof u.CommandPaginate||(a.command.paginate=t.parsePaginateArgs([a.command.paginate]).command),a}),u.Mixer.registerAction("afterFilterOperation","pagination",function(a){var t=this,i=-1,e=-1,n=[],s=[],o=null,g=-1,r=-1;if(!(t.config.pagination.limit<0)){if(a.newTotalPages=a.newPagination.limit?Math.max(Math.ceil(a.matching.length/a.newPagination.limit),1):1,t.config.pagination.maintainActivePage&&(a.newPagination.page=a.newPagination.page>a.newTotalPages?a.newTotalPages:a.newPagination.page),t.config.pagination.limit=a.newPagination.limit,a.newPagination.anchor){for(r=0;(o=a.matching[r])&&o.dom.el!==a.newPagination.anchor;r++);e=(i=r)+a.newPagination.limit-1}else i=a.newPagination.limit*(a.newPagination.page-1),e=a.newPagination.limit*a.newPagination.page-1,isNaN(i)&&(i=0);if(!(a.newPagination.limit<0)){for(r=0;o=a.show[r];r++)i<=r&&r<=e?n.push(o):s.push(o);for(a.show=n,r=0;o=a.toHide[r];r++)o.isShown||(a.toHide.splice(r,1),o.isShown=!1,r--);for(r=0;o=s[r];r++)a.hide.push(o),-1<(g=a.toShow.indexOf(o))&&a.toShow.splice(g,1),o.isShown&&a.toHide.push(o)}}}),u.Mixer.registerFilter("operationUnmappedGetOperation","pagination",function(a,t){var i=this;return i.config.pagination.limit<0||(a.startState=i.state,a.startPagination=i.state.activePagination,a.startTotalPages=i.state.totalPages,a.newPagination=new u.CommandPaginate,a.newPagination.limit=a.startPagination.limit,a.newPagination.page=a.startPagination.page,t.paginate?i.parsePaginateCommand(t.paginate,a):(t.filter||t.sort)&&(d.extend(a.newPagination,a.startPagination),i.config.pagination.maintainActivePage?a.newPagination.page=i.state.activePagination.page:a.newPagination.page=1)),a}),u.Mixer.registerFilter("operationMappedGetOperation","pagination",function(a,t,i){var e=this,n=null,s=-1;if(e.config.pagination.limit<0)return a;if(i)return a;if(e.config.pagination.generatePageList&&0<e.dom.pageListEls.length)for(s=0;n=e.dom.pageListEls[s];s++)e.renderPageListEl(n,a);if(e.config.pagination.generatePageStats&&0<e.dom.pageStatsEls.length)for(s=0;n=e.dom.pageStatsEls[s];s++)e.renderPageStatsEl(n,a);return a}),u.Mixer.extend({parsePaginateCommand:function(a,t){var i=this;if(-1<a.page){if(0===a.page)throw new Error(u.messages.ERROR_PAGINATE_INDEX_RANGE);t.newPagination.page=Math.max(1,Math.min(1/0,a.page))}else"next"===a.action?t.newPagination.page=i.getNextPage():"prev"===a.action?t.newPagination.page=i.getPrevPage():a.anchor&&(t.newPagination.anchor=a.anchor);-1<a.limit&&(t.newPagination.limit=a.limit),t.newPagination.limit!==t.startPagination.limit&&(t.newTotalPages=t.newPagination.limit?Math.max(Math.ceil(t.startState.matching.length/t.newPagination.limit),1):1),(t.newPagination.limit<=0||t.newPagination.limit===1/0)&&(t.newPagination.page=1)},getNextPage:function(){var a=this,t=-1;return(t=a.state.activePagination.page+1)>a.state.totalPages&&(t=a.config.pagination.loop?1:a.state.activePagination.page),t},getPrevPage:function(){var a=this,t=-1;return(t=a.state.activePagination.page-1)<1&&(t=a.config.pagination.loop?a.state.totalPages:a.state.activePagination.page),t},renderPageListEl:function(a,t){var i=this,e=-1,n="",s=[],o=null,g=null,r=[],l=!1,c=!1,p=null,m=null,f="",P=-1;if(t.newPagination.limit<0||t.newPagination.limit===1/0||t.newTotalPages<2&&i.config.pagination.hidePageListIfSinglePage)return a.innerHTML="",void d.addClass(a,i.classNamesPageList.disabled);for(e=t.newPagination.page-1,g="function"==typeof(g=i.config.render.pager)?g:null,i.config.pagination.maxPagers<1/0&&t.newTotalPages>i.config.pagination.maxPagers&&(r=i.getAllowedIndices(t)),(o=new u.ModelPager).isPrev=!0,o.classList.push(i.classNamesPager.base,i.classNamesPager.prev),1!==t.newPagination.page||i.config.pagination.loop||(o.classList.push(i.classNamesPager.disabled),o.isDisabled=!0),o.classNames=o.classList.join(" "),n=g?g(o):d.template(i.config.templates.pagerPrev)(o),s.push(n),P=0;P<t.newTotalPages;P++)(n=i.renderPager(P,t,r))||P<e&&l||e<P&&c?n&&s.push(n):((o=new u.ModelPager).isTruncationMarker=!0,o.classList.push(i.classNamesPager.base,i.classNamesPager.truncationMarker),o.classNames=o.classList.join(" "),n=g?g(o):d.template(i.config.templates.pagerTruncationMarker)(o),s.push(n),P<e&&(l=!0),e<P&&(c=!0));for((o=new u.ModelPager).isNext=!0,o.classList.push(i.classNamesPager.base,i.classNamesPager.next),t.newPagination.page!==t.newTotalPages||i.config.pagination.loop||o.classList.push(i.classNamesPager.disabled),o.classNames=o.classList.join(" "),n=g?g(o):d.template(i.config.templates.pagerNext)(o),s.push(n),f=s.join(" "),a.innerHTML=f,p=a.querySelectorAll("."+i.classNamesPager.disabled),P=0;m=p[P];P++)"boolean"==typeof m.disabled&&(m.disabled=!0);l||c?d.addClass(a,i.classNamesPageList.truncated):d.removeClass(a,i.classNamesPageList.truncated),1<t.newTotalPages?d.removeClass(a,i.classNamesPageList.disabled):d.addClass(a,i.classNamesPageList.disabled)},getAllowedIndices:function(a){var t=this,i=a.newPagination.page-1,e=a.newTotalPages-1,n=[],s=-1,o=-1,g=-1,r=-1,l=-1,c=-1,p=-1;for(n.push(0),s=t.config.pagination.maxPagers-2,c=0,(r=i-(o=Math.ceil((s-1)/2)))<1&&(c=1-r),e-1<(l=i+(g=Math.floor((s-1)/2)))&&(c=e-1-l),p=r+c;s;)n.push(p),p++,s--;return n.push(e),n},renderPager:function(a,t,i){var e=this,n=null,s=t.newPagination.page-1,o=new u.ModelPager,g="";return e.config.pagination.maxPagers<1/0&&i.length&&i.indexOf(a)<0?"":(n="function"==typeof(n=e.config.render.pager)?n:null,o.isPageLink=!0,o.classList.push(e.classNamesPager.base),0===a&&o.classList.push(e.classNamesPager.first),a===t.newTotalPages-1&&o.classList.push(e.classNamesPager.last),a===s&&o.classList.push(e.classNamesPager.active),o.classNames=o.classList.join(" "),o.pageNumber=a+1,g=n?n(o):d.template(e.config.templates.pager)(o))},renderPageStatsEl:function(a,t){var i=this,e=new u.ModelPageStats,n=null,s="",o="";return t.newPagination.limit<0||t.newPagination.limit===1/0||t.newTotalPages<2&&i.config.pagination.hidePageStatsIfSinglePage?(a.innerHTML="",void d.addClass(a,i.classNamesPageStats.disabled)):(n="function"==typeof(n=i.config.render.pageStats)?n:null,e.totalTargets=t.matching.length,o=e.totalTargets?1===t.newPagination.limit?i.config.templates.pageStatsSingle:i.config.templates.pageStats:i.config.templates.pageStatsFail,e.totalTargets&&0<t.newPagination.limit?(e.startPageAt=(t.newPagination.page-1)*t.newPagination.limit+1,e.endPageAt=Math.min(e.startPageAt+t.newPagination.limit-1,e.totalTargets)):e.startPageAt=e.endPageAt=0,s=n?n(e):d.template(o)(e),a.innerHTML=s,void(e.totalTargets?d.removeClass(a,i.classNamesPageStats.disabled):d.addClass(a,i.classNamesPageStats.disabled)))},parsePaginateArgs:function(a){var t=this,i=new u.UserInstruction,e=null,n=-1;for(i.animate=t.config.animation.enable,i.command=new u.CommandPaginate,n=0;n<a.length;n++)null!==(e=a[n])&&("object"==typeof e&&d.isElement(e,t.dom.document)?i.command.anchor=e:e instanceof u.CommandPaginate||"object"==typeof e?d.extend(i.command,e):"number"==typeof e?i.command.page=e:"string"!=typeof e||isNaN(parseInt(e))?"string"==typeof e?i.command.action=e:"boolean"==typeof e?i.animate=e:"function"==typeof e&&(i.callback=e):i.command.page=parseInt(e));return d.freeze(i),i},paginate:function(){var a=this,t=a.parsePaginateArgs(arguments);return a.multimix({paginate:t.command},t.animate,t.callback)},nextPage:function(){var a=this,t=a.parsePaginateArgs(arguments);return a.multimix({paginate:{action:"next"}},t.animate,t.callback)},prevPage:function(){var a=this,t=a.parsePaginateArgs(arguments);return a.multimix({paginate:{action:"prev"}},t.animate,t.callback)}}),u.Facade.registerAction("afterConstruct","pagination",function(a){this.paginate=a.paginate.bind(a),this.nextPage=a.nextPage.bind(a),this.prevPage=a.prevPage.bind(a)})};if(t.TYPE="mixitup-extension",t.NAME="mixitup-pagination",t.EXTENSION_VERSION="3.3.0",t.REQUIRE_CORE_VERSION="^3.1.8","object"==typeof exports&&"object"==typeof module)module.exports=t;else if("function"==typeof define&&define.amd)define(function(){return t});else{if(!a.mixitup||"function"!=typeof a.mixitup)throw new Error("[MixItUp Pagination] MixItUp core not found");t(a.mixitup)}}(window);