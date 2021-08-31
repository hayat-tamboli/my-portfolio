<template>
  <div class="header" :class="{ navExpand: mobileNav }">
    <div class="content">
      <span class="logo">
        <a href="#home">
          Hayat Tamboli
        </a>
        <span class="under-construction">🚧WIP</span>
        <div></div>
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
          <a href="#projects" @click="mobileNavToggle()">Work</a>
        </li>
        <!-- <li>
          <a href="#about" @click="mobileNavToggle()">About</a>
        </li> -->
        <li>
          <a href="#contact" @click="mobileNavToggle()">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobileNav: false,
    };
  },
  methods: {
    mobileNavToggle: function() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
$blue: #2c60e6;
$lightgrey: #f7f7f7;
$secondarycolor: #213059;
$duration: 0.2s;
$distance: 8px;
$easeOutBack: cubic-bezier(0.175, 0.885, 0.32, 1.275);
.under-construction {
  padding: 16px;
  color: white;
  background: #2c60e6;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
}
.header {
  position: sticky;
  padding: 24px 64px 24px 64px;
  z-index: +10;
  top: 0;
  background: #eef2fc;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button:hover {
      box-shadow: 0 0 0 0;
    }
  }
  .logo {
    a {
      color: $blue;
      font-size: 1.4rem;
      font-weight: 900;
      text-decoration: none;
    }
  }
  .links {
    list-style-type: none;
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;

    li {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
  }
  a {
    font-size: 1.1rem;
    position: relative;
    text-decoration: none;
    color: $secondarycolor;
    font-weight: 600;
    transition: all 0.2s ease-in;
  }
  a:hover {
    color: grey;
  }
}
.menu {
  display: none;
}

@media only screen and (max-width: 900px) {
  .header {
    padding: 0px;
    width: 100%;
    .links {
      display: none;
    }
    .content {
      display: block;
      padding: 16px;
      .logo {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .navExpand {
    position: sticky;
    height: 100vh;
    width: 100vw;
    display: block;
    .content {
      display: block;
    }
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
}
</style>
