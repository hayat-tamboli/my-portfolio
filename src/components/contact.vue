<template>
  <div id="contact">
    <h1>Get in touch</h1>
    Have a project in mind? or just wanna chat? Say 👋
    <div class="content">
      <a v-tilt="{ glare: true }" href="mailto:hayat.tamboli@gmail.com"
        ><mail-icon size="1.1x" class="icons"></mail-icon
        ><span>Mail me</span></a
      >
      or
      <a v-tilt="{ glare: true }" href="https://twitter.com/HayatTamboli"
        ><twitter-icon size="1.1x" class="icons"></twitter-icon
        ><span>DM me</span></a
      >
    </div>
  </div>
</template>

<script>
import { MailIcon, TwitterIcon } from "vue-feather-icons";

export default {
  name: "Contact",
  components: {
    MailIcon,
    TwitterIcon,
  },
};
</script>

<style lang="scss" scoped>
$blue: #2c60e6;
#contact {
  display: flex;
  justify-content: space-around;
  padding: 64px;
  flex-direction: column;
  h1 {
    margin-bottom: 0;
  }
  .content {
    margin: 64px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    a {
      width: 300px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #6c707a;
      font-size: 1.2rem;
      font-weight: 600;
      background-color: #eef2fc00;
      padding: 16px;
      // border-radius: 16px;
      border-radius: 0.5rem;
      transition: all 0.3s;
      &:hover {
        background-color: #eef2fc;
        color: #000000;
      }
      span {
        margin-top: 6px;
      }
      .icons {
        margin-right: 8px;
      }
    }
  }
}
@media only screen and (max-width: 900px) {
  #contact {
    padding: 16px;
    .content {
      flex-direction: column;
    }
  }
}
</style>
