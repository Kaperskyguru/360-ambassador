<template>
  <div class="container-fluid form">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6 col-12 form__page-left">
        <brand />
        <div
          class="row align-content-center justify-content-center pl-0 pr-0 mt-5 pt-2"
          style="margin:0px auto"
        >
          <texter>
            <template v-slot:title>
              ADVERTISERS
            </template>

            <template v-slot:content>
              There is more to being an advertiser. Discover more ways to get
              the best from the affiliate program
            </template>
          </texter>
          <hr class="col-12 bg-white mt-5 mb-5" />

          <texter>
            <template v-slot:title>
              AFFILIATES
            </template>

            <template v-slot:content>
              There is more to being an advertiser. Discover more ways to get
              the best from the affiliate program
            </template>
          </texter>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-12 form__page-right">
        <div
          class="row align-content-center justify-content-center pt-5"
          style="margin:7rem auto"
        >
          <h2 class="col-12 color-blue form__header">Sign in</h2>
          <login-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "~/components/partials/LoginForm";
import Texter from "~/components/commons/Text";
import Brand from "~/components/partials/Brand";
export default {
  components: {
    LoginForm,
    Texter,
    Brand
  }
};
</script>

<style>
</style>