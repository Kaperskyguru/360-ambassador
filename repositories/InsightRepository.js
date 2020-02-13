const resource = "/graph";
export default $axios => ({
  totalEarningsGraph(user) {
    return $axios.get(`${resource}?user=${user}`);
  }
});
