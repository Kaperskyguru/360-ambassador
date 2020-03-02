<template>
  <main>
    <promotion-details :finish="true" />
  </main>
</template>

<script>
import PromotionDetails from "~/components/pages/merchant/PromotionDetails";
export default {
  layout: "dashboard",
  auth: true,
  middleware: "merchant",
  components: {
    PromotionDetails
  },

  async fetch({ store, params, auth, from }) {
    let isInitialPageLoad = !from;

    if (isInitialPageLoad) {
      store.dispatch("promotion/find", params.id);
    }
  }
};
</script>

