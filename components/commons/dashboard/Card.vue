<template>
  <div class="col-md-4 col-12 mt-5 " id="mycard">
    <div class="dashboard__general--card col-12 pl-3 ">
      <div class="row p-0">
        <p class="text-small color-grey-3 col-12 mb-1 text-uppercase">
          {{ category }}
        </p>
      </div>
      <div class="row pl-4">
        <div class="dashboard__general--card__img-container col-4">
          <nuxt-link
            :to="{
              name: 'affiliates-promotions-id',
              params: { id: promotion._id }
            }"
          >
            <img :src="profileImage" alt="" class="img-fluid" />
          </nuxt-link>
        </div>

        <div class="dashboard__general--card__body col-8 mb-3">
          <div class="row">
            <div class="col-8 pl-2">
              <div class="row mb-0">
                <nuxt-link
                  :to="{
                    name: 'affiliates-promotions-id',
                    params: { id: promotion._id }
                  }"
                >
                  <h6
                    class="dashboard__general--card__heading color-blue-1 col-12 text-capitalize"
                  >
                    {{ promotion.name }}
                  </h6>
                </nuxt-link>

                <p class="dashboard__general--card__text color-blue-2 col-12">
                  Price: {{ promotion.price }} NGN
                </p>
                <p
                  class="dashboard__general--card__text color-grey-3 col-12 text-sentence"
                >
                  {{ promotion.description }}
                </p>
              </div>
            </div>
            <div class="col-2 p-0">
              <small
                class="dashboard__general--card__text-small col-12 color-blue text-center d-block p-0"
                >Commission</small
              >
              <p
                class="dashboard__general--card__text-bg color-blue text-center col-12 "
              >
                {{ promotion.commission }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr class="color-grey-3" />
      <div class="col-12">
        <div class="row justify-content-center align-items-center">
          <nuxt-link
            :to="{
              name: 'affiliates-promotions-id',
              params: { id: promotion._id }
            }"
            class="color-blue-2 mr-auto"
            >View details</nuxt-link
          >
          <join-button
            class="color-blue-2"
            :promotion="promotion"
            v-on:pop="pop = !pop"
            v-on:show="show = !show"
          />
        </div>
      </div>
    </div>
    <loading :show="show" :label="label" :overlay="overlay" />

    <confirm-box :show="pop" v-on:close="pop = !pop">
      <template slot="content">
        You have opted to join the
        <span class="text-bold">{{ promotion.name }}</span> promotion. Just a
        step away from earning your income<br /><br />click the button below to
        confirm
      </template>
    </confirm-box>
  </div>
</template>

<script>
import { mapState } from "vuex";
import JoinButton from "~/components/commons/buttons/JoinPromotionBtn";
import ConfirmBox from "~/components/Modals.vue";
import DesignButton from "~/components/commons/buttons/DesignButton";
export default {
  props: ["promotion"],
  components: {
    ConfirmBox,
    DesignButton,
    JoinButton
  },
  data() {
    return {
      show: false,
      label: "Signing you up for this promotion, please wait...",
      overlay: true,
      pop: false
    };
  },
  computed: {
    profileImage() {
      return this.promotion.product_file[1]
        ? this.promotion.product_file[1]
        : "http://res.cloudinary.com/djrrv398y/image/upload/v1580203495/carbon_1.png";
    },
    category() {
      return this.promotion.category ? this.promotion.category.name : "";
    }
  }
};
</script>
<style >
#mycard p::first-letter {
  text-transform: uppercase !important;
}
</style>