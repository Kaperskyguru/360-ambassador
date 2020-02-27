<template>
  <div class="row">
    <!-- <div class="row"> -->
    <div class="col-1">
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
        </bar-chart>
        <!-- <line-chart id="mysecondchart" class="bg-blue">
          <span class="text-white"> Product Sold </span>
        </line-chart> -->
        <bar-chart id="mysecondchart" class="bg-blue">
          <span class="text-white"> Product Sold </span>
        </bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "~/components/commons/dashboard/BarChart";
import LineChart from "~/components/commons/dashboard/LineChart2";
export default {
  components: {
    BarChart,
    LineChart
  }
};
</script>

