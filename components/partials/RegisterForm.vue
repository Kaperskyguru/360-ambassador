<template>
  <div
    class="row align-content-center justify-content-center pt-5"
    style="margin:4rem auto"
  >
    <h2 class="col-12 color-blue form__header"><slot></slot></h2>
    <p class="col-12 color-grey-2">
      Sign up now! Start by confirming your email below
    </p>
    <ValidationObserver
      v-slot="{ handleSubmit }"
      class="col-12 align-self-center p-0"
    >
      <form
        @submit.prevent="handleSubmit(register)"
        method="post"
        class="col-12 align-self-center p-0"
      >
        <ValidationProvider
          name="Fullname"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="col-12 form__group">
            <input
              type="text"
              class="col-12 form__input"
              id="fullname"
              placeholder="Full Name *"
              required
              name="fullname"
              v-model="form.fullname"
            />
            <span class="input-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
        >
          <div class="col-12 form__group">
            <input
              type="email"
              class="col-12 form__input"
              id="email"
              placeholder="Email"
              required
              name="email"
              v-model="form.email"
            />

            <!-- <label for="email" class="form__label color-grey-1">Email</label> -->
            <span class="input-error" id="email-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="Password"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="col-12 form__group">
            <input
              type="password"
              class="col-12 form__input"
              id="password"
              placeholder="Password *"
              required
              name="password"
              v-model="form.password"
            />
            <span class="input-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="ConfirmPassword"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="col-12 form__group">
            <input
              type="password"
              class="col-12 form__input"
              id="password"
              placeholder="Confirm Password *"
              required
              name="confirm-password"
              v-model="form.passwordConfirm"
            />
            <span class="input-error">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <div class="col-12 form__group">
          <big-design-button>NEXT</big-design-button>
        </div>
      </form>
    </ValidationObserver>
    <loading :show="show" :label="label" :overlay="overlay"></loading>
  </div>
</template>

<script>
import BigDesignButton from "~/components/commons/buttons/BigDesignButton";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  props: {
    action: {
      type: String
    },
    role: {
      type: String
    }
  },
  data() {
    return {
      form: {},
      show: false,
      overlay: true,
      label: "Registering your account, please wait..."
    };
  },
  components: {
    BigDesignButton,
    ValidationProvider,
    ValidationObserver
  },

  methods: {
    async register() {
      // Get Roles;

      this.show = true;
      this.form.role = this.role;

      this.$store
        .dispatch("user/register", this.form)
        .then(res => {
          this.show = false;
          this.$router.push({
            name: "confirmation",
            query: { email: res.data.email, user_id: res.data._id }
          });
        })
        .catch(err => {
          this.show = false;
          const error = document.getElementById("email-error");
          error.textContent = err.response.data.message;
        });
    }
  }
};
</script>

