import{s as xs,z as X,A as ks,e as l,a as c,H as G,c as o,g as r,d as u,b as K,x as Q,h as a,i as _,j as t,n as _s}from"../chunks/scheduler.CxwacNDC.js";import{S as vs,i as ys,c as ws,b as Ms,m as bs,t as Is,a as Hs,d as Ts}from"../chunks/index.NSAxVPe6.js";import{g as Us,a as rs}from"../chunks/spread.CgU5AtxT.js";import{M as Cs}from"../chunks/mdsvex-blog.z_0hzjjg.js";function Ls(L){let e,g="Headless UI is a set of completely unstyled, fully accessible UI components for React and Vue. It gives you functionality without design decisions. daisyUI is a Tailwind CSS component library that provides design decisions without functionality. That’s why it is suggested to use them together.",m,i,p='<a aria-hidden="true" tabindex="-1" href="#why-use-headless-ui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Why use Headless UI?',k,d,Y='As a CSS-only component library, daisyUI doesn’t include any JavaScript code. However sometimes you need JS to make interactive components or to improve keyboard navigation. That’s where <a href="https://headlessui.com/" rel="nofollow" target="_blank">Headless UI</a> comes in. It provides you with fully accessible UI components for React and Vue.',P,f,Z='<a aria-hidden="true" tabindex="-1" href="#how-to-install-headless-ui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to install Headless UI?',S,v,ss='<a href="https://headlessui.com/" rel="nofollow" target="_blank">Headless UI</a> is available for React and Vue. But there is an <a href="https://github.com/rgossiaux/svelte-headlessui" rel="nofollow" target="_blank">unofficial port of Headless UI for Svelte</a> too.',j,y,as="<li>To install Headless UI for Vue, run the following command:</li>",q,w,$,ds='<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @headlessui/vue</code>',E,M,ns="Or this command if you’re using React:",R,b,B,gs='<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @headlessui/react</code>',V,h,ts='<li>Now you can use any of the <a href="https://headlessui.com/" rel="nofollow" target="_blank">Headless UI components</a> by copy/pasting the code to your project.</li>',A,I,es="For example, according to Headless UI docs, this is how you can create a dropdown menu:",D,H,O,fs=`<code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Menu <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@headlessui/react"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyDropDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Items</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Items</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`,N,x,ps="<li>Add daisyUI</li>",J,T,ls=`After <a href="https://daisyui.com/docs/install/" rel="nofollow" target="_blank">installing daisyUI</a> you can use daisyUI’s styles in Headless UI components.<br/>
Simply add daisyUI class names (and Tailwind CSS utility classes) where it’s needed:`,W,U,z,hs=`<code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Menu <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@headlessui/react"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyDropDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Button</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Items</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu rounded-box bg-base-200 w-52<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Items</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`,F,C,os='Visit <a href="https://headlessui.com/" rel="nofollow" target="_blank">Headless UI docs</a> to learn more about its components.';return{c(){e=l("p"),e.textContent=g,m=c(),i=l("h2"),i.innerHTML=p,k=c(),d=l("p"),d.innerHTML=Y,P=c(),f=l("h2"),f.innerHTML=Z,S=c(),v=l("p"),v.innerHTML=ss,j=c(),y=l("ol"),y.innerHTML=as,q=c(),w=l("pre"),$=new G(!1),E=c(),M=l("p"),M.textContent=ns,R=c(),b=l("pre"),B=new G(!1),V=c(),h=l("ol"),h.innerHTML=ts,A=c(),I=l("p"),I.textContent=es,D=c(),H=l("pre"),O=new G(!1),N=c(),x=l("ol"),x.innerHTML=ps,J=c(),T=l("p"),T.innerHTML=ls,W=c(),U=l("pre"),z=new G(!1),F=c(),C=l("p"),C.innerHTML=os,this.h()},l(s){e=o(s,"P",{"data-svelte-h":!0}),r(e)!=="svelte-1evb2g8"&&(e.textContent=g),m=u(s),i=o(s,"H2",{id:!0,"data-svelte-h":!0}),r(i)!=="svelte-1opiq5u"&&(i.innerHTML=p),k=u(s),d=o(s,"P",{"data-svelte-h":!0}),r(d)!=="svelte-4udbjj"&&(d.innerHTML=Y),P=u(s),f=o(s,"H2",{id:!0,"data-svelte-h":!0}),r(f)!=="svelte-1n2aqx9"&&(f.innerHTML=Z),S=u(s),v=o(s,"P",{"data-svelte-h":!0}),r(v)!=="svelte-13ba5j9"&&(v.innerHTML=ss),j=u(s),y=o(s,"OL",{"data-svelte-h":!0}),r(y)!=="svelte-ftny3v"&&(y.innerHTML=as),q=u(s),w=o(s,"PRE",{class:!0});var n=K(w);$=Q(n,!1),n.forEach(a),E=u(s),M=o(s,"P",{"data-svelte-h":!0}),r(M)!=="svelte-scvlfp"&&(M.textContent=ns),R=u(s),b=o(s,"PRE",{class:!0});var cs=K(b);B=Q(cs,!1),cs.forEach(a),V=u(s),h=o(s,"OL",{start:!0,"data-svelte-h":!0}),r(h)!=="svelte-14e3ya5"&&(h.innerHTML=ts),A=u(s),I=o(s,"P",{"data-svelte-h":!0}),r(I)!=="svelte-t870xi"&&(I.textContent=es),D=u(s),H=o(s,"PRE",{class:!0});var us=K(H);O=Q(us,!1),us.forEach(a),N=u(s),x=o(s,"OL",{start:!0,"data-svelte-h":!0}),r(x)!=="svelte-1631nvk"&&(x.innerHTML=ps),J=u(s),T=o(s,"P",{"data-svelte-h":!0}),r(T)!=="svelte-xtw7hp"&&(T.innerHTML=ls),W=u(s),U=o(s,"PRE",{class:!0});var is=K(U);z=Q(is,!1),is.forEach(a),F=u(s),C=o(s,"P",{"data-svelte-h":!0}),r(C)!=="svelte-1sux6gc"&&(C.innerHTML=os),this.h()},h(){_(i,"id","why-use-headless-ui"),_(f,"id","how-to-install-headless-ui"),$.a=null,_(w,"class","language-bash"),B.a=null,_(b,"class","language-bash"),_(h,"start","2"),O.a=null,_(H,"class","language-jsx"),_(x,"start","3"),z.a=null,_(U,"class","language-jsx")},m(s,n){t(s,e,n),t(s,m,n),t(s,i,n),t(s,k,n),t(s,d,n),t(s,P,n),t(s,f,n),t(s,S,n),t(s,v,n),t(s,j,n),t(s,y,n),t(s,q,n),t(s,w,n),$.m(ds,w),t(s,E,n),t(s,M,n),t(s,R,n),t(s,b,n),B.m(gs,b),t(s,V,n),t(s,h,n),t(s,A,n),t(s,I,n),t(s,D,n),t(s,H,n),O.m(fs,H),t(s,N,n),t(s,x,n),t(s,J,n),t(s,T,n),t(s,W,n),t(s,U,n),z.m(hs,U),t(s,F,n),t(s,C,n)},p:_s,d(s){s&&(a(e),a(m),a(i),a(k),a(d),a(P),a(f),a(S),a(v),a(j),a(y),a(q),a(w),a(E),a(M),a(R),a(b),a(V),a(h),a(A),a(I),a(D),a(H),a(N),a(x),a(J),a(T),a(W),a(U),a(F),a(C))}}}function Ps(L){let e,g;const m=[L[0],ms];let i={$$slots:{default:[Ls]},$$scope:{ctx:L}};for(let p=0;p<m.length;p+=1)i=X(i,m[p]);return e=new Cs({props:i}),{c(){ws(e.$$.fragment)},l(p){Ms(e.$$.fragment,p)},m(p,k){bs(e,p,k),g=!0},p(p,[k]){const d=k&1?Us(m,[k&1&&rs(p[0]),k&0&&rs(ms)]):{};k&2&&(d.$$scope={dirty:k,ctx:p}),e.$set(d)},i(p){g||(Is(e.$$.fragment,p),g=!0)},o(p){Hs(e.$$.fragment,p),g=!1},d(p){Ts(e,p)}}}const ms={title:"How to use Headless UI and daisyUI together?",desc:"What is Headless UI and why it is suggested to use it with daisyUI?",published:!0,date:"2023-9-28",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/headless-ui.jpg",tags:["Headless UI","Component Library"]};function Ss(L,e,g){return L.$$set=m=>{g(0,e=X(X({},e),ks(m)))},e=ks(e),[e]}class Rs extends vs{constructor(e){super(),ys(this,e,Ss,Ps,xs,{})}}export{Rs as component};
