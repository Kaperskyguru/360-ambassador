<template>
  <main>
    <dashboard />
  </main>
</template>

<script>
import Dashboard from "~/components/pages/affiliates/Dashboard.vue";
import { mapState } from "vuex";

export default {
  layout: "dashboard",
  auth: true,
  middleware: "affiliate",
  components: {
    Dashboard
  },
  async fetch({ store, auth }) {
    await store.dispatch("user/getTopMerchants");
  }
};
</script>


