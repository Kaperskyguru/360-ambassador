<template>
  <div class="container-fluid my-promotion">
    <div class="row">
      <my-nav-bar />
      <div class="my-promotion__container col-12">
        <div class="row">
          <div class="col-12">
            <div class="col m-2">
              <div class="row justify-content-end">
                <nuxt-link
                  to="/merchants/my-promotions/new"
                  class="btn__curved--yellow"
                  >ADD NEW</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <card
            v-for="(promotion, i) in promotions"
            :key="i"
            :promotion="promotion"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "~/components/commons/dashboard/MerchantCard";
import MyNavBar from "~/components/commons/dashboard/MerchantNav";
import { mapState } from "vuex";
export default {
  components: {
    MyNavBar,
    Card
  },

  computed: {
    ...mapState({
      promotions: state => {
        return state.promotion.myPromotions;
      }
    })
  }
};
</script>

<style>
</style>