import { mount, RouterLinkStub } from "@vue/test-utils";
import LoginForm from "@/components/partials/LoginForm.vue";

describe("Login", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(LoginForm, {
      stubs: {
        NuxtLink: RouterLinkStub
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
