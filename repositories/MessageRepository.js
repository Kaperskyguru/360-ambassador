const resource = "/messages";
export default $axios => ({
  get() {
    return $axios.get(`${resource}`);
  }
});
