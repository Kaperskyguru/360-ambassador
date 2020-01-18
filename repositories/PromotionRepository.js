// import Client from "./Services/AxioAPIClient";
const resource = "promotion";
import Vue from "vue";

export default {
  get() {
    console.log(Vue.context);
    // return Vue.$api.get(`${resource}`);
  },
  find(attribute) {
    return Client.get(`${resource}/${attribute}`);
  }
};
