import { Chart } from "chart.js";
import Vue, { VueConstructor } from "vue";

Vue.config.productionTip = false;
export default {
  install(Vue: VueConstructor) {
    Vue.prototype.$_Chart = Chart;
  },
};

// App.vue
// new this.$_Chart();
