<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: KumbhSans;
  src: url("../src/assets/fonts/KumbhSans-Regular.ttf");
}
$blue: #2c60e6;
$lightgrey: #fefeff;
$secondarycolor: #213059;
:root {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "KumbhSans", sans-serif;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  background: $lightgrey;
}
::selection {
  background: $blue;
  color: $lightgrey;
}
::-webkit-scrollbar {
  width: 15px;
  background: $lightgrey;
}
::-webkit-scrollbar-thumb {
  width: 15px;
  background: $blue;
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
  background: #292929;
  color: #f7f7f7;
  .header {
    background: #29292985 !important;
    .links a {
      color: white !important;
    }
  }
  .card {
    background: #000000 !important;
  }
  .forms input,
  textarea {
    background: #333 !important;
  }
  :root::-webkit-scrollbar {
    width: 15px;
    background: #292929;
  }
  ::-webkit-scrollbar-thumb {
    width: 15px;
    background: $blue;
    border-radius: 500px;
  }
}
</style>
