// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://easy-post-ia-1.github.io",
  base: "/easy-post-ia-landing",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [icon()],
});
