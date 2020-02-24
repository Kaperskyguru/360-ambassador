const resource = "/promotion";
export default $axios => ({
  index() {
    return $axios.get(`${resource}`);
  },

  show(id) {
    return $axios.get(`${resource}/${id}`);
  },

  getAllByUserID(id) {
    return $axios.get(`/all_my_created_promotion?user_id=${id}`);
  },

  create(payload) {
    return $axios.post(`${resource}`, payload);
  },

  joinPromotion(payload) {
    const headers = {
      "Content-Type": "application/json"
    };

    return $axios.post(`/apply`, payload, { headers });
  },

  getJoinedPromotions(user) {
    return $axios.get(`/applied/${user}`);
  },

  latest() {
    return $axios.get(`/latest`);
  },

  performance(user = "") {
    return $axios.get(`/promoter_performance?user=${user}`);
  },

  update(id, payload) {
    return $axios.post(`${resource}/${id}`, payload);
  },

  search(keyword = "", category = "") {
    return $axios.get(`search?search=${keyword}&category=${category}`);
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`);
  }
});
