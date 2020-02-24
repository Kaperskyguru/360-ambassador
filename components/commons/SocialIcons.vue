<template>
  <ul class="inline-list col-12 p-0">
    <li class="inline-list__item mr-4">
      <nuxt-link to="#" class="inline-list__link color-white">
        <twitter-icon color="#ffffff" />
      </nuxt-link>
    </li>
    <li class="inline-list__item mr-4">
      <nuxt-link to="#" class="inline-list__link color-white">
        <facebook-icon color="#ffffff" />
      </nuxt-link>
    </li>
    <li class="inline-list__item mr-4">
      <nuxt-link to="#" class="inline-list__link color-white">
        <instagram-icon color="#ffffff" />
      </nuxt-link>
    </li>
    <li class="inline-list__item mr-4">
      <nuxt-link to="#" class="inline-list__link color-white">
        <youtube-icon color="#ffffff" />
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import TwitterIcon from "~/components/commons/Icons/Twitter";
import FacebookIcon from "~/components/commons/Icons/Facebook";
import InstagramIcon from "~/components/commons/Icons/Instagram";
import YoutubeIcon from "~/components/commons/Icons/Youtube";
export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
    YoutubeIcon
  }
};
</script>

<style scoped>
</style>