<template>
  <div class="row">
    <label
      :for="name"
      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2 text-font"
      ><slot name="label"></slot> <span v-show="required">*</span></label
    >
    <div class="col-md-8 col-12 ml-md-5">
      <select
        :name="name"
        :id="name"
        :disabled="disabled"
        class="form-2__select col-12 color-grey-2"
        @change="$emit('select-' + name, $event.target.value)"
      >
        <slot name="content"></slot>
      </select>
      <span class="input-error"><slot name="errors"></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
};
</script>
<style scoped>
.text-font {
  font-size: 1.1rem !important;
}
</style>
