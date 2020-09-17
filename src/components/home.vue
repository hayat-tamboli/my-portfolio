<template>
  <div id="home">
    <div class="text-area">
      <h1 class="wordCarousel">
        <span>
          Hi I am Hayat Tamboli,
          <br />I am a
        </span>
        <div>
          <ul class="flip3">
            <li>Student <span class="invert-again">👨‍🎓</span></li>
            <li>Developer <span class="invert-again">👨‍💻</span></li>
            <li>UI/UX Designer <span class="invert-again">👨‍🎨</span></li>
          </ul>
        </div>
      </h1>
      <button class="invert-again" style="background: #2257ea">
        <a href="#projects">See my work</a>
      </button>
    </div>
    <img
      src="../assets/app_development_SVG.svg"
      alt="web developer"
      id="web-dev-img"
      width="35%"
      style="padding: 2rem;"
    />
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0 3rem;
  min-height: 100vh;
  h1 {
    font-weight: 900;
  }
  .text-area {
    display: flex;
    font-size: 1.4rem;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2rem;
    .wordCarousel {
      font-weight: 100;
      div {
        overflow: hidden;
        position: relative;
        float: right;
        height: 70px;
        padding-top: 10px;
        margin-top: -10px;
        li {
          white-space: nowrap;
          font-weight: 700;
          padding: 0 10px;
          height: 45px;
          margin-bottom: 45px;
          display: block;
        }
      }
    }
  }
}
@media only screen and (max-width: 900px) {
  #web-dev-img {
    display: none;
  }
  .text-area {
    text-align: center;
    align-items: center;
    padding: 0rem;
    margin: 0rem;
  }
  #home {
    justify-content: center;
    padding: 0rem;
  }
}

.flip3 {
  animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
  padding-inline-start: 0;
}

@keyframes flip3 {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}
</style>
