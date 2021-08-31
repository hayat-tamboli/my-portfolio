<template>
  <div id="home">
    <h1>
      Hayat Tamboli <br />
      Product designer
    </h1>
    <img src="../assets/Hayat signature logo.png" width="90%" />
  </div>
</template>
<script>
export default {
  name: "LandingPage",
};
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  padding: 0 64px;
  height: 90vh;
  // width: 100vw;
  h1 {
    font-size: 80px;
    position: absolute;
    left: 300px;
  }
  background-color: #eef2fc;
}
@media only screen and (max-width: 900px) {
  #home {
    justify-content: center;
    padding: 1rem;
    h1 {
      font-size: 40px;
      left: 16px;
    }
    height: 70vh;
  }
}
</style>
