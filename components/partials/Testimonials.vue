<template>
  <div class="row justify-content-center align-content-center">
    <div class="testimonial__card bg-white col-md-5 col-12 mt-5 mr-auto">
      <testimonial />
    </div>
    <div class="col-md-1 col-12 display-none"></div>
    <div class="testimonial__card bg-white col-md-5 col-12 mt-5 ml-auto">
      <testimonial />
    </div>
  </div>
</template>

<script>
import Testimonial from "~/components/commons/Testimonial";

export default {
  components: {
    Testimonial
  }
};
</script>

<style>
</style>