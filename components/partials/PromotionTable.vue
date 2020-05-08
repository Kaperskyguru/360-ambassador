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
      <tr v-for="(data, i) in fpromotions" :key="i">
        <td height="40">
          <nuxt-link to="#" class="color-blue">{{
            data.promotion.user ? data.promotion.user.username : "Fake Name"
          }}</nuxt-link>
        </td>
        <td height="40">
          <nuxt-link to="#" class="color-blue">{{
            data.promotion.name || ""
          }}</nuxt-link>
        </td>
        <td height="40">
          <nuxt-link to="#" class="color-blue">{{
            data.promotion.commission || 0
          }}</nuxt-link>
        </td>
        <td height="40">
          <nuxt-link to="#" class="color-blue">{{
            data.promotion.click || 0
          }}</nuxt-link>
        </td>
        <td height="40">
          <nuxt-link to="#" class="color-blue">{{
            data.promotion.impressions || 0
          }}</nuxt-link>
        </td>
        <td height="40">
          <nuxt-link to="#" class="color-blue">{{
            data.promotion.conv || 0
          }}</nuxt-link>
        </td>
        <td height="40">
          <nuxt-link to="#" class="color-blue"
            >N{{ data.promotion.price || 0 }}</nuxt-link
          >
        </td>
      </tr>
      <div v-if="isEmpty"><p>No Promotions yet</p></div>
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
    fpromotions() {
      return Object.entries(this.promotions).length !== 0
        ? this.promotions
        : this.fakePromotions;
    },
    isEmpty() {
      return Object.entries(this.promotions).length === 0;
    }
  }
};
</script>

<style>
</style>