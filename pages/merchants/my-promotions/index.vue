<template>
  <main>
    <my-promotion />
  </main>
</template>

<script>
import MyPromotion from "~/components/pages/merchant/MyPromotion";
export default {
  layout: "dashboard",
  auth: true,
  middleware: "merchant",
  components: {
    MyPromotion
  }
};
</script>

