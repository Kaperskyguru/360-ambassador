<template>
  <nuxt-link
    to="login"
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
    }
  }
};
</script>

<style>
</style>