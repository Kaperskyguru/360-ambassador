<template>
  <span>
    <register :role="role" />
  </span>
</template>

<script>
import Register from "~/components/pages/Register.ad";
import { mapGetters } from "vuex";
export default {
  auth: false,
  components: {
    Register
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      getRoleID: "role/getRoleIDByName"
    }),
    role() {
      return this.getRoleID("merchant");
    }
  }
};
</script>

<style>
</style>