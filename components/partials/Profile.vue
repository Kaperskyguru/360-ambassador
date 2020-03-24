<template>
  <div class="navbar-nav my-2 my-lg-0">
    <li class="nav-item">
      <nuxt-link class="nav-link color-white dashboard__nav--balance" to="#"
        >Balance<br /><span>11,000.00 NGN</span></nuxt-link
      >
    </li>
    <li class="nav-item">
      <nuxt-link
        class="nav-link color-white dashboard__nav--notification"
        to="#"
      >
        <message-icon />
        <span class="badge color-yellow bg-blue">1</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link
        class="nav-link color-white dashboard__nav--notification"
        to="#"
      >
        <notification-icon />
        <span class="badge color-yellow bg-blue">10</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link color-white" to="#">
        <help-icon />
      </nuxt-link>
    </li>
    <li class="nav-item dropdown">
      <div class="nav-link" :class="{ show: show }">
        <nuxt-link
          class="dropdown-toggle dashboard__nav--profile d-flex"
          to="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click.native="show = !show"
        >
          <profile-image />
          <div class="d-block m-0 p-0">
            <span
              class="dashboard__nav--profile-name col-12 d-block color-white"
              >Hi, {{ $auth.user.firstName || "" }}
              {{ $auth.user.lastName || "" }}</span
            >
            <span
              class="dashboard__nav--profile-location col-12 d-block color-white text-muted"
              >(53347890) {{ $auth.user.city || "" }},
              {{ $auth.user.state || "" }}</span
            >
          </div>
        </nuxt-link>
        <div
          class="dropdown-menu dropdown-menu-right dashboard__nav--profile-dropdown bg-grey-3"
          :class="{ show: show }"
          aria-labelledby="navbarDropdown"
        >
          <div class="row align-content-start">
            <nuxt-link
              class="dropdown-item color-white dashboard__nav--profile-dropdown-item"
              to="#"
              @click.native="redirectByRole($auth.user.role.name)"
            >
              <edit-profile-icon />
              Edit Profile
            </nuxt-link>
            <nuxt-link
              class="dropdown-item color-white dashboard__nav--profile-dropdown-item"
              to="#"
            >
              <settings-icon />
              Settings
            </nuxt-link>
          </div>
          <div class="dashboard__nav--profile-dropdown-divider"></div>
          <div class="row align-content-end">
            <nuxt-link
              class="dropdown-item color-white dashboard__nav--profile-dropdown-item"
              to="#"
              @click.native="logout"
            >
              <logout-icon />
              Log Out
            </nuxt-link>
          </div>
        </div>
      </div>
    </li>
  </div>
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
  data() {
    return {
      show: false
    };
  },
  computed: {
    link: () => {
      return this.$auth.user.role == "merchant" ? "advertiser" : "affiliate";
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
    },
    redirectByRole(role) {
      console.log(role);
      const id = this.$auth.user._id;
      switch (role) {
        case "admin":
          this.$router.push(`/advertiser?user_id=${id}`);
          break;

        case "merchant":
          this.$router.push(`/advertiser?user_id=${id}`);
          break;

        case "promoter":
          this.$router.push(`/affiliate?user_id=${id}`);
          break;

        default:
          this.$router.push("/");
          break;
      }
    }
  }
};
</script>

