const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-CCHNFwWX.js","assets/Home-CQ7iOAdF.css","assets/Resume-u5uHHtk-.js","assets/Resume-D5U5GwHI.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const m={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return Me(this.context.count)},getNextContextId(){return Me(this.context.count++)}};function Me(e){const t=String(e),n=t.length-1;return m.context.id+(n?String.fromCharCode(96+n):"")+t}function te(e){m.context=e}const wt=(e,t)=>e===t,ae=Symbol("solid-proxy"),qe=typeof Proxy=="function",ce={equals:wt};let Ke=tt;const F=1,ue=2,ze={owned:null,cleanups:null,context:null,owner:null},we={};var y=null;let be=null,bt=null,w=null,_=null,D=null,he=0;function Xe(e,t){const n=w,r=y,s=e.length===0,o=t===void 0?r:t,i=s?ze:{owned:null,cleanups:null,context:o?o.context:null,owner:o},l=s?e:()=>e(()=>R(()=>ne(i)));y=i,w=null;try{return B(l,!0)}finally{w=n,y=r}}function U(e,t){t=t?Object.assign({},ce,t):ce;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),et(n,s));return[Qe.bind(n),r]}function vt(e,t,n){const r=ge(e,t,!0,F);Y(r)}function M(e,t,n){const r=ge(e,t,!1,F);Y(r)}function xt(e,t,n){Ke=_t;const r=ge(e,t,!1,F);r.user=!0,D?D.push(r):Y(r)}function C(e,t,n){n=n?Object.assign({},ce,n):ce;const r=ge(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Y(r),Qe.bind(r)}function At(e){return e&&typeof e=="object"&&"then"in e}function Pt(e,t,n){let r,s,o;arguments.length===1?(r=!0,s=e,o={}):(r=e,s=t,o={});let i=null,l=we,a=null,c=!1,u="initialValue"in o,f=typeof r=="function"&&C(r);const d=new Set,[h,A]=(o.storage||U)(o.initialValue),[g,p]=U(void 0),[P,v]=U(void 0,{equals:!1}),[j,N]=U(u?"ready":"unresolved");m.context&&(a=m.getNextContextId(),o.ssrLoadFrom==="initial"?l=o.initialValue:m.load&&m.has(a)&&(l=m.load(a)));function O(k,S,E,V){return i===k&&(i=null,V!==void 0&&(u=!0),(k===l||S===l)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(V,{value:S})),l=we,W(S,E)),S}function W(k,S){B(()=>{S===void 0&&A(()=>k),N(S!==void 0?"errored":u?"ready":"unresolved"),p(S);for(const E of d.keys())E.decrement();d.clear()},!1)}function X(){const k=Et,S=h(),E=g();if(E!==void 0&&!i)throw E;return w&&w.user,S}function Q(k=!0){if(k!==!1&&c)return;c=!1;const S=f?f():r;if(S==null||S===!1){O(i,R(h));return}const E=l!==we?l:R(()=>s(S,{value:h(),refetching:k}));return At(E)?(i=E,"value"in E?(E.status==="success"?O(i,E.value,void 0,S):O(i,void 0,Pe(E.value),S),E):(c=!0,queueMicrotask(()=>c=!1),B(()=>{N(u?"refreshing":"pending"),v()},!1),E.then(V=>O(E,V,void 0,S),V=>O(E,void 0,Pe(V),S)))):(O(i,E,void 0,S),E)}return Object.defineProperties(X,{state:{get:()=>j()},error:{get:()=>g()},loading:{get(){const k=j();return k==="pending"||k==="refreshing"}},latest:{get(){if(!u)return X();const k=g();if(k&&!i)throw k;return h()}}}),f?vt(()=>Q(!1)):Q(!1),[X,{refetch:Q,mutate:A}]}function Ct(e){return B(e,!1)}function R(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function _e(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(o)return o=!1,i;const a=R(()=>t(l,s,i));return s=l,a}}function ar(e){xt(()=>R(e))}function Ze(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function Ge(){return y}function Je(e,t){const n=y,r=w;y=e,w=null;try{return B(t,!0)}catch(s){Re(s)}finally{y=n,w=r}}function St(e){const t=w,n=y;return Promise.resolve().then(()=>{w=t,y=n;let r;return B(e,!1),w=y=null,r?r.done:void 0})}function Ye(e,t){const n=Symbol("context");return{id:n,Provider:Ot(n),defaultValue:e}}function Oe(e){let t;return y&&y.context&&(t=y.context[e.id])!==void 0?t:e.defaultValue}function $e(e){const t=C(e),n=C(()=>Ce(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Et;function Qe(){if(this.sources&&this.state)if(this.state===F)Y(this);else{const e=_;_=null,B(()=>de(this),!1),_=e}if(w){const e=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(e)):(w.sources=[this],w.sourceSlots=[e]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function et(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],i=be&&be.running;i&&be.disposed.has(o),(i?!o.tState:!o.state)&&(o.pure?_.push(o):D.push(o),o.observers&&nt(o)),i||(o.state=F)}if(_.length>1e6)throw _=[],new Error},!1)),t}function Y(e){if(!e.fn)return;ne(e);const t=he;Lt(e,e.value,t)}function Lt(e,t,n){let r;const s=y,o=w;w=y=e;try{r=e.fn(t)}catch(i){return e.pure&&(e.state=F,e.owned&&e.owned.forEach(ne),e.owned=null),e.updatedAt=n+1,Re(i)}finally{w=o,y=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?et(e,r):e.value=r,e.updatedAt=n)}function ge(e,t,n,r=F,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:y?y.context:null,pure:n};return y===null||y!==ze&&(y.owned?y.owned.push(o):y.owned=[o]),o}function fe(e){if(e.state===0)return;if(e.state===ue)return de(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<he);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===F)Y(e);else if(e.state===ue){const r=_;_=null,B(()=>de(e,t[0]),!1),_=r}}function B(e,t){if(_)return e();let n=!1;t||(_=[]),D?n=!0:D=[],he++;try{const r=e();return kt(n),r}catch(r){n||(D=null),_=null,Re(r)}}function kt(e){if(_&&(tt(_),_=null),e)return;const t=D;D=null,t.length&&B(()=>Ke(t),!1)}function tt(e){for(let t=0;t<e.length;t++)fe(e[t])}function _t(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:fe(r)}if(m.context){if(m.count){m.effects||(m.effects=[]),m.effects.push(...e.slice(0,n));return}te()}for(m.effects&&(m.done||!m.count)&&(e=[...m.effects,...e],n+=m.effects.length,delete m.effects),t=0;t<n;t++)fe(e[t])}function de(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===F?r!==t&&(!r.updatedAt||r.updatedAt<he)&&fe(r):s===ue&&de(r,t)}}}function nt(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ue,n.pure?_.push(n):D.push(n),n.observers&&nt(n))}}function ne(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)ne(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ne(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Pe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Re(e,t=y){throw Pe(e)}function Ce(e){if(typeof e=="function"&&!e.length)return Ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Ce(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Ot(e,t){return function(r){let s;return M(()=>s=R(()=>(y.context={...y.context,[e]:r.value},$e(()=>r.children))),void 0),s}}function L(e,t){return R(()=>e(t||{}))}function ie(){return!0}const Se={get(e,t,n){return t===ae?n:e.get(t)},has(e,t){return t===ae?!0:e.has(t)},set:ie,deleteProperty:ie,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ie,deleteProperty:ie}},ownKeys(e){return e.keys()}};function ve(e){return(e=typeof e=="function"?e():e)?e:{}}function $t(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function Ee(...e){let t=!1;for(let i=0;i<e.length;i++){const l=e[i];t=t||!!l&&ae in l,e[i]=typeof l=="function"?(t=!0,C(l)):l}if(qe&&t)return new Proxy({get(i){for(let l=e.length-1;l>=0;l--){const a=ve(e[l])[i];if(a!==void 0)return a}},has(i){for(let l=e.length-1;l>=0;l--)if(i in ve(e[l]))return!0;return!1},keys(){const i=[];for(let l=0;l<e.length;l++)i.push(...Object.keys(ve(e[l])));return[...new Set(i)]}},Se);const n={},r=Object.create(null);for(let i=e.length-1;i>=0;i--){const l=e[i];if(!l)continue;const a=Object.getOwnPropertyNames(l);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(l,u);if(!r[u])r[u]=f.get?{enumerable:!0,configurable:!0,get:$t.bind(n[u]=[f.get.bind(l)])}:f.value!==void 0?f:void 0;else{const d=n[u];d&&(f.get?d.push(f.get.bind(l)):f.value!==void 0&&d.push(()=>f.value))}}}const s={},o=Object.keys(r);for(let i=o.length-1;i>=0;i--){const l=o[i],a=r[l];a&&a.get?Object.defineProperty(s,l,a):s[l]=a?a.value:void 0}return s}function Rt(e,...t){if(qe&&ae in e){const s=new Set(t.length>1?t.flat():t[0]),o=t.map(i=>new Proxy({get(l){return i.includes(l)?e[l]:void 0},has(l){return i.includes(l)&&l in e},keys(){return i.filter(l=>l in e)}},Se));return o.push(new Proxy({get(i){return s.has(i)?void 0:e[i]},has(i){return s.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!s.has(i))}},Se)),o}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,s),i=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let l=!1,a=0;for(const c of t)c.includes(s)&&(l=!0,i?r[a][s]=o.value:Object.defineProperty(r[a],s,o)),++a;l||(i?n[s]=o.value:Object.defineProperty(n,s,o))}return[...r,n]}function Ne(e){let t,n;const r=s=>{const o=m.context;if(o){const[l,a]=U();m.count||(m.count=0),m.count++,(n||(n=e())).then(c=>{!m.done&&te(o),m.count--,a(()=>c.default),te()}),t=l}else if(!t){const[l]=Pt(()=>(n||(n=e())).then(a=>a.default));t=l}let i;return C(()=>(i=t())?R(()=>{if(!o||m.done)return i(s);const l=m.context;te(o);const a=i(s);return te(l),a}):"")};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}const Nt=e=>`Stale read from <${e}>.`;function rt(e){const t=e.keyed,n=C(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return C(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?R(()=>s(t?r:()=>{if(!R(n))throw Nt("Show");return e.when})):s}return e.fallback},void 0,void 0)}const Tt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],It=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Tt]),jt=new Set(["innerHTML","textContent","innerText","children"]),Ut=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Mt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Bt(e,t){const n=Mt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Dt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function Ft(e,t,n){let r=n.length,s=t.length,o=r,i=0,l=0,a=t[s-1].nextSibling,c=null;for(;i<s||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const u=o<r?l?n[l-1].nextSibling:n[o-l]:a;for(;l<o;)e.insertBefore(n[l++],u)}else if(o===l)for(;i<s;)(!c||!c.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],u),t[s]=n[o]}else{if(!c){c=new Map;let f=l;for(;f<o;)c.set(n[f],f++)}const u=c.get(t[i]);if(u!=null)if(l<u&&u<o){let f=i,d=1,h;for(;++f<s&&f<o&&!((h=c.get(t[f]))==null||h!==u+d);)d++;if(d>u-l){const A=t[i];for(;l<u;)e.insertBefore(n[l++],A)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const Be="_$DX_DELEGATE";function Vt(e,t,n,r={}){let s;return Xe(o=>{s=o,t===document?e():$(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function I(e,t,n){let r;const s=()=>{const i=document.createElement("template");return i.innerHTML=e,i.content.firstChild},o=()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function st(e,t=window.document){const n=t[Be]||(t[Be]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,Yt))}}function K(e,t,n){se(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Ht(e,t,n){se(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function Wt(e,t){se(e)||(t==null?e.removeAttribute("class"):e.className=t)}function qt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n,typeof n!="function"&&n)}function Kt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,i;for(o=0,i=s.length;o<i;o++){const l=s[o];!l||l==="undefined"||t[l]||(De(e,l,!1),delete n[l])}for(o=0,i=r.length;o<i;o++){const l=r[o],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(De(e,l,!0),n[l]=a)}return n}function zt(e,t,n){if(!t)return n?K(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function Xt(e,t={},n,r){const s={};return M(()=>s.children=re(e,t.children,s.children)),M(()=>typeof t.ref=="function"&&Zt(t.ref,e)),M(()=>Gt(e,t,n,!0,s,!0)),s}function Zt(e,t,n){return R(()=>e(t,n))}function $(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return re(e,t,r,n);M(s=>re(e,t(),s,n),r)}function Gt(e,t,n,r,s={},o=!1){t||(t={});for(const i in s)if(!(i in t)){if(i==="children")continue;s[i]=Fe(e,i,null,s[i],n,o,t)}for(const i in t){if(i==="children")continue;const l=t[i];s[i]=Fe(e,i,l,s[i],n,o,t)}}function se(e){return!!m.context&&!m.done&&(!e||e.isConnected)}function Jt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function De(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function Fe(e,t,n,r,s,o,i){let l,a,c,u,f;if(t==="style")return zt(e,n,r);if(t==="classList")return Kt(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const d=t.slice(3);r&&e.removeEventListener(d,r,typeof r!="function"&&r),n&&e.addEventListener(d,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const d=t.slice(10);r&&e.removeEventListener(d,r,!0),n&&e.addEventListener(d,n,!0)}else if(t.slice(0,2)==="on"){const d=t.slice(2).toLowerCase(),h=Dt.has(d);if(!h&&r){const A=Array.isArray(r)?r[0]:r;e.removeEventListener(d,A)}(h||n)&&(qt(e,d,n,h),h&&st([d]))}else if(t.slice(0,5)==="attr:")K(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")Ht(e,t.slice(5),n);else if((f=t.slice(0,5)==="prop:")||(c=jt.has(t))||(u=Bt(t,e.tagName))||(a=It.has(t))||(l=e.nodeName.includes("-")||"is"in i)){if(f)t=t.slice(5),a=!0;else if(se(e))return n;t==="class"||t==="className"?Wt(e,n):l&&!a&&!c?e[Jt(t)]=n:e[u||t]=n}else K(e,Ut[t]||t,n);return n}function Yt(e){if(m.registry&&m.events&&m.events.find(([a,c])=>c===e))return;let t=e.target;const n=`$$${e.type}`,r=e.target,s=e.currentTarget,o=a=>Object.defineProperty(e,"target",{configurable:!0,value:a}),i=()=>{const a=t[n];if(a&&!t.disabled){const c=t[`${n}Data`];if(c!==void 0?a.call(t,c,e):a.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},l=()=>{for(;i()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),m.registry&&!m.done&&(m.done=_$HY.done=!0),e.composedPath){const a=e.composedPath();o(a[0]);for(let c=0;c<a.length-2&&(t=a[c],!!i());c++){if(t._$host){t=t._$host,l();break}if(t.parentNode===s)break}}else l();o(r)}function re(e,t,n,r,s){const o=se(e);if(o){!n&&(n=[...e.childNodes]);let a=[];for(let c=0;c<n.length;c++){const u=n[c];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():a.push(u)}n=a}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(o||i==="number"&&(t=t.toString(),t===n))return n;if(l){let a=n[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),n=J(e,n,r,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(o)return n;n=J(e,n,r)}else{if(i==="function")return M(()=>{let a=t();for(;typeof a=="function";)a=a();n=re(e,a,n,r)}),()=>n;if(Array.isArray(t)){const a=[],c=n&&Array.isArray(n);if(Le(a,t,n,s))return M(()=>n=re(e,a,n,r,!0)),()=>n;if(o){if(!a.length)return n;if(r===void 0)return n=[...e.childNodes];let u=a[0];if(u.parentNode!==e)return n;const f=[u];for(;(u=u.nextSibling)!==r;)f.push(u);return n=f}if(a.length===0){if(n=J(e,n,r),l)return n}else c?n.length===0?Ve(e,a,r):Ft(e,n,a):(n&&J(e),Ve(e,a));n=a}else if(t.nodeType){if(o&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=J(e,n,r,t);J(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Le(e,t,n,r){let s=!1;for(let o=0,i=t.length;o<i;o++){let l=t[o],a=n&&n[e.length],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=Le(e,l,a)||s;else if(c==="function")if(r){for(;typeof l=="function";)l=l();s=Le(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||s}else e.push(l),s=!0;else{const u=String(l);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return s}function Ve(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function J(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(s!==l){const a=l.parentNode===e;!o&&!i?a?e.replaceChild(s,l):e.insertBefore(s,n):a&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const Qt=()=>{},ot=!1;function it(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const i={to:s,options:o,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:a=>{a&&(n=!0),l.navigate(s,{...o,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let ke;function Te(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ke=window.history.state._depth}Te();function en(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function tn(e,t){let n=!1;return()=>{const r=ke;Te();const s=r==null?null:ke-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const nn=/^(?:[a-z0-9]+:)?\/\//i,rn=/^\/+|(\/)\/+$/g,lt="http://sr";function z(e,t=!1){const n=e.replace(rn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function le(e,t,n){if(nn.test(t))return;const r=z(e),s=n&&z(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+z(t,!o)}function sn(e,t){if(e==null)throw new Error(t);return e}function on(e,t){return z(e).replace(/\/*(\*.*)?$/g,"")+z(t)}function at(e){const t={};return e.searchParams.forEach((n,r)=>{r in t?Array.isArray(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n}),t}function ln(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),i=o.length;return l=>{const a=l.split("/").filter(Boolean),c=a.length-i;if(c<0||c>0&&s===void 0&&!t)return null;const u={path:i?"":"/",params:{}},f=d=>n===void 0?void 0:n[d];for(let d=0;d<i;d++){const h=o[d],A=h[0]===":",g=A?a[d]:a[d].toLowerCase(),p=A?h.slice(1):h.toLowerCase();if(A&&xe(g,f(p)))u.params[p]=g;else if(A||!xe(g,p))return null;u.path+=`/${g}`}if(s){const d=c?a.slice(-c).join("/"):"";if(xe(d,f(s)))u.params[s]=d;else return null}return u}}function xe(e,t){const n=r=>r===e;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function an(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function ct(e){const t=new Map,n=Ge();return new Proxy({},{get(r,s){return t.has(s)||Je(n,()=>t.set(s,C(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ut(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return ut(r).reduce((o,i)=>[...o,...s.map(l=>l+i)],[])}const cn=100,ft=Ye(),Ie=Ye(),me=()=>sn(Oe(ft),"<A> and 'use' router primitives can be only used inside a Route."),un=()=>Oe(Ie)||me().base,fn=e=>{const t=un();return C(()=>t.resolvePath(e()))},dn=e=>{const t=me();return C(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},dt=()=>me().navigatorFactory(),ht=()=>me().location;function hn(e,t=""){const{component:n,preload:r,load:s,children:o,info:i}=e,l=!o||Array.isArray(o)&&!o.length,a={key:e,component:n,preload:r||s,info:i};return gt(e.path).reduce((c,u)=>{for(const f of ut(u)){const d=on(t,f);let h=l?d:d.split("/*",1)[0];h=h.split("/").map(A=>A.startsWith(":")||A.startsWith("*")?A:encodeURIComponent(A)).join("/"),c.push({...a,originalPath:u,pattern:h,matcher:ln(h,!l,e.matchFilters)})}return c},[])}function gn(e,t=0){return{routes:e,score:an(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function gt(e){return Array.isArray(e)?e:[e]}function mt(e,t="",n=[],r=[]){const s=gt(e);for(let o=0,i=s.length;o<i;o++){const l=s[o];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const a=hn(l,t);for(const c of a){n.push(c);const u=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!u)mt(l.children,c.pattern,n,r);else{const f=gn([...n],r.length);r.push(f)}n.pop()}}}return n.length?r:r.sort((o,i)=>i.score-o.score)}function Ae(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function mn(e,t,n){const r=new URL(lt),s=C(u=>{const f=e();try{return new URL(f,r)}catch{return console.error(`Invalid path ${f}`),u}},r,{equals:(u,f)=>u.href===f.href}),o=C(()=>s().pathname),i=C(()=>s().search,!0),l=C(()=>s().hash),a=()=>"",c=_e(i,()=>at(s()));return{get pathname(){return o()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return a()},query:n?n(c):ct(c)}}let q;function pn(){return q}function yn(e,t,n,r={}){const{signal:[s,o],utils:i={}}=e,l=i.parsePath||(b=>b),a=i.renderPath||(b=>b),c=i.beforeLeave||it(),u=le("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&o({value:u,replace:!0,scroll:!1});const[f,d]=U(!1);let h;const A=(b,x)=>{x.value===g()&&x.state===P()||(h===void 0&&d(!0),q=b,h=x,St(()=>{h===x&&(p(h.value),v(h.state),O[1](T=>T.filter(Z=>Z.pending)))}).finally(()=>{h===x&&Ct(()=>{q=void 0,b==="navigate"&&V(h),d(!1),h=void 0})}))},[g,p]=U(s().value),[P,v]=U(s().state),j=mn(g,P,i.queryWrapper),N=[],O=U([]),W=C(()=>typeof r.transformUrl=="function"?Ae(t(),r.transformUrl(j.pathname)):Ae(t(),j.pathname)),X=()=>{const b=W(),x={};for(let T=0;T<b.length;T++)Object.assign(x,b[T].params);return x},Q=i.paramsWrapper?i.paramsWrapper(X,t):ct(X),k={pattern:u,path:()=>u,outlet:()=>null,resolvePath(b){return le(u,b)}};return M(_e(s,b=>A("native",b),{defer:!0})),{base:k,location:j,params:Q,isRouting:f,renderPath:a,parsePath:l,navigatorFactory:E,matches:W,beforeLeave:c,preloadRoute:yt,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:O};function S(b,x,T){R(()=>{if(typeof x=="number"){x&&(i.go?i.go(x):console.warn("Router integration does not support relative routing"));return}const Z=!x||x[0]==="?",{replace:pe,resolve:G,scroll:ye,state:ee}={replace:!1,resolve:!Z,scroll:!0,...T},oe=G?b.resolvePath(x):le(Z&&j.pathname||"",x);if(oe===void 0)throw new Error(`Path '${x}' is not a routable path`);if(N.length>=cn)throw new Error("Too many redirects");const Ue=g();(oe!==Ue||ee!==P())&&(ot||c.confirm(oe,T)&&(N.push({value:Ue,replace:pe,scroll:ye,state:P()}),A("navigate",{value:oe,state:ee})))})}function E(b){return b=b||Oe(Ie)||k,(x,T)=>S(b,x,T)}function V(b){const x=N[0];x&&(o({...b,replace:x.replace,scroll:x.scroll}),N.length=0)}function yt(b,x){const T=Ae(t(),b.pathname),Z=q;q="preload";for(let pe in T){const{route:G,params:ye}=T[pe];G.component&&G.component.preload&&G.component.preload();const{preload:ee}=G;x&&ee&&Je(n(),()=>ee({params:ye,location:{pathname:b.pathname,search:b.search,hash:b.hash,query:at(b),state:null,key:""},intent:"preload"}))}q=Z}}function wn(e,t,n,r){const{base:s,location:o,params:i}=e,{pattern:l,component:a,preload:c}=r().route,u=C(()=>r().path);a&&a.preload&&a.preload();const f=c?c({params:i,location:o,intent:q||"initial"}):void 0;return{parent:t,pattern:l,path:u,outlet:()=>a?L(a,{params:i,location:o,data:f,get children(){return n()}}):n(),resolvePath(h){return le(s.path(),h,u())}}}const pt=e=>t=>{const{base:n}=t,r=$e(()=>t.children),s=C(()=>mt(r(),t.base||""));let o;const i=yn(e,s,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(i),L(ft.Provider,{value:i,get children(){return L(bn,{routerState:i,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[C(()=>(o=Ge())&&null),L(vn,{routerState:i,get branches(){return s()}})]}})}})};function bn(e){const t=e.routerState.location,n=e.routerState.params,r=C(()=>e.preload&&R(()=>{e.preload({params:n,location:t,intent:pn()||"initial"})}));return L(rt,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:s=>L(s,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function vn(e){const t=[];let n;const r=C(_e(e.routerState.matches,(s,o,i)=>{let l=o&&s.length===o.length;const a=[];for(let c=0,u=s.length;c<u;c++){const f=o&&o[c],d=s[c];i&&f&&d.route.key===f.route.key?a[c]=i[c]:(l=!1,t[c]&&t[c](),Xe(h=>{t[c]=h,a[c]=wn(e.routerState,a[c-1]||e.routerState.base,He(()=>r()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(s.length).forEach(c=>c()),i&&l?i:(n=a[0],a)}));return He(()=>r()&&n)()}const He=e=>()=>L(rt,{get when(){return e()},keyed:!0,children:t=>L(Ie.Provider,{value:t,get children(){return t.outlet()}})}),H=e=>{const t=$e(()=>e.children);return Ee(e,{get children(){return t()}})};function xn([e,t],n,r){return[e,s=>t(r(s))]}function An(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=xn(U(n(e.get()),{equals:(s,o)=>s.value===o.value&&s.state===o.state}),void 0,s=>(!t&&e.set(s),m.registry&&!m.done&&(m.done=!0),s));return e.init&&Ze(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),pt({signal:r,create:e.create,utils:e.utils})}function Pn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Cn(e,t){const n=e&&document.getElementById(e);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function Sn(e){const t=new URL(e);return t.pathname+t.search}function En(e){let t;const n={value:e.url||(t=Qt())&&Sn(t.request.url)||""};return pt({signal:[()=>n,r=>Object.assign(n,r)]})(e)}const Ln=new Map;function kn(e=!0,t=!1,n="/_server",r){return s=>{const o=s.base.path(),i=s.navigatorFactory(s.base);let l,a;function c(g){return g.namespaceURI==="http://www.w3.org/2000/svg"}function u(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const p=g.composedPath().find(W=>W instanceof Node&&W.nodeName.toUpperCase()==="A");if(!p||t&&!p.hasAttribute("link"))return;const P=c(p),v=P?p.href.baseVal:p.href;if((P?p.target.baseVal:p.target)||!v&&!p.hasAttribute("state"))return;const N=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||N&&N.includes("external"))return;const O=P?new URL(v,document.baseURI):new URL(v);if(!(O.origin!==window.location.origin||o&&O.pathname&&!O.pathname.toLowerCase().startsWith(o.toLowerCase())))return[p,O]}function f(g){const p=u(g);if(!p)return;const[P,v]=p,j=s.parsePath(v.pathname+v.search+v.hash),N=P.getAttribute("state");g.preventDefault(),i(j,{resolve:!1,replace:P.hasAttribute("replace"),scroll:!P.hasAttribute("noscroll"),state:N?JSON.parse(N):void 0})}function d(g){const p=u(g);if(!p)return;const[P,v]=p;r&&(v.pathname=r(v.pathname)),s.preloadRoute(v,P.getAttribute("preload")!=="false")}function h(g){clearTimeout(l);const p=u(g);if(!p)return a=null;const[P,v]=p;a!==P&&(r&&(v.pathname=r(v.pathname)),l=setTimeout(()=>{s.preloadRoute(v,P.getAttribute("preload")!=="false"),a=P},20))}function A(g){if(g.defaultPrevented)return;let p=g.submitter&&g.submitter.hasAttribute("formaction")?g.submitter.getAttribute("formaction"):g.target.getAttribute("action");if(!p)return;if(!p.startsWith("https://action/")){const v=new URL(p,lt);if(p=s.parsePath(v.pathname+v.search),!p.startsWith(n))return}if(g.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const P=Ln.get(p);if(P){g.preventDefault();const v=new FormData(g.target,g.submitter);P.call({r:s,f:g.target},g.target.enctype==="multipart/form-data"?v:new URLSearchParams(v))}}st(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mousemove",h,{passive:!0}),document.addEventListener("focusin",d,{passive:!0}),document.addEventListener("touchstart",d,{passive:!0})),document.addEventListener("submit",A),Ze(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mousemove",h),document.removeEventListener("focusin",d),document.removeEventListener("touchstart",d)),document.removeEventListener("submit",A)})}}function _n(e){if(ot)return En(e);const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,s=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:s}},n=it();return An({get:t,set({value:r,replace:s,scroll:o,state:i}){s?window.history.replaceState(en(i),"",r):window.history.pushState(i,"",r),Cn(decodeURIComponent(window.location.hash.slice(1)),o),Te()},init:r=>Pn(window,"popstate",tn(r,s=>{if(s&&s<0)return!n.confirm(s);{const o=t();return!n.confirm(o.value,{state:o.state})}})),create:kn(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}var On=I("<a>");function cr(e){e=Ee({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Rt(e,["href","state","class","activeClass","inactiveClass","end"]),n=fn(()=>e.href),r=dn(n),s=ht(),o=C(()=>{const i=n();if(i===void 0)return[!1,!1];const l=z(i.split(/[?#]/,1)[0]).toLowerCase(),a=decodeURI(z(s.pathname).toLowerCase());return[e.end?l===a:a.startsWith(l+"/")||a===l,l===a]});return(()=>{var i=On();return Xt(i,Ee(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o()[0],[e.activeClass]:o()[0],...t.classList}},link:"",get"aria-current"(){return o()[1]?"page":void 0}}),!1),i})()}function $n(e){const t=dt(),n=ht(),{href:r,state:s}=e,o=typeof r=="function"?r({navigate:t,location:n}):r;return t(o,{replace:!0,state:s}),null}const Rn="modulepreload",Nn=function(e){return"/"+e},We={},je=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");s=Promise.allSettled(n.map(a=>{if(a=Nn(a),a in We)return;We[a]=!0;const c=a.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Rn,c||(f.as="script"),f.crossOrigin="",f.href=a,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((d,h)=>{f.addEventListener("load",d),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return s.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},Tn="/assets/alab_insight_plus-B5pFrCAH.png",In="/assets/call_inspector-DFjtwOMf.png",jn="/assets/gantt-Bfat9JP1.png",Un="/assets/service-BX1xA6o6.png",Mn="/assets/crm-DZ99lcsk.png",Bn="/assets/milvus-io-BlKHdqFc.png",Dn="/assets/zilliz-cloud-Bufh6NVX.png",Fn=[{name:"Zilliz Cloud Console",description:"Zilliz Cloud 的控制台，提供用户管理、资源管理、实例管理等功能",company:"zilliz",workImage:Dn,workUrl:"https://cloud.zilliz.com",role:"Member",date:"2023-12 to Now"},{name:"Milvus.io Website Refactor",description:"Milvus.io 官方网站，提供 Milvus 的产品介绍、文档、社区等信息",company:"zilliz",role:"",workImage:Bn,workUrl:"https://milvus.io",date:"2024-05"},{name:"水晶球 - Insight Plus",description:"数据洞察升级版，支持多维交叉分析、对比分析等高级分析场景",company:"Agora",role:"",workImage:Tn,workUrl:"https://analytics-lab.agora.io",date:"2023-06"},{name:"水晶球 - 通话调查",description:"数据产品的调查工具，针对实时互动链路的问题调查，包括问题调查，实时监控，告警通知，以及数据洞察等",company:"Agora",role:"",workImage:In,workUrl:"https://analytics-lab.agora.io",date:"2022-10"},{name:"Gantt",description:"项目管理的应用，方便项目经理制定计划、编排任务，同时也更加直观的显示当前项目的进展，主要解决客户以往管理项目线下化的问题",company:"Teambition",role:"",workImage:jn,workUrl:"https://www.teambition.com",date:"2020-04"},{name:"Service",description:"客服系统，帮助公司更好的服务客户，同时集成 Teambition 的任务和 CRM 的客户能力，客户可以可以根据任务状态了解到反馈的实时进度，在线支持的同学可以主动创建客户到 CRM 中，也可以根据 CRM 中的数据更多的了解客户",company:"Teambition",role:"",workImage:Un,workUrl:"",date:"2019-10"},{name:"CRM",description:"客户关系管理系统",company:"Teambition",role:"",workImage:Mn,workUrl:"",date:"2018-10"}];var Vn=I('<span class="text-lg font-bold">'),Hn=I("<a class=hover:underline>"),Wn=I('<div class="px-[16px] py-8">'),qn=I('<div class=mb-24><div class="flex items-center justify-between mb-8"><span class="text-gray-500 text-sm"></span></div><div class="mb-8 text-gray-600 dark:text-gray-400"></div><div class="text-gray-500 text-sm mt-4">'),Kn=I('<div class="pt-20 px-20 pb-0 h-[500px] bg-zinc-200 dark:bg-zinc-950 rounded-lg overflow-hidden"><img class=rounded-lg>');const zn=()=>{function e(t){const n=(()=>{var r=Vn();return $(r,()=>t.name),r})();return t.workUrl?(()=>{var r=Hn();return $(r,n),M(s=>{var o=t.workUrl,i=t.workUrl;return o!==s.e&&K(r,"href",s.e=o),i!==s.t&&K(r,"target",s.t=i),s},{e:void 0,t:void 0}),r})():n}return(()=>{var t=Wn();return $(t,()=>Fn.map(n=>(()=>{var r=qn(),s=r.firstChild,o=s.firstChild,i=s.nextSibling,l=i.nextSibling;return $(s,()=>e(n),o),$(o,()=>n.date),$(i,()=>n.description),$(r,(()=>{var a=C(()=>!!n.workImage);return()=>a()&&(()=>{var c=Kn(),u=c.firstChild;return M(f=>{var d=n.workImage,h=n.name;return d!==f.e&&K(u,"src",f.e=d),h!==f.t&&K(u,"alt",f.t=h),f},{e:void 0,t:void 0}),c})()})(),l),$(l,()=>n.company),r})())),t})()};var Xn=I('<div class="px-[16px] py-8 text-gray-600 dark:text-gray-400"><p class=mb-4>💻 A Web Developer.</p><p class=mb-4>🚴 Like road bike and running.</p><p class=mb-4>🐱 Have two cats.</p><p class=mb-4>🧙 INFJ</p><p class=mb-4>🌓 Ultraviolet fear & Nocturnal animal</p><a href=https://shuyoou.com target=site class="mb-4 block hover:underline">🛸 Site</a><a href=https://zhanshuyou.gitbook.io/blogs target=blogs class="mb-4 block hover:underline">📝 Blogs');const Zn=()=>Xn();var Gn=I('<span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"><svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"aria-hidden=true xmlns=http://www.w3.org/2000/svg fill=currentColor viewBox="0 0 20 20"><path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z">'),Jn=I('<span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">'),Yn=I('<div class=ml-12><h2 class="mb-2 text-lg font-semibold text-gray-600 dark:text-white">Todo:</h2><ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400"><li><span class="font-semibold text-gray-900 dark:text-white">318 Cycling or Driving</span></li><li><span class="font-semibold text-gray-900 dark:text-white">Full Marathon'),Qn=I('<ol class="relative flex-1 border-l border-gray-200 dark:border-gray-700"><li class=ml-6><h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">2023 Shanghai half Marathon </h3><time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 16th, 2023</time><p class="text-base font-normal text-gray-500 dark:text-gray-400">✌🏻✌🏻✌🏻'),er=I('<div class="px-[16px] py-8 flex items-start">');const tr=()=>{function e(){return Gn()}function t(s){return(()=>{var o=Jn();return $(o,s),o})()}function n(){return Yn()}function r(){return(()=>{var s=Qn(),o=s.firstChild,i=o.firstChild;return i.firstChild,$(o,e,i),$(i,()=>t("Completed"),null),s})()}return(()=>{var s=er();return $(s,r,null),$(s,n,null),s})()},nr=Ne(()=>je(()=>import("./Tools-Be9-R8JM.js"),[])),rr=Ne(()=>je(()=>import("./Home-CCHNFwWX.js"),__vite__mapDeps([0,1]))),sr=Ne(()=>je(()=>import("./Resume-u5uHHtk-.js"),__vite__mapDeps([2,3]))),or=e=>{const t=dt();let n=localStorage.getItem("path");return n&&(localStorage.removeItem("path"),t(n,{replace:!0})),e.children},ir=()=>L(H,{path:"/",component:or,get children(){return[L(H,{path:"/tools",component:nr}),L(H,{path:"/resume",component:sr,get children(){return[L(H,{path:"/projects",component:zn}),L(H,{path:"/about",component:Zn}),L(H,{path:"/challenges",component:tr}),L(H,{path:"/*",component:()=>L($n,{href:"projects"})})]}}),L(H,{path:"/",component:rr})]}});console.info("Black Hole 🕳","v0.0.11");const lr=document.getElementById("root");Vt(()=>L(_n,{get children(){return L(ir,{})}}),lr);export{cr as A,M as a,Wt as b,L as c,st as d,$ as i,ar as o,I as t,Zt as u};
