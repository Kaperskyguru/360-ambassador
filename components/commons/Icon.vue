<template>
  <img :src="icon" :alt="alt" />
</template>

<script>
export default {
  props: {
    icon: String,
    alt: { type: String, default: "image" }
  }
};
</script>

<style>
</style>