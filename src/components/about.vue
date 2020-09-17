<template>
  <div id="about">
    <h1>
      Hi, I am Hayat Tamboli
      <span id="hi" class="invert-again">👋</span>
    </h1>
    <p>
      I am a computer science undergrad from Solapur, Maharashtra. Currently I
      am studying in VIT Vellore. I am very passionate about web design and
      frontend web development
    </p>

    <p>
      got any questions?
      <a href="#contact">Contact me.</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$blue: #2257ea;
#about {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4rem;
  padding: 1rem 10rem;
  min-height: 100vh;
  p {
    text-align: center;
    a {
      text-decoration: none;
      color: $blue;
    }
  }
  h1 {
    text-align: center;
  }
}
#hi {
  animation: shake 0.5s infinite ease-in-out alternate;
  display: inline-block;
  z-index: 0;
}
@media only screen and (max-width: 500px) {
  #about {
    padding: 1rem;
  }
}
@keyframes shake {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(20deg);
  }
}
</style>
