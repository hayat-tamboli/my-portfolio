<template>
  <div id="app">
    <Header></Header>
    <Home></Home>
  </div>
</template>

<script>
import Header from "./components/header";
import Home from "./components/home";
export default {
  name: "App",
  components: {
    Header,
    Home
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
}
</style>
