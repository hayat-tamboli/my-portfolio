<template>
  <div id="projects">
    <h1>Recent work</h1>
    <div class="card-deck">
      <div v-tilt="{ perspective: 2500 }" class="singleCard">
        <CardComp
          main="Medicotary"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          :tagsArr="InventoryMgmtTags"
          desc="Building an inventory management system"
          img_source="https://cdn.dribbble.com/users/5732576/screenshots/15867006/media/50cec76714d5aec354e4cbf6619d423a.png"
          weblink="https://bootcamp.uxdesign.cc/case-study-inventory-management-for-medical-stores-690ad67b9bf7"
        ></CardComp>
      </div>
      <div v-tilt="{ perspective: 2500 }" class="singleCard">
        <CardComp
          main="Runbhumi"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          :tagsArr="RunbhumiTags"
          desc="Creating a new platform to connect sports enthusiasts"
          img_source="https://cdn.dribbble.com/users/5732576/screenshots/14169220/media/98eb7a8e7cf77160ac832e8473190039.png"
          weblink=""
          backcolor="background: #D6EFF0"
          headcolor="color: #00ADB5"
        ></CardComp>
      </div>
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
      RunbhumiTags: [
        "📃UX research",
        "🧠Design thinking",
        "📱App design",
        "👥Social media",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#projects {
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  padding: 64px;
  flex-direction: column;
  h1 {
    margin-bottom: 1rem;
  }
}
@media only screen and (max-width: 800px) {
  #projects {
    padding: 16px;
    .card-deck {
      padding: 0;
    }
  }
}
</style>
