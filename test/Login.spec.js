import { mount, RouterLinkStub } from "@vue/test-utils";
import Login from "@/components/pages/Login.vue";

describe("Login", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Login, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
