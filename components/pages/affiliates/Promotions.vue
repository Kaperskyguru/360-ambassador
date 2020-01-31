<template>
  <div class="container-fluid my-promotion">
    <div class="row">
      <menu-bar />
      <div class="my-promotion__container col-12">
        <div class="row">
          <div class="dashboard__general--card col-md-10 col-12">
            <form class="dashboard__general--card__form">
              <div class="form-row align-items-center">
                <div class="col-auto">
                  <div class="form-check mb-2">
                    <input
                      class="dashboard__general--card__form--input col-12"
                      type="text"
                      placeholder="Keyword"
                    />
                  </div>
                </div>
                <div class="col-auto">
                  <select
                    class="dashboard__general--card__form--select ml-4 col-12"
                  >
                    <option
                      v-for="(category, i) in categories"
                      :key="i"
                      :value="category._id"
                      >{{ category.name }}</option
                    >
                  </select>
                </div>
                <div class="col-auto ml-md-auto">
                  <button class="btn__curved--yellow btn btn-sm btn-warning">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <h6 class="dashboard__heading col-12 color-blue mt-5">
          All Promotions
        </h6>
        <div class="row justify-content-center">
          <card
            :promotion="promotion"
            v-for="(promotion, i) in promotions"
            :key="i"
          ></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "~/components/commons/navs/DashboardNav";
import Card from "~/components/commons/dashboard/Card";
import { mapState } from "vuex";

export default {
  components: {
    MenuBar,
    Card
  },

  computed: {
    ...mapState({
      promotions: state => {
        return state.promotion.promotions;
      },

      categories: state => {
        return state.category.categories;
      }
    })
  }
};
</script>

<style>
</style>