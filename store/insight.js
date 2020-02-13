export const state = () => ({
  earningGraph: []
});

export const mutations = {
  set(state, data) {
    if (data !== null) state.earningGraph = data[0].graph;
  }
};

export const actions = {
  async earningsGraph({ commit }, user) {
    const res = await this.$repositories.insight.totalEarningsGraph(
      "5e2eb02d73491f05fbcfbdc0"
    );
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  }
};
