<template>
  <div class="container-fluid dashboard">
    <div class="row">
      <my-nav-bar />
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import MyNavBar from "~/components/commons/navs/MerchantNav";
export default {
  layout: "dashboard",
  auth: true,
  middleware: "merchant",
  components: {
    MyNavBar
  }
};
</script>

<style scoped>
</style>