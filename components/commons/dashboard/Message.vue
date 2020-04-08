<template>
  <div class="dashboard__general--card mb-4">
    <div class="dashboard__summary--card-header m-0 col-12">
      <div class="row mb-3">
        <span class="color-blue mr-auto"><slot name="title"/></span>
      </div>
    </div>
    <p class="dashboard__promotions--card-text color-grey-7 col-12 p-0">
      <span class="color-blue mb-3"><slot name="subtitle"/></span>
      <br />
      <span class="mb-3"><slot name="content"/></span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    link: String
  }
};
</script>

