<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <sign-nav>AFFILIATE SIGN UP FORM</sign-nav>
      <a-form />
    </div>
  </section>
</template>

<script>
import SignNav from "~/components/commons/SignNav";
import AForm from "~/components/partials/AffiliateForm";
export default {
  auth: false,
  components: {
    SignNav,
    AForm
  },

  async fetch({ store, param, route, query, error }) {
    try {
      await store.dispatch("category/get");
      await store.dispatch("user/find", query.user_id);
    } catch (err) {
      error({ statusCode: 500, message: err });
    }
  }
};
</script>

<style>
</style>
