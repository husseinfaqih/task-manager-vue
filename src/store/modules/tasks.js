/**
 * State object for tasks module.
 *
 * @name state
 * @memberOf store/tasks
 * @type {Object}
 * @property {Array} tasks - The array of tasks.
 */
const state = {
  tasks: [],
};

/**
 * Getters for tasks module.
 *
 * @type {Object}
 * @property {Function} allTasks - Returns all tasks.
 */
const getters = {
  allTasks: (state) => state.tasks,
};

/**
 * Actions for tasks module.
 *
 * @type {Object}
 * @property {Function} addTask - Adds a new task.
 * @property {Function} deleteTask - Deletes a task.
 * @property {Function} updateTask - Updates a task.
 */
const actions = {
  /**
   * Adds a new task to the store.
   * @param {Object} task - The task object to be added.
   */
  addTask({ commit }, task) {
    commit('add_task', task);
  },
  /**
   * Deletes a task from the store.
   * @param {Object} id - The ID of the task to be deleted.
   */
  deleteTask({ commit }, id) {
    commit('delete_task', id);
  },
  /**
   * Updates a task in the store.
   * @param {Object} task - The updated task object.
   */
  updateTask({ commit }, task) {
    commit('update_task', task);
  },
};

/**
 * Mutations for tasks module.
 *
 * @type {Object}
 * @property {Function} loadTasks - Loads tasks from local storage.
 * @property {Function} add_task - Adds a task.
 * @property {Function} delete_task - Deletes a task.
 * @property {Function} update_task - Updates a task.
 */
const mutations = {
  /**
   * Loads tasks from local storage and sets them as the state.
   */
  loadTasks(state) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      state.tasks = tasks;
    }
  },

  /**
   * Adds a task to the state.
   * @param {Object} state - The Vuex state object.
   * @param {Object} task - The task object to be added.
   */
  add_task(state, task) {
    state.tasks.push(task);
    saveTasksToLocalStorage(state.tasks);
  },

  /**
   * Deletes a task from the state.
   * @param {Object} state - The Vuex state object.
   * @param {Object} id - The ID of the task to be deleted.
   */
  delete_task(state, id) {
    state.tasks = state.tasks.filter((task) => task.id !== id);
    saveTasksToLocalStorage(state.tasks);
  },

  /**
   * Updates a task in the state.
   * @param {Object} state - The Vuex state object.
   * @param {Object} updatedTask - The updated task object.
   */
  update_task(state, updatedTask) {
    const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks[index] = updatedTask;
      saveTasksToLocalStorage(state.tasks);
    }
  },
};

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default {
  state,
  getters,
  actions,
  mutations,
};
