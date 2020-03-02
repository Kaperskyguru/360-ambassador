<template>
  <img
    :src="icon"
    :alt="alt"
    :style="{ 'border-radius': round + '% !important;' }"
  />
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: String,
    alt: { type: String, default: "image" },
    round: { type: String, default: "0" }
  }
};
</script>

<style scoped>
img {
  vertical-align: middle;
  width: 25px;
  height: 25px;
}
</style>