<template>
  <div class="container-fluid my-promotion">
    <div class="row">
      <my-nav-bar />
      <div class="my-promotion__container col-12">
        <div class="row">
          <div class="col-12">
            <div class="col m-2">
              <div class="row justify-content-end">
                <a href="#" class="btn__curved--yellow">ADD NEW</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <card />
          <card />
          <card />
          <card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "~/components/commons/dashboard/MerchantCard";
import MyNavBar from "~/components/commons/dashboard/MerchantNav";
export default {
  components: {
    MyNavBar,
    Card
  }
};
</script>

<style>
</style>