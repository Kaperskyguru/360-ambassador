<template>
  <main>
    <dashboard />
  </main>
</template>

<script>
import Dashboard from "~/components/pages/merchant/dashboard";
export default {
  auth: true,
  middleware: "merchant",
  components: {
    Dashboard
  },

  async fetch({ store, auth }) {
    await store.dispatch("promotion/performance", store.state.auth.user._id);
    await store.dispatch("message/get", store.state.auth.user._id);
    await store.dispatch("insight/earningsGraph", store.state.auth.user._id);
  }
};
</script>

