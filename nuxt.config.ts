// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  /**
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://tailwindcss.nuxtjs.org/
    "@nuxtjs/tailwindcss",

    // Doc: https://image.nuxt.com/
    "@nuxt/image",

    // Doc: https://content.nuxtjs.org/
    "@nuxt/content",

    // Doc: https://vueuse.org/guide/#installation
    "@vueuse/nuxt",

    // Doc: https://color-mode.nuxtjs.org/
    "@nuxtjs/color-mode",

    // Doc: https://github.com/nuxt-modules/icon
    "nuxt-icon",
  ],

  /**
   * App configuration including Google Fonts
   */
  app: {
    baseURL: '/pictures-in-bonn/',
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,400&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },

  /**
   * Nitro configuration for static hosting
   */
  nitro: {
    prerender: {
      // Ensure trailing slash consistency
      autoSubfolderIndex: false,
    },
  },

  /**
   * @nuxt/image configuration for GitHub Pages
   */
  image: {
    // Ensure images work with custom baseURL
    baseURL: '/pictures-in-bonn',
  },

  imports: {
    autoImport: true
  },

  colorMode: {
    classSuffix: "",
  },

  tailwindcss: {
    cssPath: "./assets/css/tailwind.css",
  },

  compatibilityDate: "2024-11-18",
})