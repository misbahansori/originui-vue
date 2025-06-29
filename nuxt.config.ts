import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://originui-vue.com",
    name: "Originui Vue",
    description:
      "An open-source collection of copy-and-paste components for quickly building application UIs.",
    defaultLocale: "en",
  },

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      SITE_URL: process.env.NUXT_SITE_URL,
    },
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "nuxt-umami",
    "@nuxtjs/seo",
    "vue-sonner/nuxt",
  ],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-04-03",

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
  },

  routeRules: {
    "/": { prerender: true },
    "/easings": { prerender: true },
    "/layouts": { prerender: true },
  },
});
