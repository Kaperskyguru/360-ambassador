<template>
  <nav class="navbar navbar-expand-lg navbar-light w-100 dashboard__nav">
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
        class="collapse navbar-collapse mt-5 mt-lg-0"
        id="navbarSupportedContent"
        :class="{ show: show }"
      >
        <ul class="navbar-nav mr-auto">
          <li
            :class="[
              currentPage === 'merchants' ? activeClass : '',
              'nav-item'
            ]"
          >
            <nuxt-link class="nav-link color-white" to="/merchants"
              >dashboard <span class="sr-only">(current)</span></nuxt-link
            >
          </li>
          <li
            :class="[
              currentPage === 'merchants-my-promotions' ? activeClass : '',
              'nav-item'
            ]"
          >
            <nuxt-link
              class="nav-link color-white"
              to="/merchants/my-promotions"
              >my promotion</nuxt-link
            >
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
  }
};
</script>

