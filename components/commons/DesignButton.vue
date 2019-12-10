<template>
  <a
    :class="[
      fill
        ? 'btn__square-curved--yellow color-black'
        : 'btn__bordered-square-curved--yellow color-white'
    ]"
    href="#"
  >
    <slot />
  </a>
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