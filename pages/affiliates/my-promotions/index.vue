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
    const payload = new Object();
    payload.promoter_id = store.$auth.user._id;

    try {
      await store.dispatch("promotion/joinedPromotions", payload);
    } catch (err) {
      // const { code, response } = err;
      // if (code && response) {
      //   error({ statusCode: err.code, message: err.response });
      // } else
      console.log(err);
    }
  }
};
</script>

<style>
</style>