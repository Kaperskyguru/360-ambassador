<template>
  <div class="row justify-content-start">
    <promotion
      :icon="
        promotion.product_file[0] || require('~/assets/images/man-user.png')
      "
      :alt="promotion.name"
      :promotion_id="promotion._id"
      v-for="(promotion, i) in promotions"
      :promotion="promotion"
      :key="i"
    >
    </promotion>
    <div v-if="isEmpty"><p>No latest promotions</p></div>
  </div>
</template>

<script>
import Promotion from "~/components/commons/dashboard/Promotion";
import { mapState } from "vuex";
export default {
  props: {
    icon: String,
    alt: String
  },
  components: {
    Promotion
  },

  computed: {
    ...mapState({
      promotions: state => {
        return state.promotion.latestPromotions;
      }
    }),
    isEmpty() {
      return Object.entries(this.promotions).length === 0;
    }
  }
};
</script>

