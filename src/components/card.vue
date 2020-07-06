<template>
  <div class="card">
    <div class="img">
      <img
        :src="img_source"
        alt
        style="border-radius: 6px 6px 0 0"
        width="300px"
      />
    </div>
    <div class="card-text">
      <h2>{{ main }}</h2>
      <h5 id="description">{{ desc }}</h5>
      <div class="card-btns">
        <button class="card-btns-items" style="background: #333333 ">
          <a :href="gitlink" style="font-size:1rem" target="_blank"
            >Github repo</a
          >
        </button>
        <button class="card-btns-items" style="background: #2257ea ">
          <a :href="weblink" style="font-size:1rem" target="_blank">website</a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",
  props: {
    img_source: String,
    main: String,
    desc: String,
    gitlink: String,
    weblink: String,
    repo: String
  }
};
</script>

<style lang="scss" scoped>
.card {
  background: #ffffff;
  margin: 2rem;
  border-radius: 6px;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.1) inset;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.2);
  }
  transition: all 0.2s ease-in-out;
  max-width: 300px;
}
.card-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  #description {
    max-width: 180px;
    text-align: center;
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
