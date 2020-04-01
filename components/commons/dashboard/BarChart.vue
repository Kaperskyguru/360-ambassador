<template>
  <div class="col-md-3 col-sm-12 col-xs-12 m-0 p-0">
    <p class="col-12 color-blue"><slot /></p>
    <apexchart
      width="100%"
      height="200px"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      options: {
        colors: ["#FECC0A"],
        chart: {
          id: this.id,
          toolbar: {
            show: false
          }
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
  mounted() {}
};
</script>

