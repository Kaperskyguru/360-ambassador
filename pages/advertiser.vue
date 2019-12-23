<template>
  <main class="container-fluid">
    <div class="row justify-content-center">
      <sign-nav>Advertiser SIGN UP FORM</sign-nav>
      <a-form />
    </div>
  </main>
</template>

<script>
import SignNav from "~/components/commons/SignNav";
import AForm from "~/components/partials/AdvertiserForm";
export default {
  components: {
    SignNav,
    AForm
  }
};
</script>

<style>
</style>
