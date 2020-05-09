<template>
  <div class="navbar-nav my-2 my-lg-0">
    <li class="nav-item" v-if="$auth.user.role.name == 'promoter'">
      <nuxt-link class="nav-link color-white dashboard__nav--balance" to="#">
        <span class="d-block" style="margin-top: -5px;">Balance</span>
        <span style="font-size:16px !important">11,000.00 NGN</span>
      </nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link
        class="nav-link color-white dashboard__nav--notification mt-3"
        to="#"
        @click.native="showDialog('mShow')"
      >
        <message-icon />
        <span class="badge color-yellow bg-blue">{{ totalMessages }}</span>
      </nuxt-link>
      <message-notification title="Messages" :show="mShow" :data="messages" />
    </li>
    <li class="nav-item">
      <nuxt-link
        @click.native="showDialog('nShow')"
        class="nav-link color-white dashboard__nav--notification mt-3"
        to="#"
      >
        <notification-icon />
        <span class="badge color-yellow bg-blue">{{ totalNotifications }}</span>
      </nuxt-link>
      <notification title="Notifications" :show="nShow" :data="notifications" />
    </li>
    <li class="nav-item">
      <nuxt-link
        class="nav-link color-white dashboard__nav--notification mt-3"
        to="#"
      >
        <help-icon />
      </nuxt-link>
    </li>
    <li class="nav-item dropdown">
      <div class="nav-link" :class="{ show: pShow }">
        <nuxt-link
          class="dropdown-toggle dashboard__nav--profile d-flex"
          to="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click.native="showDialog('pShow')"
        >
          <profile-image />
          <div class="d-block m-0 p-0">
            <span
              class="dashboard__nav--profile-name col-12 d-block color-white"
              >Hi, {{ $auth.user.fullname || "" }}</span
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
          :class="{ show: pShow }"
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
import { mapState } from "vuex";
import ProfileImage from "~/components/commons/dashboard/ProfileImage";
import MessageIcon from "~/components/commons/Icons/Message";
import NotificationIcon from "~/components/commons/Icons/Notification";
import LogoutIcon from "~/components/commons/Icons/Logout";
import SettingsIcon from "~/components/commons/Icons/Settings";
import EditProfileIcon from "~/components/commons/Icons/EditProfile";
import HelpIcon from "~/components/commons/Icons/Help";

import Notification from "~/components/commons/modals/Notification";
import MessageNotification from "~/components/commons/modals/Message";

export default {
  components: {
    ProfileImage,
    NotificationIcon,
    MessageIcon,
    LogoutIcon,
    SettingsIcon,
    EditProfileIcon,
    HelpIcon,
    Notification,
    MessageNotification
  },
  data() {
    return {
      pShow: false,
      nShow: false,
      mShow: false
    };
  },
  computed: {
    link: () => {
      return this.$auth.user.role == "merchant" ? "merchant" : "affiliate";
    },
    ...mapState({
      notifications: state => {
        return state.notification.notifications;
      },
      messages: state => {
        return state.message.messages;
      }
    }),

    totalMessages() {
      return this.messages.length;
    },

    totalNotifications() {
      return this.notifications.length;
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
    },
    redirectByRole(role) {
      const id = this.$auth.user._id;
      switch (role) {
        case "admin":
          this.$router.push(`merchant?user_id=${id}`);
          break;

        case "merchant":
          this.$router.push(`merchant?user_id=${id}`);
          break;

        case "promoter":
          this.$router.push(`/affiliate?user_id=${id}`);
          break;

        default:
          this.$router.push("/");
          break;
      }
    },
    showDialog(type) {
      if (type == "mShow") {
        this.mShow = !this.mShow;
        this.nShow = false;
        this.pShow = false;
      } else if (type == "nShow") {
        this.nShow = !this.nShow;
        this.mShow = false;
        this.pShow = false;
      } else {
        this.pShow = !this.pShow;
        this.nShow = false;
        this.mShow = false;
      }
    }
  },

  updated() {
    document.addEventListener("click", function() {
      this.nShow = false;
      this.mShow = false;
      this.pShow = false;
    });
  }
};
</script>

