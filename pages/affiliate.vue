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
          this.user.firstname = res.data.data.firstname;
          this.user.lastname = res.data.data.lastname;
          this.user.email = this.$route.query.email;
        })
        .catch(err => {
          console.log(err);
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
