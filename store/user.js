export const state = () => ({
  user: [],
  topMerchants: []
});

export const mutations = {
  storeUser(state, user) {
    state.user = user;
  },
  storeTopMerchants(state, merchants) {
    state.topMerchants = merchants;
  }
};
export const actions = {
  async me() {
    return await this.$auth.fetchUser();
  },

  async login({ commit, dispatch }, { email, password }) {
    return this.$auth.loginWith("local", {
      data: { email, password }
    });
  },

  async logout() {
    await this.$auth.logout();
  },

  async find({ dispatch, commit }, id) {
    const res = await this.$repositories.user.show(id);
    if (res.data.code == 200 && res.data.success) {
      commit("storeUser", res.data.data);
      return res.data.data;
    }
  },

  async getTopMerchants({ dispatch, commit }) {
    const res = await this.$repositories.user.topMerchants();
    if (res.data.code == 200 && res.data.success) {
      commit("storeTopMerchants", res.data.data);
    }
  },

  async register({ dispatch, commit }, form) {
    const res = await this.$repositories.user.create(form);
    const data = res.data;
    if (data.data.code == 201 && data.success) {
      form.id = data.data._id;
      commit("storeUser", form);
    }
    return res.data;
  },

  async update({ commit }, { form, id }) {
    const res = await this.$repositories.user.updateAffiliate(id, form);
    console.log(res);
    return res;
  },

  async updateMerchant({ commit }, { form, id }) {
    return await this.$repositories.user.updateMerchant(id, form);
  },

  async confirmEmail({ commit }, token) {
    return await this.$repositories.user.confirmEmail(token);
  },

  delete(id) {
    return this.$repositories.user.delete();
  }
};
