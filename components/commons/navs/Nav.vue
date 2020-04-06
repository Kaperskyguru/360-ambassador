<template>
  <nav class="navbar navbar-expand-lg navbar-light pt-3">
    <brand />
    <button
      class="navbar-toggler bg-white"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="true"
      aria-label="Toggle navigation"
      @click="mShow = !mShow"
    >
      <span class="navbar-toggler-icon color-white"></span>
    </button>

    <div
      class="collapse navbar-collapse mt-3"
      :class="{ show: mShow }"
      style="z-index:1000"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mr-auto">
        <li
          :class="[
            currentPage === 'register-ad' ? activeClass : '',
            'nav-item'
          ]"
        >
          <nuxt-link class="nav-link color-white" to="register-ad"
            >advertisers <span class="sr-only">(current)</span>
          </nuxt-link>
        </li>
        <li
          :class="[currentPage === 'register' ? activeClass : '', 'nav-item']"
        >
          <nuxt-link class="nav-link color-white" to="register"
            >affiliates</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link color-white" to="#">about us</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link color-white" to="#">features</nuxt-link>
        </li>
      </ul>
      <div class="navbar-nav my-2 my-lg-1 dropdown">
        <li class="nav-item dropdown">
          <div class="nav-link" :class="{ show: show }">
            <nuxt-link
              class="home-dropdown__toggle btn__bordered-square-curved--yellow"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click.native="show = !show"
            >
              get started
            </nuxt-link>
            <div
              class="dropdown-menu home-dropdown__menu mt-5 mt-lg-3 "
              :class="{ show: show }"
              aria-labelledby="navbarDropdown"
            >
              <h6
                class="dropdown-item home-dropdown__item color-white bg-blue col-12 "
              >
                <span class="ml-3">How do you come in?</span>
              </h6>
              <div
                class="dropdown-item home-dropdown__item  bg-transparent col-12"
              >
                <div class="col-12 mb-5  dropdown__item">
                  <p class="text-small color-blue col-12 p-0">ADVERTISERS</p>
                  <h6 class="color-blue dropdown-title col-12 p-0 ">
                    Expand your horizon
                  </h6>
                  <p class="color-blue dropdown-text col-12 p-0 mt-1 mb-2">
                    Lorem ipsum dolor sit amet, sed diam voluptua. At vero ea
                    rebum. Stet clita kasd gubergren, no sea…
                  </p>
                  <div class="col-12 mt-4 p-0">
                    <nuxt-link
                      class="btn__curved--yellow dropdown-btn color-blue"
                      to="register-merchant"
                      role="button"
                    >
                      GET STARTED
                    </nuxt-link>
                  </div>
                </div>
                <div class="dropdown-divider col-12"></div>
                <div class="col-12 mt-4 dropdown__item">
                  <p class="text-small color-blue col-12 p-0">AFFILIATES</p>
                  <h6 class="color-blue dropdown-title col-12 p-0">
                    Work with the trusted brands
                  </h6>
                  <p class="color-blue dropdown-text col-12 p-0">
                    Lorem ipsum dolor sit amet, sed diam voluptua. At vero ea
                    rebum. Stet clita kasd gubergren, no sea…
                  </p>
                  <div class="col-12 mt-4 mb-4 p-0">
                    <nuxt-link
                      class="btn__bordered-curved--yellow dropdown-btn color-blue"
                      to="register"
                      role="button"
                    >
                      SIGN UP
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-link mt-3 mt-lg-0">
            <Design-button :link="link">
              <template v-if="$auth.loggedIn"> Goto Dashboard</template>
              <template v-else>sign in</template>
            </Design-button>
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
import Brand from "~/components/partials/Brand";
import DesignButton from "~/components/commons/buttons/DesignButton";
import CurvedButton from "~/components/commons/buttons/CurvedButton";
export default {
  data() {
    return {
      link: "",
      activeClass: "active",
      show: false,
      mShow: false
    };
  },
  components: {
    Brand,
    DesignButton,
    CurvedButton
  },

  mounted() {
    if (this.$auth.loggedIn) {
      this.redirectByRole(this.$auth.user.role.name);
    } else {
      this.link = "/login";
    }
  },

  methods: {
    redirectByRole(role) {
      switch (role) {
        case "admin":
          this.link = "/admin";
          break;

        case "merchant":
          this.link = "/merchants";
          break;

        case "promoter":
          this.link = "/affiliates";
          break;

        default:
          this.link = "/login";
          break;
      }
    }
  },
  computed: {
    currentPage() {
      return this.$route.name;
    }
  }
};
</script>

<style>
</style>