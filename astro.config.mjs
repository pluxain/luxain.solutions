// @ts-check
import { defineConfig, envField } from "astro/config";
import paraglide from "@inlang/paraglide-astro";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),

  env: {
    schema: {
      LOG_LEVEL: envField.enum({
        context: "client",
        access: "public",
        default: "trace",
        optional: true,
        values: ["debug", "error", "fatal", "info", "trace", "warn"],
      }),
    },
  },

  experimental: {
    svg: true,
  },

  i18n: {
    defaultLocale: "en",
    locales: ["de", "en", "fr", "it"],
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
    tailwind(),
  ],

  output: "static",

  site: "https://luxain.solutions",
});
