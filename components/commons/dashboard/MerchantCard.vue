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
          <p class="text-small color-grey-3 col-12 mb-0">
            {{ promotion.category !== null ? promotion.category.name : "" }}
          </p>
        </div>
        <div class="dashboard__general--card__body col-12 mb-3">
          <div class="row">
            <div class="dashboard__general--card__img-container col-3">
              <nuxt-link
                :to="{
                  name: 'affiliates-promotions-id',
                  params: { id: promotion._id }
                }"
              >
                <img
                  :src="promotion.product_file[0]"
                  alt=""
                  class="img-fluid"
                />
              </nuxt-link>
            </div>
            <div class="col-8 pr-md-0 pr-3 pl-3">
              <div class="row">
                <h6
                  class="dashboard__general--card__heading color-blue-1 col-12"
                >
                  {{ promotion.name || "" }}
                </h6>
                <p class="dashboard__general--card__text color-blue-2 col-12">
                  NGN {{ promotion.price || 0 }}
                </p>
                <p class="dashboard__general--card__text col-12 pr-3">
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
                {{ promotion.clicks || 0 }}
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
                {{ promotion.Visitors || 0 }}
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
                {{ promotion.Sales || 0 }}
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
                {{ promotion.Convertion_rate || "0.00%" }}
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
                {{ promotion.Number_per_sale || 0 }}
              </p>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-6 mb-5">
              <div class="row">
                <div
                  class="dashboard__general--card__rating border-grey-3 col-5 p-lg-1"
                >
                  <small
                    class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                    >AFFILIATES</small
                  >
                  <p
                    class="dashboard__general--card__text-bg color-blue text-center text-bolder col-12 mb-0 p-0"
                  >
                    {{ promotion.Affiliates || 0 }}
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

<style scoped>
img {
  vertical-align: middle;
  /* width: 100px;
  height: 100px; */
}
</style>