import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      //   stubs: {
      //     NuxtLink: RouterLinkStub
      //   },
      propsData: {
        title: "Sign In"
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
    expect(wrapper.name()).toMatch("Header");

    // Check that the elements are rendered
    expect(wrapper.findAll("div").length).toEqual(5);
    expect(wrapper.findAll("p").length).toEqual(2);
    expect(wrapper.findAll("h1").length).toEqual(2);
    expect(wrapper.findAll("header").length).toEqual(1);

    //Check that the contents are displayed
    expect(
      wrapper
        .findAll("h6")
        .at(0)
        .text()
    ).toMatch("Reach more Global Customers");
  });
});
