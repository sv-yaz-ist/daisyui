<script>
  import { t } from "$lib/i18n.svelte.js"

  let siteData = {
    title: "Tailwind CSS Components ( version 5 update is here )",
    desc: "Free Tailwind Components",
    card: "https://img.daisyui.com/images/default.webp",
  }
  let { formatTitle = true, title = "", desc = siteData.desc, img = siteData.card } = $props()

  let formattedTitle = $derived(
    formatTitle
      ? title
        ? `${$t(title)} — ${$t(siteData.title)}`
        : `${$t(siteData.title)}`
      : title,
  )
</script>

<svelte:head>
  <title>{formattedTitle}</title>
  <meta name="description" content={desc} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={formattedTitle} />
  <meta name="twitter:description" content={desc} />
  <meta name="twitter:image" content={img} />
  <meta name="twitter:image:alt" content={formattedTitle} />
  <meta property="og:title" content={formattedTitle} />
  <meta property="og:description" content={desc} />
  <meta property="og:image" content={img} />
</svelte:head>
