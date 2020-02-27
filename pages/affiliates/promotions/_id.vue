<template>
  <main>
    <promotions :promotion="promotion" />
  </main>
</template>

<script>
import Promotions from "~/components/pages/affiliates/Promotion.details";

export default {
  auth: true,
  middleware: "affiliate",
  components: {
    Promotions
  },

  // fetch({ store, params }) {
  //   store.dispatch("promotion/find", params.id);
  // },

  async asyncData({ store, params }) {
    const promotion = await store.dispatch("promotion/find", params.id);
    return { promotion };
  }
};
</script>

