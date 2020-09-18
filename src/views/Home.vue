<template>
  <div id="main-home" :class="{ dark: darkMode }">
    <Header @dark-mode="darkMode = !darkMode"></Header>
    <div id="spaced-clock"></div>
    <LandingPage></LandingPage>
    <About></About>
    <Portfolio></Portfolio>
    <Skills></Skills>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/home.vue";
import Header from "@/components/header.vue";
import About from "@/components/about.vue";
import Portfolio from "@/components/portfolio.vue";
import Skills from "@/components/skills.vue";
import Contact from "@/components/contact.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    LandingPage,
    Header,
    About,
    Portfolio,
    Skills,
    Contact,
    Footer
  },
  data() {
    return {
      darkMode: false
    };
  }
};
</script>

<style lang="scss" scoped>
#spaced-clock {
  height: 3rem;
}
</style>
