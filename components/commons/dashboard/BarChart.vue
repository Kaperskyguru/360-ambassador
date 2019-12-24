<template>
  <div class="col-md-3 col-sm-12 col-xs-12">
    <p class="col-12 color-blue"><slot /></p>
    <div :id="id" class="p-0" style="height: 220px; width: 100%"></div>
  </div>
</template>

<script>
export default {
  props: ["id"],

  mounted() {}
};
</script>

<style>
</style>