// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["leaflet/dist/leaflet.css"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
        },
      ],
      script: [{ src: "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" }],
    },
  },
});
