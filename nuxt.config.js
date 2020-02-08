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
        content: "vuejs, nuxt, javascript, tutorials, development, software"
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
        src: "https://code.jquery.com/jquery-3.4.1.slim.min.js"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js"
      },
      {
        src: "/main.js"
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
    "~/plugins/loadash",
    {
      src: "~/plugins/vue-morris",
      mode: "client"
    },
    "~/plugins/axios",
    "~/plugins/auth",
    "~/plugins/repositories",
    "~/plugins/vee-validate",
    { src: "~/plugins/vue-notification", ssr: false },
    "~/plugins/vue-moment",
    { src: "~/plugins/vue-full-loading", ssr: false },
    "~/plugins/vue-swal"
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

    "@nuxtjs/auth"

    // "nuxt-sweetalert2"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL:
      process.env.API_URL || "https://damp-hollows-99847.herokuapp.com/api/v1"
  },

  //https://dev.to/mrnaif2018/how-to-make-nuxt-auth-working-with-jwt-a-definitive-guide-9he
  //chromium-browser --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
  //https://blog.lichter.io/posts/nuxt-api-call-organization-and-decoupling/

  // proxy: {
  //   "/api/":
  //     process.env.API_URL || "https://damp-hollows-99847.herokuapp.com/api/v1"
  // },
  /*
   ** Build configuration
   */
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // config.resolve.alias['jQuery'] = '~assets/js/jquery.min.js'
    }
  }

  // messages: {
  //   oading: "Loading...",
  //   error_404: "This page could not be found blah vlah!!",
  //   server_error: "Server error",
  //   nuxtjs: "Nuxt.js",
  //   back_to_home: "Back to the home page",
  //   server_error_details:
  //     "An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.",
  //   client_error: "Error",
  //   client_error_details:
  //     "An error occurred while rendering the page. Check developer tools console for details."
  // }
};
