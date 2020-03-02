<template>
  <main>
    <dashboard />
  </main>
</template>

<script>
import Dashboard from "~/components/pages/merchant/dashboard";
export default {
  layout: "dashboard",
  auth: true,
  middleware: "merchant",
  components: {
    Dashboard
  }
};
</script>

