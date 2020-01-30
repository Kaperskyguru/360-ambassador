<template>
  <main>
    <promotion />
  </main>
</template>

<script>
import Promotion from "~/components/pages/affiliates/Running.promotion.vue";

export default {
  auth: true,
  middleware: "affiliate",
  components: {
    Promotion
  }
};
</script>

<style>
</style>
