export const state = () => ({
  tokens: []
});

export const mutations = {
  set(state, tokens) {
    state.tokens = tokens;
  }
};

export const actions = {
  async get({ commit }) {
    const res = await this.$axios.get(`/tokens`);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data);
    }
  }
};
