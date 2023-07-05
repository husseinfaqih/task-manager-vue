<template>
  <div>
    <h3 v-if="!editing">{{ task.text }}</h3>
    <input v-model="taskText" v-if="editing" @keydown.enter="saveTask" type="text">
    <i class="fas fa-times" @click="deleteTask(task.id)"></i>
    <i :class="['fas', {'fa-pen': !editing, 'fa-check': editing}]" @click="toggleEditing"></i>
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
      editing: false // Indicates whether the task is in editing mode
    };
  },
  methods: {
    ...mapActions(['deleteTask', 'updateTask']),

    toggleEditing() {
      if (!this.editing) {
        this.taskText = this.task.text;
      } else {
        const updatedTask = {
          ...this.task,
          text: this.taskText
        };
        this.updateTask(updatedTask);
      }
      this.editing = !this.editing; // Toggle editing state
    },

    saveTask() {
      this.toggleEditing();
    }
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
