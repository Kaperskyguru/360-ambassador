<template>
  <promotions :promotion="promotion" />
</template>

<script>
import Promotions from "~/components/pages/affiliates/Promotion.details";

export default {
  components: {
    Promotions
  },

  async asyncData({ store, params }) {
    const promotion = await store.dispatch("promotion/find", params.id);
    return { promotion };
  }
};
</script>

