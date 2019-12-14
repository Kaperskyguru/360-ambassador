<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <sign-nav />
      <a-form />
    </div>
  </section>
</template>

<script>
import SignNav from "~/components/commons/SignNav";
import AForm from "~/components/pages/AdvertiserForm";
export default {
  components: {
    SignNav,
    AForm
  }
};
</script>

<style>
</style>
