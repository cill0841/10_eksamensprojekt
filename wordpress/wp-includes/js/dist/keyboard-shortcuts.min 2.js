/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.keyboardShortcuts=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=456)}({14:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(38);var o=n(29),u=n(39);function i(t,e){return Object(r.a)(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}}(t,e)||Object(o.a)(t,e)||Object(u.a)()}},18:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(26);var o=n(35),u=n(29);function i(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(u.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},2:function(t,e){!function(){t.exports=this.lodash}()},21:function(t,e){!function(){t.exports=this.wp.keycodes}()},26:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},29:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(26);function o(t,e){if(t){if("string"==typeof t)return Object(r.a)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(t,e):void 0}}},35:function(t,e,n){"use strict";function r(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n.d(e,"a",(function(){return r}))},38:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return r}))},39:function(t,e,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(e,"a",(function(){return r}))},4:function(t,e){!function(){t.exports=this.wp.data}()},42:function(t,e,n){"use strict";var r,o;function u(t){return[t]}function i(){var t={clear:function(){t.head=null}};return t}function a(t,e,n){var r;if(t.length!==e.length)return!1;for(r=n;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}r={},o="undefined"!=typeof WeakMap,e.a=function(t,e){var n,c;function f(){n=o?new WeakMap:i()}function s(){var n,r,o,u,i,f=arguments.length;for(u=new Array(f),o=0;o<f;o++)u[o]=arguments[o];for(i=e.apply(null,u),(n=c(i)).isUniqueByDependants||(n.lastDependants&&!a(i,n.lastDependants,0)&&n.clear(),n.lastDependants=i),r=n.head;r;){if(a(r.args,u,1))return r!==n.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=n.head,r.prev=null,n.head.prev=r,n.head=r),r.val;r=r.next}return r={val:t.apply(null,u)},u[0]=null,r.args=u,n.head&&(n.head.prev=r,r.next=n.head),n.head=r,r.val}return e||(e=u),c=o?function(t){var e,o,u,a,c,f=n,s=!0;for(e=0;e<t.length;e++){if(o=t[e],!(c=o)||"object"!=typeof c){s=!1;break}f.has(o)?f=f.get(o):(u=new WeakMap,f.set(o,u),f=u)}return f.has(r)||((a=i()).isUniqueByDependants=s,f.set(r,a)),f.get(r)}:function(){return n},s.getDependants=e,s.clear=f,f(),s}},456:function(t,e,n){"use strict";n.r(e),n.d(e,"useShortcut",(function(){return k}));var r={};n.r(r),n.d(r,"registerShortcut",(function(){return l})),n.d(r,"unregisterShortcut",(function(){return p}));var o={};n.r(o),n.d(o,"getShortcutKeyCombination",(function(){return m})),n.d(o,"getShortcutRepresentation",(function(){return j})),n.d(o,"getShortcutDescription",(function(){return S})),n.d(o,"getShortcutAliases",(function(){return w})),n.d(o,"getAllShortcutRawKeyCombinations",(function(){return x})),n.d(o,"getCategoryShortcuts",(function(){return T}));var u=n(4),i=n(5),a=n(2);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(i.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REGISTER_SHORTCUT":return f({},t,Object(i.a)({},e.name,{category:e.category,keyCombination:e.keyCombination,aliases:e.aliases,description:e.description}));case"UNREGISTER_SHORTCUT":return Object(a.omit)(t,e.name)}return t};function l(t){var e=t.name,n=t.category,r=t.description;return{type:"REGISTER_SHORTCUT",name:e,category:n,keyCombination:t.keyCombination,aliases:t.aliases,description:r}}function p(t){return{type:"UNREGISTER_SHORTCUT",name:t}}var d=n(14),b=n(18),y=n(42),h=n(21),v=[],O={display:h.displayShortcut,raw:h.rawShortcut,ariaLabel:h.shortcutAriaLabel};function g(t,e){return t?t.modifier?O[e][t.modifier](t.character):t.character:null}function m(t,e){return t[e]?t[e].keyCombination:null}function j(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"display",r=m(t,e);return g(r,n)}function S(t,e){return t[e]?t[e].description:null}function w(t,e){return t[e]&&t[e].aliases?t[e].aliases:v}var x=Object(y.a)((function(t,e){return Object(a.compact)([g(m(t,e),"raw")].concat(Object(b.a)(w(t,e).map((function(t){return g(t,"raw")})))))}),(function(t,e){return[t[e]]})),T=Object(y.a)((function(t,e){return Object.entries(t).filter((function(t){return Object(d.a)(t,2)[1].category===e})).map((function(t){return Object(d.a)(t,1)[0]}))}),(function(t){return[t]})),R=(Object(u.registerStore)("core/keyboard-shortcuts",{reducer:s,actions:r,selectors:o}),n(9));var k=function(t,e,n){var r=Object(u.useSelect)((function(e){return e("core/keyboard-shortcuts").getAllShortcutRawKeyCombinations(t)}),[t]);Object(R.useKeyboardShortcut)(r,e,n)}},5:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},9:function(t,e){!function(){t.exports=this.wp.compose}()}});
