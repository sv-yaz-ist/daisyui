<script>
  import { t } from "$lib/i18n.svelte.js"

  const newtabicon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="inline-block w-4 fill-current opacity-0 group-hover:opacity-50"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z" /></svg>`
</script>

<div class="h-20"></div>

<div data-sveltekit-preload-data>
  <div class="bg-base-100 text-base-content">
    <footer class="footer md:footer-horizontal mx-auto max-w-7xl px-4 py-20 text-xs">
      <div>
        <div class="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 415 415" xmlns="http://www.w3.org/2000/svg">
            <rect x="82.5" y="290" width="250" height="125" rx="62.5" fill="#1AD1A5"></rect>
            <circle cx="207.5" cy="135" r="130" fill="black" fill-opacity=".3"></circle>
            <circle cx="207.5" cy="135" r="125" fill="white"></circle>
            <circle cx="207.5" cy="135" r="56" fill="#FF9903"></circle>
          </svg>
          <div class="font-title inline-flex text-3xl font-black">daisyUI</div>
        </div>
        <p class="text-base-content/70 mb-5">
          {@html $t("footer-tagline")}
        </p>
        <a href="/docs/faq/" class="link link-hover">{$t("FAQ")}</a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md"
          class="link link-hover group"
        >
          {$t("contributing")}
          {@html newtabicon}
        </a>
        <a href="/docs/changelog/" class="link link-hover">
          {$t("changelog")}
        </a>
        <a href="/docs/roadmap/" class="link link-hover">
          {$t("Roadmap")}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/daisyui/blob/master/LICENSE"
          class="link link-hover group"
        >
          {$t("license")}
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="/llms.txt"
          class="link link-hover group"
        >
          llms.txt
          {@html newtabicon}
        </a>
      </div>
      <div>
        <span class="footer-title opacity-70">{$t("pages")}</span>
        <a href="/docs/install/" class="link link-hover">{$t("how-to-install")}</a>
        <a href="/docs/use/" class="link link-hover">{$t("how-to-use-components")}</a>
        <a href="/docs/customize/" class="link link-hover">{$t("how-to-customize")}</a>
        <a href="/docs/themes/" class="link link-hover">{$t("how-to-use-themes")}</a>
        <a href="/docs/colors/" class="link link-hover">{$t("color-system")}</a>
        <a href="/docs/config/" class="link link-hover">{$t("config")}</a>
        <a href="/blog/" class="link link-hover">{$t("Blog")}</a>
        <a href="/resources/" class="link link-hover">{$t("Resources")}</a>
        <a href="/store/" class="link link-hover">{$t("Store")}</a>
        <a href="/store/351127/" class="link link-hover">Official daisyUI Figma Library</a>
      </div>
      <div>
        <span class="footer-title opacity-70">{$t("available-on")}</span>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/daisyui"
          class="link link-hover group"
        >
          GitHub
          {@html newtabicon}
        </a>

        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://daisyui.com/discord/"
          class="link link-hover group"
        >
          Discord
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://opencollective.com/daisyui"
          class="link link-hover group"
        >
          OpenCollective
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://www.npmjs.com/package/daisyui"
          class="link link-hover group"
        >
          NPM
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://unpkg.com/browse/daisyui/"
          class="link link-hover group"
        >
          Unpkg CDN
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://www.jsdelivr.com/package/npm/daisyui"
          class="link link-hover group"
        >
          JSdeliver CDN
          {@html newtabicon}
        </a>
      </div>
      <div>
        <span class="footer-title opacity-70">{$t("try-online")}</span>
        <a
          href="/tailwindplay/"
          class="link link-hover group"
          target="_blank"
          rel="noopener, noreferrer"
        >
          Tailwind Play
          {@html newtabicon}
        </a>
        <a target="_blank" rel="noopener, noreferrer" href="/codepen" class="link link-hover group">
          Codepen
          {@html newtabicon}
        </a>
      </div>
      <div>
        <span class="footer-title opacity-70">{$t("related projects")}</span>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/theme-change"
          class="link link-hover group"
        >
          Theme Change
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://mary-ui.com/"
          class="link link-hover group"
        >
          MaryUI (Laravel)
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/willpinha/daisy-components"
          class="link link-hover group"
        >
          willpinha/daisy-components
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/phcurado/daisy_ui_components"
          class="link link-hover group"
        >
          phcurado/daisy_ui_components (Phoenix)
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/Dzoukr/Feliz.DaisyUI"
          class="link link-hover group"
        >
          Dzoukr/Feliz.DaisyUI (F#)
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://tailscan.com/?ref=daisyui"
          class="link link-hover group"
        >
          Tailscan extension
          {@html newtabicon}
        </a>
      </div>
    </footer>
  </div>
  <footer
    class="footer footer-center border-base-200 bg-base-200 text-base-content border-t px-4 py-12"
  >
    <div class="flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
      <a
        href="https://x.com/saadeghi"
        rel="noopener, noreferrer"
        target="_blank"
        class="inline-flex items-center justify-center hover:opacity-90"
      >
        <div class="avatar me-3">
          <div class="mask mask-squircle bg-neutral h-14 w-14 p-px">
            <img
              loading="lazy"
              width="54"
              height="54"
              src="https://img.daisyui.com/images/profile/people/pouya-saadeghi.webp"
              alt="Pouya Saadeghi"
              class="mask mask-squircle"
            />
          </div>
        </div>
        <div class="text-left">
          <p class="text-base-content/70 text-xs">{$t("created-by")}</p>
          <p class="text-base-content text-lg font-bold">Pouya Saadeghi</p>
        </div>
      </a>
      <div class="max-w-md grow text-left">
        <!-- <div id="mc_embed_signup">
          <form
            action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate=""
          >
            <input
              data-group="store group"
              type="checkbox"
              name="group[347002][8]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <input
              data-group="discounts group"
              type="checkbox"
              name="group[347002][1]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <input
              data-group="releases group"
              type="checkbox"
              name="group[347002][2]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <input
              data-group="blog group"
              type="checkbox"
              name="group[347002][4]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <input
              data-group="news group"
              type="checkbox"
              name="group[347002][16]"
              value="1"
              class="hidden"
              checked="checked"
            />
            <div class="flex flex-col gap-2 w-full max-w-sm">
              <label for="mce-EMAIL">
                <div>
                  Enter your email address
                  <div class="label-text text-base-content/70 text-xs">
                    to get updates, news and discounts
                  </div>
                </div>
              </label>
              <div class="join">
                <input
                  type="email"
                  autocomplete="email"
                  name="EMAIL"
                  class="join-item input input-bordered w-full max-w-sm"
                  id="mce-EMAIL"
                  placeholder="mail@site.com"
                  required
                />
                <button name="subscribe" class="join-item btn btn-neutral">Subscribe</button>
              </div>
            </div>
            <div aria-hidden="true" class="hidden">
              <input
                type="text"
                name="b_42813cff910e47b1bd132369a_9fd7333f07"
                tabindex="-1"
                value=""
              />
            </div>
          </form>
        </div> -->

        <form
          action="https://app.kit.com/forms/7041226/subscriptions"
          method="post"
          target="_blank"
          class="flex flex-col"
        >
          <p class="text-base-content/70 mb-4 text-xs font-bold">
            Get the daisyUI updates and news
          </p>
          <div class="join mb-2">
            <input
              type="email"
              class="join-item input"
              name="email_address"
              placeholder="email@site.com"
              required
            />
            <button class="join-item btn btn-neutral">Subscribe</button>
          </div>
          <p class="text-base-content/60 text-[0.625rem] tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="text-success inline-block size-3"
            >
              <path
                fill-rule="evenodd"
                d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                clip-rule="evenodd"
              />
            </svg>
            We don't share your email address with anyone
          </p>
        </form>
      </div>
    </div>
  </footer>
</div>
