<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <sign-nav>Advertiser SIGN UP FORM</sign-nav>
      <ad-form :user="user" />
    </div>
  </section>
</template>

<script>
import SignNav from "~/components/commons/SignNav";
import AdForm from "~/components/partials/AdvertiserForm";
export default {
  auth: false,
  components: {
    SignNav,
    AdForm
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
          // console.log(this.user);
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
