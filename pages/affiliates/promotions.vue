<template>
  <main>
    <promotions />
  </main>
</template>

<script>
import Promotions from "~/components/pages/affiliates/Promotions";
export default {
  auth: false,
  components: {
    Promotions
  },

  async fetch({ store, error }) {
    try {
      await store.dispatch("promotion/get");
    } catch (error) {
      error({
        statusCode: 500,
        message: error
      });
    }
  }

  // await store.dispatch("promotion/get");
  // await store.dispatch("category/get");
};
</script>

<style>
</style>