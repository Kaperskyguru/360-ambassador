<template>
  <div class="error-404 text-center">
    <h1>This page doesn’t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
    <nuxt-link to="/">
      <button class="btn btn-primary">Run Back Home</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "error-404",
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

