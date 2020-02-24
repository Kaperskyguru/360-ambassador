<template>
  <div class="dashboard__general--card">
    <span v-for="(task, i) in tasks" :key="i">
      <task>{{ task.name }}</task>
      <hr />
    </span>
  </div>
</template>

<script>
import Task from "~/components/commons/dashboard/Task";
import { mapState } from "vuex";
export default {
  components: {
    Task
  },
  computed: {
    ...mapState({
      tasks: state => {
        return state.task.tasks;
      }
    })
  }
};
</script>

<style>
</style>