const resource = "roles";
export const state = () => ({
  roles: []
});

export const mutations = {
  set(state, roles) {
    console.log(roles);

    state.roles = roles;
  },

  find(state, id) {
    const roles = state.roles;

    roles.filter(item => {
      return item._id == id;
    });
  }
};

export const getters = {
  getRoleIDByName: state => name => {
    const role = state.roles.find(role => role.name == name);
    if (role) return role._id;
    return;
  }
};

export const actions = {
  async get({ commit }) {
    const res = await this.$axios.get(`/${resource}`);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  }
};
