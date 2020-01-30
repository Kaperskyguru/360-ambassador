<template>
  <main>
    <promotion-details />
  </main>
</template>

<script>
import PromotionDetails from "~/components/pages/merchant/PromotionDetails";
export default {
  auth: true,
  middleware: "merchant",
  components: {
    PromotionDetails
  }
};
</script>

<style>
</style>