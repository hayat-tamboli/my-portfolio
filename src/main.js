import Vue from "vue";
import App from "./App.vue";
// import VueScrollProgress from "vue-scroll-progress";
// import VueResource from "vue-resource";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./router";

// Vue.use(VueResource);
// Vue.use(VueScrollProgress);
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },

  router,
  render: h => h(App)
}).$mount("#app");
