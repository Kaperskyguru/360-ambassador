<template>
  <div
    class="dashboard__promotions--card--container col-12 col-md-4 mb-5 mb-md-0 pl-0 pl-md-3 pr-0 pr-md-3"
  >
    <div class="dashboard__promotions--card col-12">
      <div class="dashboard__summary--card-header">
        <div class="row pr-3">
          <span class="color-blue mr-auto"><slot name="title"/></span>
          <span class="dashboard__promotions--card--img-container ml-auto">
            <icon
              :icon="icon"
              :alt="alt"
              class="dashboard__promotions--card--img"
            />
          </span>
        </div>
      </div>
      <div class="dashboard__promotions--card-body">
        <div class="row justify-content-center pr-3">
          <h6
            class="dashboard__promotions--card-heading color-grey-3 col-12 p-0"
          >
            <slot name="subtitle" />
          </h6>
          <p class="dashboard__promotions--card-text color-grey-7 col-12 p-0">
            <slot name="content" />
          </p>
          <div class="col-12 p-md-0">
            <div class="row">
              <div class="col-6 ml-auto">
                <span class="dashboard__promotions--card-volume color-red"
                  ><slot name="volume" />%</span
                ><br />
                <span class="dashboard__promotions--card-text color-red mt-2"
                  >comm.</span
                >
              </div>
              <div class="col-6">
                <nuxt-link
                  :to="link"
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
    link: String
  },
  components: {
    Icon
  }
};
</script>

<style>
</style>