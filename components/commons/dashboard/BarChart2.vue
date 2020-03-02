<template>
  <!-- <div :id="chart_id" class="p-0" style="height: 220px; width: 100%"></div> -->
  <apexchart
    width="100%"
    height="220px"
    type="bar"
    :options="options"
    :series="series"
    class="p-0"
  ></apexchart>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    data: {
      type: Array
    }
  },

  data() {
    return {
      chart_id: this.id,
      options: {
        colors: ["#FECC0A"],
        chart: {
          id: this.id
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

