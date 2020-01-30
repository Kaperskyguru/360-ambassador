<template>
  <main>
    <promotions />
  </main>
</template>

<script>
import Promotions from "~/components/pages/affiliates/My.promotion";
export default {
  auth: true,
  middleware: "affiliate",
  components: {
    Promotions
  },

  async fetch({ store, auth, error }) {
    try {
      await store.dispatch(
        "promotion/promotionsByUserID",
        store.$auth.user._id
      );
    } catch (erro) {
      console.log(erro);
      // error({
      //   statusCode: erro.response.data.code,
      //   message: erro.response.data
      // });
    }
  }
};
</script>

<style>
</style>