<template>
  <div class="my-promotion__container col-12">
    <div class="row">
      <div class="dashboard__general--card col-md-10 col-12">
        <form class="dashboard__general--card__form">
          <div class="form-row align-items-center">
            <div class="col-4">
              <div class="form-check mb-2">
                <input
                  v-model="terms.keyword"
                  class="dashboard__general--card__form--input col-12"
                  type="text"
                  placeholder="Keyword"
                />
              </div>
            </div>
            <div class="col-4">
              <div class="form-check mb-2">
                <select
                  id="cat"
                  v-model="terms.category"
                  class="dashboard__general--card__form--select ml-4 col-12"
                >
                  <option value="" selected="true">Category</option>
                  <option
                    v-for="(category, i) in categories"
                    :key="i"
                    :value="category._id"
                    >{{ category.name }}</option
                  >
                </select>
              </div>
            </div>
            <div class="col-auto ml-md-auto ml-5">
              <button
                @click.prevent="search"
                class="btn__curved--yellow btn btn-sm btn-warning"
              >
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
    <div class="row justify-content-start">
      <card
        :promotion="promotion"
        v-for="(promotion, i) in promotions"
        :key="i"
      ></card>
    </div>
  </div>
</template>

<script>
import Card from "~/components/commons/dashboard/Card";
import { mapState } from "vuex";
import Field from "~/components/commons/Field";

export default {
  components: {
    Card,
    Field
  },

  data() {
    return {
      terms: {}
    };
  },

  methods: {
    search() {
      if (this.terms.keyword || this.terms.category) {
        this.$store.dispatch("promotion/searchPromotion", this.terms);
      } else {
        this.$store.dispatch("promotion/get");
      }
    }
  },
  async fetch({ store }) {
    await store.dispatch("category/get");
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
  },
  mounted() {
    document.getElementById("cat").selectedIndex = "0";
  }
};
</script>

