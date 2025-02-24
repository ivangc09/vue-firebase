(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xs(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const X={},Xt=[],je=()=>{},Zc=()=>!1,Cr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ls=t=>t.startsWith("onUpdate:"),ue=Object.assign,Us=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},el=Object.prototype.hasOwnProperty,z=(t,e)=>el.call(t,e),$=Array.isArray,Qt=t=>Ar(t)==="[object Map]",Fo=t=>Ar(t)==="[object Set]",H=t=>typeof t=="function",ie=t=>typeof t=="string",Tt=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",$o=t=>(ne(t)||H(t))&&H(t.then)&&H(t.catch),Ho=Object.prototype.toString,Ar=t=>Ho.call(t),tl=t=>Ar(t).slice(8,-1),Bo=t=>Ar(t)==="[object Object]",Fs=t=>ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,En=xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nl=/-(\w)/g,Ae=Pr(t=>t.replace(nl,(e,n)=>n?n.toUpperCase():"")),rl=/\B([A-Z])/g,Vt=Pr(t=>t.replace(rl,"-$1").toLowerCase()),Or=Pr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wr=Pr(t=>t?`on${Or(t)}`:""),bt=(t,e)=>!Object.is(t,e),tr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vo=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mi;const kr=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $s(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ie(r)?al(r):$s(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ie(t)||ne(t))return t}const sl=/;(?![^(]*\))/g,il=/:([^]+)/,ol=/\/\*[^]*?\*\//g;function al(t){const e={};return t.replace(ol,"").split(sl).forEach(n=>{if(n){const r=n.split(il);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Hs(t){let e="";if(ie(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Hs(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ll=xs(cl);function jo(t){return!!t||t===""}const Wo=t=>!!(t&&t.__v_isRef===!0),Nr=t=>ie(t)?t:t==null?"":$(t)||ne(t)&&(t.toString===Ho||!H(t.toString))?Wo(t)?Nr(t.value):JSON.stringify(t,Ko,2):String(t),Ko=(t,e)=>Wo(e)?Ko(t,e.value):Qt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Kr(r,i)+" =>"]=s,n),{})}:Fo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Kr(n))}:Tt(e)?Kr(e):ne(e)&&!$(e)&&!Bo(e)?String(e):e,Kr=(t,e="")=>{var n;return Tt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class ul{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function fl(){return Ee}let ee;const zr=new WeakSet;class zo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zr.has(this)&&(zr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_i(this),Jo(this);const e=ee,n=ke;ee=this,ke=!0;try{return this.fn()}finally{Yo(this),ee=e,ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)js(e);this.deps=this.depsTail=void 0,_i(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ds(this)&&this.run()}get dirty(){return ds(this)}}let Go=0,In,wn;function qo(t,e=!1){if(t.flags|=8,e){t.next=wn,wn=t;return}t.next=In,In=t}function Bs(){Go++}function Vs(){if(--Go>0)return;if(wn){let e=wn;for(wn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;In;){let e=In;for(In=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Jo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yo(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),js(r),dl(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ds(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xo(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xo(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===On))return;t.globalVersion=On;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ds(t)){t.flags&=-3;return}const n=ee,r=ke;ee=t,ke=!0;try{Jo(t);const s=t.fn(t._value);(e.version===0||bt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ee=n,ke=r,Yo(t),t.flags&=-3}}function js(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)js(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function dl(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ke=!0;const Qo=[];function Rt(){Qo.push(ke),ke=!1}function Ct(){const t=Qo.pop();ke=t===void 0?!0:t}function _i(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ee;ee=void 0;try{e()}finally{ee=n}}}let On=0;class hl{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ws{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ee||!ke||ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ee)n=this.activeLink=new hl(ee,this),ee.deps?(n.prevDep=ee.depsTail,ee.depsTail.nextDep=n,ee.depsTail=n):ee.deps=ee.depsTail=n,Zo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ee.depsTail,n.nextDep=void 0,ee.depsTail.nextDep=n,ee.depsTail=n,ee.deps===n&&(ee.deps=r)}return n}trigger(e){this.version++,On++,this.notify(e)}notify(e){Bs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vs()}}}function Zo(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Zo(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const hs=new WeakMap,Lt=Symbol(""),ps=Symbol(""),kn=Symbol("");function ae(t,e,n){if(ke&&ee){let r=hs.get(t);r||hs.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ws),s.map=r,s.key=n),s.track()}}function Ze(t,e,n,r,s,i){const o=hs.get(t);if(!o){On++;return}const a=c=>{c&&c.trigger()};if(Bs(),e==="clear")o.forEach(a);else{const c=$(t),l=c&&Fs(n);if(c&&n==="length"){const f=Number(r);o.forEach((h,g)=>{(g==="length"||g===kn||!Tt(g)&&g>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(kn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Lt)),Qt(t)&&a(o.get(ps)));break;case"delete":c||(a(o.get(Lt)),Qt(t)&&a(o.get(ps)));break;case"set":Qt(t)&&a(o.get(Lt));break}}Vs()}function Gt(t){const e=K(t);return e===t?e:(ae(e,"iterate",kn),Ne(t)?e:e.map(de))}function Ks(t){return ae(t=K(t),"iterate",kn),t}const pl={__proto__:null,[Symbol.iterator](){return Gr(this,Symbol.iterator,de)},concat(...t){return Gt(this).concat(...t.map(e=>$(e)?Gt(e):e))},entries(){return Gr(this,"entries",t=>(t[1]=de(t[1]),t))},every(t,e){return Je(this,"every",t,e,void 0,arguments)},filter(t,e){return Je(this,"filter",t,e,n=>n.map(de),arguments)},find(t,e){return Je(this,"find",t,e,de,arguments)},findIndex(t,e){return Je(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Je(this,"findLast",t,e,de,arguments)},findLastIndex(t,e){return Je(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Je(this,"forEach",t,e,void 0,arguments)},includes(...t){return qr(this,"includes",t)},indexOf(...t){return qr(this,"indexOf",t)},join(t){return Gt(this).join(t)},lastIndexOf(...t){return qr(this,"lastIndexOf",t)},map(t,e){return Je(this,"map",t,e,void 0,arguments)},pop(){return pn(this,"pop")},push(...t){return pn(this,"push",t)},reduce(t,...e){return vi(this,"reduce",t,e)},reduceRight(t,...e){return vi(this,"reduceRight",t,e)},shift(){return pn(this,"shift")},some(t,e){return Je(this,"some",t,e,void 0,arguments)},splice(...t){return pn(this,"splice",t)},toReversed(){return Gt(this).toReversed()},toSorted(t){return Gt(this).toSorted(t)},toSpliced(...t){return Gt(this).toSpliced(...t)},unshift(...t){return pn(this,"unshift",t)},values(){return Gr(this,"values",de)}};function Gr(t,e,n){const r=Ks(t),s=r[e]();return r!==t&&!Ne(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const gl=Array.prototype;function Je(t,e,n,r,s,i){const o=Ks(t),a=o!==t&&!Ne(t),c=o[e];if(c!==gl[e]){const h=c.apply(t,i);return a?de(h):h}let l=n;o!==t&&(a?l=function(h,g){return n.call(this,de(h),g,t)}:n.length>2&&(l=function(h,g){return n.call(this,h,g,t)}));const f=c.call(o,l,r);return a&&s?s(f):f}function vi(t,e,n,r){const s=Ks(t);let i=n;return s!==t&&(Ne(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,de(a),c,t)}),s[e](i,...r)}function qr(t,e,n){const r=K(t);ae(r,"iterate",kn);const s=r[e](...n);return(s===-1||s===!1)&&qs(n[0])?(n[0]=K(n[0]),r[e](...n)):s}function pn(t,e,n=[]){Rt(),Bs();const r=K(t)[e].apply(t,n);return Vs(),Ct(),r}const ml=xs("__proto__,__v_isRef,__isVue"),ea=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tt));function _l(t){Tt(t)||(t=String(t));const e=K(this);return ae(e,"has",t),e.hasOwnProperty(t)}class ta{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Cl:ia:i?sa:ra).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){let c;if(o&&(c=pl[n]))return c;if(n==="hasOwnProperty")return _l}const a=Reflect.get(e,n,le(e)?e:r);return(Tt(n)?ea.has(n):ml(n))||(s||ae(e,"get",n),i)?a:le(a)?o&&Fs(n)?a:a.value:ne(a)?s?aa(a):Dr(a):a}}class na extends ta{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Ut(i);if(!Ne(r)&&!Ut(r)&&(i=K(i),r=K(r)),!$(e)&&le(i)&&!le(r))return c?!1:(i.value=r,!0)}const o=$(e)&&Fs(n)?Number(n)<e.length:z(e,n),a=Reflect.set(e,n,r,le(e)?e:s);return e===K(s)&&(o?bt(r,i)&&Ze(e,"set",n,r):Ze(e,"add",n,r)),a}deleteProperty(e,n){const r=z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ze(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tt(n)||!ea.has(n))&&ae(e,"has",n),r}ownKeys(e){return ae(e,"iterate",$(e)?"length":Lt),Reflect.ownKeys(e)}}class vl extends ta{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const yl=new na,bl=new vl,El=new na(!0);const gs=t=>t,Yn=t=>Reflect.getPrototypeOf(t);function Il(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Qt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?gs:e?ms:de;return!e&&ae(i,"iterate",c?ps:Lt),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:a?[f(h[0]),f(h[1])]:f(h),done:g}},[Symbol.iterator](){return this}}}}function Xn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function wl(t,e){const n={get(s){const i=this.__v_raw,o=K(i),a=K(s);t||(bt(s,a)&&ae(o,"get",s),ae(o,"get",a));const{has:c}=Yn(o),l=e?gs:t?ms:de;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ae(K(s),"iterate",Lt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=K(i),a=K(s);return t||(bt(s,a)&&ae(o,"has",s),ae(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=K(a),l=e?gs:t?ms:de;return!t&&ae(c,"iterate",Lt),a.forEach((f,h)=>s.call(i,l(f),l(h),o))}};return ue(n,t?{add:Xn("add"),set:Xn("set"),delete:Xn("delete"),clear:Xn("clear")}:{add(s){!e&&!Ne(s)&&!Ut(s)&&(s=K(s));const i=K(this);return Yn(i).has.call(i,s)||(i.add(s),Ze(i,"add",s,s)),this},set(s,i){!e&&!Ne(i)&&!Ut(i)&&(i=K(i));const o=K(this),{has:a,get:c}=Yn(o);let l=a.call(o,s);l||(s=K(s),l=a.call(o,s));const f=c.call(o,s);return o.set(s,i),l?bt(i,f)&&Ze(o,"set",s,i):Ze(o,"add",s,i),this},delete(s){const i=K(this),{has:o,get:a}=Yn(i);let c=o.call(i,s);c||(s=K(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&Ze(i,"delete",s,void 0),l},clear(){const s=K(this),i=s.size!==0,o=s.clear();return i&&Ze(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Il(s,t,e)}),n}function zs(t,e){const n=wl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const Sl={get:zs(!1,!1)},Tl={get:zs(!1,!0)},Rl={get:zs(!0,!1)};const ra=new WeakMap,sa=new WeakMap,ia=new WeakMap,Cl=new WeakMap;function Al(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pl(t){return t.__v_skip||!Object.isExtensible(t)?0:Al(tl(t))}function Dr(t){return Ut(t)?t:Gs(t,!1,yl,Sl,ra)}function oa(t){return Gs(t,!1,El,Tl,sa)}function aa(t){return Gs(t,!0,bl,Rl,ia)}function Gs(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Pl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Sn(t){return Ut(t)?Sn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ut(t){return!!(t&&t.__v_isReadonly)}function Ne(t){return!!(t&&t.__v_isShallow)}function qs(t){return t?!!t.__v_raw:!1}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function Ol(t){return!z(t,"__v_skip")&&Object.isExtensible(t)&&Vo(t,"__v_skip",!0),t}const de=t=>ne(t)?Dr(t):t,ms=t=>ne(t)?aa(t):t;function le(t){return t?t.__v_isRef===!0:!1}function Et(t){return ca(t,!1)}function kl(t){return ca(t,!0)}function ca(t,e){return le(t)?t:new Nl(t,e)}class Nl{constructor(e,n){this.dep=new Ws,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:K(e),this._value=n?e:de(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ne(e)||Ut(e);e=r?e:K(e),bt(e,n)&&(this._rawValue=e,this._value=r?e:de(e),this.dep.trigger())}}function Zt(t){return le(t)?t.value:t}const Dl={get:(t,e,n)=>e==="__v_raw"?t:Zt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function la(t){return Sn(t)?t:new Proxy(t,Dl)}class Ml{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ws(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=On-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ee!==this)return qo(this,!0),!0}get value(){const e=this.dep.track();return Xo(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function xl(t,e,n=!1){let r,s;return H(t)?r=t:(r=t.get,s=t.set),new Ml(r,s,n)}const Qn={},ur=new WeakMap;let Mt;function Ll(t,e=!1,n=Mt){if(n){let r=ur.get(n);r||ur.set(n,r=[]),r.push(t)}}function Ul(t,e,n=X){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=O=>s?O:Ne(O)||s===!1||s===0?et(O,1):et(O);let f,h,g,m,A=!1,P=!1;if(le(t)?(h=()=>t.value,A=Ne(t)):Sn(t)?(h=()=>l(t),A=!0):$(t)?(P=!0,A=t.some(O=>Sn(O)||Ne(O)),h=()=>t.map(O=>{if(le(O))return O.value;if(Sn(O))return l(O);if(H(O))return c?c(O,2):O()})):H(t)?e?h=c?()=>c(t,2):t:h=()=>{if(g){Rt();try{g()}finally{Ct()}}const O=Mt;Mt=f;try{return c?c(t,3,[m]):t(m)}finally{Mt=O}}:h=je,e&&s){const O=h,j=s===!0?1/0:s;h=()=>et(O(),j)}const B=fl(),x=()=>{f.stop(),B&&B.active&&Us(B.effects,f)};if(i&&e){const O=e;e=(...j)=>{O(...j),x()}}let k=P?new Array(t.length).fill(Qn):Qn;const D=O=>{if(!(!(f.flags&1)||!f.dirty&&!O))if(e){const j=f.run();if(s||A||(P?j.some((se,Q)=>bt(se,k[Q])):bt(j,k))){g&&g();const se=Mt;Mt=f;try{const Q=[j,k===Qn?void 0:P&&k[0]===Qn?[]:k,m];c?c(e,3,Q):e(...Q),k=j}finally{Mt=se}}}else f.run()};return a&&a(D),f=new zo(h),f.scheduler=o?()=>o(D,!1):D,m=O=>Ll(O,!1,f),g=f.onStop=()=>{const O=ur.get(f);if(O){if(c)c(O,4);else for(const j of O)j();ur.delete(f)}},e?r?D(!0):k=f.run():o?o(D.bind(null,!0),!0):f.run(),x.pause=f.pause.bind(f),x.resume=f.resume.bind(f),x.stop=x,x}function et(t,e=1/0,n){if(e<=0||!ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,le(t))et(t.value,e,n);else if($(t))for(let r=0;r<t.length;r++)et(t[r],e,n);else if(Fo(t)||Qt(t))t.forEach(r=>{et(r,e,n)});else if(Bo(t)){for(const r in t)et(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&et(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hn(t,e,n,r){try{return r?t(...r):t()}catch(s){Mr(s,e,n)}}function Ge(t,e,n,r){if(H(t)){const s=Hn(t,e,n,r);return s&&$o(s)&&s.catch(i=>{Mr(i,e,n)}),s}if($(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ge(t[i],e,n,r));return s}}function Mr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||X;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,c,l)===!1)return}a=a.parent}if(i){Rt(),Hn(i,null,10,[t,c,l]),Ct();return}}Fl(t,n,s,r,o)}function Fl(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const he=[];let Be=-1;const en=[];let ht=null,qt=0;const ua=Promise.resolve();let fr=null;function fa(t){const e=fr||ua;return t?e.then(this?t.bind(this):t):e}function $l(t){let e=Be+1,n=he.length;for(;e<n;){const r=e+n>>>1,s=he[r],i=Nn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Js(t){if(!(t.flags&1)){const e=Nn(t),n=he[he.length-1];!n||!(t.flags&2)&&e>=Nn(n)?he.push(t):he.splice($l(e),0,t),t.flags|=1,da()}}function da(){fr||(fr=ua.then(pa))}function Hl(t){$(t)?en.push(...t):ht&&t.id===-1?ht.splice(qt+1,0,t):t.flags&1||(en.push(t),t.flags|=1),da()}function yi(t,e,n=Be+1){for(;n<he.length;n++){const r=he[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;he.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ha(t){if(en.length){const e=[...new Set(en)].sort((n,r)=>Nn(n)-Nn(r));if(en.length=0,ht){ht.push(...e);return}for(ht=e,qt=0;qt<ht.length;qt++){const n=ht[qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ht=null,qt=0}}const Nn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pa(t){try{for(Be=0;Be<he.length;Be++){const e=he[Be];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Be<he.length;Be++){const e=he[Be];e&&(e.flags&=-2)}Be=-1,he.length=0,ha(),fr=null,(he.length||en.length)&&pa()}}let Ie=null,ga=null;function dr(t){const e=Ie;return Ie=t,ga=t&&t.type.__scopeId||null,e}function Bl(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Pi(-1);const i=dr(e);let o;try{o=t(...s)}finally{dr(i),r._d&&Pi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hr(t,e){if(Ie===null)return t;const n=Fr(Ie),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=X]=e[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&et(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Nt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Rt(),Ge(c,n,8,[t.el,a,t,e]),Ct())}}const Vl=Symbol("_vte"),jl=t=>t.__isTeleport;function Ys(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ys(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ma(t,e){return H(t)?ue({name:t.name},e,{setup:t}):t}function _a(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function pr(t,e,n,r,s=!1){if($(t)){t.forEach((A,P)=>pr(A,e&&($(e)?e[P]:e),n,r,s));return}if(Tn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&pr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Fr(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===X?a.refs={}:a.refs,h=a.setupState,g=K(h),m=h===X?()=>!1:A=>z(g,A);if(l!=null&&l!==c&&(ie(l)?(f[l]=null,m(l)&&(h[l]=null)):le(l)&&(l.value=null)),H(c))Hn(c,a,12,[o,f]);else{const A=ie(c),P=le(c);if(A||P){const B=()=>{if(t.f){const x=A?m(c)?h[c]:f[c]:c.value;s?$(x)&&Us(x,i):$(x)?x.includes(i)||x.push(i):A?(f[c]=[i],m(c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else A?(f[c]=o,m(c)&&(h[c]=o)):P&&(c.value=o,t.k&&(f[t.k]=o))};o?(B.id=-1,be(B,n)):B()}}}kr().requestIdleCallback;kr().cancelIdleCallback;const Tn=t=>!!t.type.__asyncLoader,va=t=>t.type.__isKeepAlive;function Wl(t,e){ya(t,"a",e)}function Kl(t,e){ya(t,"da",e)}function ya(t,e,n=ce){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(xr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)va(s.parent.vnode)&&zl(r,e,n,s),s=s.parent}}function zl(t,e,n,r){const s=xr(e,t,r,!0);ba(()=>{Us(r[e],s)},n)}function xr(t,e,n=ce,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Rt();const a=Bn(n),c=Ge(e,n,t,o);return a(),Ct(),c});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=ce)=>{(!Mn||t==="sp")&&xr(t,(...r)=>e(...r),n)},Gl=at("bm"),ql=at("m"),Jl=at("bu"),Yl=at("u"),Xl=at("bum"),ba=at("um"),Ql=at("sp"),Zl=at("rtg"),eu=at("rtc");function tu(t,e=ce){xr("ec",t,e)}const nu="components";function ru(t,e){return iu(nu,t,!0,e)||t}const su=Symbol.for("v-ndc");function iu(t,e,n=!0,r=!1){const s=Ie||ce;if(s){const i=s.type;{const a=Gu(i,!1);if(a&&(a===e||a===Ae(e)||a===Or(Ae(e))))return i}const o=bi(s[t]||i[t],e)||bi(s.appContext[t],e);return!o&&r?i:o}}function bi(t,e){return t&&(t[e]||t[Ae(e)]||t[Or(Ae(e))])}const _s=t=>t?Va(t)?Fr(t):_s(t.parent):null,Rn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_s(t.parent),$root:t=>_s(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ia(t),$forceUpdate:t=>t.f||(t.f=()=>{Js(t.update)}),$nextTick:t=>t.n||(t.n=fa.bind(t.proxy)),$watch:t=>Ru.bind(t)}),Jr=(t,e)=>t!==X&&!t.__isScriptSetup&&z(t,e),ou={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jr(r,e))return o[e]=1,r[e];if(s!==X&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==X&&z(n,e))return o[e]=4,n[e];vs&&(o[e]=0)}}const f=Rn[e];let h,g;if(f)return e==="$attrs"&&ae(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==X&&z(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,z(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jr(s,e)?(s[e]=n,!0):r!==X&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==X&&z(t,o)||Jr(e,o)||(a=i[0])&&z(a,o)||z(r,o)||z(Rn,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ei(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vs=!0;function au(t){const e=Ia(t),n=t.proxy,r=t.ctx;vs=!1,e.beforeCreate&&Ii(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:g,beforeUpdate:m,updated:A,activated:P,deactivated:B,beforeDestroy:x,beforeUnmount:k,destroyed:D,unmounted:O,render:j,renderTracked:se,renderTriggered:Q,errorCaptured:Se,serverPrefetch:Te,expose:Re,inheritAttrs:lt,components:kt,directives:xe,filters:dn}=e;if(l&&cu(l,r,null),o)for(const q in o){const W=o[q];H(W)&&(r[q]=W.bind(n))}if(s){const q=s.call(n,n);ne(q)&&(t.data=Dr(q))}if(vs=!0,i)for(const q in i){const W=i[q],qe=H(W)?W.bind(n,n):H(W.get)?W.get.bind(n,n):je,ut=!H(W)&&H(W.set)?W.set.bind(n):je,Le=Pe({get:qe,set:ut});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>Le.value,set:ge=>Le.value=ge})}if(a)for(const q in a)Ea(a[q],r,n,q);if(c){const q=H(c)?c.call(n):c;Reflect.ownKeys(q).forEach(W=>{nr(W,q[W])})}f&&Ii(f,t,"c");function oe(q,W){$(W)?W.forEach(qe=>q(qe.bind(n))):W&&q(W.bind(n))}if(oe(Gl,h),oe(ql,g),oe(Jl,m),oe(Yl,A),oe(Wl,P),oe(Kl,B),oe(tu,Se),oe(eu,se),oe(Zl,Q),oe(Xl,k),oe(ba,O),oe(Ql,Te),$(Re))if(Re.length){const q=t.exposed||(t.exposed={});Re.forEach(W=>{Object.defineProperty(q,W,{get:()=>n[W],set:qe=>n[W]=qe})})}else t.exposed||(t.exposed={});j&&t.render===je&&(t.render=j),lt!=null&&(t.inheritAttrs=lt),kt&&(t.components=kt),xe&&(t.directives=xe),Te&&_a(t)}function cu(t,e,n=je){$(t)&&(t=ys(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ii(t,e,n){Ge($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ea(t,e,n,r){let s=r.includes(".")?La(n,r):()=>n[r];if(ie(t)){const i=e[t];H(i)&&rr(s,i)}else if(H(t))rr(s,t.bind(n));else if(ne(t))if($(t))t.forEach(i=>Ea(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&rr(s,i,t)}}function Ia(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>gr(c,l,o,!0)),gr(c,e,o)),ne(e)&&i.set(e,c),c}function gr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&gr(t,i,n,!0),s&&s.forEach(o=>gr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=lu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const lu={data:wi,props:Si,emits:Si,methods:vn,computed:vn,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:vn,directives:vn,watch:fu,provide:wi,inject:uu};function wi(t,e){return e?t?function(){return ue(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function uu(t,e){return vn(ys(t),ys(e))}function ys(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?ue(Object.create(null),t,e):e}function Si(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ue(Object.create(null),Ei(t),Ei(e??{})):e}function fu(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=fe(t[r],e[r]);return n}function wa(){return{app:null,config:{isNativeTag:Zc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let du=0;function hu(t,e){return function(r,s=null){H(r)||(r=ue({},r)),s!=null&&!ne(s)&&(s=null);const i=wa(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:du++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ju,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&H(f.install)?(o.add(f),f.install(l,...h)):H(f)&&(o.add(f),f(l,...h))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,h){return h?(i.components[f]=h,l):i.components[f]},directive(f,h){return h?(i.directives[f]=h,l):i.directives[f]},mount(f,h,g){if(!c){const m=l._ceVNode||_e(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(m,f,g),c=!0,l._container=f,f.__vue_app__=l,Fr(m.component)}},onUnmount(f){a.push(f)},unmount(){c&&(Ge(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,h){return i.provides[f]=h,l},runWithContext(f){const h=tn;tn=l;try{return f()}finally{tn=h}}};return l}}let tn=null;function nr(t,e){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=ce||Ie;if(r||tn){const s=tn?tn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}const Sa={},Ta=()=>Object.create(Sa),Ra=t=>Object.getPrototypeOf(t)===Sa;function pu(t,e,n,r=!1){const s={},i=Ta();t.propsDefaults=Object.create(null),Ca(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:oa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function gu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(Lr(t.emitsOptions,g))continue;const m=e[g];if(c)if(z(i,g))m!==i[g]&&(i[g]=m,l=!0);else{const A=Ae(g);s[A]=bs(c,a,A,m,t,!1)}else m!==i[g]&&(i[g]=m,l=!0)}}}else{Ca(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!z(e,h)&&((f=Vt(h))===h||!z(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=bs(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!z(e,h))&&(delete i[h],l=!0)}l&&Ze(t.attrs,"set","")}function Ca(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(En(c))continue;const l=e[c];let f;s&&z(s,f=Ae(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Lr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||X;for(let f=0;f<i.length;f++){const h=i[f];n[h]=bs(s,c,h,l[h],t,!z(l,h))}}return o}function bs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&H(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=Bn(s);r=l[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}const mu=new WeakMap;function Aa(t,e,n=!1){const r=n?mu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!H(t)){const f=h=>{c=!0;const[g,m]=Aa(h,e,!0);ue(o,g),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ne(t)&&r.set(t,Xt),Xt;if($(i))for(let f=0;f<i.length;f++){const h=Ae(i[f]);Ti(h)&&(o[h]=X)}else if(i)for(const f in i){const h=Ae(f);if(Ti(h)){const g=i[f],m=o[h]=$(g)||H(g)?{type:g}:ue({},g),A=m.type;let P=!1,B=!0;if($(A))for(let x=0;x<A.length;++x){const k=A[x],D=H(k)&&k.name;if(D==="Boolean"){P=!0;break}else D==="String"&&(B=!1)}else P=H(A)&&A.name==="Boolean";m[0]=P,m[1]=B,(P||z(m,"default"))&&a.push(h)}}const l=[o,a];return ne(t)&&r.set(t,l),l}function Ti(t){return t[0]!=="$"&&!En(t)}const Pa=t=>t[0]==="_"||t==="$stable",Xs=t=>$(t)?t.map(Ve):[Ve(t)],_u=(t,e,n)=>{if(e._n)return e;const r=Bl((...s)=>Xs(e(...s)),n);return r._c=!1,r},Oa=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Pa(s))continue;const i=t[s];if(H(i))e[s]=_u(s,i,r);else if(i!=null){const o=Xs(i);e[s]=()=>o}}},ka=(t,e)=>{const n=Xs(e);t.slots.default=()=>n},Na=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},vu=(t,e,n)=>{const r=t.slots=Ta();if(t.vnode.shapeFlag&32){const s=e._;s?(Na(r,e,n),n&&Vo(r,"_",s,!0)):Oa(e,r)}else e&&ka(t,e)},yu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=X;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Na(s,e,n):(i=!e.$stable,Oa(e,s)),o=e}else e&&(ka(t,e),o={default:1});if(i)for(const a in s)!Pa(a)&&o[a]==null&&delete s[a]},be=Du;function bu(t){return Eu(t)}function Eu(t,e){const n=kr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:g,setScopeId:m=je,insertStaticContent:A}=t,P=(u,d,p,_=null,b=null,y=null,S=void 0,w=null,I=!!d.dynamicChildren)=>{if(u===d)return;u&&!gn(u,d)&&(_=v(u),ge(u,b,y,!0),u=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:E,ref:L,shapeFlag:R}=d;switch(E){case Ur:B(u,d,p,_);break;case Ft:x(u,d,p,_);break;case Xr:u==null&&k(d,p,_,S);break;case Qe:kt(u,d,p,_,b,y,S,w,I);break;default:R&1?j(u,d,p,_,b,y,S,w,I):R&6?xe(u,d,p,_,b,y,S,w,I):(R&64||R&128)&&E.process(u,d,p,_,b,y,S,w,I,N)}L!=null&&b&&pr(L,u&&u.ref,y,d||u,!d)},B=(u,d,p,_)=>{if(u==null)r(d.el=a(d.children),p,_);else{const b=d.el=u.el;d.children!==u.children&&l(b,d.children)}},x=(u,d,p,_)=>{u==null?r(d.el=c(d.children||""),p,_):d.el=u.el},k=(u,d,p,_)=>{[u.el,u.anchor]=A(u.children,d,p,_,u.el,u.anchor)},D=({el:u,anchor:d},p,_)=>{let b;for(;u&&u!==d;)b=g(u),r(u,p,_),u=b;r(d,p,_)},O=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=g(u),s(u),u=p;s(d)},j=(u,d,p,_,b,y,S,w,I)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),u==null?se(d,p,_,b,y,S,w,I):Te(u,d,b,y,S,w,I)},se=(u,d,p,_,b,y,S,w)=>{let I,E;const{props:L,shapeFlag:R,transition:M,dirs:F}=u;if(I=u.el=o(u.type,y,L&&L.is,L),R&8?f(I,u.children):R&16&&Se(u.children,I,null,_,b,Yr(u,y),S,w),F&&Nt(u,null,_,"created"),Q(I,u,u.scopeId,S,_),L){for(const Z in L)Z!=="value"&&!En(Z)&&i(I,Z,null,L[Z],y,_);"value"in L&&i(I,"value",null,L.value,y),(E=L.onVnodeBeforeMount)&&He(E,_,u)}F&&Nt(u,null,_,"beforeMount");const V=Iu(b,M);V&&M.beforeEnter(I),r(I,d,p),((E=L&&L.onVnodeMounted)||V||F)&&be(()=>{E&&He(E,_,u),V&&M.enter(I),F&&Nt(u,null,_,"mounted")},b)},Q=(u,d,p,_,b)=>{if(p&&m(u,p),_)for(let y=0;y<_.length;y++)m(u,_[y]);if(b){let y=b.subTree;if(d===y||Fa(y.type)&&(y.ssContent===d||y.ssFallback===d)){const S=b.vnode;Q(u,S,S.scopeId,S.slotScopeIds,b.parent)}}},Se=(u,d,p,_,b,y,S,w,I=0)=>{for(let E=I;E<u.length;E++){const L=u[E]=w?pt(u[E]):Ve(u[E]);P(null,L,d,p,_,b,y,S,w)}},Te=(u,d,p,_,b,y,S)=>{const w=d.el=u.el;let{patchFlag:I,dynamicChildren:E,dirs:L}=d;I|=u.patchFlag&16;const R=u.props||X,M=d.props||X;let F;if(p&&Dt(p,!1),(F=M.onVnodeBeforeUpdate)&&He(F,p,d,u),L&&Nt(d,u,p,"beforeUpdate"),p&&Dt(p,!0),(R.innerHTML&&M.innerHTML==null||R.textContent&&M.textContent==null)&&f(w,""),E?Re(u.dynamicChildren,E,w,p,_,Yr(d,b),y):S||W(u,d,w,null,p,_,Yr(d,b),y,!1),I>0){if(I&16)lt(w,R,M,p,b);else if(I&2&&R.class!==M.class&&i(w,"class",null,M.class,b),I&4&&i(w,"style",R.style,M.style,b),I&8){const V=d.dynamicProps;for(let Z=0;Z<V.length;Z++){const G=V[Z],ve=R[G],me=M[G];(me!==ve||G==="value")&&i(w,G,ve,me,b,p)}}I&1&&u.children!==d.children&&f(w,d.children)}else!S&&E==null&&lt(w,R,M,p,b);((F=M.onVnodeUpdated)||L)&&be(()=>{F&&He(F,p,d,u),L&&Nt(d,u,p,"updated")},_)},Re=(u,d,p,_,b,y,S)=>{for(let w=0;w<d.length;w++){const I=u[w],E=d[w],L=I.el&&(I.type===Qe||!gn(I,E)||I.shapeFlag&70)?h(I.el):p;P(I,E,L,null,_,b,y,S,!0)}},lt=(u,d,p,_,b)=>{if(d!==p){if(d!==X)for(const y in d)!En(y)&&!(y in p)&&i(u,y,d[y],null,b,_);for(const y in p){if(En(y))continue;const S=p[y],w=d[y];S!==w&&y!=="value"&&i(u,y,w,S,b,_)}"value"in p&&i(u,"value",d.value,p.value,b)}},kt=(u,d,p,_,b,y,S,w,I)=>{const E=d.el=u?u.el:a(""),L=d.anchor=u?u.anchor:a("");let{patchFlag:R,dynamicChildren:M,slotScopeIds:F}=d;F&&(w=w?w.concat(F):F),u==null?(r(E,p,_),r(L,p,_),Se(d.children||[],p,L,b,y,S,w,I)):R>0&&R&64&&M&&u.dynamicChildren?(Re(u.dynamicChildren,M,p,b,y,S,w),(d.key!=null||b&&d===b.subTree)&&Da(u,d,!0)):W(u,d,p,L,b,y,S,w,I)},xe=(u,d,p,_,b,y,S,w,I)=>{d.slotScopeIds=w,u==null?d.shapeFlag&512?b.ctx.activate(d,p,_,S,I):dn(d,p,_,b,y,S,I):Wt(u,d,I)},dn=(u,d,p,_,b,y,S)=>{const w=u.component=Vu(u,_,b);if(va(u)&&(w.ctx.renderer=N),ju(w,!1,S),w.asyncDep){if(b&&b.registerDep(w,oe,S),!u.el){const I=w.subTree=_e(Ft);x(null,I,d,p)}}else oe(w,u,d,p,b,y,S)},Wt=(u,d,p)=>{const _=d.component=u.component;if(ku(u,d,p))if(_.asyncDep&&!_.asyncResolved){q(_,d,p);return}else _.next=d,_.update();else d.el=u.el,_.vnode=d},oe=(u,d,p,_,b,y,S)=>{const w=()=>{if(u.isMounted){let{next:R,bu:M,u:F,parent:V,vnode:Z}=u;{const Fe=Ma(u);if(Fe){R&&(R.el=Z.el,q(u,R,S)),Fe.asyncDep.then(()=>{u.isUnmounted||w()});return}}let G=R,ve;Dt(u,!1),R?(R.el=Z.el,q(u,R,S)):R=Z,M&&tr(M),(ve=R.props&&R.props.onVnodeBeforeUpdate)&&He(ve,V,R,Z),Dt(u,!0);const me=Ci(u),Ue=u.subTree;u.subTree=me,P(Ue,me,h(Ue.el),v(Ue),u,b,y),R.el=me.el,G===null&&Nu(u,me.el),F&&be(F,b),(ve=R.props&&R.props.onVnodeUpdated)&&be(()=>He(ve,V,R,Z),b)}else{let R;const{el:M,props:F}=d,{bm:V,m:Z,parent:G,root:ve,type:me}=u,Ue=Tn(d);Dt(u,!1),V&&tr(V),!Ue&&(R=F&&F.onVnodeBeforeMount)&&He(R,G,d),Dt(u,!0);{ve.ce&&ve.ce._injectChildStyle(me);const Fe=u.subTree=Ci(u);P(null,Fe,p,_,u,b,y),d.el=Fe.el}if(Z&&be(Z,b),!Ue&&(R=F&&F.onVnodeMounted)){const Fe=d;be(()=>He(R,G,Fe),b)}(d.shapeFlag&256||G&&Tn(G.vnode)&&G.vnode.shapeFlag&256)&&u.a&&be(u.a,b),u.isMounted=!0,d=p=_=null}};u.scope.on();const I=u.effect=new zo(w);u.scope.off();const E=u.update=I.run.bind(I),L=u.job=I.runIfDirty.bind(I);L.i=u,L.id=u.uid,I.scheduler=()=>Js(L),Dt(u,!0),E()},q=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,gu(u,d.props,_,p),yu(u,d.children,p),Rt(),yi(u),Ct()},W=(u,d,p,_,b,y,S,w,I=!1)=>{const E=u&&u.children,L=u?u.shapeFlag:0,R=d.children,{patchFlag:M,shapeFlag:F}=d;if(M>0){if(M&128){ut(E,R,p,_,b,y,S,w,I);return}else if(M&256){qe(E,R,p,_,b,y,S,w,I);return}}F&8?(L&16&&Ce(E,b,y),R!==E&&f(p,R)):L&16?F&16?ut(E,R,p,_,b,y,S,w,I):Ce(E,b,y,!0):(L&8&&f(p,""),F&16&&Se(R,p,_,b,y,S,w,I))},qe=(u,d,p,_,b,y,S,w,I)=>{u=u||Xt,d=d||Xt;const E=u.length,L=d.length,R=Math.min(E,L);let M;for(M=0;M<R;M++){const F=d[M]=I?pt(d[M]):Ve(d[M]);P(u[M],F,p,null,b,y,S,w,I)}E>L?Ce(u,b,y,!0,!1,R):Se(d,p,_,b,y,S,w,I,R)},ut=(u,d,p,_,b,y,S,w,I)=>{let E=0;const L=d.length;let R=u.length-1,M=L-1;for(;E<=R&&E<=M;){const F=u[E],V=d[E]=I?pt(d[E]):Ve(d[E]);if(gn(F,V))P(F,V,p,null,b,y,S,w,I);else break;E++}for(;E<=R&&E<=M;){const F=u[R],V=d[M]=I?pt(d[M]):Ve(d[M]);if(gn(F,V))P(F,V,p,null,b,y,S,w,I);else break;R--,M--}if(E>R){if(E<=M){const F=M+1,V=F<L?d[F].el:_;for(;E<=M;)P(null,d[E]=I?pt(d[E]):Ve(d[E]),p,V,b,y,S,w,I),E++}}else if(E>M)for(;E<=R;)ge(u[E],b,y,!0),E++;else{const F=E,V=E,Z=new Map;for(E=V;E<=M;E++){const ye=d[E]=I?pt(d[E]):Ve(d[E]);ye.key!=null&&Z.set(ye.key,E)}let G,ve=0;const me=M-V+1;let Ue=!1,Fe=0;const hn=new Array(me);for(E=0;E<me;E++)hn[E]=0;for(E=F;E<=R;E++){const ye=u[E];if(ve>=me){ge(ye,b,y,!0);continue}let $e;if(ye.key!=null)$e=Z.get(ye.key);else for(G=V;G<=M;G++)if(hn[G-V]===0&&gn(ye,d[G])){$e=G;break}$e===void 0?ge(ye,b,y,!0):(hn[$e-V]=E+1,$e>=Fe?Fe=$e:Ue=!0,P(ye,d[$e],p,null,b,y,S,w,I),ve++)}const pi=Ue?wu(hn):Xt;for(G=pi.length-1,E=me-1;E>=0;E--){const ye=V+E,$e=d[ye],gi=ye+1<L?d[ye+1].el:_;hn[E]===0?P(null,$e,p,gi,b,y,S,w,I):Ue&&(G<0||E!==pi[G]?Le($e,p,gi,2):G--)}}},Le=(u,d,p,_,b=null)=>{const{el:y,type:S,transition:w,children:I,shapeFlag:E}=u;if(E&6){Le(u.component.subTree,d,p,_);return}if(E&128){u.suspense.move(d,p,_);return}if(E&64){S.move(u,d,p,N);return}if(S===Qe){r(y,d,p);for(let R=0;R<I.length;R++)Le(I[R],d,p,_);r(u.anchor,d,p);return}if(S===Xr){D(u,d,p);return}if(_!==2&&E&1&&w)if(_===0)w.beforeEnter(y),r(y,d,p),be(()=>w.enter(y),b);else{const{leave:R,delayLeave:M,afterLeave:F}=w,V=()=>r(y,d,p),Z=()=>{R(y,()=>{V(),F&&F()})};M?M(y,V,Z):Z()}else r(y,d,p)},ge=(u,d,p,_=!1,b=!1)=>{const{type:y,props:S,ref:w,children:I,dynamicChildren:E,shapeFlag:L,patchFlag:R,dirs:M,cacheIndex:F}=u;if(R===-2&&(b=!1),w!=null&&pr(w,null,p,u,!0),F!=null&&(d.renderCache[F]=void 0),L&256){d.ctx.deactivate(u);return}const V=L&1&&M,Z=!Tn(u);let G;if(Z&&(G=S&&S.onVnodeBeforeUnmount)&&He(G,d,u),L&6)Jn(u.component,p,_);else{if(L&128){u.suspense.unmount(p,_);return}V&&Nt(u,null,d,"beforeUnmount"),L&64?u.type.remove(u,d,p,N,_):E&&!E.hasOnce&&(y!==Qe||R>0&&R&64)?Ce(E,d,p,!1,!0):(y===Qe&&R&384||!b&&L&16)&&Ce(I,d,p),_&&Kt(u)}(Z&&(G=S&&S.onVnodeUnmounted)||V)&&be(()=>{G&&He(G,d,u),V&&Nt(u,null,d,"unmounted")},p)},Kt=u=>{const{type:d,el:p,anchor:_,transition:b}=u;if(d===Qe){zt(p,_);return}if(d===Xr){O(u);return}const y=()=>{s(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(u.shapeFlag&1&&b&&!b.persisted){const{leave:S,delayLeave:w}=b,I=()=>S(p,y);w?w(u.el,y,I):I()}else y()},zt=(u,d)=>{let p;for(;u!==d;)p=g(u),s(u),u=p;s(d)},Jn=(u,d,p)=>{const{bum:_,scope:b,job:y,subTree:S,um:w,m:I,a:E}=u;Ri(I),Ri(E),_&&tr(_),b.stop(),y&&(y.flags|=8,ge(S,u,d,p)),w&&be(w,d),be(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ce=(u,d,p,_=!1,b=!1,y=0)=>{for(let S=y;S<u.length;S++)ge(u[S],d,p,_,b)},v=u=>{if(u.shapeFlag&6)return v(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=g(u.anchor||u.el),p=d&&d[Vl];return p?g(p):d};let C=!1;const T=(u,d,p)=>{u==null?d._vnode&&ge(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,p),d._vnode=u,C||(C=!0,yi(),ha(),C=!1)},N={p:P,um:ge,m:Le,r:Kt,mt:dn,mc:Se,pc:W,pbc:Re,n:v,o:t};return{render:T,hydrate:void 0,createApp:hu(T)}}function Yr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Iu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Da(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=pt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Da(o,a)),a.type===Ur&&(a.el=o.el)}}function wu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ma(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ma(e)}function Ri(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Su=Symbol.for("v-scx"),Tu=()=>We(Su);function rr(t,e,n){return xa(t,e,n)}function xa(t,e,n=X){const{immediate:r,deep:s,flush:i,once:o}=n,a=ue({},n),c=e&&r||!e&&i!=="post";let l;if(Mn){if(i==="sync"){const m=Tu();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=je,m.resume=je,m.pause=je,m}}const f=ce;a.call=(m,A,P)=>Ge(m,f,A,P);let h=!1;i==="post"?a.scheduler=m=>{be(m,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(m,A)=>{A?m():Js(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,f&&(m.id=f.uid,m.i=f))};const g=Ul(t,e,a);return Mn&&(l?l.push(g):c&&g()),g}function Ru(t,e,n){const r=this.proxy,s=ie(t)?t.includes(".")?La(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=Bn(this),a=xa(s,i.bind(r),n);return o(),a}function La(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Cu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ae(e)}Modifiers`]||t[`${Vt(e)}Modifiers`];function Au(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||X;let s=n;const i=e.startsWith("update:"),o=i&&Cu(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>ie(f)?f.trim():f)),o.number&&(s=n.map(fs)));let a,c=r[a=Wr(e)]||r[a=Wr(Ae(e))];!c&&i&&(c=r[a=Wr(Vt(e))]),c&&Ge(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ge(l,t,6,s)}}function Ua(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!H(t)){const c=l=>{const f=Ua(l,e,!0);f&&(a=!0,ue(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ne(t)&&r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):ue(o,i),ne(t)&&r.set(t,o),o)}function Lr(t,e){return!t||!Cr(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Vt(e))||z(t,e))}function Ci(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:f,props:h,data:g,setupState:m,ctx:A,inheritAttrs:P}=t,B=dr(t);let x,k;try{if(n.shapeFlag&4){const O=s||r,j=O;x=Ve(l.call(j,O,f,h,m,g,A)),k=a}else{const O=e;x=Ve(O.length>1?O(h,{attrs:a,slots:o,emit:c}):O(h,null)),k=e.props?a:Pu(a)}}catch(O){Cn.length=0,Mr(O,t,1),x=_e(Ft)}let D=x;if(k&&P!==!1){const O=Object.keys(k),{shapeFlag:j}=D;O.length&&j&7&&(i&&O.some(Ls)&&(k=Ou(k,i)),D=an(D,k,!1,!0))}return n.dirs&&(D=an(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Ys(D,n.transition),x=D,dr(B),x}const Pu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Cr(n))&&((e||(e={}))[n]=t[n]);return e},Ou=(t,e)=>{const n={};for(const r in t)(!Ls(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ku(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ai(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(o[g]!==r[g]&&!Lr(l,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ai(r,o,l):!0:!!o;return!1}function Ai(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Lr(n,i))return!0}return!1}function Nu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Fa=t=>t.__isSuspense;function Du(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Hl(t)}const Qe=Symbol.for("v-fgt"),Ur=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Xr=Symbol.for("v-stc"),Cn=[];let we=null;function St(t=!1){Cn.push(we=t?null:[])}function Mu(){Cn.pop(),we=Cn[Cn.length-1]||null}let Dn=1;function Pi(t,e=!1){Dn+=t,t<0&&we&&e&&(we.hasOnce=!0)}function $a(t){return t.dynamicChildren=Dn>0?we||Xt:null,Mu(),Dn>0&&we&&we.push(t),t}function $t(t,e,n,r,s,i){return $a(re(t,e,n,r,s,i,!0))}function xu(t,e,n,r,s){return $a(_e(t,e,n,r,s,!0))}function mr(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const Ha=({key:t})=>t??null,sr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ie(t)||le(t)||H(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function re(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ha(e),ref:e&&sr(e),scopeId:ga,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return a?(Qs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ie(n)?8:16),Dn>0&&!o&&we&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&we.push(c),c}const _e=Lu;function Lu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===su)&&(t=Ft),mr(t)){const a=an(t,e,!0);return n&&Qs(a,n),Dn>0&&!i&&we&&(a.shapeFlag&6?we[we.indexOf(t)]=a:we.push(a)),a.patchFlag=-2,a}if(qu(t)&&(t=t.__vccOpts),e){e=Uu(e);let{class:a,style:c}=e;a&&!ie(a)&&(e.class=Hs(a)),ne(c)&&(qs(c)&&!$(c)&&(c=ue({},c)),e.style=$s(c))}const o=ie(t)?1:Fa(t)?128:jl(t)?64:ne(t)?4:H(t)?2:0;return re(t,e,n,r,s,o,i,!0)}function Uu(t){return t?qs(t)||Ra(t)?ue({},t):t:null}function an(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?$u(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ha(l),ref:e&&e.ref?n&&i?$(i)?i.concat(sr(e)):[i,sr(e)]:sr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ys(f,c.clone(f)),f}function Fu(t=" ",e=0){return _e(Ur,null,t,e)}function Ba(t="",e=!1){return e?(St(),xu(Ft,null,t)):_e(Ft,null,t)}function Ve(t){return t==null||typeof t=="boolean"?_e(Ft):$(t)?_e(Qe,null,t.slice()):mr(t)?pt(t):_e(Ur,null,String(t))}function pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:an(t)}function Qs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Qs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ra(e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[Fu(e)]):n=8);t.children=e,t.shapeFlag|=n}function $u(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Hs([e.class,r.class]));else if(s==="style")e.style=$s([e.style,r.style]);else if(Cr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function He(t,e,n,r=null){Ge(t,e,7,[n,r])}const Hu=wa();let Bu=0;function Vu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Hu,i={uid:Bu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ul(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Aa(r,s),emitsOptions:Ua(r,s),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Au.bind(null,i),t.ce&&t.ce(i),i}let ce=null,_r,Es;{const t=kr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};_r=e("__VUE_INSTANCE_SETTERS__",n=>ce=n),Es=e("__VUE_SSR_SETTERS__",n=>Mn=n)}const Bn=t=>{const e=ce;return _r(t),t.scope.on(),()=>{t.scope.off(),_r(e)}},Oi=()=>{ce&&ce.scope.off(),_r(null)};function Va(t){return t.vnode.shapeFlag&4}let Mn=!1;function ju(t,e=!1,n=!1){e&&Es(e);const{props:r,children:s}=t.vnode,i=Va(t);pu(t,r,i,e),vu(t,s,n);const o=i?Wu(t,e):void 0;return e&&Es(!1),o}function Wu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ou);const{setup:r}=n;if(r){Rt();const s=t.setupContext=r.length>1?zu(t):null,i=Bn(t),o=Hn(r,t,0,[t.props,s]),a=$o(o);if(Ct(),i(),(a||t.sp)&&!Tn(t)&&_a(t),a){if(o.then(Oi,Oi),e)return o.then(c=>{ki(t,c)}).catch(c=>{Mr(c,t,0)});t.asyncDep=o}else ki(t,o)}else ja(t)}function ki(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=la(e)),ja(t)}function ja(t,e,n){const r=t.type;t.render||(t.render=r.render||je);{const s=Bn(t);Rt();try{au(t)}finally{Ct(),s()}}}const Ku={get(t,e){return ae(t,"get",""),t[e]}};function zu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ku),slots:t.slots,emit:t.emit,expose:e}}function Fr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(la(Ol(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}})):t.proxy}function Gu(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function qu(t){return H(t)&&"__vccOpts"in t}const Pe=(t,e)=>xl(t,e,Mn);function Wa(t,e,n){const r=arguments.length;return r===2?ne(e)&&!$(e)?mr(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mr(n)&&(n=[n]),_e(t,e,n))}const Ju="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Is;const Ni=typeof window<"u"&&window.trustedTypes;if(Ni)try{Is=Ni.createPolicy("vue",{createHTML:t=>t})}catch{}const Ka=Is?t=>Is.createHTML(t):t=>t,Yu="http://www.w3.org/2000/svg",Xu="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,Di=Xe&&Xe.createElement("template"),Qu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Xe.createElementNS(Yu,t):e==="mathml"?Xe.createElementNS(Xu,t):n?Xe.createElement(t,{is:n}):Xe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xe.createTextNode(t),createComment:t=>Xe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Di.innerHTML=Ka(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Di.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Zu=Symbol("_vtc");function ef(t,e,n){const r=t[Zu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mi=Symbol("_vod"),tf=Symbol("_vsh"),nf=Symbol(""),rf=/(^|;)\s*display\s*:/;function sf(t,e,n){const r=t.style,s=ie(n);let i=!1;if(n&&!s){if(e)if(ie(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ir(r,a,"")}else for(const o in e)n[o]==null&&ir(r,o,"");for(const o in n)o==="display"&&(i=!0),ir(r,o,n[o])}else if(s){if(e!==n){const o=r[nf];o&&(n+=";"+o),r.cssText=n,i=rf.test(n)}}else e&&t.removeAttribute("style");Mi in t&&(t[Mi]=i?r.display:"",t[tf]&&(r.display="none"))}const xi=/\s*!important$/;function ir(t,e,n){if($(n))n.forEach(r=>ir(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=of(t,e);xi.test(n)?t.setProperty(Vt(r),n.replace(xi,""),"important"):t[r]=n}}const Li=["Webkit","Moz","ms"],Qr={};function of(t,e){const n=Qr[e];if(n)return n;let r=Ae(e);if(r!=="filter"&&r in t)return Qr[e]=r;r=Or(r);for(let s=0;s<Li.length;s++){const i=Li[s]+r;if(i in t)return Qr[e]=i}return e}const Ui="http://www.w3.org/1999/xlink";function Fi(t,e,n,r,s,i=ll(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ui,e.slice(6,e.length)):t.setAttributeNS(Ui,e,n):n==null||i&&!jo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tt(n)?String(n):n)}function $i(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ka(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=jo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Jt(t,e,n,r){t.addEventListener(e,n,r)}function af(t,e,n,r){t.removeEventListener(e,n,r)}const Hi=Symbol("_vei");function cf(t,e,n,r,s=null){const i=t[Hi]||(t[Hi]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=lf(e);if(r){const l=i[e]=df(r,s);Jt(t,a,l,c)}else o&&(af(t,a,o,c),i[e]=void 0)}}const Bi=/(?:Once|Passive|Capture)$/;function lf(t){let e;if(Bi.test(t)){e={};let r;for(;r=t.match(Bi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vt(t.slice(2)),e]}let Zr=0;const uf=Promise.resolve(),ff=()=>Zr||(uf.then(()=>Zr=0),Zr=Date.now());function df(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ge(hf(r,n.value),e,5,[r])};return n.value=t,n.attached=ff(),n}function hf(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ef(t,r,o):e==="style"?sf(t,n,r):Cr(e)?Ls(e)||cf(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gf(t,e,r,o))?($i(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fi(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ie(r))?$i(t,Ae(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Fi(t,e,r,o))};function gf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vi(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vi(e)&&ie(n)?!1:e in t}const ji=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>tr(e,n):e};function mf(t){t.target.composing=!0}function Wi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const es=Symbol("_assign"),vr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[es]=ji(s);const i=r||s.props&&s.props.type==="number";Jt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=fs(a)),t[es](a)}),n&&Jt(t,"change",()=>{t.value=t.value.trim()}),e||(Jt(t,"compositionstart",mf),Jt(t,"compositionend",Wi),Jt(t,"change",Wi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[es]=ji(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?fs(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},_f=ue({patchProp:pf},Qu);let Ki;function vf(){return Ki||(Ki=bu(_f))}const yf=(...t)=>{const e=vf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ef(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,bf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function bf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ef(t){return ie(t)?document.querySelector(t):t}const Zs=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},If={};function wf(t,e){const n=ru("router-view");return St(),$t("div",null,[_e(n)])}const Sf=Zs(If,[["render",wf],["__scopeId","data-v-122a299c"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof document<"u";function za(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Tf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&za(t.default)}const te=Object.assign;function ts(t,e){const n={};for(const r in e){const s=e[r];n[r]=De(s)?s.map(t):t(s)}return n}const An=()=>{},De=Array.isArray,Ga=/#/g,Rf=/&/g,Cf=/\//g,Af=/=/g,Pf=/\?/g,qa=/\+/g,Of=/%5B/g,kf=/%5D/g,Ja=/%5E/g,Nf=/%60/g,Ya=/%7B/g,Df=/%7C/g,Xa=/%7D/g,Mf=/%20/g;function ei(t){return encodeURI(""+t).replace(Df,"|").replace(Of,"[").replace(kf,"]")}function xf(t){return ei(t).replace(Ya,"{").replace(Xa,"}").replace(Ja,"^")}function ws(t){return ei(t).replace(qa,"%2B").replace(Mf,"+").replace(Ga,"%23").replace(Rf,"%26").replace(Nf,"`").replace(Ya,"{").replace(Xa,"}").replace(Ja,"^")}function Lf(t){return ws(t).replace(Af,"%3D")}function Uf(t){return ei(t).replace(Ga,"%23").replace(Pf,"%3F")}function Ff(t){return t==null?"":Uf(t).replace(Cf,"%2F")}function xn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ns(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Vf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:xn(o)}}function $f(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Hf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cn(e.matched[r],n.matched[s])&&Qa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bf(t[n],e[n]))return!1;return!0}function Bf(t,e){return De(t)?zi(t,e):De(e)?zi(e,t):t===e}function zi(t,e){return De(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Vf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var yr;(function(t){t.pop="pop",t.push="push"})(yr||(yr={}));var Gi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gi||(Gi={}));function jf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wf=()=>({left:window.scrollX,top:window.scrollY});function Kf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=jf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qi(t,e){return(history.state?history.state.position-e:-1)+t}const Ss=new Map;function zf(t,e){Ss.set(t,e)}function Gf(t){const e=Ss.get(t);return Ss.delete(t),e}function qf(t){return typeof t=="string"||t&&typeof t=="object"}function Za(t){return typeof t=="string"||typeof t=="symbol"}const ec=Symbol("");var Ji;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ji||(Ji={}));function ln(t,e){return te(new Error,{type:t,[ec]:!0},e)}function Ye(t,e){return t instanceof Error&&ec in t&&(e==null||!!(t.type&e))}const Yi="[^/]+?",Jf={sensitive:!1,strict:!1,start:!0,end:!0},Yf=/[.+*?^${}()[\]/\\]/g;function Xf(t,e){const n=te({},Jf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let m=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(Yf,"\\$&"),m+=40;else if(g.type===1){const{value:A,repeatable:P,optional:B,regexp:x}=g;i.push({name:A,repeatable:P,optional:B});const k=x||Yi;if(k!==Yi){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${A}" (${k}): `+O.message)}}let D=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(D=B&&l.length<2?`(?:/${D})`:"/"+D),B&&(D+="?"),s+=D,m+=20,B&&(m+=-8),P&&(m+=-20),k===".*"&&(m+=-50)}f.push(m)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let g=1;g<f.length;g++){const m=f[g]||"",A=i[g-1];h[A.name]=m&&A.repeatable?m.split("/"):m}return h}function c(l){let f="",h=!1;for(const g of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const m of g)if(m.type===0)f+=m.value;else if(m.type===1){const{value:A,repeatable:P,optional:B}=m,x=A in l?l[A]:"";if(De(x)&&!P)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const k=De(x)?x.join("/"):x;if(!k)if(B)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${A}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Qf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function tc(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Qf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Xi(r))return 1;if(Xi(s))return-1}return s.length-r.length}function Xi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Zf={type:0,value:""},ed=/[a-zA-Z0-9_]/;function td(t){if(!t)return[[]];if(t==="/")return[[Zf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:ed.test(c)?g():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function nd(t,e,n){const r=Xf(td(t.path),n),s=te(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function rd(t,e){const n=[],r=new Map;e=to({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,g,m){const A=!m,P=Zi(h);P.aliasOf=m&&m.record;const B=to(e,h),x=[P];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const j of O)x.push(Zi(te({},P,{components:m?m.record.components:P.components,path:j,aliasOf:m?m.record:P})))}let k,D;for(const O of x){const{path:j}=O;if(g&&j[0]!=="/"){const se=g.record.path,Q=se[se.length-1]==="/"?"":"/";O.path=g.record.path+(j&&Q+j)}if(k=nd(O,g,B),m?m.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),A&&h.name&&!eo(k)&&o(h.name)),nc(k)&&c(k),P.children){const se=P.children;for(let Q=0;Q<se.length;Q++)i(se[Q],k,m&&m.children[Q])}m=m||k}return D?()=>{o(D)}:An}function o(h){if(Za(h)){const g=r.get(h);g&&(r.delete(h),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(h);g>-1&&(n.splice(g,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function c(h){const g=od(h,n);n.splice(g,0,h),h.record.name&&!eo(h)&&r.set(h.record.name,h)}function l(h,g){let m,A={},P,B;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw ln(1,{location:h});B=m.record.name,A=te(Qi(g.params,m.keys.filter(D=>!D.optional).concat(m.parent?m.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),h.params&&Qi(h.params,m.keys.map(D=>D.name))),P=m.stringify(A)}else if(h.path!=null)P=h.path,m=n.find(D=>D.re.test(P)),m&&(A=m.parse(P),B=m.record.name);else{if(m=g.name?r.get(g.name):n.find(D=>D.re.test(g.path)),!m)throw ln(1,{location:h,currentLocation:g});B=m.record.name,A=te({},g.params,h.params),P=m.stringify(A)}const x=[];let k=m;for(;k;)x.unshift(k.record),k=k.parent;return{name:B,path:P,params:A,matched:x,meta:id(x)}}t.forEach(h=>i(h));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:s}}function Qi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zi(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:sd(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function sd(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function eo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function id(t){return t.reduce((e,n)=>te(e,n.meta),{})}function to(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function od(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;tc(t,e[i])<0?r=i:n=i+1}const s=ad(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function ad(t){let e=t;for(;e=e.parent;)if(nc(e)&&tc(t,e)===0)return e}function nc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function cd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qa," "),o=i.indexOf("="),a=xn(o<0?i:i.slice(0,o)),c=o<0?null:xn(i.slice(o+1));if(a in e){let l=e[a];De(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function no(t){let e="";for(let n in t){const r=t[n];if(n=Lf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&ws(i)):[r&&ws(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ld(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=De(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ud=Symbol(""),ro=Symbol(""),$r=Symbol(""),rc=Symbol(""),Ts=Symbol("");function _n(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=g=>{g===!1?c(ln(4,{from:n,to:e})):g instanceof Error?c(g):qf(g)?c(ln(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),a())},f=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(f);t.length<3&&(h=h.then(l)),h.catch(g=>c(g))})}function rs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(za(c)){const f=(c.__vccOpts||c)[e];f&&i.push(gt(f,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const h=Tf(f)?f.default:f;o.mods[a]=f,o.components[a]=h;const m=(h.__vccOpts||h)[e];return m&&gt(m,n,r,o,a,s)()}))}}return i}function so(t){const e=We($r),n=We(rc),r=Pe(()=>{const c=Zt(t.to);return e.resolve(c)}),s=Pe(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const g=h.findIndex(cn.bind(null,f));if(g>-1)return g;const m=io(c[l-2]);return l>1&&io(f)===m&&h[h.length-1].path!==m?h.findIndex(cn.bind(null,c[l-2])):g}),i=Pe(()=>s.value>-1&&gd(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&Qa(n.params,r.value.params));function a(c={}){if(pd(c)){const l=e[Zt(t.replace)?"replace":"push"](Zt(t.to)).catch(An);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function fd(t){return t.length===1?t[0]:t}const dd=ma({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:so,setup(t,{slots:e}){const n=Dr(so(t)),{options:r}=We($r),s=Pe(()=>({[oo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[oo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&fd(e.default(n));return t.custom?i:Wa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),hd=dd;function pd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function gd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!De(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function io(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oo=(t,e,n)=>t??e??n,md=ma({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(Ts),s=Pe(()=>t.route||r.value),i=We(ro,0),o=Pe(()=>{let l=Zt(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=Pe(()=>s.value.matched[o.value]);nr(ro,Pe(()=>o.value+1)),nr(ud,a),nr(Ts,s);const c=Et();return rr(()=>[c.value,a.value,t.name],([l,f,h],[g,m,A])=>{f&&(f.instances[h]=l,m&&m!==f&&l&&l===g&&(f.leaveGuards.size||(f.leaveGuards=m.leaveGuards),f.updateGuards.size||(f.updateGuards=m.updateGuards))),l&&f&&(!m||!cn(f,m)||!g)&&(f.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=a.value,g=h&&h.components[f];if(!g)return ao(n.default,{Component:g,route:l});const m=h.props[f],A=m?m===!0?l.params:typeof m=="function"?m(l):m:null,B=Wa(g,te({},A,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return ao(n.default,{Component:B,route:l})||B}}});function ao(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _d=md;function vd(t){const e=rd(t.routes,t),n=t.parseQuery||cd,r=t.stringifyQuery||no,s=t.history,i=_n(),o=_n(),a=_n(),c=kl(ft);let l=ft;mn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ts.bind(null,v=>""+v),h=ts.bind(null,Ff),g=ts.bind(null,xn);function m(v,C){let T,N;return Za(v)?(T=e.getRecordMatcher(v),N=C):N=v,e.addRoute(N,T)}function A(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function P(){return e.getRoutes().map(v=>v.record)}function B(v){return!!e.getRecordMatcher(v)}function x(v,C){if(C=te({},C||c.value),typeof v=="string"){const p=ns(n,v,C.path),_=e.resolve({path:p.path},C),b=s.createHref(p.fullPath);return te(p,_,{params:g(_.params),hash:xn(p.hash),redirectedFrom:void 0,href:b})}let T;if(v.path!=null)T=te({},v,{path:ns(n,v.path,C.path).path});else{const p=te({},v.params);for(const _ in p)p[_]==null&&delete p[_];T=te({},v,{params:h(p)}),C.params=h(C.params)}const N=e.resolve(T,C),J=v.hash||"";N.params=f(g(N.params));const u=$f(r,te({},v,{hash:xf(J),path:N.path})),d=s.createHref(u);return te({fullPath:u,hash:J,query:r===no?ld(v.query):v.query||{}},N,{redirectedFrom:void 0,href:d})}function k(v){return typeof v=="string"?ns(n,v,c.value.path):te({},v)}function D(v,C){if(l!==v)return ln(8,{from:C,to:v})}function O(v){return Q(v)}function j(v){return O(te(k(v),{replace:!0}))}function se(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let N=typeof T=="function"?T(v):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=k(N):{path:N},N.params={}),te({query:v.query,hash:v.hash,params:N.path!=null?{}:v.params},N)}}function Q(v,C){const T=l=x(v),N=c.value,J=v.state,u=v.force,d=v.replace===!0,p=se(T);if(p)return Q(te(k(p),{state:typeof p=="object"?te({},J,p.state):J,force:u,replace:d}),C||T);const _=T;_.redirectedFrom=C;let b;return!u&&Hf(r,N,T)&&(b=ln(16,{to:_,from:N}),Le(N,N,!0,!1)),(b?Promise.resolve(b):Re(_,N)).catch(y=>Ye(y)?Ye(y,2)?y:ut(y):W(y,_,N)).then(y=>{if(y){if(Ye(y,2))return Q(te({replace:d},k(y.to),{state:typeof y.to=="object"?te({},J,y.to.state):J,force:u}),C||_)}else y=kt(_,N,!0,d,J);return lt(_,N,y),y})}function Se(v,C){const T=D(v,C);return T?Promise.reject(T):Promise.resolve()}function Te(v){const C=zt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function Re(v,C){let T;const[N,J,u]=yd(v,C);T=rs(N.reverse(),"beforeRouteLeave",v,C);for(const p of N)p.leaveGuards.forEach(_=>{T.push(gt(_,v,C))});const d=Se.bind(null,v,C);return T.push(d),Ce(T).then(()=>{T=[];for(const p of i.list())T.push(gt(p,v,C));return T.push(d),Ce(T)}).then(()=>{T=rs(J,"beforeRouteUpdate",v,C);for(const p of J)p.updateGuards.forEach(_=>{T.push(gt(_,v,C))});return T.push(d),Ce(T)}).then(()=>{T=[];for(const p of u)if(p.beforeEnter)if(De(p.beforeEnter))for(const _ of p.beforeEnter)T.push(gt(_,v,C));else T.push(gt(p.beforeEnter,v,C));return T.push(d),Ce(T)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),T=rs(u,"beforeRouteEnter",v,C,Te),T.push(d),Ce(T))).then(()=>{T=[];for(const p of o.list())T.push(gt(p,v,C));return T.push(d),Ce(T)}).catch(p=>Ye(p,8)?p:Promise.reject(p))}function lt(v,C,T){a.list().forEach(N=>Te(()=>N(v,C,T)))}function kt(v,C,T,N,J){const u=D(v,C);if(u)return u;const d=C===ft,p=mn?history.state:{};T&&(N||d?s.replace(v.fullPath,te({scroll:d&&p&&p.scroll},J)):s.push(v.fullPath,J)),c.value=v,Le(v,C,T,d),ut()}let xe;function dn(){xe||(xe=s.listen((v,C,T)=>{if(!Jn.listening)return;const N=x(v),J=se(N);if(J){Q(te(J,{replace:!0,force:!0}),N).catch(An);return}l=N;const u=c.value;mn&&zf(qi(u.fullPath,T.delta),Wf()),Re(N,u).catch(d=>Ye(d,12)?d:Ye(d,2)?(Q(te(k(d.to),{force:!0}),N).then(p=>{Ye(p,20)&&!T.delta&&T.type===yr.pop&&s.go(-1,!1)}).catch(An),Promise.reject()):(T.delta&&s.go(-T.delta,!1),W(d,N,u))).then(d=>{d=d||kt(N,u,!1),d&&(T.delta&&!Ye(d,8)?s.go(-T.delta,!1):T.type===yr.pop&&Ye(d,20)&&s.go(-1,!1)),lt(N,u,d)}).catch(An)}))}let Wt=_n(),oe=_n(),q;function W(v,C,T){ut(v);const N=oe.list();return N.length?N.forEach(J=>J(v,C,T)):console.error(v),Promise.reject(v)}function qe(){return q&&c.value!==ft?Promise.resolve():new Promise((v,C)=>{Wt.add([v,C])})}function ut(v){return q||(q=!v,dn(),Wt.list().forEach(([C,T])=>v?T(v):C()),Wt.reset()),v}function Le(v,C,T,N){const{scrollBehavior:J}=t;if(!mn||!J)return Promise.resolve();const u=!T&&Gf(qi(v.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return fa().then(()=>J(v,C,u)).then(d=>d&&Kf(d)).catch(d=>W(d,v,C))}const ge=v=>s.go(v);let Kt;const zt=new Set,Jn={currentRoute:c,listening:!0,addRoute:m,removeRoute:A,clearRoutes:e.clearRoutes,hasRoute:B,getRoutes:P,resolve:x,options:t,push:O,replace:j,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:qe,install(v){const C=this;v.component("RouterLink",hd),v.component("RouterView",_d),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(c)}),mn&&!Kt&&c.value===ft&&(Kt=!0,O(s.location).catch(J=>{}));const T={};for(const J in ft)Object.defineProperty(T,J,{get:()=>c.value[J],enumerable:!0});v.provide($r,C),v.provide(rc,oa(T)),v.provide(Ts,c);const N=v.unmount;zt.add(v),v.unmount=function(){zt.delete(v),zt.size<1&&(l=ft,xe&&xe(),xe=null,c.value=ft,Kt=!1,q=!1),N()}}};function Ce(v){return v.reduce((C,T)=>C.then(()=>Te(T)),Promise.resolve())}return Jn}function yd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>cn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>cn(l,c))||s.push(c))}return[n,r,s]}function Hr(){return We($r)}const bd={class:"home-container"},Ed={__name:"Home",setup(t){const e=Hr(),n=()=>{e.push("/login")},r=()=>{e.push("/register")};return(s,i)=>(St(),$t("div",bd,[i[0]||(i[0]=re("h1",{class:"title"},"Página de Inicio",-1)),i[1]||(i[1]=re("p",{class:"welcome-message"},"Bienvenido a la aplicación",-1)),re("div",{class:"buttons-container"},[re("button",{onClick:n,class:"button"},"Iniciar Sesión"),re("button",{onClick:r,class:"button"},"Registrarse")])]))}},Id=Zs(Ed,[["__scopeId","data-v-0ac06fcb"]]);var co={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ic={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let g=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(g=64)),r.push(n[f],n[h],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Sd;const g=i<<2|a>>4;if(r.push(g),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const A=l<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Td=function(t){const e=sc(t);return ic.encodeByteArray(e,!0)},oc=function(t){return Td(t).replace(/\./g,"")},ac=function(t){try{return ic.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd=()=>Rd().__FIREBASE_DEFAULTS__,Ad=()=>{if(typeof process>"u"||typeof co>"u")return;const t=co.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ac(t[1]);return e&&JSON.parse(e)},ti=()=>{try{return Cd()||Ad()||Pd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Od=t=>{var e,n;return(n=(e=ti())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cc=()=>{var t;return(t=ti())===null||t===void 0?void 0:t.config},lc=t=>{var e;return(e=ti())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Dd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Md(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ld(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ud(){try{return typeof indexedDB=="object"}catch{return!1}}function Fd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$d,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vn.prototype.create)}}class Vn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Hd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new At(s,a,r)}}function Hd(t,e){return t.replace(Bd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Bd=/\{\$([^}]+)}/g;function Vd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(lo(i)&&lo(o)){if(!br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function lo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jd(t,e){const n=new Wd(t,e);return n.subscribe.bind(n)}class Wd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Kd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ss),s.error===void 0&&(s.error=ss),s.complete===void 0&&(s.complete=ss);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ss(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class un{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qd(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gd(t){return t===xt?void 0:t}function qd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Yd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Xd=Y.INFO,Qd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Zd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Qd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uc{constructor(e){this.name=e,this._logLevel=Xd,this._logHandler=Zd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Yd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const eh=(t,e)=>e.some(n=>t instanceof n);let uo,fo;function th(){return uo||(uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nh(){return fo||(fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fc=new WeakMap,Rs=new WeakMap,dc=new WeakMap,is=new WeakMap,ni=new WeakMap;function rh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fc.set(n,t)}).catch(()=>{}),ni.set(e,t),e}function sh(t){if(Rs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rs.set(t,e)}let Cs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ih(t){Cs=t(Cs)}function oh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(os(this),e,...n);return dc.set(r,e.sort?e.sort():[e]),It(r)}:nh().includes(t)?function(...e){return t.apply(os(this),e),It(fc.get(this))}:function(...e){return It(t.apply(os(this),e))}}function ah(t){return typeof t=="function"?oh(t):(t instanceof IDBTransaction&&sh(t),eh(t,th())?new Proxy(t,Cs):t)}function It(t){if(t instanceof IDBRequest)return rh(t);if(is.has(t))return is.get(t);const e=ah(t);return e!==t&&(is.set(t,e),ni.set(e,t)),e}const os=t=>ni.get(t);function ch(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=It(o);return r&&o.addEventListener("upgradeneeded",c=>{r(It(o.result),c.oldVersion,c.newVersion,It(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const lh=["get","getKey","getAll","getAllKeys","count"],uh=["put","add","delete","clear"],as=new Map;function ho(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(as.get(e))return as.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=uh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return as.set(e,i),i}ih(t=>({...t,get:(e,n,r)=>ho(e,n)||t.get(e,n,r),has:(e,n)=>!!ho(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const As="@firebase/app",po="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new uc("@firebase/app"),hh="@firebase/app-compat",ph="@firebase/analytics-compat",gh="@firebase/analytics",mh="@firebase/app-check-compat",_h="@firebase/app-check",vh="@firebase/auth",yh="@firebase/auth-compat",bh="@firebase/database",Eh="@firebase/data-connect",Ih="@firebase/database-compat",wh="@firebase/functions",Sh="@firebase/functions-compat",Th="@firebase/installations",Rh="@firebase/installations-compat",Ch="@firebase/messaging",Ah="@firebase/messaging-compat",Ph="@firebase/performance",Oh="@firebase/performance-compat",kh="@firebase/remote-config",Nh="@firebase/remote-config-compat",Dh="@firebase/storage",Mh="@firebase/storage-compat",xh="@firebase/firestore",Lh="@firebase/vertexai",Uh="@firebase/firestore-compat",Fh="firebase",$h="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="[DEFAULT]",Hh={[As]:"fire-core",[hh]:"fire-core-compat",[gh]:"fire-analytics",[ph]:"fire-analytics-compat",[_h]:"fire-app-check",[mh]:"fire-app-check-compat",[vh]:"fire-auth",[yh]:"fire-auth-compat",[bh]:"fire-rtdb",[Eh]:"fire-data-connect",[Ih]:"fire-rtdb-compat",[wh]:"fire-fn",[Sh]:"fire-fn-compat",[Th]:"fire-iid",[Rh]:"fire-iid-compat",[Ch]:"fire-fcm",[Ah]:"fire-fcm-compat",[Ph]:"fire-perf",[Oh]:"fire-perf-compat",[kh]:"fire-rc",[Nh]:"fire-rc-compat",[Dh]:"fire-gcs",[Mh]:"fire-gcs-compat",[xh]:"fire-fst",[Uh]:"fire-fst-compat",[Lh]:"fire-vertex","fire-js":"fire-js",[Fh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map,Bh=new Map,Os=new Map;function go(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(Os.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;Os.set(e,t);for(const n of Er.values())go(n,t);for(const n of Bh.values())go(n,t);return!0}function hc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Oe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new Vn("app","Firebase",Vh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=$h;function pc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ps,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=cc()),!n)throw wt.create("no-options");const i=Er.get(s);if(i){if(br(n,i.options)&&br(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const o=new Jd(s);for(const c of Os.values())o.addComponent(c);const a=new jh(n,r,o);return Er.set(s,a),a}function Wh(t=Ps){const e=Er.get(t);if(!e&&t===Ps&&cc())return pc();if(!e)throw wt.create("no-app",{appName:t});return e}function nn(t,e,n){var r;let s=(r=Hh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(a.join(" "));return}Ln(new un(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="firebase-heartbeat-database",zh=1,Un="firebase-heartbeat-store";let cs=null;function gc(){return cs||(cs=ch(Kh,zh,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Un)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),cs}async function Gh(t){try{const n=(await gc()).transaction(Un),r=await n.objectStore(Un).get(mc(t));return await n.done,r}catch(e){if(e instanceof At)it.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(n.message)}}}async function mo(t,e){try{const r=(await gc()).transaction(Un,"readwrite");await r.objectStore(Un).put(e,mc(t)),await r.done}catch(n){if(n instanceof At)it.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});it.warn(r.message)}}}function mc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=1024,Jh=30;class Yh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_o();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Jh){const o=Zh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_o(),{heartbeatsToSend:r,unsentEntries:s}=Xh(this._heartbeatsCache.heartbeats),i=oc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return it.warn(n),""}}}function _o(){return new Date().toISOString().substring(0,10)}function Xh(t,e=qh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ud()?Fd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Gh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vo(t){return oc(JSON.stringify({version:2,heartbeats:t})).length}function Zh(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t){Ln(new un("platform-logger",e=>new fh(e),"PRIVATE")),Ln(new un("heartbeat",e=>new Yh(e),"PRIVATE")),nn(As,po,t),nn(As,po,"esm2017"),nn("fire-js","")}ep("");var tp="firebase",np="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(tp,np,"app");function ri(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function _c(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rp=_c,vc=new Vn("auth","Firebase",_c());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new uc("@firebase/auth");function sp(t,...e){Ir.logLevel<=Y.WARN&&Ir.warn(`Auth (${Wn}): ${t}`,...e)}function or(t,...e){Ir.logLevel<=Y.ERROR&&Ir.error(`Auth (${Wn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t,...e){throw si(t,...e)}function Ke(t,...e){return si(t,...e)}function yc(t,e,n){const r=Object.assign(Object.assign({},rp()),{[e]:n});return new Vn("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return yc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function si(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vc.create(t,...e)}function U(t,e,...n){if(!t)throw si(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw or(e),new Error(e)}function ot(t,e){t||tt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ip(){return yo()==="http:"||yo()==="https:"}function yo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ip()||Md()||"connection"in navigator)?navigator.onLine:!0}function ap(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Nd()||xd()}get(){return op()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new Kn(3e4,6e4);function Pt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ot(t,e,n,r,s={}){return Ec(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=jn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return Dd()||(l.referrerPolicy="no-referrer"),bc.fetch()(Ic(t,t.config.apiHost,n,a),l)})}async function Ec(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cp),e);try{const s=new fp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw yc(t,f,l);Me(t,f)}}catch(s){if(s instanceof At)throw s;Me(t,"network-request-failed",{message:String(s)})}}async function zn(t,e,n,r,s={}){const i=await Ot(t,e,n,r,s);return"mfaPendingCredential"in i&&Me(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ic(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ii(t.config,s):`${t.config.apiScheme}://${s}`}function up(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),lp.get())})}}function Zn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}function bo(t){return t!==void 0&&t.enterprise!==void 0}class dp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return up(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hp(t,e){return Ot(t,"GET","/v2/recaptchaConfig",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t,e){return Ot(t,"POST","/v1/accounts:delete",e)}async function wc(t,e){return Ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gp(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=oi(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pn(ls(s.auth_time)),issuedAtTime:Pn(ls(s.iat)),expirationTime:Pn(ls(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ls(t){return Number(t)*1e3}function oi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return or("JWT malformed, contained fewer than 3 sections"),null;try{const s=ac(n);return s?JSON.parse(s):(or("Failed to decode base64 JWT payload"),null)}catch(s){return or("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Eo(t){const e=oi(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&mp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pn(this.lastLoginAt),this.creationTime=Pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fn(t,wc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Sc(i.providerUserInfo):[],a=yp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ns(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function vp(t){const e=ct(t);await wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sc(t){return t.map(e=>{var{providerId:n}=e,r=ri(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(t,e){const n=await Ec(t,{},async()=>{const r=jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ic(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ep(t,e){return Ot(t,"POST","/v2/accounts:revokeToken",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=Eo(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await bp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rn,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _p(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ns(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gp(this,e)}reload(){return vp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await Fn(this,pp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:D,emailVerified:O,isAnonymous:j,providerData:se,stsTokenManager:Q}=n;U(D&&Q,e,"internal-error");const Se=rn.fromJSON(this.name,Q);U(typeof D=="string",e,"internal-error"),dt(h,e.name),dt(g,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof j=="boolean",e,"internal-error"),dt(m,e.name),dt(A,e.name),dt(P,e.name),dt(B,e.name),dt(x,e.name),dt(k,e.name);const Te=new nt({uid:D,auth:e,email:g,emailVerified:O,displayName:h,isAnonymous:j,photoURL:A,phoneNumber:m,tenantId:P,stsTokenManager:Se,createdAt:x,lastLoginAt:k});return se&&Array.isArray(se)&&(Te.providerData=se.map(Re=>Object.assign({},Re))),B&&(Te._redirectEventId=B),Te}static async _fromIdTokenResponse(e,n,r=!1){const s=new rn;s.updateFromServerResponse(n);const i=new nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new rn;a.updateFromIdToken(r);const c=new nt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ns(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map;function rt(t){ot(t instanceof Function,"Expected a class definition");let e=Io.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Io.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tc.type="NONE";const wo=Tc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e,n){return`firebase:${t}:${e}:${n}`}class sn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ar(this.userKey,s.apiKey,i),this.fullPersistenceKey=ar("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sn(rt(wo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rt(wo);const o=ar(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=nt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new sn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new sn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kc(e))return"Blackberry";if(Nc(e))return"Webos";if(Cc(e))return"Safari";if((e.includes("chrome/")||Ac(e))&&!e.includes("edge/"))return"Chrome";if(Oc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rc(t=pe()){return/firefox\//i.test(t)}function Cc(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ac(t=pe()){return/crios\//i.test(t)}function Pc(t=pe()){return/iemobile/i.test(t)}function Oc(t=pe()){return/android/i.test(t)}function kc(t=pe()){return/blackberry/i.test(t)}function Nc(t=pe()){return/webos/i.test(t)}function ai(t=pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ip(t=pe()){var e;return ai(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wp(){return Ld()&&document.documentMode===10}function Dc(t=pe()){return ai(t)||Oc(t)||Nc(t)||kc(t)||/windows phone/i.test(t)||Pc(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e=[]){let n;switch(t){case"Browser":n=So(pe());break;case"Worker":n=`${So(pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(t,e={}){return Ot(t,"GET","/v2/passwordPolicy",Pt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=6;class Cp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.beforeStateQueue=new Sp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wc(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Oe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ap()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(st(this));const n=e?ct(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Tp(this),n=new Cp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ep(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jt(t){return ct(t)}class To{constructor(e){this.auth=e,this.observer=null,this.addObserver=jd(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Br={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Pp(t){Br=t}function xc(t){return Br.loadJS(t)}function Op(){return Br.recaptchaEnterpriseScript}function kp(){return Br.gapiScript}function Np(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Dp{constructor(){this.enterprise=new Mp}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Mp{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const xp="recaptcha-enterprise",Lc="NO_RECAPTCHA";class Lp{constructor(e){this.type=xp,this.auth=jt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{hp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new dp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;bo(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Lc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Dp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&bo(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Op();c.length!==0&&(c+=a),xc(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ro(t,e,n,r=!1,s=!1){const i=new Lp(t);let o;if(s)o=Lc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ds(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ro(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ro(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t,e){const n=hc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(br(i,e??{}))return s;Me(s,"already-initialized")}return n.initialize({options:e})}function Fp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $p(t,e,n){const r=jt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Uc(e),{host:o,port:a}=Hp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Bp()}function Uc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hp(t){const e=Uc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Co(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Co(o)}}}function Co(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function Vp(t,e){return Ot(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(t,e){return zn(t,"POST","/v1/accounts:signInWithPassword",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wp(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}async function Kp(t,e){return zn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ci{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new $n(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $n(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ds(e,n,"signInWithPassword",jp);case"emailLink":return Wp(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ds(e,r,"signUpPassword",Vp);case"emailLink":return Kp(e,{idToken:n,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(t,e){return zn(t,"POST","/v1/accounts:signInWithIdp",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="http://localhost";class Ht extends ci{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ri(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ht(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return on(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,on(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,on(e,n)}buildRequest(){const e={requestUri:zp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qp(t){const e=yn(bn(t)).link,n=e?yn(bn(e)).deep_link_id:null,r=yn(bn(t)).deep_link_id;return(r?yn(bn(r)).link:null)||r||n||e||t}class li{constructor(e){var n,r,s,i,o,a;const c=yn(bn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Gp((s=c.mode)!==null&&s!==void 0?s:null);U(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qp(e);try{return new li(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(){this.providerId=fn.PROVIDER_ID}static credential(e,n){return $n._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=li.parseLink(n);return U(r,"argument-error"),$n._fromEmailAndCode(e,r.code,r.tenantId)}}fn.PROVIDER_ID="password";fn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends Gn{constructor(){super("facebook.com")}static credential(e){return Ht._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ht._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends Gn{constructor(){super("github.com")}static credential(e){return Ht._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Gn{constructor(){super("twitter.com")}static credential(e,n){return Ht._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jp(t,e){return zn(t,"POST","/v1/accounts:signUp",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nt._fromIdTokenResponse(e,r,s),o=Ao(r);return new Bt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ao(r);return new Bt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ao(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends At{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sr(e,n,r,s)}}function $c(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sr._fromErrorAndOperation(t,i,e,r):i})}async function Yp(t,e,n=!1){const r=await Fn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xp(t,e,n=!1){const{auth:r}=t;if(Oe(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await Fn(t,$c(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=oi(i.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Bt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hc(t,e,n=!1){if(Oe(t.app))return Promise.reject(st(t));const r="signIn",s=await $c(t,r,e),i=await Bt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Qp(t,e){return Hc(jt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bc(t){const e=jt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Zp(t,e,n){if(Oe(t.app))return Promise.reject(st(t));const r=jt(t),o=await Ds(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Jp).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Bc(t),c}),a=await Bt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function eg(t,e,n){return Oe(t.app)?Promise.reject(st(t)):Qp(ct(t),fn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bc(t),r})}function tg(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function ng(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function rg(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function sg(t){return ct(t).signOut()}const Tr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tr,"1"),this.storage.removeItem(Tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=1e3,og=10;class jc extends Vc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,og):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jc.type="LOCAL";const ag=jc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends Vc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wc.type="SESSION";const Kc=Wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Vr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await cg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ui("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return window}function ug(t){ze().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function fg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hg(){return zc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="firebaseLocalStorageDb",pg=1,Rr="firebaseLocalStorage",qc="fbase_key";class qn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jr(t,e){return t.transaction([Rr],e?"readwrite":"readonly").objectStore(Rr)}function gg(){const t=indexedDB.deleteDatabase(Gc);return new qn(t).toPromise()}function Ms(){const t=indexedDB.open(Gc,pg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rr,{keyPath:qc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rr)?e(r):(r.close(),await gg(),e(await Ms()))})})}async function Po(t,e,n){const r=jr(t,!0).put({[qc]:e,value:n});return new qn(r).toPromise()}async function mg(t,e){const n=jr(t,!1).get(e),r=await new qn(n).toPromise();return r===void 0?null:r.value}function Oo(t,e){const n=jr(t,!0).delete(e);return new qn(n).toPromise()}const _g=800,vg=3;class Jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ms(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vr._getInstance(hg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fg(),!this.activeServiceWorker)return;this.sender=new lg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ms();return await Po(e,Tr,"1"),await Oo(e,Tr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Po(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=jr(s,!1).getAll();return new qn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_g)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jc.type="LOCAL";const yg=Jc;new Kn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t,e){return e?rt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends ci{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,n){return on(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Eg(t){return Hc(t.auth,new fi(t),t.bypassAuthState)}function Ig(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Xp(n,new fi(t),t.bypassAuthState)}async function wg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),Yp(n,new fi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Eg;case"linkViaPopup":case"linkViaRedirect":return wg;case"reauthViaPopup":case"reauthViaRedirect":return Ig;default:Me(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=new Kn(2e3,1e4);class Yt extends Yc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=ui();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sg.get())};e()}}Yt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="pendingRedirect",cr=new Map;class Rg extends Yc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cr.get(this.auth._key());if(!e){try{const r=await Cg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cr.set(this.auth._key(),e)}return this.bypassAuthState||cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Cg(t,e){const n=Og(e),r=Pg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Ag(t,e){cr.set(t._key(),e)}function Pg(t){return rt(t._redirectPersistence)}function Og(t){return ar(Tg,t.config.apiKey,t.name)}async function kg(t,e,n=!1){if(Oe(t.app))return Promise.reject(st(t));const r=jt(t),s=bg(r,e),o=await new Rg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=10*60*1e3;class Dg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ng&&this.cachedEventUids.clear(),this.cachedEventUids.has(ko(e))}saveEventToCache(e){this.cachedEventUids.add(ko(e)),this.lastProcessedEventTime=Date.now()}}function ko(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xg(t,e={}){return Ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ug=/^https?/;async function Fg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xg(t);for(const n of e)try{if($g(n))return}catch{}Me(t,"unauthorized-domain")}function $g(t){const e=ks(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ug.test(n))return!1;if(Lg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Kn(3e4,6e4);function No(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bg(t){return new Promise((e,n)=>{var r,s,i;function o(){No(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{No(),n(Ke(t,"network-request-failed"))},timeout:Hg.get()})}if(!((s=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const a=Np("iframefcb");return ze()[a]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},xc(`${kp()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw lr=null,e})}let lr=null;function Vg(t){return lr=lr||Bg(t),lr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Kn(5e3,15e3),Wg="__/auth/iframe",Kg="emulator/auth/iframe",zg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qg(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ii(e,Kg):`https://${t.config.authDomain}/${Wg}`,r={apiKey:e.apiKey,appName:t.name,v:Wn},s=Gg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${jn(r).slice(1)}`}async function Jg(t){const e=await Vg(t),n=ze().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:qg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),a=ze().setTimeout(()=>{i(o)},jg.get());function c(){ze().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xg=500,Qg=600,Zg="_blank",em="http://localhost";class Do{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tm(t,e,n,r=Xg,s=Qg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Yg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=pe().toLowerCase();n&&(a=Ac(l)?Zg:n),Rc(l)&&(e=e||em,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[m,A])=>`${g}${m}=${A},`,"");if(Ip(l)&&a!=="_self")return nm(e||"",a),new Do(null);const h=window.open(e||"",a,f);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Do(h)}function nm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="__/auth/handler",sm="emulator/auth/handler",im=encodeURIComponent("fac");async function Mo(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wn,eventId:s};if(e instanceof Fc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Gn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${im}=${encodeURIComponent(c)}`:"";return`${om(t)}?${jn(a).slice(1)}${l}`}function om({config:t}){return t.emulator?ii(t,sm):`https://${t.authDomain}/${rm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="webStorageSupport";class am{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kc,this._completeRedirectFn=kg,this._overrideRedirectResult=Ag}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Mo(e,n,r,ks(),s);return tm(e,o,ui())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Mo(e,n,r,ks(),s);return ug(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Jg(e),r=new Dg(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(us,{type:us},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[us];o!==void 0&&n(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Fg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dc()||Cc()||ai()}}const cm=am;var xo="@firebase/auth",Lo="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fm(t){Ln(new un("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mc(t)},l=new Ap(r,s,i,c);return Fp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new un("auth-internal",e=>{const n=jt(e.getProvider("auth").getImmediate());return(r=>new lm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(xo,Lo,um(t)),nn(xo,Lo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=5*60,hm=lc("authIdTokenMaxAge")||dm;let Uo=null;const pm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hm)return;const s=n==null?void 0:n.token;Uo!==s&&(Uo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function di(t=Wh()){const e=hc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Up(t,{popupRedirectResolver:cm,persistence:[yg,ag,Kc]}),r=lc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pm(i.toString());ng(n,o,()=>o(n.currentUser)),tg(n,a=>o(a))}}const s=Od("auth");return s&&$p(n,`http://${s}`),n}function gm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Pp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fm("Browser");const mm={apiKey:"AIzaSyAjF9F43elpUZv4ye91YGAP291DbEH0yQc",authDomain:"vue-firebase-8bf15.firebaseapp.com",projectId:"vue-firebase-8bf15",storageBucket:"vue-firebase-8bf15.firebasestorage.app",messagingSenderId:"455654427683",appId:"1:455654427683:web:33c572e15a4733c3a1b596",measurementId:"G-XWKPG99BMM"},_m=pc(mm),hi=di(_m),vm={class:"login-container"},ym={key:0},bm={__name:"Login",setup(t){const e=Et(""),n=Et(""),r=Hr(),s=Et(""),i=async()=>{try{await eg(hi,e.value,n.value),r.push("/dashboard")}catch(a){s.value=a.message}},o=()=>{r.push("/")};return(a,c)=>(St(),$t("div",vm,[c[2]||(c[2]=re("h2",null,"Iniciar Sesión",-1)),hr(re("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l),type:"email",placeholder:"Correo"},null,512),[[vr,e.value]]),hr(re("input",{"onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l),type:"password",placeholder:"Contraseña"},null,512),[[vr,n.value]]),re("div",{class:"buttons"},[re("button",{onClick:i},"Iniciar Sesión"),re("button",{onClick:o},"Regresar")]),s.value?(St(),$t("p",ym,Nr(s.value),1)):Ba("",!0)]))}},Em={class:"register-container"},Im={key:0},wm={__name:"Register",setup(t){const e=Et(""),n=Et(""),r=Hr(),s=Et(""),i=async()=>{try{await Zp(hi,e.value,n.value),r.push("/dashboard")}catch(a){s.value=a.message}},o=()=>{r.push("/")};return(a,c)=>(St(),$t("div",Em,[c[2]||(c[2]=re("h2",null,"Registro",-1)),hr(re("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l),type:"email",placeholder:"Correo"},null,512),[[vr,e.value]]),hr(re("input",{"onUpdate:modelValue":c[1]||(c[1]=l=>n.value=l),type:"password",placeholder:"Contraseña"},null,512),[[vr,n.value]]),re("div",{class:"buttons"},[re("button",{onClick:i},"Registrarse"),re("button",{onClick:o},"Regresar")]),s.value?(St(),$t("p",Im,Nr(s.value),1)):Ba("",!0)]))}},Sm={class:"dashboard-container"},Tm={class:"user-info"},Rm={__name:"Dashboard",setup(t){const e=Hr(),n=Et({name:"Usuario"}),r=()=>{const s=di();sg(s).then(()=>{e.push("/login")}).catch(i=>{console.error("Error al cerrar sesión:",i)})};return(s,i)=>(St(),$t("div",Sm,[i[0]||(i[0]=re("h1",{class:"title"},"Bienvenido al Dashboard",-1)),re("p",Tm,"¡Hola, "+Nr(n.value.name)+"! Estás autenticado.",1),re("button",{onClick:r,class:"logout-button"},"Cerrar Sesión")]))}},Cm=Zs(Rm,[["__scopeId","data-v-5552e044"]]),Am=[{path:"/",component:Id},{path:"/login",component:bm},{path:"/register",component:wm},{path:"/dashboard",component:Cm,meta:{requiresAuth:!0}}],Qc=vd({history:createWebHashHistory(),routes:Am});Qc.beforeEach((t,e,n)=>{const s=di().currentUser;t.meta.requiresAuth&&!s?n("/login"):n()});let er;rg(hi,()=>{er||(er=yf(Sf),er.use(Qc),er.mount("#app"))});
