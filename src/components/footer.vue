<template>
  <div id="footer">
    <instagram-icon size="1.5x" class="custom-class"></instagram-icon>
    <linkedin-icon size="1.5x" class="custom-class"></linkedin-icon>
    <github-icon size="1.5x" class="custom-class"></github-icon>
    <twitter-icon size="1.5x" class="custom-class"></twitter-icon>
  </div>
</template>

<script>
import {
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
} from "vue-feather-icons";
export default {
  name: "Footer",
  components: {
    InstagramIcon,
    LinkedinIcon,
    GithubIcon,
    TwitterIcon,
  },
};
</script>

<style lang="scss" scoped>
$blue: #2c60e6;
$lightgrey: #f7f7f7;
$secondarycolor: #213059;
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  .custom-class {
    margin: 24px;
  }
}
</style>
