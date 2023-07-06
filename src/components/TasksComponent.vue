<template>
  <div v-for="task in allTasks" :key="task.id">
    <TaskComponent :task="task"></TaskComponent>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskComponent from './TaskComponent.vue';

/**
 * TasksComponent displays all tasks by rendering the TaskComponent for each task.
 */
export default {
  name: 'TasksComponent',
  components: {
    TaskComponent
  },
  computed: {
    /**
     * Retrieves all tasks from the Vuex store.
     * @returns {Array} An array of all tasks.
     */
    ...mapGetters(['allTasks'])
  }
}
</script>
