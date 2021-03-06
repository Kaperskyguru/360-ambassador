const resource = "/user";
export default $axios => ({
  index() {
    return $axios.get(`${resource}`);
  },

  show(id) {
    return $axios.get(`${resource}/?_id=${id}`);
  },

  topMerchants() {
    return $axios.get(`/top/merchant`);
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

  confirmEmail(token) {
    return $axios.get(`/confirm_email?token=${token}`);
  },

  delete(id) {
    return $axios.delete(`${resource}/${id}`);
  }
});
