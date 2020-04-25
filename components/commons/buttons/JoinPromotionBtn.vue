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
      Join Program
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
  computed: {
    joined() {
      if (this.promotion.user) {
        return this.promotion.user._id == this.$auth.user._id;
      }
    }
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
      } catch (error) {
        this.$emit("show", false);
        const { response } = error;
        if (response !== undefined) {
          if (response.data.code == 409) {
            this.$swal({
              text: response.data.message,
              icon: "error"
            });
          }
        } else {
          this.$emit("show", false);
          this.$swal({
            text: "An error occurred, Don't panic just try again",
            icon: "error"
          });
        }
      }
    }
  }
};
</script>

<style>
</style>