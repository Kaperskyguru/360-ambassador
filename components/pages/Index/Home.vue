<template>
  <b-col cols="12" class="color-white pt-5 pb-5">
    <b-row>
      <h2 class="col-md-5 col-12 color-blue ml-md-4">
        Cutting Edge Solutions For Results-Driven Individuals
      </h2>
    </b-row>
    <b-row class="justify-content-center mt-5 mb-5">
      <b-col md="3" cols="12" class="mt-5 mr-md-1">
        <div class="text-center">
          <img src="~/assets/images/Mask1.png" alt="" class="img-fluid" />
        </div>
        <div class="mt-4">
          <h6 class="color-blue col-12 p-0 text-center">
            Trusted By Consumers
          </h6>
          <p class="color-blue col-12 p-0 text-center">
            Over 9.5 million products sold across 22 categories.
          </p>
        </div>
      </b-col>
      <b-col md="3" cols="12" class="mt-5  mr-md-1">
        <b-col cols="12" class="text-center">
          <img src="~/assets/images/Mask2.png" alt="" class="img-fluid" />
        </b-col>
        <div class="mt-4">
          <h6 class="color-blue col-12 p-0 text-center">
            Award-Winning Authority
          </h6>
          <p class="color-blue col-12 p-0 text-center">
            Recognized by Inc.5000 as one of America’s fastest growing companies
            - 2 years running.
          </p>
        </div>
      </b-col>
      <b-col md="3" cols="12" class=" mt-5 ">
        <b-col cols="12" class="text-center">
          <img src="~/assets/images/Mask3.png" alt="" class="img-fluid" />
        </b-col>
        <div class="mt-4">
          <h6 class="color-blue col-12 p-0 text-center">
            Preferred by Top Marketers
          </h6>
          <p class="color-blue col-12 p-0 text-center">
            Over 4800 users login daily - the platform of choice for affiliates,
            sellers & consumers.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-col>
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