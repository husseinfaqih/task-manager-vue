<template>
  <div>
    <h3 >{{ task.text }}</h3>
    <i class="fas fa-times" @click="deleteTask(task.id)"></i>
    <i class="fas fa-pen" ></i>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskComponent',
  props: {
    task: Object
  },
  data() {
    return {
      taskText: "", // Stores the task text in the input field
    };
  },
  methods: {
    ...mapActions(['deleteTask']),

  }
}
</script>

<style scoped>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
