<template>
  <div id="projects">
    <h1>My Projects</h1>
    <div class="card-deck">
      <CardComp
        main="memory-game"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-easing="ease-in-sine"
        desc="a memory game made with vanilla JS"
        img_source="https://raw.githubusercontent.com/hayat-tamboli/my-portfolio/master/src/assets/memory-game.png"
        weblink="https://memory-master.netlify.com/"
        gitlink="https://github.com/hayat-tamboli/memory-game"
      ></CardComp>
      <CardComp
        main="Todone"
        desc="a simple todo-app made with Vue.js"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-easing="ease-in-sine"
        img_source="https://raw.githubusercontent.com/hayat-tamboli/my-portfolio/master/src/assets/Todo-app.png"
        weblink="https://todone-minimal.vercel.app/"
        gitlink="https://github.com/hayat-tamboli/todo-app"
      ></CardComp>
      <CardComp
        main="weather-app"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-easing="ease-in-sine"
        desc="weather-app using dark-sky API,made in vanilla JS"
        img_source="https://raw.githubusercontent.com/hayat-tamboli/my-portfolio/master/src/assets/weather-app.png"
        weblink="https://weatherforu.netlify.com/"
        gitlink="https://github.com/hayat-tamboli/weather-page"
      ></CardComp>
    </div>
    <!-- <h2>Design Projects</h2>
    <iframe
      height="812"
      src="https://xd.adobe.com/embed/94f928d5-ae2f-4def-8fc8-0b3d7db66514-c1aa/"
      frameborder="0"
      allowfullscreen
    ></iframe> -->
  </div>
</template>

<script>
import CardComp from "./card";
export default {
  name: "Portfolio",
  components: {
    CardComp
  }
};
</script>

<style lang="scss" scoped>
#projects {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  .card-deck {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
