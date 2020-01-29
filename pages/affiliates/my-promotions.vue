<template>
  <main>
    <promotions />
  </main>
</template>

<script>
import Promotions from "~/components/pages/affiliates/My.promotion";
export default {
  auth: false,
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
      //   statusCode: 500,
      //   message: erro
      // });
    }
  }
};
</script>

<style>
</style>