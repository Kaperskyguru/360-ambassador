<template>
  <nav
    class="navbar navbar-expand-lg navbar-light w-100 dashboard__nav affiliate"
  >
    <div class="container-fluid">
      <brand />
      <button
        class="navbar-toggler bg-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="show = !show"
      >
        <span class="navbar-toggler-icon color-white"></span>
      </button>

      <div
        class="collapse navbar-collapse mt-4"
        :class="{ show: show }"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li
            :class="[
              currentPage === 'affiliates' ? activeClass : '',
              'nav-item'
            ]"
          >
            <nuxt-link class="nav-link color-white" to="/affiliates"
              >dashboard<span class="sr-only">(current)</span></nuxt-link
            >
          </li>
          <li
            :class="[
              myPromotionLinks(currentPage) ? activeClass : '',
              'nav-item'
            ]"
          >
            <nuxt-link
              class="nav-link color-white"
              to="/affiliates/my-promotions"
              >my promotion
            </nuxt-link>
          </li>
          <li
            :class="[
              PromotionLinks(currentPage) ? activeClass : '',
              'nav-item'
            ]"
          >
            <nuxt-link class="nav-link color-white" to="/affiliates/promotions"
              >promotions</nuxt-link
            >
          </li>
          <li :class="[currentPage === 'links' ? activeClass : '', 'nav-item']">
            <nuxt-link class="nav-link color-white" to="#">links</nuxt-link>
          </li>
        </ul>
        <profile />
      </div>
    </div>
  </nav>
</template>

<script>
import Brand from "~/components/partials/Brand";
import Profile from "~/components/partials/Profile";
export default {
  components: {
    Brand,
    Profile
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
    }
  },
  data() {
    return {
      activeClass: "active",
      show: false
    };
  },
  computed: {
    currentPage() {
      return this.$route.name;
    }
  },

  methods: {
    myPromotionLinks(link) {
      if (
        link === "affiliates-my-promotions" ||
        link === "affiliates-my-promotions-id"
      )
        return true;
      return false;
    },

    PromotionLinks(link) {
      if (
        link === "affiliates-promotions" ||
        link === "affiliates-promotions-id"
      )
        return true;
      return false;
    }
  }
};
</script>
<style scoped>
.affiliate {
  padding-top: 0.2rem !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  padding-bottom: 0.2rem !important;
}
</style>
