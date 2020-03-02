<template>
  <main>
    <heade :title="signinText" />
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
  async asyncData({ store }) {
    if (store.$auth.loggedIn) {
      return { signinText: "Goto Dashboard" };
    }
  },
  head: {
    title:
      "360 Ambasador | Quickly start &amp; grow your online business with 360 Ambassador",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Quickly start &amp; grow your online business with 360 Ambassador"
      }
    ]
  }
};
</script>


