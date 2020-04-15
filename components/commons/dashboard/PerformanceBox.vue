<template>
  <div class="dashboard__summary--card-container col-12 col-md-2 mb-5 mb-md-0">
    <div class="dashboard__summary--card col-12">
      <div class="dashboard__summary--card-header">
        <div class="row">
          <span class="color-blue mr-auto">
            <slot name="title" />
          </span>
          <icon :icon="icon" :alt="alt" class="ml-auto" />
        </div>
      </div>
      <div class="dashboard__summary--card-body">
        <div class="row justify-content-start">
          <slot name="price" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "~/components/commons/Icon";
export default {
  props: { icon: String, alt: String },
  components: {
    Icon
  }
};
</script>
<style scoped>
.dashboard__summary--card-body div {
  font-size: 22px;
}
</style>
