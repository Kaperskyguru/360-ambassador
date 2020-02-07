const resource = "/tasks";
export default $axios => ({
  get() {
    return $axios.get(`${resource}`);
  }
});
