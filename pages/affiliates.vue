<template>
  <div class="container-fluid dashboard">
    <div class="row">
      <dashboard-nav />
      <nuxt-child />
    </div>
  </div>
</template>

<script>
import DashboardNav from "~/components/commons/navs/DashboardNav";
export default {
  layout: "dashboard",
  auth: true,
  middleware: "affiliate",
  components: {
    DashboardNav
  }
};
</script>

<style scoped>
</style>