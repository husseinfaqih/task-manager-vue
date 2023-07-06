<template>
  <div class="task rounded-lg bg-gray-50 p-5 my-2">
    <!-- Display task text when not in editing mode -->
    <h3 v-if="!editing" >{{ task.text }}</h3>

    <!-- Input field for editing task text when in editing mode -->
    <input v-model="taskText" v-if="editing" @keydown.enter="saveTask" type="text" class="w-full h-10 px-3 py-2 border rounded-lg text-base italic">

    <!-- Delete task button -->
    <i class="fas fa-times text-red-500 cursor-pointer mt-5" @click="deleteTask(task.id)"></i>

    <!-- Edit task button -->
    <i :class="['fas', {'fa-pen': !editing, 'fa-check': editing}]" class="text-black-500 cursor-pointer ml-2" @click="toggleEditing"></i>
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

