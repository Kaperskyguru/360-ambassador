<template>
  <div class="dashboard__general--card mb-5">
    <merchant
      :icon="merchant.profile_picture"
      v-for="(merchant, i) in merchants"
      :key="i"
    >
      <template slot="title">
        {{ merchant.username }}
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>

    <merchant icon="5-1.png">
      <template slot="title">
        Universal
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>

    <merchant icon="5-2.png">
      <template slot="title">
        Renew toxicology
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>

    <merchant icon="5-3.png">
      <template slot="title">
        Discrete idea
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>

    <merchant icon="5-4.png">
      <template slot="title">
        Imagine Production
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