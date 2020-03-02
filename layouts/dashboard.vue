<template>
  <main>
    <div v-if="$nuxt.isOffline">
      You are currently not connected to the internet
    </div>
    <client-only>
      <notifications group="alerts" position="bottom right">
        <template slot="body" slot-scope="props">
          <b-alert
            :show="props.item.duration || 3000"
            dismissible
            :variant="props.item.type || 'info'"
            @dismissed="props.item.timer = 0"
          >
            <p>{{ props.item.text }}</p>
            <b-progress
              :variant="props.item.type"
              striped
              :animated="true"
              :max="props.item.duration"
              :value="props.item.timer"
              height="4px"
            >
            </b-progress>
          </b-alert>
        </template>
      </notifications>
    </client-only>
    <nuxt />
  </main>
</template>
<script>
export default {
  middleware: "loadDashboardData"
};
</script>
<style scoped>
</style>


