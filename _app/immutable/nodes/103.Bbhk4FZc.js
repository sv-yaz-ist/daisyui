import{s as Ze,z as we,A as Qe,e as a,a as n,H as Re,c as l,g as r,d as o,b as De,x as Fe,h as i,i as f,j as s,n as et}from"../chunks/scheduler.CxwacNDC.js";import{S as tt,i as it,c as st,b as at,m as lt,t as nt,a as ot,d as rt}from"../chunks/index.NSAxVPe6.js";import{g as ut,a as Ge}from"../chunks/spread.CgU5AtxT.js";import{M as dt}from"../chunks/mdsvex-blog.z_0hzjjg.js";function pt(K){let u,m='<a aria-hidden="true" tabindex="-1" href="#what-is-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What is daisyUI?',y,c,d='<a href="https://daisyui.com/" rel="nofollow" target="_blank">daisyUI</a> is a component library for Tailwind CSS. While Tailwind CSS provides utility classes for each CSS rule, daisyUI provides additional component class names to Tailwind CSS to make it faster and easier to build web pages.',p,h,ve='<a aria-hidden="true" tabindex="-1" href="#is-daisyui-against-the-tailwind-css-philosophy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Is daisyUI against the Tailwind CSS philosophy?',N,x,Te=`No.<br/>
daisyUI is built on top of Tailwind CSS. Utility-first approach suggests that you should use utility classes for most of your CSS rules, but it doesn’t mean you should use <strong>utility classes only</strong>.<br/>
Might be surprising to know but Tailwind CSS has an API for creating component classes (which is used by daisyUI) and Tailwind CSS itself also provides some component classes along with utility classes.`,Q,C,_e="<p>It’s called utility-first, not utility-only</p>",R,b,ge='<a aria-hidden="true" tabindex="-1" href="#isnt-tailwind-css-enough-why-do-we-need-a-component-library-on-top-of-tailwind-css"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Isn’t Tailwind CSS enough? Why do we need a component library on top of Tailwind CSS?',D,L,He="The truth is using <strong>utility classes only</strong>, is not practical for most people.",F,k,xe="<li>It needs design knowledge because you need to make design decisions for each single CSS rule you use for your elements.</li> <li>It need deep CSS knowledge because you’re basically using shorthand CSS rules for everything.</li> <li>It creates bloated HTML files. You need to add a hundred classes to a single element to style it.</li> <li>It’s not fast. You need to think and decide for each single CSS class you want to use.</li> <li>You need to consider every state of elements, like hover, focus, active, etc. and add classes for them too.</li> <li>It’s not easy to maintain. You end up with a lot of classes in your HTML files and it’s hard to find and change them.</li> <li>Using utility classes only is basically re-inventing the wheel a lot of times. You need to write a lot of CSS classes just to make a simple element which looks exactly like the one you made before.</li>",G,M,Ce=`<p>So instead of <strong>utility-only</strong> let’s keep it <strong>utility-first</strong><br/>
Let’s use utility classes whenever we need customization<br/>
and use component classes when we need speed</p>`,J,w,Le='<a aria-hidden="true" tabindex="-1" href="#but-we-already-had-bootstrap-are-we-going-full-circle"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>But we already had Bootstrap. Are we going full circle?',V,S,ke=`Here’s where Tailwind CSS and the utility classes really shine.<br/>
The biggest problem with Bootstrap and similar component libraries was that they were not customizable. You can’t change the design of a component without overriding a lot of CSS rules. Customizing Bootstrap was so hard that almost every single Bootstrap website looked the same.<br/>
That wouldn’t be a problem when the component library is built on top of Tailwind CSS. You can customize the design of each component by simply adding utility classes to it. It can’t get any easier than that.<br/>
Now you have the speed of component class names and the flexibility of utility class names.`,X,v,Me='<a aria-hidden="true" tabindex="-1" href="#who-is-daisyui-for"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Who is daisyUI for?',Z,I,Se="daisyUI is for people who want to build web pages fast but they also want to be able to customize the design of their components.",ee,U,Ie="Using <strong>utility classes only</strong> is not practical for most people. It’s not fast and it’s not easy to maintain.",te,q,Ue="Using <strong>component classes only</strong> not practical either. It’s not flexible and it’s not customizable.",ie,P,qe="There should be a balance between these two approaches where we have access to both speed and flexibility.",se,z,Pe="<p>Having component classes on top of utility classes is the best of both worlds.</p>",ae,T,ze='<a aria-hidden="true" tabindex="-1" href="#who-shouldnt-use-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Who shouldn’t use daisyUI?',le,j,je="daisyUI is not for you if you don’t need pre-made components. If you want to build everything from scratch, you don’t need daisyUI. Tailwind CSS provides all you need.",ne,_,Be='<a aria-hidden="true" tabindex="-1" href="#how-is-daisyui-different-from-other-tailwind-css-component-libraries"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How is daisyUI different from other Tailwind CSS component libraries?',oe,B,Oe=`daisyUI offers short, intuitive, and easy to remember class names.<br/>
Other Tailwind CSS component libraries usually use the utility-only approach which results in bloated HTML files with a lot of class names.`,re,O,$e="Basically with daisyUI you use a single <code>btn</code> class to make a button and then you can customize it with utility classes. With other component libraries you use copy/paste 100 class names to make a button and then you can customize it by editing them.",ue,g,We='<a aria-hidden="true" tabindex="-1" href="#how-can-i-use-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How can I use daisyUI?',de,$,Ee='To use daisyUI you need to install <a href="https://nodejs.org/en/download" rel="nofollow" target="_blank">Node.js</a> and <a href="https://tailwindcss.com/docs/installation" rel="nofollow" target="_blank">Tailwind CSS</a>.',pe,W,Ye="<li>install daisyUI with npm:</li>",ce,E,he,Ve='<code class="language-bash"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> daisyui@latest</code>',fe,H,Ae="<li>Then add daisyUI to your tailwind.config.js files:</li>",ye,Y,me,Xe=`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`,be,A,Ke='Read more about <a href="https://daisyui.com/docs/install/" rel="nofollow" target="_blank">how to install daisyUI</a> and <a href="https://daisyui.com/docs/use/" rel="nofollow" target="_blank">how to use daisyUI</a>.';return{c(){u=a("h2"),u.innerHTML=m,y=n(),c=a("p"),c.innerHTML=d,p=n(),h=a("h2"),h.innerHTML=ve,N=n(),x=a("p"),x.innerHTML=Te,Q=n(),C=a("blockquote"),C.innerHTML=_e,R=n(),b=a("h2"),b.innerHTML=ge,D=n(),L=a("p"),L.innerHTML=He,F=n(),k=a("ul"),k.innerHTML=xe,G=n(),M=a("blockquote"),M.innerHTML=Ce,J=n(),w=a("h2"),w.innerHTML=Le,V=n(),S=a("p"),S.innerHTML=ke,X=n(),v=a("h2"),v.innerHTML=Me,Z=n(),I=a("p"),I.textContent=Se,ee=n(),U=a("p"),U.innerHTML=Ie,te=n(),q=a("p"),q.innerHTML=Ue,ie=n(),P=a("p"),P.textContent=qe,se=n(),z=a("blockquote"),z.innerHTML=Pe,ae=n(),T=a("h2"),T.innerHTML=ze,le=n(),j=a("p"),j.textContent=je,ne=n(),_=a("h2"),_.innerHTML=Be,oe=n(),B=a("p"),B.innerHTML=Oe,re=n(),O=a("p"),O.innerHTML=$e,ue=n(),g=a("h2"),g.innerHTML=We,de=n(),$=a("p"),$.innerHTML=Ee,pe=n(),W=a("ol"),W.innerHTML=Ye,ce=n(),E=a("pre"),he=new Re(!1),fe=n(),H=a("ol"),H.innerHTML=Ae,ye=n(),Y=a("pre"),me=new Re(!1),be=n(),A=a("p"),A.innerHTML=Ke,this.h()},l(e){u=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(u)!=="svelte-p8muly"&&(u.innerHTML=m),y=o(e),c=l(e,"P",{"data-svelte-h":!0}),r(c)!=="svelte-17tnuqr"&&(c.innerHTML=d),p=o(e),h=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(h)!=="svelte-19890uc"&&(h.innerHTML=ve),N=o(e),x=l(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-nni9cy"&&(x.innerHTML=Te),Q=o(e),C=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),r(C)!=="svelte-10n2dza"&&(C.innerHTML=_e),R=o(e),b=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(b)!=="svelte-fofem3"&&(b.innerHTML=ge),D=o(e),L=l(e,"P",{"data-svelte-h":!0}),r(L)!=="svelte-yfc4f8"&&(L.innerHTML=He),F=o(e),k=l(e,"UL",{"data-svelte-h":!0}),r(k)!=="svelte-5iluuy"&&(k.innerHTML=xe),G=o(e),M=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),r(M)!=="svelte-szjy0g"&&(M.innerHTML=Ce),J=o(e),w=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(w)!=="svelte-tfp1wd"&&(w.innerHTML=Le),V=o(e),S=l(e,"P",{"data-svelte-h":!0}),r(S)!=="svelte-qm14tu"&&(S.innerHTML=ke),X=o(e),v=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(v)!=="svelte-uoczq3"&&(v.innerHTML=Me),Z=o(e),I=l(e,"P",{"data-svelte-h":!0}),r(I)!=="svelte-apekpb"&&(I.textContent=Se),ee=o(e),U=l(e,"P",{"data-svelte-h":!0}),r(U)!=="svelte-1evxyq1"&&(U.innerHTML=Ie),te=o(e),q=l(e,"P",{"data-svelte-h":!0}),r(q)!=="svelte-23hg6v"&&(q.innerHTML=Ue),ie=o(e),P=l(e,"P",{"data-svelte-h":!0}),r(P)!=="svelte-15gtve6"&&(P.textContent=qe),se=o(e),z=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),r(z)!=="svelte-1m20rqo"&&(z.innerHTML=Pe),ae=o(e),T=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(T)!=="svelte-1yg67kn"&&(T.innerHTML=ze),le=o(e),j=l(e,"P",{"data-svelte-h":!0}),r(j)!=="svelte-fyp2ve"&&(j.textContent=je),ne=o(e),_=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(_)!=="svelte-13ssn7q"&&(_.innerHTML=Be),oe=o(e),B=l(e,"P",{"data-svelte-h":!0}),r(B)!=="svelte-1gqltp8"&&(B.innerHTML=Oe),re=o(e),O=l(e,"P",{"data-svelte-h":!0}),r(O)!=="svelte-kd3bpp"&&(O.innerHTML=$e),ue=o(e),g=l(e,"H2",{id:!0,"data-svelte-h":!0}),r(g)!=="svelte-1r2jay0"&&(g.innerHTML=We),de=o(e),$=l(e,"P",{"data-svelte-h":!0}),r($)!=="svelte-d4zstn"&&($.innerHTML=Ee),pe=o(e),W=l(e,"OL",{"data-svelte-h":!0}),r(W)!=="svelte-d22mxb"&&(W.innerHTML=Ye),ce=o(e),E=l(e,"PRE",{class:!0});var t=De(E);he=Fe(t,!1),t.forEach(i),fe=o(e),H=l(e,"OL",{start:!0,"data-svelte-h":!0}),r(H)!=="svelte-1gft8iq"&&(H.innerHTML=Ae),ye=o(e),Y=l(e,"PRE",{class:!0});var Ne=De(Y);me=Fe(Ne,!1),Ne.forEach(i),be=o(e),A=l(e,"P",{"data-svelte-h":!0}),r(A)!=="svelte-z3nj37"&&(A.innerHTML=Ke),this.h()},h(){f(u,"id","what-is-daisyui"),f(h,"id","is-daisyui-against-the-tailwind-css-philosophy"),f(b,"id","isnt-tailwind-css-enough-why-do-we-need-a-component-library-on-top-of-tailwind-css"),f(w,"id","but-we-already-had-bootstrap-are-we-going-full-circle"),f(v,"id","who-is-daisyui-for"),f(T,"id","who-shouldnt-use-daisyui"),f(_,"id","how-is-daisyui-different-from-other-tailwind-css-component-libraries"),f(g,"id","how-can-i-use-daisyui"),he.a=null,f(E,"class","language-bash"),f(H,"start","2"),me.a=null,f(Y,"class","language-js")},m(e,t){s(e,u,t),s(e,y,t),s(e,c,t),s(e,p,t),s(e,h,t),s(e,N,t),s(e,x,t),s(e,Q,t),s(e,C,t),s(e,R,t),s(e,b,t),s(e,D,t),s(e,L,t),s(e,F,t),s(e,k,t),s(e,G,t),s(e,M,t),s(e,J,t),s(e,w,t),s(e,V,t),s(e,S,t),s(e,X,t),s(e,v,t),s(e,Z,t),s(e,I,t),s(e,ee,t),s(e,U,t),s(e,te,t),s(e,q,t),s(e,ie,t),s(e,P,t),s(e,se,t),s(e,z,t),s(e,ae,t),s(e,T,t),s(e,le,t),s(e,j,t),s(e,ne,t),s(e,_,t),s(e,oe,t),s(e,B,t),s(e,re,t),s(e,O,t),s(e,ue,t),s(e,g,t),s(e,de,t),s(e,$,t),s(e,pe,t),s(e,W,t),s(e,ce,t),s(e,E,t),he.m(Ve,E),s(e,fe,t),s(e,H,t),s(e,ye,t),s(e,Y,t),me.m(Xe,Y),s(e,be,t),s(e,A,t)},p:et,d(e){e&&(i(u),i(y),i(c),i(p),i(h),i(N),i(x),i(Q),i(C),i(R),i(b),i(D),i(L),i(F),i(k),i(G),i(M),i(J),i(w),i(V),i(S),i(X),i(v),i(Z),i(I),i(ee),i(U),i(te),i(q),i(ie),i(P),i(se),i(z),i(ae),i(T),i(le),i(j),i(ne),i(_),i(oe),i(B),i(re),i(O),i(ue),i(g),i(de),i($),i(pe),i(W),i(ce),i(E),i(fe),i(H),i(ye),i(Y),i(be),i(A))}}}function ct(K){let u,m;const y=[K[0],Je];let c={$$slots:{default:[pt]},$$scope:{ctx:K}};for(let d=0;d<y.length;d+=1)c=we(c,y[d]);return u=new dt({props:c}),{c(){st(u.$$.fragment)},l(d){at(u.$$.fragment,d)},m(d,p){lt(u,d,p),m=!0},p(d,[p]){const h=p&1?ut(y,[p&1&&Ge(d[0]),p&0&&Ge(Je)]):{};p&2&&(h.$$scope={dirty:p,ctx:d}),u.$set(h)},i(d){m||(nt(u.$$.fragment,d),m=!0)},o(d){ot(u.$$.fragment,d),m=!1},d(d){rt(u,d)}}}const Je={title:"What is daisyUI? (and other questions I get asked a lot)",desc:"Is daisyUI against the Tailwind CSS philosophy? Are we going full circle? Why not just use Bootstrap? Here I answer some of the most common questions I get asked about daisyUI.",published:!0,date:"2023-9-10",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/daisyui-stars.jpg",tags:["Tailwind CSS","Component Library"]};function ht(K,u,m){return K.$$set=y=>{m(0,u=we(we({},u),Qe(y)))},u=Qe(u),[u]}class wt extends tt{constructor(u){super(),it(this,u,ht,ct,Ze,{})}}export{wt as component};
