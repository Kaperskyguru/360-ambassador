<template>
  <section class="testimonial col-12">
    <div class="row justify-content-center align-content-center">
      <h2 class="col-12 color-blue mb-5 text-left">
        Get started now - It’s free!
      </h2>
      <div class="col-md-5 col-12 mt-5 mb-5 mr-auto">
        <p class="text-small color-blue col-12 p-0">AFFILIATE</p>
        <h6 class="color-blue col-12 p-0 mb-3 text-bold">
          Become a 360 Ambassador Affiliate
        </h6>
        <p class="color-blue col-12 p-0 mb-5">
          Register for no cost and get instant access to all affiliate tools and
          training. Just click below to get started!
        </p>
        <div class="col-12 mt-5 p-0">
          <curved-button to="register"> START PROMOTING</curved-button>

          <curved-button :fill="false">LEARN MORE</curved-button>
        </div>
      </div>
      <div class="col-md-1 col-12 display-none">
        <div class="row justify-content-center">
          <div class="vr"></div>
        </div>
      </div>
      <div class="col-md-5 col-12 mt-5 mb-5 ml-auto">
        <p class="text-small color-blue col-12 p-0">ADVERTISERS</p>
        <h6 class="color-blue col-12 p-0 mb-3 text-bold">
          Become an Advertiser / Product seller
        </h6>
        <p class="color-blue col-12 p-0 mb-5">
          List as many products and buy buttons as you want with no
          out-of-pocket costs. Get full details by clicking below:
        </p>
        <div class="col-12 mt-5 p-0">
          <curved-button to="register-ad">START SELLING</curved-button>

          <curved-button :fill="false">LEARN MORE</curved-button>
        </div>
      </div>
    </div>
    <testimonials />
  </section>
</template>

<script>
import CurvedButton from "~/components/commons/buttons/CurvedButton";
import Testimonials from "~/components/partials/Testimonials";
export default {
  components: {
    Testimonials,
    CurvedButton
  }
};
</script>

