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
  components: {
    SignNav,
    AdForm
  }
};
</script>

<style>
</style>
