<template>
  <div id="myfirstchart" class="p-0" style="height: 220px;width: 100%"></div>
</template>

<script>
export default {
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
