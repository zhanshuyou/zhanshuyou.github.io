import{o as v,t as m,i as p,c as f,a as h}from"./index.46922de4.js";const g=m('<div class="sky-container"><div class="noite"></div><div class="constelacao"></div><div class="lua"><div class="textura"></div></div><div class="chuvaMeteoro"></div><div class="floresta"><img src="https://raw.githubusercontent.com/interaminense/starry-sky/master/src/img/bgTree.png" alt=""></div></div>'),M=250;function e(t,o){return Math.floor(Math.random()*(o-t))+t}const _=()=>{let t;return v(()=>{function o(){const n=["style1","style2","style3","style4"],s=["tam1","tam1","tam1","tam2","tam3"],a=["opacity1","opacity1","opacity1","opacity2","opacity2","opacity3"];let r="",i=5e3;const d=window.innerWidth,u=window.innerHeight;for(var c=0;c<M;c++)r+="<span class='estrela "+n[e(0,4)]+" "+a[e(0,6)]+" "+s[e(0,5)]+"' style='animation-delay: ."+e(0,9)+"s; left: "+e(0,d)+"px; top: "+e(0,u)+"px;'></span>";t.innerHTML=r,setTimeout(()=>l(),i);function l(){setTimeout(l,i),i=e(5e3,1e4);var y="<div class='meteoro "+n[e(0,4)]+"'></div>";document.getElementsByClassName("chuvaMeteoro")[0].innerHTML=y,setTimeout(function(){document.getElementsByClassName("chuvaMeteoro")[0].innerHTML=""},1e3)}}o()}),(()=>{const o=g.cloneNode(!0),n=o.firstChild,s=n.nextSibling,a=t;return typeof a=="function"?a(s):t=s,o})()},$="_home_giqam_1";var w={home:$};const T=m("<div></div>"),H=()=>(()=>{const t=T.cloneNode(!0);return p(t,f(_,{})),h(()=>t.className=w.home),t})();export{H as Home,H as default};
