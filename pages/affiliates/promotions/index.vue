<template>
  <main>
    <promotions />
  </main>
</template>

<script>
import Promotions from "~/components/pages/affiliates/Promotions";
export default {
  auth: true,
  middleware: "affiliate",
  components: {
    Promotions
  },

  async fetch({ store, error }) {
    try {
      await store.dispatch("promotion/get");
    } catch (err) {
      console.log(err);

      // error({
      //   statusCode: err.response.data.code,
      //   message: err.response.data
      // });
    }
  }

  // await store.dispatch("promotion/get");
  // await store.dispatch("category/get");
};
</script>

<style>
</style>