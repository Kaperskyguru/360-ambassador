<template>
  <div class="col-md-4 col-12 mt-5">
    <div class="dashboard__general--card col-12 pl-3 ">
      <div class="row p-0">
        <p class="text-small color-grey-3 col-12 mb-0">
          {{ showCategory(promotion.category) }}
        </p>
      </div>
      <div class="dashboard__general--card__body col-12 mb-3">
        <div class="row">
          <div class="dashboard__general--card__img-container col-3">
            <nuxt-link
              :to="{ name: 'affiliates-id', params: { id: promotion._id } }"
            >
              <img :src="promotion.product_file[1]" alt="" class="img-fluid" />
            </nuxt-link>
          </div>
          <div class="col-6 pl-2">
            <div class="row mb-0">
              <nuxt-link
                :to="{ name: 'affiliates-id', params: { id: promotion._id } }"
              >
                <h6
                  class="dashboard__general--card__heading color-blue-1 col-12"
                >
                  {{ promotion.name }}
                </h6>
              </nuxt-link>

              <p class="dashboard__general--card__text color-blue-2 col-12">
                Price: {{ promotion.price }} NGN
              </p>
              <p class="dashboard__general--card__text color-grey-3 col-12">
                {{ promotion.description }}
              </p>
            </div>
          </div>
          <div class="col-3">
            <small
              class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
              >Commission</small
            >
            <p
              class="dashboard__general--card__text-bg color-blue text-center col-12 mb-0 p-0"
            >
              {{ promotion.commission }}
            </p>
          </div>
        </div>
      </div>
      <hr class="color-grey-3 mt-0" />
      <div class="col-12">
        <div class="row justify-content-center align-items-center">
          <nuxt-link
            :to="{ name: 'affiliates-id', params: { id: promotion._id } }"
            class="color-blue-2 mr-auto"
            >View details</nuxt-link
          >
          <nuxt-link
            :to="{ name: 'affiliates-id', params: { id: promotion._id } }"
            class="btn__square-curved--yellow color-blue-2"
            href="#"
            >Join Program</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["promotion"],

  computed: {
    ...mapState({
      categories: state => {
        return state.category.categories;
      }
    })
  },

  methods: {
    showCategory(id) {
      // return this.categories.filter(item => {
      //   return item._id == id;
      // })[0].name;

      return "Banking";
    }
  }
};
</script>

<style>
</style>