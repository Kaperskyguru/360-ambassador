<template>
  <div class="row">
    <h6 class="col-12 text text-bold color-blue bg-grey-8 pt-4 pb-3 pl-3 pr-3">
      Promotion Stats
    </h6>
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <!-- STAT BOX HERE -->

          <stat-box>
            <template slot="title">
              clicks
            </template>
            <template slot="amount">
              {{ promotion.clicks || 0 }}
            </template>
          </stat-box>
        </div>
        <div class="col-4">
          <stat-box>
            <template slot="title">
              visitors
            </template>
            <template slot="amount">
              {{ promotion.visitors || 0 }}
            </template>
          </stat-box>
        </div>
        <div class="col-4">
          <stat-box>
            <template slot="title">
              sales
            </template>
            <template slot="amount">
              {{ promotion.sales || 0 }}
            </template>
          </stat-box>
        </div>
        <div class="col-4">
          <stat-box>
            <template slot="title">
              conv
            </template>
            <template slot="amount">
              0.02%
            </template>
          </stat-box>
        </div>
        <div class="col-4">
          <stat-box>
            <template slot="title">
              n per sale
            </template>
            <template slot="amount">
              5.00
            </template>
          </stat-box>
        </div>
        <div class="col-4">
          <stat-box fill class="bg-yellow color-black text-black">
            <template slot="title" class="color-black text-black">
              total earned
            </template>
            <template slot="amount">
              10.00
            </template>
          </stat-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StatBox from "~/components/commons/dashboard/Stat.box";
export default {
  components: {
    StatBox
  },
  props: ["promotion"]
};
</script>

<style>
</style>