<template>
  <main>
    <dashboard />
  </main>
</template>

<script>
import Dashboard from "~/components/pages/merchant/dashboard";
export default {
  auth: false,
  // middleware: "merchant",
  components: {
    Dashboard
  }
};
</script>

<style>
</style>