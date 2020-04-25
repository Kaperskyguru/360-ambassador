<template>
  <div class="dashboard__general--card mb-5">
    <merchant
      :icon="
        merchant.profile_picture || require('~/assets/images/man-user.png')
      "
      v-for="(merchant, i) in merchants"
      :key="i"
    >
      <template slot="title">
        {{ merchant.fullname }}
      </template>

      <template slot="rate">
        {{ merchant.rate || 4.9 }}
      </template>
    </merchant>
    <div v-if="isEmpty"><p>No top 5 merchants yet</p></div>
  </div>
</template>

<script>
import Merchant from "~/components/commons/dashboard/Merchant";
import { mapState } from "vuex";
export default {
  components: {
    Merchant
  },
  computed: {
    ...mapState({
      merchants: state => {
        return state.user.topMerchants;
      }
    }),
    isEmpty() {
      return Object.entries(this.merchants).length === 0;
    }
  }
};
</script>

