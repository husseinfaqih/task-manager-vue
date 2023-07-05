<template>
  <div v-for="task in allTasks" :key="task.id">

    <h3>{{ task.text }}</h3>


</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TasksComponent',
  computed: {
    ...mapGetters(['allTasks'])
  }
}
</script>

<style>

</style>
