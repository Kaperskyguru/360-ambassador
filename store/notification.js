export const state = () => ({
  notifications: []
});

export const mutations = {
  set(state, notifications) {
    console.log(notifications);
    state.notifications = notifications;
  }
};

export const actions = {
  async get({ commit }) {
    const res = await this.$repositories.notification.get();
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  },
  async getByUser({ commit }, user) {
    const res = await this.$repositories.notification.getByUser(user);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  }
};
