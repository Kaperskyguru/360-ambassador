import { shallowMount } from "@vue/test-utils";
import Modal from "@/components/Modals.vue";

describe("Modal", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Modal);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("initializes with correct elements", () => {
    expect(wrapper.name()).toMatch("Modal");

    // Check that the elements are rendered
    expect(wrapper.findAll("div").length).toEqual(7);
    expect(wrapper.findAll("p").length).toEqual(1);
    expect(wrapper.findAll("img").length).toEqual(1);
    expect(wrapper.findAll("h6").length).toEqual(1);

    //Check that the contents are displayed
    expect(
      wrapper
        .findAll("h6")
        .at(0)
        .text()
    ).toMatch("Congratulation!");
  });
});
