<template>
  <main>
    <promotion :promotion="promotion" />
  </main>
</template>

<script>
import Promotion from "~/components/pages/affiliates/Running.promotion.vue";

export default {
  layout: "dashboard",
  auth: true,
  middleware: "affiliate",
  components: {
    Promotion
  },

  async asyncData({ store, params }) {
    const promotion = await store.dispatch("promotion/find", params.id);
    return { promotion };
  }
};
</script>


