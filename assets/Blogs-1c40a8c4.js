import{i as r,a as l,s as c,t as i}from"./index-87a62f7a.js";const d="_container_13f1j_1",u={container:d},m=i("<div><h1>Blogs</h1><ul></ul></div>"),g=i("<li><a></a></li>"),f=()=>{const _=[{slug:"2019-07-02_Textarea_Auto_Size",title:"2019-07-02 Textarea Auto Size"},{slug:"2019-07-07_React_Synthetic_Events",title:"2019-07-07 React Synthetic Events"},{slug:"2020-03-06_Browser_Render_Process",title:"2020-03-06 Browser Render Process"},{slug:"2020-03-08_Monorepo_and_Multirepo",title:"2020-03-08 Monorepo and Multirepo"},{slug:"2020-03-14_Why_CSS_is_recommended_instead_of_JS_in_Front-end_Animation",title:"2020-03-14 Why CSS is recommended instead of JS in Front-end Animation"},{slug:"2021-04-29_Git_Common_Commands",title:"2021-04-29 Git Common Commands"},{slug:"2023-01-05_prefetch_vs_preload",title:"2023-01-05 prefetch vs preload"}].sort((e,t)=>e.slug>t.slug?-1:1);return(()=>{const e=m.cloneNode(!0),t=e.firstChild,a=t.nextSibling;return t.style.setProperty("margin-bottom","0"),r(a,()=>_.map(o=>(()=>{const s=g.cloneNode(!0),n=s.firstChild;return r(n,()=>o.title),l(()=>c(n,"href",`/blogs/${o.slug}`)),s})())),l(()=>e.className=u.container),e})()};export{f as Blogs,f as default};
