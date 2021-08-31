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
.btn {
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  outline: none;
  width: fit-content;
  font: "KumbhSans";
  background-color: #333;
  color: $lightgrey;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    background-color: $blue;
    color: $lightgrey;
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
