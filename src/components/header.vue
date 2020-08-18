<template>
  <div class="header" :class="{ navExpand: mobileNav }">
    <span class="logo">
      <a href="#home">HAYAT</a>
      <button
        class="menu"
        :class="{ opened: mobileNav }"
        @click="mobileNavToggle()"
        aria-label="Main Menu"
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <path
            class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path class="line line2" d="M 20,50 H 80" />
          <path
            class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
    </span>
    <ul class="links">
      <li>
        <a href="#home" @click="mobileNavToggle()">Home</a>
      </li>
      <li>
        <a href="#about" @click="mobileNavToggle()">About</a>
      </li>
      <li>
        <a href="#projects" @click="mobileNavToggle()">Projects</a>
      </li>
      <li>
        <a href="#skills" @click="mobileNavToggle()">Skills</a>
      </li>
      <li>
        <a href="#contact" @click="mobileNavToggle()">Contact</a>
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
      mobileNav: false
    };
  },
  methods: {
    mobileNavToggle() {
      this.mobileNav = !this.mobileNav;
      // this.setAttribute("aria-expanded", this.classList.contains("opened"));
    }
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
.menu {
  display: none;
}

@media only screen and (max-width: 900px) {
  .links {
    display: none;
  }
  .navExpand {
    position: fixed;
    // transition: height 10s ease-in-out;
    height: 100vh;
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 80vh;
      list-style-type: none;
      margin: 0;
      text-align: center;
      padding: 0;
      font-weight: 800;

      li {
        display: inline-block;
        margin: 20px 0px;
        transition: all 1s;
        a {
          font-size: 2.5rem;
        }
      }
    }
  }
  button {
    &:hover {
      transform: translateY(0px);
      box-shadow: 0px 0px 0px rgb(0, 0, 0);
    }
  }
  .menu {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
  }
  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .opened {
    .line1 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    }
    .line2 {
      stroke-dasharray: 1 60;
      stroke-dashoffset: -30;
      stroke-width: 6;
    }
    .line3 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 6;
    }
  }

  .header {
    max-width: 100vw;
    display: inline-block;
    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    }
  }
}
</style>
