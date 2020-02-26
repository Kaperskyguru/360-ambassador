require("dotenv").config();
const desc =
  "Quickly start &amp; grow your online business with 360 Ambassador | 360 Ambasador";
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "360 Ambassador",
    meta: [
      { charset: "utf-8" },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "keywords",
        name: "keywords",
        content: ""
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: desc || ""
      },
      { hid: "twitter:site", name: "twitter:site", content: "@360-ambassador" },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@360-ambassador"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: desc || ""
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: desc || ""
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/logo.png"
      },
      {
        hid: "description",
        name: "description",
        content: desc || ""
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/logo.png"
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "360 Ambassador"
      },
      { hid: "og:title", name: "og:title", content: "360 Ambassador" },
      {
        hid: "og:description",
        name: "og:description",
        content: desc || ""
      }
    ],

    link: [
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/logo.png"
      }
    ],

    script: [
      {
        // src: "https://code.jquery.com/jquery-3.4.1.slim.min.js"
        // async: true
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
        async: true
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
        async: true
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js",
        async: true
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js",
        async: true
      },
      {
        src: "~/assets/js/main.js",
        async: true
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fecc0a"
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/css/style.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/axios",
    "~/plugins/repositories",
    "~/plugins/vee-validate",
    { src: "~/plugins/vue-notification", ssr: false },
    "~/plugins/vue-moment",
    { src: "~/plugins/vue-full-loading", ssr: false },
    "~/plugins/vue-swal",
    { src: "~/plugins/apexcharts", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  router: {
    middleware: ["auth"],
    linkActiveClass: "active",
    linkExactActiveClass: "active"
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/login",
            method: "post",
            propertyName: "data.token"
          },
          logout: false,
          user: {
            url: "/verify",
            method: "get",
            propertyName: "data"
          }
        },
        tokenRequired: true,
        tokenType: "bearer"
      }
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",

    "@nuxtjs/auth",
    "@nuxtjs/svg"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL:
      process.env.API_URL || "https://damp-hollows-99847.herokuapp.com/api/v1"
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ["vue-apexchart"],
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }

  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: 'http://blog.zoz0312.com',
  //   lastmod: '2019-11-20',
  //   exclude: [
  //     '/login',
  //     '/category/**',
  //     '/posts/create'
  //   ],
};
