import{a as w,t as S,f as y,b as a,s as t}from"../chunks/disclose-version.CEbLymSa.js";import{p as $,t as d,a as q,g as C,x as E}from"../chunks/runtime.Bfoy81my.js";import{a as n}from"../chunks/render.BgulTz3p.js";import{s as m}from"../chunks/i18n.BlChNvtW.js";import{i as O}from"../chunks/store.BuD0FfZO.js";import{p as T}from"../chunks/props.CBRLfZBG.js";import{S as j}from"../chunks/SEO.B8JMvuSH.js";var k=S('<!> <div class="embed-container rounded-box svelte-19d3ctr"><iframe frameborder="0" allowfullscreen class="svelte-19d3ctr"></iframe></div> <div class="h-10"></div> <h1 class="text-3xl font-bold"> </h1> <div class="h-10"></div> <div class="text-base-content/60 bg-base-200 rounded-box p-6"><p class="mx-auto max-w-2xl text-sm"> </p></div>',1);function I(f,s){$(s,!1);let e=T(s,"data");O();var r=k(),o=y(r),c=E(()=>`Tailwind CSS video tutorial: ${e().videos.find(i=>i.id==e().video.id).snippet.title}`);j(o,{get title(){return e().videos.find(i=>i.id==e().video.id).snippet.title},get desc(){return C(c)},$$legacy:!0});var v=t(t(o,!0)),p=a(v);d(()=>m(p,"title",e().videos.find(i=>i.id==e().video.id).snippet.title));var u=t(t(v,!0)),l=t(t(u,!0)),x=a(l);d(()=>n(x,e().videos.find(i=>i.id==e().video.id).snippet.title));var b=t(t(l,!0)),_=t(t(b,!0)),g=a(_),h=a(g);d(()=>n(h,e().videos.find(i=>i.id==e().video.id).snippet.description)),d(()=>m(p,"src",`https://www.youtube.com/embed/${e().video.id}`)),w(f,r),q()}export{I as component};