<template>
  <div>
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
        </tr>
      </thead>

      <tbody class="dashboard-table__tbody bg-grey-6">
        <tr>
          <td class="color-blue">
            <img
              :src="
                promotion.user
                  ? promotion.user.profile_picture
                  : require('@/assets/images/Access_Bank_Logo.png')
              "
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
        </tr>
      </tbody>
    </table>
    <proomotion-details :promotion="promotion" />
  </div>
</template>

<script>
import PromotionDetails from "~/components/commons/dashboard/Details";

export default {
  components: {
    PromotionDetails
  },
  props: ["promotion"]
};
</script>
<style>
</style>
