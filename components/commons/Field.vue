<template>
  <div class="row">
    <label
      :for="name"
      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
      ><slot name="label"></slot> <span v-show="required">*</span></label
    >
    <div class="col-md-8 col-12 ml-md-5">
      <input
        autocomplete="on"
        :type="type"
        class="form-2__input col-12 color-grey-2"
        :value="value"
        :name="name"
        :id="name"
        @input="$emit('input', $event.target.value)"
      />
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
    name: {
      type: String
    },
    value: {}
  }
};
</script>

<style>
</style>