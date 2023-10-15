// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/apollo", "@nuxt/image"],
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
});
