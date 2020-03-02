import { shallowMount, createLocalVue } from "@vue/test-utils";
import ImageField from "@/components/commons/ImageField.vue";
import { ValidationProvider } from "vee-validate";
import flushPromises from "flush-promises";
// import { required, image, ext } from "vee-validate/dist/rules";

const localVue = createLocalVue();
localVue.use(ValidationProvider);

// extend("required", {
//   ...required
// });
// extend("ext", {
//   ...ext
// });
// extend("image", {
//   ...image
// });

describe("ImageField", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(ImageField, {
      sync: false,
      localVue
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("initializes with correct elements", async () => {
    expect(wrapper.name()).toMatch("ImageField");

    // Check that the elements are rendered
    expect(wrapper.findAll("input").length).toEqual(1);
    expect(wrapper.findAll("svg").length).toEqual(1);
    expect(wrapper.findAll("label").length).toEqual(1);
    expect(wrapper.findAll("span").length).toEqual(1);

    //Check that the contents are displayed
    wrapper.find("input").setValue("");
    await flushPromises();

    const errorEl = wrapper.find(".input-error");
    expect(errorEl.text()).toBeTruthy();

    expect(wrapper.emitted("triggerChange")).toBeTruthy();
  });
});
