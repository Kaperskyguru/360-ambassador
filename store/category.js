export const state = () => ({
  categories: []
});

export const getters = {
  find: state => category_id => {
    const category = state.categories.find(item => item._id == category_id);
    if (category) return category;
    return;
  }
};
export const mutations = {
  set(state, categories) {
    state.categories = categories;
  }
};

export const actions = {
  async get({ commit }) {
    const res = await this.$repositories.category.all();
    if (res.status === 200 && res.data.success && res.data.code) {
      commit("set", res.data.data);
    }
  }
};
