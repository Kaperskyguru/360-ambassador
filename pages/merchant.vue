<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <sign-nav>Advertiser SIGN UP FORM</sign-nav>
      <merchant-form :user="user" />
    </div>
  </section>
</template>

<script>
import SignNav from "~/components/commons/SignNav";
import MerchantForm from "~/components/partials/MerchantForm";
export default {
  auth: true,
  middleware: "merchant",
  components: {
    SignNav,
    MerchantForm
  },

  async asyncData({ store, param, route, query, error }) {
    try {
      await store.dispatch("category/get");
      const user = await store.dispatch("user/find", query.user_id);
      return { user };
    } catch (err) {
      // const { code, response } = err;
      // if (code && response) {
      //   error({ statusCode: err.code, message: err.response });
      // } else;
    }
  }
};
</script>


