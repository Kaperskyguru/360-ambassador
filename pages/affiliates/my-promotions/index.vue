<template>
  <main>
    <promotions />
  </main>
</template>

<script>
import Promotions from "~/components/pages/affiliates/My.promotion";
export default {
  layout: "dashboard",
  auth: true,
  middleware: "affiliate",
  components: {
    Promotions
  },

  async fetch({ store, auth, error, from }) {
    try {
      let isInitialPageLoad = !from;

      if (isInitialPageLoad) {
        await store.dispatch(
          "promotion/joinedPromotions",
          store.$auth.user._id
        );
      }
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

