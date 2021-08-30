<template>
  <div id="about">
    <p>
      A computer science engineering undergrad based in
      <a href="https://goo.gl/maps/vFGXcTgVsPQdwpo38">Solapur, India.</a>
      Passionate about UX/UI design and frontend development
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$blue: #2c60e6;
#about {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.8rem;
  padding: 4rem 300px;
  p {
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
