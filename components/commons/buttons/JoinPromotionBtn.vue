<template>
  <button
    class=" p-0"
    :class="[joined ? 'btn__squared--disabled' : 'btn__square-curved--yellow']"
    @click="joinPromotion"
  >
    Join Program
  </button>
</template>

<script>
export default {
  props: ["promotion"],
  computed: {
    joined() {
      if (this.promotion.user) {
        return this.promotion.user._id == this.$auth.user._id;
      }
    }
  },

  methods: {
    async joinPromotion() {
      if (this.joined) return;
      this.$emit("show", true);
      try {
        const data = {};
        data.promoter_id = this.$auth.user._id;
        data.promotion = this.promotion._id;
        await this.$store.dispatch("promotion/joinPromotion", data);
        this.$emit("pop", true);
        this.$emit("show", false);
      } catch (error) {
        const { response } = error;
        if (response !== undefined) {
          if (response.data.code == 409) {
            this.$emit("show", false);
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