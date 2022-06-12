(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,r){"use strict";r.d(t,"c",(function(){return L})),r.d(t,"b",(function(){return re})),r.d(t,"a",(function(){return ie}));
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var s="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=function(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t!==r;){var s=t.nextSibling;e.removeChild(t),t=s}},n="{{lit-".concat(String(Math.random()).slice(2),"}}"),a="\x3c!--".concat(n,"--\x3e"),o=new RegExp("".concat(n,"|").concat(a));class l{constructor(e,t){this.parts=[],this.element=t;for(var r=[],s=[],i=document.createTreeWalker(t.content,133,null,!1),a=0,l=-1,d=0,{strings:c,values:{length:v}}=e;d<v;){var _=i.nextNode();if(null!==_){if(l++,1===_.nodeType){if(_.hasAttributes()){for(var m=_.attributes,{length:f}=m,y=0,g=0;g<f;g++)h(m[g].name,"$lit$")&&y++;for(;y-- >0;){var S=c[d],w=u.exec(S)[2],b=w.toLowerCase()+"$lit$",x=_.getAttribute(b);_.removeAttribute(b);var P=x.split(o);this.parts.push({type:"attribute",index:l,name:w,strings:P}),d+=P.length-1}}"TEMPLATE"===_.tagName&&(s.push(_),i.currentNode=_.content)}else if(3===_.nodeType){var N=_.data;if(N.indexOf(n)>=0){for(var C=_.parentNode,T=N.split(o),A=T.length-1,E=0;E<A;E++){var V=void 0,U=T[E];if(""===U)V=p();else{var k=u.exec(U);null!==k&&h(k[2],"$lit$")&&(U=U.slice(0,k.index)+k[1]+k[2].slice(0,-"$lit$".length)+k[3]),V=document.createTextNode(U)}C.insertBefore(V,_),this.parts.push({type:"node",index:++l})}""===T[A]?(C.insertBefore(p(),_),r.push(_)):_.data=T[A],d+=A}}else if(8===_.nodeType)if(_.data===n){var O=_.parentNode;null!==_.previousSibling&&l!==a||(l++,O.insertBefore(p(),_)),a=l,this.parts.push({type:"node",index:l}),null===_.nextSibling?_.data="":(r.push(_),l--),d++}else for(var M=-1;-1!==(M=_.data.indexOf(n,M+1));)this.parts.push({type:"node",index:-1}),d++}else i.currentNode=s.pop()}for(var R of r)R.parentNode.removeChild(R)}}var h=(e,t)=>{var r=e.length-t.length;return r>=0&&e.slice(r)===t},d=e=>-1!==e.index,p=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(e,t){for(var{element:{content:r},parts:s}=e,i=document.createTreeWalker(r,133,null,!1),n=_(s),a=s[n],o=-1,l=0,h=[],d=null;i.nextNode();){o++;var p=i.currentNode;for(p.previousSibling===d&&(d=null),t.has(p)&&(h.push(p),null===d&&(d=p)),null!==d&&l++;void 0!==a&&a.index===o;)a.index=null!==d?-1:a.index-l,a=s[n=_(s,n)]}h.forEach(e=>e.parentNode.removeChild(e))}var v=e=>{for(var t=11===e.nodeType?0:1,r=document.createTreeWalker(e,133,null,!1);r.nextNode();)t++;return t},_=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,r=t+1;r<e.length;r++){var s=e[r];if(d(s))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var m=new WeakMap,f=e=>"function"==typeof e&&m.has(e),y={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class S{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){var t=0;for(var r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(var s of this.__parts)void 0!==s&&s.commit()}_clone(){for(var e,t=s?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],i=this.template.parts,n=document.createTreeWalker(t,133,null,!1),a=0,o=0,l=n.nextNode();a<i.length;)if(e=i[a],d(e)){for(;o<e.index;)o++,"TEMPLATE"===l.nodeName&&(r.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=r.pop(),l=n.nextNode());if("node"===e.type){var h=this.processor.handleTextExpression(this.options);h.insertAfterNode(l.previousSibling),this.__parts.push(h)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,e.name,e.strings,this.options));a++}else this.__parts.push(void 0),a++;return s&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),b=" ".concat(n," ");class x{constructor(e,t,r,s){this.strings=e,this.values=t,this.type=r,this.processor=s}getHTML(){for(var e=this.strings.length-1,t="",r=!1,s=0;s<e;s++){var i=this.strings[s],o=i.lastIndexOf("\x3c!--");r=(o>-1||r)&&-1===i.indexOf("--\x3e",o+1);var l=u.exec(i);t+=null===l?i+(r?b:a):i.substr(0,l.index)+l[1]+l[2]+"$lit$"+l[3]+n}return t+=this.strings[e]}getTemplateElement(){var e=document.createElement("template"),t=this.getHTML();return void 0!==w&&(t=w.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var P=e=>null===e||!("object"==typeof e||"function"==typeof e),N=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,r){this.dirty=!0,this.element=e,this.name=t,this.strings=r,this.parts=[];for(var s=0;s<r.length-1;s++)this.parts[s]=this._createPart()}_createPart(){return new T(this)}_getValue(){var e=this.strings,t=e.length-1,r=this.parts;if(1===t&&""===e[0]&&""===e[1]){var s=r[0].value;if("symbol"==typeof s)return String(s);if("string"==typeof s||!N(s))return s}for(var i="",n=0;n<t;n++){i+=e[n];var a=r[n];if(void 0!==a){var o=a.value;if(P(o)||!N(o))i+="string"==typeof o?o:String(o);else for(var l of o)i+="string"==typeof l?l:String(l)}}return i+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===y||P(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){var e=this.value;this.value=y,e(this)}this.value!==y&&this.committer.commit()}}class A{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null!==this.startNode.parentNode){for(;f(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=y,e(this)}var t=this.__pendingValue;t!==y&&(P(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):N(t)?this.__commitIterable(t):t===g?(this.value=g,this.clear()):this.__commitText(t))}}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){var t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){var t=this.options.templateFactory(e);if(this.value instanceof S&&this.value.template===t)this.value.update(e.values);else{var r=new S(t,e.processor,this.options),s=r._clone();r.update(e.values),this.__commitNode(s),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());var t,r=this.value,s=0;for(var i of e)void 0===(t=r[s])&&(t=new A(this.options),r.push(t),0===s?t.appendIntoPart(this):t.insertAfterPart(r[s-1])),t.setValue(i),t.commit(),s++;s<r.length&&(r.length=s,this.clear(t&&t.endNode))}clear(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class E{constructor(e,t,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=r}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue!==y){var t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=y}}}class V extends C{constructor(e,t,r){super(e,t,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new U(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class U extends T{}var k=!1;(()=>{try{var e={get capture(){return k=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class O{constructor(e,t,r){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=r,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){var e=this.__pendingValue;this.__pendingValue=y,e(this)}if(this.__pendingValue!==y){var t=this.__pendingValue,r=this.value,s=null==t||null!=r&&(t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive),i=null!=t&&(null==r||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=M(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=y}}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}var M=e=>e&&(k?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function R(e){var t=q.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},q.set(e.type,t));var r=t.stringsArray.get(e.strings);if(void 0!==r)return r;var s=e.strings.join(n);return void 0===(r=t.keyString.get(s))&&(r=new l(e,e.getTemplateElement()),t.keyString.set(s,r)),t.stringsArray.set(e.strings,r),r}var q=new Map,I=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var j=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,r,s){var i=t[0];return"."===i?new V(e,t.slice(1),r).parts:"@"===i?[new O(e,t.slice(1),s.eventContext)]:"?"===i?[new E(e,t.slice(1),r)]:new C(e,t,r).parts}handleTextExpression(e){return new A(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");var L=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return new x(e,r,"html",j)},F=(e,t)=>"".concat(e,"--").concat(t),H=!0;void 0===window.ShadyCSS?H=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),H=!1);var z=e=>t=>{var r=F(t.type,e),s=q.get(r);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},q.set(r,s));var i=s.stringsArray.get(t.strings);if(void 0!==i)return i;var a=t.strings.join(n);if(void 0===(i=s.keyString.get(a))){var o=t.getTemplateElement();H&&window.ShadyCSS.prepareTemplateDom(o,e),i=new l(t,o),s.keyString.set(a,i)}return s.stringsArray.set(t.strings,i),i},B=["html","svg"],$=new Set,W=(e,t,r)=>{$.add(e);var s=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:n}=i;if(0!==n){for(var a=document.createElement("style"),o=0;o<n;o++){var l=i[o];l.parentNode.removeChild(l),a.textContent+=l.textContent}(e=>{B.forEach(t=>{var r=q.get(F(t,e));void 0!==r&&r.keyString.forEach(e=>{var{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{r.add(e)}),c(e,r)})})})(e);var h=s.content;r?function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,{element:{content:s},parts:i}=e;if(null!=r)for(var n=document.createTreeWalker(s,133,null,!1),a=_(i),o=0,l=-1;n.nextNode();){l++;var h=n.currentNode;for(h===r&&(o=v(t),r.parentNode.insertBefore(t,r));-1!==a&&i[a].index===l;){if(o>0){for(;-1!==a;)i[a].index+=o,a=_(i,a);return}a=_(i,a)}}else s.appendChild(t)}(r,a,h.firstChild):h.insertBefore(a,h.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);var d=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)t.insertBefore(d.cloneNode(!0),t.firstChild);else if(r){h.insertBefore(a,h.firstChild);var p=new Set;p.add(a),c(r,p)}}else window.ShadyCSS.prepareTemplateStyles(s,e)};function J(e,t,r,s,i,n,a){try{var o=e[n](a),l=o.value}catch(e){return void r(e)}o.done?t(l):Promise.resolve(l).then(s,i)}window.JSCompiler_renameProperty=(e,t)=>e;var D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},G=(e,t)=>t!==e&&(t==t||e==e),K={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:G};class Q extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();var e=[];return this._classProperties.forEach((t,r)=>{var s=this._attributeNameForProperty(r,t);void 0!==s&&(this._attributeToPropertyMap.set(s,r),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;var e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K;if(this._ensureClassProperties(),this._classProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){var r="symbol"==typeof e?Symbol():"__".concat(e),s=this.getPropertyDescriptor(e,r,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(s){var i=this[e];this[t]=s,this.requestUpdateInternal(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||K}static finalize(){var e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var t=this.properties,r=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(var s of r)this.createProperty(s,t[s])}}static _attributeNameForProperty(e,t){var r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:G)(e,t)}static _propertyValueFromAttribute(e,t){var r=t.type,s=t.converter||D,i="function"==typeof s?s:s.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0!==t.reflect){var r=t.type,s=t.converter;return(s&&s.toAttribute||D.toAttribute)(e,r)}}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){var r=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,r)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K,s=this.constructor,i=s._attributeNameForProperty(e,r);if(void 0!==i){var n=s._propertyValueToAttribute(t,r);if(void 0===n)return;this._updateState=8|this._updateState,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(!(8&this._updateState)){var r=this.constructor,s=r._attributeToPropertyMap.get(e);if(void 0!==s){var i=r.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=r._propertyValueFromAttribute(t,i),this._updateState=-17&this._updateState}}}requestUpdateInternal(e,t,r){var s=!0;if(void 0!==e){var i=this.constructor;r=r||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}_enqueueUpdate(){var e,t=this;return(e=function*(){t._updateState=4|t._updateState;try{yield t._updatePromise}catch(e){}var e=t.performUpdate();return null!=e&&(yield e),!t._hasRequestedUpdate},function(){var t=this,r=arguments;return new Promise((function(s,i){var n=e.apply(t,r);function a(e){J(n,s,i,a,o,"next",e)}function o(e){J(n,s,i,a,o,"throw",e)}a(void 0)}))})()}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(this._hasRequestedUpdate){this._instanceProperties&&this._applyInstanceProperties();var e=!1,t=this._changedProperties;try{(e=this.shouldUpdate(t))?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Q.finalized=!0;var X=Element.prototype;X.msMatchesSelector||X.webkitMatchesSelector;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol();class ee{constructor(e,t){if(t!==Z)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}var te=e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(e,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))},re=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];var i=r.reduce((t,r,s)=>t+te(r)+e[s+1],e[0]);return new ee(i,Z)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");var se={};class ie extends Q{static getStyles(){return this.styles}static _getUniqueStyles(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var e=this.getStyles();if(Array.isArray(e)){var t=(e,r)=>e.reduceRight((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e),r),r=t(e,new Set),s=[];r.forEach(e=>s.unshift(e)),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!Y){var t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ee(String(t),Z)}return e})}}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){var e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){var t=this.render();super.update(e),t!==se&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{var t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return se}}ie.finalized=!0,ie.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");var s=r.scopeName,n=I.has(t),a=H&&11===t.nodeType&&!!t.host,o=a&&!$.has(s),l=o?document.createDocumentFragment():t;if(((e,t,r)=>{var s=I.get(t);void 0===s&&(i(t,t.firstChild),I.set(t,s=new A(Object.assign({templateFactory:R},r))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:z(s)},r)),o){var h=I.get(l);I.delete(l);var d=h.value instanceof S?h.value.template:void 0;W(s,l,d),i(t,t.firstChild),t.appendChild(l),I.set(t,h)}!n&&a&&window.ShadyCSS.styleElement(t.host)}}]]);