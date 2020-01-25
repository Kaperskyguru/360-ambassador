<template>
  <div class="row align-items-center">
    <h2 class="col-12 color-blue form__header"><slot></slot></h2>
    <p class="col-12 color-grey-1">
      Sign up now! Start by confirming your email below
    </p>
    <form
      @submit.prevent="register"
      method="post"
      class="col-12 align-self-center p-0"
    >
      <div class="col-12 form__group">
        <input
          type="text"
          class="col-12 form__input"
          id="regEmail"
          placeholder="First Name *"
          required
          name="firstname"
          v-model="form.firstname"
        />
        <label for="regEmail" class="form__label color-grey-1"
          >First Name *</label
        >
      </div>
      <div class="col-12 form__group">
        <input
          type="text"
          class="col-12 form__input"
          id="logPassword"
          placeholder="Last Name *"
          required
          name="lastname"
          v-model="form.lastname"
        />
        <label for="text" class="form__label color-grey-1">Last Name *</label>
      </div>
      <div class="col-12 form__group">
        <input
          type="email"
          class="col-12 form__input"
          id="logPassword"
          placeholder="Email"
          required
          name="email"
          v-model="form.email"
        />
        <label for="email" class="form__label color-grey-1">Email</label>
      </div>
      <div class="col-12 form__group">
        <big-design-button>NEXT</big-design-button>
      </div>
    </form>
  </div>
</template>

<script>
import BigDesignButton from "~/components/commons/BigDesignButton";
export default {
  props: {
    action: {
      type: String
    }
  },
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: ""
      }
    };
  },
  components: {
    BigDesignButton
  },
  methods: {
    async register() {
      // Get Roles

      this.$store
        .dispatch("user/register", this.form)
        .then(res => {
          this.$router.push({
            name: "confirmation",
            query: { email: res.data.data.email, user_id: res.data.data._id }
          });
        })
        .catch(err => {
          console.log(err, "error");
        });
    }
  }
};
</script>

<style>
</style>