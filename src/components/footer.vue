<template>
  <div id="footer">
    <a
      class="instagram"
      href="https://www.instagram.com/hayattamboli/"
      target="_blank"
      ><instagram-icon size="1.5x" class="custom-class"></instagram-icon
    ></a>
    <a
      class="linkedin"
      href="https://linkedin.com/in/hayat-tamboli"
      target="_blank"
      ><linkedin-icon size="1.5x" class="custom-class"></linkedin-icon
    ></a>
    <a class="github" href="https://github.com/hayat-tamboli" target="_blank"
      ><github-icon size="1.5x" class="custom-class"></github-icon
    ></a>
    <a class="twitter" href="https://twitter.com/HayatTamboli" target="_blank"
      ><twitter-icon size="1.5x" class="custom-class"></twitter-icon
    ></a>
    <a class="dribbble" href="https://dribbble.com/hayattamboli" target="_blank"
      ><dribbble-icon size="1.5x" class="custom-class"></dribbble-icon
    ></a>
  </div>
</template>

<script>
import {
  InstagramIcon,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  DribbbleIcon,
} from "vue-feather-icons";
export default {
  name: "Footer",
  components: {
    InstagramIcon,
    LinkedinIcon,
    GithubIcon,
    TwitterIcon,
    DribbbleIcon,
  },
};
</script>

<style lang="scss" scoped>
$blue: #2c60e6;
$lightgrey: #f7f7f7;
$secondarycolor: #213059;
$grey: #686868;
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 128px;
  background-color: #000;
  .instagram {
    text-decoration: none;
    color: $grey;
    transition: all 0.3s ease-in;
    &:hover {
      color: #8a3ab9;
    }
  }
  .linkedin {
    text-decoration: none;
    color: $grey;
    transition: all 0.3s ease-in;
    &:hover {
      color: #0e76a8;
    }
  }
  .github {
    text-decoration: none;
    color: $grey;
    transition: all 0.3s ease-in;
    &:hover {
      color: #fff;
    }
  }
  .twitter {
    text-decoration: none;
    color: $grey;
    transition: all 0.3s ease-in;
    &:hover {
      color: #1da1f2;
    }
  }
  .dribbble {
    text-decoration: none;
    color: $grey;
    transition: all 0.3s ease-in;
    &:hover {
      color: #ea4c89;
    }
  }
  .custom-class {
    margin: 16px;
  }
}
</style>
