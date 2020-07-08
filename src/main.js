import Vue from "vue";
import App from "./App.vue";
import VueScrollProgress from "vue-scroll-progress";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.use(VueScrollProgress);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
