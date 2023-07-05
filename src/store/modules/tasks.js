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

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
