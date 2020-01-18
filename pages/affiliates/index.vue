<template>
  <main>
    <dashboard />
  </main>
</template>

<script>
import Dashboard from "~/components/pages/affiliates/Dashboard.vue";

export default {
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
