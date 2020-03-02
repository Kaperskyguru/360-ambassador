<template>
  <div>
    <div class="col-12 pt-3">
      <div class="row">
        <div class="dashboard__chart--card-text col-6 pl-0 pb-0">
          <span class="text-small col-12 pl-2 color-grey-3"
            >TOTAL EARNINGS</span
          >
          <p class="col-12 pl-2 color-blue">N11,000.00</p>
        </div>
        <div class="col-6">
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
    <!-- <div id="myfirstchart" class="p-0" style="height: 220px; width: 100%"></div> -->
    <apexchart
      width="100%"
      height="220px"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
// import Vue from "vue";
// import { LineChart } from "vue-morris";
import { mapState } from "vuex";
export default {
  components: {
    // LineChart
  },
  data() {
    return {
      options: {
        colors: ["#FECC0A"],
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [
            "January",
            "Febuary",
            "March",
            "Apriel",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
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
  mounted() {
    console.log(this.data);

    // new Morris.Line({
    //   // ID of the element in which to draw the chart.
    //   element: "myfirstchart",
    //   // Chart data records -- each entry in this array corresponds to a point on
    //   // the chart.
    //   data: this.data,
    //   resize: true,
    //   // The name of the data record attribute that contains x-values.
    //   xkey: "Month",
    //   // A list of names of data record attributes that contain y-values.
    //   ykeys: ["value"],
    //   // Labels for the ykeys -- will be displayed when you hover over the
    //   // chart.
    //   labels: ["Value"],
    //   lineColors: ["#FECC0A"],
    //   parseTime: false
    // });
  },
  computed: {
    ...mapState({
      data: state => {
        console.log(state.insight.earningGraph);

        return state.insight.earningGraph;
      }
    })
  },
  mounted() {}
};
</script>
