export const state = () => ({
  earningGraph: []
});

export const mutations = {
  set(state, data) {
    if (data !== null) state.earningGraph = data[0];
  }
};

export const actions = {
  async earningsGraph({ commit }, user) {
    const res = await this.$repositories.insight.totalEarningsGraph(user);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  }
};
