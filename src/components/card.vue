<template>
  <div class="card">
    <img :src="img_source" alt style="border-radius: 24px" />
    <div class="card-content">
      <h1>{{ main }}</h1>
      <div class="tags">
        <div class="single-tag" v-for="tags in tagsArr" :key="tags">
          {{ tags }}
        </div>
      </div>
      <h4 id="description">{{ desc }}</h4>
      <a class="btn" :href="weblink" target="_blank">
        Read the case study
        <arrow-right-circle-icon
          size="1.2x"
          class="custom-class"
        ></arrow-right-circle-icon>
      </a>
    </div>
  </div>
</template>

<script>
import { ArrowRightCircleIcon } from "vue-feather-icons";
export default {
  name: "CardComp",
  props: {
    img_source: String,
    main: String,
    desc: String,
    weblink: String,
    repo: String,
    tagsArr: Array,
  },
  components: {
    ArrowRightCircleIcon,
  },
};
</script>

<style lang="scss" scoped>
.custom-class {
  margin-left: 8px;
}
img {
  width: 500px;
}
.card {
  background: #ffffff;
  display: flex;
  margin: 1rem;
  border-radius: 24px;
  transition: all 0.2s ease-in-out;
  width: 80%;
  #description {
    margin: 8px 0px;
    color: #626369;
    font-weight: 500;
  }
}
.card-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 1rem;
  h1 {
    margin: 0;
  }
  .tags {
    display: flex;
    .single-tag {
      background-color: #eef2fc;
      border-radius: 50px;
      padding: 8px 16px;
      width: fit-content;
      margin-right: 8px;
      font-size: 0.8rem;
    }
  }
  .card-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .card-btns-items {
      margin: 0 0.5rem;
      color: #f7f7f7;
    }
  }
}
</style>
