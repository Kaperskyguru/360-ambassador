<template>
  <apexchart
    width="100%"
    height="150px"
    type="line"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  props: ["data"],
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
  }
};
</script>
