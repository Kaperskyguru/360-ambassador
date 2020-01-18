export default function({ $axios, redirect }, inject) {
  // $axios.onRequest(config => {
  //   console.log("Making request to ", config);
  // });
  $axios.onResponse(res => {
    // console.log(res);
  });
  $axios.onError(error => {
    console.log(error);
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/");
    }
  });

  // // Create a custom axios instance
  // const api = $axios.create({
  //   headers: {
  //     common: {
  //       Accept: "application/json, */*"
  //     }
  //   }
  // });

  // // Set baseURL to something different
  // api.setBaseURL("https://damp-hollows-99847.herokuapp.com/api/v1");

  // // Inject to context as $api
  // inject("api", api);
}
