<template>
  <main>
    <promotion-details :finish="true" />
  </main>
</template>

<script>
import PromotionDetails from "~/components/pages/merchant/PromotionDetails";
export default {
  auth: true,
  middleware: "merchant",
  components: {
    PromotionDetails
  },

  async fetch({ store, params, auth }) {
    store.dispatch("promotion/find", params.id);
  }
};
</script>

