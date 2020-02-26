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
        <bar-chart id="mysecondchart" class="bg-blue">
          <span class="text-white"> Product Sold </span>
        </bar-chart>
      </div>
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
          Month: "Jan",
          value: 12000
        },
        {
          Month: "Feb",
          value: 19000
        },
        {
          Month: "Mar",
          value: 3000
        },
        {
          Month: "Apr",
          value: 5000
        },
        {
          Month: "May",
          value: 2000
        },
        {
          Month: "Jun",
          value: 3000
        },
        {
          Month: "Jul",
          value: 25000
        },
        {
          Month: "Aug",
          value: 4500
        },
        {
          Month: "Sept",
          value: 12450
        },
        {
          Month: "Oct",
          value: 45820
        },
        {
          Month: "Nov",
          value: 2000
        },
        {
          Month: "Dec",
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
      parseTime: false,
      resize: true
    });

    new Morris.Bar({
      // ID of the element in which to draw the chart.
      element: "mysecondbarchart",
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: [
        {
          Month: "Jan",
          value: 12000
        },
        {
          Month: "Feb",
          value: 19000
        },
        {
          Month: "Mar",
          value: 3000
        },
        {
          Month: "Apr",
          value: 5000
        },
        {
          Month: "May",
          value: 2000
        },
        {
          Month: "Jun",
          value: 3000
        },
        {
          Month: "Jul",
          value: 25000
        },
        {
          Month: "Aug",
          value: 4500
        },
        {
          Month: "Sept",
          value: 12450
        },
        {
          Month: "Oct",
          value: 45820
        },
        {
          Month: "Nov",
          value: 2000
        },
        {
          Month: "Dec",
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
      parseTime: false,
      resize: true
    });

    new Morris.Bar({
      // ID of the element in which to draw the chart.
      element: "mythirdbarchart",
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: [
        {
          Month: "Jan",
          value: 12000
        },
        {
          Month: "Feb",
          value: 19000
        },
        {
          Month: "Mar",
          value: 3000
        },
        {
          Month: "Apr",
          value: 5000
        },
        {
          Month: "May",
          value: 2000
        },
        {
          Month: "Jun",
          value: 3000
        },
        {
          Month: "Jul",
          value: 25000
        },
        {
          Month: "Aug",
          value: 4500
        },
        {
          Month: "Sept",
          value: 12450
        },
        {
          Month: "Oct",
          value: 45820
        },
        {
          Month: "Nov",
          value: 2000
        },
        {
          Month: "Dec",
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
      parseTime: false,
      resize: true
    });

    new Morris.Line({
      // ID of the element in which to draw the chart.
      element: "mysecondchart",
      // Chart data records -- each entry in this array corresponds to a point on
      // the chart.
      data: [
        {
          Month: "Jan",
          value: 12000
        },
        {
          Month: "Feb",
          value: 19000
        },
        {
          Month: "Mar",
          value: 3000
        },
        {
          Month: "Apr",
          value: 5000
        },
        {
          Month: "May",
          value: 2000
        },
        {
          Month: "Jun",
          value: 3000
        },
        {
          Month: "Jul",
          value: 25000
        },
        {
          Month: "Aug",
          value: 4500
        },
        {
          Month: "Sept",
          value: 12450
        },
        {
          Month: "Oct",
          value: 45820
        },
        {
          Month: "Nov",
          value: 2000
        },
        {
          Month: "Dec",
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
      parseTime: false,
      resize: true
    });
  }
};
</script>

