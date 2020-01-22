export default axios =>
  axios.create({
    headers: {
      common: {
        Accept: "text/plain, */*"
      }
    }
  });
