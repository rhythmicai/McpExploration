import Aura from "@primeuix/themes/aura";
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: false,
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@primevue/nuxt-module"],
  vite: {
    plugins: [tailwindcss()],
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});
