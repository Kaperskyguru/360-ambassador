<template>
  <ValidationObserver
    v-slot="{ handleSubmit }"
    class="col-12 align-self-center p-0"
  >
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
            placeholder="password"
            required
          />
          <span>{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
      <!-- <label for="logPassword" class="form__label color-grey-1">password</label> -->

      <div class="col-12 form__group">
        <big-design-button>SIGN IN AFFILIATE</big-design-button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import BigDesignButton from "~/components/commons/BigDesignButton";
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
      }
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
      await this.$store.dispatch("user/login", this.form);
      await this.$store.dispatch("user/me");

      if (this.$auth.loggedIn) {
        this.redirectByRole(this.$auth.user.role.name);
      }
    },

    redirectByRole(role) {
      switch (role) {
        case "Admin":
          this.$router.push("/merchants");
          break;

        case "merchant":
          this.$router.push("/merchants");
          break;

        case "Promoter":
          this.$router.push("/affiliates");
          break;

        default:
          this.$router.push("/login");
          break;
      }
    },

    findRole(role) {
      const rol = this.roles.filter(item => {
        return item._id == role;
      })[0];
      return rol.name;
    }
  }
};
</script>

<style>
</style>