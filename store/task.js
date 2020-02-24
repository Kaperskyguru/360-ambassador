export const state = () => ({
  tasks: []
});

export const mutations = {
  set(state, tasks) {
    state.tasks = tasks;
  }
};

export const actions = {
  async get({ commit }) {
    const res = await this.$repositories.task.get();
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  }
};
