<template>
  <div class="dashboard__general--card mb-5">
    <merchant
      :icon="merchant.profile_picture"
      v-for="(merchant, i) in merchants"
      :key="i"
    >
      <template slot="title">
        {{ merchant.firstName }}
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>
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
    })
  }
};
</script>

<style>
</style>