<template>
  <main>
    <promotions />
  </main>
</template>

<script>
import Promotions from "~/components/pages/affiliates/Promotion.details";

export default {
  auth: false,
  components: {
    Promotions
  },

  fetch({ store, params }) {
    store.dispatch("promotion/find", params.id);
  }
};
</script>

<style>
</style>