import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import './index.css';

// Load tasks from local storage when the application is created
store.commit('loadTasks');

// Create the Vue app instance and mount the App component
createApp(App)
  .use(store) // Use the Vuex store plugin
  .mount('#app'); // Mount the app to the '#app' element in the DOM
