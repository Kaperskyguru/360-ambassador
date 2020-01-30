<template>
  <ValidationObserver
    v-slot="{ handleSubmit }"
    class="col-12 align-self-center p-0"
  >
    <div class="alert alert-danger alert-dismissible fade show" v-show="alert">
      Username and password combination is wrong
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <form
      @submit.prevent="handleSubmit(login)"
      method="post"
      class="col-12 align-self-center p-0"
    >
      <ValidationProvider name="Username" rules="required" v-slot="{ errors }">
        <div class="col-12 form__group">
          <input
            type="text"
            class="col-12 form__input"
            id="regEmail"
            placeholder="Username"
            v-model="form.username"
          />
          <span>{{ errors[0] }}</span>
          <!-- <label for="regEmail" class="form__label color-grey-1"
            >Username</label
          > -->
        </div>
      </ValidationProvider>

      <ValidationProvider name="Password" rules="required" v-slot="{ errors }">
        <div class="col-12 form__group">
          <input
            v-model="form.password"
            type="password"
            class="col-12 form__input"
            id="logPassword"
            placeholder="Password"
            required
          />
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <div class="color-blue text-right p-3 text-bold">
        <nuxt-link class="color-blue" to="/login">Forgot Password?</nuxt-link>
      </div>
      <!-- <label for="logPassword" class="form__label color-grey-1">password</label> -->

      <div class="col-12 form__group">
        <big-design-button>SIGN IN</big-design-button>
      </div>
    </form>
    <loading :show="show" :label="label" :overlay="overlay"></loading>
  </ValidationObserver>
</template>

<script>
import BigDesignButton from "~/components/commons/buttons/BigDesignButton";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { mapState } from "vuex";

export default {
  auth: "guest",
  components: {
    BigDesignButton,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      show: false,
      overlay: true,
      label: "Logging into your account, please wait...",
      alert: false
    };
  },
  computed: {
    ...mapState({
      roles: state => {
        return state.role.roles;
      }
    })
  },
  methods: {
    async login() {
      this.show = true;
      // try {
      this.$store
        .dispatch("user/login", this.form)
        .then(res => {
          if (this.$auth.loggedIn) {
            this.show = false;
            this.redirectByRole(this.$auth.user.role.name);
          }
        })
        .catch(err => {
          this.show = false;
          console.log(err);
          if (err.response.data.code == 403) {
            this.$swal({
              text: "Please verify your account",
              icon: "error"
            });
          } else {
            this.alert = true;
            // this.$notify({
            //   text: "Username and password combination is wrong",
            //   type: "error",
            //   group: "alerts"
            // });
          }
        });
    },

    redirectByRole(role) {
      switch (role) {
        case "admin":
          this.$router.push("/merchants");
          break;

        case "merchant":
          this.$router.push("/merchants");
          break;

        case "promoter":
          this.$router.push("/affiliates");
          break;

        default:
          this.$router.push("/login");
          break;
      }
    }

    // findRole(role) {
    //   const rol = this.roles.filter(item => {
    //     return item.name == role;
    //   })[0];
    //   return rol._id;
    // }
  }
};
</script>

<style>
</style>