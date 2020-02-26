<template>
  <b-nav class="my-2 my-lg-0">
    <b-nav-item class="">
      <nuxt-link class="nav-link color-white dashboard__nav--balance" to="#"
        >Balance<br /><span>11,000.00 NGN</span></nuxt-link
      >
    </b-nav-item>
    <b-nav-item class="">
      <nuxt-link
        class="nav-link color-white dashboard__nav--notification"
        to="#"
      >
        <message-icon />
        <span class="badge color-yellow bg-blue">1</span>
      </nuxt-link>
    </b-nav-item>
    <b-nav-item class="">
      <nuxt-link
        class="nav-link color-white dashboard__nav--notification"
        to="#"
      >
        <notification-icon />
        <span class="badge color-yellow bg-blue">10</span>
      </nuxt-link>
    </b-nav-item>
    <b-nav-item class="">
      <nuxt-link class="nav-link color-white" to="#">
        <help-icon />
      </nuxt-link>
    </b-nav-item>
    <nuxt-link
      class="nav-link dashboard__nav--profile d-flex"
      to="#"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <profile-image />
      <div class="col d-block m-0 p-0">
        <span class="dashboard__nav--profile-name col-12 d-block color-white"
          >Hi, {{ $auth.user.firstName || "" }}
          {{ $auth.user.lastName || "" }}</span
        >
        <span
          class="dashboard__nav--profile-location col-12 d-block color-white text-muted"
          >(53347890) {{ $auth.user.city || "" }},
          {{ $auth.user.state || "" }}</span
        >
      </div>
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        class="nav-item b-nav-dropdown"
        right
        toggle-class="nav-link-custom"
      >
        <div
          class="dropdown-menu-right dashboard__nav--profile-dropdown bg-grey-3"
        >
          <div class="row align-content-start">
            <b-dropdown-item
              class=" color-white dashboard__nav--profile-dropdown-item"
              to="#"
            >
              <edit-profile-icon />
              Edit Profile
            </b-dropdown-item>
            <b-dropdown-item
              class=" color-white dashboard__nav--profile-dropdown-item"
              to="#"
            >
              <settings-icon />
              Settings
            </b-dropdown-item>
          </div>
          <b-dropdown-divider></b-dropdown-divider>
          <div class="row align-content-end">
            <b-dropdown-item
              class=" color-white dashboard__nav--profile-dropdown-item"
              to="#"
              @click.native="logout"
            >
              <logout-icon />
              Log Out
            </b-dropdown-item>
          </div>
        </div>
      </b-nav-item-dropdown>
    </nuxt-link>
  </b-nav>
</template>

<script>
import ProfileImage from "~/components/commons/dashboard/ProfileImage";
import MessageIcon from "~/components/commons/Icons/Message";
import NotificationIcon from "~/components/commons/Icons/Notification";
import LogoutIcon from "~/components/commons/Icons/Logout";
import SettingsIcon from "~/components/commons/Icons/Settings";
import EditProfileIcon from "~/components/commons/Icons/EditProfile";
import HelpIcon from "~/components/commons/Icons/Help";

export default {
  components: {
    ProfileImage,
    NotificationIcon,
    MessageIcon,
    LogoutIcon,
    SettingsIcon,
    EditProfileIcon,
    HelpIcon
  },
  methods: {
    async logout() {
      console.log(await this.$store.dispatch("user/logout"));
    }
  }
};
</script>
<style>
.dashboard__nav--profile {
  white-space: nowrap !important;
}
</style>
