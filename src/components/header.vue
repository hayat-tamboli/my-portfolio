<template>
  <div class="header" :class="{ navExpand: mobileNav }">
    <div class="content">
      <span class="logo">
        <a href="#home">HAYAT</a>
      </span>
      <ul class="links">
        <li>
          <a href="#projects" @click="mobileNavToggle()">Work</a>
        </li>
        <li>
          <a href="#about" @click="mobileNavToggle()">About</a>
        </li>
        <li>
          <a href="#contact" @click="mobileNavToggle()">Contact</a>
        </li>
        <li>
          <a href="https://twitter.com/HayatTamboli"
            ><twitter-icon size="1.2x" class="custom-class"></twitter-icon
          ></a>
        </li>
        <li>
          <a href="https://dribbble.com/hayattamboli"
            ><dribbble-icon size="1.2x" class="custom-class"></dribbble-icon
          ></a>
        </li>
      </ul>
    </div>
    <!-- <button
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
    </button> -->
  </div>
</template>

<script>
import { TwitterIcon } from "vue-feather-icons";
import { DribbbleIcon } from 'vue-feather-icons'

export default {
  components: {
    TwitterIcon,
    DribbbleIcon,
  },
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
.header {
  position: sticky;
  padding: 24px 64px 24px 64px;
  z-index: +10;
  top: 0;
  background: #eef2fc;
  // backdrop-filter: blur(8px);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    padding-bottom: 8px;
    color: $secondarycolor;
    font-weight: 600;
  }
}
.menu {
  display: none;
}

