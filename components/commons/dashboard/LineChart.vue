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
    <div id="myfirstchart" class="p-0" style="height: 220px; width: 100%"></div>
  </div>
</template>

<script>
// import Vue from "vue";
// import { LineChart } from "vue-morris";
export default {
  components: {
    // LineChart
  },
  data() {
    return {
      countries: []
    };
  },
  mounted() {
    new Morris.Line({
      // ID of the element in which to draw the chart.
      element: "myfirstchart",
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: [
        {
          Month: "January",
          value: 12000
        },
        {
          Month: "February",
          value: 19000
        },
        {
          Month: "March",
          value: 3000
        },
        {
          Month: "April",
          value: 5000
        },
        {
          Month: "May",
          value: 2000
        },
        {
          Month: "June",
          value: 3000
        },
        {
          Month: "July",
          value: 25000
        },
        {
          Month: "August",
          value: 4500
        },
        {
          Month: "September",
          value: 12450
        },
        {
          Month: "October",
          value: 45820
        },
        {
          Month: "November",
          value: 2000
        },
        {
          Month: "December",
          value: 1450
        }
      ],
      resize: true,
      // The name of the data record attribute that contains x-values.
      xkey: "Month",
      // A list of names of data record attributes that contain y-values.
      ykeys: ["value"],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ["Value"],
      lineColors: ["#FECC0A"],
      parseTime: false
    });
  }
};
</script>
