<template>
  <div>
    <button
      :disabled="disabled"
      class=" p-0"
      :class="[
        disabled ? 'btn__squared--disabled' : 'btn__square-curved--yellow'
      ]"
      @click="pop = !pop"
    >
      {{ btnText }}
    </button>

    <confirm-box :show="pop" v-on:close="processPromotion()">
      <template slot="content">
        You have opted to join the
        <span class="text-bold">{{ promotion.name }}</span> promotion. Just a
        step away from earning your income<br /><br />click the button below to
        confirm
      </template>
    </confirm-box>
  </div>
</template>

<script>
import ConfirmBox from "~/components/Modals.vue";
export default {
  props: ["promotion"],
  components: {
    ConfirmBox
  },
  data() {
    return {
      pop: false,
      disabled: false
    };
  },
  created() {
    this.joined();
  },

  methods: {
    async processPromotion() {
      this.pop = !this.pop;
      this.joinPromotion();
    },

    async joinPromotion() {
      if (this.joined) return;
      this.$emit("show", true);
      try {
        const data = {};
        data.promoter_id = this.$auth.user._id;
        data.promotion = this.promotion._id;
        await this.$store.dispatch("promotion/joinPromotion", data);
        this.disabled = true;
        this.$emit("show", false);
        const message = "You have successfully joined the promotion";
        this.showSuccess(message);
      } catch (error) {
        this.$emit("show", false);
        const { response } = error;
        if (response !== undefined) {
          this.showError(response.data.message);
        } else {
          this.$emit("show", false);
          const message = "An error occurred, Don't panic just try again";
          this.showError(message);
        }
      }
    },

    showError(message) {
      this.$swal({
        text: message,
        icon: "error"
      });
    },
    showSuccess(message) {
      this.$swal({
        text: message,
        icon: "success"
      });
    },

    joined() {
      if (this.promotion.joined_users) {
        const joined =
          this.promotion.joined_users.filter(
            user => user._id == this.$auth.user._id
          ).length > 0;

        if (joined) {
          this.$emit("joined", true);
          this.disabled = true;
        }
      }
    }
  },

  computed: {
    btnText() {
      return this.disabled ? "Joined Program" : "Join Program";
    }
  }
};
</script>

<style>
</style>