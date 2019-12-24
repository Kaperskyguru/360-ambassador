<template>
  <div
    class="my-promotion__modal modal fade"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body p-5">
          <div class="row justify-content-center">
            <img src="~assets/images/rocket.png" alt="" />
            <h6 class="col-12 text-bold text-center color-blue">
              Congratulation!
            </h6>
            <p class="col-12 color-grey-7 text-small text-center">
              You have opted to join the
              <span class="text-bold">Bukka Hot Festo</span> promotion. Just a
              step away from earning your income<br /><br />click the button
              below to confirm
            </p>
            <div class="col-12">
              <div class="row justify-content-center">
                <btn class="my-promotion__pills--btn color-blue-2 col-9">
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
import Btn from "~/components/commons/Btn";

export default {
  components: {
    Btn
  }
};
</script>

<style>
</style>