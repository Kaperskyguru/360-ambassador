<template>
  <b-col cols="12" class="banner">
    <b-row class="align-content-center">
      <p class="banner__heading col-12 col-md-10 color-yellow">
        THE POWER OF AFFILIATE
      </p>
      <h2 class="banner__text col-12 col-md-10 color-white ml-4">
        Affiliate marketing is the only channel in Nigeria that reaches and
        influences consumers at every stage of their purchase journey
      </h2>
      <b-col md="10" cols="12" class="ml-4 mt-4 pl-4">
        <design-button :fill="false">get started</design-button>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import DesignButton from "~/components/commons/DesignButton";
export default {
  components: {
    DesignButton
  }
};
</script>

<style>
</style>