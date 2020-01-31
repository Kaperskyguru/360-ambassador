<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 20.072 16.727"
  >
    <defs>
      <style>
        .a {
          fill: #fff;
        }
      </style>
    </defs>
    <g transform="translate(24)">
      <g transform="translate(-24 0)">
        <path
          :style="{ fill: color + ' !important' }"
          class="a"
          d="M19.236,2H.836A.79.79,0,0,0,0,2.836V17.891a.79.79,0,0,0,.836.836h18.4a.79.79,0,0,0,.836-.836V2.836A.79.79,0,0,0,19.236,2ZM17.312,6.014l-6.691,5.854a1.551,1.551,0,0,1-.585.167,1.551,1.551,0,0,1-.585-.167L2.76,6.014A.83.83,0,1,1,3.847,4.76l6.105,5.353L16.058,4.76a.813.813,0,0,1,1.171.084A.752.752,0,0,1,17.312,6.014Z"
          transform="translate(0 -2)"
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