<template>
  <div class="col-md-4 col-12 mt-5">
    <nuxt-link
      :to="{
        name: 'affiliates-my-promotions-id',
        params: { id: promotion._id }
      }"
    >
      <div class="dashboard__general--card col-12">
        <div class="row">
          <p class="text-small color-grey-3 col-12 mb-0">
            {{ promotion.category !== null ? promotion.category.name : "" }}
          </p>
        </div>
        <div class="dashboard__general--card__body col-12">
          <div class="row">
            <div class="dashboard__general--card__img-container col-3">
              <!-- ~assets/images/Access_Bank_Logo.png -->
              <img :src="promotion.product_file[0]" alt="" class="img-fluid" />
            </div>
            <div class="col">
              <div class="row">
                <h6
                  class="dashboard__general--card__heading color-blue-1 col-12"
                >
                  {{ promotion.name || "" }}
                </h6>
                <!-- <p class="dashboard__general--card__text color-blue-2 col-8">
                  Bukka Hut Festo
                </p> -->
                <p class="dashboard__general--card__text col-8">
                  {{ promotion.description || "" }}
                </p>
                <card-button class="p-0 ml-3" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5 p-0">
          <div class="row justify-content-center">
            <div class="stat-box col-2 p-0 m-1">
              <stat-box>
                <template slot="title">CLICKS</template>
                <template slot="value">200</template>
              </stat-box>
            </div>
            <div class="stat-box col-2 p-0 m-1">
              <stat-box>
                <template slot="title">VISITORS</template>
                <template slot="value">100</template>
              </stat-box>
            </div>
            <div class="stat-box  col-2 p-0 m-1">
              <stat-box>
                <template slot="title">SALES</template>
                <template slot="value">2</template>
              </stat-box>
            </div>
            <div class="stat-box  col-2 p-0 m-1">
              <stat-box>
                <template slot="title">CONV.</template>
                <template slot="value">0.02%</template>
              </stat-box>
            </div>
            <div class="stat-box  col-2 p-0 m-1">
              <stat-box>
                <template slot="title">N PER SALE</template>
                <template slot="value">5.00 </template>
              </stat-box>
            </div>
          </div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import StatBox from "~/components/commons/dashboard/Small.Stat.Box";
import CardButton from "~/components/commons/buttons/CardButton";
export default {
  props: ["promotion"],
  components: {
    StatBox,
    CardButton
  }
};
</script>

<style scoped>
img {
  vertical-align: middle;
  width: 100px;
  height: 100px;
}

.stat-box {
  width: 100% !important;
  max-width: 100% !important;
}
</style>