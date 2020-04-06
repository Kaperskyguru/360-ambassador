<template>
  <div>
    <div class="col-12 pt-2">
      <div class="row pl-4">
        <div class="dashboard__chart--card-text col-6 pl-0 pb-0">
          <span class="text-small col-12 pl-2 color-grey-3"
            >TOTAL EARNINGS</span
          >
          <p class="col-12 pl-2 color-blue">N11,000.00</p>
        </div>
        <div class="col-6 pt-3">
          <select name="" id="" class="dashboard__chart--card-select col-6">
            <option value="1">By Year</option>
            <option value="1">By Year</option>
            <option value="1">By Year</option>
            <option value="1">By Year</option>
            <option value="1">By Year</option>
          </select>
        </div>
      </div>
    </div>
    <apexchart
      width="100%"
      height="200px"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
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
