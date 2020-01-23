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
  register({ dispatch, commit }, form) {
    return this.$axios.post("/register", form);
  },
  update(
    { commit, state },
    {
      first_name,
      last_name,
      nickname,
      password,
      password_confirmation,
      avatar,
      dining_preferences,
      allergies,
      addresses,
      telephones,
      locale
    }
  ) {
    return this.$axios.put(`/users/${this.$auth.user.id}`, {
      user: {
        first_name,
        last_name,
        nickname,
        password,
        password_confirmation,
        avatar,
        dining_preferences,
        allergies,
        addresses,
        telephones,
        locale
      }
    });
  },
  delete() {
    return this.$axios.delete(`/users/${this.$auth.user.id}`);
  }
};
