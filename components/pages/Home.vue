<template>
  <div>
    <section class="color-white col-12 pt-5 pb-5">
      <div class="row col-12ml-0 mb-5 mt-5">
        <h2 class="col-md-5 col-12 color-blue ml-md-4">
          Cutting Edge Solutions For Results-Driven Individuals
        </h2>
      </div>
      <div class="row justify-content-center mt-5 mb-5">
        <div class="col-md-3 col-12 mr-md-1">
          <div class="col-12 text-center">
            <img src="~/assets/images/Mask1.png" alt="" class="img-fluid" />
          </div>
          <h6 class="color-blue col-12 p-0 text-center">
            Trusted By Consumers
          </h6>
          <p class="color-blue col-12 p-0 text-center">
            Over 9.5 million products sold across 22 categories.
          </p>
        </div>
        <div class="col-md-3 col-12 mr-md-1">
          <div class="col-12 text-center">
            <img src="~/assets/images/Mask2.png" alt="" class="img-fluid" />
          </div>
          <h6 class="color-blue col-12 p-0 text-center">
            Award-Winning Authority
          </h6>
          <p class="color-blue col-12 p-0 text-center">
            Recognized by Inc.5000 as one of America’s fastest growing companies
            - 2 years running.
          </p>
        </div>
        <div class="col-md-3 col-12">
          <div class="col-12 text-center">
            <img src="~/assets/images/Mask3.png" alt="" class="img-fluid" />
          </div>

          <h6 class="color-blue col-12 p-0 text-center">
            Preferred by Top Marketers
          </h6>
          <p class="color-blue col-12 p-0 text-center">
            Over 4800 users login daily - the platform of choice for affiliates,
            sellers & consumers.
          </p>
        </div>
      </div>
    </section>

    <section class="banner col-12">
      <div class="row align-content-center">
        <p class="banner__heading col-12 col-md-10 color-yellow">
          THE POWER OF AFFILIATE
        </p>
        <h2 class="banner__text col-12 col-md-10 color-white ml-4">
          Affiliate marketing is the only channel in Nigeria that reaches and
          influences consumers at every stage of their purchase journey
        </h2>
        <div class="col-12 col-md-10 ml-4 mt-4 pl-4">
          <design-button :fill="false">get started</design-button>
        </div>
      </div>
    </section>

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
            Register for no cost and get instant access to all affiliate tools
            and training. Just click below to get started!
          </p>
          <div class="col-12 mt-5 p-0">
            <curved-button> START PROMOTING</curved-button>

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
            <curved-button>START SELLING</curved-button>

            <curved-button :fill="false">LEARN MORE</curved-button>
          </div>
        </div>
      </div>
      <testimonials />
    </section>
  </div>
</template>

<script>
import Testimonials from "~/components/partials/Testimonials";
import CurvedButton from "~/components/commons/CurvedButton";
import DesignButton from "~/components/commons/DesignButton";
export default {
  components: { Testimonials, CurvedButton, DesignButton }
};
</script>

<style>
</style>