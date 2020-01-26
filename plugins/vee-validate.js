import { extend } from "vee-validate";
import {
  required,
  alpha,
  email,
  image,
  ext,
  min,
  digits
} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email
  //   message: "This field must only contain alphabetic characters"
});

extend("alpha", {
  ...alpha
});

extend("image", {
  ...image
});

extend("ext", {
  ...ext
});

extend("min", {
  ...min
});

extend("digits", {
  ...digits
});
