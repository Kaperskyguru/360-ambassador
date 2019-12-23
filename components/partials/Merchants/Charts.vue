<template>
  <div class="row">
    <div class="col-1">
      <a href="#" class="color-blue text-bold"
        ><img src="~/assets/images/left-arrow.png" width="10" alt="" />Back</a
      >
    </div>
    <!-- CHARTS HERE -->
    <bar-chart id="myfirstbarchart">
      VISITORS
    </bar-chart>

    <bar-chart id="mysecondbarchart">
      CLICKS
    </bar-chart>
    <bar-chart id="mythirdbarchart">
      CLICKS
    </bar-chart>
    <div class="col bg-blue">
      <p class="col-12 color-white">CLICKS</p>
      <div
        id="mysecondchart"
        class="p-0"
        style="height: 220px;width: 100%"
      ></div>
    </div>
  </div>
</template>

<script>
import BarChart from "~/components/commons/dashboard/BarChart";
export default {
  components: {
    BarChart
  },
  mounted() {
    new Morris.Bar({
      // ID of the element in which to draw the chart.
      element: "myfirstbarchart",
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
      // The name of the data record attribute that contains x-values.
      xkey: "Month",
      // A list of names of data record attributes that contain y-values.
      ykeys: ["value"],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ["Value"],
      barColors: ["rgb(254,204,10)"],
      parseTime: false
    });

    new Morris.Bar({
      // ID of the element in which to draw the chart.
      element: "mysecondbarchart",
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
      // The name of the data record attribute that contains x-values.
      xkey: "Month",
      // A list of names of data record attributes that contain y-values.
      ykeys: ["value"],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ["Value"],
      barColors: ["rgb(254,204,10)"],
      parseTime: false
    });

    new Morris.Bar({
      // ID of the element in which to draw the chart.
      element: "mythirdbarchart",
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
      // The name of the data record attribute that contains x-values.
      xkey: "Month",
      // A list of names of data record attributes that contain y-values.
      ykeys: ["value"],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ["Value"],
      barColors: ["rgb(254,204,10)"],
      parseTime: false
    });

    new Morris.Line({
      // ID of the element in which to draw the chart.
      element: "mysecondchart",
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
      // The name of the data record attribute that contains x-values.
      xkey: "Month",
      // A list of names of data record attributes that contain y-values.
      ykeys: ["value"],
      // Labels for the ykeys -- will be displayed when you hover over the
      // chart.
      labels: ["Value"],
      lineColors: ["#ffffff"],
      parseTime: false
    });
  }
};
</script>

<style>
</style>