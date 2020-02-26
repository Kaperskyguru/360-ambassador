<template>
  <main>
    <promotion-details />
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
  fetch({ store, params }) {
    store.dispatch("promotion/find", params.id);
  }
};
</script>

