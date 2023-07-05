const state = {
  tasks: [
    {
      id: 1,
      text: 'dummy',
    },
    {
      id: 2,
      text: 'dummy',
    },
    {
      id: 3,
      text: 'dummy',
    },
    {
      id: 4,
      text: 'dummy',
    },
  ],
};

const getters = {
  allTasks: (state) => state.tasks,
};

const actions = {
  addTask({ commit }, task) {
    commit('add_task', task);
  },
  deleteTask({ commit }, id) {
    commit('delete_task', id);
  },
};

const mutations = {
  loadTasks(state) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      state.tasks = tasks;
    }
  },
  add_task(state, task) {
    state.tasks.push(task);
    saveTasksToLocalStorage(state.tasks);
  },
  delete_task(state, id) {
    state.tasks = state.tasks.filter((task) => task.id !== id);
    saveTasksToLocalStorage(state.tasks);
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
