const resource = "roles";
export const state = () => ({
  roles: []
});

export const mutations = {
  set(state, roles) {
    // console.log(roles);
    state.roles = roles;
  }

  //   find(state, id) {
  //     state.roles.filter(item => {
  //       return (item._id = id);
  //     });
  //   }
};

export const actions = {
  async get({ commit }) {
    const res = await this.$axios.get(`/${resource}`);
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  }
};
