<template>
  <div class="container-fluid form">
    <div class="row align-items-center">
      <div class="col-lg-7 col-md-6 col-12 form__page-left">
        <a class="navbar-brand color-white" href="#">
          <logo /><br />ambassador
        </a>
        <div class="row align-content-center justify-content-center pl-0 pr-0">
          <div class="col-12 col-md-5 mt-5">
            <p class="text-small color-yellow col-12 p-0">ADVERTISERS</p>
            <h6 class="color-white col-12 p-0 mb-4">
              There is more to being an advertiser. Discover more ways to get
              the best from the affiliate program
            </h6>
            <div class="col-12 mt-4 mt-5 p-0">
              <curved-button>LEARN MORE</curved-button>
            </div>
          </div>
          <hr class="col-10 col-md-11 bg-white mt-5 mb-5" />
          <div class="col-12 col-md-5 mt-5">
            <p class="text-small color-yellow col-12 p-0">AFFILIATES</p>
            <h6 class="color-white col-12 p-0 mb-4">
              There is more to being an advertiser. Discover more ways to get
              the best from the affiliate program
            </h6>
            <div class="col-12 mt-4 mt-5 p-0">
              <curved-button>LEARN MORE</curved-button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-12 form__page-right">
        <div class="row align-items-center">
          <h2 class="col-12 color-blue form__header">Sign in</h2>
          <form action="#" class="col-12 align-self-center p-0">
            <div class="col-12 form__group">
              <input
                type="text"
                class="col-12 form__input"
                id="regEmail"
                placeholder="Username"
                required
              />
              <label for="regEmail" class="form__label color-grey-1"
                >Username</label
              >
            </div>
            <div class="col-12 form__group">
              <input
                type="password"
                class="col-12 form__input"
                id="logPassword"
                placeholder="password"
                required
              />
              <label for="logPassword" class="form__label color-grey-1"
                >password</label
              >
            </div>
            <div class="col-12 form__group">
              <big-design-button>SIGN IN</big-design-button>
            </div>
            <div class="col-12 form__group mt-4">
              <big-design-button>SIGN IN MERCHANT</big-design-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurvedButton from "~/components/commons/CurvedButton";
import BigDesignButton from "~/components/commons/BigDesignButton";
import Logo from "~/components/commons/Logo";
export default {
  components: {
    CurvedButton,
    BigDesignButton,
    Logo
  }
};
</script>

<style>
</style>