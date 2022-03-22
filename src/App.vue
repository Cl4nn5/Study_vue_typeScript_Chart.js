<template>
  <div>
    <canvas id="myChart"> </canvas>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Chart, { ChartConfiguration } from "chart.js/auto";
// import Chart from "chart.js/auto";

export default Vue.extend({
  mounted() {
    const canvasElement = document.getElementById(
      "myChart"
    ) as HTMLCanvasElement;
    const ctx = canvasElement.getContext("2d");
    // Type Guard
    if (!ctx) {
      return;
    }
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

    const config: ChartConfiguration = {
      type: "bar",
      data: data,
      options: {
        onClick: () => {
          // const canvasPosition = getRelativePosition(e, chart);
          // // Substitute the appropriate scale IDs
          // const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
          // const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
        },
      },
    };

    // TODOs chart Change to Plugin(by Offical Document guide : $_name)
    // uri: https://www.chartjs.org/docs/latest/getting-started/integration.html#bundlers-webpack-rollup-etc
    // const chart = new this.$_Chart(ctx, config);

    // eslint-disable-next-line
    const chart = new Chart(ctx, config);
  },
});
</script>

<style scoped></style>
