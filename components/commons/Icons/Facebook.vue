<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 7.5 15"
  >
    <defs>
      <style>
        .ab {
          fill: #ffffff !important;
        }
      </style>
    </defs>
    <g transform="translate(-7 -2)">
      <g transform="translate(7 2)">
        <path
          :style="{ fill: color + ' !important' }"
          class="ab"
          d="M14.5,2V5H13c-.517,0-.75.608-.75,1.125V8H14.5v3H12.25v6h-3V11H7V8H9.25V5a3,3,0,0,1,3-3Z"
          transform="translate(-7 -2)"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: { color: { type: String, default: "#ffffff" } }
};
</script>

<style>
</style>