<template>
  <div class="col-md-3 col-sm-12 col-xs-12 m-0 p-0">
    <div class="row">
      <p class="col-6 color-blue text-bold"><slot /></p>
      <p
        class="col-6 color-blue text-bold justify-content-end pr-5 d-flex"
        style="font-size:20px"
      >
        <slot name="value" />
      </p>
    </div>
    <apexchart
      width="100%"
      height="150px"
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
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
            // "Jul",
            // "Aug",
            // "Sep",
            // "Oct",
            // "Nov",
            // "Dec"
          ]
        }
      },
      series: [
        {
          name: "Earnings",
          data: [30, 40, 45, 50, 49, 60] //, 70, 91, 67, 23, 46, 98
        }
      ]
    };
  },
  mounted() {}
};
</script>

