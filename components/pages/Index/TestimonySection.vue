<template>
  <section class="testimonial col-12">
    <b-row class="justify-content-center align-content-center">
      <h2 class="col-12 color-blue mb-5 text-left">
        Get started now - It’s free!
      </h2>
      <b-col md="5" cols="12" class="mt-5 mb-5 mr-auto">
        <p class="text-small color-blue col-12 p-0">AFFILIATE</p>
        <h6 class="color-blue col-12 p-0 mb-3 text-bold">
          Become a 360 Ambassador Affiliate
        </h6>
        <p class="color-blue col-12 p-0 mb-5">
          Register for no cost and get instant access to all affiliate tools and
          training. Just click below to get started!
        </p>
        <div class="col-12 mt-5 p-0">
          <curved-button> START PROMOTING</curved-button>

          <curved-button :fill="false">LEARN MORE</curved-button>
        </div>
      </b-col>
      <b-col md="1" cols="12" class=" display-none">
        <b-row class="justify-content-center">
          <div class="vr"></div>
        </b-row>
      </b-col>
      <b-col md="5" cols="12" class=" mt-5 mb-5 ml-auto">
        <p class="text-small color-blue col-12 p-0">ADVERTISERS</p>
        <h6 class="color-blue col-12 p-0 mb-3 text-bold">
          Become an Advertiser / Product seller
        </h6>
        <p class="color-blue col-12 p-0 mb-5">
          List as many products and buy buttons as you want with no
          out-of-pocket costs. Get full details by clicking below:
        </p>
        <b-col cols="12" class="mt-5 p-0">
          <curved-button>START SELLING</curved-button>

          <curved-button :fill="false">LEARN MORE</curved-button>
        </b-col>
      </b-col>
    </b-row>
    <testimonials />
  </section>
</template>

<script>
import CurvedButton from "~/components/commons/CurvedButton";
import Testimonials from "~/components/partials/Testimonials";
export default {
  components: {
    Testimonials,
    CurvedButton
  }
};
</script>

<style>
</style>