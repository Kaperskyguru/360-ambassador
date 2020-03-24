<template>
  <promotion-details :finish="true" />
</template>

<script>
import PromotionDetails from "~/components/pages/merchant/PromotionDetails";
export default {
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

