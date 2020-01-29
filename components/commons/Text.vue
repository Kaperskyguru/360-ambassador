<template>
  <div class="col-12 col-md-6 mt-5 mb-5">
    <p class="text-small color-yellow col-12 p-0"><slot name="title"></slot></p>
    <h6 class="color-white col-12 p-0 mb-5">
      <slot name="content"></slot>
    </h6>
    <div class="col-12 mt-5 p-0">
      <curved-button> LEARN MORE</curved-button>
    </div>
  </div>
</template>

<script>
import CurvedButton from "~/components/commons/CurvedButton";
export default {
  components: {
    CurvedButton
  }
};
</script>

<style scoped>
h6 {
  line-height: 1;
  font-size: 1.8rem;
}
</style>