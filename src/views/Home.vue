<template>
  <div id="main-home" :class="{ dark: darkMode }">
    <Header @dark-mode="darkMode = !darkMode"></Header>
    <LandingPage></LandingPage>
    <Description></Description>
    <Portfolio></Portfolio>
    <Contact></Contact>
    <hr />
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/hero.vue";
import Header from "@/components/header.vue";
import Description from "@/components/desc.vue";
import Portfolio from "@/components/portfolio.vue";
import Contact from "@/components/contact.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    LandingPage,
    Header,
    Description,
    Portfolio,
    Contact,
    Footer,
  },
  data() {
    return {
      darkMode: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
