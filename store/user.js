export const state = () => ({
  user: []
  // singleUser: []
});

export const mutations = {
  storeUser(state, user) {
    state.user = user;
  }
  // storeSingleUser(state, user) {
  //   state.singleUser = user;
  // }
};
export const actions = {
  async me() {
    return await this.$auth.fetchUser();
  },

  async login({ commit, dispatch }, { username, password }) {
    return this.$auth.loginWith("local", {
      data: { username, password }
    });
  },

  async logout() {
    await this.$auth.logout();
  },

  async find({ dispatch, commit }, id) {
    const res = await this.$axios.get(`/user/?_id=${id}`);
    if (res.data.code == 200 && res.data.success) {
      commit("storeUser", res.data.data);
    }
  },

  async register({ dispatch, commit }, form) {
    const res = await this.$axios.post("/register", form);
    const data = res.data;
    if (data.data.code == 201 && data.success) {
      form.id = data.data._id;
      commit("storeUser", form);
    }
    return res.data;
  },

  async update({ commit }, { form, id }) {
    return await this.$axios.post(`/user/${id}`, form);
  },

  async updateMerchant({ commit }, { form, id }) {
    return await this.$axios.post(`/user/merchant/${id}`, form);
  },

  delete() {
    return this.$axios.delete(`/user/${this.$auth.user.id}`);
  }
};
