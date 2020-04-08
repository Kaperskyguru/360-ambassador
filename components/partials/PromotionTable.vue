<template>
  <table class="table table-responsive-sm table-borderless dashboard-table">
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
      <tr v-for="(promotion, i) in fpromotions" :key="i">
        <td>
          <nuxt-link to="#" class="color-blue">{{
            promotion.user ? promotion.user.username : ""
          }}</nuxt-link>
        </td>
        <td>
          <nuxt-link to="#" class="color-blue">{{
            promotion.name || ""
          }}</nuxt-link>
        </td>
        <td>
          <nuxt-link to="#" class="color-blue">{{
            promotion.commission || 0
          }}</nuxt-link>
        </td>
        <td>
          <nuxt-link to="#" class="color-blue">{{
            promotion.click || 0
          }}</nuxt-link>
        </td>
        <td>
          <nuxt-link to="#" class="color-blue">{{
            promotion.impressions || 0
          }}</nuxt-link>
        </td>
        <td>
          <nuxt-link to="#" class="color-blue">{{
            promotion.conv || 0
          }}</nuxt-link>
        </td>
        <td>
          <nuxt-link to="#" class="color-blue"
            >N{{ promotion.price || 0 }}</nuxt-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["promotions"],
  data() {
    return {
      fakePromotions: [
        {
          name: "Fake Promotion",
          commission: "10%",
          click: 10,
          impressions: 1000,
          conv: 0.5,
          price: "10.98",
          user: {
            username: "kaperskyguru"
          }
        },

        {
          name: "Fake Promotion",
          commission: "10%",
          click: 10,
          impressions: 1000,
          conv: 0.5,
          price: "10.98",
          user: {
            username: "kaperskyguru"
          }
        },
        {
          name: "Fake Promotion",
          commission: "10%",
          click: 10,
          impressions: 1000,
          conv: 0.5,
          price: "10.98",
          user: {
            username: "kaperskyguru"
          }
        },
        {
          name: "Fake Promotion",
          commission: "10%",
          click: 10,
          impressions: 1000,
          conv: 0.5,
          price: "10.98",
          user: {
            username: "kaperskyguru"
          }
        }
      ]
    };
  },
  computed: {
    username() {
      return vm.promotion.user !== null ? vm.promotion.user.username : "";
    },
    fpromotions() {
      return this.promotions ? this.fakePromotions : this.fakePromotions;
    }
  }
};
</script>

<style>
</style>