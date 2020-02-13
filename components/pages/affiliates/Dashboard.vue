<template>
  <div class="container-fluid dashboard">
    <div class="row">
      <dashboard-nav />
      <div class="dashboard__body col-12">
        <div class="col-12 col-md-12">
          <performance-boxes />
        </div>

        <div class="row justify-content-center mt-5">
          <div class="col-md-12 col-lg-6 mb-3">
            <div class="row justify-content-center pl-md-4 pl-5 pr-0">
              <h6 class="dashboard__heading col-9 mb-5">My Promotions</h6>
              <nuxt-link
                to="/affiliates/my-promotions"
                class="btn__transparent color-blue col-3 text-center"
              >
                See all
              </nuxt-link>
            </div>
            <table
              class="table table-responsive-sm table-borderless dashboard-table"
            >
              <thead class="dashboard-table__thead">
                <tr>
                  <th scope="col">Merchant</th>
                  <th scope="col">Product</th>
                  <th scope="col">Comm</th>
                  <th scope="col">Clicks</th>
                  <th scope="col">Impressions</th>
                  <th scope="col">Conv.</th>
                  <th scope="col">Total Earned</th>
                </tr>
              </thead>
              <tbody class="dashboard-table__tbody">
                <tr v-for="(promotion, i) in promotions" :key="i">
                  <td>
                    <nuxt-link to="#" class="color-blue">{{
                      promotion.user !== null ? promotion.user.name : ""
                    }}</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue">{{
                      promotion.name
                    }}</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue">{{
                      promotion.commission
                    }}</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue">{{
                      promotion.click ? promotion.click : 10
                    }}</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue">{{
                      promotion.impressions ? promotion.impression : 100
                    }}</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue">{{
                      promotion.conv ? promotion.conv : 3
                    }}</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue"
                      >N{{
                        promotion.price ? promotion.price : 30.0
                      }}</nuxt-link
                    >
                  </td>
                </tr>

                <tr>
                  <td>
                    <nuxt-link to="#" class="color-blue">Access Bank</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue"
                      >Bukka Hut Fresto</nuxt-link
                    >
                  </td>
                  <td><nuxt-link to="#" class="color-blue">5%</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">120</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">1234</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">58</nuxt-link></td>
                  <td>
                    <nuxt-link to="#" class="color-blue">N30.00</nuxt-link>
                  </td>
                </tr>

                <tr>
                  <td>
                    <nuxt-link to="#" class="color-blue">Universal</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue"
                      >Bukka Hut Fresto</nuxt-link
                    >
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue">0.05%</nuxt-link>
                  </td>
                  <td><nuxt-link to="#" class="color-blue">24</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">100</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">46</nuxt-link></td>
                  <td>
                    <nuxt-link to="#" class="color-blue">N30.00</nuxt-link>
                  </td>
                </tr>

                <tr>
                  <td>
                    <nuxt-link to="#" class="color-blue">Universal</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue"
                      >Bukka Hut Fresto</nuxt-link
                    >
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue">0.05%</nuxt-link>
                  </td>
                  <td><nuxt-link to="#" class="color-blue">24</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">100</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">46</nuxt-link></td>
                  <td>
                    <nuxt-link to="#" class="color-blue">N30.00</nuxt-link>
                  </td>
                </tr>

                <tr>
                  <td>
                    <nuxt-link to="#" class="color-blue">Universal</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue"
                      >Bukka Hut Fresto</nuxt-link
                    >
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue">0.05%</nuxt-link>
                  </td>
                  <td><nuxt-link to="#" class="color-blue">24</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">100</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">46</nuxt-link></td>
                  <td>
                    <nuxt-link to="#" class="color-blue">N30.00</nuxt-link>
                  </td>
                </tr>

                <tr>
                  <td>
                    <nuxt-link to="#" class="color-blue">Universal</nuxt-link>
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue"
                      >Bukka Hut Fresto</nuxt-link
                    >
                  </td>
                  <td>
                    <nuxt-link to="#" class="color-blue">0.05%</nuxt-link>
                  </td>
                  <td><nuxt-link to="#" class="color-blue">24</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">100</nuxt-link></td>
                  <td><nuxt-link to="#" class="color-blue">46</nuxt-link></td>
                  <td>
                    <nuxt-link to="#" class="color-blue">N30.00</nuxt-link>
                  </td>
                </tr>
              </tbody>
            </table>
            <h6 class="dashboard__heading col-12 mb-5 mt-5">
              Latest Promotions
            </h6>
            <div class="col-12">
              <promotions />
            </div>
          </div>
          <div class="col-md-12 col-lg-6 mt-2">
            <div class="col-12 mb-5 dashboard__chart--card p-0">
              <!-- <div class="col-12">
                <div class="row"></div>
              </div> -->
              <!-- <div id="myfirstchart" style="height: 220px;"></div> -->
              <line-chart />
            </div>
            <div class="row justify-content-center">
              <div class="col-12 col-md-5">
                <h6 class="dashboard__heading col-12 mb-5">Top 5 Merchants</h6>
                <merchants />
              </div>

              <div class="col-12 col-md-7">
                <h6 class="dashboard__heading col-12 mb-5">Messages</h6>

                <message v-for="(message, i) in messages" :key="i">
                  <template slot="title">
                    Imagine Production
                  </template>
                  <template slot="subtitle">
                    Upload your Placement Opportunities Today!
                  </template>
                  <template slot="content">{{ message.message }} </template>
                </message>

                <h6 class="dashboard__heading col-12 mb-5">Tasks</h6>
                <tasks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardNav from "~/components/commons/navs/DashboardNav";
import LineChart from "~/components/commons/dashboard/LineChart";
import Message from "~/components/commons/dashboard/Message";
import Merchants from "~/components/partials/affiliates/Merchants";
import PerformanceBoxes from "~/components/partials/affiliates/PerformanceBoxes";
import Promotions from "~/components/partials/affiliates/Promotions";
import Tasks from "~/components/partials/affiliates/Tasks";
import { mapState } from "vuex";
export default {
  components: {
    DashboardNav,
    Merchants,
    Message,
    PerformanceBoxes,
    Promotions,
    Tasks,
    LineChart
  },
  computed: {
    ...mapState({
      messages: state => {
        return state.message.messages;
      },
      promotions: state => {
        return state.promotion.myPromotions;
      }
    })
  }
};
</script>

<style>
</style>