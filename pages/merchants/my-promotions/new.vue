<template>
  <main>
    <add-promotion />
  </main>
</template>

<script>
import AddPromotion from "~/components/pages/merchant/AddPromotion";
export default {
  layout: "dashboard",
  auth: true,
  middleware: "merchant",
  components: {
    AddPromotion
  }
};
</script>

