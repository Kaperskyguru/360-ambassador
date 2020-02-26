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
  },
  head: {
    title: "Register",
    titleTemplate:
      "%s | 360 Ambasador | Quickly start &amp; grow your online business with 360 Ambassador",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Quickly start &amp; grow your online business with 360 Ambassador"
      }
    ]
  }
};
</script>

