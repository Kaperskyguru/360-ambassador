import { shallowMount, RouterLinkStub, mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Footer, {
      stubs: {
        NuxtLink: RouterLinkStub
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
    expect(wrapper.name()).toMatch("Footer");

    // Check that the elements are rendered
    expect(wrapper.findAll("div").length).toEqual(8);
    expect(wrapper.findAll("p").length).toEqual(3);
    expect(wrapper.findAll("footer").length).toEqual(1);
    expect(wrapper.findAll("ul").length).toEqual(4);
    expect(wrapper.findAll("li").length).toEqual(13);
    expect(wrapper.findAll("a").length).toEqual(13);

    //Check that the contents are displayed
    expect(
      wrapper
        .findAll("p")
        .at(0)
        .text()
    ).toMatch("Company");
  });
});
