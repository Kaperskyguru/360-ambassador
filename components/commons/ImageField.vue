<template>
  <validation-provider
    name="Profile Image"
    rules="required|image|ext:jpg,png,jpeg,gif"
    v-slot="{ errors, validate }"
  >
    <label for="formControlFile1" class="custom-file-label">
      <div id="preview" v-if="src">
        <img :src="src" alt="Profile image here" />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="22.999"
        viewBox="0 0 23 22.999"
        v-else
      >
        <g transform="translate(0.004 0.001)">
          <g transform="translate(-0.004 -0.001)">
            <path
              style=" fill: #0e163d;"
              class="a"
              d="M12.784,14.719a1.192,1.192,0,0,1-.846-.35,5.618,5.618,0,0,1,0-7.936l4.416-4.416a5.612,5.612,0,1,1,7.937,7.936l-2.019,2.019a1.2,1.2,0,1,1-1.693-1.693L22.6,8.26a3.22,3.22,0,1,0-4.554-4.553L13.628,8.122a3.223,3.223,0,0,0,0,4.553,1.2,1.2,0,0,1-.846,2.042Z"
              transform="translate(-2.934 -0.372)"
            />
            <path
              class="a"
              d="M5.984,26.384A5.611,5.611,0,0,1,2.015,16.8l2.019-2.019a1.2,1.2,0,0,1,1.693,1.693L3.706,18.5a3.22,3.22,0,0,0,4.554,4.554l4.416-4.416a3.223,3.223,0,0,0,0-4.553,1.2,1.2,0,0,1,1.693-1.693,5.618,5.618,0,0,1,0,7.936L9.953,24.739a5.575,5.575,0,0,1-3.97,1.645Z"
              transform="translate(-0.371 -3.385)"
            />
          </g>
        </g>
      </svg>
    </label>
    <input
      type="file"
      class="custom-file-input"
      id="formControlFile1"
      @change="validate"
      v-on:change="applySelected($event)"
    />
    <span class="input-error">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
import { ValidationProvider } from "vee-validate";

export default {
  props: {
    src: {
      type: String,
      default: ""
    }
  },

  // data() {
  //   return {
  //     url: ""
  //   };
  // },
  name: "ImageField",
  components: {
    ValidationProvider
  },
  methods: {
    applySelected(e) {
      const image = e.target.files[0];
      this.src = URL.createObjectURL(image);
      this.$emit("triggerChange", e);
    }
  }
};
</script>
<style scoped>
#preview img {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}
</style>

