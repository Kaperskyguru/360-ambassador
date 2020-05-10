<template>
  <div class="dashboard__body col-12">
    <div class="col-12 col-md-12">
      <performance-boxes />
    </div>

    <div class="row justify-content-center mt-5">
      <div class="col-md-12 col-lg-5 mb-3">
        <div class="row justify-content-center pl-md-4 pl-5 pr-0">
          <h6 class="dashboard__heading col-9 mb-3">My Promotions</h6>
          <button type="button" class="btn__transparent color-blue col-3">
            See all
          </button>
        </div>
        <my-promotion-table :promotions="promotions" />
        <div class="row justify-content-center pl-md-4 pl-5 pr-0 mt-5">
          <h6 class="dashboard__heading col-9 mb-3">
            My Promotions Affiliates
          </h6>
          <button type="button" class="btn__transparent color-blue col-3">
            See all
          </button>
        </div>
        <my-promotion-affiliates-table />
      </div>
      <div class="col-md-12 col-lg-4 mt-2">
        <div class="col-12 mb-5 dashboard__chart--card">
          <div class="col-12 pt-3">
            <div class="row">
              <div class="col-3 pl-0 pb-0">
                <span
                  class=" col-12 pl-2  text-bold color-grey-3 text-uppercase"
                  >Conversions</span
                >
              </div>
              <div class="col-9">
                <div class="row justify-content-end">
                  <label class="col-5 text-bold text-right pt-2 m-0" for=""
                    >Product</label
                  >
                  <select
                    name=""
                    id=""
                    class="dashboard__chart--card-select col-5"
                  >
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <line-chart :data="chartData" />
        </div>

        <div class="col-12 mb-5 dashboard__chart--card">
          <div class="col-12 pt-3">
            <div class="row">
              <div class="col-3 pl-0 pb-0">
                <span class=" col-12 pl-2 text-bold color-grey-3 text-uppercase"
                  >Affiliates</span
                >
              </div>
              <div class="col-9">
                <div class="row justify-content-end">
                  <label class="col-5 text-bold text-right pt-2 m-0" for=""
                    >Product</label
                  >
                  <select
                    name=""
                    id=""
                    class="dashboard__chart--card-select col-5"
                  >
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <bar-chart id="myfourthbarchart"> </bar-chart>
        </div>
        <!--  -->
        <div class="col-12 mb-5 dashboard__chart--card">
          <div class="col-12 pt-3">
            <div class="row">
              <div class="col-3 pl-0 pb-0">
                <span class=" col-12 pl-2 text-bold color-grey-3 text-uppercase"
                  >Sales</span
                >
              </div>
              <div class="col-9">
                <div class="row justify-content-end">
                  <label class="col-5 text-bold text-right pt-2 m-0" for=""
                    >Product</label
                  >
                  <select
                    name=""
                    id=""
                    class="dashboard__chart--card-select col-5"
                  >
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                    <option value="1">Bukka Hut Fresto</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <bar-chart id="myfifthbarchart" :data="chartData"> </bar-chart>
        </div>
      </div>

      <div class="col-md-12 col-lg-3 mt-2">
        <div class="col-12">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyPromotionTable from "~/components/partials/merchants/MyPromotionTable";
import MyPromotionAffiliatesTable from "~/components/partials/merchants/MyPromotionAffiliatesTable";
import PerformanceBoxes from "~/components/partials/merchants/PerformanceBoxes";
import LineChart from "~/components/commons/dashboard/LineChart2";
import BarChart from "~/components/commons/dashboard/BarChart2"; // Convert LineChart and BarChart to one
import Message from "~/components/commons/dashboard/Message";
import { mapState } from "vuex";
export default {
  components: {
    PerformanceBoxes,
    LineChart,
    BarChart,
    Message,
    MyPromotionTable,
    MyPromotionAffiliatesTable
  },
  computed: {
    ...mapState({
      messages: state => {
        if (state.message.messages)
          return [...state.message.messages].slice(0, 1);
      },
      promotions: state => {
        return state.promotion.myPromotions.promotion;
      },
      chartData: state => {
        return state.insight.earningGraph;
      }
    })
  }
};
</script>
<style>
</style>