@media only screen and (max-width: 900px) {
  .header {
    padding: 0 16px 0 16px;
    .links {
      display: none;
    }
  }
  .navExpand {
    position: fixed;
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
// .toggle {
//   display: inline-block;
//   text-align: center;
//   user-select: none;
// }
// .toggle--checkbox {
//   display: none;
// }
// .toggle--btn {
//   display: inline-block;
//   margin: 0;

//   font-size: 1em;

//   transition: all 350ms ease-in;

//   &:hover {
//     cursor: pointer;
//   }
// }

// .toggle--btn,
// .toggle--checkbox,
// .toggle--feature {
//   &,
//   &:before,
//   &:after {
//     transition: all 250ms ease-in;
//   }
//   &:before,
//   &:after {
//     content: "";
//     display: block;
//   }
// }

// /* ===================================================
//    Day/Night and Gender toggle buttons
//    =================================================== */

// $toggleHeight: 70px;
// $toggleWidth: 125px;
// $borderWidth: 5px;
// $toggleBtnRadius: $toggleHeight - 14px;

// $bgColor--night: #3c4145;
// $borderColor--night: #1c1c1c;
// $toggleBtn-bgColor--night: #fff;
// $toggleBtn-borderColor--night: #e3e3c7;

// $bgColor--day: #9ee3fb;
// $borderColor--day: #86c3d7;
// $toggleBtn-bgColor--day: #ffdf6d;
// $toggleBtn-borderColor--day: #e1c348;

// $cloud-borderColor: #d3d3d3;
// $cloud-bgColor: #fff;

// .toggle--daynight {
//   .toggle--btn {
//     border: $borderWidth solid $borderColor--night;
//     background-color: $bgColor--night;

//     //toggle button
//     &:before {
//       background-color: $toggleBtn-bgColor--night;
//       border: $borderWidth solid $toggleBtn-borderColor--night;
//     }
//     &:after {
//       position: absolute;
//       top: 62%;
//       left: $toggleWidth - ($toggleBtnRadius) - ($borderWidth * 2) - 20px;
//       z-index: 10;
//       width: $toggleBtnRadius / 5;
//       height: $toggleBtnRadius / 5;
//       opacity: 0;
//       background-color: $cloud-bgColor;
//       border-radius: 50%;

//       //crazy ass box-shadow to make the cloud
//       box-shadow: $cloud-bgColor 0 0, $cloud-bgColor 3px 0, $cloud-bgColor 6px 0,
//         $cloud-bgColor 9px 0, $cloud-bgColor 11px 0, $cloud-bgColor 14px 0,
//         $cloud-bgColor 16px 0, $cloud-bgColor 21px -1px 0 1px,
//         $cloud-bgColor 16px -7px 0 -2px, $cloud-bgColor 7px -7px 0 1px,
//         $cloud-borderColor 0 0 0 4px, $cloud-borderColor 6px 0 0 4px,
//         $cloud-borderColor 11px 0 0 4px, $cloud-borderColor 16px 0 0 4px,
//         $cloud-borderColor 21px -1px 0 5px, $cloud-borderColor 16px -7px 0 1px,
//         $cloud-borderColor 7px -7px 0 5px;

//       transition: opacity 100ms ease-in;
//     }
//   }

//   @keyframes starry_star {
//     50% {
//       background-color: rgba(255, 255, 255, 0.1);
//       box-shadow: #fff 30px -3px 0 0, #fff 12px 10px 0 -1px,
//         rgba(255, 255, 255, 0.1) 38px 18px 0 1px, #fff 32px 34px 0 0,
//         rgba(255, 255, 255, 0.1) 20px 24px 0 -1.5px, #fff 5px 38px 0 1px;
//     }
//   }
//   @keyframes bounceIn {
//     0% {
//       opacity: 0;
//       transform: scale(0.3);
//     }
//     50% {
//       opacity: 100;
//       transform: scale(1.1);
//     }
//     55% {
//       transform: scale(1.1);
//     }
//     75% {
//       transform: scale(0.9);
//     }
//     100% {
//       opacity: 100;
//       transform: scale(1);
//     }
//   }
//   //stars
//   .toggle--feature {
//     display: block;
//     position: absolute;
//     top: 9px;
//     left: 52.5%;
//     z-index: 20;
//     width: 4px;
//     height: 4px;
//     border-radius: 50%;
//     background-color: #fff;

//     box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 0,
//       rgba(255, 255, 255, 0.1) 12px 10px 0 -1px, #fff 38px 18px 0 1px,
//       rgba(255, 255, 255, 0.1) 32px 34px 0 0, #fff 20px 24px 0 -1.5px,
//       rgba(255, 255, 255, 0.1) 5px 38px 0 1px;

//     animation: starry_star 5s ease-in-out infinite;

//     &:before {
//       position: absolute;
//       top: -2px;
//       left: -25px;
//       width: 18px;
//       height: 18px;
//       background-color: $toggleBtn-bgColor--night;
//       border-radius: 50%;
//       border: 5px solid $toggleBtn-borderColor--night;

//       box-shadow: $toggleBtn-borderColor--night -28px 0 0 -3px,
//         $toggleBtn-borderColor--night -8px 24px 0 -2px;

//       transform-origin: -6px 130%;
//     }
//   }

//   //what happens once checkbox is checked
//   .toggle--checkbox:checked {
//     & + .toggle--btn {
//       background-color: $bgColor--day;
//       border: $borderWidth solid $borderColor--day;

//       &:before {
//         left: $toggleWidth - ($toggleBtnRadius) - ($borderWidth * 2) - 4px;
//         background-color: $toggleBtn-bgColor--day;
//         border: $borderWidth solid $toggleBtn-borderColor--day;
//       }
//       &:after {
//         opacity: 100;
//         animation-name: bounceIn;
//         animation-duration: 0.6s;
//         animation-delay: 0.1s;
//         animation-fill-mode: backwards;
//         animation-timing-function: ease-in-out;
//       }

//       > .toggle--feature {
//         opacity: 0;
//         box-shadow: rgba(255, 255, 255, 0.1) 30px -3px 0 -4px,
//           rgba(255, 255, 255, 0.1) 12px 10px 0 -5px, #fff 38px 18px 0 -3px,
//           rgba(255, 255, 255, 0.1) 32px 34px 0 -4px, #fff 20px 24px 0 -5.5px,
//           rgba(255, 255, 255, 0.1) 5px 38px 0 -3px;
//         animation: none;

//         &:before {
//           left: 25px;
//           transform: rotate(70deg);
//         }
//       }
//     }
//   }
// }

// .toggle--daynight,
// .toggle--like {
//   .toggle--btn {
//     position: relative;
//     height: $toggleHeight;
//     width: $toggleWidth;
//     border-radius: $toggleHeight;

//     //toggle button
//     &:before {
//       position: absolute;
//       top: 2px;
//       left: 4px;
//       width: $toggleBtnRadius;
//       height: $toggleBtnRadius;
//       border-radius: 50%;
//     }
//   }
// }
</style>
