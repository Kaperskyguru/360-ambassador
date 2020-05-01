const resource = "/notifications";
export default $axios => ({
  get(user) {
    return $axios.get(`${resource}/${user}`);
  }
});
