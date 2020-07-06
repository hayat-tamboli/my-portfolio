<template>
  <div id="skills">
    <h1>Skills</h1>
    <div class="skill-div">
      <div>
        <h2>Programming</h2>
        <ProgressBar skill="HTML 5/CSS 3" widthPercent="80%"></ProgressBar>
        <ProgressBar skill="Bootstrap 4" widthPercent="90%"></ProgressBar>
        <ProgressBar skill="Vue.js" widthPercent="60%"></ProgressBar>
        <ProgressBar skill="Python" widthPercent="50%"></ProgressBar>
        <ProgressBar skill="C/C++" widthPercent="75%"></ProgressBar>
      </div>
      <div>
        <h2>Design</h2>
        <ProgressBar skill="Adobe XD" widthPercent="80%"></ProgressBar>
        <ProgressBar skill="Figma" widthPercent="75%"></ProgressBar>
        <ProgressBar skill="Adobe Illustrator" widthPercent="60%"></ProgressBar>
      </div>
    </div>
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
  .skill-div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
