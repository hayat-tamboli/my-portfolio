<template>
  <div id="app">
    <VueScrollProgress></VueScrollProgress>
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
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Header,
    Home,
    About,
    Portfolio,
    Skills,
    Contact,
    Footer
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
  color: $blue;
}
::-webkit-scrollbar {
  width: 15px;
  color: $lightgrey;
}
::-webkit-scrollbar-thumb {
  width: 15px;
  background: $blue;
}
#progress-el {
  /* progress bar */
  background-color: $blue !important;
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
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
  }
  transition: all 0.2s ease-in-out;
}
@media only screen and (max-width: 700px) {
  :root {
    font-size: 14px;
  }
}
</style>
