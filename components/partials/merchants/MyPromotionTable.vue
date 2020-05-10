<template>
  <table class="table table-responsive-sm table-borderless dashboard-table">
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
      <tr v-for="(promotion, i) in allPromotions" :key="i">
        <td class="color-blue">{{ promotion.name || "" }}</td>
        <td class="color-blue">{{ promotion.no_of_promoter || 0 }}</td>
        <td class="color-blue">{{ promotion.clicks || 0 }}</td>
        <td class="color-blue">{{ promotion.impressions || 0 }}</td>
        <td class="color-blue">
          {{ promotion.conversion || 0 }}
        </td>
        <td class="color-blue">N{{ promotion.price || 0 }}</td>
        <td class="color-blue">N{{ promotion.total_earn || 0 }}</td>
      </tr>

      <!-- <tr>
              <td class="color-blue">Seun Adepoju</td>
              <td class="color-blue">30</td>
              <td class="color-blue">449</td>
              <td class="color-blue">10</td>
              <td class="color-blue">10</td>
              <td class="color-blue">10</td>
              <td class="color-blue">N30.00</td>
            </tr>
            <tr>
              <td class="color-blue">Seun Adepoju</td>
              <td class="color-blue">30</td>
              <td class="color-blue">449</td>
              <td class="color-blue">10</td>
              <td class="color-blue">10</td>
              <td class="color-blue">10</td>
              <td class="color-blue">N30.00</td>
            </tr>
            <tr>
              <td class="color-blue">Seun Adepoju</td>
              <td class="color-blue">30</td>
              <td class="color-blue">449</td>
              <td class="color-blue">10</td>
              <td class="color-blue">10</td>
              <td class="color-blue">10</td>
              <td class="color-blue">N30.00</td>
            </tr> -->

      <p v-if="isEmpty">No Promotions yet</p>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["promotions"],
  computed: {
    allPromotions() {
      if (!this.isEmpty) {
        console.log(this.promotions);
        return this.promotions.slice(0, 10);
      }
    },
    isEmpty() {
      if (this.promotions) {
        return Object.entries(this.promotions).length === 0;
      }
      return true;
    }
  }
};
</script>

<style>
</style>