<template>
  <div class="col-md-4 col-12 mt-5">
    <div class="dashboard__general--card col-12 pl-3 pr-3">
      <div class="row p-0">
        <p class="text-small color-grey-3 col-12 mb-0">FOOD</p>
      </div>
      <div class="dashboard__general--card__body col-12 mb-5">
        <div class="row">
          <div class="dashboard__general--card__img-container col-3">
            <nuxt-link to="/merchant/1">
              <img
                src="~assets/images/Access_Bank_Logo.png"
                alt=""
                class="img-fluid"
              />
            </nuxt-link>
          </div>
          <div class="col-9 pr-0 pl-4 mb-0">
            <div class="row mb-0">
              <nuxt-link to="/merchant/1">
                <h6
                  class="dashboard__general--card__heading color-blue-1 col-12"
                >
                  Bukka Hut Festo
                </h6>
              </nuxt-link>
              <div class="col-3 p-2 mb-0 ml-2">
                <small
                  class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                  >Commission</small
                >
                <p
                  class="dashboard__general--card__text-bg color-blue text-center col-12 mb-0 p-0"
                >
                  10%
                </p>
              </div>
              <p class="dashboard__general--card__text color-blue-2 col-12">
                Price: 0.00 NGN
              </p>
              <p class="dashboard__general--card__text color-grey-3 col-10">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam…
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr class="color-grey-3 mt-0" />
      <div class="col-12">
        <div class="row justify-content-center align-items-center">
          <nuxt-link to="/merchant/1" class="color-blue-2 mr-auto"
            >View details</nuxt-link
          >
          <nuxt-link
            to="/merchant/1"
            class="btn__square-curved--yellow color-blue-2"
            href="#"
            >Join Program</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>