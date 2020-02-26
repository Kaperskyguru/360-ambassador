<template>
  <main>
    <my-promotion />
  </main>
</template>

<script>
import MyPromotion from "~/components/pages/merchant/MyPromotion";
export default {
  auth: true,
  middleware: "merchant",
  components: {
    MyPromotion
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

