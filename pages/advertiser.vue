<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <sign-nav>Advertiser SIGN UP FORM</sign-nav>
      <ad-form :user="user" />
    </div>
  </section>
</template>

<script>
import SignNav from "~/components/commons/SignNav";
import AdForm from "~/components/partials/AdvertiserForm";
export default {
  auth: true,
  middleware: "merchant",
  components: {
    SignNav,
    AdForm
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
      // } else console.log(err);
      console.log(err);
    }
  }
};
</script>


