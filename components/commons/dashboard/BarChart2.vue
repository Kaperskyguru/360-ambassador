<template>
  <div :id="chart_id" class="p-0" style="height: 220px; width: 100%"></div>
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
      chart_data: this.data
    };
  },
  mounted() {
    new Morris.Bar({
      element: this.chart_id,

      data: this.chart_data
        ? this.chart_data
        : [
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
      xkey: "Month",
      ykeys: ["value"],
      labels: ["Value"],
      barColors: ["rgb(254,204,10)"],
      parseTime: false,
      resize: true
    });
  }
};
</script>

<style>
</style>