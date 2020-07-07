<template>
  <div id="portfolio">
    <h1>My Projects</h1>
    <div class="card-deck">
      <CardComp
        main="memory-game"
        desc="a memory game made with vanilla JS"
        img_source="https://raw.githubusercontent.com/hayat-tamboli/my-portfolio/master/src/assets/memory-game.png"
        weblink="https://memory-master.netlify.com/"
        gitlink="https://github.com/hayat-tamboli/memory-game"
      ></CardComp>
      <CardComp
        main="todo-app"
        desc="a simple todo-app made with Vue.js"
        img_source="https://raw.githubusercontent.com/hayat-tamboli/my-portfolio/master/src/assets/Todo-app.png"
        weblink="https://todapp.vercel.app/"
        gitlink="https://github.com/hayat-tamboli/todo-app"
      ></CardComp>
      <CardComp
        main="weather-app"
        desc="weather-app using dark-sky API,made in vanilla JS"
        img_source="https://raw.githubusercontent.com/hayat-tamboli/my-portfolio/master/src/assets/weather-app.png"
        weblink="https://weatherforu.netlify.com/"
        gitlink="https://github.com/hayat-tamboli/weather-page"
      ></CardComp>
    </div>
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
#portfolio {
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
