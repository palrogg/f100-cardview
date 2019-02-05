/*
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
!function(w,h){function v(n){var e,t=w("<div></div>").css({width:"100%"});return n.append(t),e=n.width()-t.width(),t.remove(),e}function g(n,e){var t=n.getBoundingClientRect(),r=t.top,o=t.bottom,i=t.left,a=t.right,s=w.extend({tolerance:0,viewport:h},e),c=!1,u=s.viewport.jquery?s.viewport:w(s.viewport);u.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),u=w(h));var l=u.height(),d=u.width(),f=u[0].toString();if(u[0]!==h&&"[object Window]"!==f&&"[object DOMWindow]"!==f){var p=u[0].getBoundingClientRect();r-=p.top,o-=p.top,i-=p.left,a-=p.left,g.scrollBarWidth=g.scrollBarWidth||v(u),d-=g.scrollBarWidth}return s.tolerance=~~Math.round(parseFloat(s.tolerance)),s.tolerance<0&&(s.tolerance=l+s.tolerance),a<=0||d<=i?c:c=s.tolerance?r<=s.tolerance&&o>=s.tolerance:0<o&&r<=l}String.prototype.hasOwnProperty("trim")||(String.prototype.trim=function(){return this.replace(/^\s*(.*?)\s*$/,"$1")});var e=function(n){if(1===arguments.length&&"function"==typeof n&&(n=[n]),!(n instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");for(var e=0;e<n.length;e++)if("function"==typeof n[e])for(var t=0;t<this.length;t++)n[e].call(w(this[t]));else console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on");return this};w.fn.do=function(n){return console.warn("isInViewport: .do is deprecated as it causes issues in IE and some browsers since it's a reserved word. Use $.fn.run instead i.e., $(el).run(fn)."),e(n)},w.fn.run=e;var r=function(n){if(n){var e=n.split(",");return 1===e.length&&isNaN(e[0])&&(e[1]=e[0],e[0]=void 0),{tolerance:e[0]?e[0].trim():void 0,viewport:e[1]?w(e[1].trim()):void 0}}return{}};w.extend(w.expr[":"],{"in-viewport":w.expr.createPseudo?w.expr.createPseudo(function(e){return function(n){return g(n,r(e))}}):function(n,e,t){return g(n,r(t[3]))}}),w.fn.isInViewport=function(t){return this.filter(function(n,e){return g(e,t)})}}(jQuery,window);