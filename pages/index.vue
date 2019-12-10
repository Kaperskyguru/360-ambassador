<template>
  <div>
    <heade />
    <home />
    <foot />
  </div>
</template>

<script>
import Heade from "~/components/Header.vue";
import Home from "~/components/pages/Home.vue";
import Foot from "~/components/Footer.vue";

export default {
  components: {
    Heade,
    Home,
    Foot
  }
};
</script>

<style>
</style>
