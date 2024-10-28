import{a as $a,t as Ha,b as s,s as a,f as La}from"../chunks/disclose-version.CEbLymSa.js";import{h as n}from"../chunks/html.CRu8H1xh.js";import{l as Aa,s as Ba}from"../chunks/props.CBRLfZBG.js";import{M as za}from"../chunks/mdsvex-blog.BRrIiceu.js";var Ka=Ha(`<h2 id="daisyui-4-breaking-changes"><a aria-hidden="true" tabindex="-1" href="#daisyui-4-breaking-changes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>daisyUI 4 breaking changes</h2> <p>Since the launch of daisyUI 3 in July 2023, my focus has been on pushing the boundaries and enhancing the daisyUI experience. New features in CSS opened doors to new possibilities for daisyUI and now with the release of daisyUI 4, we can enjoy all the new features and improvements.</p> <p>This latest release marks a huge leap forward in design, functionality, accessibility, and efficiency of daisyUI. For a detailed overview of the improvements, explore the <a href="https://daisyui.com/docs/changelog/" rel="nofollow" target="_blank">daisyUI changelogs page</a>.
But the most important thing for upgrading an existing project to a new major version is breaking changes. Here in this guide, we go step by step to update daisyUI from version 3 to version 4.</p> <h2 id="1-update-daisyui-package"><a aria-hidden="true" tabindex="-1" href="#1-update-daisyui-package"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>1. Update daisyUI package</h2> <p>First, you need to update the daisyUI package to the latest version. You can do this by running the following command in your terminal:</p> <pre class="language-undefined"><!></pre> <h2 id="2-daisyui-color-variables"><a aria-hidden="true" tabindex="-1" href="#2-daisyui-color-variables"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>2. daisyUI color variables</h2> <p>daisyUI 4 uses <a href="https://oklch.com/" rel="nofollow" target="_blank">the new OKLCH color system</a> under the hood. That means all color CSS variables (like <code>--p</code>, <code>--s</code>, etc) now have OKLCH values instead of HSL values.
( <a href="https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl" rel="nofollow" target="_blank">Read more about OKLCH</a> )</p> <ul><li>If you use daisyUI colors with Tailwind CSS class names (like <code>bg-primary</code>) you don’t have to do anything.</li> <li>If you use the CSS variables directly in your project (like <code>.myclass&#123; color: hsl(var(--p)) &#125;</code> ) you need to use them with oklch function (like <code>.myclass&#123; color: oklch(var(--p)) &#125;</code>) now.</li></ul> <p>Here’s the primary color of light theme in daisyUI 3 and 4:</p> <div class="grid sm:grid-cols-2 gap-x-4"><div class="text-center text-xs text-base-content/50 font-bold">Before</div> <div class="text-center text-xs text-base-content/50 font-bold">After</div> <div><pre class="language-css"><!></pre></div> <div><pre class="language-css"><!></pre></div></div> <p>So for using daisyUI color CSS variables directly inside your porject, change the color funtions from <code>hsl()</code> to <code>oklch()</code> like this:</p> <div class="grid sm:grid-cols-2 gap-x-4"><div class="text-center text-xs text-base-content/50 font-bold">Before</div> <div class="text-center text-xs text-base-content/50 font-bold">After</div> <div><pre class="language-css"><!></pre></div> <div><pre class="language-css"><!></pre></div></div> <h2 id="3-all--focus-colors-are-removed"><a aria-hidden="true" tabindex="-1" href="#3-all--focus-colors-are-removed"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>3. All <code>*-focus</code> colors are removed</h2> <p>All <code>*-focus</code> colors like <code>primary-focus</code> color in daisyUI 3 did was using the same <code>bg-primary</code> color with a darker shade.
Now thanks to the new <code>color-mix()</code> CSS function we do the same dynamically and it gives us more control on the the colors. For example take a look at this amazing class name. It mixes primary color with black to make it 7% darker:</p> <pre class="language-css"><!></pre> <p>So if you used <code>*-focus</code> colors in your project and you want the exact same result, you can use the new <code>color-mix()</code> function in arbitrary class names like this:</p> <div class="grid"><div class="row-start-1 text-center text-xs text-base-content/50 font-bold">Before</div> <div class="row-start-3 text-center text-xs text-base-content/50 font-bold">After</div> <div><pre class="language-jsx"><!></pre></div> <div><pre class="language-jsx"><!></pre></div></div> <h2 id="4-extending-themes"><a aria-hidden="true" tabindex="-1" href="#4-extending-themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>4. Extending themes</h2> <p>There’s a change in property names in <code>daisyui/src/theming/themes.js</code> file.
If you’re customizing built-in daisyUI themes, change it:</p> <div class="grid"><div class="row-start-1 text-center text-xs text-base-content/50 font-bold">Before</div> <div class="row-start-3 text-center text-xs text-base-content/50 font-bold">After</div> <div><pre class="language-js"><!></pre></div> <div><pre class="language-js"><!></pre></div></div> <h2 id="5-rtl"><a aria-hidden="true" tabindex="-1" href="#5-rtl"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>5. RTL</h2> <p>daisyUI 4 components use <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values" rel="nofollow" target="_blank">logical CSS properties</a> instead of directional rules (<code>mr-*</code>, <code>pl-*</code>, etc).
All components now support LTR/RTL in runtime without any config or plugin. You just need <code>&lt;html dir=rtl&gt;</code> and everything will be RTL on runtime.
You can safely remove <code>rtl: true</code> config and <code>tailwindcss-flip</code> plugin from your project (If you’re using logical Tailwind CSS utility classes and you don’t need the plugin for your own directional Tailwind CSS classes)</p> <div class="grid"><div class="row-start-1 text-center text-xs text-base-content/50 font-bold">Before</div> <div class="row-start-3 text-center text-xs text-base-content/50 font-bold">After</div> <div><pre class="language-js"><!></pre></div> <div><pre class="language-js"><!></pre></div></div> <h2 id="6-tab"><a aria-hidden="true" tabindex="-1" href="#6-tab"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>6. Tab</h2> <ul><li>these modifier classes for <code>tab</code> are removed: <ul><li><code>tab-lifted</code></li> <li><code>tab-bordered</code></li> <li><code>tab-lg</code></li> <li><code>tab-md</code></li> <li><code>tab-sm</code></li> <li><code>tab-xs</code></li></ul></li> <li>Use the following modifier classes for the parent <code>tabs</code> class instead: <ul><li><code>tabs-lifted</code></li> <li><code>tabs-bordered</code></li> <li><code>tabs-lg</code></li> <li><code>tabs-md</code></li> <li><code>tabs-sm</code></li> <li><code>tabs-xs</code></li></ul></li></ul> <div class="grid"><div class="row-start-1 text-center text-xs text-base-content/50 font-bold">Before</div> <div class="row-start-3 text-center text-xs text-base-content/50 font-bold">After</div> <div><pre class="language-html"><!></pre></div> <div><pre class="language-html"><!></pre></div></div> <h2 id="7-button"><a aria-hidden="true" tabindex="-1" href="#7-button"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>7. Button</h2> <p>Buttons are not uppercase by default anymore. You can add <code>uppercase</code> class if you want to make them uppercase.</p> <h2 id="conclusion"><a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Conclusion</h2> <p>That’s it! You can now enjoy the new daisyUI 4 <a href="https://daisyui.com/docs/changelog/" rel="nofollow" target="_blank">features and improvements</a> in your project.
If you have questions specific about the upgrade, ask it in <a href="https://github.com/saadeghi/daisyui/discussions/2507" rel="nofollow" target="_blank">this GitHub discussion</a> and if you found a bug, report it in <a href="https://github.com/saadeghi/daisyui/issues" rel="nofollow" target="_blank">daisyUI GitHub issues</a></p> <p>I’m excited to see all the amazing things you’ll build with daisyUI 4.</p>`,1);const Oa={title:"How to update daisyUI from version 3 to version 4",desc:"This upgrade guide helps you easily update daisyUI to version 4 without breaking anything.",published:!0,date:"2023-11-23T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/daisyui-4-update-guide.webp",tags:["Guides"]};function Na(b,m){const y=Aa(m,["children","$$slots","$$events","$$legacy"]);za(b,Ba(()=>y,Oa,{children:(f,Ra)=>{var t=Ka(),_=La(t),x=a(a(_,!0)),w=a(a(x,!0)),I=a(a(w,!0)),S=a(a(I,!0)),e=a(a(S,!0)),U=s(e);n(U,()=>'<code class="language-undefined">npm i -D daisyui@latest</code>');var j=a(a(e,!0)),T=a(a(j,!0)),q=a(a(T,!0)),C=a(a(q,!0)),o=a(a(C,!0)),$=s(o),H=a(a($,!0)),p=a(a(H,!0)),L=s(p),A=s(L);n(A,()=>`<code class="language-css"><span class="token comment">/* the values were HSL */</span>
<span class="token property">--p</span><span class="token punctuation">:</span> 251.47 100% 56%<span class="token punctuation">;</span></code>`);var B=a(a(p,!0)),z=s(B),K=s(z);n(K,()=>`<code class="language-css"><span class="token comment">/* the values are OKLCH */</span>
<span class="token property">--p</span><span class="token punctuation">:</span> 0.4912 0.3096 275.75<span class="token punctuation">;</span></code>`);var O=a(a(o,!0)),c=a(a(O,!0)),R=s(c),Y=a(a(R,!0)),l=a(a(Y,!0)),F=s(l),G=s(F);n(G,()=>`<code class="language-css"><span class="token comment">/* Using hsl() function */</span>
<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`);var M=a(a(l,!0)),N=s(M),P=s(N);n(P,()=>`<code class="language-css"><span class="token comment">/* Using oklch() function */</span>
<span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">oklch</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`);var D=a(a(c,!0)),E=a(a(D,!0)),i=a(a(E,!0)),J=s(i);n(J,()=>`<code class="language-css">bg-[<span class="token function">color-mix</span><span class="token punctuation">(</span>in_oklab<span class="token punctuation">,</span><span class="token function">oklch</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>black_7%<span class="token punctuation">)</span>]
                   │              │       │
                   │              │       │
                   │              │       │
                   │              │       ╰── black with 7% opacity = 7% darker
                   │              │
                   │              ╰── primary color
                   │
                   ╰── OKLAB gives a better result</code>`);var W=a(a(i,!0)),r=a(a(W,!0)),Z=s(r),Q=a(a(Z,!0)),u=a(a(Q,!0)),V=s(u),X=s(V);n(X,()=>`<code class="language-jsx"><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-primary-focus"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-secondary-focus"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-accent-focus"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-neutral-focus"</span></code>`);var aa=a(a(u,!0)),sa=s(aa),na=s(sa);n(na,()=>`<code class="language-jsx"><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-[color-mix(in_oklab,oklch(var(--p)),black_7%)]"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-[color-mix(in_oklab,oklch(var(--s)),black_7%)]"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-[color-mix(in_oklab,oklch(var(--a)),black_7%)]"</span>
<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-[color-mix(in_oklab,oklch(var(--n)),black_7%)]"</span></code>`);var ta=a(a(r,!0)),ea=a(a(ta,!0)),d=a(a(ea,!0)),oa=s(d),pa=a(a(oa,!0)),k=a(a(pa,!0)),ca=s(k),la=s(ca);n(la,()=>`<code class="language-js"><span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"[data-theme=light]"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`);var ia=a(a(k,!0)),ra=s(ia),ua=s(ra);n(ua,()=>`<code class="language-js"><span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">light</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
        <span class="token operator">...</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui/src/theming/themes"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">"light"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">,</span></code>`);var da=a(a(d,!0)),ka=a(a(da,!0)),g=a(a(ka,!0)),ga=s(g),va=a(a(ga,!0)),v=a(a(va,!0)),ha=s(v),ba=s(ha);n(ba,()=>`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"tailwindcss-flip"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">rtl</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`);var ma=a(a(v,!0)),ya=s(ma),fa=s(ya);n(fa,()=>`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`);var _a=a(a(g,!0)),xa=a(a(_a,!0)),wa=a(a(xa,!0)),Ia=s(wa),Sa=a(a(Ia,!0)),h=a(a(Sa,!0)),Ua=s(h),ja=s(Ua);n(ja,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-lg tab-lifted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-lg tab-lifted tab-active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-lg tab-lifted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-lg tab-lifted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`);var Ta=a(a(h,!0)),qa=s(Ta),Ca=s(qa);n(Ca,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabs tabs-lg tabs-lifted<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab tab-active<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Tab 4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`),$a(f,t)},$$slots:{default:!0},$$legacy:!0}))}export{Na as component};
