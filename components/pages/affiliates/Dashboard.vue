<template>
  <div class="dashboard__body col-12">
    <div class="col-12 col-md-12">
      <performance-boxes />
    </div>

    <div class="row justify-content-center mt-5">
      <div class="col-md-12 col-lg-6 mb-3">
        <div class="row justify-content-center pl-md-4 pl-5 pr-0">
          <h6 class="dashboard__heading col-9 mb-2">My Promotions</h6>
          <nuxt-link
            to="/affiliates/my-promotions"
            class="btn__transparent color-blue col-3 text-center"
          >
            See all
          </nuxt-link>
        </div>
        <promotion-table :promotions="joinedPromotions" />
        <h6 class="dashboard__heading col-12 mb-3 mt-5">
          Latest Promotions
        </h6>
        <div class="col-12 justify-content-start">
          <promotions />
        </div>
      </div>
      <div class="col-md-12 col-lg-6 mt-2">
        <div class="col-12 mb-5 dashboard__chart--card p-0">
          <line-chart />
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6">
            <h6 class="dashboard__heading col-12 mb-3">Top 5 Merchants</h6>
            <merchants />
          </div>

          <div class="col-12 col-md-6">
            <h6 class="dashboard__heading col-12 mb-3">Messages</h6>

            <message v-for="(message, i) in messages" :key="i">
              <template slot="title">
                Imagine Production
              </template>
              <template slot="subtitle">
                Upload your Placement Opportunities Today!
              </template>
              <template slot="content">{{ message.message }} </template>
            </message>
            <div v-if="isEmpty" class="p-3"><p>No Messages yet</p></div>

            <h6 class="dashboard__heading col-12 mb-3">Tasks</h6>
            <tasks />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "~/components/commons/dashboard/LineChart";
import Message from "~/components/commons/dashboard/Message";
import Merchants from "~/components/partials/affiliates/Merchants";
import PerformanceBoxes from "~/components/partials/affiliates/PerformanceBoxes";
import Promotions from "~/components/partials/affiliates/Promotions";
import Tasks from "~/components/partials/affiliates/Tasks";
import PromotionTable from "~/components/partials/PromotionTable";
import { mapState } from "vuex";
export default {
  components: {
    Merchants,
    Message,
    PerformanceBoxes,
    Promotions,
    Tasks,
    LineChart,
    PromotionTable
  },
  computed: {
    ...mapState({
      messages: state => {
        return state.message.messages;
      },
      promotions: state => {
        return state.promotion.promotions;
      },

      joinedPromotions: state => {
        return state.promotion.joinedPromotions;
      }
    }),
    isEmpty() {
      return Object.entries(this.messages).length === 0;
    }
  }
};
</script>

