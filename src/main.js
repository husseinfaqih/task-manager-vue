import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

createApp(App)
  .use(store) // Use the Vuex store plugin
  .mount('#app'); // Mount the app to the '#app' element in the DOM
