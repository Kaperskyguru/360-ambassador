<template>
  <nav class="navbar navbar-expand-lg navbar-light w-100">
    <nuxt-link class="navbar-brand color-blue" to="/">
      <logo /><br />ambassador
    </nuxt-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <p
        class="navbar-text text-bold text-uppercase color-blue mt-md-5 pt-md-5"
      >
        <slot />
      </p>
    </div>
  </nav>
</template>

<script>
import Logo from "~/components/commons/Logo";
export default {
  components: {
    Logo
  }
};
</script>

<style>
</style>