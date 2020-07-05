<template>
  <div class="home">
    <div class="text-area">
      <span>
        <h1>
          Stylish web
          <br />design & development.
        </h1>
      </span>
      <span>
        <h3>
          I help deliver a great user experience
          <br />that looks stylish
        </h3>
      </span>
      <button style="background: #2257ea">
        <a href="#portfolio">See my work</a>
      </button>
    </div>
    <img
      src="../assets/undraw_web_developer_p3e5.svg"
      alt="web developer"
      id="web-dev-img"
      width="50%"
    />
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home {
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
    padding: 3rem;
  }
  .svg {
    position: absolute;
    right: 3rem;
    top: 8rem;
  }
}
@media only screen and (max-width: 900px) {
  #web-dev-img {
    display: none;
  }
  .text-area {
    text-align: center;
    align-items: center;
  }
}
</style>
