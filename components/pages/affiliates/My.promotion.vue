<template>
  <div class="my-promotion__container col-12">
    <div class="row">
      <div class="dashboard__general--card col-md-10 col-12">
        <form class="dashboard__general--card__form">
          <div class="form-row align-items-start">
            <div class="col-auto m-1">
              <label
                class="dashboard__general--card__form--label color-blue"
                for="inlineFormInput"
                >Quick Dates</label
              >
              <select
                class="dashboard__general--card__form--input ml-4"
                style="width: 160px;"
              >
                <option value="1">Today</option>
                <option value="1">Yesterday</option>
                <option value="1">Monday</option>
                <option value="1">Tuesday</option>
              </select>
            </div>
            <div class="d-sm-none d-none d-sm-block d-md-block ml-4 mr-4">
              <div class="dashboard__general--card__form--text color-blue p-1">
                OR
              </div>
            </div>
            <div class="col-auto m-1">
              <label class="dashboard__general--card__form--label color-blue"
                >Start Date</label
              >
              <input
                class="dashboard__general--card__form--input ml-4"
                type="date"
                style="width: 150px;"
              />
            </div>
            <div class="col-auto m-1">
              <label class="dashboard__general--card__form--label color-blue"
                >End Date</label
              >
              <input
                class="dashboard__general--card__form--input ml-4"
                type="date"
                style="width: 150px;"
              />
            </div>
            <div class="col-auto m-1 ml-md-auto">
              <btn class="btn__curved--yellow text-uppercase">Refresh</btn>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="row justify-content-start">
      <!-- CARD HERE -->
      <cards
        v-for="(promotion, i) in promotions"
        :key="i"
        :promotion="promotion.promotion"
      />
      <!-- <cards :promotion="test_promotion" />
      <cards :promotion="test_promotion" />
      <cards :promotion="test_promotion" />
      <cards :promotion="test_promotion" />
      <cards :promotion="test_promotion" /> -->
    </div>
    <div v-if="isEmpty" class="p-3">
      <p>You haven't joined any promotion yet</p>
    </div>
  </div>
</template>

<script>
// import MenuBar from "~/components/commons/navs/DashboardNav";
import Cards from "~/components/commons/dashboard/Promotion.card";
import Btn from "~/components/commons/buttons/Btn";
import { mapState } from "vuex";
export default {
  components: {
    // MenuBar,
    Cards,
    Btn
  },

  data() {
    return {
      test_promotion: {
        price: "0.00",
        _id: "5e30d193766041031df6b445",
        category: "Technology",
        product_file: [
          "http://res.cloudinary.com/djrrv398y/image/upload/v1580203495/carbon_1.png"
        ],
        name: "What is Lorem Ipsum? [Fake]",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      }
    };
  },

  computed: {
    ...mapState({
      promotions: state => {
        return state.promotion.joinedPromotions;
      }
    }),
    isEmpty() {
      if (this.promotions) return Object.entries(this.promotions).length === 0;
      return true;
    }
  }
};
</script>

