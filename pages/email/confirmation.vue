<template>
  <div class="container-fluid confirmation">
    <div class="col-12">
      <brand />
    </div>
    <div class="row justify-content-center align-content-center">
      <img
        src="~assets/images/email.png"
        alt=""
        class="d-block text-center mb-5"
      />
      <h2 class="col-12 color-yellow confirmation__header text-center">
        Email Verification
      </h2>
      <span class="col-12 col-md-5" v-if="verified">
        <p class="col-12 color-white text-center confirmation__text mb-4">
          Your email address has been verified
          <span class="text-success">successfully</span>.<br />
          <i>Please login to update your profile.</i>
        </p>
        <div class="col-12 mb-4 d-flex justify-content-center">
          <curved-button to="/login">Login</curved-button>
        </div>
      </span>
      <span class="col-12 col-md-5" v-else>
        <p class="col-12 color-white text-center confirmation__text mb-4">
          Email verification
          <span class="text-danger">Failed</span>. <br />
          <i>Please consider resending email verication.</i>
        </p>
        <div class="col-12 mb-4 d-flex justify-content-center">
          <curved-button to="#">Resend Email</curved-button>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import Brand from "~/components/partials/Brand";
import CurvedButton from "~/components/commons/buttons/CurvedButton";
export default {
  components: {
    CurvedButton,
    Brand
  },

  data() {
    return {
      verified: false
    };
  },
  auth: false,

  created() {
    this.$store
      .dispatch("user/confirmEmail", this.$route.query.token)
      .then(res => {
        if (res.data.code == 200 || res.data.code == 204) {
          this.successAlert();
          this.verified = true;
          // this.redirectByRole(res.data.data.role.name, res.data.data._id);
        }
      })
      .catch(err => {
        // console.log(err);
        this.errorAlert();
        // this.redirectByRole("");
      });
  },

  methods: {
    successAlert() {
      this.$swal({
        text: "Email verified successfully",
        icon: "success"
      });
    },
    errorAlert() {
      this.$swal({
        text: "Email was not verified successfully",
        icon: "error"
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

