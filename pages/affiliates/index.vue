<template>
  <dashboard />
</template>

<script>
import Dashboard from "~/components/pages/affiliates/Dashboard.vue";
import { mapState } from "vuex";

export default {
  components: {
    Dashboard
  },
  async fetch({ store, auth }) {
    await store.dispatch("user/getTopMerchants");
  }
};
</script>


