<template>
  <div class="row justify-content-center">
    <promotion icon="6.png" alt="Marketing" link="#">
      <template slot="title"
        >Commission</template
      >
      <template slot="subtitle"
        >Marketing</template
      >
      <template slot="content"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut.</template
      >
      <template slot="volume"
        >0.05</template
      >
    </promotion>

    <promotion icon="6.png" alt="Marketing" link="#">
      <template slot="title"
        >Commission</template
      >
      <template slot="subtitle"
        >Marketing</template
      >
      <template slot="content"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut.</template
      >
      <template slot="volume"
        >0.05</template
      >
    </promotion>

    <promotion icon="6.png" alt="Marketing" link="#">
      <template slot="title"
        >Commission</template
      >
      <template slot="subtitle"
        >Marketing</template
      >
      <template slot="content"
        >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut.</template
      >
      <template slot="volume"
        >0.05</template
      >
    </promotion>
  </div>
</template>

<script>
import Promotion from "~/components/commons/dashboard/Promotion";
export default {
  props: {
    icon: String,
    alt: String
  },
  components: {
    Promotion
  }
};
</script>

<style>
</style>