<template>
  <!-- <div class="container-fluid my-promotion">
    <div class="row">
      <menu-bar /> -->
  <div class="my-promotion__container col-12">
    <div class="row justify-content-center">
      <p class="col-12">
        <nuxt-link to="/affiliates/promotions/" class="color-blue text-bold"
          ><img
            src="~assets/images/left-arrow.png"
            width="10"
            alt=""
          />Back</nuxt-link
        >
      </p>
      <div class="col-md-8 col-12">
        <div class="mt-2 p-0"></div>

        <table class="table table-responsive-sm table-borderless">
          <thead class="d-table-head">
            <tr class="d-table-row bg-grey-8">
              <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Seller
              </th>
              <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Product
              </th>
              <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Launch Date
              </th>
              <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Comm
              </th>
              <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Sales Price
              </th>
              <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
                Seller
              </th>
            </tr>
          </thead>
          <tbody class="dashboard-table__tbody bg-grey-6">
            <tr>
              <td class="color-blue">
                <img
                  src="~assets/images/Access_Bank_Logo.png"
                  alt=""
                  width="100"
                />
              </td>
              <td class="color-blue">
                <span class="color-blue">{{ promotion.name || "" }}</span>
                <span class="color-blue-3 text-small"
                  >(512345)<br />
                  <span class="text-small color-grey-3">{{
                    promotion.category ? promotion.category.name : ""
                  }}</span></span
                >
              </td>
              <td class="color-blue">11/01/2019</td>
              <td class="color-blue">{{ promotion.commission || "" }}</td>
              <td class="color-blue">
                {{ promotion.price || "" }}
              </td>
              <td class="color-blue">
                <join-button
                  :promotion="promotion"
                  v-on:pop="pop = !pop"
                  v-on:show="show = !show"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <!-- </div> -->

        <promotion-detail :promotion="promotion" />
      </div>
      <div class="col-md-4 col-12">
        <promotion-shareable-link />
      </div>
    </div>
    <loading :show="show" :label="label" :overlay="overlay" />
  </div>
</template>

<script>
import JoinButton from "~/components/commons/buttons/JoinPromotionBtn";
import PromotionShareableLink from "~/components/commons/sidebar/ShareableLink";
import PromotionDetail from "~/components/commons/dashboard/Details";
import DesignButton from "~/components/commons/buttons/DesignButton";

export default {
  components: {
    // MenuBar,
    PromotionShareableLink,
    PromotionDetail,
    DesignButton,
    JoinButton
  },
  props: ["promotion"],
  data() {
    return {
      show: false,
      label: "Signing you up for this promotion, please wait...",
      overlay: true
      // pop: false
    };
  }
};
</script>

