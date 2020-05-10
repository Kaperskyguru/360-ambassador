<template>
  <div class="my-promotion__container col-12">
    <div class="row justify-content-center">
      <div class="col-12 mb-4">
        <charts />
      </div>
      <div class="col-md-8 col-12">
        <div class="col-12 d-table p-0">
          <div class="d-table-head">
            <div class="d-table-row bg-grey-8">
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Seller
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Product
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Launch Date
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Comm
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Sales Price
              </p>
              <p
                class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
              ></p>
            </div>
          </div>
          <div class="mt-2 p-0"></div>
          <div class="col-12 d-table-body">
            <div class="d-table-row bg-grey-6">
              <p class="col-auto pt-2 pb-2 pl-2 d-table-cell color-blue">
                <img
                  :src="
                    promotion.user
                      ? promotion.user.profile_picture
                      : require('~/assets/images/man-user.png')
                  "
                  :alt="
                    promotion.user ? promotion.user.name : 'Profile picture'
                  "
                  width="80"
                  height="80"
                  style="object-fit:contain"
                />
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                <span class="color-blue">{{ promotion.name || "" }}</span>
                <span class="color-blue-3 text-small"
                  >(512345)<br />
                  <span class="text-small color-grey-3">{{
                    promotion.category ? promotion.category.name : ""
                  }}</span></span
                >
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                11/01/2019
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                {{ promotion.commission || 0 }}
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                {{ promotion.price || 0 }}
              </p>
              <p class="col-auto pt-3 pb-3 pl-0 pr-1 d-table-cell color-blue">
                <join-button
                  :promotion="promotion"
                  v-on:pop="pop = !pop"
                  v-on:show="show = !show"
                  v-on:joined="join"
                />
              </p>
            </div>
          </div>
        </div>
        <promotion-detail :promotion="promotion" />
      </div>

      <div class="col-md-4 col-12">
        <promotion-stats :promotion="promotion" />
        <shareable-link :joined="joined" :promotion="promotion" />
      </div>
    </div>
    <modal />
  </div>
</template>

<script>
import MenuBar from "~/components/commons/navs/DashboardNav";
import JoinButton from "~/components/commons/buttons/JoinPromotionBtn";
import Modal from "~/components/Modals";
import Charts from "~/components/partials/affiliates/Charts";
// import BarChart from "~/components/commons/dashboard/BarChart";
import PromotionStats from "~/components/commons/sidebar/PromotionStats";
import ShareableLink from "~/components/commons/sidebar/ShareableLink";
import PromotionDetail from "~/components/commons/dashboard/Details";
export default {
  props: ["promotion"],
  data() {
    return {
      fill: true,
      joined: false
    };
  },
  components: {
    MenuBar,
    PromotionStats,
    ShareableLink,
    Charts,
    Modal,
    PromotionDetail,
    JoinButton
  },
  methods: {
    join(joined) {
      this.joined = joined;
    }
  }
};
</script>

