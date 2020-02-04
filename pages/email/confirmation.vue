<template>
  <div>You will be redirected in seconds...</div>
</template>

<script>
export default {
  auth: false,

  created() {
    this.$store
      .dispatch("user/confirmEmail", this.$route.token)
      .then(res => {
        if (res.data.code == 200 && res.data.data.is_email_confirmed) {
          this.successAlert();
          this.redirectByRole(res.data.data.role.name);
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

    redirectByRole(role) {
      switch (role) {
        case "admin":
          this.$router.push("/advertiser");
          break;

        case "merchant":
          this.$router.push("/advertiser");
          break;

        case "promoter":
          this.$router.push("/affiliate");
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