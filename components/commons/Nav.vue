<template>
  <nav class="navbar navbar-expand-lg navbar-light w-100">
    <a class="navbar-brand color-white" href="#"> <logo /><br />ambassador </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link color-white" href="#"
            >advertisers <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link color-white" href="#">affiliates</a>
        </li>
        <li class="nav-item">
          <a class="nav-link color-white" href="#">about us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link color-white" href="#">features</a>
        </li>
      </ul>
      <div class="navbar-nav my-2 my-lg-1">
        <li class="nav-item dropdown">
          <div class="nav-link">
            <a
              class="dropdown-toggle btn__bordered-square-curved--yellow"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              get started
            </a>
            <div
              class="dropdown-menu mt-3 mt-lg-0"
              aria-labelledby="navbarDropdown"
            >
              <h6 class="dropdown-item color-white bg-blue col-12">
                How do you come in?
              </h6>
              <div class="dropdown-item bg-transparent col-12">
                <div class="col-12 p-0">
                  <p class="text-small color-yellow col-12 p-0">
                    ADVERTISERS
                  </p>
                  <h6 class="color-blue col-12 p-0 mb-3">
                    Expand your horizon
                  </h6>
                  <p class="color-blue col-12 p-0 mb-3">
                    Lorem ipsum dolor sit amet, sed diam voluptua. At vero ea
                    rebum. Stet clita kasd gubergren, no sea…
                  </p>
                  <div class="col-12 mt-4 mb-4 p-0">
                    <a
                      class="btn__curved--yellow color-blue"
                      href="#"
                      role="button"
                    >
                      GET STARTED
                    </a>
                  </div>
                </div>
                <div class="dropdown-divider"></div>
                <div class="col-12 p-0">
                  <p class="text-small color-yellow col-12 p-0">AFFILIATES</p>
                  <h6 class="color-blue col-12 p-0 mb-3">
                    Work with the trusted brands
                  </h6>
                  <p class="color-blue col-12 p-0">
                    Lorem ipsum dolor sit amet, sed diam voluptua. At vero ea
                    rebum. Stet clita kasd gubergren, no sea…
                  </p>
                  <div class="col-12 mt-4 mb-4 p-0">
                    <a
                      class="btn__bordered-curved--yellow color-blue"
                      href="#"
                      role="button"
                    >
                      SIGN UP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav-item">
          <div class="nav-link mt-3 mt-lg-0">
            <Design-button>sign in</Design-button>
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "~/components/commons/Logo";
import DesignButton from "~/components/commons/DesignButton";
import CurvedButton from "~/components/commons/CurvedButton";
export default {
  components: { Logo, DesignButton, CurvedButton }
};
</script>

<style>
</style>