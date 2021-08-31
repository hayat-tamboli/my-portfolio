<template>
  <a :href="weblink" class="card" target="_blank" :style="backcolor">
    <img :src="img_source" alt />
    <div class="card-content">
      <h1 :style="headcolor">{{ main }}</h1>
      <div class="tags">
        <div class="single-tag" v-for="tags in tagsArr" :key="tags">
          {{ tags }}
        </div>
      </div>
      <h4 id="description">{{ desc }}</h4>
      <!-- <a class="btn" :href="weblink" target="_blank">
        Read the case study
        <arrow-right-circle-icon
          size="1.2x"
          class="custom-class"
        ></arrow-right-circle-icon>
      </a> -->
    </div>
  </a>
</template>

<script>
// import { ArrowRightCircleIcon } from "vue-feather-icons";
export default {
  name: "CardComp",
  props: {
    img_source: String,
    main: String,
    desc: String,
    weblink: String,
    repo: String,
    tagsArr: Array,
    backcolor: String,
    headcolor: String,
  },
  // components: {
  //   ArrowRightCircleIcon,
  // },
};
</script>

<style lang="scss" scoped>
.custom-class {
  margin-left: 8px;
}
img {
  width: 600px;
  border-radius: 0.5rem;
}
.card {
  background: #ebe8fb;
  display: flex;
  margin: 1rem 0;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
  // width: 80%;
  text-decoration: none;
  color: #000000;
  // transform-style: preserve-3d;
  #description {
    margin: 8px 0px;
    color: #5a5485;
    font-weight: 500;
    font-size: 1.2rem;
  }
}
.card-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  h1 {
    margin: 0;
    color: #5d48e8;
  }
  .tags {
    transform: translateZ(20px);
    margin: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    .single-tag {
      // background-color: #eef2fc;
      background-color: #ffffff96;
      border-radius: 50px;
      padding: 8px 16px;
      width: fit-content;
      margin: 4px 8px 4px 0;
      font-size: 0.8rem;
      font-weight: 600;
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
@media only screen and (max-width: 1000px) {
  img {
    width: 300px;
  }
  .card {
    flex-direction: column;
    width: 100%;
    .card-content {
      padding: 1rem;
    }
  }
  .btn {
    display: none;
  }
}
</style>
