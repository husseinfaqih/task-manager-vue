<template>
  <form class="add-form mb-8" @submit.prevent="addTaskAndClearFields">

    <div class="mb-4">
      <label class="block my-2">Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task"  class="w-full h-10 px-3 py-2 border rounded-lg text-base" />
    </div>
    
    <input type="submit" value="Save Task" class="bg-black text-white rounded-md py-2 px-4 block w-full cursor-pointer hover:bg-gray-900" />
  </form>
</template>

<script>
import { mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID library

export default {
  name: 'AddTask',
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapActions(['addTask']),

    /**
     * Adds a new task and clears the input field.
     */
    addTaskAndClearFields() {
      // Generate a random ID for the new task
      const newTask = {
        id: uuidv4(), // Use UUID to generate a unique ID
        text: this.text,
      };

      // Dispatch the 'addTask' action with the new task
      this.addTask(newTask);

      // Clear the input field
      this.clearFields();
    },

    /**
     * Clears the input field.
     */
    clearFields() {
      this.text = "";
    }
  },
};
</script>
