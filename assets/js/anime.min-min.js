!function(t,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof module&&module.exports?module.exports=n():t.anime=n()}(this,function(){var u={duration:1e3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},e="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),f,c={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||c.svg(t)},num:function(t){return!isNaN(parseInt(t))},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nul:function(t){return"null"==typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return c.hex(t)||c.rgb(t)||c.hsl(t)}},i=(z={},G={Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t,n){if(0===t||1===t)return t;var e=1-Math.min(n,998)/1e3,r=t/1-1;return-Math.pow(2,10*r)*Math.sin(2*(r-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var n,e=4;t<((n=Math.pow(2,--e))-1)/11;);return 1/Math.pow(4,3-e)-7.5625*Math.pow((3*n-2)/22-t,2)}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(t,n){G[t]=function(t){return Math.pow(t,n+2)}}),Object.keys(G).forEach(function(t){var e=G[t];z["easeIn"+t]=e,z["easeOut"+t]=function(t,n){return 1-e(1-t,n)},z["easeInOut"+t]=function(t,n){return t<.5?e(2*t,n)/2:1-e(-2*t+2,n)/2},z["easeOutIn"+t]=function(t,n){return t<.5?(1-e(1-2*t,n))/2:(e(2*t-1,n)+1)/2}}),z.linear=function(t){return t},z),r=function(t){return c.str(t)?t:t+""},a=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},n=function(t){if(c.col(t))return!1;try{return document.querySelectorAll(t)}catch(t){return!1}},s=function(t){return t.reduce(function(t,n){return t.concat(c.arr(n)?s(n):n)},[])},l=function(t){return c.arr(t)?t:(c.str(t)&&(t=n(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])},d=function(t,n){return t.some(function(t){return t===n})},o=function(t,e){var r={};return t.forEach(function(n){var t=JSON.stringify(e.map(function(t){return n[t]}));r[t]=r[t]||[],r[t].push(n)}),Object.keys(r).map(function(t){return r[t]})},p=function(t){return t.filter(function(t,n,e){return e.indexOf(t)===n})},m=function(t){var n={},e;for(e in t)n[e]=t[e];return n},h=function(t,n){for(var e in n)t[e]=c.und(t[e])?n[e]:t[e];return t},g=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,n,e,r){return n+n+e+e+r+r});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),e,n;return"rgb("+(t=parseInt(n[1],16))+","+parseInt(n[2],16)+","+(n=parseInt(n[3],16))+")"},v=function(t){t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);var n=parseInt(t[1])/360,e=parseInt(t[2])/100,r=parseInt(t[3])/100;if(t=function(t,n,e){return e<0&&(e+=1),1<e&&--e,e<1/6?t+6*(n-t)*e:e<.5?n:e<2/3?t+(n-t)*(2/3-e)*6:t},0==e)e=r=n=r;else var a=r<.5?r*(1+e):r+e-r*e,o=2*r-a,e=t(o,a,n+1/3),r=t(o,a,n),n=t(o,a,n-1/3);return"rgb("+255*e+","+255*r+","+255*n+")"},y=function(t){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(t)[2]},b=function(t,n,e){return y(n)?n:-1<t.indexOf("translate")?y(e)?n+y(e):n+"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?n+"deg":n},x=function(t,n){if(n in t.style)return getComputedStyle(t).getPropertyValue(a(n))||"0"},w=function(t,e){var n=-1<e.indexOf("scale")?1:0,r=t.style.transform;if(!r)return n;for(var a=/(\w+)\((.+?)\)/g,o=[],u=[],i=[];o=a.exec(r);)u.push(o[1]),i.push(o[2]);return(r=i.filter(function(t,n){return u[n]===e})).length?r[0]:n},M=function(t,n){return c.dom(t)&&d(e,n)?"transform":c.dom(t)&&(t.getAttribute(n)||c.svg(t)&&t[n])?"attribute":c.dom(t)&&"transform"!==n&&x(t,n)?"css":c.nul(t[n])||c.und(t[n])?void 0:"object"},O=function(t,n){switch(M(t,n)){case"transform":return w(t,n);case"css":return x(t,n);case"attribute":return t.getAttribute(n)}return t[n]||0},k=function(t,n,e){return c.col(n)?n=c.rgb(n)?n:c.hex(n)?g(n):c.hsl(n)?v(n):void 0:y(n)?n:(!(t=y(t.to)?y(t.to):y(t.from))&&e&&(t=y(e)),t?n+t:n)},E=function(t){var n=/-?\d*\.?\d+/g;return{original:t,numbers:r(t).match(n)?r(t).match(n).map(Number):[0],strings:r(t).split(n)}},I=function(r,t,a){return t.reduce(function(t,n,e){return n=n||a[e-1],t+r[e-1]+n})},A=function(t){return(t=t?s(c.arr(t)?t.map(l):l(t)):[]).map(function(t,n){return{target:t,id:n}})},j=function(t,n,e,r){return n="transform"===e?(e=t+"("+b(t,n.from,n.to)+")",t+"("+b(t,n.to)+")"):(t="css"===e?x(r,t):void 0,e=k(n,n.from,t),k(n,n.to,t)),{from:E(e),to:E(n)}},P=function(i,t){var s=[];return i.forEach(function(a,o){var u=a.target;return t.forEach(function(t){var n=M(u,t.name);if(n){var e;e=t.name;var r=t.value,r;e={from:1<(r=l(c.fnc(r)?r(u,o):r)).length?r[0]:O(u,e),to:1<r.length?r[1]:r[0]},(r=m(t)).animatables=a,r.type=n,r.from=j(t.name,e,r.type,u).from,r.to=j(t.name,e,r.type,u).to,r.round=c.col(e.from)||r.round?1:0,r.delay=(c.fnc(r.delay)?r.delay(u,o,i.length):r.delay)/B.speed,r.duration=(c.fnc(r.duration)?r.duration(u,o,i.length):r.duration)/B.speed,s.push(r)}})}),s},C=function(t,n){var e=P(t,n);return o(e,["name","from","to","delay","duration"]).map(function(t){var n=m(t[0]);return n.animatables=t.map(function(t){return t.animatables}),n.totalDuration=n.delay+n.duration,n})},S=function(r,a){r.tweens.forEach(function(t){var n=t.from,e=r.duration-(t.delay+t.duration);t.from=t.to,t.to=n,a&&(t.delay=e)}),r.reversed=!r.reversed},T=function(t){if(t.length)return Math.max.apply(Math,t.map(function(t){return t.totalDuration}))},$=function(t){var n=[],e=[];return t.tweens.forEach(function(t){"css"!==t.type&&"transform"!==t.type||(n.push("css"===t.type?a(t.name):"transform"),t.animatables.forEach(function(t){e.push(t.target)}))}),{properties:p(n).join(", "),elements:p(e)}},L=function(t){var n=$(t);n.elements.forEach(function(t){t.style.willChange=n.properties})},N=function(t){$(t).elements.forEach(function(t){t.style.removeProperty("will-change")})},V=function(n,e){var r=n.path,a=n.value*e,t,o=(t=function(t){return t=t||0,r.getPointAtLength(1<e?n.value+t:a+t)})(),u=t(-1),t=t(1);switch(n.name){case"translateX":return o.x;case"translateY":return o.y;case"rotate":return 180*Math.atan2(t.y-u.y,t.x-u.x)/Math.PI}},X=function(a,t){var o=Math.min(Math.max(t-a.delay,0),a.duration)/a.duration,n=a.to.numbers.map(function(t,n){var e=a.from.numbers[n],r=i[a.easing](o,a.elasticity),e=a.path?V(a,r):e+r*(t-e);return e=a.round?Math.round(e*a.round)/a.round:e});return I(n,a.to.strings,a.from.strings)},Y=function(t,n){var e;t.currentTime=n,t.progress=n/t.duration*100;for(var r=0;r<t.tweens.length;r++){var a=t.tweens[r];a.currentValue=X(a,n);for(var o=a.currentValue,u=0;u<a.animatables.length;u++){var i,s=(i=a.animatables[u]).id,i=i.target,c=a.name;switch(a.type){case"css":i.style[c]=o;break;case"attribute":i.setAttribute(c,o);break;case"object":i[c]=o;break;case"transform":e||(e={}),e[s]||(e[s]=[]),e[s].push(o)}}}if(e)for(r in f||(f=(x(document.body,"transform")?"":"-webkit-")+"transform"),e)t.animatables[r].target.style[f]=e[r].join(" ");t.settings.update&&t.settings.update(t)},F=function(t){var n={};n.animatables=A(t.targets),n.settings=h(t,u);var e=n.settings,r=[],a;for(a in t)if(!u.hasOwnProperty(a)&&"targets"!==a){var o=c.obj(t[a])?m(t[a]):{value:t[a]};o.name=a,r.push(h(o,e))}return n.properties=r,n.tweens=C(n.animatables,n.properties),n.duration=T(n.tweens)||t.duration,n.currentTime=0,n.progress=0,n.ended=!1,n},Z=[],q=0,Q=(D=function(){q=requestAnimationFrame(t)},t=function(t){if(Z.length){for(var n=0;n<Z.length;n++)Z[n].tick(t);D()}else cancelAnimationFrame(q),q=0},D),B=function(t){var e=F(t),r={};return e.tick=function(t){e.ended=!1,r.start||(r.start=t),r.current=Math.min(Math.max(r.last+t-r.start,0),e.duration),Y(e,r.current);var n=e.settings;n.begin&&r.current>=n.delay&&(n.begin(e),n.begin=void 0),r.current>=e.duration&&(n.loop?(r.start=t,"alternate"===n.direction&&S(e,!0),c.num(n.loop)&&n.loop--):(e.ended=!0,e.pause(),n.complete&&n.complete(e)),r.last=0)},e.seek=function(t){Y(e,t/100*e.duration)},e.pause=function(){N(e);var t=Z.indexOf(e);-1<t&&Z.splice(t,1)},e.play=function(t){e.pause(),t&&(e=h(F(h(t,e.settings)),e)),r.start=0,r.last=e.ended?0:e.currentTime,"reverse"===(t=e.settings).direction&&S(e),"alternate"!==t.direction||t.loop||(t.loop=1),L(e),Z.push(e),q||Q()},e.restart=function(){e.reversed&&S(e),e.pause(),e.seek(0),e.play()},e.settings.autoplay&&e.play(),e},D,t,z,G;return B.version="1.1.1",B.speed=1,B.list=Z,B.remove=function(t){t=s(c.arr(t)?t.map(l):l(t));for(var n=Z.length-1;0<=n;n--)for(var e=Z[n],r=e.tweens,a=r.length-1;0<=a;a--)for(var o=r[a].animatables,u=o.length-1;0<=u;u--)d(t,o[u].target)&&(o.splice(u,1),o.length||r.splice(a,1),r.length||e.pause())},B.easings=i,B.getValue=O,B.path=function(t){return{path:t=c.str(t)?n(t)[0]:t,value:t.getTotalLength()}},B.random=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},B});