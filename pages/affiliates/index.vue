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
  },
  mounted() {
    if (!this.$auth.user.nothin) {
      this.$notify({
        group: "alerts",
        type: "warning",
        title: "Update profile",
        text: `Hello ${this.$auth.user.fullname}! Please you need to update your profile`
      });
    }
  }
};
</script>


