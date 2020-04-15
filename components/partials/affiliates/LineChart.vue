<template>
  <div>
    <slot />
    <line-chart />
  </div>
</template>

<script>
import { mapState } from "vuex";
import LineChart from "~/components/commons/dashboard/LineChart2";
export default {
  components: {
    LineChart
  },
  data() {
    return {
      options: {
        colors: ["#FECC0A"],
        chart: {
          id: "vuechart-example",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        }
      },
      series: [
        {
          name: "Earnings",
          data: [30, 40, 45, 50, 49, 60, 70, 91, 67, 23, 46, 98]
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
