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
// import axios from "~/plugins/axios";

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
  // async asyncData({
  //   isDev,
  //   route,
  //   store,
  //   env,
  //   params,
  //   query,
  //   req,
  //   res,
  //   redirect,
  //   error,
  //   $axios
  // }) {

  //   const data = await $axios.$get("/all_approved");
  //   console.log(data);
  // }

  async fetch({ store }) {
    await store.dispatch("otp/get");
  },

  computed: {
    ...mapState({
      tokens: state => {
        return state.otp.tokens;
      }
    })
  },

  mounted() {
    console.log(this.tokens, "Test");
  }
};
</script>

<style>
</style>
