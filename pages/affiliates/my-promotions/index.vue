<template>
  <main>
    <promotions />
  </main>
</template>

<script>
import Promotions from "~/components/pages/affiliates/My.promotion";
export default {
  layout: "dashboard",
  auth: true,
  middleware: "affiliate",
  components: {
    Promotions
  }
};
</script>

