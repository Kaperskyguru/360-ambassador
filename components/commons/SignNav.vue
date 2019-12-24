<template>
  <nav class="navbar navbar-expand-lg navbar-light w-100">
    <brand class="footer__logo-text color-blue text-bold" />
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
import Brand from "~/components/partials/Brand";
export default {
  components: {
    Brand
  }
};
</script>

<style>
</style>