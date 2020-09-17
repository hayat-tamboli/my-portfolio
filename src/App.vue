<template>
  <div id="app">
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
    <Footer></Footer>
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
    GoTop
  }
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
  color: $secondarycolor;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
}
::selection {
  background: $blue;
  color: #f7f7f7;
}
::-webkit-scrollbar {
  width: 15px;
  color: $lightgrey;
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
#app {
  background: $lightgrey;
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
</style>
