<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <HollowDotsSpinner
        :animation-duration="800"
        :dot-size="80"
        :dots-num="3"
        color="#2257ea"
      />
    </div>
  </transition>
</template>

<script>
import "epic-spinners/dist/lib/epic-spinners.min.css";
import { HollowDotsSpinner } from "epic-spinners/dist/lib/epic-spinners.min.js";
export default {
  name: "Preloader",
  components: {
    HollowDotsSpinner
  },
  data() {
    return {
      show: true
    };
  },
  mounted() {
    if (this.show) {
      this.showToggle();
    }
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.preloader {
  z-index: 9000;
  position: fixed;
  background: #f7f7f7;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
