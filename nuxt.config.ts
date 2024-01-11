// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: "page", mode: "out-in" },
  // },

  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/apollo",
    "@nuxt/image",
    "nuxt-swiper",
    "@nuxt/ui",
    "nuxt-gtag",
    "@formkit/nuxt",
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
  gtag: {
    id: process.env.GTAG_ID as string,
  },
  googleFonts: {
    download: true,
    families: {
      "Libre Baskerville": true,
      Roboto: true,
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQL_ENDPOINT as string,
      },
    },
  },
  image: {
    domains: ["revista-phantasma-media.s3.amazonaws.com"],
  },
  // build: {
  //   // @ts-ignore
  //   extend(config: any) {
  //     config.module.rules.push({
  //       test: /\.(graphql|gql)$/,
  //       exclude: /node_modules/,
  //       loader: "graphql-tag/loader",
  //     });
  //   },
  // },

  build: {
    transpile: ["tslib"],
  },

  routeRules: { "/*": { cors: true } },
  app: {
    head: {
      title: "Revista Phantasma | Arte y Literatura",
      meta: [
        {
          content:
            "Revista de arte y literatura, espacio creativo y crítico. Colabora con Phantasma",
          name: "Revista Phantasma",
        },
        {
          name: "description",
          content:
            "Revista de arte y literatura, espacio creativo y crítico. Colabora con Phantasma",
        },
        {
          name: "keywords",
          content:
            "Revista Phantasma, revista, arte, literatura, arte y literataura, arte, revista de arte y literatura",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://phantasma.cl/favicon.png",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Revista de arte y literatura, espacio creativo y crítico. Colabora con Phantasma",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Revista Phantasma | Arte y Literatura",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    },
    // pageTransition: { name: "page", mode: "out-in" },
  },

  ui: {
    // @ts-ignore
    primary: "#FFFFFF",
    notifications: {
      // Show toasts at the top right of the screen
      position: "top-0 bottom-auto",
    },
  },
});
