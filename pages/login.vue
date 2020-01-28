<template>
  <login></login>
</template>

<script>
import Login from "~/components/pages/Login";
export default {
  components: {
    Login
  },

  fetch({ store }) {
    // store.dispatch("role/get");
  }
};
</script>

<style>
</style>