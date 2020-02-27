<template>
  <div class="container-fluid dashboard">
    <div class="row">
      <my-nav-bar />
      <div class="dashboard__body col-12">
        <div class="col-12 col-md-12">
          <performance-boxes />
        </div>

        <div class="row justify-content-center mt-5">
          <div class="col-md-12 col-lg-5 mb-3">
            <div class="row justify-content-center pl-md-4 pl-5 pr-0">
              <h6 class="dashboard__heading col-9 mb-5">My Promotions</h6>
              <button type="button" class="btn__transparent color-blue col-3">
                See all
              </button>
            </div>
            <table
              class="table table-responsive-sm table-borderless dashboard-table"
            >
              <thead class="dashboard-table__thead">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Affiliates</th>
                  <th scope="col">Clicks</th>
                  <th scope="col">Impressions</th>
                  <th scope="col">Conv.</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Sales</th>
                </tr>
              </thead>
              <tbody class="dashboard-table__tbody">
                <tr v-for="(promotion, i) in promotions" :key="i">
                  <td class="color-blue">{{ promotion.name || "" }}</td>
                  <td class="color-blue">{{ promotion.Affiliates || 0 }}</td>
                  <td class="color-blue">{{ promotion.Clicks || 0 }}</td>
                  <td class="color-blue">{{ promotion.Impressions || 0 }}</td>
                  <td class="color-blue">
                    {{ promotion.Convertion_rate || 0 }}
                  </td>
                  <td class="color-blue">N{{ promotion.price || 0 }}</td>
                  <td class="color-blue">N90.00</td>
                </tr>
              </tbody>
            </table>
            <div class="row justify-content-center pl-md-4 pl-5 pr-0 mt-5">
              <h6 class="dashboard__heading col-9 mb-5">
                My Promotions Affiliates
              </h6>
              <button type="button" class="btn__transparent color-blue col-3">
                See all
              </button>
            </div>
            <table
              class="table table-responsive-sm table-borderless dashboard-table"
            >
              <thead class="dashboard-table__thead">
                <tr>
                  <th scope="col">Affiliates</th>
                  <th scope="col">Date Joined</th>
                  <th scope="col">Product</th>
                  <th scope="col">Conv.</th>
                  <th scope="col">Total Sales</th>
                  <th scope="col">Comm. earned</th>
                </tr>
              </thead>
              <tbody class="dashboard-table__tbody">
                <tr>
                  <td class="color-blue">Seun Adepoju</td>
                  <td class="color-blue">01/03/2019</td>
                  <td class="color-blue">Bukka Hut Fresto</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">N30.00</td>
                </tr>
                <tr>
                  <td class="color-blue">Maria Njoku</td>
                  <td class="color-blue">01/03/2019</td>
                  <td class="color-blue">Bukka Hut Fresto</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">N30.00</td>
                </tr>
                <tr>
                  <td class="color-blue">Maria Njoku</td>
                  <td class="color-blue">01/03/2019</td>
                  <td class="color-blue">Bukka Hut Fresto</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">N30.00</td>
                </tr>
                <tr>
                  <td class="color-blue">Maria Njoku</td>
                  <td class="color-blue">01/03/2019</td>
                  <td class="color-blue">Bukka Hut Fresto</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">N30.00</td>
                </tr>
                <tr>
                  <td class="color-blue">Maria Njoku</td>
                  <td class="color-blue">01/03/2019</td>
                  <td class="color-blue">Bukka Hut Fresto</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">N30.00</td>
                </tr>
                <tr>
                  <td class="color-blue">Maria Njoku</td>
                  <td class="color-blue">01/03/2019</td>
                  <td class="color-blue">Bukka Hut Fresto</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">10</td>
                  <td class="color-blue">N30.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-12 col-lg-4 mt-2">
            <div class="col-12 mb-5 dashboard__chart--card">
              <div class="col-12 pt-3">
                <div class="row">
                  <div class="col-6 pl-0 pb-0">
                    <span class="text-small col-12 pl-2 color-grey-3"
                      >Conversions</span
                    >
                  </div>
                  <div class="col-6">
                    <label class="text-small" for="">Product</label>
                    <select
                      name=""
                      id=""
                      class="dashboard__chart--card-select col-6"
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
              <line-chart :data="chartData" />
            </div>

            <div class="col-12 mb-5 dashboard__chart--card">
              <div class="col-12 pt-3">
                <div class="row">
                  <div class="col-6 pl-0 pb-0">
                    <span class="text-small col-12 pl-2 color-grey-3"
                      >Affiliates</span
                    >
                  </div>
                  <div class="col-6">
                    <label class="text-small" for="">Product</label>
                    <select
                      name=""
                      id=""
                      class="dashboard__chart--card-select col-6"
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
              <bar-chart id="myfourthbarchart"> </bar-chart>
            </div>
            <!--  -->
            <div class="col-12 mb-5 dashboard__chart--card">
              <div class="col-12 pt-3">
                <div class="row">
                  <div class="col-6 pl-0 pb-0">
                    <span class="text-small col-12 pl-2 color-grey-3"
                      >Sales</span
                    >
                  </div>
                  <div class="col-6">
                    <label class="text-small" for="">Product</label>
                    <select
                      name=""
                      id=""
                      class="dashboard__chart--card-select col-6"
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
              <bar-chart id="myfifthbarchart" :data="chartData"> </bar-chart>
            </div>
          </div>

          <div class="col-md-12 col-lg-3 mt-2">
            <div class="col-12">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PerformanceBoxes from "~/components/partials/merchants/PerformanceBoxes";
import MyNavBar from "~/components/commons/navs/MerchantNav";
import LineChart from "~/components/commons/dashboard/LineChart2";
import BarChart from "~/components/commons/dashboard/BarChart2"; // Convert LineChart and BarChart to one
import Message from "~/components/commons/dashboard/Message";
import { mapState } from "vuex";
export default {
  components: {
    MyNavBar,
    PerformanceBoxes,
    LineChart,
    BarChart,
    Message
  },
  computed: {
    ...mapState({
      messages: state => {
        return state.message.messages;
      },
      promotions: state => {
        return state.promotion.myPromotions;
      },
      chartData: state => {
        return state.insight.earningGraph;
      }
    })
  }
};
</script>

