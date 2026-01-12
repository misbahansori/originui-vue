import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  site: {
    url: "https://www.originui-vue.com",
    name: "Originui Vue",
    description:
      "An open-source collection of copy-and-paste components for quickly building application UIs.",
    defaultLocale: "en",
  },

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      SITE_URL: import.meta.env.NUXT_SITE_URL ?? "https://www.originui-vue.com",
    },
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "nuxt-umami",
    "@nuxtjs/sitemap",
    "vue-sonner/nuxt",
    "@nuxthub/core",
  ],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2025-12-21",

  colorMode: {
    classSuffix: "",
    classPrefix: "",
    fallback: "light",
    storageKey: "nuxt-color-mode",
  },

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      { name: "Inter", provider: "google", global: true },
      { name: "Outfit", provider: "google", global: true },
    ],
  },

  imports: {
    dirs: ["~/lib"],
  },

  shadcn: {
    prefix: "",
    componentDir: "./app/registry/default/ui",
  },

  icon: {
    cssLayer: "icon",
    mode: "svg",
    clientBundle: {
      scan: true,
    },
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },

  umami: {
    ignoreLocalhost: true,
    proxy: "cloak",
  },

  routeRules: {
    "/": { prerender: true },
    "/easings": { prerender: true },
    "/layouts": { prerender: true },
  },

  nitro: {
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
});
