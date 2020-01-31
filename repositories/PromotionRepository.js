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
    return $axios.$post(`/apply`, payload);
  },

  getJoinedPromotions(payload) {
    return $axios.get(`/applied`, payload);
  },

  update(id, payload) {
    return $axios.post(`${resource}/${id}`, payload);
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`);
  }
});
