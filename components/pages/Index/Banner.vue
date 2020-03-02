<template>
  <section class="banner col-12">
    <div class="row align-content-center">
      <p class="banner__heading col-12 col-md-10 color-yellow">
        THE POWER OF AFFILIATE
      </p>
      <h2 class="banner__text col-12 col-md-6 color-white ml-4 mt-4">
        Affiliate marketing is the only channel in Nigeria that reaches and
        influences consumers at every stage of their purchase journey
      </h2>
      <div class="col-12 col-md-10 ml-4 mt-5 pl-4">
        <design-button :fill="false">EXPLORE AFFILIATE</design-button>
      </div>
    </div>
  </section>
</template>

<script>
import DesignButton from "~/components/commons/buttons/DesignButton";
export default {
  components: {
    DesignButton
  }
};
</script>

