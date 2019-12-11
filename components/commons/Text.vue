<template>
  <div class="col-12 col-md-5 mt-5">
    <p class="text-small color-yellow col-12 p-0"><slot name="title"></slot></p>
    <h6 class="color-white col-12 p-0 mb-4">
      <slot name="content"></slot>
    </h6>
    <div class="col-12 mt-4 mt-5 p-0">
      <a
        class="btn__curved--yellow color-blue text-bold"
        href="#"
        role="button"
      >
        <curved-button> LEARN MORE</curved-button>
      </a>
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

<style>
</style>