<script setup lang="ts">
// Font setup would be handled in nuxt.config.ts for Nuxt 3

useHead({
  title: "Origin UI - Beautiful UI components built with Tailwind CSS and Vue",
  meta: [
    {
      name: "description",
      content:
        "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
    },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover",
    },
  ],
  script: [
    {
      src: "https://plausible.cruip.com/js/script.js",
      "data-domain": "originui.com",
      defer: true,
    },
  ],
  bodyAttrs: {
    class:
      "font-sans tracking-[-0.25px] antialiased has-not-data-home:before:absolute has-not-data-home:before:inset-x-0 has-not-data-home:before:h-100 has-not-data-home:before:bg-linear-to-b has-not-data-home:before:from-zinc-100 has-data-home:bg-zinc-50 dark:has-not-data-home:before:hidden dark:has-data-home:bg-zinc-950",
  },
});
</script>

<template>
  <div
    class="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6"
  >
    <div
      class="before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] after:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mx-auto w-full max-w-6xl before:absolute before:inset-y-0 before:-left-12 before:w-px after:absolute after:inset-y-0 after:-right-12 after:w-px"
    >
      <div class="relative flex min-h-screen flex-col">
        <Header />

        <main class="grow">
          <slot />
        </main>

        <Footer />
      </div>
    </div>

    <Toaster />
  </div>
</template>
