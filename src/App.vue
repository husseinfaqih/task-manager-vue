<template>
  <!-- App container -->
  <div class="font-poppins container mx-auto max-w-2xl mt-8 p-8 bg-white rounded border-2 border-black">
    <!-- Header component -->
    <HeaderComponent title="Task Tracker" />

    <!-- AddTask component -->
    <AddTask />

    <!-- TasksComponent -->
    <TasksComponent />

  
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import TasksComponent from "./components/TasksComponent.vue";
import AddTask from "./components/AddTask.vue";

/**
 * App component represents the main application container.
 * It includes a header, an add task component, and a tasks component that displays all tasks.
 */
export default {
  name: "App",
  components: {
    HeaderComponent,
    TasksComponent,
    AddTask
  }
};
</script>

<style>
/* No custom styles are required */
</style>
