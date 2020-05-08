<template>
  <promotion :promotion="promotion" />
</template>

<script>
import Promotion from "~/components/pages/affiliates/RunningPromotion.vue";

export default {
  components: {
    Promotion
  },

  async asyncData({ store, params, error }) {
    try {
      const promotion = await store.dispatch("promotion/find", params.id);
      return { promotion };
    } catch (err) {
      error({ statusCode: 404, message: "Promotion not found" });
    }
  }
};
</script>


