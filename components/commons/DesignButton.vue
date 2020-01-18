<template>
  <nuxt-link
    :to="$auth.loggedIn ? 'affiliates' : 'login'"
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
  },
  mounted() {
    if (this.$auth.loggedIn) {
      this.signinText = "Goto Dashboard";
    }
  }
};
</script>

<style>
</style>