<template>
  <footer class="section footer bg-white col-12">
    <div class="row align-items-start">
      <div class="col-12 col-md-2 p-0">
        <div class="footer__logo-box col-12">
          <brand class="footer__logo-text col-12 color-blue text-bold" />
        </div>
      </div>
      <div class="col-12 col-md-2">
        <p class="footer__header color-yellow col-12">Company</p>
        <ul class="list col-12">
          <li class="list__item">
            <nuxt-link to="" class="list__link color-blue">
              About Us
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="advertiser" class="list__link color-blue">
              Advertisers
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="affiliate" class="list__link color-blue">
              Affiliates
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="" class="list__link color-blue">
              Career
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-2">
        <p class="footer__header color-yellow col-12">Community</p>
        <ul class="list col-12">
          <li class="list__item">
            <nuxt-link to="" class="list__link color-blue">
              Support
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="" class="list__link color-blue">
              Blog
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="" class="list__link color-blue">
              Meet the Team
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-2">
        <p class="footer__header color-yellow col-12">Legal</p>
        <ul class="list col-12">
          <li class="list__item">
            <nuxt-link to="" class="list__link color-blue">
              T&C
            </nuxt-link>
          </li>
          <li class="list__item">
            <nuxt-link to="" class="list__link color-blue">
              Terms of Use
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-3 ml-auto">
        <ul class="inline-list col-12 p-0">
          <li class="inline-list__item mr-4">
            <nuxt-link to="" class="inline-list__link color-white">
              <twitter-icon color="#0e163d" />
            </nuxt-link>
          </li>
          <li class="inline-list__item mr-4">
            <nuxt-link to="" class="inline-list__link color-white">
              <facebook-icon color="#0e163d" />
            </nuxt-link>
          </li>
          <li class="inline-list__item mr-4">
            <nuxt-link to="" class="inline-list__link color-white">
              <instagram-icon color="#0e163d" />
            </nuxt-link>
          </li>
          <li class="inline-list__item mr-4">
            <nuxt-link to="" class="inline-list__link color-white">
              <youtube-icon color="#0e163d" />
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="color-grey-2" style="font-size:.9rem">
        &copy; 360 Ambassador. All Rights reserved
      </div>
    </div>
  </footer>
</template>

<script>
import Brand from "~/components/partials/Brand";
import YoutubeIcon from "~/components/commons/Icons/Youtube";
import TwitterIcon from "~/components/commons/Icons/Twitter";
import InstagramIcon from "~/components/commons/Icons/Instagram";
import FacebookIcon from "~/components/commons/Icons/Facebook";
export default {
  name: "Footer",
  components: {
    Brand,
    YoutubeIcon,
    TwitterIcon,
    InstagramIcon,
    FacebookIcon
  }
};
</script>

