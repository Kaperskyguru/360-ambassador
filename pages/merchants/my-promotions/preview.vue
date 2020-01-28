<template>
  <main>
    <promotion-details :finish="true" />
  </main>
</template>

<script>
import PromotionDetails from "~/components/pages/merchant/PromotionDetails";
export default {
  auth: false,
  components: {
    PromotionDetails
  }
};
</script>

<style>
</style>