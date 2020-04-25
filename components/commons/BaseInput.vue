<template>
  <div class="row">
    <label
      :for="name"
      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2 text-font"
      ><slot name="label"></slot> <span v-show="required">*</span></label
    >
    <div class="col-md-8 col-12 ml-md-5">
      <input
        v-bind="$attrs"
        class="form-2__input col-12 color-grey-2"
        :value="value"
        v-on:input="$emit('input', $event.target.value)"
        :name="name"
      />
      <span class="input-error"><slot name="errors"></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    required: {
      type: Boolean,
      default: false
    },
    name: [String]
  }
};
</script>

<style>
</style>