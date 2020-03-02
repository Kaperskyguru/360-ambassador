<template>
  <main>
    <promotions />
  </main>
</template>

<script>
import Promotions from "~/components/pages/affiliates/Promotions";
export default {
  layout: "dashboard",
  auth: true,
  middleware: "affiliate",
  components: {
    Promotions
  }
};
</script>

