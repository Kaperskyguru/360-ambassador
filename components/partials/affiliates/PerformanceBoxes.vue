<template>
  <div class="row justify-content-start mb-5">
    <h6 class="dashboard__heading col-12 mb-5">Performance Summary</h6>

    <box :icon="require('@/assets/images/Mask-Group-4.png')">
      <template slot="title">Commission</template>
      <template slot="price">{{
        performance.commission || "11,000.00 NGN"
      }}</template>
    </box>

    <box :icon="require('@/assets/images/Mask-Group-5.png')">
      <template slot="title">Total Promotion</template>
      <template slot="price">{{
        performance.total_performance || 16
      }}</template>
    </box>

    <box :icon="require('@/assets/images/Mask-Group-6.png')">
      <template slot="title">Sales</template>
      <template slot="price">{{ performance.sales || "10" }}</template>
    </box>

    <box :icon="require('@/assets/images/Mask-Group-7.png')">
      <template slot="title">Clicks</template>
      <template slot="price">{{ performance.clicks || 234 }}</template>
    </box>

    <box :icon="require('@/assets/images/Mask-Group-8.png')">
      <template slot="title">Impressions</template>
      <template slot="price">{{ performance.impressions || 987 }}</template>
    </box>

    <box :icon="require('@/assets/images/Mask-Group-9.png')">
      <template slot="title">Visitors</template>
      <template slot="price">{{ performance.visitors || 450 }}</template>
    </box>
  </div>
</template>

<script>
import Box from "~/components/commons/dashboard/PerformanceBox";
import { mapState } from "vuex";
export default {
  components: {
    Box
  },
  computed: {
    ...mapState({
      performance: state => {
        return state.promotion.performance;
      }
    })
  }
};
</script>

<style>
</style>