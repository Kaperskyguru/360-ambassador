<template >
  <span id="notification">
    <div
      class="dropdown-menu home-notification__  "
      :class="{ show: show }"
      aria-labelledby="navbarDropdown"
    >
      <h5 class="dropdown-item home-notification__item color-black col-12 p-0">
        <span class="">{{ title }}</span>
      </h5>
      <div class="dropdown-divider col-12"></div>
      <div
        class="dropdown-item home-notification__text  bg-transparent col-12"
        v-for="(message, i) in data"
        :key="i"
      >
        <div class="row">
          <div class="col-2 p-0 m-0">
            <img
              src="~/assets/images/banner.webp"
              class="rounded-circle img-thumbnail img-fluid"
              alt=""
            />
          </div>
          <div class="col-10">
            <p class="color-blue notification-text col-12 p-0 m-0">
              <span class="text-bold">Solomon Eseme</span>
              {{ message.message }} <br />
              <span class="text-uppercase">Bukka Nut</span>
            </p>
            <div class="col-12 p-0">
              <span class="color-blue">
                {{ $moment("15/05/2020:5:00:00") }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown-item home-notification__text  bg-transparent col-12">
        <div class="row">
          <div class="col-2 p-0 m-0">
            <img
              src="~/assets/images/banner.webp"
              class="rounded-circle img-thumbnail img-fluid"
              alt=""
            />
          </div>
          <div class="col-10">
            <p class="color-blue notification-text col-12 p-0 m-0">
              <span class="text-bold">Solomon Eseme</span> has joinned the
              promotion <br />
              <span class="text-uppercase">Bukka Nut</span>
            </p>
            <div class="col-12 p-0">
              <span class="color-blue">
                {{ $moment("2020-04-15 05:56").fromNow() }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown-item home-notification__text  bg-transparent col-12">
        <div class="row">
          <div class="col-2 p-0 m-0">
            <img
              src="~/assets/images/banner.webp"
              class="rounded-circle img-thumbnail img-fluid"
              alt=""
            />
          </div>
          <div class="col-10">
            <p class="color-blue notification-text col-12 p-0 m-0">
              <span class="text-bold">Solomon Eseme</span> has joinned the
              promotion <br />
              <span class="text-uppercase">Bukka Nut</span>
            </p>
            <div class="col-12 p-0">
              <span class="color-blue">
                5 mins ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown-item home-notification__text  bg-transparent col-12">
        <div class="row">
          <div class="col-2 p-0 m-0">
            <img
              src="~/assets/images/banner.webp"
              class="rounded-circle img-thumbnail img-fluid"
              alt=""
            />
          </div>
          <div class="col-10">
            <p class="color-blue notification-text col-12 p-0 m-0">
              <span class="text-bold">Solomon Eseme</span> has joinned the
              promotion <br />
              <span class="text-uppercase">Bukka Nut</span>
            </p>
            <div class="col-12 p-0">
              <span class="color-blue">
                5 mins ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown-item home-notification__text  bg-transparent col-12">
        <div class="row">
          <div class="col-2 p-0 m-0">
            <img
              src="~/assets/images/banner.webp"
              class="rounded-circle img-thumbnail img-fluid"
              alt=""
            />
          </div>
          <div class="col-10">
            <p class="color-blue notification-text col-12 p-0 m-0">
              <span class="text-bold">Solomon Eseme</span> has joinned the
              promotion <br />
              <span class="text-uppercase">Bukka Nut</span>
            </p>
            <div class="col-12 p-0">
              <span class="color-blue">
                5 mins ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown-item home-notification__text  bg-transparent col-12">
        <div class="row">
          <div class="col-2 p-0 m-0">
            <img
              src="~/assets/images/banner.webp"
              class="rounded-circle img-thumbnail img-fluid"
              alt=""
            />
          </div>
          <div class="col-10">
            <p class="color-blue notification-text col-12 p-0 m-0">
              <span class="text-bold">Solomon Eseme</span> has joinned the
              promotion <br />
              <span class="text-uppercase">Bukka Nut</span>
            </p>
            <div class="col-12 p-0">
              <span class="color-blue">
                5 mins ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown-item home-notification__text  bg-transparent col-12">
        <div class="row">
          <div class="col-2 p-0 m-0">
            <img
              src="~/assets/images/banner.webp"
              class="rounded-circle img-thumbnail img-fluid"
              alt=""
            />
          </div>
          <div class="col-10">
            <p class="color-blue notification-text col-12 p-0 m-0">
              <span class="text-bold">Solomon Eseme</span> has joinned the
              promotion <br />
              <span class="text-uppercase">Bukka Nut</span>
            </p>
            <div class="col-12 p-0">
              <span class="color-blue">
                5 mins ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import Icon from "~/components/commons/Icon";
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },

    data: {
      type: Object
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    Icon
  }
};
</script>

<style>
#notification .home-notification__ {
  width: 45rem;
  left: unset;
  right: 0;
  background: white;
  border: 1px solid #eee;
  overflow-x: unset;
  overflow-y: scroll;
  height: 350px;
  padding: 2rem;
}
#notification .home-notification__text {
  white-space: normal;
  text-transform: none;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
}

#notification .home-notification__item {
  white-space: normal;
  text-transform: none;
  font-size: 1.5rem;
}
#notification .dashboard__promotions--card--img {
  width: 100%;
  height: 3.25rem;
  border-radius: 50%;
}
</style>