<template>
  <div
    class="my-promotion__modal modal fade"
    :class="{ show: show }"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    :aria-hidden="show"
    :style="[show ? { display: 'block' } : { display: 'none' }]"
  >
    <div
      class="modal-dialog modal-dialog-centered"
      role="document"
      :class="{ show: show }"
    >
      <div class="modal-content">
        <div class="modal-body p-5">
          <div class="row justify-content-center">
            <img src="~assets/images/rocket.png" alt="" />
            <h6 class="col-12 text-bold text-center color-blue">
              Congratulation!
            </h6>
            <p class="col-12 color-grey-7 text-small text-center">
              <slot name="content" />
            </p>
            <div class="col-12">
              <div class="row justify-content-center">
                <btn
                  v-on:click.native="$emit('close')"
                  class="my-promotion__pills--btn color-blue-2 col-9"
                >
                  Confirm
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Btn from "~/components/commons/buttons/Btn";

export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Btn
  }
};
</script>

