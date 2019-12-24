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

export default {
  components: {
    Heade,
    Home,
    Foot,
    Banner,
    Testimonial
  }
};
</script>

<style>
</style>
