<template>
  <main>
    <dashboard />
  </main>
</template>

<script>
import Dashboard from "~/components/pages/affiliates/Dashboard.vue";
import { mapState } from "vuex";

export default {
  auth: true,
  middleware: "affiliate",
  components: {
    Dashboard
  },
  async fetch({ store, auth }) {
    await store.dispatch("category/get");
    await store.dispatch("user/getTopMerchants");
    await store.dispatch("promotion/latestPromotions");
    await store.dispatch("task/get");
    await store.dispatch("promotion/performance", store.state.auth.user._id);
    await store.dispatch("message/get");
    await store.dispatch("insight/earningsGraph", store.state.auth.user._id);
  }
};
</script>

<style>
</style>
