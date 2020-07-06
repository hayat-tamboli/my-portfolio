<template>
  <div id="skills">
    <h1>Skills</h1>
    <ProgressBar skill="Bootstrap" widthPercent="50%"></ProgressBar>
    <ProgressBar skill="Bootstrap" widthPercent="50%"></ProgressBar>
    <ProgressBar skill="Bootstrap" widthPercent="50%"></ProgressBar>
    <ProgressBar skill="Bootstrap" widthPercent="50%"></ProgressBar>
  </div>
</template>

<script>
import ProgressBar from "./progressbar";
export default {
  name: "Skills",
  components: {
    ProgressBar
  }
};
</script>

<style lang="scss" scoped>
#skills {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
