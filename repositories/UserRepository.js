const resource = "/user";
export default $axios => ({
  index() {
    return $axios.get(`${resource}`);
  },

  show(id) {
    return $axios.get(`${user}/?_id=${id}`);
  },

  create(payload) {
    return $axios.post(`/register`, payload);
  },

  updateAffiliate(id, payload) {
    return $axios.post(`${resource}/${id}`, payload);
  },
  updateMerchant(id, payload) {
    return $axios.post(`${resource}/merchant/${id}`, payload);
  },
  delete(id) {
    return $axios.delete(`${resource}/${id}`);
  }
});
