<template>
  <div id="projects">
    <h1>My Projects</h1>
    <div class="card-deck">
      <CardComp
        main="Building an inventory management system"
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        :tagsArr="InventoryMgmtTags"
        desc="Designed a product experience for pharmacists to keep an easy check of the medicine inventory and also speed up the process of managing it."
        img_source="https://cdn.dribbble.com/users/5732576/screenshots/15867006/media/50cec76714d5aec354e4cbf6619d423a.png"
        weblink="https://bootcamp.uxdesign.cc/case-study-inventory-management-for-medical-stores-690ad67b9bf7"
      ></CardComp>
    </div>
  </div>
</template>

<script>
import CardComp from "./card";
export default {
  name: "Portfolio",
  components: {
    CardComp,
  },
  data: function() {
    return {
      InventoryMgmtTags: ["🎨UX/UI", "💻Web design", "💊Medtech"],
    };
  },
};
</script>

<style lang="scss" scoped>
#projects {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-bottom: 0;
  }
  .card-deck {
    padding: 16px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
