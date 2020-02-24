export const state = () => ({
  messages: []
});

export const mutations = {
  set(state, messages) {
    state.messages = messages;
  }
};

export const actions = {
  async get({ commit }) {
    const res = await this.$repositories.message.get();
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  }
};
