<template>
  <!-- THIS PAGE WILL BE USED FOR AFFILIATE AND ADVERTIZERS REGISTRATION -->

  <div class="container-fluid form">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6 col-12 form__page-left">
        <brand />
        <div class="row align-content-center justify-content-center pl-0 pr-0">
          <texter>
            <template v-slot:title>
              ADVERTISERS
            </template>

            <template v-slot:content>
              There is more to being an advertiser. Discover more ways to get
              the best from the affiliate program
            </template>
          </texter>

          <hr class="col-10 col-md-11 bg-white mt-5 mb-5" />

          <texter>
            <template v-slot:title>
              AFFILIATES
            </template>

            <template v-slot:content>
              There is more to being an affiliate. Discover more ways to get the
              best from the affiliate program
            </template>
          </texter>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-12 form__page-right">
        <register-form>Become an Advertiser</register-form>
      </div>
    </div>
  </div>
</template>

<script>
import Texter from "~/components/commons/Text";
import Brand from "~/components/partials/Brand";
import RegisterForm from "~/components/partials/RegisterForm";
export default {
  components: {
    Texter,
    RegisterForm,
    Brand
  }
};
</script>

<style>
</style>

