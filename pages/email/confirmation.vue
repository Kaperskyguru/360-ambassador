<template>
  <div>You will be redirected in seconds...</div>
</template>

<script>
export default {
  auth: false,

  created() {
    this.$store
      .dispatch("user/confirmEmail", this.$route.query.token)
      .then(res => {
        if (res.data.code == 200 || res.data.code == 204) {
          this.successAlert();
          this.redirectByRole(res.data.data.role.name, res.data.data._id);
        }
      })
      .catch(err => {
        console.log(err);

        this.errorAlert();
        this.redirectByRole("");
      });
  },

  methods: {
    successAlert() {
      this.$swal({
        text: "Email confirmed successfully",
        icon: "success",
        confirmButtonText: "Ok",
        showLoaderOnConfirm: true
      });
    },
    errorAlert() {
      this.$swal({
        text: "Email was not confirmed successfully",
        icon: "error",
        confirmButtonText: "Ok",
        showLoaderOnConfirm: true
      });
    },

    redirectByRole(role, id = "") {
      switch (role) {
        case "admin":
          this.$router.push(`/advertiser?user_id=${id}`);
          break;

        case "merchant":
          this.$router.push(`/advertiser?user_id=${id}`);
          break;

        case "promoter":
          this.$router.push(`/affiliate?user_id=${id}`);
          break;

        default:
          this.$router.push("/");
          break;
      }
    }
  }
};
</script>

<style>
</style>