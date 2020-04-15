export const state = () => ({
  promotions: {},
  promotion: {},
  myPromotions: {},
  joinedPromotions: {},
  joinedPromotion: {},
  latestPromotions: {},
  performance: {}
});

export const mutations = {
  set(state, promotions) {
    state.promotions = promotions;
  },

  find(state, promotion) {
    state.promotion = promotion;
  },

  setMyPromotions(state, promotions) {
    state.myPromotions = promotions;
  },

  setJoinedPromotions(state, promotions) {
    state.joinedPromotions = promotions;
  },
  setJoinedPromotion(state, promotion) {
    state.joinedPromotion = promotion;
  },
  setLatestPromotions(state, promotions) {
    state.latestPromotions = promotions;
  },

  setPerformance(state, performance) {
    state.performance = performance;
  }
};

export const actions = {
  async get({ commit }) {
    const res = await this.$repositories.promotion.index();
    if (res.status === 200 && res.data.success && res.data.code) {
      const { data } = res.data;
      commit("set", data);
    }
  },
  async find({ commit, state }, promotion) {
    try {
      const res = await this.$repositories.promotion.show(promotion);
      if (res.status === 200 && res.data.success && res.data.code) {
        commit("find", res.data.data);
        return res.data.data;
      }
    } catch (err) {
      console.log(err.response);
    }
  },

  async add({ commit }, form) {
    const res = await this.$repositories.promotion.create(form);
    if (res.status === 200 && res.data.success && res.data.code) {
      return res.data.data;
    }
  },

  async promotionsByUserID({ commit }, id) {
    const res = await this.$repositories.promotion.getAllByUserID(id);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("setMyPromotions", res.data.data);
    }
  },

  async latestPromotions({ commit }) {
    const res = await this.$repositories.promotion.latest();
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("setLatestPromotions", res.data.data);
    }
  },

  async performance({ commit }, user = "") {
    const res = await this.$repositories.promotion.performance(
      "5e2eb02d73491f05fbcfbdc0"
    );
    if (res.status === 200 && res.data.success && res.data.code) {
      if (Array.isArray(res.data.data)) {
        commit("setPerformance", res.data.data[0]);
      } else {
        commit("setPerformance", res.data.data);
      }
    }
  },

  async joinedPromotions({ commit }, user) {
    const res = await this.$repositories.promotion.getJoinedPromotions(user);
    if (res.status === 200 && res.data.success && res.data.code) {
      // Get avalaible promotions
      const { data } = res.data;
      commit("setJoinedPromotions", data);
    }
  },

  async joinPromotion({ commit }, data) {
    const res = await this.$repositories.promotion.joinPromotion(data);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("setJoinedPromotion", res.data.data);
    }
  },

  async searchPromotion({ commit }, data) {
    const keyword = data.keyword;
    const category = data.category;
    const res = await this.$repositories.promotion.search(keyword, category);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
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
