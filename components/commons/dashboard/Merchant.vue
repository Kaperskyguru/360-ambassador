<template>
  <div class="col-12 mb-5">
    <div class="row align-content-center">
      <div class="col-4">
        <icon :icon="icon" alt="" class="img-fluid" />
      </div>
      <div class="col-8">
        <div class="dashboard__summary--card-header m-0">
          <div class="row m-0">
            <span class="color-blue mr-auto"><slot name="title"/></span>
          </div>
        </div>
        <p class="dashboard__promotions--card-text color-grey-7 col-12 p-0 m-0">
          <span class="mr-3">Rating:</span>
          <span class="ml-2"><slot name="rate"/></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/commons/Icon";
export default {
  props: {
    icon: String
  },
  components: {
    Icon
  }
};
</script>

<style>
</style>