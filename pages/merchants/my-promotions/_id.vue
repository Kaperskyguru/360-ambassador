<template>
  <main>
    <promotion-details :promotion="promotion" />
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

  async asyncData({ store, params }) {
    const promotion = await store.dispatch("promotion/find", params.id);
    return { promotion };
  }
};
</script>

