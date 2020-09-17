<template>
  <div id="app" :class="{ dark: darkMode }">
    <Preloader></Preloader>
    <go-top
      bg-color="#2257ea"
      :has-outline="false"
      :size="60"
      :bottom="60"
      :right="60"
      box-shadow="0px 3px 10px rgba(34, 87, 234,0.3)"
    ></go-top>
    <Header></Header>
    <Home></Home>
    <About></About>
    <Portfolio></Portfolio>
    <Skills></Skills>
    <Contact></Contact>
    <Footer class="invert-again"></Footer>
  </div>
</template>

<script>
import GoTop from "@inotom/vue-go-top";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Preloader from "./components/preloader";
export default {
  name: "App",
  components: {
    Header,
    Home,
    About,
    Portfolio,
    Skills,
    Contact,
    Footer,
    Preloader,
    GoTop,
  },
  data() {
    return {
      darkMode: false,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
$blue: #2257ea;
$lightgrey: #f7f7f7;
$secondarycolor: #213059;
:root {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  background: $lightgrey;
}
::selection {
  background: $blue;
  color: #f7f7f7;
}
::-webkit-scrollbar {
  width: 15px;
  color: $lightgrey;
  background: #213059;
}
::-webkit-scrollbar-thumb {
  width: 15px;
  background: $blue;
  border-radius: 500px;
}
#progress-el {
  /* progress bar */
  background-color: $blue !important;
  max-width: 100vw;
}
button {
  border: none;
  border-radius: 6px;
  margin: 0.5rem 0;
  padding: 0.5rem 18px;
  outline: none;
  width: fit-content;
  a {
    color: $lightgrey;
    text-decoration: none;
    font-size: 1.2rem;
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);
  }
  transition: all 0.2s ease-in-out;
}
@media only screen and (max-width: 700px) {
  :root {
    font-size: 14px;
  }
}
.dark {
  transition: color 300ms, background-color 300ms;
  filter: invert(1) hue-rotate(180deg);
  img,
  iframe,
  button,
  .invert-again {
    filter: invert(1) hue-rotate(180deg);
  }
  background: #d4d4d4;
}
</style>
