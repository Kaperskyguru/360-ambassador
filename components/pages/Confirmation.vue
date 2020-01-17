<template>
  <div class="container-fluid confirmation">
    <div class="col-12">
      <brand />
    </div>
    <div class="row justify-content-center align-content-center">
      <img
        src="~/assets/images/email.png"
        alt=""
        class="d-block text-center mb-5"
      />
      <h2 class="col-12 color-yellow confirmation__header text-center">
        Email Sent
      </h2>
      <p
        class="col-12 col-md-5 color-white text-center confirmation__text mb-4"
      >
        We just sent an email to test@yahoo.com.<br />
        Click the link in the email to confirm your email address.
      </p>
      <p class="col-12 color-white text-center confirmation__text mb-4">
        Didn’t get an email?
      </p>
      <div class="col-12 mb-4 d-flex justify-content-center">
        <curved-button>RESEND EMAIL</curved-button>
      </div>
      <p class="col-12 color-white text-center confirmation__text mt-5">
        Wrong email address?<br />
        <span class="color-yellow">Start Over</span>
      </p>
      <div class="col-12 d-flex justify-content-center">
        <nuxt-link to="" class="color-white text-center mr-5 confirmation__link"
          >Go to <br /><span class="color-yellow">Affiliate</span></nuxt-link
        >
        <nuxt-link to="" class="color-white text-center ml-5 confirmation__link"
          >Go to <br /><span class="color-yellow">Advertiser</span></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Brand from "~/components/partials/Brand";
import CurvedButton from "~/components/commons/CurvedButton";
export default {
  components: {
    Brand,
    CurvedButton
  }
};
</script>

<style>
</style>