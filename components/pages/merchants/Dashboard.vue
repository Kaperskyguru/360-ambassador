<template>
  <div class="container-fluid dashboard">
    <div class="row">
      <dashboard-nav />
      <div class="dashboard__body col-12">
        <div class="col-12 col-md-12">
          <performance-boxes />
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-12 col-md-6">
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
                <tr>
                  <td><a href="#" class="color-blue">Bukka Hut</a></td>
                  <td><a href="#" class="color-blue">Bukka Hut Fresto</a></td>
                  <td><a href="#" class="color-blue">10%</a></td>
                  <td><a href="#" class="color-blue">10</a></td>
                  <td><a href="#" class="color-blue">100</a></td>
                  <td><a href="#" class="color-blue">3</a></td>
                  <td><a href="#" class="color-blue">N30.00</a></td>
                </tr>

                <tr>
                  <td><a href="#" class="color-blue">Access Bank</a></td>
                  <td><a href="#" class="color-blue">Bukka Hut Fresto</a></td>
                  <td><a href="#" class="color-blue">5%</a></td>
                  <td><a href="#" class="color-blue">120</a></td>
                  <td><a href="#" class="color-blue">1234</a></td>
                  <td><a href="#" class="color-blue">58</a></td>
                  <td><a href="#" class="color-blue">N30.00</a></td>
                </tr>

                <tr>
                  <td><a href="#" class="color-blue">Universal</a></td>
                  <td><a href="#" class="color-blue">Bukka Hut Fresto</a></td>
                  <td><a href="#" class="color-blue">0.05%</a></td>
                  <td><a href="#" class="color-blue">24</a></td>
                  <td><a href="#" class="color-blue">100</a></td>
                  <td><a href="#" class="color-blue">46</a></td>
                  <td><a href="#" class="color-blue">N30.00</a></td>
                </tr>

                <tr>
                  <td><a href="#" class="color-blue">Universal</a></td>
                  <td><a href="#" class="color-blue">Bukka Hut Fresto</a></td>
                  <td><a href="#" class="color-blue">0.05%</a></td>
                  <td><a href="#" class="color-blue">24</a></td>
                  <td><a href="#" class="color-blue">100</a></td>
                  <td><a href="#" class="color-blue">46</a></td>
                  <td><a href="#" class="color-blue">N30.00</a></td>
                </tr>

                <tr>
                  <td><a href="#" class="color-blue">Universal</a></td>
                  <td><a href="#" class="color-blue">Bukka Hut Fresto</a></td>
                  <td><a href="#" class="color-blue">0.05%</a></td>
                  <td><a href="#" class="color-blue">24</a></td>
                  <td><a href="#" class="color-blue">100</a></td>
                  <td><a href="#" class="color-blue">46</a></td>
                  <td><a href="#" class="color-blue">N30.00</a></td>
                </tr>

                <tr>
                  <td><a href="#" class="color-blue">Universal</a></td>
                  <td><a href="#" class="color-blue">Bukka Hut Fresto</a></td>
                  <td><a href="#" class="color-blue">0.05%</a></td>
                  <td><a href="#" class="color-blue">24</a></td>
                  <td><a href="#" class="color-blue">100</a></td>
                  <td><a href="#" class="color-blue">46</a></td>
                  <td><a href="#" class="color-blue">N30.00</a></td>
                </tr>
              </tbody>
            </table>
            <h6 class="dashboard__heading col-12 mb-5">Latest Promotions</h6>
            <div class="col-12">
              <promotions />
            </div>
          </div>
          <div class="col-12 col-md-6">
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

                <message>
                  <template name="title">
                    Imagine Production
                  </template>
                  <template name="subtitle">
                    Upload your Placement Opportunities Today!
                  </template>
                  <template slot="content">
                    If you offer placement opportunites or a rate card you can
                    earn additional commission by offering placement
                    opportunities at rates that work for you. A placement gives
                    exposure to an Advertiser’s promotion or campaign on your
                    website or within other promotional materials, such email or
                    ad space. Visit the
                    <a href="#" class="color-red">Placements Marketplace</a>
                    today to post and promote your placement inventory across
                    the CJ Network!
                  </template>
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
import DashboardNav from "~/components/commons/DashboardNav";
import LineChart from "~/components/commons/dashboard/LineChart";
import Message from "~/components/commons/dashboard/Message";
import Merchants from "~/components/partials/Merchants/Merchants";
import PerformanceBoxes from "~/components/partials/Merchants/PerformanceBoxes";
import Promotions from "~/components/partials/Merchants/Promotions";
import Tasks from "~/components/partials/Merchants/Tasks";
export default {
  components: {
    DashboardNav,
    Merchants,
    Message,
    PerformanceBoxes,
    Promotions,
    Tasks,
    LineChart
  }
};
</script>

<style>
</style>