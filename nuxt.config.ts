import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "nuxt-umami",
  ],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-04-03",

  shadcn: {
    prefix: "",
    componentDir: "./app/registry/components/ui",
  },

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

  components: {
    dirs: [
      { path: "~/components" },
      { path: "~/registry/components", global: true },
    ],
  },

  icon: {
    cssLayer: "icon",
  },
});
