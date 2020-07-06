import Vue from "vue";
import App from "./App.vue";
import VueScrollProgress from "vue-scroll-progress";

Vue.use(VueScrollProgress);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
