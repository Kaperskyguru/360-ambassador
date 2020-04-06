<template>
  <select
    :name="name"
    :id="name"
    :disabled="disabled"
    class="form-2__select ml-md-5 col-2 color-grey-2"
    @change="$emit('select-' + name, $event.target.value)"
  >
    <slot name="content"></slot>
  </select>
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
