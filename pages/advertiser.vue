<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <sign-nav>Advertiser SIGN UP FORM</sign-nav>
      <ad-form />
    </div>
  </section>
</template>

<script>
import SignNav from "~/components/commons/SignNav";
import AdForm from "~/components/partials/AdvertiserForm";
export default {
  auth: false,
  components: {
    SignNav,
    AdForm
  },

  async fetch({ store, param, route, query, error }) {
    try {
      await store.dispatch("category/get");
      await store.dispatch("user/find", query.user_id);
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


