<template>
  <promotion-details :promotion="promotion" :finish="true" />
</template>

<script>
import PromotionDetails from "~/components/pages/merchant/PromotionDetails";
export default {
  components: {
    PromotionDetails
  },

  async asyncData({ store, params }) {
    const promotion = await store.dispatch("promotion/find", params.id);
    return { promotion };
  }
};
</script>

