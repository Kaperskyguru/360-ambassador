<template>
  <main>
    <heade />
    <home />
    <banner />
    <testimonial />
    <foot />
  </main>
</template>

<script>
import Heade from "~/components/Header.vue";
import Home from "~/components/pages/Index/Home.vue";
import Banner from "~/components/pages/Index/Banner.vue";
import Testimonial from "~/components/pages/Index/TestimonySection.vue";
import Foot from "~/components/Footer.vue";

import { mapState } from "vuex";

export default {
  auth: false,
  components: {
    Heade,
    Home,
    Foot,
    Banner,
    Testimonial
  },

  async fetch({ store, auth, error }) {
    try {
      await store.dispatch("role/get");
    } catch (error) {
      error({
        statusCode: 500,
        message: error
      });
    }
  },

  // computed: {
  //   ...mapState({
  //     tokens: state => {
  //       return state.otp.tokens;
  //     }
  //   })
  // },

  mounted() {
    // console.log(this.$auth.loggedIn, "test");
  }
};
</script>

<style>
</style>
