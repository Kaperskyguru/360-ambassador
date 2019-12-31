<template>
  <div class="row justify-content-start mb-5">
    <h6 class="dashboard__heading col-12 mb-5">Performance Summary</h6>

    <box icon="Mask-Group-4.png">
      <template slot="title"
        >Total Promotions</template
      >
      <template slot="price"
        >11,000.00 NGN</template
      >
    </box>

    <box icon="Mask-Group-5.png">
      <template slot="title"
        >Total Affiliates</template
      >
      <template slot="price"
        >16</template
      >
    </box>

    <box icon="Mask-Group-6.png">
      <template slot="title"
        >Sales</template
      >
      <template slot="price"
        >10</template
      >
    </box>

    <box icon="Mask-Group-7.png">
      <template slot="title"
        >Clicks</template
      >
      <template slot="price"
        >234</template
      >
    </box>

    <box icon="Mask-Group-8.png">
      <template slot="title"
        >Impressions</template
      >
      <template slot="price"
        >987</template
      >
    </box>

    <box icon="Mask-Group-9.png">
      <template slot="title"
        >Visitors</template
      >
      <template slot="price"
        >450</template
      >
    </box>
  </div>
</template>

<script>
import Box from "~/components/commons/dashboard/PerformanceBox";
export default {
  components: {
    Box
  }
};
</script>

<style>
</style>