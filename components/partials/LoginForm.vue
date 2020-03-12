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
      <ValidationProvider
        name="Email"
        rules="required|email"
        v-slot="{ errors }"
      >
        <div class="col-12 form__group">
          <input
            type="email"
            class="col-12 form__input"
            id="regEmail"
            placeholder="Email"
            v-model="form.email"
            required
          />
          <span class="input-error">{{ errors[0] }}</span>
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
          <span class="input-error">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <div class="color-blue text-right p-3 text-bold">
        <nuxt-link class="color-blue" to="/login">Forgot Password?</nuxt-link>
      </div>
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
import Loading from "~/components/commons/Loading";
export default {
  auth: "guest",
  components: {
    BigDesignButton,
    ValidationProvider,
    ValidationObserver,
    Loading
  },
  data() {
    return {
      form: {
        username: "kaperskyguru",
        password: "",
        email: ""
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
            this.redirectByRole(this.$auth.user.role.name);
            this.show = false;
          }
        })
        .catch(err => {
          this.show = false;
          console.log(err);
          const { response } = err;
          if (response !== undefined) {
            if (response.data.code == 403) {
              this.$swal({
                text: "Please verify your account",
                icon: "error"
              });
            } else {
              this.alert = true;
            }
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

