<template>
  <div class="task">
    <!-- Display task text when not in editing mode -->
    <h3 v-if="!editing">{{ task.text }}</h3>

    <!-- Input field for editing task text when in editing mode -->
    <input v-model="taskText" v-if="editing" @keydown.enter="saveTask" type="text" class="input">

    <!-- Delete task button -->
    <i class="fas fa-times" @click="deleteTask(task.id)"></i>

    <!-- Edit task button -->
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

    /**
     * Toggles the editing state of the task and updates the task if the editing state is false.
     * If the editing state is true, it sets the taskText to the current task text.
     * If the editing state is false, it updates the task with the new task text.
     */
    toggleEditing() {
      if (!this.editing) {
        // Enter editing mode
        this.taskText = this.task.text;
      } else {
        // Exit editing mode and save changes
        const updatedTask = {
          ...this.task,
          text: this.taskText
        };
        this.updateTask(updatedTask);
      }
      this.editing = !this.editing; // Toggle editing state
    },

    /**
     * Saves the task changes when Enter key is pressed.
     * It calls the toggleEditing method to save the changes.
     */
    saveTask() {
      this.toggleEditing();
    }
  }
}
</script>

<style scoped>
.fas {
  font-size:1.3em;
  color: red;
  margin-top: 1em;
  cursor: pointer;

}
.fa-pen{
  font-size:1.1em;
  margin-left:10px ;
}

.fa-check{
  margin-left:10px ;

}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 30px 20px;
  /* cursor: pointer; */
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
</style>
