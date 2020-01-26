require("dotenv").config();
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
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
    color: "#fff"
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
    "~/plugins/vee-validate"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  router: {
    middleware: ["auth"]
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

  // env: {
  //   APIUrl: process.env.API_URL || "http://localhost:3000"
  // },
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

    "@nuxtjs/proxy"
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
};
