<template>
  <header class="col-12 header">
    <navbar :title="title"></navbar>
    <div class="col-12 pl-md-5 pl-2 pt-5 mb-5">
      <p class="col-md-2 col-12 color-white mr-md-auto mt-md-5 m-md-5">
        Quickly start & grow <br />
        your online business <br />with 360 Ambassador
      </p>
    </div>
    <div class="w-100">
      <div class="row align-end col-12 pl-md-5 ">
        <div class="col-md-4 col-12 ml-md-5 mr-md-5 mb-md-5  ">
          <h1 class="col-md-2 col-12 color-yellow p-0">100M+ Monthly</h1>
          <hr class="col-12 bg-white p-0" />
          <h6 class="color-white col-12 p-0 ">
            Reach more Global Customers
          </h6>
          <social-icons class="pt-4" style="margin-top:3rem"></social-icons>
        </div>
        <div class="col-md-5 col-12  ml-md-auto pl-5 my-2 my-lg-1">
          <h1 class=" color-white align-content-start">
            Connect With Millions <br />
            of Customers & Affiliates
          </h1>
          <p class="color-white col-md-10 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "~/components/commons/navs/Nav";
import SocialIcons from "~/components/commons/SocialIcons";
export default {
  props: ["title"],
  components: { Navbar, SocialIcons }
};
</script>
<style scoped>
</style>