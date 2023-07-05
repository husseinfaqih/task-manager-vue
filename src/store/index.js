import { createStore } from 'vuex';
import tasks from './modules/tasks';

/**
 * Create and configure the Vuex store.
 * The store includes a module for tasks.
 */
export default createStore({
  modules: {
    tasks,
  },
});
