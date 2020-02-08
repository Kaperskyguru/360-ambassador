<template>
  <div class="row justify-content-center">
    <promotion
      :icon="promotion.product_file[0]"
      :alt="promotion.name"
      :promotion_id="promotion._id"
      v-for="(promotion, i) in promotions"
      :key="i"
    >
      <template slot="title">{{ promotion.name || "" }}</template>
      <template slot="subtitle">Marketing</template>
      <template slot="content">{{ promotion.description || "" }}</template>
      <template slot="volume">{{ promotion.commission || "" }}</template>
    </promotion>

    <promotion
      :icon="require('@/assets/images/6.png')"
      alt="Marketing"
      link="#"
    >
      <template slot="title">Commission</template>
      <template slot="subtitle">Marketing</template>
      <template slot="content"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut.</template
      >
      <template slot="volume">0.05</template>
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

<style>
</style>