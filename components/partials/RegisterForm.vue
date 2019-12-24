<template>
  <div class="row align-items-center">
    <h2 class="col-12 color-blue form__header"><slot></slot></h2>
    <p class="col-12 color-grey-1">
      Sign up now! Start by confirming your email below
    </p>
    <form action="#" class="col-12 align-self-center p-0">
      <div class="col-12 form__group">
        <input
          type="text"
          class="col-12 form__input"
          id="regEmail"
          placeholder="First Name *"
          required
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
  components: {
    BigDesignButton
  }
};
</script>

<style>
</style>