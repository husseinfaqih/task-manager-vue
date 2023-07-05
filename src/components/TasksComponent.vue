<template>
  <div v-for="task in allTasks" :key="task.id">
    <TaskComponent :task="task"></TaskComponent>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskComponent from './TaskComponent.vue';

export default {
  name: 'TasksComponent',
  components: {
    TaskComponent
  },
  computed: {
    ...mapGetters(['allTasks'])
  }
}
</script>

<style>

</style>
