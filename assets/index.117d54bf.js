const De=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};De();const S={};function F(e){S.context=e}const He=(e,t)=>e===t,Y={equals:He};let xe=Le;const M={},_=1,Z=2,Se={owned:null,cleanups:null,context:null,owner:null},[Ke,$t]=L(!1);var m=null;let Q=null,y=null,W=null,v=null,E=null,fe=0;function Ae(e,t){const n=y,r=m,s=e.length===0?Se:{owned:null,cleanups:null,context:null,owner:t||r};m=s,y=null;try{return oe(()=>e(()=>pe(s)),!0)}finally{y=n,m=r}}function L(e,t){t=t?Object.assign({},Y,t):Y;const n={value:e,observers:null,observerSlots:null,pending:M,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.pending!==M?n.pending:n.value)),de(n,s));return[Re.bind(n),r]}function ue(e,t,n){const r=se(e,t,!0,_);D(r)}function ee(e,t,n){const r=se(e,t,!1,_);D(r)}function Fe(e,t,n){xe=et;const r=se(e,t,!1,_);r.user=!0,E?E.push(r):D(r)}function b(e,t,n){n=n?Object.assign({},Y,n):Y;const r=se(e,t,!0,0);return r.pending=M,r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,D(r),Re.bind(r)}function We(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={});const r=new Set,[s,o]=L(n.initialValue),[i,l]=L(void 0,{equals:!1}),[u,c]=L(!1),[f,w]=L();let g,d=null,x=null,T=null,O=!1,$="initialValue"in n,N=typeof e=="function"&&b(e);S.context&&(T=`${S.context.id}${S.context.count++}`,S.load&&(x=S.load(T)));function P(h,a,p,C){return d===h&&(d=null,$=!0,x&&(h===x||a===x)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated(C,{value:a})),x=null,w(g=p),X(a)),a}function X(h){te(()=>{o(()=>h),c(!1);for(const a of r.keys())a.decrement();r.clear()})}function B(){const h=ze,a=s();if(g)throw g;return y&&!y.user&&h&&ue(()=>{i(),d&&(h.resolved||r.has(h)||(h.increment(),r.add(h)))}),a}function H(h=!0){if(h&&O)return;O=!1,w(g=void 0);const a=N?N():e;if(a==null||a===!1){P(d,R(s));return}const p=x||R(()=>t(a,{value:s(),refetching:h}));return typeof p!="object"||!("then"in p)?(P(d,p),p):(d=p,O=!0,queueMicrotask(()=>O=!1),te(()=>{c(!0),l()}),p.then(C=>P(p,C,void 0,a),C=>P(p,C,C)))}return Object.defineProperties(B,{loading:{get(){return u()}},error:{get(){return f()}},latest:{get(){if(!$)return B();if(g)throw g;return s()}}}),N?ue(()=>H(!1)):H(!1),[B,{refetch:H,mutate:o}]}function te(e){if(W)return e();let t;const n=W=[];try{t=e()}finally{W=null}return oe(()=>{for(let r=0;r<n.length;r+=1){const s=n[r];if(s.pending!==M){const o=s.pending;s.pending=M,de(s,o)}}},!1),t}function R(e){let t,n=y;return y=null,t=e(),y=n,t}function Ce(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(o){o=!1;return}const u=R(()=>t(l,s,i));return s=l,u}}function Bt(e){Fe(()=>R(e))}function Pe(e){return m===null||(m.cleanups===null?m.cleanups=[e]:m.cleanups.push(e)),e}function ke(){return m}function Ge(e,t){const n=m;m=e;try{return oe(t,!0)}finally{m=n}}function Je(e){const t=y,n=m;return Promise.resolve().then(()=>{y=t,m=n;let r;return te(e),y=m=null,r?r.done:void 0})}function Qe(){return[Ke,Je]}function Ee(e){const t=Symbol("context");return{id:t,Provider:tt(t),defaultValue:e}}function he(e){let t;return(t=Ne(m,e.id))!==void 0?t:e.defaultValue}function Xe(e){const t=b(e);return b(()=>ce(t()))}let ze;function Re(){const e=Q;if(this.sources&&(this.state||e)){const t=v;v=null,this.state===_||e?D(this):ne(this),v=t}if(y){const t=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(t)):(y.sources=[this],y.sourceSlots=[t]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function de(e,t,n){if(W)return e.pending===M&&W.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let r=!1;return e.value=t,e.observers&&e.observers.length&&oe(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s];r&&Q.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?v.push(o):E.push(o),o.observers&&Te(o)),r||(o.state=_)}if(v.length>1e6)throw v=[],new Error},!1),t}function D(e){if(!e.fn)return;pe(e);const t=m,n=y,r=fe;y=m=e,Ye(e,e.value,r),y=n,m=t}function Ye(e,t,n){let r;try{r=e.fn(t)}catch(s){Oe(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?de(e,r):e.value=r,e.updatedAt=n)}function se(e,t,n,r=_,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==Se&&(m.owned?m.owned.push(o):m.owned=[o]),o}function k(e){const t=Q;if(e.state===0||t)return;if(e.state===Z||t)return ne(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<fe);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===_||t)D(e);else if(e.state===Z||t){const s=v;v=null,ne(e,n[0]),v=s}}function oe(e,t){if(v)return e();let n=!1;t||(v=[]),E?n=!0:E=[],fe++;try{const r=e();return Ze(n),r}catch(r){Oe(r)}finally{v=null,n||(E=null)}}function Ze(e){v&&(Le(v),v=null),!e&&(E.length?te(()=>{xe(E),E=null}):E=null)}function Le(e){for(let t=0;t<e.length;t++)k(e[t])}function et(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:k(s)}S.context&&F();const r=e.length;for(t=0;t<n;t++)k(e[t]);for(t=r;t<e.length;t++)k(e[t])}function ne(e,t){const n=Q;e.state=0;for(let r=0;r<e.sources.length;r+=1){const s=e.sources[r];s.sources&&(s.state===_||n?s!==t&&k(s):(s.state===Z||n)&&ne(s,t))}}function Te(e){const t=Q;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=Z,r.pure?v.push(r):E.push(r),r.observers&&Te(r))}}function pe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),i=n.observerSlots.pop();r<s.length&&(o.sourceSlots[i]=r,s[r]=o,n.observerSlots[r]=i)}}if(e.owned){for(t=0;t<e.owned.length;t++)pe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Oe(e){throw e}function Ne(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ne(e.owner,t):void 0}function ce(e){if(typeof e=="function"&&!e.length)return ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ce(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function tt(e){return function(n){let r;return ue(()=>r=R(()=>(m.context={[e]:n.value},Xe(()=>n.children)))),r}}function A(e,t){return R(()=>e(t||{}))}function Ie(e){let t,n;const r=s=>{const o=S.context;if(o){const[l,u]=L();(n||(n=e())).then(c=>{F(o),u(()=>c.default),F()}),t=l}else if(t){const l=t();if(l)return l(s)}else{const[l]=We(()=>(n||(n=e())).then(u=>u.default));t=l}let i;return b(()=>(i=t())&&R(()=>{if(!o)return i(s);const l=S.context;F(o);const u=i(s);return F(l),u}))};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}function _e(e){let t=!1;const n=b(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return b(()=>{const r=n();if(r){const s=e.children;return(t=typeof s=="function"&&s.length>0)?R(()=>s(r)):s}return e.fallback})}function nt(e,t,n){let r=n.length,s=t.length,o=r,i=0,l=0,u=t[s-1].nextSibling,c=null;for(;i<s||l<o;){if(t[i]===n[l]){i++,l++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===i){const f=o<r?l?n[l-1].nextSibling:n[o-l]:u;for(;l<o;)e.insertBefore(n[l++],f)}else if(o===l)for(;i<s;)(!c||!c.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[o-1]&&n[l]===t[s-1]){const f=t[--s].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--o],f),t[s]=n[o]}else{if(!c){c=new Map;let w=l;for(;w<o;)c.set(n[w],w++)}const f=c.get(t[i]);if(f!=null)if(l<f&&f<o){let w=i,g=1,d;for(;++w<s&&w<o&&!((d=c.get(t[w]))==null||d!==f+g);)g++;if(g>f-l){const x=t[i];for(;l<f;)e.insertBefore(n[l++],x)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}function rt(e,t,n){let r;return Ae(s=>{r=s,t===document?e():st(t,e(),t.firstChild?null:void 0,n)}),()=>{r(),t.textContent=""}}function Ut(e,t,n){const r=document.createElement("template");r.innerHTML=e;let s=r.content.firstChild;return n&&(s=s.firstChild),s}function st(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return re(e,t,r,n);ee(s=>re(e,t(),s,n),r)}function re(e,t,n,r,s){for(S.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(S.context)return n;if(o==="number"&&(t=t.toString()),i){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=j(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(S.context)return n;n=j(e,n,r)}else{if(o==="function")return ee(()=>{let l=t();for(;typeof l=="function";)l=l();n=re(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[];if(ae(l,t,s))return ee(()=>n=re(e,l,n,r,!0)),()=>n;if(S.context){for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=j(e,n,r),i)return n}else Array.isArray(n)?n.length===0?we(e,l,r):nt(e,n,l):(n&&j(e),we(e,l));n=l}else if(t instanceof Node){if(S.context&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=j(e,n,r,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ae(e,t,n){let r=!1;for(let s=0,o=t.length;s<o;s++){let i=t[s],l;if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=ae(e,i)||r;else if((l=typeof i)=="string")e.push(document.createTextNode(i));else if(l==="function")if(n){for(;typeof i=="function";)i=i();r=ae(e,Array.isArray(i)?i:[i])||r}else e.push(i),r=!0;else e.push(document.createTextNode(i.toString()))}return r}function we(e,t,n){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function j(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(s!==l){const u=l.parentNode===e;!o&&!i?u?e.replaceChild(s,l):e.insertBefore(s,n):u&&l.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}function ot(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function it([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function lt(e){try{return document.querySelector(e)}catch{return null}}function ut(e,t){const n=lt(`a#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function ct(e,t,n,r){let s=!1;const o=l=>typeof l=="string"?{value:l}:l,i=it(L(o(e()),{equals:(l,u)=>l.value===u.value}),void 0,l=>(!s&&t(l),l));return n&&Pe(n((l=e())=>{s=!0,i[1](o(l)),s=!1})),{signal:i,utils:r}}function at(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:L({value:""})};return e}function ft(){return ct(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),ut(window.location.hash.slice(1),n)},e=>ot(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}const ht=/^(?:[a-z0-9]+:)?\/\//i,dt=/^\/+|\/+$/g;function G(e,t=!1){const n=e.replace(dt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function z(e,t,n){if(ht.test(t))return;const r=G(e),s=n&&G(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+G(t,!o)}function pt(e,t){if(e==null)throw new Error(t);return e}function $e(e,t){return G(e).replace(/\/*(\*.*)?$/g,"")+G(t)}function gt(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function V(e,t){return decodeURIComponent(t?e.replace(/\+/g," "):e)}function mt(e,t){const[n,r]=e.split("/*",2),s=n.split("/").filter(Boolean),o=s.length;return i=>{const l=i.split("/").filter(Boolean),u=l.length-o;if(u<0||u>0&&r===void 0&&!t)return null;const c={path:o?"":"/",params:{}};for(let f=0;f<o;f++){const w=s[f],g=l[f];if(w[0]===":")c.params[w.slice(1)]=g;else if(w.localeCompare(g,void 0,{sensitivity:"base"})!==0)return null;c.path+=`/${g}`}return r&&(c.params[r]=u?l.slice(-u).join("/"):""),c}}function yt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Be(e){const t=new Map,n=ke();return new Proxy({},{get(r,s){return t.has(s)||Ge(n,()=>t.set(s,b(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}const wt=100,Ue=Ee(),ie=Ee(),qe=()=>pt(he(Ue),"Make sure your app is wrapped in a <Router />");let J;const je=()=>J||he(ie)||qe().base;function bt(e,t="",n){const{path:r,component:s,data:o,children:i}=e,l=!i||Array.isArray(i)&&!i.length,u=$e(t,r),c=l?u:u.split("/*",1)[0];return{originalPath:r,pattern:c,element:s?()=>A(s,{}):()=>{const{element:f}=e;return f===void 0&&n?A(n,{}):f},preload:e.component?s.preload:e.preload,data:o,matcher:mt(c,!l)}}function vt(e,t=0){return{routes:e,score:yt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],i=o.matcher(n);if(!i)return null;r.unshift({...i,route:o})}return r}}}function Ve(e,t="",n,r=[],s=[]){const o=Array.isArray(e)?e:[e];for(let i=0,l=o.length;i<l;i++){const u=o[i];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const c=bt(u,t,n);if(r.push(c),u.children)Ve(u.children,c.pattern,n,r,s);else{const f=vt([...r],s.length);s.push(f)}r.pop()}}return r.length?s:s.sort((i,l)=>l.score-i.score)}function xt(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function St(e,t){const n=new URL("http://sar"),r=b(u=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),u}},n,{equals:(u,c)=>u.href===c.href}),s=b(()=>V(r().pathname)),o=b(()=>V(r().search,!0)),i=b(()=>V(r().hash)),l=b(()=>"");return{get pathname(){return s()},get search(){return o()},get hash(){return i()},get state(){return t()},get key(){return l()},query:Be(Ce(o,()=>gt(r())))}}function At(e,t="",n,r){const{signal:[s,o],utils:i={}}=at(e),l=i.parsePath||(h=>h),u=i.renderPath||(h=>h),c=z("",t),f=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!s().value&&o({value:c,replace:!0,scroll:!1});const[w,g]=Qe(),[d,x]=L(s().value),[T,O]=L(s().state),$=St(d,T),N=[],P={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(h){return z(c,h)}};if(n)try{J=P,P.data=n({data:void 0,params:{},location:$,navigate:B(P)})}finally{J=void 0}function X(h,a,p){R(()=>{if(typeof a=="number"){a&&(i.go?i.go(a):console.warn("Router integration does not support relative routing"));return}const{replace:C,resolve:K,scroll:ge,state:U}={replace:!1,resolve:!0,scroll:!0,...p},I=K?h.resolvePath(a):z("",a);if(I===void 0)throw new Error(`Path '${a}' is not a routable path`);if(N.length>=wt)throw new Error("Too many redirects");const q=d();if(I!==q||U!==T()){const le=N.push({value:q,replace:C,scroll:ge,state:T()});g(()=>{x(I),O(U)}).then(()=>{N.length===le&&H({value:I,state:U})})}})}function B(h){return h=h||he(ie)||P,(a,p)=>X(h,a,p)}function H(h){const a=N[0];a&&((h.value!==a.value||h.state!==a.state)&&o({...h,replace:a.replace,scroll:a.scroll}),N.length=0)}ee(()=>{const{value:h,state:a}=s();R(()=>{h!==d()&&g(()=>{x(h),O(a)})})});{let h=function(a){if(a.defaultPrevented||a.button!==0||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)return;const p=a.composedPath().find(ye=>ye instanceof Node&&ye.nodeName.toUpperCase()==="A");if(!p)return;const C=p instanceof SVGAElement,K=C?p.href.baseVal:p.href;if((C?p.target.baseVal:p.target)||!K&&!p.hasAttribute("state"))return;const U=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||U&&U.includes("external"))return;const I=C?new URL(K,document.baseURI):new URL(K),q=V(I.pathname);if(I.origin!==window.location.origin||c&&q&&!q.toLowerCase().startsWith(c.toLowerCase()))return;const le=l(q+V(I.search,!0)+V(I.hash)),me=p.getAttribute("state");a.preventDefault(),X(P,le,{resolve:!1,replace:p.hasAttribute("replace"),scroll:!p.hasAttribute("noscroll"),state:me&&JSON.parse(me)})};document.addEventListener("click",h),Pe(()=>document.removeEventListener("click",h))}return{base:P,out:f,location:$,isRouting:w,renderPath:u,parsePath:l,navigatorFactory:B}}function Ct(e,t,n,r){const{base:s,location:o,navigatorFactory:i}=e,{pattern:l,element:u,preload:c,data:f}=r().route,w=b(()=>r().path),g=Be(()=>r().params);c&&c();const d={parent:t,pattern:l,get child(){return n()},path:w,params:g,data:t.data,outlet:u,resolvePath(x){return z(s.path(),x,w())}};if(f)try{J=d,d.data=f({data:t.data,params:g,location:o,navigate:i(d)})}finally{J=void 0}return d}const Pt=e=>{const{source:t,url:n,base:r,data:s,out:o}=e,i=t||ft(),l=At(i,r,s);return A(Ue.Provider,{value:l,get children(){return e.children}})},Et=e=>{const t=qe(),n=je(),r=b(()=>Ve(e.children,$e(n.pattern,e.base||""),Rt)),s=b(()=>xt(r(),t.location.pathname));t.out&&t.out.matches.push(s().map(({route:u,path:c,params:f})=>({originalPath:u.originalPath,pattern:u.pattern,path:c,params:f})));const o=[];let i;const l=b(Ce(s,(u,c,f)=>{let w=c&&u.length===c.length;const g=[];for(let d=0,x=u.length;d<x;d++){const T=c&&c[d],O=u[d];f&&T&&O.route.pattern===T.route.pattern?g[d]=f[d]:(w=!1,o[d]&&o[d](),Ae($=>{o[d]=$,g[d]=Ct(t,g[d-1]||n,()=>l()[d+1],()=>s()[d])}))}return o.splice(u.length).forEach(d=>d()),f&&w?f:(i=g[0],g)}));return A(_e,{get when(){return l()&&i},children:u=>A(ie.Provider,{value:u,get children(){return u.outlet()}})})},be=e=>e,Rt=()=>{const e=je();return A(_e,{get when(){return e.child},children:t=>A(ie.Provider,{value:t,get children(){return t.outlet()}})})};const Lt="modulepreload",ve={},Tt="/",Me=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${Tt}${r}`,r in ve)return;ve[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":Lt,s||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),s)return new Promise((l,u)=>{i.addEventListener("load",l),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Ot=Ie(()=>Me(()=>import("./Tools.2e1c93e4.js"),[])),Nt=Ie(()=>Me(()=>import("./Home.7cc7c704.js"),["assets/Home.7cc7c704.js","assets/Home.b3432c53.css"])),It=()=>A(Et,{get children(){return[A(be,{path:"/tools",get element(){return A(Ot,{})}}),A(be,{path:"/",get element(){return A(Nt,{})}})]}});console.info("Black Hole \u{1F573}","v0.0.2");const _t=document.getElementById("root");rt(()=>A(Pt,{get children(){return A(It,{})}}),_t);export{ee as a,A as c,st as i,Bt as o,Ut as t};
