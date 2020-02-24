<template>
  <div class="dashboard__general--card__rating border-grey-3 col p-0 ml-2">
    <small
      class="dashboard__general--card__text-small col-12 color-blue text-center d-block"
      ><slot name="title"
    /></small>
    <p
      class="dashboard__general--card__text-bg color-blue text-center col-12 mb-0 p-0"
    >
      <slot name="value" />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dashboard__general--card__text-small {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
</style>