<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 18.462 15"
    class="color-white"
  >
    <defs>
      <style>
        .ab {
          fill: #ffffff;
        }
      </style>
    </defs>
    <g transform="translate(-0.001 -0.004)">
      <g transform="translate(0.001 0.004)">
        <g transform="translate(0 0)">
          <path
            :style="{ fill: color + ' !important' }"
            class="ab"
            d="M18.464,1.778a7.581,7.581,0,0,1-2.176.6,3.8,3.8,0,0,0,1.666-2.1,7.588,7.588,0,0,1-2.405.919A3.791,3.791,0,0,0,9.094,4.653,10.755,10.755,0,0,1,1.286.7,3.792,3.792,0,0,0,2.459,5.752,3.773,3.773,0,0,1,.743,5.279v.048A3.789,3.789,0,0,0,3.781,9.04a3.8,3.8,0,0,1-1.71.065,3.791,3.791,0,0,0,3.539,2.63A7.6,7.6,0,0,1,.9,13.357,7.661,7.661,0,0,1,0,13.3,10.72,10.72,0,0,0,5.807,15,10.7,10.7,0,0,0,16.584,4.226q0-.246-.011-.49A7.7,7.7,0,0,0,18.464,1.778Z"
            transform="translate(-0.001 -0.004)"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#ffffff"
    }
  }
};
</script>

<style>
</style>