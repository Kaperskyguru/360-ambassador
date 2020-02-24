<template>
  <nuxt-link
    :to="link"
    :class="[
      fill
        ? 'btn__square-curved--yellow color-black'
        : 'btn__bordered-square-curved--yellow color-white'
    ]"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    fill: {
      type: Boolean,
      default: true
    },
    link: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
</style>