<template>
  <div class="dashboard__general--card mb-5">
    <merchant icon="5.png">
      <template slot="title">
        SemanticsBit
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>

    <merchant icon="5-1.png">
      <template slot="title">
        Universal
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>

    <merchant icon="5-2.png">
      <template slot="title">
        Renew toxicology
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>

    <merchant icon="5-3.png">
      <template slot="title">
        Discrete idea
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>

    <merchant icon="5-4.png">
      <template slot="title">
        Imagine Production
      </template>

      <template slot="rate">
        4.9
      </template>
    </merchant>
  </div>
</template>

<script>
import Merchant from "~/components/commons/dashboard/Merchant";
export default {
  components: {
    Merchant
  }
};
</script>

<style>
</style>