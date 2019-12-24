<template>
  <a
    :class="[fill ? 'btn__curved--yellow' : 'btn__bordered-curved--yellow']"
    class="color-blue text-bold mr-md-3"
    href="#"
    role="button"
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