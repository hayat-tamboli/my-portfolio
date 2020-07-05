<template>
  <div class="button">
    <button style="background:">
      <a href="link">{{ name }}</a>
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {
    name: String,
    link: String
  }
};
</script>
