import{a as s,t as n}from"../chunks/disclose-version.CEbLymSa.js";import{l as d,s as r}from"../chunks/props.CBRLfZBG.js";import{M as l}from"../chunks/mdsvex-blog.BRrIiceu.js";var c=n(`<p>It’s been 3 years since the first commit of daisyUI. At first, it was just a small side project to help me with my own freelance projects. But it quickly grew into something bigger than I could have ever imagined. It’s been an exciting journey and 2023 in particular was a special year for daisyUI. Let’s see all the good things that happened in 2023.</p> <h2 id="2023-in-numbers-"><a aria-hidden="true" tabindex="-1" href="#2023-in-numbers-"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>2023 in numbers 📊</h2> <ul><li>In 2023 we released <code>190</code> versions of daisyUI from <code>2.46.1</code> to <code>4.4.20</code> fixing more than <code>1000</code> bugs and adding many new features.</li> <li>daisyUI is now used in more than <code>156,000</code> open source projects according to GitHub’s dependency graph (<code>340%</code> increase compared to 2022).</li> <li>In the past year, daisyUI GitHub repo went from <code>16,000</code> stars to <code>27,000</code> stars and it’s now in GitHub’s top 500 repositories.</li> <li>daisyUI NPM package recently reached the all time record of <code>260,000</code> downloads per week. It was downloaded <code>7.7</code> million times in 2023 (a <code>330%</code> increase compared to 2022).</li></ul> <figure><img src="https://img.daisyui.com/images/blog/daisyui-is-the-most-popular-tailwindcss-component-library.webp" alt="daisyUI NPM installs" class="rounded-box"> <figcaption class="text-center">daisyUI NPM installs</figcaption></figure> <ul><li>daisyUI CDN file now has more than <code>3 million hits per week</code> from jsDelivr only (we can estimate a similar number from other CDNs in addition to jsDelivr).</li> <li>In the beginning of 2023, daisyUI had <code>89</code> contributors. Now in December, it has <code>162</code> contributors from many different countries around the world.</li></ul> <figure><img src="https://img.daisyui.com/images/blog/daisyui-contributors.webp" alt="daisyUI contributors around the world" class="rounded-box"> <figcaption class="text-center">daisyUI contributors around the world</figcaption></figure> <h2 id="performance-improvements"><a aria-hidden="true" tabindex="-1" href="#performance-improvements"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>performance improvements</h2> <ul><li>daisyUI 4 reduced the Node package install size from 14.0MB to 3.83MB (including all dependencies).</li> <li>daisyUI 4 reduced Node module dependencies by 92% and node_modules footprint by 73%.</li></ul> <table><thead><tr><th></th><th>daisyUI 3</th><th>daisyUI 4</th></tr></thead><tbody><tr><td>NPM install size</td><td>14.0MB</td><td>3.83MB</td></tr><tr><td>NPM bundle size</td><td>434kB</td><td>238.7kB</td></tr><tr><td>NPM bundle size (gzip)</td><td>74.7kB</td><td>38.8kB</td></tr><tr><td>Total Node module dependencies</td><td>86</td><td>7</td></tr></tbody></table> <ul><li>We moved from HSL color system to OKLCH wide-gamut color system. This granted us access to a wider color gamut and allows us to use more colors in daisyUI themes.</li> <li>daisyUI 4 also moved from directional CSS to logical CSS properties which makes it easier to support RTL languages in runtime, without the need to generate a separate CSS file using additional dependencies.</li></ul> <h2 id="new-features"><a aria-hidden="true" tabindex="-1" href="#new-features"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>New features</h2> <p>In 2023, we added 7 new components, 3 new themes and more than 100 utility classes to daisyUI. We also rewrote the style for many components to make them more accessible and easier to customize. You can check the details in the <a href="/docs/changelog/">changelog</a>.</p> <h2 id="accessibility"><a aria-hidden="true" tabindex="-1" href="#accessibility"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Accessibility</h2> <p>All color pairs used on daisyUI built-in themes now tested for contrast ratio and <a href="https://github.com/saadeghi/daisyui/actions/runs/7216144450/job/19661791138#step:6:20" rel="nofollow" target="_blank">they all pass the WCAG test</a>. This test runs automatically everytime there’s a change in themes or theme functions to make sure we provide accessible color combinations by default.</p> <figure><img src="https://img.daisyui.com/images/blog/daisyui-colors-are-accessible.webp" alt="daisyUI colors are accessible" class="rounded-box"> <figcaption class="text-center"><p><a href="https://github.com/saadeghi/daisyui/actions/runs/7216144450/job/19661791138#step:6:20" rel="nofollow" target="_blank">See the test results</a></p></figcaption></figure> <p>In 2023 all daisyUI theme colors were adjusted to improve contrast ratio while providing a better visual experience. As long as you use the correct color pairs to build your UI (for example using <code>bg-primary</code> and <code>text-primary-content</code> together), you can be sure that your UI is accessible by default, on all themes.</p> <p>In 2023 daisyUI adapted to new HTML and CSS standards such as the new <code>&lt;dialog&gt;</code> element and CSS features like <code>:has()</code> and <code>color-mix()</code>. We also improved existing components to make sure they are accessible by default. We now use HTML <code>&lt;dialog&gt;</code> element for daisyUI modal and we use HTML <code>&lt;details&gt;</code> for submenus and dropdown examples.</p> <p>daisyUI uses native HTML elements and attributes on all components to provide an accessible experience by default. We are not using <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> with <code>role</code> attributes to emulate native HTML elements. This means accessibility is not an afterthought in daisyUI. It’s included by default if use the native HTML elements.</p> <p>This is a huge advantage for daisyUI and it’s one of the reasons why daisyUI is accessible. For example, <a href="https://daisyui.com/components/toggle/" rel="nofollow" target="_blank">daisyUI <code>toggle</code></a> is a native HTML checkbox and it’s accessible by default. But if a component library uses <code>&lt;div&gt;</code> tags to to emulate native HTML elements they would need <code>role="checkbox"</code>, <code>aria-checked</code> and <code>aria-labelledby</code> attributes to make it accessible for screen readers and keyboard navigation. They would also need custom, framework specific JS to make it functional. This is not the case for daisyUI because we use semantic HTML elements and attributes for daisyUI components.</p> <p>In 2023 we improved the code example for each component to make sure they are accessible for keyboard navigation and screen readers.</p> <blockquote><p>For content-specific code examples, we don’t provide a generic content in the code example.
For example <code>&lt;img&gt;</code> tags do not have an <code>alt</code> attribute because the <code>alt</code> attribute must be provided by you, based on your page’s content. This is also true for <code>aria-label</code> and <code>aria-labelledby</code> attributes.
If we provide a dummy text for that, it’s likely for you to ship that code to production without changing it.
That’s not okay so it’s better if you receive an error from your code editor or linter to remind you to add the correct <code>alt</code> or <code>aria-label</code> attribute when needed.</p></blockquote> <h2 id="a-cli-for-installing-tailwind-css-and-daisyui"><a aria-hidden="true" tabindex="-1" href="#a-cli-for-installing-tailwind-css-and-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>A CLI for installing Tailwind CSS and daisyUI</h2> <p>In 2023 we released <a href="/blog/npm-init-daisyui/">npm init daisyui</a> which is a CLI tool for installing Tailwind CSS, PostCSS and daisyUI in a single command. <a href="https://github.com/daisyui/create-daisyui/" rel="nofollow" target="_blank">Give the repo a star on GitHub</a> if you like it!</p> <h2 id="daisyui-has-a-logo-now"><a aria-hidden="true" tabindex="-1" href="#daisyui-has-a-logo-now"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>daisyUI has a logo now!</h2> <p>Some people say it’s a fried egg 🍳 and avocado 🥑, some people say it’s a flower 🌼
But we all agree that it’s cute and simple.</p> <img src="https://img.daisyui.com/images/daisyui-logo/daisyui-logotype.svg" alt="daisyUI logo" class="w-2/3 mx-auto bg-gray-100 rounded-box"> <h2 id="website-redesign"><a aria-hidden="true" tabindex="-1" href="#website-redesign"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Website redesign</h2> <p>daisyUI website was redesigned in 2023. The new homepage visualizes the most important features of daisyUI and how it can help your development workflow using Tailwind CSS. We’re using SvelteKit 2 and Vite 5 for the website now and it’s such a joy to work with.</p> <h2 id="docs-improvements"><a aria-hidden="true" tabindex="-1" href="#docs-improvements"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Docs improvements</h2> <p>We added 6 new translations to the website in 2023. daisyUI docs are now available in 16 languages which makes it accessible to a wider audience.</p> <img src="https://img.daisyui.com/images/blog/daisyui-translations.webp" alt="daisyUI translations" class="rounded-box mx-auto w-2/3"> <p>This year we launched <a href="/store/">daisyUI Store</a>, <a href="/resources/videos/">daisyUI Resources</a> and <a href="/blog/">daisyUI Blog</a>.</p> <p>We added new pages including <a href="/docs/roadmap/">daisyUI Roadmap</a>, <a href="/docs/utilities/">daisyUI utilities docs</a> and also a <a href="https://github.com/saadeghi/daisyui/discussions/1949" rel="nofollow" target="_blank">FAQ page</a>.</p> <h2 id="newsletter"><a aria-hidden="true" tabindex="-1" href="#newsletter"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Newsletter</h2> <p>We have a newsletter now! You can subscribe using the form on the footer of the website to get the latest news about daisyUI.</p> <p>You can also subscribe to the RSS feed for <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-4 w-4 text-warning"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <a href="/blog/rss.xml">daisyUI Blog</a> or <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline h-4 w-4 text-warning"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <a href="/store/rss.xml">daisyUI Store</a> to get the latest updates.</p> <h2 id="growing-community"><a aria-hidden="true" tabindex="-1" href="#growing-community"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>growing community</h2> <p>There are projects built on top of daisyUI like <a href="https://github.com/daisyui/react-daisyui" rel="nofollow" target="_blank">React daisyUI</a> which is a React component library on top of daisyUI. There is also <a href="https://github.com/robsontenorio/mary" rel="nofollow" target="_blank">Mary UI</a> for Laravel and Livewire. I’m really excited to see more projects like these in 2024. If you’re working on a project built on top of daisyUI, let me know so I can add it the footer of daisyUI website.</p> <h2 id="thank-you-daisyui-contributors-"><a aria-hidden="true" tabindex="-1" href="#thank-you-daisyui-contributors-"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Thank you daisyUI contributors 💚</h2> <p>In the beginning of 2023, daisyUI had <code>89</code> contributors. Now it has <code>162</code> contributors. I’m grateful for all contributions and support from the community. daisyUI is a community project that wouldn’t be possible without the help of all contributors.</p> <figure><img src="https://contrib.rocks/image?repo=saadeghi/daisyui&amp;columns=15&amp;anon=1&amp;max=300" alt="daisyUI contributors on GitHub" class="rounded-box"> <figcaption class="text-center">daisyUI contributors on GitHub</figcaption></figure> <p>daisyUI now has 77 financial contributors who help us keep the project alive by donating on Open Collective. Thank you all for your support!</p> <figure><img src="https://opencollective.com/daisyui/organizations.svg?button=false&amp;width=745&amp;avatarHeight=50" alt="daisyUI organization backers" class="rounded-box"> <img src="https://opencollective.com/daisyui/backers.svg?button=false&amp;width=745&amp;avatarHeight=50" alt="daisyUI backers" class="rounded-box"> <figcaption class="text-center">daisyUI sponsors on Open Collective</figcaption></figure> <h2 id="whats-next"><a aria-hidden="true" tabindex="-1" href="#whats-next"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>What’s next?</h2> <p>We’re going to fix bugs and improve daisyUI continuously. There are lots of cool things coming to CSS and Tailwind CSS in 2024 and we’re going to use them all in daisyUI. There will be new components, new themes and new features in 2024 in addition to many improvements to the existing components. I’m so excited for 2024 and I hope you are too!</p> <p>To contribute to daisyUI, you can <a href="https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md" rel="nofollow" target="_blank">start by reading the contribution guide</a>, and to report a bug or request a feature, you can <a href="https://github.com/saadeghi/daisyui/issues" rel="nofollow" target="_blank">open a new issue on GitHub</a>.</p> <p>If you have any questions, you can ask them on <a href="https://github.com/saadeghi/daisyui/discussions" rel="nofollow" target="_blank">daisyUI discussions</a>.</p> <h2 id="happy-new-year-"><a aria-hidden="true" tabindex="-1" href="#happy-new-year-"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Happy new year! 🎉</h2> <p>2023 was a great year for daisyUI and I’m so excited about how much we can accomplish in 2024. I hope you have a great year too and I wish you all the best in 2024.</p> <p>🎁 As a new year gift, use the coupon code <code>YEAR2024</code> to get 40% off on all daisyUI products on <a href="/store/">daisyUI Store</a>.</p>`,1);const h={title:"daisyUI 2023 Wrapped",desc:"It's the end of the year and this year was amazing! For Front-end development, For CSS, For Tailwind and for daisyUI! Let's take a look at what we've accomplished in 2023.",published:!0,date:"2023-12-20T00:00:00.000Z",author:"Pouya Saadeghi",thumbnail:"https://img.daisyui.com/images/blog/daisyui-is-the-best-component-library.webp",tags:["News"]};function g(e,a){const t=d(a,["children","$$slots","$$events","$$legacy"]);l(e,r(()=>t,h,{children:(o,p)=>{var i=c();s(o,i)},$$slots:{default:!0},$$legacy:!0}))}export{g as component};
