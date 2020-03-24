<template>
  <main>
    <div v-if="$nuxt.isOffline">
      You are currently not connected to the internet
    </div>
    <client-only>
      <notifications
        group="alerts"
        classes="vue-notification"
        position="bottom right"
      >
        <template slot="body" slot-scope="props">
          <b-alert
            :show="props.item.duration || 30000"
            dismissible
            :variant="props.item.type || 'info'"
            @dismissed="props.item.timer = 0"
          >
            <p>{{ props.item.text }}</p>
            <b-progress
              :variant="props.item.type"
              striped
              :animated="true"
              :max="props.item.duration || 30000"
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
  middleware: "defaultData"
};
</script>
<style>
</style>


