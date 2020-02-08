<template>
  <main>
    <dashboard />
  </main>
</template>

<script>
import Dashboard from "~/components/pages/affiliates/Dashboard.vue";

export default {
  auth: true,
  middleware: "affiliate",
  components: {
    Dashboard
  },
  async fetch({ store }) {
    await store.dispatch("category/get");
    await store.dispatch("user/getTopMerchants");
    await store.dispatch("promotion/latestPromotions");
    await store.dispatch("task/get");
    await store.dispatch("promotion/performance");
    await store.dispatch("message/get");
  }
};
</script>

<style>
</style>
