<template>
  <span>
    <register :role="role" />
  </span>
</template>

<script>
import Register from "~/components/pages/Register";
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
      return this.getRoleID("promoter");
    }
  }

  // async fetch({ store, auth, error }) {
  //   try {
  //     await store.dispatch("role/get");
  //   } catch (error) {
  //     error({
  //       statusCode: 500,
  //       message: error
  //     });
  //   }
  // }
};
</script>

<style>
</style>