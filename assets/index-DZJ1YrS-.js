(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Us(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Q={},Qt=[],je=()=>{},rl=()=>!1,Ar=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fs=t=>t.startsWith("onUpdate:"),ue=Object.assign,Hs=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sl=Object.prototype.hasOwnProperty,G=(t,e)=>sl.call(t,e),$=Array.isArray,Zt=t=>Pr(t)==="[object Map]",Bo=t=>Pr(t)==="[object Set]",B=t=>typeof t=="function",ie=t=>typeof t=="string",Tt=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",Vo=t=>(ne(t)||B(t))&&B(t.then)&&B(t.catch),jo=Object.prototype.toString,Pr=t=>jo.call(t),il=t=>Pr(t).slice(8,-1),Wo=t=>Pr(t)==="[object Object]",$s=t=>ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,En=Us(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ol=/-(\w)/g,Ae=Or(t=>t.replace(ol,(e,n)=>n?n.toUpperCase():"")),al=/\B([A-Z])/g,Vt=Or(t=>t.replace(al,"-$1").toLowerCase()),kr=Or(t=>t.charAt(0).toUpperCase()+t.slice(1)),zr=Or(t=>t?`on${kr(t)}`:""),bt=(t,e)=>!Object.is(t,e),rr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ko=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},hs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let vi;const Nr=()=>vi||(vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bs(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ie(r)?fl(r):Bs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ie(t)||ne(t))return t}const cl=/;(?![^(]*\))/g,ll=/:([^]+)/,ul=/\/\*[^]*?\*\//g;function fl(t){const e={};return t.replace(ul,"").split(cl).forEach(n=>{if(n){const r=n.split(ll);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Vs(t){let e="";if(ie(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Vs(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hl=Us(dl);function zo(t){return!!t||t===""}const Go=t=>!!(t&&t.__v_isRef===!0),Dr=t=>ie(t)?t:t==null?"":$(t)||ne(t)&&(t.toString===jo||!B(t.toString))?Go(t)?Dr(t.value):JSON.stringify(t,qo,2):String(t),qo=(t,e)=>Go(e)?qo(t,e.value):Zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Gr(r,i)+" =>"]=s,n),{})}:Bo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Gr(n))}:Tt(e)?Gr(e):ne(e)&&!$(e)&&!Wo(e)?String(e):e,Gr=(t,e="")=>{var n;return Tt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class pl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function gl(){return Ee}let te;const qr=new WeakSet;class Jo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&Ee.active&&Ee.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qr.has(this)&&(qr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yi(this),Qo(this);const e=te,n=ke;te=this,ke=!0;try{return this.fn()}finally{Zo(this),te=e,ke=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ks(e);this.deps=this.depsTail=void 0,yi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ps(this)&&this.run()}get dirty(){return ps(this)}}let Yo=0,In,wn;function Xo(t,e=!1){if(t.flags|=8,e){t.next=wn,wn=t;return}t.next=In,In=t}function js(){Yo++}function Ws(){if(--Yo>0)return;if(wn){let e=wn;for(wn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;In;){let e=In;for(In=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Qo(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zo(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ks(r),ml(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ps(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ea(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ea(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===kn))return;t.globalVersion=kn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ps(t)){t.flags&=-3;return}const n=te,r=ke;te=t,ke=!0;try{Qo(t);const s=t.fn(t._value);(e.version===0||bt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{te=n,ke=r,Zo(t),t.flags&=-3}}function Ks(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ks(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ml(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ke=!0;const ta=[];function Rt(){ta.push(ke),ke=!1}function Ct(){const t=ta.pop();ke=t===void 0?!0:t}function yi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=te;te=void 0;try{e()}finally{te=n}}}let kn=0;class _l{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class zs{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!te||!ke||te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==te)n=this.activeLink=new _l(te,this),te.deps?(n.prevDep=te.depsTail,te.depsTail.nextDep=n,te.depsTail=n):te.deps=te.depsTail=n,na(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=te.depsTail,n.nextDep=void 0,te.depsTail.nextDep=n,te.depsTail=n,te.deps===n&&(te.deps=r)}return n}trigger(e){this.version++,kn++,this.notify(e)}notify(e){js();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ws()}}}function na(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)na(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const gs=new WeakMap,Lt=Symbol(""),ms=Symbol(""),Nn=Symbol("");function ae(t,e,n){if(ke&&te){let r=gs.get(t);r||gs.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new zs),s.map=r,s.key=n),s.track()}}function Ze(t,e,n,r,s,i){const o=gs.get(t);if(!o){kn++;return}const c=a=>{a&&a.trigger()};if(js(),e==="clear")o.forEach(c);else{const a=$(t),l=a&&$s(n);if(a&&n==="length"){const u=Number(r);o.forEach((h,g)=>{(g==="length"||g===Nn||!Tt(g)&&g>=u)&&c(h)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),l&&c(o.get(Nn)),e){case"add":a?l&&c(o.get("length")):(c(o.get(Lt)),Zt(t)&&c(o.get(ms)));break;case"delete":a||(c(o.get(Lt)),Zt(t)&&c(o.get(ms)));break;case"set":Zt(t)&&c(o.get(Lt));break}}Ws()}function Gt(t){const e=z(t);return e===t?e:(ae(e,"iterate",Nn),Ne(t)?e:e.map(de))}function Gs(t){return ae(t=z(t),"iterate",Nn),t}const vl={__proto__:null,[Symbol.iterator](){return Jr(this,Symbol.iterator,de)},concat(...t){return Gt(this).concat(...t.map(e=>$(e)?Gt(e):e))},entries(){return Jr(this,"entries",t=>(t[1]=de(t[1]),t))},every(t,e){return Je(this,"every",t,e,void 0,arguments)},filter(t,e){return Je(this,"filter",t,e,n=>n.map(de),arguments)},find(t,e){return Je(this,"find",t,e,de,arguments)},findIndex(t,e){return Je(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Je(this,"findLast",t,e,de,arguments)},findLastIndex(t,e){return Je(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Je(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yr(this,"includes",t)},indexOf(...t){return Yr(this,"indexOf",t)},join(t){return Gt(this).join(t)},lastIndexOf(...t){return Yr(this,"lastIndexOf",t)},map(t,e){return Je(this,"map",t,e,void 0,arguments)},pop(){return gn(this,"pop")},push(...t){return gn(this,"push",t)},reduce(t,...e){return bi(this,"reduce",t,e)},reduceRight(t,...e){return bi(this,"reduceRight",t,e)},shift(){return gn(this,"shift")},some(t,e){return Je(this,"some",t,e,void 0,arguments)},splice(...t){return gn(this,"splice",t)},toReversed(){return Gt(this).toReversed()},toSorted(t){return Gt(this).toSorted(t)},toSpliced(...t){return Gt(this).toSpliced(...t)},unshift(...t){return gn(this,"unshift",t)},values(){return Jr(this,"values",de)}};function Jr(t,e,n){const r=Gs(t),s=r[e]();return r!==t&&!Ne(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const yl=Array.prototype;function Je(t,e,n,r,s,i){const o=Gs(t),c=o!==t&&!Ne(t),a=o[e];if(a!==yl[e]){const h=a.apply(t,i);return c?de(h):h}let l=n;o!==t&&(c?l=function(h,g){return n.call(this,de(h),g,t)}:n.length>2&&(l=function(h,g){return n.call(this,h,g,t)}));const u=a.call(o,l,r);return c&&s?s(u):u}function bi(t,e,n,r){const s=Gs(t);let i=n;return s!==t&&(Ne(t)?n.length>3&&(i=function(o,c,a){return n.call(this,o,c,a,t)}):i=function(o,c,a){return n.call(this,o,de(c),a,t)}),s[e](i,...r)}function Yr(t,e,n){const r=z(t);ae(r,"iterate",Nn);const s=r[e](...n);return(s===-1||s===!1)&&Ys(n[0])?(n[0]=z(n[0]),r[e](...n)):s}function gn(t,e,n=[]){Rt(),js();const r=z(t)[e].apply(t,n);return Ws(),Ct(),r}const bl=Us("__proto__,__v_isRef,__isVue"),ra=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tt));function El(t){Tt(t)||(t=String(t));const e=z(this);return ae(e,"has",t),e.hasOwnProperty(t)}class sa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?kl:ca:i?aa:oa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){let a;if(o&&(a=vl[n]))return a;if(n==="hasOwnProperty")return El}const c=Reflect.get(e,n,le(e)?e:r);return(Tt(n)?ra.has(n):bl(n))||(s||ae(e,"get",n),i)?c:le(c)?o&&$s(n)?c:c.value:ne(c)?s?ua(c):Mr(c):c}}class ia extends sa{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Ut(i);if(!Ne(r)&&!Ut(r)&&(i=z(i),r=z(r)),!$(e)&&le(i)&&!le(r))return a?!1:(i.value=r,!0)}const o=$(e)&&$s(n)?Number(n)<e.length:G(e,n),c=Reflect.set(e,n,r,le(e)?e:s);return e===z(s)&&(o?bt(r,i)&&Ze(e,"set",n,r):Ze(e,"add",n,r)),c}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ze(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Tt(n)||!ra.has(n))&&ae(e,"has",n),r}ownKeys(e){return ae(e,"iterate",$(e)?"length":Lt),Reflect.ownKeys(e)}}class Il extends sa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const wl=new ia,Sl=new Il,Tl=new ia(!0);const _s=t=>t,Qn=t=>Reflect.getPrototypeOf(t);function Rl(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=Zt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?_s:e?vs:de;return!e&&ae(i,"iterate",a?ms:Lt),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cl(t,e){const n={get(s){const i=this.__v_raw,o=z(i),c=z(s);t||(bt(s,c)&&ae(o,"get",s),ae(o,"get",c));const{has:a}=Qn(o),l=e?_s:t?vs:de;if(a.call(o,s))return l(i.get(s));if(a.call(o,c))return l(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ae(z(s),"iterate",Lt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=z(i),c=z(s);return t||(bt(s,c)&&ae(o,"has",s),ae(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,a=z(c),l=e?_s:t?vs:de;return!t&&ae(a,"iterate",Lt),c.forEach((u,h)=>s.call(i,l(u),l(h),o))}};return ue(n,t?{add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear")}:{add(s){!e&&!Ne(s)&&!Ut(s)&&(s=z(s));const i=z(this);return Qn(i).has.call(i,s)||(i.add(s),Ze(i,"add",s,s)),this},set(s,i){!e&&!Ne(i)&&!Ut(i)&&(i=z(i));const o=z(this),{has:c,get:a}=Qn(o);let l=c.call(o,s);l||(s=z(s),l=c.call(o,s));const u=a.call(o,s);return o.set(s,i),l?bt(i,u)&&Ze(o,"set",s,i):Ze(o,"add",s,i),this},delete(s){const i=z(this),{has:o,get:c}=Qn(i);let a=o.call(i,s);a||(s=z(s),a=o.call(i,s)),c&&c.call(i,s);const l=i.delete(s);return a&&Ze(i,"delete",s,void 0),l},clear(){const s=z(this),i=s.size!==0,o=s.clear();return i&&Ze(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Rl(s,t,e)}),n}function qs(t,e){const n=Cl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const Al={get:qs(!1,!1)},Pl={get:qs(!1,!0)},Ol={get:qs(!0,!1)};const oa=new WeakMap,aa=new WeakMap,ca=new WeakMap,kl=new WeakMap;function Nl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dl(t){return t.__v_skip||!Object.isExtensible(t)?0:Nl(il(t))}function Mr(t){return Ut(t)?t:Js(t,!1,wl,Al,oa)}function la(t){return Js(t,!1,Tl,Pl,aa)}function ua(t){return Js(t,!0,Sl,Ol,ca)}function Js(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Dl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Sn(t){return Ut(t)?Sn(t.__v_raw):!!(t&&t.__v_isReactive)}function Ut(t){return!!(t&&t.__v_isReadonly)}function Ne(t){return!!(t&&t.__v_isShallow)}function Ys(t){return t?!!t.__v_raw:!1}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Ml(t){return!G(t,"__v_skip")&&Object.isExtensible(t)&&Ko(t,"__v_skip",!0),t}const de=t=>ne(t)?Mr(t):t,vs=t=>ne(t)?ua(t):t;function le(t){return t?t.__v_isRef===!0:!1}function Et(t){return fa(t,!1)}function xl(t){return fa(t,!0)}function fa(t,e){return le(t)?t:new Ll(t,e)}class Ll{constructor(e,n){this.dep=new zs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:z(e),this._value=n?e:de(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ne(e)||Ut(e);e=r?e:z(e),bt(e,n)&&(this._rawValue=e,this._value=r?e:de(e),this.dep.trigger())}}function en(t){return le(t)?t.value:t}const Ul={get:(t,e,n)=>e==="__v_raw"?t:en(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function da(t){return Sn(t)?t:new Proxy(t,Ul)}class Fl{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new zs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&te!==this)return Xo(this,!0),!0}get value(){const e=this.dep.track();return ea(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hl(t,e,n=!1){let r,s;return B(t)?r=t:(r=t.get,s=t.set),new Fl(r,s,n)}const er={},dr=new WeakMap;let Mt;function $l(t,e=!1,n=Mt){if(n){let r=dr.get(n);r||dr.set(n,r=[]),r.push(t)}}function Bl(t,e,n=Q){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:a}=n,l=O=>s?O:Ne(O)||s===!1||s===0?et(O,1):et(O);let u,h,g,m,R=!1,P=!1;if(le(t)?(h=()=>t.value,R=Ne(t)):Sn(t)?(h=()=>l(t),R=!0):$(t)?(P=!0,R=t.some(O=>Sn(O)||Ne(O)),h=()=>t.map(O=>{if(le(O))return O.value;if(Sn(O))return l(O);if(B(O))return a?a(O,2):O()})):B(t)?e?h=a?()=>a(t,2):t:h=()=>{if(g){Rt();try{g()}finally{Ct()}}const O=Mt;Mt=u;try{return a?a(t,3,[m]):t(m)}finally{Mt=O}}:h=je,e&&s){const O=h,j=s===!0?1/0:s;h=()=>et(O(),j)}const H=gl(),M=()=>{u.stop(),H&&H.active&&Hs(H.effects,u)};if(i&&e){const O=e;e=(...j)=>{O(...j),M()}}let k=P?new Array(t.length).fill(er):er;const D=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const j=u.run();if(s||R||(P?j.some((se,Z)=>bt(se,k[Z])):bt(j,k))){g&&g();const se=Mt;Mt=u;try{const Z=[j,k===er?void 0:P&&k[0]===er?[]:k,m];a?a(e,3,Z):e(...Z),k=j}finally{Mt=se}}}else u.run()};return c&&c(D),u=new Jo(h),u.scheduler=o?()=>o(D,!1):D,m=O=>$l(O,!1,u),g=u.onStop=()=>{const O=dr.get(u);if(O){if(a)a(O,4);else for(const j of O)j();dr.delete(u)}},e?r?D(!0):k=u.run():o?o(D.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function et(t,e=1/0,n){if(e<=0||!ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,le(t))et(t.value,e,n);else if($(t))for(let r=0;r<t.length;r++)et(t[r],e,n);else if(Bo(t)||Zt(t))t.forEach(r=>{et(r,e,n)});else if(Wo(t)){for(const r in t)et(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&et(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vn(t,e,n,r){try{return r?t(...r):t()}catch(s){xr(s,e,n)}}function Ge(t,e,n,r){if(B(t)){const s=Vn(t,e,n,r);return s&&Vo(s)&&s.catch(i=>{xr(i,e,n)}),s}if($(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ge(t[i],e,n,r));return s}}function xr(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Q;if(e){let c=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const u=c.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,a,l)===!1)return}c=c.parent}if(i){Rt(),Vn(i,null,10,[t,a,l]),Ct();return}}Vl(t,n,s,r,o)}function Vl(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const he=[];let Be=-1;const tn=[];let ht=null,qt=0;const ha=Promise.resolve();let hr=null;function pa(t){const e=hr||ha;return t?e.then(this?t.bind(this):t):e}function jl(t){let e=Be+1,n=he.length;for(;e<n;){const r=e+n>>>1,s=he[r],i=Dn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Xs(t){if(!(t.flags&1)){const e=Dn(t),n=he[he.length-1];!n||!(t.flags&2)&&e>=Dn(n)?he.push(t):he.splice(jl(e),0,t),t.flags|=1,ga()}}function ga(){hr||(hr=ha.then(_a))}function Wl(t){$(t)?tn.push(...t):ht&&t.id===-1?ht.splice(qt+1,0,t):t.flags&1||(tn.push(t),t.flags|=1),ga()}function Ei(t,e,n=Be+1){for(;n<he.length;n++){const r=he[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;he.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ma(t){if(tn.length){const e=[...new Set(tn)].sort((n,r)=>Dn(n)-Dn(r));if(tn.length=0,ht){ht.push(...e);return}for(ht=e,qt=0;qt<ht.length;qt++){const n=ht[qt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ht=null,qt=0}}const Dn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _a(t){try{for(Be=0;Be<he.length;Be++){const e=he[Be];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Be<he.length;Be++){const e=he[Be];e&&(e.flags&=-2)}Be=-1,he.length=0,ma(),hr=null,(he.length||tn.length)&&_a()}}let Ie=null,va=null;function pr(t){const e=Ie;return Ie=t,va=t&&t.type.__scopeId||null,e}function Kl(t,e=Ie,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ki(-1);const i=pr(e);let o;try{o=t(...s)}finally{pr(i),r._d&&ki(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gr(t,e){if(Ie===null)return t;const n=Hr(Ie),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Q]=e[s];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&et(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Nt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Rt(),Ge(a,n,8,[t.el,c,t,e]),Ct())}}const zl=Symbol("_vte"),Gl=t=>t.__isTeleport;function Qs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Qs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function ya(t,e){return B(t)?ue({name:t.name},e,{setup:t}):t}function ba(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function mr(t,e,n,r,s=!1){if($(t)){t.forEach((R,P)=>mr(R,e&&($(e)?e[P]:e),n,r,s));return}if(Tn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&mr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Hr(r.component):r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===Q?c.refs={}:c.refs,h=c.setupState,g=z(h),m=h===Q?()=>!1:R=>G(g,R);if(l!=null&&l!==a&&(ie(l)?(u[l]=null,m(l)&&(h[l]=null)):le(l)&&(l.value=null)),B(a))Vn(a,c,12,[o,u]);else{const R=ie(a),P=le(a);if(R||P){const H=()=>{if(t.f){const M=R?m(a)?h[a]:u[a]:a.value;s?$(M)&&Hs(M,i):$(M)?M.includes(i)||M.push(i):R?(u[a]=[i],m(a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else R?(u[a]=o,m(a)&&(h[a]=o)):P&&(a.value=o,t.k&&(u[t.k]=o))};o?(H.id=-1,be(H,n)):H()}}}Nr().requestIdleCallback;Nr().cancelIdleCallback;const Tn=t=>!!t.type.__asyncLoader,Ea=t=>t.type.__isKeepAlive;function ql(t,e){Ia(t,"a",e)}function Jl(t,e){Ia(t,"da",e)}function Ia(t,e,n=ce){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Lr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ea(s.parent.vnode)&&Yl(r,e,n,s),s=s.parent}}function Yl(t,e,n,r){const s=Lr(e,t,r,!0);wa(()=>{Hs(r[e],s)},n)}function Lr(t,e,n=ce,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Rt();const c=jn(n),a=Ge(e,n,t,o);return c(),Ct(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=ce)=>{(!xn||t==="sp")&&Lr(t,(...r)=>e(...r),n)},Xl=at("bm"),Ql=at("m"),Zl=at("bu"),eu=at("u"),tu=at("bum"),wa=at("um"),nu=at("sp"),ru=at("rtg"),su=at("rtc");function iu(t,e=ce){Lr("ec",t,e)}const ou="components";function au(t,e){return lu(ou,t,!0,e)||t}const cu=Symbol.for("v-ndc");function lu(t,e,n=!0,r=!1){const s=Ie||ce;if(s){const i=s.type;{const c=Xu(i,!1);if(c&&(c===e||c===Ae(e)||c===kr(Ae(e))))return i}const o=Ii(s[t]||i[t],e)||Ii(s.appContext[t],e);return!o&&r?i:o}}function Ii(t,e){return t&&(t[e]||t[Ae(e)]||t[kr(Ae(e))])}const ys=t=>t?Ka(t)?Hr(t):ys(t.parent):null,Rn=ue(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ys(t.parent),$root:t=>ys(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ta(t),$forceUpdate:t=>t.f||(t.f=()=>{Xs(t.update)}),$nextTick:t=>t.n||(t.n=pa.bind(t.proxy)),$watch:t=>Ou.bind(t)}),Xr=(t,e)=>t!==Q&&!t.__isScriptSetup&&G(t,e),uu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Xr(r,e))return o[e]=1,r[e];if(s!==Q&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==Q&&G(n,e))return o[e]=4,n[e];bs&&(o[e]=0)}}const u=Rn[e];let h,g;if(u)return e==="$attrs"&&ae(t.attrs,"get",""),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&G(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,G(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Xr(s,e)?(s[e]=n,!0):r!==Q&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&G(t,o)||Xr(e,o)||(c=i[0])&&G(c,o)||G(r,o)||G(Rn,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wi(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let bs=!0;function fu(t){const e=Ta(t),n=t.proxy,r=t.ctx;bs=!1,e.beforeCreate&&Si(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:m,updated:R,activated:P,deactivated:H,beforeDestroy:M,beforeUnmount:k,destroyed:D,unmounted:O,render:j,renderTracked:se,renderTriggered:Z,errorCaptured:Se,serverPrefetch:Te,expose:Re,inheritAttrs:lt,components:kt,directives:xe,filters:hn}=e;if(l&&du(l,r,null),o)for(const J in o){const W=o[J];B(W)&&(r[J]=W.bind(n))}if(s){const J=s.call(n,n);ne(J)&&(t.data=Mr(J))}if(bs=!0,i)for(const J in i){const W=i[J],qe=B(W)?W.bind(n,n):B(W.get)?W.get.bind(n,n):je,ut=!B(W)&&B(W.set)?W.set.bind(n):je,Le=Pe({get:qe,set:ut});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Le.value,set:ge=>Le.value=ge})}if(c)for(const J in c)Sa(c[J],r,n,J);if(a){const J=B(a)?a.call(n):a;Reflect.ownKeys(J).forEach(W=>{sr(W,J[W])})}u&&Si(u,t,"c");function oe(J,W){$(W)?W.forEach(qe=>J(qe.bind(n))):W&&J(W.bind(n))}if(oe(Xl,h),oe(Ql,g),oe(Zl,m),oe(eu,R),oe(ql,P),oe(Jl,H),oe(iu,Se),oe(su,se),oe(ru,Z),oe(tu,k),oe(wa,O),oe(nu,Te),$(Re))if(Re.length){const J=t.exposed||(t.exposed={});Re.forEach(W=>{Object.defineProperty(J,W,{get:()=>n[W],set:qe=>n[W]=qe})})}else t.exposed||(t.exposed={});j&&t.render===je&&(t.render=j),lt!=null&&(t.inheritAttrs=lt),kt&&(t.components=kt),xe&&(t.directives=xe),Te&&ba(t)}function du(t,e,n=je){$(t)&&(t=Es(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Si(t,e,n){Ge($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sa(t,e,n,r){let s=r.includes(".")?Ha(n,r):()=>n[r];if(ie(t)){const i=e[t];B(i)&&ir(s,i)}else if(B(t))ir(s,t.bind(n));else if(ne(t))if($(t))t.forEach(i=>Sa(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&ir(s,i,t)}}function Ta(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>_r(a,l,o,!0)),_r(a,e,o)),ne(e)&&i.set(e,a),a}function _r(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&_r(t,i,n,!0),s&&s.forEach(o=>_r(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=hu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const hu={data:Ti,props:Ri,emits:Ri,methods:vn,computed:vn,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:vn,directives:vn,watch:gu,provide:Ti,inject:pu};function Ti(t,e){return e?t?function(){return ue(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function pu(t,e){return vn(Es(t),Es(e))}function Es(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function vn(t,e){return t?ue(Object.create(null),t,e):e}function Ri(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ue(Object.create(null),wi(t),wi(e??{})):e}function gu(t,e){if(!t)return e;if(!e)return t;const n=ue(Object.create(null),t);for(const r in e)n[r]=fe(t[r],e[r]);return n}function Ra(){return{app:null,config:{isNativeTag:rl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mu=0;function _u(t,e){return function(r,s=null){B(r)||(r=ue({},r)),s!=null&&!ne(s)&&(s=null);const i=Ra(),o=new WeakSet,c=[];let a=!1;const l=i.app={_uid:mu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Zu,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&B(u.install)?(o.add(u),u.install(l,...h)):B(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,g){if(!a){const m=l._ceVNode||_e(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(m,u,g),a=!0,l._container=u,u.__vue_app__=l,Hr(m.component)}},onUnmount(u){c.push(u)},unmount(){a&&(Ge(c,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=nn;nn=l;try{return u()}finally{nn=h}}};return l}}let nn=null;function sr(t,e){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=ce||Ie;if(r||nn){const s=nn?nn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}const Ca={},Aa=()=>Object.create(Ca),Pa=t=>Object.getPrototypeOf(t)===Ca;function vu(t,e,n,r=!1){const s={},i=Aa();t.propsDefaults=Object.create(null),Oa(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:la(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function yu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=z(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(Ur(t.emitsOptions,g))continue;const m=e[g];if(a)if(G(i,g))m!==i[g]&&(i[g]=m,l=!0);else{const R=Ae(g);s[R]=Is(a,c,R,m,t,!1)}else m!==i[g]&&(i[g]=m,l=!0)}}}else{Oa(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!G(e,h)&&((u=Vt(h))===h||!G(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Is(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!G(e,h))&&(delete i[h],l=!0)}l&&Ze(t.attrs,"set","")}function Oa(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(En(a))continue;const l=e[a];let u;s&&G(s,u=Ae(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Ur(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=z(n),l=c||Q;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Is(s,a,h,l[h],t,!G(l,h))}}return o}function Is(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=G(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=jn(s);r=l[n]=a.call(null,e),u()}}else r=a;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}const bu=new WeakMap;function ka(t,e,n=!1){const r=n?bu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const u=h=>{a=!0;const[g,m]=ka(h,e,!0);ue(o,g),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ne(t)&&r.set(t,Qt),Qt;if($(i))for(let u=0;u<i.length;u++){const h=Ae(i[u]);Ci(h)&&(o[h]=Q)}else if(i)for(const u in i){const h=Ae(u);if(Ci(h)){const g=i[u],m=o[h]=$(g)||B(g)?{type:g}:ue({},g),R=m.type;let P=!1,H=!0;if($(R))for(let M=0;M<R.length;++M){const k=R[M],D=B(k)&&k.name;if(D==="Boolean"){P=!0;break}else D==="String"&&(H=!1)}else P=B(R)&&R.name==="Boolean";m[0]=P,m[1]=H,(P||G(m,"default"))&&c.push(h)}}const l=[o,c];return ne(t)&&r.set(t,l),l}function Ci(t){return t[0]!=="$"&&!En(t)}const Na=t=>t[0]==="_"||t==="$stable",Zs=t=>$(t)?t.map(Ve):[Ve(t)],Eu=(t,e,n)=>{if(e._n)return e;const r=Kl((...s)=>Zs(e(...s)),n);return r._c=!1,r},Da=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Na(s))continue;const i=t[s];if(B(i))e[s]=Eu(s,i,r);else if(i!=null){const o=Zs(i);e[s]=()=>o}}},Ma=(t,e)=>{const n=Zs(e);t.slots.default=()=>n},xa=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Iu=(t,e,n)=>{const r=t.slots=Aa();if(t.vnode.shapeFlag&32){const s=e._;s?(xa(r,e,n),n&&Ko(r,"_",s,!0)):Da(e,r)}else e&&Ma(t,e)},wu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:xa(s,e,n):(i=!e.$stable,Da(e,s)),o=e}else e&&(Ma(t,e),o={default:1});if(i)for(const c in s)!Na(c)&&o[c]==null&&delete s[c]},be=Uu;function Su(t){return Tu(t)}function Tu(t,e){const n=Nr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:m=je,insertStaticContent:R}=t,P=(f,d,p,_=null,b=null,y=null,S=void 0,w=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!mn(f,d)&&(_=v(f),ge(f,b,y,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:E,ref:L,shapeFlag:C}=d;switch(E){case Fr:H(f,d,p,_);break;case Ft:M(f,d,p,_);break;case Zr:f==null&&k(d,p,_,S);break;case Qe:kt(f,d,p,_,b,y,S,w,I);break;default:C&1?j(f,d,p,_,b,y,S,w,I):C&6?xe(f,d,p,_,b,y,S,w,I):(C&64||C&128)&&E.process(f,d,p,_,b,y,S,w,I,N)}L!=null&&b&&mr(L,f&&f.ref,y,d||f,!d)},H=(f,d,p,_)=>{if(f==null)r(d.el=c(d.children),p,_);else{const b=d.el=f.el;d.children!==f.children&&l(b,d.children)}},M=(f,d,p,_)=>{f==null?r(d.el=a(d.children||""),p,_):d.el=f.el},k=(f,d,p,_)=>{[f.el,f.anchor]=R(f.children,d,p,_,f.el,f.anchor)},D=({el:f,anchor:d},p,_)=>{let b;for(;f&&f!==d;)b=g(f),r(f,p,_),f=b;r(d,p,_)},O=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},j=(f,d,p,_,b,y,S,w,I)=>{d.type==="svg"?S="svg":d.type==="math"&&(S="mathml"),f==null?se(d,p,_,b,y,S,w,I):Te(f,d,b,y,S,w,I)},se=(f,d,p,_,b,y,S,w)=>{let I,E;const{props:L,shapeFlag:C,transition:x,dirs:F}=f;if(I=f.el=o(f.type,y,L&&L.is,L),C&8?u(I,f.children):C&16&&Se(f.children,I,null,_,b,Qr(f,y),S,w),F&&Nt(f,null,_,"created"),Z(I,f,f.scopeId,S,_),L){for(const ee in L)ee!=="value"&&!En(ee)&&i(I,ee,null,L[ee],y,_);"value"in L&&i(I,"value",null,L.value,y),(E=L.onVnodeBeforeMount)&&$e(E,_,f)}F&&Nt(f,null,_,"beforeMount");const V=Ru(b,x);V&&x.beforeEnter(I),r(I,d,p),((E=L&&L.onVnodeMounted)||V||F)&&be(()=>{E&&$e(E,_,f),V&&x.enter(I),F&&Nt(f,null,_,"mounted")},b)},Z=(f,d,p,_,b)=>{if(p&&m(f,p),_)for(let y=0;y<_.length;y++)m(f,_[y]);if(b){let y=b.subTree;if(d===y||Ba(y.type)&&(y.ssContent===d||y.ssFallback===d)){const S=b.vnode;Z(f,S,S.scopeId,S.slotScopeIds,b.parent)}}},Se=(f,d,p,_,b,y,S,w,I=0)=>{for(let E=I;E<f.length;E++){const L=f[E]=w?pt(f[E]):Ve(f[E]);P(null,L,d,p,_,b,y,S,w)}},Te=(f,d,p,_,b,y,S)=>{const w=d.el=f.el;let{patchFlag:I,dynamicChildren:E,dirs:L}=d;I|=f.patchFlag&16;const C=f.props||Q,x=d.props||Q;let F;if(p&&Dt(p,!1),(F=x.onVnodeBeforeUpdate)&&$e(F,p,d,f),L&&Nt(d,f,p,"beforeUpdate"),p&&Dt(p,!0),(C.innerHTML&&x.innerHTML==null||C.textContent&&x.textContent==null)&&u(w,""),E?Re(f.dynamicChildren,E,w,p,_,Qr(d,b),y):S||W(f,d,w,null,p,_,Qr(d,b),y,!1),I>0){if(I&16)lt(w,C,x,p,b);else if(I&2&&C.class!==x.class&&i(w,"class",null,x.class,b),I&4&&i(w,"style",C.style,x.style,b),I&8){const V=d.dynamicProps;for(let ee=0;ee<V.length;ee++){const q=V[ee],ve=C[q],me=x[q];(me!==ve||q==="value")&&i(w,q,ve,me,b,p)}}I&1&&f.children!==d.children&&u(w,d.children)}else!S&&E==null&&lt(w,C,x,p,b);((F=x.onVnodeUpdated)||L)&&be(()=>{F&&$e(F,p,d,f),L&&Nt(d,f,p,"updated")},_)},Re=(f,d,p,_,b,y,S)=>{for(let w=0;w<d.length;w++){const I=f[w],E=d[w],L=I.el&&(I.type===Qe||!mn(I,E)||I.shapeFlag&70)?h(I.el):p;P(I,E,L,null,_,b,y,S,!0)}},lt=(f,d,p,_,b)=>{if(d!==p){if(d!==Q)for(const y in d)!En(y)&&!(y in p)&&i(f,y,d[y],null,b,_);for(const y in p){if(En(y))continue;const S=p[y],w=d[y];S!==w&&y!=="value"&&i(f,y,w,S,b,_)}"value"in p&&i(f,"value",d.value,p.value,b)}},kt=(f,d,p,_,b,y,S,w,I)=>{const E=d.el=f?f.el:c(""),L=d.anchor=f?f.anchor:c("");let{patchFlag:C,dynamicChildren:x,slotScopeIds:F}=d;F&&(w=w?w.concat(F):F),f==null?(r(E,p,_),r(L,p,_),Se(d.children||[],p,L,b,y,S,w,I)):C>0&&C&64&&x&&f.dynamicChildren?(Re(f.dynamicChildren,x,p,b,y,S,w),(d.key!=null||b&&d===b.subTree)&&La(f,d,!0)):W(f,d,p,L,b,y,S,w,I)},xe=(f,d,p,_,b,y,S,w,I)=>{d.slotScopeIds=w,f==null?d.shapeFlag&512?b.ctx.activate(d,p,_,S,I):hn(d,p,_,b,y,S,I):Wt(f,d,I)},hn=(f,d,p,_,b,y,S)=>{const w=f.component=zu(f,_,b);if(Ea(f)&&(w.ctx.renderer=N),Gu(w,!1,S),w.asyncDep){if(b&&b.registerDep(w,oe,S),!f.el){const I=w.subTree=_e(Ft);M(null,I,d,p)}}else oe(w,f,d,p,b,y,S)},Wt=(f,d,p)=>{const _=d.component=f.component;if(xu(f,d,p))if(_.asyncDep&&!_.asyncResolved){J(_,d,p);return}else _.next=d,_.update();else d.el=f.el,_.vnode=d},oe=(f,d,p,_,b,y,S)=>{const w=()=>{if(f.isMounted){let{next:C,bu:x,u:F,parent:V,vnode:ee}=f;{const Fe=Ua(f);if(Fe){C&&(C.el=ee.el,J(f,C,S)),Fe.asyncDep.then(()=>{f.isUnmounted||w()});return}}let q=C,ve;Dt(f,!1),C?(C.el=ee.el,J(f,C,S)):C=ee,x&&rr(x),(ve=C.props&&C.props.onVnodeBeforeUpdate)&&$e(ve,V,C,ee),Dt(f,!0);const me=Pi(f),Ue=f.subTree;f.subTree=me,P(Ue,me,h(Ue.el),v(Ue),f,b,y),C.el=me.el,q===null&&Lu(f,me.el),F&&be(F,b),(ve=C.props&&C.props.onVnodeUpdated)&&be(()=>$e(ve,V,C,ee),b)}else{let C;const{el:x,props:F}=d,{bm:V,m:ee,parent:q,root:ve,type:me}=f,Ue=Tn(d);Dt(f,!1),V&&rr(V),!Ue&&(C=F&&F.onVnodeBeforeMount)&&$e(C,q,d),Dt(f,!0);{ve.ce&&ve.ce._injectChildStyle(me);const Fe=f.subTree=Pi(f);P(null,Fe,p,_,f,b,y),d.el=Fe.el}if(ee&&be(ee,b),!Ue&&(C=F&&F.onVnodeMounted)){const Fe=d;be(()=>$e(C,q,Fe),b)}(d.shapeFlag&256||q&&Tn(q.vnode)&&q.vnode.shapeFlag&256)&&f.a&&be(f.a,b),f.isMounted=!0,d=p=_=null}};f.scope.on();const I=f.effect=new Jo(w);f.scope.off();const E=f.update=I.run.bind(I),L=f.job=I.runIfDirty.bind(I);L.i=f,L.id=f.uid,I.scheduler=()=>Xs(L),Dt(f,!0),E()},J=(f,d,p)=>{d.component=f;const _=f.vnode.props;f.vnode=d,f.next=null,yu(f,d.props,_,p),wu(f,d.children,p),Rt(),Ei(f),Ct()},W=(f,d,p,_,b,y,S,w,I=!1)=>{const E=f&&f.children,L=f?f.shapeFlag:0,C=d.children,{patchFlag:x,shapeFlag:F}=d;if(x>0){if(x&128){ut(E,C,p,_,b,y,S,w,I);return}else if(x&256){qe(E,C,p,_,b,y,S,w,I);return}}F&8?(L&16&&Ce(E,b,y),C!==E&&u(p,C)):L&16?F&16?ut(E,C,p,_,b,y,S,w,I):Ce(E,b,y,!0):(L&8&&u(p,""),F&16&&Se(C,p,_,b,y,S,w,I))},qe=(f,d,p,_,b,y,S,w,I)=>{f=f||Qt,d=d||Qt;const E=f.length,L=d.length,C=Math.min(E,L);let x;for(x=0;x<C;x++){const F=d[x]=I?pt(d[x]):Ve(d[x]);P(f[x],F,p,null,b,y,S,w,I)}E>L?Ce(f,b,y,!0,!1,C):Se(d,p,_,b,y,S,w,I,C)},ut=(f,d,p,_,b,y,S,w,I)=>{let E=0;const L=d.length;let C=f.length-1,x=L-1;for(;E<=C&&E<=x;){const F=f[E],V=d[E]=I?pt(d[E]):Ve(d[E]);if(mn(F,V))P(F,V,p,null,b,y,S,w,I);else break;E++}for(;E<=C&&E<=x;){const F=f[C],V=d[x]=I?pt(d[x]):Ve(d[x]);if(mn(F,V))P(F,V,p,null,b,y,S,w,I);else break;C--,x--}if(E>C){if(E<=x){const F=x+1,V=F<L?d[F].el:_;for(;E<=x;)P(null,d[E]=I?pt(d[E]):Ve(d[E]),p,V,b,y,S,w,I),E++}}else if(E>x)for(;E<=C;)ge(f[E],b,y,!0),E++;else{const F=E,V=E,ee=new Map;for(E=V;E<=x;E++){const ye=d[E]=I?pt(d[E]):Ve(d[E]);ye.key!=null&&ee.set(ye.key,E)}let q,ve=0;const me=x-V+1;let Ue=!1,Fe=0;const pn=new Array(me);for(E=0;E<me;E++)pn[E]=0;for(E=F;E<=C;E++){const ye=f[E];if(ve>=me){ge(ye,b,y,!0);continue}let He;if(ye.key!=null)He=ee.get(ye.key);else for(q=V;q<=x;q++)if(pn[q-V]===0&&mn(ye,d[q])){He=q;break}He===void 0?ge(ye,b,y,!0):(pn[He-V]=E+1,He>=Fe?Fe=He:Ue=!0,P(ye,d[He],p,null,b,y,S,w,I),ve++)}const mi=Ue?Cu(pn):Qt;for(q=mi.length-1,E=me-1;E>=0;E--){const ye=V+E,He=d[ye],_i=ye+1<L?d[ye+1].el:_;pn[E]===0?P(null,He,p,_i,b,y,S,w,I):Ue&&(q<0||E!==mi[q]?Le(He,p,_i,2):q--)}}},Le=(f,d,p,_,b=null)=>{const{el:y,type:S,transition:w,children:I,shapeFlag:E}=f;if(E&6){Le(f.component.subTree,d,p,_);return}if(E&128){f.suspense.move(d,p,_);return}if(E&64){S.move(f,d,p,N);return}if(S===Qe){r(y,d,p);for(let C=0;C<I.length;C++)Le(I[C],d,p,_);r(f.anchor,d,p);return}if(S===Zr){D(f,d,p);return}if(_!==2&&E&1&&w)if(_===0)w.beforeEnter(y),r(y,d,p),be(()=>w.enter(y),b);else{const{leave:C,delayLeave:x,afterLeave:F}=w,V=()=>r(y,d,p),ee=()=>{C(y,()=>{V(),F&&F()})};x?x(y,V,ee):ee()}else r(y,d,p)},ge=(f,d,p,_=!1,b=!1)=>{const{type:y,props:S,ref:w,children:I,dynamicChildren:E,shapeFlag:L,patchFlag:C,dirs:x,cacheIndex:F}=f;if(C===-2&&(b=!1),w!=null&&mr(w,null,p,f,!0),F!=null&&(d.renderCache[F]=void 0),L&256){d.ctx.deactivate(f);return}const V=L&1&&x,ee=!Tn(f);let q;if(ee&&(q=S&&S.onVnodeBeforeUnmount)&&$e(q,d,f),L&6)Xn(f.component,p,_);else{if(L&128){f.suspense.unmount(p,_);return}V&&Nt(f,null,d,"beforeUnmount"),L&64?f.type.remove(f,d,p,N,_):E&&!E.hasOnce&&(y!==Qe||C>0&&C&64)?Ce(E,d,p,!1,!0):(y===Qe&&C&384||!b&&L&16)&&Ce(I,d,p),_&&Kt(f)}(ee&&(q=S&&S.onVnodeUnmounted)||V)&&be(()=>{q&&$e(q,d,f),V&&Nt(f,null,d,"unmounted")},p)},Kt=f=>{const{type:d,el:p,anchor:_,transition:b}=f;if(d===Qe){zt(p,_);return}if(d===Zr){O(f);return}const y=()=>{s(p),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(f.shapeFlag&1&&b&&!b.persisted){const{leave:S,delayLeave:w}=b,I=()=>S(p,y);w?w(f.el,y,I):I()}else y()},zt=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},Xn=(f,d,p)=>{const{bum:_,scope:b,job:y,subTree:S,um:w,m:I,a:E}=f;Ai(I),Ai(E),_&&rr(_),b.stop(),y&&(y.flags|=8,ge(S,f,d,p)),w&&be(w,d),be(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Ce=(f,d,p,_=!1,b=!1,y=0)=>{for(let S=y;S<f.length;S++)ge(f[S],d,p,_,b)},v=f=>{if(f.shapeFlag&6)return v(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const d=g(f.anchor||f.el),p=d&&d[zl];return p?g(p):d};let A=!1;const T=(f,d,p)=>{f==null?d._vnode&&ge(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),d._vnode=f,A||(A=!0,Ei(),ma(),A=!1)},N={p:P,um:ge,m:Le,r:Kt,mt:hn,mc:Se,pc:W,pbc:Re,n:v,o:t};return{render:T,hydrate:void 0,createApp:_u(T)}}function Qr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Dt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ru(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function La(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=pt(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&La(o,c)),c.type===Fr&&(c.el=o.el)}}function Cu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ua(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ua(e)}function Ai(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Au=Symbol.for("v-scx"),Pu=()=>We(Au);function ir(t,e,n){return Fa(t,e,n)}function Fa(t,e,n=Q){const{immediate:r,deep:s,flush:i,once:o}=n,c=ue({},n),a=e&&r||!e&&i!=="post";let l;if(xn){if(i==="sync"){const m=Pu();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!a){const m=()=>{};return m.stop=je,m.resume=je,m.pause=je,m}}const u=ce;c.call=(m,R,P)=>Ge(m,u,R,P);let h=!1;i==="post"?c.scheduler=m=>{be(m,u&&u.suspense)}:i!=="sync"&&(h=!0,c.scheduler=(m,R)=>{R?m():Xs(m)}),c.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const g=Bl(t,e,c);return xn&&(l?l.push(g):a&&g()),g}function Ou(t,e,n){const r=this.proxy,s=ie(t)?t.includes(".")?Ha(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=jn(this),c=Fa(s,i.bind(r),n);return o(),c}function Ha(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ku=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ae(e)}Modifiers`]||t[`${Vt(e)}Modifiers`];function Nu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&ku(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>ie(u)?u.trim():u)),o.number&&(s=n.map(hs)));let c,a=r[c=zr(e)]||r[c=zr(Ae(e))];!a&&i&&(a=r[c=zr(Vt(e))]),a&&Ge(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ge(l,t,6,s)}}function $a(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=l=>{const u=$a(l,e,!0);u&&(c=!0,ue(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ne(t)&&r.set(t,null),null):($(i)?i.forEach(a=>o[a]=null):ue(o,i),ne(t)&&r.set(t,o),o)}function Ur(t,e){return!t||!Ar(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,Vt(e))||G(t,e))}function Pi(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:u,props:h,data:g,setupState:m,ctx:R,inheritAttrs:P}=t,H=pr(t);let M,k;try{if(n.shapeFlag&4){const O=s||r,j=O;M=Ve(l.call(j,O,u,h,m,g,R)),k=c}else{const O=e;M=Ve(O.length>1?O(h,{attrs:c,slots:o,emit:a}):O(h,null)),k=e.props?c:Du(c)}}catch(O){Cn.length=0,xr(O,t,1),M=_e(Ft)}let D=M;if(k&&P!==!1){const O=Object.keys(k),{shapeFlag:j}=D;O.length&&j&7&&(i&&O.some(Fs)&&(k=Mu(k,i)),D=cn(D,k,!1,!0))}return n.dirs&&(D=cn(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Qs(D,n.transition),M=D,pr(H),M}const Du=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ar(n))&&((e||(e={}))[n]=t[n]);return e},Mu=(t,e)=>{const n={};for(const r in t)(!Fs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Oi(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!Ur(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Oi(r,o,l):!0:!!o;return!1}function Oi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ur(n,i))return!0}return!1}function Lu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ba=t=>t.__isSuspense;function Uu(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Wl(t)}const Qe=Symbol.for("v-fgt"),Fr=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Zr=Symbol.for("v-stc"),Cn=[];let we=null;function St(t=!1){Cn.push(we=t?null:[])}function Fu(){Cn.pop(),we=Cn[Cn.length-1]||null}let Mn=1;function ki(t,e=!1){Mn+=t,t<0&&we&&e&&(we.hasOnce=!0)}function Va(t){return t.dynamicChildren=Mn>0?we||Qt:null,Fu(),Mn>0&&we&&we.push(t),t}function Ht(t,e,n,r,s,i){return Va(re(t,e,n,r,s,i,!0))}function Hu(t,e,n,r,s){return Va(_e(t,e,n,r,s,!0))}function vr(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const ja=({key:t})=>t??null,or=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ie(t)||le(t)||B(t)?{i:Ie,r:t,k:e,f:!!n}:t:null);function re(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ja(e),ref:e&&or(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return c?(ei(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ie(n)?8:16),Mn>0&&!o&&we&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&we.push(a),a}const _e=$u;function $u(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cu)&&(t=Ft),vr(t)){const c=cn(t,e,!0);return n&&ei(c,n),Mn>0&&!i&&we&&(c.shapeFlag&6?we[we.indexOf(t)]=c:we.push(c)),c.patchFlag=-2,c}if(Qu(t)&&(t=t.__vccOpts),e){e=Bu(e);let{class:c,style:a}=e;c&&!ie(c)&&(e.class=Vs(c)),ne(a)&&(Ys(a)&&!$(a)&&(a=ue({},a)),e.style=Bs(a))}const o=ie(t)?1:Ba(t)?128:Gl(t)?64:ne(t)?4:B(t)?2:0;return re(t,e,n,r,s,o,i,!0)}function Bu(t){return t?Ys(t)||Pa(t)?ue({},t):t:null}function cn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?ju(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ja(l),ref:e&&e.ref?n&&i?$(i)?i.concat(or(e)):[i,or(e)]:or(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&r&&Qs(u,a.clone(u)),u}function Vu(t=" ",e=0){return _e(Fr,null,t,e)}function Wa(t="",e=!1){return e?(St(),Hu(Ft,null,t)):_e(Ft,null,t)}function Ve(t){return t==null||typeof t=="boolean"?_e(Ft):$(t)?_e(Qe,null,t.slice()):vr(t)?pt(t):_e(Fr,null,String(t))}function pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cn(t)}function ei(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ei(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Pa(e)?e._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),r&64?(n=16,e=[Vu(e)]):n=8);t.children=e,t.shapeFlag|=n}function ju(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Vs([e.class,r.class]));else if(s==="style")e.style=Bs([e.style,r.style]);else if(Ar(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function $e(t,e,n,r=null){Ge(t,e,7,[n,r])}const Wu=Ra();let Ku=0;function zu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Wu,i={uid:Ku++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ka(r,s),emitsOptions:$a(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Nu.bind(null,i),t.ce&&t.ce(i),i}let ce=null,yr,ws;{const t=Nr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};yr=e("__VUE_INSTANCE_SETTERS__",n=>ce=n),ws=e("__VUE_SSR_SETTERS__",n=>xn=n)}const jn=t=>{const e=ce;return yr(t),t.scope.on(),()=>{t.scope.off(),yr(e)}},Ni=()=>{ce&&ce.scope.off(),yr(null)};function Ka(t){return t.vnode.shapeFlag&4}let xn=!1;function Gu(t,e=!1,n=!1){e&&ws(e);const{props:r,children:s}=t.vnode,i=Ka(t);vu(t,r,i,e),Iu(t,s,n);const o=i?qu(t,e):void 0;return e&&ws(!1),o}function qu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,uu);const{setup:r}=n;if(r){Rt();const s=t.setupContext=r.length>1?Yu(t):null,i=jn(t),o=Vn(r,t,0,[t.props,s]),c=Vo(o);if(Ct(),i(),(c||t.sp)&&!Tn(t)&&ba(t),c){if(o.then(Ni,Ni),e)return o.then(a=>{Di(t,a)}).catch(a=>{xr(a,t,0)});t.asyncDep=o}else Di(t,o)}else za(t)}function Di(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=da(e)),za(t)}function za(t,e,n){const r=t.type;t.render||(t.render=r.render||je);{const s=jn(t);Rt();try{fu(t)}finally{Ct(),s()}}}const Ju={get(t,e){return ae(t,"get",""),t[e]}};function Yu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ju),slots:t.slots,emit:t.emit,expose:e}}function Hr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(da(Ml(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rn)return Rn[n](t)},has(e,n){return n in e||n in Rn}})):t.proxy}function Xu(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function Qu(t){return B(t)&&"__vccOpts"in t}const Pe=(t,e)=>Hl(t,e,xn);function Ga(t,e,n){const r=arguments.length;return r===2?ne(e)&&!$(e)?vr(e)?_e(t,null,[e]):_e(t,e):_e(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&vr(n)&&(n=[n]),_e(t,e,n))}const Zu="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ss;const Mi=typeof window<"u"&&window.trustedTypes;if(Mi)try{Ss=Mi.createPolicy("vue",{createHTML:t=>t})}catch{}const qa=Ss?t=>Ss.createHTML(t):t=>t,ef="http://www.w3.org/2000/svg",tf="http://www.w3.org/1998/Math/MathML",Xe=typeof document<"u"?document:null,xi=Xe&&Xe.createElement("template"),nf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Xe.createElementNS(ef,t):e==="mathml"?Xe.createElementNS(tf,t):n?Xe.createElement(t,{is:n}):Xe.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Xe.createTextNode(t),createComment:t=>Xe.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xe.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{xi.innerHTML=qa(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=xi.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},rf=Symbol("_vtc");function sf(t,e,n){const r=t[rf];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Li=Symbol("_vod"),of=Symbol("_vsh"),af=Symbol(""),cf=/(^|;)\s*display\s*:/;function lf(t,e,n){const r=t.style,s=ie(n);let i=!1;if(n&&!s){if(e)if(ie(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ar(r,c,"")}else for(const o in e)n[o]==null&&ar(r,o,"");for(const o in n)o==="display"&&(i=!0),ar(r,o,n[o])}else if(s){if(e!==n){const o=r[af];o&&(n+=";"+o),r.cssText=n,i=cf.test(n)}}else e&&t.removeAttribute("style");Li in t&&(t[Li]=i?r.display:"",t[of]&&(r.display="none"))}const Ui=/\s*!important$/;function ar(t,e,n){if($(n))n.forEach(r=>ar(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=uf(t,e);Ui.test(n)?t.setProperty(Vt(r),n.replace(Ui,""),"important"):t[r]=n}}const Fi=["Webkit","Moz","ms"],es={};function uf(t,e){const n=es[e];if(n)return n;let r=Ae(e);if(r!=="filter"&&r in t)return es[e]=r;r=kr(r);for(let s=0;s<Fi.length;s++){const i=Fi[s]+r;if(i in t)return es[e]=i}return e}const Hi="http://www.w3.org/1999/xlink";function $i(t,e,n,r,s,i=hl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Hi,e.slice(6,e.length)):t.setAttributeNS(Hi,e,n):n==null||i&&!zo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Tt(n)?String(n):n)}function Bi(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?qa(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(c!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=zo(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Jt(t,e,n,r){t.addEventListener(e,n,r)}function ff(t,e,n,r){t.removeEventListener(e,n,r)}const Vi=Symbol("_vei");function df(t,e,n,r,s=null){const i=t[Vi]||(t[Vi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=hf(e);if(r){const l=i[e]=mf(r,s);Jt(t,c,l,a)}else o&&(ff(t,c,o,a),i[e]=void 0)}}const ji=/(?:Once|Passive|Capture)$/;function hf(t){let e;if(ji.test(t)){e={};let r;for(;r=t.match(ji);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Vt(t.slice(2)),e]}let ts=0;const pf=Promise.resolve(),gf=()=>ts||(pf.then(()=>ts=0),ts=Date.now());function mf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ge(_f(r,n.value),e,5,[r])};return n.value=t,n.attached=gf(),n}function _f(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Wi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vf=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?sf(t,r,o):e==="style"?lf(t,n,r):Ar(e)?Fs(e)||df(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yf(t,e,r,o))?(Bi(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$i(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ie(r))?Bi(t,Ae(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$i(t,e,r,o))};function yf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Wi(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wi(e)&&ie(n)?!1:e in t}const Ki=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>rr(e,n):e};function bf(t){t.target.composing=!0}function zi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ns=Symbol("_assign"),br={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ns]=Ki(s);const i=r||s.props&&s.props.type==="number";Jt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=hs(c)),t[ns](c)}),n&&Jt(t,"change",()=>{t.value=t.value.trim()}),e||(Jt(t,"compositionstart",bf),Jt(t,"compositionend",zi),Jt(t,"change",zi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ns]=Ki(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?hs(t.value):t.value,a=e??"";c!==a&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===a)||(t.value=a))}},Ef=ue({patchProp:vf},nf);let Gi;function If(){return Gi||(Gi=Su(Ef))}const wf=(...t)=>{const e=If().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Tf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Sf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Sf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Tf(t){return ie(t)?document.querySelector(t):t}const ti=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Rf={};function Cf(t,e){const n=au("router-view");return St(),Ht("div",null,[_e(n)])}const Af=ti(Rf,[["render",Cf],["__scopeId","data-v-122a299c"]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof document<"u";function Ja(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ja(t.default)}const K=Object.assign;function rs(t,e){const n={};for(const r in e){const s=e[r];n[r]=De(s)?s.map(t):t(s)}return n}const An=()=>{},De=Array.isArray,Ya=/#/g,Of=/&/g,kf=/\//g,Nf=/=/g,Df=/\?/g,Xa=/\+/g,Mf=/%5B/g,xf=/%5D/g,Qa=/%5E/g,Lf=/%60/g,Za=/%7B/g,Uf=/%7C/g,ec=/%7D/g,Ff=/%20/g;function ni(t){return encodeURI(""+t).replace(Uf,"|").replace(Mf,"[").replace(xf,"]")}function Hf(t){return ni(t).replace(Za,"{").replace(ec,"}").replace(Qa,"^")}function Ts(t){return ni(t).replace(Xa,"%2B").replace(Ff,"+").replace(Ya,"%23").replace(Of,"%26").replace(Lf,"`").replace(Za,"{").replace(ec,"}").replace(Qa,"^")}function $f(t){return Ts(t).replace(Nf,"%3D")}function Bf(t){return ni(t).replace(Ya,"%23").replace(Df,"%3F")}function Vf(t){return t==null?"":Bf(t).replace(kf,"%2F")}function Ln(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jf=/\/$/,Wf=t=>t.replace(jf,"");function ss(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=qf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ln(o)}}function Kf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ln(e.matched[r],n.matched[s])&&tc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ln(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function tc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gf(t[n],e[n]))return!1;return!0}function Gf(t,e){return De(t)?Ji(t,e):De(e)?Ji(e,t):t===e}function Ji(t,e){return De(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Un;(function(t){t.pop="pop",t.push="push"})(Un||(Un={}));var Pn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Pn||(Pn={}));function Jf(t){if(!t)if(Yt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wf(t)}const Yf=/^[^#]+#/;function Xf(t,e){return t.replace(Yf,"#")+e}function Qf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const $r=()=>({left:window.scrollX,top:window.scrollY});function Zf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Qf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yi(t,e){return(history.state?history.state.position-e:-1)+t}const Rs=new Map;function ed(t,e){Rs.set(t,e)}function td(t){const e=Rs.get(t);return Rs.delete(t),e}let nd=()=>location.protocol+"//"+location.host;function nc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),qi(a,"")}return qi(n,t)+r+s}function rd(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const m=nc(t,location),R=n.value,P=e.value;let H=0;if(g){if(n.value=m,e.value=g,o&&o===R){o=null;return}H=P?g.position-P.position:0}else r(m);s.forEach(M=>{M(n.value,R,{delta:H,type:Un.pop,direction:H?H>0?Pn.forward:Pn.back:Pn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const m=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(m),m}function u(){const{history:g}=window;g.state&&g.replaceState(K({},g.state,{scroll:$r()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function Xi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?$r():null}}function sd(t){const{history:e,location:n}=window,r={value:nc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:nd()+t+a;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](g)}}function o(a,l){const u=K({},e.state,Xi(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=K({},s.value,e.state,{forward:a,scroll:$r()});i(u.current,u,!0);const h=K({},Xi(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function id(t){t=Jf(t);const e=sd(t),n=rd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=K({location:"",base:t,go:r,createHref:Xf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function od(t){return typeof t=="string"||t&&typeof t=="object"}function rc(t){return typeof t=="string"||typeof t=="symbol"}const sc=Symbol("");var Qi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qi||(Qi={}));function un(t,e){return K(new Error,{type:t,[sc]:!0},e)}function Ye(t,e){return t instanceof Error&&sc in t&&(e==null||!!(t.type&e))}const Zi="[^/]+?",ad={sensitive:!1,strict:!1,start:!0,end:!0},cd=/[.+*?^${}()[\]/\\]/g;function ld(t,e){const n=K({},ad,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let m=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(cd,"\\$&"),m+=40;else if(g.type===1){const{value:R,repeatable:P,optional:H,regexp:M}=g;i.push({name:R,repeatable:P,optional:H});const k=M||Zi;if(k!==Zi){m+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${k}): `+O.message)}}let D=P?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(D=H&&l.length<2?`(?:/${D})`:"/"+D),H&&(D+="?"),s+=D,m+=20,H&&(m+=-8),P&&(m+=-20),k===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const m=u[g]||"",R=i[g-1];h[R.name]=m&&R.repeatable?m.split("/"):m}return h}function a(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of g)if(m.type===0)u+=m.value;else if(m.type===1){const{value:R,repeatable:P,optional:H}=m,M=R in l?l[R]:"";if(De(M)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const k=De(M)?M.join("/"):M;if(!k)if(H)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function ud(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ic(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ud(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(eo(r))return 1;if(eo(s))return-1}return s.length-r.length}function eo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const fd={type:0,value:""},dd=/[a-zA-Z0-9_]/;function hd(t){if(!t)return[[]];if(t==="/")return[[fd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:dd.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function pd(t,e,n){const r=ld(hd(t.path),n),s=K(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function gd(t,e){const n=[],r=new Map;e=so({strict:!1,end:!0,sensitive:!1},e);function s(h){return r.get(h)}function i(h,g,m){const R=!m,P=no(h);P.aliasOf=m&&m.record;const H=so(e,h),M=[P];if("alias"in h){const O=typeof h.alias=="string"?[h.alias]:h.alias;for(const j of O)M.push(no(K({},P,{components:m?m.record.components:P.components,path:j,aliasOf:m?m.record:P})))}let k,D;for(const O of M){const{path:j}=O;if(g&&j[0]!=="/"){const se=g.record.path,Z=se[se.length-1]==="/"?"":"/";O.path=g.record.path+(j&&Z+j)}if(k=pd(O,g,H),m?m.alias.push(k):(D=D||k,D!==k&&D.alias.push(k),R&&h.name&&!ro(k)&&o(h.name)),oc(k)&&a(k),P.children){const se=P.children;for(let Z=0;Z<se.length;Z++)i(se[Z],k,m&&m.children[Z])}m=m||k}return D?()=>{o(D)}:An}function o(h){if(rc(h)){const g=r.get(h);g&&(r.delete(h),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(h);g>-1&&(n.splice(g,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function c(){return n}function a(h){const g=vd(h,n);n.splice(g,0,h),h.record.name&&!ro(h)&&r.set(h.record.name,h)}function l(h,g){let m,R={},P,H;if("name"in h&&h.name){if(m=r.get(h.name),!m)throw un(1,{location:h});H=m.record.name,R=K(to(g.params,m.keys.filter(D=>!D.optional).concat(m.parent?m.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),h.params&&to(h.params,m.keys.map(D=>D.name))),P=m.stringify(R)}else if(h.path!=null)P=h.path,m=n.find(D=>D.re.test(P)),m&&(R=m.parse(P),H=m.record.name);else{if(m=g.name?r.get(g.name):n.find(D=>D.re.test(g.path)),!m)throw un(1,{location:h,currentLocation:g});H=m.record.name,R=K({},g.params,h.params),P=m.stringify(R)}const M=[];let k=m;for(;k;)M.unshift(k.record),k=k.parent;return{name:H,path:P,params:R,matched:M,meta:_d(M)}}t.forEach(h=>i(h));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:c,getRecordMatcher:s}}function to(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function no(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:md(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function md(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ro(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function _d(t){return t.reduce((e,n)=>K(e,n.meta),{})}function so(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function vd(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ic(t,e[i])<0?r=i:n=i+1}const s=yd(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function yd(t){let e=t;for(;e=e.parent;)if(oc(e)&&ic(t,e)===0)return e}function oc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function bd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Xa," "),o=i.indexOf("="),c=Ln(o<0?i:i.slice(0,o)),a=o<0?null:Ln(i.slice(o+1));if(c in e){let l=e[c];De(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function io(t){let e="";for(let n in t){const r=t[n];if(n=$f(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&Ts(i)):[r&&Ts(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Ed(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=De(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Id=Symbol(""),oo=Symbol(""),Br=Symbol(""),ac=Symbol(""),Cs=Symbol("");function _n(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=g=>{g===!1?a(un(4,{from:n,to:e})):g instanceof Error?a(g):od(g)?a(un(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(g=>a(g))})}function is(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Ja(a)){const u=(a.__vccOpts||a)[e];u&&i.push(gt(u,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const h=Pf(u)?u.default:u;o.mods[c]=u,o.components[c]=h;const m=(h.__vccOpts||h)[e];return m&&gt(m,n,r,o,c,s)()}))}}return i}function ao(t){const e=We(Br),n=We(ac),r=Pe(()=>{const a=en(t.to);return e.resolve(a)}),s=Pe(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(ln.bind(null,u));if(g>-1)return g;const m=co(a[l-2]);return l>1&&co(u)===m&&h[h.length-1].path!==m?h.findIndex(ln.bind(null,a[l-2])):g}),i=Pe(()=>s.value>-1&&Cd(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&tc(n.params,r.value.params));function c(a={}){if(Rd(a)){const l=e[en(t.replace)?"replace":"push"](en(t.to)).catch(An);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function wd(t){return t.length===1?t[0]:t}const Sd=ya({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ao,setup(t,{slots:e}){const n=Mr(ao(t)),{options:r}=We(Br),s=Pe(()=>({[lo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[lo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&wd(e.default(n));return t.custom?i:Ga("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Td=Sd;function Rd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Cd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!De(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function co(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lo=(t,e,n)=>t??e??n,Ad=ya({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(Cs),s=Pe(()=>t.route||r.value),i=We(oo,0),o=Pe(()=>{let l=en(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=Pe(()=>s.value.matched[o.value]);sr(oo,Pe(()=>o.value+1)),sr(Id,c),sr(Cs,s);const a=Et();return ir(()=>[a.value,c.value,t.name],([l,u,h],[g,m,R])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!ln(u,m)||!g)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,g=h&&h.components[u];if(!g)return uo(n.default,{Component:g,route:l});const m=h.props[u],R=m?m===!0?l.params:typeof m=="function"?m(l):m:null,H=Ga(g,K({},R,e,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return uo(n.default,{Component:H,route:l})||H}}});function uo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Pd=Ad;function Od(t){const e=gd(t.routes,t),n=t.parseQuery||bd,r=t.stringifyQuery||io,s=t.history,i=_n(),o=_n(),c=_n(),a=xl(ft);let l=ft;Yt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rs.bind(null,v=>""+v),h=rs.bind(null,Vf),g=rs.bind(null,Ln);function m(v,A){let T,N;return rc(v)?(T=e.getRecordMatcher(v),N=A):N=v,e.addRoute(N,T)}function R(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function H(v){return!!e.getRecordMatcher(v)}function M(v,A){if(A=K({},A||a.value),typeof v=="string"){const p=ss(n,v,A.path),_=e.resolve({path:p.path},A),b=s.createHref(p.fullPath);return K(p,_,{params:g(_.params),hash:Ln(p.hash),redirectedFrom:void 0,href:b})}let T;if(v.path!=null)T=K({},v,{path:ss(n,v.path,A.path).path});else{const p=K({},v.params);for(const _ in p)p[_]==null&&delete p[_];T=K({},v,{params:h(p)}),A.params=h(A.params)}const N=e.resolve(T,A),Y=v.hash||"";N.params=u(g(N.params));const f=Kf(r,K({},v,{hash:Hf(Y),path:N.path})),d=s.createHref(f);return K({fullPath:f,hash:Y,query:r===io?Ed(v.query):v.query||{}},N,{redirectedFrom:void 0,href:d})}function k(v){return typeof v=="string"?ss(n,v,a.value.path):K({},v)}function D(v,A){if(l!==v)return un(8,{from:A,to:v})}function O(v){return Z(v)}function j(v){return O(K(k(v),{replace:!0}))}function se(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let N=typeof T=="function"?T(v):T;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=k(N):{path:N},N.params={}),K({query:v.query,hash:v.hash,params:N.path!=null?{}:v.params},N)}}function Z(v,A){const T=l=M(v),N=a.value,Y=v.state,f=v.force,d=v.replace===!0,p=se(T);if(p)return Z(K(k(p),{state:typeof p=="object"?K({},Y,p.state):Y,force:f,replace:d}),A||T);const _=T;_.redirectedFrom=A;let b;return!f&&zf(r,N,T)&&(b=un(16,{to:_,from:N}),Le(N,N,!0,!1)),(b?Promise.resolve(b):Re(_,N)).catch(y=>Ye(y)?Ye(y,2)?y:ut(y):W(y,_,N)).then(y=>{if(y){if(Ye(y,2))return Z(K({replace:d},k(y.to),{state:typeof y.to=="object"?K({},Y,y.to.state):Y,force:f}),A||_)}else y=kt(_,N,!0,d,Y);return lt(_,N,y),y})}function Se(v,A){const T=D(v,A);return T?Promise.reject(T):Promise.resolve()}function Te(v){const A=zt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function Re(v,A){let T;const[N,Y,f]=kd(v,A);T=is(N.reverse(),"beforeRouteLeave",v,A);for(const p of N)p.leaveGuards.forEach(_=>{T.push(gt(_,v,A))});const d=Se.bind(null,v,A);return T.push(d),Ce(T).then(()=>{T=[];for(const p of i.list())T.push(gt(p,v,A));return T.push(d),Ce(T)}).then(()=>{T=is(Y,"beforeRouteUpdate",v,A);for(const p of Y)p.updateGuards.forEach(_=>{T.push(gt(_,v,A))});return T.push(d),Ce(T)}).then(()=>{T=[];for(const p of f)if(p.beforeEnter)if(De(p.beforeEnter))for(const _ of p.beforeEnter)T.push(gt(_,v,A));else T.push(gt(p.beforeEnter,v,A));return T.push(d),Ce(T)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),T=is(f,"beforeRouteEnter",v,A,Te),T.push(d),Ce(T))).then(()=>{T=[];for(const p of o.list())T.push(gt(p,v,A));return T.push(d),Ce(T)}).catch(p=>Ye(p,8)?p:Promise.reject(p))}function lt(v,A,T){c.list().forEach(N=>Te(()=>N(v,A,T)))}function kt(v,A,T,N,Y){const f=D(v,A);if(f)return f;const d=A===ft,p=Yt?history.state:{};T&&(N||d?s.replace(v.fullPath,K({scroll:d&&p&&p.scroll},Y)):s.push(v.fullPath,Y)),a.value=v,Le(v,A,T,d),ut()}let xe;function hn(){xe||(xe=s.listen((v,A,T)=>{if(!Xn.listening)return;const N=M(v),Y=se(N);if(Y){Z(K(Y,{replace:!0,force:!0}),N).catch(An);return}l=N;const f=a.value;Yt&&ed(Yi(f.fullPath,T.delta),$r()),Re(N,f).catch(d=>Ye(d,12)?d:Ye(d,2)?(Z(K(k(d.to),{force:!0}),N).then(p=>{Ye(p,20)&&!T.delta&&T.type===Un.pop&&s.go(-1,!1)}).catch(An),Promise.reject()):(T.delta&&s.go(-T.delta,!1),W(d,N,f))).then(d=>{d=d||kt(N,f,!1),d&&(T.delta&&!Ye(d,8)?s.go(-T.delta,!1):T.type===Un.pop&&Ye(d,20)&&s.go(-1,!1)),lt(N,f,d)}).catch(An)}))}let Wt=_n(),oe=_n(),J;function W(v,A,T){ut(v);const N=oe.list();return N.length?N.forEach(Y=>Y(v,A,T)):console.error(v),Promise.reject(v)}function qe(){return J&&a.value!==ft?Promise.resolve():new Promise((v,A)=>{Wt.add([v,A])})}function ut(v){return J||(J=!v,hn(),Wt.list().forEach(([A,T])=>v?T(v):A()),Wt.reset()),v}function Le(v,A,T,N){const{scrollBehavior:Y}=t;if(!Yt||!Y)return Promise.resolve();const f=!T&&td(Yi(v.fullPath,0))||(N||!T)&&history.state&&history.state.scroll||null;return pa().then(()=>Y(v,A,f)).then(d=>d&&Zf(d)).catch(d=>W(d,v,A))}const ge=v=>s.go(v);let Kt;const zt=new Set,Xn={currentRoute:a,listening:!0,addRoute:m,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:H,getRoutes:P,resolve:M,options:t,push:O,replace:j,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:oe.add,isReady:qe,install(v){const A=this;v.component("RouterLink",Td),v.component("RouterView",Pd),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>en(a)}),Yt&&!Kt&&a.value===ft&&(Kt=!0,O(s.location).catch(Y=>{}));const T={};for(const Y in ft)Object.defineProperty(T,Y,{get:()=>a.value[Y],enumerable:!0});v.provide(Br,A),v.provide(ac,la(T)),v.provide(Cs,a);const N=v.unmount;zt.add(v),v.unmount=function(){zt.delete(v),zt.size<1&&(l=ft,xe&&xe(),xe=null,a.value=ft,Kt=!1,J=!1),N()}}};function Ce(v){return v.reduce((A,T)=>A.then(()=>Te(T)),Promise.resolve())}return Xn}function kd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>ln(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>ln(l,a))||s.push(a))}return[n,r,s]}function Vr(){return We(Br)}const Nd={class:"home-container"},Dd={__name:"Home",setup(t){const e=Vr(),n=()=>{e.push("/login")},r=()=>{e.push("/register")};return(s,i)=>(St(),Ht("div",Nd,[i[0]||(i[0]=re("h1",{class:"title"},"Página de Inicio",-1)),i[1]||(i[1]=re("p",{class:"welcome-message"},"Bienvenido a la aplicación",-1)),re("div",{class:"buttons-container"},[re("button",{onClick:n,class:"button"},"Iniciar Sesión"),re("button",{onClick:r,class:"button"},"Registrarse")])]))}},Md=ti(Dd,[["__scopeId","data-v-0ac06fcb"]]);var fo={};/**
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
 */const cc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},lc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,m=l&63;a||(m=64,o||(g=64)),r.push(n[u],n[h],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new Ld;const g=i<<2|c>>4;if(r.push(g),l!==64){const m=c<<4&240|l>>2;if(r.push(m),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ld extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ud=function(t){const e=cc(t);return lc.encodeByteArray(e,!0)},uc=function(t){return Ud(t).replace(/\./g,"")},fc=function(t){try{return lc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hd=()=>Fd().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof fo>"u")return;const t=fo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fc(t[1]);return e&&JSON.parse(e)},ri=()=>{try{return Hd()||$d()||Bd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vd=t=>{var e,n;return(n=(e=ri())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dc=()=>{var t;return(t=ri())===null||t===void 0?void 0:t.config},hc=t=>{var e;return(e=ri())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class jd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function Kd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qd(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jd(){try{return typeof indexedDB=="object"}catch{return!1}}function Yd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Xd="FirebaseError";class At extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xd,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wn.prototype.create)}}class Wn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Qd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new At(s,c,r)}}function Qd(t,e){return t.replace(Zd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Zd=/\{\$([^}]+)}/g;function eh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ho(i)&&ho(o)){if(!Er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ho(t){return t!==null&&typeof t=="object"}/**
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
 */function Kn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function th(t,e){const n=new nh(t,e);return n.subscribe.bind(n)}class nh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=os),s.error===void 0&&(s.error=os),s.complete===void 0&&(s.complete=os);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function os(){}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class fn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class sh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oh(e))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xt){return this.instances.has(e)}getOptions(e=xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ih(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=xt){return this.component?this.component.multipleInstances?e:xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ih(t){return t===xt?void 0:t}function oh(t){return t.instantiationMode==="EAGER"}/**
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
 */class ah{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const ch={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},lh=X.INFO,uh={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},fh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=uh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pc{constructor(e){this.name=e,this._logLevel=lh,this._logHandler=fh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ch[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const dh=(t,e)=>e.some(n=>t instanceof n);let po,go;function hh(){return po||(po=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ph(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gc=new WeakMap,As=new WeakMap,mc=new WeakMap,as=new WeakMap,si=new WeakMap;function gh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(It(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gc.set(n,t)}).catch(()=>{}),si.set(e,t),e}function mh(t){if(As.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});As.set(t,e)}let Ps={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return As.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return It(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _h(t){Ps=t(Ps)}function vh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cs(this),e,...n);return mc.set(r,e.sort?e.sort():[e]),It(r)}:ph().includes(t)?function(...e){return t.apply(cs(this),e),It(gc.get(this))}:function(...e){return It(t.apply(cs(this),e))}}function yh(t){return typeof t=="function"?vh(t):(t instanceof IDBTransaction&&mh(t),dh(t,hh())?new Proxy(t,Ps):t)}function It(t){if(t instanceof IDBRequest)return gh(t);if(as.has(t))return as.get(t);const e=yh(t);return e!==t&&(as.set(t,e),si.set(e,t)),e}const cs=t=>si.get(t);function bh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=It(o);return r&&o.addEventListener("upgradeneeded",a=>{r(It(o.result),a.oldVersion,a.newVersion,It(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Eh=["get","getKey","getAll","getAllKeys","count"],Ih=["put","add","delete","clear"],ls=new Map;function mo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ls.get(e))return ls.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ih.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Eh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return ls.set(e,i),i}_h(t=>({...t,get:(e,n,r)=>mo(e,n)||t.get(e,n,r),has:(e,n)=>!!mo(e,n)||t.has(e,n)}));/**
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
 */class wh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Os="@firebase/app",_o="0.11.1";/**
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
 */const it=new pc("@firebase/app"),Th="@firebase/app-compat",Rh="@firebase/analytics-compat",Ch="@firebase/analytics",Ah="@firebase/app-check-compat",Ph="@firebase/app-check",Oh="@firebase/auth",kh="@firebase/auth-compat",Nh="@firebase/database",Dh="@firebase/data-connect",Mh="@firebase/database-compat",xh="@firebase/functions",Lh="@firebase/functions-compat",Uh="@firebase/installations",Fh="@firebase/installations-compat",Hh="@firebase/messaging",$h="@firebase/messaging-compat",Bh="@firebase/performance",Vh="@firebase/performance-compat",jh="@firebase/remote-config",Wh="@firebase/remote-config-compat",Kh="@firebase/storage",zh="@firebase/storage-compat",Gh="@firebase/firestore",qh="@firebase/vertexai",Jh="@firebase/firestore-compat",Yh="firebase",Xh="11.3.1";/**
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
 */const ks="[DEFAULT]",Qh={[Os]:"fire-core",[Th]:"fire-core-compat",[Ch]:"fire-analytics",[Rh]:"fire-analytics-compat",[Ph]:"fire-app-check",[Ah]:"fire-app-check-compat",[Oh]:"fire-auth",[kh]:"fire-auth-compat",[Nh]:"fire-rtdb",[Dh]:"fire-data-connect",[Mh]:"fire-rtdb-compat",[xh]:"fire-fn",[Lh]:"fire-fn-compat",[Uh]:"fire-iid",[Fh]:"fire-iid-compat",[Hh]:"fire-fcm",[$h]:"fire-fcm-compat",[Bh]:"fire-perf",[Vh]:"fire-perf-compat",[jh]:"fire-rc",[Wh]:"fire-rc-compat",[Kh]:"fire-gcs",[zh]:"fire-gcs-compat",[Gh]:"fire-fst",[Jh]:"fire-fst-compat",[qh]:"fire-vertex","fire-js":"fire-js",[Yh]:"fire-js-all"};/**
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
 */const Ir=new Map,Zh=new Map,Ns=new Map;function vo(t,e){try{t.container.addComponent(e)}catch(n){it.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(Ns.has(e))return it.debug(`There were multiple attempts to register component ${e}.`),!1;Ns.set(e,t);for(const n of Ir.values())vo(n,t);for(const n of Zh.values())vo(n,t);return!0}function _c(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Oe(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ep={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new Wn("app","Firebase",ep);/**
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
 */class tp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const zn=Xh;function vc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ks,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wt.create("bad-app-name",{appName:String(s)});if(n||(n=dc()),!n)throw wt.create("no-options");const i=Ir.get(s);if(i){if(Er(n,i.options)&&Er(r,i.config))return i;throw wt.create("duplicate-app",{appName:s})}const o=new ah(s);for(const a of Ns.values())o.addComponent(a);const c=new tp(n,r,o);return Ir.set(s,c),c}function np(t=ks){const e=Ir.get(t);if(!e&&t===ks&&dc())return vc();if(!e)throw wt.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=Qh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),it.warn(c.join(" "));return}Fn(new fn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rp="firebase-heartbeat-database",sp=1,Hn="firebase-heartbeat-store";let us=null;function yc(){return us||(us=bh(rp,sp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Hn)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),us}async function ip(t){try{const n=(await yc()).transaction(Hn),r=await n.objectStore(Hn).get(bc(t));return await n.done,r}catch(e){if(e instanceof At)it.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});it.warn(n.message)}}}async function yo(t,e){try{const r=(await yc()).transaction(Hn,"readwrite");await r.objectStore(Hn).put(e,bc(t)),await r.done}catch(n){if(n instanceof At)it.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});it.warn(r.message)}}}function bc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const op=1024,ap=30;class cp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new up(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bo();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ap){const o=fp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){it.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bo(),{heartbeatsToSend:r,unsentEntries:s}=lp(this._heartbeatsCache.heartbeats),i=uc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return it.warn(n),""}}}function bo(){return new Date().toISOString().substring(0,10)}function lp(t,e=op){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Eo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Eo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class up{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jd()?Yd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ip(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eo(t){return uc(JSON.stringify({version:2,heartbeats:t})).length}function fp(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function dp(t){Fn(new fn("platform-logger",e=>new wh(e),"PRIVATE")),Fn(new fn("heartbeat",e=>new cp(e),"PRIVATE")),rn(Os,_o,t),rn(Os,_o,"esm2017"),rn("fire-js","")}dp("");var hp="firebase",pp="11.3.1";/**
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
 */rn(hp,pp,"app");function ii(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ec(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gp=Ec,Ic=new Wn("auth","Firebase",Ec());/**
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
 */const wr=new pc("@firebase/auth");function mp(t,...e){wr.logLevel<=X.WARN&&wr.warn(`Auth (${zn}): ${t}`,...e)}function cr(t,...e){wr.logLevel<=X.ERROR&&wr.error(`Auth (${zn}): ${t}`,...e)}/**
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
 */function Me(t,...e){throw oi(t,...e)}function Ke(t,...e){return oi(t,...e)}function wc(t,e,n){const r=Object.assign(Object.assign({},gp()),{[e]:n});return new Wn("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return wc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function oi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ic.create(t,...e)}function U(t,e,...n){if(!t)throw oi(e,...n)}function tt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cr(e),new Error(e)}function ot(t,e){t||tt(e)}/**
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
 */function Ds(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _p(){return Io()==="http:"||Io()==="https:"}function Io(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function vp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_p()||zd()||"connection"in navigator)?navigator.onLine:!0}function yp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Wd()||Gd()}get(){return vp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ai(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ep=new Gn(3e4,6e4);function Pt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ot(t,e,n,r,s={}){return Tc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Kn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:a},i);return Kd()||(l.referrerPolicy="no-referrer"),Sc.fetch()(Rc(t,t.config.apiHost,n,c),l)})}async function Tc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bp),e);try{const s=new wp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw tr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw tr(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw tr(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw tr(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw wc(t,u,l);Me(t,u)}}catch(s){if(s instanceof At)throw s;Me(t,"network-request-failed",{message:String(s)})}}async function qn(t,e,n,r,s={}){const i=await Ot(t,e,n,r,s);return"mfaPendingCredential"in i&&Me(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Rc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ai(t.config,s):`${t.config.apiScheme}://${s}`}function Ip(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),Ep.get())})}}function tr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}function wo(t){return t!==void 0&&t.enterprise!==void 0}class Sp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ip(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tp(t,e){return Ot(t,"GET","/v2/recaptchaConfig",Pt(t,e))}/**
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
 */async function Rp(t,e){return Ot(t,"POST","/v1/accounts:delete",e)}async function Cc(t,e){return Ot(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function On(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cp(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=ci(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:On(fs(s.auth_time)),issuedAtTime:On(fs(s.iat)),expirationTime:On(fs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fs(t){return Number(t)*1e3}function ci(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const s=fc(n);return s?JSON.parse(s):(cr("Failed to decode base64 JWT payload"),null)}catch(s){return cr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function So(t){const e=ci(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $n(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof At&&Ap(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ap({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Pp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ms{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=On(this.lastLoginAt),this.creationTime=On(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await $n(t,Cc(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ac(i.providerUserInfo):[],c=kp(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ms(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Op(t){const e=ct(t);await Sr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ac(t){return t.map(e=>{var{providerId:n}=e,r=ii(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Np(t,e){const n=await Tc(t,{},async()=>{const r=Kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Rc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Sc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dp(t,e){return Ot(t,"POST","/v2/accounts:revokeToken",Pt(t,e))}/**
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
 */class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):So(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){U(e.length!==0,"internal-error");const n=So(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Np(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new sn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return tt("not implemented")}}/**
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
 */function dt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ii(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ms(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await $n(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cp(this,e)}reload(){return Op(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await $n(this,Rp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,H=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,M=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:O,isAnonymous:j,providerData:se,stsTokenManager:Z}=n;U(D&&Z,e,"internal-error");const Se=sn.fromJSON(this.name,Z);U(typeof D=="string",e,"internal-error"),dt(h,e.name),dt(g,e.name),U(typeof O=="boolean",e,"internal-error"),U(typeof j=="boolean",e,"internal-error"),dt(m,e.name),dt(R,e.name),dt(P,e.name),dt(H,e.name),dt(M,e.name),dt(k,e.name);const Te=new nt({uid:D,auth:e,email:g,emailVerified:O,displayName:h,isAnonymous:j,photoURL:R,phoneNumber:m,tenantId:P,stsTokenManager:Se,createdAt:M,lastLoginAt:k});return se&&Array.isArray(se)&&(Te.providerData=se.map(Re=>Object.assign({},Re))),H&&(Te._redirectEventId=H),Te}static async _fromIdTokenResponse(e,n,r=!1){const s=new sn;s.updateFromServerResponse(n);const i=new nt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Sr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ac(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new sn;c.updateFromIdToken(r);const a=new nt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ms(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const To=new Map;function rt(t){ot(t instanceof Function,"Expected a class definition");let e=To.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,To.set(t,e),e)}/**
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
 */class Pc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pc.type="NONE";const Ro=Pc;/**
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
 */function lr(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=lr(this.userKey,s.apiKey,i),this.fullPersistenceKey=lr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new on(rt(Ro),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rt(Ro);const o=lr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=nt._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new on(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new on(i,e,r))}}/**
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
 */function Co(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Oc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xc(e))return"Blackberry";if(Lc(e))return"Webos";if(kc(e))return"Safari";if((e.includes("chrome/")||Nc(e))&&!e.includes("edge/"))return"Chrome";if(Mc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Oc(t=pe()){return/firefox\//i.test(t)}function kc(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nc(t=pe()){return/crios\//i.test(t)}function Dc(t=pe()){return/iemobile/i.test(t)}function Mc(t=pe()){return/android/i.test(t)}function xc(t=pe()){return/blackberry/i.test(t)}function Lc(t=pe()){return/webos/i.test(t)}function li(t=pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Mp(t=pe()){var e;return li(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xp(){return qd()&&document.documentMode===10}function Uc(t=pe()){return li(t)||Mc(t)||Lc(t)||xc(t)||/windows phone/i.test(t)||Dc(t)}/**
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
 */function Fc(t,e=[]){let n;switch(t){case"Browser":n=Co(pe());break;case"Worker":n=`${Co(pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zn}/${r}`}/**
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
 */class Lp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Up(t,e={}){return Ot(t,"GET","/v2/passwordPolicy",Pt(t,e))}/**
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
 */const Fp=6;class Hp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Fp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class $p{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ao(this),this.idTokenSubscription=new Ao(this),this.beforeStateQueue=new Lp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ic,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Cc(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Oe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(st(this));const n=e?ct(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Up(this),n=new Hp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jt(t){return ct(t)}class Ao{constructor(e){this.auth=e,this.observer=null,this.addObserver=th(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bp(t){jr=t}function Hc(t){return jr.loadJS(t)}function Vp(){return jr.recaptchaEnterpriseScript}function jp(){return jr.gapiScript}function Wp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Kp{constructor(){this.enterprise=new zp}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class zp{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Gp="recaptcha-enterprise",$c="NO_RECAPTCHA";class qp{constructor(e){this.type=Gp,this.auth=jt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Tp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Sp(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;wo(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o($c)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Kp().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&wo(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Vp();a.length!==0&&(a+=c),Hc(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Po(t,e,n,r=!1,s=!1){const i=new qp(t);let o;if(s)o=$c;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const a=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:a,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const a=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:a,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function xs(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Po(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Po(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function Jp(t,e){const n=_c(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Er(i,e??{}))return s;Me(s,"already-initialized")}return n.initialize({options:e})}function Yp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Xp(t,e,n){const r=jt(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Bc(e),{host:o,port:c}=Qp(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Zp()}function Bc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Qp(t){const e=Bc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Oo(o)}}}function Oo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ui{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tt("not implemented")}_getIdTokenResponse(e){return tt("not implemented")}_linkToIdToken(e,n){return tt("not implemented")}_getReauthenticationResolver(e){return tt("not implemented")}}async function eg(t,e){return Ot(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function tg(t,e){return qn(t,"POST","/v1/accounts:signInWithPassword",Pt(t,e))}/**
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
 */async function ng(t,e){return qn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}async function rg(t,e){return qn(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}/**
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
 */class Bn extends ui{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xs(e,n,"signInWithPassword",tg);case"emailLink":return ng(e,{email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xs(e,r,"signUpPassword",eg);case"emailLink":return rg(e,{idToken:n,email:this._email,oobCode:this._password});default:Me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function an(t,e){return qn(t,"POST","/v1/accounts:signInWithIdp",Pt(t,e))}/**
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
 */const sg="http://localhost";class $t extends ui{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Me("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ii(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new $t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,an(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:sg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Kn(n)}return e}}/**
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
 */function ig(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function og(t){const e=yn(bn(t)).link,n=e?yn(bn(e)).deep_link_id:null,r=yn(bn(t)).deep_link_id;return(r?yn(bn(r)).link:null)||r||n||e||t}class fi{constructor(e){var n,r,s,i,o,c;const a=yn(bn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=ig((s=a.mode)!==null&&s!==void 0?s:null);U(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=og(e);try{return new fi(n)}catch{return null}}}/**
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
 */class dn{constructor(){this.providerId=dn.PROVIDER_ID}static credential(e,n){return Bn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=fi.parseLink(n);return U(r,"argument-error"),Bn._fromEmailAndCode(e,r.code,r.tenantId)}}dn.PROVIDER_ID="password";dn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";dn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Jn extends Vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mt extends Jn{constructor(){super("facebook.com")}static credential(e){return $t._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";mt.PROVIDER_ID="facebook.com";/**
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
 */class _t extends Jn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $t._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
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
 */class vt extends Jn{constructor(){super("github.com")}static credential(e){return $t._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";/**
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
 */class yt extends Jn{constructor(){super("twitter.com")}static credential(e,n){return $t._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
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
 */async function ag(t,e){return qn(t,"POST","/v1/accounts:signUp",Pt(t,e))}/**
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
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nt._fromIdTokenResponse(e,r,s),o=ko(r);return new Bt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ko(r);return new Bt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ko(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tr extends At{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Tr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Tr(e,n,r,s)}}function jc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tr._fromErrorAndOperation(t,i,e,r):i})}async function cg(t,e,n=!1){const r=await $n(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}/**
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
 */async function lg(t,e,n=!1){const{auth:r}=t;if(Oe(r.app))return Promise.reject(st(r));const s="reauthenticate";try{const i=await $n(t,jc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=ci(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),Bt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Me(r,"user-mismatch"),i}}/**
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
 */async function Wc(t,e,n=!1){if(Oe(t.app))return Promise.reject(st(t));const r="signIn",s=await jc(t,r,e),i=await Bt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ug(t,e){return Wc(jt(t),e)}/**
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
 */async function Kc(t){const e=jt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fg(t,e,n){if(Oe(t.app))return Promise.reject(st(t));const r=jt(t),o=await xs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ag).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Kc(t),a}),c=await Bt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function dg(t,e,n){return Oe(t.app)?Promise.reject(st(t)):ug(ct(t),dn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Kc(t),r})}function hg(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function pg(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function gg(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function mg(t){return ct(t).signOut()}const Rr="__sak";/**
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
 */class zc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rr,"1"),this.storage.removeItem(Rr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const _g=1e3,vg=10;class Gc extends zc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Uc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);xp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_g)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gc.type="LOCAL";const yg=Gc;/**
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
 */class qc extends zc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qc.type="SESSION";const Jc=qc;/**
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
 */function bg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Wr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await bg(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wr.receivers=[];/**
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
 */function di(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Eg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=di("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ze(){return window}function Ig(t){ze().location.href=t}/**
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
 */function Yc(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function wg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Tg(){return Yc()?self:null}/**
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
 */const Xc="firebaseLocalStorageDb",Rg=1,Cr="firebaseLocalStorage",Qc="fbase_key";class Yn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Kr(t,e){return t.transaction([Cr],e?"readwrite":"readonly").objectStore(Cr)}function Cg(){const t=indexedDB.deleteDatabase(Xc);return new Yn(t).toPromise()}function Ls(){const t=indexedDB.open(Xc,Rg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Cr,{keyPath:Qc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Cr)?e(r):(r.close(),await Cg(),e(await Ls()))})})}async function No(t,e,n){const r=Kr(t,!0).put({[Qc]:e,value:n});return new Yn(r).toPromise()}async function Ag(t,e){const n=Kr(t,!1).get(e),r=await new Yn(n).toPromise();return r===void 0?null:r.value}function Do(t,e){const n=Kr(t,!0).delete(e);return new Yn(n).toPromise()}const Pg=800,Og=3;class Zc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ls(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Og)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wr._getInstance(Tg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wg(),!this.activeServiceWorker)return;this.sender=new Eg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ls();return await No(e,Rr,"1"),await Do(e,Rr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>No(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ag(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Do(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Kr(s,!1).getAll();return new Yn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zc.type="LOCAL";const kg=Zc;new Gn(3e4,6e4);/**
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
 */function Ng(t,e){return e?rt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hi extends ui{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Dg(t){return Wc(t.auth,new hi(t),t.bypassAuthState)}function Mg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),lg(n,new hi(t),t.bypassAuthState)}async function xg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),cg(n,new hi(t),t.bypassAuthState)}/**
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
 */class el{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Dg;case"linkViaPopup":case"linkViaRedirect":return xg;case"reauthViaPopup":case"reauthViaRedirect":return Mg;default:Me(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Lg=new Gn(2e3,1e4);class Xt extends el{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Lg.get())};e()}}Xt.currentPopupAction=null;/**
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
 */const Ug="pendingRedirect",ur=new Map;class Fg extends el{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ur.get(this.auth._key());if(!e){try{const r=await Hg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ur.set(this.auth._key(),e)}return this.bypassAuthState||ur.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hg(t,e){const n=Vg(e),r=Bg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $g(t,e){ur.set(t._key(),e)}function Bg(t){return rt(t._redirectPersistence)}function Vg(t){return lr(Ug,t.config.apiKey,t.name)}async function jg(t,e,n=!1){if(Oe(t.app))return Promise.reject(st(t));const r=jt(t),s=Ng(r,e),o=await new Fg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Wg=10*60*1e3;class Kg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mo(e))}saveEventToCache(e){this.cachedEventUids.add(Mo(e)),this.lastProcessedEventTime=Date.now()}}function Mo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function zg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tl(t);default:return!1}}/**
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
 */async function Gg(t,e={}){return Ot(t,"GET","/v1/projects",e)}/**
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
 */const qg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jg=/^https?/;async function Yg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Gg(t);for(const n of e)try{if(Xg(n))return}catch{}Me(t,"unauthorized-domain")}function Xg(t){const e=Ds(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jg.test(n))return!1;if(qg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Qg=new Gn(3e4,6e4);function xo(){const t=ze().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zg(t){return new Promise((e,n)=>{var r,s,i;function o(){xo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xo(),n(Ke(t,"network-request-failed"))},timeout:Qg.get()})}if(!((s=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ze().gapi)===null||i===void 0)&&i.load)o();else{const c=Wp("iframefcb");return ze()[c]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},Hc(`${jp()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw fr=null,e})}let fr=null;function em(t){return fr=fr||Zg(t),fr}/**
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
 */const tm=new Gn(5e3,15e3),nm="__/auth/iframe",rm="emulator/auth/iframe",sm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},im=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function om(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ai(e,rm):`https://${t.config.authDomain}/${nm}`,r={apiKey:e.apiKey,appName:t.name,v:zn},s=im.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Kn(r).slice(1)}`}async function am(t){const e=await em(t),n=ze().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:om(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sm,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),c=ze().setTimeout(()=>{i(o)},tm.get());function a(){ze().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const cm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lm=500,um=600,fm="_blank",dm="http://localhost";class Lo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hm(t,e,n,r=lm,s=um){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},cm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=pe().toLowerCase();n&&(c=Nc(l)?fm:n),Oc(l)&&(e=e||dm,a.scrollbars="yes");const u=Object.entries(a).reduce((g,[m,R])=>`${g}${m}=${R},`,"");if(Mp(l)&&c!=="_self")return pm(e||"",c),new Lo(null);const h=window.open(e||"",c,u);U(h,t,"popup-blocked");try{h.focus()}catch{}return new Lo(h)}function pm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gm="__/auth/handler",mm="emulator/auth/handler",_m=encodeURIComponent("fac");async function Uo(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zn,eventId:s};if(e instanceof Vc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Jn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${_m}=${encodeURIComponent(a)}`:"";return`${vm(t)}?${Kn(c).slice(1)}${l}`}function vm({config:t}){return t.emulator?ai(t,mm):`https://${t.authDomain}/${gm}`}/**
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
 */const ds="webStorageSupport";class ym{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jc,this._completeRedirectFn=jg,this._overrideRedirectResult=$g}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Uo(e,n,r,Ds(),s);return hm(e,o,di())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Uo(e,n,r,Ds(),s);return Ig(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await am(e),r=new Kg(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ds,{type:ds},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ds];o!==void 0&&n(!!o),Me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uc()||kc()||li()}}const bm=ym;var Fo="@firebase/auth",Ho="1.9.0";/**
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
 */class Em{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Im(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wm(t){Fn(new fn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fc(t)},l=new $p(r,s,i,a);return Yp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new fn("auth-internal",e=>{const n=jt(e.getProvider("auth").getImmediate());return(r=>new Em(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Fo,Ho,Im(t)),rn(Fo,Ho,"esm2017")}/**
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
 */const Sm=5*60,Tm=hc("authIdTokenMaxAge")||Sm;let $o=null;const Rm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tm)return;const s=n==null?void 0:n.token;$o!==s&&($o=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pi(t=np()){const e=_c(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Jp(t,{popupRedirectResolver:bm,persistence:[kg,yg,Jc]}),r=hc("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Rm(i.toString());pg(n,o,()=>o(n.currentUser)),hg(n,c=>o(c))}}const s=Vd("auth");return s&&Xp(n,`http://${s}`),n}function Cm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Bp({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Cm().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wm("Browser");const Am={apiKey:"AIzaSyAjF9F43elpUZv4ye91YGAP291DbEH0yQc",authDomain:"vue-firebase-8bf15.firebaseapp.com",projectId:"vue-firebase-8bf15",storageBucket:"vue-firebase-8bf15.firebasestorage.app",messagingSenderId:"455654427683",appId:"1:455654427683:web:33c572e15a4733c3a1b596",measurementId:"G-XWKPG99BMM"},Pm=vc(Am),gi=pi(Pm),Om={class:"login-container"},km={key:0},Nm={__name:"Login",setup(t){const e=Et(""),n=Et(""),r=Vr(),s=Et(""),i=async()=>{try{await dg(gi,e.value,n.value),r.push("/dashboard")}catch(c){s.value=c.message}},o=()=>{r.push("/")};return(c,a)=>(St(),Ht("div",Om,[a[2]||(a[2]=re("h2",null,"Iniciar Sesión",-1)),gr(re("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),type:"email",placeholder:"Correo"},null,512),[[br,e.value]]),gr(re("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),type:"password",placeholder:"Contraseña"},null,512),[[br,n.value]]),re("div",{class:"buttons"},[re("button",{onClick:i},"Iniciar Sesión"),re("button",{onClick:o},"Regresar")]),s.value?(St(),Ht("p",km,Dr(s.value),1)):Wa("",!0)]))}},Dm={class:"register-container"},Mm={key:0},xm={__name:"Register",setup(t){const e=Et(""),n=Et(""),r=Vr(),s=Et(""),i=async()=>{try{await fg(gi,e.value,n.value),r.push("/dashboard")}catch(c){s.value=c.message}},o=()=>{r.push("/")};return(c,a)=>(St(),Ht("div",Dm,[a[2]||(a[2]=re("h2",null,"Registro",-1)),gr(re("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),type:"email",placeholder:"Correo"},null,512),[[br,e.value]]),gr(re("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>n.value=l),type:"password",placeholder:"Contraseña"},null,512),[[br,n.value]]),re("div",{class:"buttons"},[re("button",{onClick:i},"Registrarse"),re("button",{onClick:o},"Regresar")]),s.value?(St(),Ht("p",Mm,Dr(s.value),1)):Wa("",!0)]))}},Lm={class:"dashboard-container"},Um={class:"user-info"},Fm={__name:"Dashboard",setup(t){const e=Vr(),n=Et({name:"Usuario"}),r=()=>{const s=pi();mg(s).then(()=>{e.push("/login")}).catch(i=>{console.error("Error al cerrar sesión:",i)})};return(s,i)=>(St(),Ht("div",Lm,[i[0]||(i[0]=re("h1",{class:"title"},"Bienvenido al Dashboard",-1)),re("p",Um,"¡Hola, "+Dr(n.value.name)+"! Estás autenticado.",1),re("button",{onClick:r,class:"logout-button"},"Cerrar Sesión")]))}},Hm=ti(Fm,[["__scopeId","data-v-5552e044"]]),$m=[{path:"/",component:Md},{path:"/login",component:Nm},{path:"/register",component:xm},{path:"/dashboard",component:Hm,meta:{requiresAuth:!0}}],nl=Od({history:id(),routes:$m});nl.beforeEach((t,e,n)=>{const s=pi().currentUser;t.meta.requiresAuth&&!s?n("/login"):n()});let nr;gg(gi,()=>{nr||(nr=wf(Af),nr.use(nl),nr.mount("#app"))});
