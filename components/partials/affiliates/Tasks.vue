<template>
  <div class="dashboard__general--card">
    <span v-for="(task, i) in tasks" :key="i">
      <task>{{ task.name }}</task>
      <hr />
    </span>
    <div v-if="isEmpty"><p>No tasks yet</p></div>
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
        if (state.task.tasks) return [...state.task.tasks].slice(0, 2);
      }
    }),
    isEmpty() {
      if (this.tasks) return Object.entries(this.tasks).length === 0;
      return true;
    }
  }
};
</script>

