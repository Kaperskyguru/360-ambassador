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
      <!-- <template slot="title">{{ promotion.name || "" }}</template>
      <template slot="subtitle">Marketing</template>
      <template slot="content">{{ promotion.description || "" }}</template>
      <template slot="volume">{{ promotion.commission || "" }}</template> -->
    </promotion>
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
    })
  }
};
</script>

