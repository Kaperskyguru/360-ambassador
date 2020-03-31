<template>
  <div class="d-block m-0 p-0">
    <img
      :src="
        $auth.user.profile_picture || require('~/assets/images/man-user.png')
      "
      alt=""
      class="dashboard__nav--profile-img"
    />
  </div>
</template>

<script>
export default {};
</script>

