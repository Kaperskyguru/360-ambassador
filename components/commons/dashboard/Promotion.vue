<template>
  <div
    id="promotion"
    class="dashboard__promotions--card--container col-12 col-md-4 mb-5 mb-md-0 pl-0 pr-0 pr-md-3"
  >
    <div class="dashboard__promotions--card col-12">
      <div class="dashboard__summary--card-header">
        <div class="row pr-3">
          <span class="color-blue mr-auto text-capitalize">{{
            promotion.name || ""
          }}</span>
          <div
            class="dashboard__promotions--card--img-container ml-auto p-2"
            style="border:1px solid grey; border-radius:50%"
          >
            <icon
              round="0"
              :icon="icon"
              :alt="alt"
              class="dashboard__promotions--card--img"
            />
          </div>
        </div>
      </div>
      <div class="dashboard__promotions--card-body">
        <div class="row justify-content-center pr-1">
          <h6
            class="dashboard__promotions--card-heading color-grey-3 col-12 p-0"
          >
            {{ "Marketing" }}
          </h6>
          <p class="dashboard__promotions--card-text color-grey-7 col-12 p-0">
            {{ promotion.description || "" }}
          </p>
          <div class="col-12 p-md-0">
            <div class="row">
              <div class="col-6 pl-4 p-0">
                <span class="dashboard__promotions--card-volume color-red">{{
                  promotion.commission || ""
                }}</span>
                <span class="color-red">comm.</span>
              </div>
              <div class="col-6 dashboard__promotions--card-volume">
                <nuxt-link
                  :to="{
                    name: 'affiliates-promotions-id',
                    params: { id: promotion._id }
                  }"
                  class="dashboard__promotions--card-text color-blue-1 btn-transparent"
                  >View details</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/commons/Icon";
export default {
  props: {
    icon: String,
    alt: String,
    promotion: {
      type: Object
    },
    width: String,
    height: String
  },
  components: {
    Icon
  }
};
</script>

<style scoped>
#promotion p::first-letter {
  text-transform: uppercase !important;
}
</style>