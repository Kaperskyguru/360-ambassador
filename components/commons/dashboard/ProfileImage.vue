<template>
  <div class="col d-block m-0 p-0">
    <img
      :src="$auth.user.profile_picture || '~/assets/images/me.jpeg'"
      alt=""
      class="dashboard__nav--profile-img"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>