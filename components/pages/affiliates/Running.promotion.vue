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
              <p class="col-auto pt-3 pb-3 pl-2 d-table-cell color-blue">
                <img
                  src="~assets/images/Access_Bank_Logo.png"
                  alt=""
                  width="100"
                />
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                <span class="color-blue">Bukka Hut Festo</span>
                <span class="color-blue-3 text-small"
                  >(512345)<br />
                  <span class="text-small color-grey-3">FOOD</span></span
                >
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                11/01/2019
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                10%
              </p>
              <p class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                5,000
              </p>
              <p class="col-auto pt-3 pb-3 pl-0 pr-1 d-table-cell color-blue">
                <join-button
                  :promotion="promotion"
                  v-on:pop="pop = !pop"
                  v-on:show="show = !show"
                />
              </p>
            </div>
          </div>
        </div>
        <promotion-detail :promotion="promotion" />
      </div>

      <div class="col-md-4 col-12">
        <div class="col-12 row">
          <h6
            class="col-12 text text-bold color-blue bg-grey-8 pt-4 pb-3 pl-3 pr-3"
          >
            Promotion Stats
          </h6>
          <div class="col-12">
            <div class="row">
              <div class="col-4">
                <!-- STAT BOX HERE -->

                <stat-box>
                  <template slot="title">
                    clicks
                  </template>
                  <template slot="amount">
                    {{ promotion.clicks || 0 }}
                  </template>
                </stat-box>
              </div>
              <div class="col-4">
                <stat-box>
                  <template slot="title">
                    visitors
                  </template>
                  <template slot="amount">
                    {{ promotion.visitors || 0 }}
                  </template>
                </stat-box>
              </div>
              <div class="col-4">
                <stat-box>
                  <template slot="title">
                    sales
                  </template>
                  <template slot="amount">
                    {{ promotion.sales || 0 }}
                  </template>
                </stat-box>
              </div>
              <div class="col-4">
                <stat-box>
                  <template slot="title">
                    conv
                  </template>
                  <template slot="amount">
                    0.02%
                  </template>
                </stat-box>
              </div>
              <div class="col-4">
                <stat-box>
                  <template slot="title">
                    n per sale
                  </template>
                  <template slot="amount">
                    5.00
                  </template>
                </stat-box>
              </div>
              <div class="col-4">
                <stat-box :fill="fill" class="bg-yellow color-black">
                  <template slot="title" class="color-black">
                    total earned
                  </template>
                  <template slot="amount">
                    10.00
                  </template>
                </stat-box>
              </div>
            </div>
          </div>
        </div>
        <shareable-link />
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
import BarChart from "~/components/commons/dashboard/BarChart";
import StatBox from "~/components/commons/dashboard/Stat.box";
import ShareableLink from "~/components/commons/sidebar/ShareableLink";
import PromotionDetail from "~/components/commons/dashboard/Details";
export default {
  props: ["promotion"],
  data() {
    return {
      fill: true
    };
  },
  components: {
    MenuBar,
    BarChart,
    StatBox,
    ShareableLink,
    Charts,
    Modal,
    PromotionDetail,
    JoinButton
  },
  mounted() {},
  created() {},

  computed: {}
};
</script>

