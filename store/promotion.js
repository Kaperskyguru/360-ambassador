const resource = "promotion";

export const state = () => ({
  promotions: [],
  promotion: []
});

export const mutations = {
  set(state, promotions) {
    state.promotions = promotions;
  },

  find(state, promotion) {
    state.promotion = promotion;
  }
};

export const actions = {
  async get({ commit }) {
    const res = await this.$repositories.promotion.index();
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  },
  async find({ commit }, promotion) {
    const res = await this.$axios.get(`/${resource}/${promotion}`);
    // console.log(res.data);
    commit("find", res.data.data);
  },
  async set({ commit }) {
    const res = await this.$axios.post(`/${resource}`);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data);
    }
  },

  async update({ commit }, { id, data }) {
    const res = await this.$axios.put(`/approve/` + id, data);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data);
    }
  },
  async delete({ commit }, { id, data }) {
    const res = await this.$axios.put(`/approve/` + id, data);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data);
    }
  }
};
