<template>
  <main>
    <dashboard />
  </main>
</template>

<script>
import Dashboard from "~/components/pages/affiliates/Dashboard.vue";

export default {
  auth: true,
  middleware: "affiliate",
  components: {
    Dashboard
  },
  fetch({ store }) {
    // store.dispatch("category/get");
  }
};
</script>

<style>
</style>
