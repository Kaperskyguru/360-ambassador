<template>
  <promotion :promotion="promotion" />
</template>

<script>
import Promotion from "~/components/pages/affiliates/Running.promotion.vue";

export default {
  components: {
    Promotion
  },

  async asyncData({ store, params }) {
    const promotion = await store.dispatch("promotion/find", params.id);
    console.log(promotion, params.id);
    return { promotion };
  }
};
</script>


