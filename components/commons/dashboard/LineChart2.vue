<template>
  <apexchart
    width="100%"
    height="220px"
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
  }
};
</script>
