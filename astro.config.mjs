// @ts-check
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import paraglide from "@inlang/paraglide-astro";
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
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,

      // Example: Allow writing nested CSS declarations
      // alongside Tailwind's syntax
      nesting: true,
    }),
  ],

  output: "static",

  site: "https://luxain.solutions",
});
