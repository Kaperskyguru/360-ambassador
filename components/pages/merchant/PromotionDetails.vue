<template>
  <div class="my-promotion__container col-12">
    <div class="row justify-content-center">
      <div class="col-md-12 col-12 mb-4 pr-5">
        <div class="row">
          <div class="col-6">
            <nuxt-link
              to="/merchants/my-promotions"
              class="color-blue text-bold mr-auto"
              ><img
                src="~assets/images/left-arrow.png"
                width="10"
                alt=""
              />Back</nuxt-link
            >
          </div>
          <div class="col-6" v-show="!finish">
            <div class="col m-2 mr-1">
              <div class="row justify-content-end pr-5">
                <nuxt-link
                  to="/merchants/my-promotions/new"
                  class="btn__curved--yellow"
                  >ADD NEW</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-8 col-12">
        <promotion-detail :promotion="promotion" />
      </div>

      <div class="col-md-4 col-12">
        <div class="col-12 row">
          <h6
            class="col-12 text text-bold color-blue bg-grey-8 pt-4 pb-3 pl-3 pr-3"
          >
            Promotion sharable Link
          </h6>
          <ul
            class="my-promotion__pills nav nav-pills mb-3 col-12"
            id="pills-tab"
            role="tablist"
          >
            <li class="my-promotion__pills--item nav-item">
              <a
                class="my-promotion__pills--link nav-link active"
                id="pills-url-tab"
                data-toggle="pill"
                href="#pills-url"
                role="tab"
                aria-controls="pills-url"
                aria-selected="true"
                >URL</a
              >
            </li>
          </ul>
          <div class="tab-content col-12" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-url"
              role="tabpanel"
              aria-labelledby="pills-url-tab"
            >
              <div
                class="col-12 my-promotion__pills--square text-sm-light color-blue mt-4 mb-3"
              >
                <span class="col-10">{{ promotion.url }}</span>
                <img
                  src="~assets/images/undraw_schedule.png"
                  alt=""
                  class="col-2"
                  width="20"
                />
              </div>
              <button class="my-promotion__pills--btn color-blue-2 col-12">
                Copy Sharing URL
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 row mt-5">
          <h6
            class="col-12 text text-bold color-blue bg-grey-8 pt-4 pb-3 pl-3 pr-3"
          >
            Promotion Stats
          </h6>
          <div class="col-12">
            <div class="row">
              <div class="col-4 p-lg-2 p-md-1 p-3">
                <stat-box>
                  <template slot="title">
                    clicks
                  </template>
                  <template slot="amount">
                    {{ promotion.clicks }}
                  </template>
                </stat-box>
              </div>

              <div class="col-4 p-lg-2 p-md-1 p-3">
                <stat-box>
                  <template slot="title">
                    visitors
                  </template>
                  <template slot="amount">
                    {{ promotion.Visitors || 0 }}
                  </template>
                </stat-box>
              </div>
              <div class="col-4 p-lg-2 p-md-1 p-3">
                <stat-box>
                  <template slot="title">
                    sales
                  </template>
                  <template slot="amount">
                    {{ promotion.Sales || 0 }}
                  </template>
                </stat-box>
              </div>
              <div class="col-4 p-lg-2 p-md-1 p-3">
                <stat-box>
                  <template slot="title">
                    conv
                  </template>
                  <template slot="amount">
                    {{ promotion.Convertion_rate || 0.0 }}
                  </template>
                </stat-box>
              </div>
              <div class="col-4 p-lg-2 p-md-1 p-3">
                <stat-box>
                  <template slot="title">
                    n per sale
                  </template>
                  <template slot="amount">
                    5.00
                  </template>
                </stat-box>
              </div>
              <div class="col-4 p-lg-2 p-md-1 p-3">
                <stat-box class="color-blue">
                  <template slot="title" class="color-blue">
                    affiliates
                  </template>
                  <template slot="amount" class="color-blue">
                    20
                  </template>
                </stat-box>
              </div>
            </div>
          </div>
        </div>
        <div class="col-11" v-show="finish">
          <div class="col-6 mt-4 ml-auto">
            <div class="row justify-content-end">
              <button type="submit" class="btn__curved--yellow col-12">
                FINISH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PromotionDetail from "~/components/commons/dashboard/PromotionDetail";
import StatBox from "~/components/commons/dashboard/Stat.box";
import { mapState } from "vuex";
export default {
  components: {
    PromotionDetail,
    StatBox
  },
  props: ["finish", "promotion"]
};
</script>

