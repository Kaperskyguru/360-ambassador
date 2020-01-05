<template>
  <form :action="url" class="col-12 align-self-center p-0">
    <div class="col-12 form__group">
      <input
        type="text"
        class="col-12 form__input"
        id="regEmail"
        placeholder="Username"
        required
      />
      <label for="regEmail" class="form__label color-grey-1">Username</label>
    </div>
    <div class="col-12 form__group">
      <input
        type="password"
        class="col-12 form__input"
        id="logPassword"
        placeholder="password"
        required
      />
      <label for="logPassword" class="form__label color-grey-1">password</label>
    </div>
    <div class="col-12 form__group">
      <big-design-button>SIGN IN AFFILIATE</big-design-button>
    </div>
    <div class="col-12 form__group mt-4">
      <button
        v-on:click="loginMerchant()"
        class="btn__square-curved--yellow color-blue form__btn col-12 text-bold"
        type="submit"
      >
        SIGN IN MERCHANT
      </button>
      <!-- <big-design-button 
        ></big-design-button
      > -->
    </div>
  </form>
</template>

<script>
import BigDesignButton from "~/components/commons/BigDesignButton";
export default {
  components: {
    BigDesignButton
  },
  data() {
    return {
      url: "/affiliates"
    };
  },
  methods: {
    loginMerchant() {
      console.log("askjhasjashjashj");

      this.url = "/merchants";
    }
  }
};
</script>

<style>
</style>