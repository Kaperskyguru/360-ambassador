<template>
  <div class="col-md-4 col-12 mt-5 pl-1 pr-1">
    <nuxt-link to="/affiliates/joinned/1">
      <div class="dashboard__general--card col-12 pl-2 pr-2">
        <div class="row p-0">
          <p class="text-small color-grey-3 col-12 mb-0">
            {{ promotion.category !== null ? promotion.category.name : "" }}
          </p>
        </div>
        <div class="dashboard__general--card__body col-12">
          <div class="row">
            <div class="dashboard__general--card__img-container col">
              <!-- ~assets/images/Access_Bank_Logo.png -->
              <img :src="promotion.product_file[0]" alt="" class="img-fluid" />
            </div>
            <div class="col pr-0 pl-3">
              <div class="row">
                <h6
                  class="dashboard__general--card__heading color-blue-1 col-12"
                >
                  {{ promotion.name || "" }}
                </h6>
                <p class="dashboard__general--card__text color-blue-2 col-12">
                  Bukka Hut Festo
                </p>
                <p class="dashboard__general--card__text col-12">
                  {{ promotion.description || "" }}
                </p>
              </div>
            </div>
            <div class="col">
              <div class="dashboard__general--card__rating bg-yellow">
                <small
                  class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                  >TOTAL EARNED</small
                >
                <p
                  class="dashboard__general--card__text-bg color-blue text-center col-12 mb-0 p-0"
                >
                  10.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5">
          <div class="row justify-content-center">
            <stat-box>
              <template slot="title">CLICKS</template>
              <template slot="value">200</template>
            </stat-box>

            <stat-box>
              <template slot="title">VISITORS</template>
              <template slot="value">100</template>
            </stat-box>

            <stat-box>
              <template slot="title">SALES</template>
              <template slot="value">2</template>
            </stat-box>

            <stat-box>
              <template slot="title">CONV.</template>
              <template slot="value">0.02%</template>
            </stat-box>

            <stat-box>
              <template slot="title">N PER SALE</template>
              <template slot="value">5.00 </template>
            </stat-box>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import StatBox from "~/components/commons/dashboard/Small.Stat.Box";

export default {
  props: ["promotion"],
  components: {
    StatBox
  }
};
</script>

<style>
</style>