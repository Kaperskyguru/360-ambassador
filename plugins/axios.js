import Client from "~/repositories/clients/AxiosClient";

export default function({ $axios, redirect }, inject) {
  $axios.onRequest(config => {
    // console.log("Making request to ", config.headers);
    if (config.url == "/verify") {
      // console.log(config);
    }
    // $axios.setHeader("Access-Control-Allow-Origin", "*");
  });

  $axios.onResponse(res => {
    // if (config.url == "/verify") {
    // console.log(res.data);
    // }
  });

  $axios.onError(error => {
    // console.log(error);
    // const code = parseInt(error.response && error.response.status);
    // if (code === 404) {
    //   redirect("/");
    // }
  });
}
