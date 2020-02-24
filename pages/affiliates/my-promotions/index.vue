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
      await store.dispatch("promotion/joinedPromotions", store.$auth.user._id);
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