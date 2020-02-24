<template>
  <confirmation :user="user" />
</template>

<script>
import Confirmation from "~/components/pages/Confirmation";
export default {
  auth: false,
  components: {
    Confirmation
  },
  data() {
    return {
      user: {
        email: String,
        id: String
      }
    };
  },

  mounted() {
    this.user.email = this.$route.query.email;
    this.user.id = this.$route.query.user_id;
  }
};
</script>

<style>
</style>