<template>
  <div class="container-fluid my-promotion">
    <div class="row">
      <!--  -->
      <menu-bar />
      <div class="my-promotion__container col-12">
        <div class="row">
          <div class="dashboard__general--card col-md-10 col-12">
            <form class="dashboard__general--card__form">
              <div class="form-row align-items-center">
                <div class="col-auto m-2">
                  <label
                    class="dashboard__general--card__form--label color-blue"
                    for="inlineFormInput"
                    >Name</label
                  >
                  <select class="dashboard__general--card__form--select ml-4">
                    <option value="1">Today</option>
                    <option value="1">Today</option>
                    <option value="1">Today</option>
                    <option value="1">Today</option>
                  </select>
                </div>
                <div class="col-auto m-2">
                  <div
                    class="dashboard__general--card__form--text color-blue p-1"
                  >
                    or
                  </div>
                </div>
                <div class="col-auto m-2">
                  <label
                    class="dashboard__general--card__form--label color-blue"
                    >Start Date</label
                  >
                  <input
                    class="dashboard__general--card__form--input"
                    type="date"
                  />
                </div>
                <div class="col-auto m-2">
                  <label
                    class="dashboard__general--card__form--label color-blue"
                    >End Date</label
                  >
                  <input
                    class="dashboard__general--card__form--input"
                    type="date"
                  />
                </div>
                <div class="col-auto m-2 ml-md-auto">
                  <!-- <button class="btn__curved--yellow">Refresh</button> -->
                  <btn class="btn__curved--yellow">Refresh</btn>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="row justify-content-center">
          <!-- CARD HERE -->
          <cards
            v-for="(promotion, i) in promotions"
            :key="i"
            :promotion="promotion"
          />
          <!-- <cards />
          <cards />
          <cards />
          <cards />
          <cards /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "~/components/commons/DashboardNav";
import Cards from "~/components/commons/dashboard/Promotion.card";
import Btn from "~/components/commons/Btn";
import { mapState } from "vuex";
export default {
  components: {
    MenuBar,
    Cards,
    Btn
  },

  computed: {
    ...mapState({
      promotions: state => {
        return state.promotion.myPromotions;
      }
    })
  }
};
</script>

<style>
</style>