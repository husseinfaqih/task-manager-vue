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
};

const mutations = {
  add_task(state, task) {
    state.tasks.push(task);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
