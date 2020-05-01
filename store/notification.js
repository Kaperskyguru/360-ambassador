export const state = () => ({
  notifications: []
});

export const mutations = {
  set(state, notifications) {
    state.notifications = notifications;
  }
};

export const actions = {
  async get({ commit }, user) {
    const res = await this.$repositories.notification.get(user);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  }
};
