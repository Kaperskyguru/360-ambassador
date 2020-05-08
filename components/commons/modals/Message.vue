<template >
  <span id="message">
    <div
      class="dropdown-menu home-notification__ "
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
          <div class="col-2 m-0">
            <img
              :src="message.image || require('~/assets/images/man-user.png')"
              class="rounded-circle img-fluid img-thumbnail"
              alt=""
            />
          </div>
          <div class="col-10">
            <p class="color-blue notification-text col-12 p-0 m-0">
              <span class="text-bold">{{ message.user_name }}</span>
              <span class="text-uppercase"
                >{{ message.message.substr(0, 35) }} ...</span
              >
            </p>
            <div class="col-12 p-0">
              <span class="color-blue">
                {{ $moment(message.date).fromNow() }}
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
      type: [Object, Array]
    },
    title: {
      type: String,
      default: ""
    }
  },
  components: {
    Icon
  },
  computed: {
    message(message) {
      return this.data.map(message => {
        console.log(message);
      });
    }
  }
};
</script>

<style>
#message .home-notification__ {
  width: 45rem;
  left: unset;
  right: 0;
  background: white;
  border: 1px solid #eee;
  overflow-x: unset;
  overflow-y: scroll;
  max-height: 350px;
  padding: 1rem;
}
#message .home-notification__text {
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

#message .home-notification__item {
  white-space: normal;
  text-transform: none;
  font-size: 1.5rem;
}
#message .home-notification__text img {
  width: 100%;
  height: 4rem;
  border-radius: 50%;
}
</style>