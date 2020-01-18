const resource = "categories";
export const state = () => ({
  categories: []
});

export const mutations = {
  set(state, categories) {
    state.categories = categories;
  }

  //   find(state, id) {
  //     state.categories.filter(item => {
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
