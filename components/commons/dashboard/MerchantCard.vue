<template>
  <div class="col-lg-3 col-md-4 col-12 mt-5 pl-3 pr-3">
    <nuxt-link
      :to="{
        name: 'merchants-my-promotions-id',
        params: { id: promotion._id }
      }"
    >
      <div class="dashboard__general--card col-12 pl-2 pr-2">
        <div class="row p-0">
          <p class="text-small color-grey-3 col-12 mb-0">FOOD</p>
        </div>
        <div class="dashboard__general--card__body col-12">
          <div class="row">
            <div class="dashboard__general--card__img-container col-4">
              <img
                src="~assets/images/Access_Bank_Logo.png"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="col-8 pr-md-0 pr-3 pl-3">
              <div class="row">
                <h6
                  class="dashboard__general--card__heading color-blue-1 col-12"
                >
                  {{ promotion.name || "" }}
                </h6>
                <p class="dashboard__general--card__text color-blue-2 col-12">
                  Bukka Hut Festo
                </p>
                <p class="dashboard__general--card__text col-6">
                  {{ promotion.description || "" }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="row justify-content-center">
            <div
              class="dashboard__general--card__rating border-grey-3 col p-lg-1"
            >
              <small
                class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                >CLICKS</small
              >
              <p
                class="dashboard__general--card__text-bg color-blue text-center col-12 mb-0 p-0"
              >
                200
              </p>
            </div>
            <div
              class="dashboard__general--card__rating border-grey-3 col p-lg-1 ml-2"
            >
              <small
                class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                >VISITORS</small
              >
              <p
                class="dashboard__general--card__text-bg color-blue text-center col-12 mb-0 p-0"
              >
                100
              </p>
            </div>
            <div
              class="dashboard__general--card__rating border-grey-3 col p-lg-1 ml-2"
            >
              <small
                class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                >SALES</small
              >
              <p
                class="dashboard__general--card__text-bg color-blue text-center col-12 mb-0 p-0"
              >
                2
              </p>
            </div>
            <div
              class="dashboard__general--card__rating border-grey-3 col p-lg-1 ml-2"
            >
              <small
                class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                >CONV.</small
              >
              <p
                class="dashboard__general--card__text-bg color-blue text-center col-12 mb-0 p-0"
              >
                0.02%
              </p>
            </div>
            <div
              class="dashboard__general--card__rating border-grey-3 col p-lg-1 ml-2"
            >
              <small
                class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                >N PER SALE</small
              >
              <p
                class="dashboard__general--card__text-bg color-blue text-center col-12 mb-0 p-0"
              >
                5.00
              </p>
            </div>
          </div>
          <div class="row justify-content-center mt-4">
            <div class="col-6 mb-5 pl-4 pr-5">
              <div class="row justify-content-start pl-1">
                <div
                  class="dashboard__general--card__rating border-grey-3 col-5 p-lg-1 ml-1"
                >
                  <small
                    class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                    >AFFILIATES</small
                  >
                  <p
                    class="dashboard__general--card__text-bg color-blue text-center text-bolder col-12 mb-0 p-0"
                  >
                    20
                  </p>
                </div>
              </div>
            </div>

            <div class="col-6 mb-5 pr-0">
              <button class="btn__squared--yellow color-blue col-12">
                VIEW PROMO
              </button>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["promotion"]
};
</script>

<style>
</style>