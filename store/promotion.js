const resource = "promotion";

export const state = () => ({
  promotions: [],
  promotion: [],
  myPromotions: [],
  joinedPromotions: [],
  joinedPromotion: []
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
    const res = await this.$repositories.promotion.show(promotion);
    console.log(res);
    commit("find", res.data.data);
  },
  async set({ commit }, form) {
    const res = await this.$repositories.promotion.create(form);
    if (res.status === 200 && res.data.success && res.data.code) {
      // commit("set", res.data);
    }
  },

  async promotionsByUserID({ commit }, id) {
    const res = await this.$repositories.promotion.getAllByUserID(id);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("setMyPromotions", res.data.data);
    }
  },

  async joinedPromotions({ commit }, data) {
    const res = await this.$repositories.promotion.getJoinedPromotions(data);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("setJoinedPromotion", res.data.data);
    }
  },

  async joinPromotion({ commit }, data) {
    const res = await this.$repositories.promotion.joinPromotion(data);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("setJoinedPromotions", res.data.data);
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
