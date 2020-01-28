<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <sign-nav>AFFILIATE SIGN UP FORM</sign-nav>
      <a-form :user="user" />
    </div>
  </section>
</template>

<script>
import SignNav from "~/components/commons/SignNav";
import AForm from "~/components/partials/AffiliateForm";
export default {
  auth: false,
  components: {
    SignNav,
    AForm
  },

  data() {
    return {
      user: []
    };
  },

  methods: {
    getUserById(id) {
      this.$store
        .dispatch("user/find", id)
        .then(res => {
          this.user.id = res.data.data._id;
          this.user.firstName = res.data.data.firstName;
          this.user.lastName = res.data.data.lastName;
          this.user.email = this.$route.query.email;
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  },

  created() {
    this.getUserById(this.$route.query.user_id);
  }
};
</script>

<style>
</style>
