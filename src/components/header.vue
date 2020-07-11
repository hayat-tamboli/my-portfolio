<template>
  <div class="header">
    <span class="logo">
      <a href="#">Hayat Tamboli</a>
    </span>
    <ul class="links">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <!-- <Switches v-model="enabled" theme="bulma" type-bold="true" color="blue"></Switches> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      enabled: false
    };
  }
};
</script>

<style lang="scss" scoped>
$blue: #2257ea;
$lightgrey: #f7f7f7;
$secondarycolor: #213059;
$duration: 0.2s;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);
.header {
  position: fixed;
  z-index: +10;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0rem;
  align-items: center;
  background: #f7f7f785;
  backdrop-filter: blur(8px);
  .logo {
    a {
      color: $blue;
      font-size: 1.8rem;
      font-weight: 900;
      text-decoration: none;
    }
  }
  .links {
    list-style-type: none;
    margin: 0;
    text-align: center;

    li {
      display: inline-block;
      margin: 0 20px;
    }
  }
  a {
    font-size: 1.3rem;
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    padding-bottom: 8px;
    color: $secondarycolor;

    &:before,
    &:after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: $blue;
    }
    &:before {
      opacity: 0;
      transform: translateY(-$distance);
      transition: transform 0s $easeOutBack, opacity 0s;
    }
    &:after {
      opacity: 0;
      transform: translateY($distance/2);
      transition: transform $duration $easeOutBack, opacity $duration;
    }
    &:hover,
    &:focus {
      &:before,
      &:after {
        opacity: 1;
        transform: translateY(0);
      }
      &:before {
        transition: transform $duration $easeOutBack, opacity $duration;
      }
      &:after {
        transition: transform 0s $duration $easeOutBack, opacity 0s $duration;
      }
    }
  }
}
@media only screen and (max-width: 900px) {
  .header {
    width: 100vw;
    justify-content: center;
    .links {
      display: none;
    }
  }
}
</style>
