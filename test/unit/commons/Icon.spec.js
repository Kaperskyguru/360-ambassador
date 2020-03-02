import { shallowMount } from "@vue/test-utils";
import Icon from "@/components/commons/Icon.vue";

describe("Modal", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Icon, {
      propsData: {
        icon: "@/assets/images/Mask-Group-5.png",
        alt: "This is an icon",
        round: "30"
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("initializes with correct elements", () => {
    expect(wrapper.name()).toMatch("Icon");

    // Check that the elements are rendered
    expect(wrapper.findAll("img").length).toEqual(1);

    //Check that the contents are displayed
    expect(
      wrapper
        .findAll("img")
        .at(0)
        .attributes("src")
    ).toMatch("@/assets/images/Mask-Group-5.png");

    expect(
      wrapper
        .findAll("img")
        .at(0)
        .attributes("style")
    ).toBe("border-radius: 30% !important;;");
  });
});
