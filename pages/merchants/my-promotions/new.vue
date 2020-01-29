<template>
  <main>
    <add-promotion />
  </main>
</template>

<script>
import AddPromotion from "~/components/pages/merchant/AddPromotion";
export default {
  auth: false,
  components: {
    AddPromotion
  },
  async fetch({ store, auth, error }) {
    try {
      await store.dispatch("category/get");
    } catch (err) {
      error({
        statusCode: 500,
        message: err
      });
    }
  }
};
</script>

<style>
</style>