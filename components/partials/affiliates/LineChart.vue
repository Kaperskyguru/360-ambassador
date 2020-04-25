<template>
  <div class="col-md-3 col-sm-12 col-xs-12 m-0 p-0">
    <div class="row">
      <p class="col-6 color-blue text-bold pl-5 pt-2"><slot /></p>
      <p
        class="col-6 color-blue text-bold justify-cotent-end d-flex "
        style="font-size:20px"
      >
        <span class="ml-auto p-1"><slot name="value"/></span>
        <span class="pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
          >
            <path d="M24 22h-24l12-20z" style="fill: white !important" />
          </svg>
        </span>
      </p>
    </div>
    <apexchart
      width="100%"
      height="150px"
      type="line"
      :options="options"
      :series="series"
      class="text-white"
    ></apexchart>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import LineChart from "~/components/commons/dashboard/LineChart2";
export default {
  components: {
    // LineChart
  },
  data() {
    return {
      options: {
        colors: ["#FECC0A"],
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false
          },
          foreColor: "white"
        },
        tooltip: {
          theme: "dark"
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
            // "Jul",
            // "Aug",
            // "Sep",
            // "Oct",
            // "Nov",
            // "Dec"
          ]
        }
      },
      series: [
        {
          name: "Earnings",
          data: [30, 40, 45, 50, 49, 60] //, 70, 91, 67, 23, 46, 98
        }
      ]
    };
  },
  computed: {
    ...mapState({
      data: state => {
        return state.insight.earningGraph;
      }
    })
  },
  mounted() {}
};
</script>
