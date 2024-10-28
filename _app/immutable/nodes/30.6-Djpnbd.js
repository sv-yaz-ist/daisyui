import{a as L,t as A,b as s,s as e,f as N}from"../chunks/disclose-version.CEbLymSa.js";import{h as o}from"../chunks/html.CRu8H1xh.js";import{l as P,s as R}from"../chunks/props.CBRLfZBG.js";import{M as D}from"../chunks/mdsvex-blog.BRrIiceu.js";var O=A(`<h2 id="what-is-daisyui"><a aria-hidden="true" tabindex="-1" href="#what-is-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What is daisyUI?</h2> <p><a href="https://daisyui.com/" rel="nofollow" target="_blank">daisyUI</a> is a component library for Tailwind CSS. While Tailwind CSS provides utility classes for each CSS rule, daisyUI provides additional component class names to Tailwind CSS to make it faster and easier to build web pages.</p> <h2 id="is-daisyui-against-the-tailwind-css-philosophy"><a aria-hidden="true" tabindex="-1" href="#is-daisyui-against-the-tailwind-css-philosophy"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Is daisyUI against the Tailwind CSS philosophy?</h2> <p>No.
daisyUI is built on top of Tailwind CSS. Utility-first approach suggests that you should use utility classes for most of your CSS rules, but it doesn’t mean you should use <strong>utility classes only</strong>.
Might be surprising to know but Tailwind CSS has an API for creating component classes (which is used by daisyUI) and Tailwind CSS itself also provides some component classes along with utility classes.</p> <blockquote><p>It’s called utility-first, not utility-only</p></blockquote> <h2 id="isnt-tailwind-css-enough-why-do-we-need-a-component-library-on-top-of-tailwind-css"><a aria-hidden="true" tabindex="-1" href="#isnt-tailwind-css-enough-why-do-we-need-a-component-library-on-top-of-tailwind-css"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Isn’t Tailwind CSS enough? Why do we need a component library on top of Tailwind CSS?</h2> <p>The truth is using <strong>utility classes only</strong>, is not practical for most people.</p> <ul><li>It needs design knowledge because you need to make design decisions for each single CSS rule you use for your elements.</li> <li>It need deep CSS knowledge because you’re basically using shorthand CSS rules for everything.</li> <li>It creates bloated HTML files. You need to add a hundred classes to a single element to style it.</li> <li>It’s not fast. You need to think and decide for each single CSS class you want to use.</li> <li>You need to consider every state of elements, like hover, focus, active, etc. and add classes for them too.</li> <li>It’s not easy to maintain. You end up with a lot of classes in your HTML files and it’s hard to find and change them.</li> <li>Using utility classes only is basically re-inventing the wheel a lot of times. You need to write a lot of CSS classes just to make a simple element which looks exactly like the one you made before.</li></ul> <blockquote><p>So instead of <strong>utility-only</strong> let’s keep it <strong>utility-first</strong> Let’s use utility classes whenever we need customization
and use component classes when we need speed</p></blockquote> <h2 id="but-we-already-had-bootstrap-are-we-going-full-circle"><a aria-hidden="true" tabindex="-1" href="#but-we-already-had-bootstrap-are-we-going-full-circle"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>But we already had Bootstrap. Are we going full circle?</h2> <p>Here’s where Tailwind CSS and the utility classes really shine.
The biggest problem with Bootstrap and similar component libraries was that they were not customizable. You can’t change the design of a component without overriding a lot of CSS rules. Customizing Bootstrap was so hard that almost every single Bootstrap website looked the same.
That wouldn’t be a problem when the component library is built on top of Tailwind CSS. You can customize the design of each component by simply adding utility classes to it. It can’t get any easier than that.
Now you have the speed of component class names and the flexibility of utility class names.</p> <h2 id="who-is-daisyui-for"><a aria-hidden="true" tabindex="-1" href="#who-is-daisyui-for"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Who is daisyUI for?</h2> <p>daisyUI is for people who want to build web pages fast but they also want to be able to customize the design of their components.</p> <p>Using <strong>utility classes only</strong> is not practical for most people. It’s not fast and it’s not easy to maintain.</p> <p>Using <strong>component classes only</strong> not practical either. It’s not flexible and it’s not customizable.</p> <p>There should be a balance between these two approaches where we have access to both speed and flexibility.</p> <blockquote><p>Having component classes on top of utility classes is the best of both worlds.</p></blockquote> <h2 id="who-shouldnt-use-daisyui"><a aria-hidden="true" tabindex="-1" href="#who-shouldnt-use-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Who shouldn’t use daisyUI?</h2> <p>daisyUI is not for you if you don’t need pre-made components. If you want to build everything from scratch, you don’t need daisyUI. Tailwind CSS provides all you need.</p> <h2 id="how-is-daisyui-different-from-other-tailwind-css-component-libraries"><a aria-hidden="true" tabindex="-1" href="#how-is-daisyui-different-from-other-tailwind-css-component-libraries"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How is daisyUI different from other Tailwind CSS component libraries?</h2> <p>daisyUI offers short, intuitive, and easy to remember class names.
Other Tailwind CSS component libraries usually use the utility-only approach which results in bloated HTML files with a lot of class names.</p> <p>Basically with daisyUI you use a single <code>btn</code> class to make a button and then you can customize it with utility classes. With other component libraries you use copy/paste 100 class names to make a button and then you can customize it by editing them.</p> <h2 id="how-can-i-use-daisyui"><a aria-hidden="true" tabindex="-1" href="#how-can-i-use-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How can I use daisyUI?</h2> <p>To use daisyUI you need to install <a href="https://nodejs.org/en/download" rel="nofollow" target="_blank">Node.js</a> and <a href="https://tailwindcss.com/docs/installation" rel="nofollow" target="_blank">Tailwind CSS</a>.</p> <ol><li>install daisyUI with npm:</li></ol> <pre class="language-bash"><!></pre> <ol start="2"><li>Then add daisyUI to your tailwind.config.js files:</li></ol> <pre class="language-js"><!></pre> <p>Read more about <a href="https://daisyui.com/docs/install/" rel="nofollow" target="_blank">how to install daisyUI</a> and <a href="https://daisyui.com/docs/use/" rel="nofollow" target="_blank">how to use daisyUI</a>.</p>`,1);const E={title:"What is daisyUI? (and other questions I get asked a lot)",desc:"Is daisyUI against the Tailwind CSS philosophy? Are we going full circle? Why not just use Bootstrap? Here I answer some of the most common questions I get asked about daisyUI.",published:!0,date:"2023-9-10",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/daisyui-stars.webp",tags:["Reviews"]};function V(i,n){const l=P(n,["children","$$slots","$$events","$$legacy"]);D(i,R(()=>l,E,{children:(r,F)=>{var a=O(),d=N(a),p=e(e(d,!0)),u=e(e(p,!0)),c=e(e(u,!0)),h=e(e(c,!0)),y=e(e(h,!0)),m=e(e(y,!0)),b=e(e(m,!0)),f=e(e(b,!0)),g=e(e(f,!0)),w=e(e(g,!0)),v=e(e(w,!0)),k=e(e(v,!0)),S=e(e(k,!0)),I=e(e(S,!0)),_=e(e(I,!0)),U=e(e(_,!0)),C=e(e(U,!0)),T=e(e(C,!0)),x=e(e(T,!0)),$=e(e(x,!0)),q=e(e($,!0)),z=e(e(q,!0)),H=e(e(z,!0)),W=e(e(H,!0)),t=e(e(W,!0)),j=s(t);o(j,()=>'<code class="language-bash"><span class="token function">npm</span> i <span class="token parameter variable">-D</span> daisyui@latest</code>');var B=e(e(t,!0)),Y=e(e(B,!0)),M=s(Y);o(M,()=>`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">&#125;</span></code>`),L(r,a)},$$slots:{default:!0},$$legacy:!0}))}export{V as component};
