const resource = "/notification";
export default $axios => ({
  get() {
    return $axios.get(`${resource}`);
  },

  getByUser(user) {
    return $axios.get(`${resource}/${user}`);
  }
});
