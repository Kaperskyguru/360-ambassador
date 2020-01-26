export const state = () => ({
  user: []
});

export const mutations = {
  storeUser(state, user) {
    state.user = user;
  }
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
    const res = await this.$axios.get(`/user/${id}`);
    return res;
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

  update({ commit }, { form, id }) {
    return this.$axios.put(`/user/${id}`, form);
  },

  delete() {
    return this.$axios.delete(`/user/${this.$auth.user.id}`);
  }
};
