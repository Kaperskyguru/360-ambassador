<template>
  <div class="col-md-4 col-12 mt-5">
    <div class="dashboard__general--card col-12 pl-3 ">
      <div class="row p-0">
        <p class="text-small color-grey-3 col-12 mb-0">
          {{ promotion.category ? promotion.category.name : "" }}
        </p>
      </div>
      <div class="dashboard__general--card__body col-12 mb-3">
        <div class="row">
          <div class="dashboard__general--card__img-container col-3">
            <nuxt-link
              :to="{
                name: 'affiliates-promotions-id',
                params: { id: promotion._id }
              }"
            >
              <img :src="promotion.product_file[1]" alt="" class="img-fluid" />
            </nuxt-link>
          </div>
          <div class="col-6 pl-2">
            <div class="row mb-0">
              <nuxt-link
                :to="{
                  name: 'affiliates-promotions-id',
                  params: { id: promotion._id }
                }"
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
            :to="{
              name: 'affiliates-promotions-id',
              params: { id: promotion._id }
            }"
            class="color-blue-2 mr-auto"
            >View details</nuxt-link
          >
          <nuxt-link
            to="#"
            class="btn__square-curved--yellow color-blue-2"
            href="#"
            data-toggle="modal"
            @click.native="joinPromotion"
            >Join Program</nuxt-link
          >
        </div>
      </div>
    </div>
    <loading :show="show" :label="label" :overlay="overlay" />

    <confirm-box :show="show">
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
import ConfirmBox from "~/components/Modals.vue";
export default {
  props: ["promotion"],
  components: {
    ConfirmBox
  },
  data() {
    return {
      show: false,
      label: "Signing you up for this promotion, please wait...",
      overlay: true,
      pop: false
    };
  },

  methods: {
    async joinPromotion() {
      this.show = true;
      try {
        const data = {};
        data.promoter_id = this.$auth.user._id;
        data.promotion = this.promotion._id;
        await this.$store.dispatch("promotion/joinPromotion", data);
        $("#exampleModalCenter").modal("show");
        // this.$swal({
        //   text: "You've successfully joined the promotion",
        //   icon: "success"
        // });
        this.show = false;
      } catch (error) {
        this.show = false;
        this.$swal({
          text: "An error occurred, Don't panic just try again",
          icon: "error"
        });
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>