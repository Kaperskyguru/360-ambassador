<template>
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
    <div class="row justify-content-start">
      <card
        v-for="(promotion, i) in promotions"
        :key="i"
        :promotion="promotion"
      />
    </div>
    <div v-if="isEmpty" class="p-3">
      <p>No promotion created yet</p>
    </div>
  </div>
</template>

<script>
import Card from "~/components/commons/dashboard/MerchantCard";
import { mapState } from "vuex";
export default {
  components: {
    Card
  },

  computed: {
    ...mapState({
      promotions: state => {
        return state.promotion.myPromotions.promotion;
      }
    }),
    isEmpty() {
      if (this.promotions) return Object.entries(this.promotions).length === 0;
      return true;
    }
  }
};
</script>

