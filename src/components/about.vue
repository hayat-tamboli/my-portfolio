<template>
  <div id="about">
    <p>
      A computer science engineering undergrad based in
      <a href="https://goo.gl/maps/vFGXcTgVsPQdwpo38">Solapur, India.</a>
      Passionate about UX/UI design and frontend development
    </p>
    <p>
      Worked, mentored & lead as a designer in several diffrent companies and
      organisations
    </p>
    <div class="companies">
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
    </div>
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
