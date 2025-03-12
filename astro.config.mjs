// @ts-check
import node from "@astrojs/node";
import paraglide from "@inlang/paraglide-astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),

  experimental: {
    svg: true,
  },

  i18n: {
    defaultLocale: "en",
    locales: ["de", "en", "fr"],
    routing: {
      fallbackType: "redirect",
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
  ],

  output: "static",

  site: "https://luxain.solutions",

  vite: {
    plugins: [tailwindcss()],
  },
});
