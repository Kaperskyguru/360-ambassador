<template>
  <div class="col-12 mb-4">
    <div class="row align-content-start">
      <div class="col-auto">
        <div class="p-2" style="border:1px solid grey; border-radius:50%">
          <icon :icon="icon" alt="" class="dashboard__promotions--card--img" />
        </div>
      </div>
      <div class="col-9 row">
        <div class="dashboard__summary--card-header m-0 p-0">
          <span class="color-blue"><slot name="title"/></span>
        </div>
        <p class="dashboard__promotions--card-text color-grey-7 col-12 p-0">
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
