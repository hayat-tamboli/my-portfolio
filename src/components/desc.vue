<template>
  <div id="desc">
    <p data-aos="fade-down" data-aos-easing="ease-in-sine">
      A computer science engineering undergrad based in
      <a href="https://goo.gl/maps/vFGXcTgVsPQdwpo38">Solapur, India.</a>
      Passionate about UX/UI design and frontend development
    </p>
    <p data-aos="fade-down" data-aos-easing="ease-in-sine">
      Currently working as a UX design intern at
      <a
        href="http://www.linkedin.com/company/engineer-s-cradle/"
        target="_blank"
        rel="noopener noreferrer"
        >Engineer's Cradle</a
      >
      - a mission driven early stage startup, focused on helping engineers get
      better oppotunities & resources.
    </p>
    <!-- <div class="companies">
      <a href="https://cubevit-e1c09.web.app/"
        ><img src="../assets/cube vit logo.png" alt="cube vit"
      /></a>
      <a href="https://www.instagram.com/stcvit/"
        ><img src="../assets/STC logo.png" alt="STC"
      /></a>
      <a href="http://skilltally.com/"
        ><img src="../assets/skilltally Logo.png" alt="Skilltally"
      /></a>
      <a href="https://www.linkedin.com/company/engineer-s-cradle/"
        ><img src="../assets/Engineer’s Cradle Logo.png" alt="Engineers cradle"
      /></a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Desccription",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$blue: #2c60e6;
.companies {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  a {
    img {
      height: 50px;
      filter: grayscale(100%);
      transition: all 0.2s ease-in-out;
    }
    img:hover {
      filter: grayscale(0%);
    }
  }
}
#desc {
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
@media only screen and (max-width: 1000px) {
  #desc {
    padding: 4rem 16px;
  }
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
