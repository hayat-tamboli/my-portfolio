<template>
  <div id="progress-bar">
    <h3>{{ skill }}</h3>
    <div class="progress-bar blue">
      <span :style="{ width: widthPercent }"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    skill: String,
    widthPercent: String
  }
};
</script>

<style lang="scss" scoped>
$blue: #2257ea;
.progress-bar {
  background-color: #ffffff;
  height: 20px;
  width: 35rem;
  border-radius: 15px;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.3) inset;
}

.progress-bar span {
  display: inline-block;
  height: 100%;
  border-radius: 15px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3) inset;
  -webkit-transition: width 0.4s ease-in-out;
  -moz-transition: width 0.4s ease-in-out;
  -ms-transition: width 0.4s ease-in-out;
  -o-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}
.blue span {
  background-color: $blue;
}
@media only screen and (max-width: 500px) {
  .progress-bar {
    width: 20rem;
  }
}
</style>
