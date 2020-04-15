<template>
  <div class="row p-0 m-0">
    <!-- <div class="row"> -->
    <div class="col-auto">
      <nuxt-link to="#" class="color-blue text-bold"
        ><img
          src="~/assets/images/left-arrow.png"
          width="10"
          alt=""
        />Back</nuxt-link
      >
    </div>
    <!-- </div> -->
    <div class="col">
      <div class="row">
        <!-- CHARTS HERE -->
        <bar-chart id="myfirstbarchart">
          VISITORS
        </bar-chart>

        <bar-chart id="mysecondbarchart">
          CLICKS
        </bar-chart>
        <bar-chart id="mythirdbarchart">
          Conversion Rate
          <template slot="value">0.02%</template>
        </bar-chart>
        <line-chart id="myfourthbarchart" class="bg-linechart">
          <span class="text-white"> Product Sold </span>
          <span class="text-white" slot="value"> 2 </span>
        </line-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "~/components/commons/dashboard/BarChart";
import LineChart from "~/components/partials/affiliates/LineChart";
export default {
  components: {
    BarChart,
    LineChart
  }
};
</script>
<style >
.bg-linechart {
  background-color: #003e5f !important;
}
</style>
