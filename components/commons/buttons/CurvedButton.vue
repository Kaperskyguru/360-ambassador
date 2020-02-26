<template>
  <nuxt-link
    :class="[fill ? 'btn__curved--yellow' : 'btn__bordered-curved--yellow']"
    class="color-blue text-bold mr-md-3"
    :to="to"
    role="button"
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
    to: {
      type: String,
      default: "#"
    }
  }
};
</script>

