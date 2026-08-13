import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.anthopoleio-ioannis.gr", // αντικατέστησε με το πραγματικό domain
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
