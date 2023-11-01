import{i as u,a as N,s as w,t as m,c as v,R as g,N as S,b as C}from"./index-6754acc9.js";var $={},R={get exports(){return $},set exports(r){$=r}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(r){(function(){var n={}.hasOwnProperty;function s(){for(var a=[],l=0;l<arguments.length;l++){var t=arguments[l];if(t){var o=typeof t;if(o==="string"||o==="number")a.push(t);else if(Array.isArray(t)){if(t.length){var c=s.apply(null,t);c&&a.push(c)}}else if(o==="object")if(t.toString===Object.prototype.toString)for(var i in t)n.call(t,i)&&t[i]&&a.push(i);else a.push(t.toString())}}return a.join(" ")}r.exports?(s.default=s,r.exports=s):window.classNames=s})()})(R);const k=$,I="/assets/alab_insight_plus-1d6926be.png",q="/assets/call_inspector-bad2bbf6.png",A="/assets/gantt-83e31425.png",j="/assets/service-71be5a1f.png",U="/assets/crm-dba27dfe.png",M=[{name:"水晶球 - Insight Plus",description:"数据洞察升级版，支持多维交叉分析、对比分析等高级分析场景",company:"Agora",role:"",workImage:I,workUrl:"",date:"2023-06"},{name:"水晶球 - 通话调查",description:"数据产品的调查工具，针对实时互动链路的问题调查，包括问题调查，实时监控，告警通知，以及数据洞察等",company:"Agora",role:"",workImage:q,workUrl:"",date:"2022-10"},{name:"Gantt",description:"项目管理的应用，方便项目经理制定计划、编排任务，同时也更加直观的显示当前项目的进展，主要解决客户以往管理项目线下化的问题",company:"Teambition",role:"",workImage:A,workUrl:"",date:"2020-04"},{name:"Service",description:"客服系统，帮助公司更好的服务客户，同时集成 Teambition 的任务和 CRM 的客户能力，客户可以可以根据任务状态了解到反馈的实时进度，在线支持的同学可以主动创建客户到 CRM 中，也可以根据 CRM 中的数据更多的了解客户",company:"Teambition",role:"",workImage:j,workUrl:"",date:"2019-10"},{name:"CRM",description:"客户关系管理系统",company:"Teambition",role:"",workImage:U,workUrl:"",date:"2018-10"}],O=m('<div class="px-[16px] py-8"></div>'),P=m('<div class="mb-24"><div class="flex items-center justify-between mb-8"><span class="text-lg font-bold"></span><span class="text-gray-500 text-sm"></span></div><div class="mb-8 text-gray-600"></div><div class="pt-16 px-20 pb-0 h-[500px] bg-zinc-200 rounded-lg overflow-hidden"><img class="rounded-lg"></div><div class="text-gray-500 text-sm mt-4"></div></div>'),W=()=>(()=>{const r=O.cloneNode(!0);return u(r,()=>M.map(n=>(()=>{const s=P.cloneNode(!0),a=s.firstChild,l=a.firstChild,t=l.nextSibling,o=a.nextSibling,c=o.nextSibling,i=c.firstChild,e=c.nextSibling;return u(l,()=>n.name),u(t,()=>n.date),u(o,()=>n.description),u(e,()=>n.company),N(d=>{const p=n.workImage,f=n.name;return p!==d._v$&&w(i,"src",d._v$=p),f!==d._v$2&&w(i,"alt",d._v$2=f),d},{_v$:void 0,_v$2:void 0}),s})())),r})(),T="/assets/avatar-1b116383.jpg",E="_resume_nqc7o_1",z="_container_nqc7o_1",B="_hero_nqc7o_13",D="_circle_nqc7o_20",G="_anchors_nqc7o_36",_={resume:E,container:z,"container-2":"_container-2_nqc7o_7",hero:B,"text-color-secondary":"_text-color-secondary_nqc7o_17",circle:D,anchors:G},K=m('<div><section><div><div><div>Shuyoou</div><div>Web Developer</div></div></div><div></div></section><section><a href="work">Work</a><span>/</span><a href="about">About</a><span>/</span><a href="bike">Bike</a><span>/</span><a href="challenge">Challenge</a></section><section></section></div>'),L=m("<div>about</div>"),F=m("<div>bike</div>"),H=m("<div>challenge</div>"),Q=()=>(()=>{const r=K.cloneNode(!0),n=r.firstChild,s=n.firstChild,a=s.firstChild,l=a.firstChild,t=l.nextSibling,o=s.nextSibling,c=n.nextSibling,i=c.nextSibling;return a.style.setProperty("padding","0 16px"),o.style.setProperty("background-image",`url(${T})`),u(i,v(C,{get children(){return[v(g,{path:"work",get element(){return v(W,{})}}),v(g,{path:"about",get element(){return L.cloneNode(!0)}}),v(g,{path:"bike",get element(){return F.cloneNode(!0)}}),v(g,{path:"challenge",get element(){return H.cloneNode(!0)}}),v(g,{path:"/*",get element(){return v(S,{href:"work"})}})]}})),N(e=>{const d=_.resume,p=_.hero,f=_.container,h=_["text-color-secondary"],b=_.circle,x=k(_.anchors,_["container-2"]),y=k(_["container-2"]);return d!==e._v$&&(r.className=e._v$=d),p!==e._v$2&&(n.className=e._v$2=p),f!==e._v$3&&(s.className=e._v$3=f),h!==e._v$4&&(t.className=e._v$4=h),b!==e._v$5&&(o.className=e._v$5=b),x!==e._v$6&&(c.className=e._v$6=x),y!==e._v$7&&(i.className=e._v$7=y),e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),r})();export{Q as Resume,Q as default};
