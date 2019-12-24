<template>
  <div
    :class="[fill ? 'status-card bg-yellow' : 'status-card--bordered']"
    class="col-12 mb-3"
  >
    <div
      :class="[fill ? 'color-blue' : 'color-grey-5']"
      class="status-card--title"
    >
      <slot name="title" />
    </div>
    <div
      :class="[fill ? 'color-blue' : 'color-grey-8']"
      class="status-card--value"
    >
      <slot name="amount" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fill: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
</style>