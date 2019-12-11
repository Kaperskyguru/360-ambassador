<template>
  <form action="#" class="col-12 align-self-center p-0">
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
      <big-design-button>SIGN IN</big-design-button>
    </div>
    <div class="col-12 form__group mt-4">
      <big-design-button>SIGN IN MERCHANT</big-design-button>
    </div>
  </form>
</template>

<script>
import CurvedButton from "~/components/commons/CurvedButton";
import BigDesignButton from "~/components/commons/BigDesignButton";
export default {
  components: {
    CurvedButton,
    BigDesignButton
  }
};
</script>

<style>
</style>