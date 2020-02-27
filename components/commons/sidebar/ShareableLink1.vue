

<template>
  <div class="col-12 row">
    <h6 class="col-12 text text-bold color-blue bg-grey-8 pt-4 pb-3 pl-3 pr-3">
      Promotion sharable Link
    </h6>
    <ul
      class="my-promotion__pills nav nav-pills mb-3 col-12"
      id="pills-tab"
      role="tablist"
    >
      <li class="my-promotion__pills--item nav-item">
        <a
          class="my-promotion__pills--link nav-link active"
          id="pills-url-tab"
          data-toggle="pill"
          href="#pills-url"
          role="tab"
          aria-controls="pills-url"
          aria-selected="true"
          >URL</a
        >
      </li>
      <li class="my-promotion__pills--item nav-item">
        <a
          href="#pills-email"
          class="my-promotion__pills--link nav-link"
          id="pills-email-tab"
          data-toggle="pill"
          role="tab"
          aria-controls="pills-email"
          aria-selected="false"
          >Email/SMS</a
        >
      </li>
      <li class="my-promotion__pills--item nav-item">
        <a
          href="#pills-social"
          class="my-promotion__pills--link nav-link"
          id="pills-social-tab"
          data-toggle="pill"
          role="tab"
          aria-controls="pills-social"
          aria-selected="false"
          >Social Media</a
        >
      </li>
      <li class="my-promotion__pills--item nav-item">
        <a
          href="#pills-embed"
          class="my-promotion__pills--link nav-link"
          id="pills-embed-tab"
          data-toggle="pill"
          role="tab"
          aria-controls="pills-embed"
          aria-selected="false"
          >Embed</a
        >
      </li>
    </ul>
    <div class="tab-content col-12" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-url"
        role="tabpanel"
        aria-labelledby="pills-url-tab"
      >
        <div class="col-12 text text-bold text-center color-blue mt-4 mb-3">
          Your promotion sharing URL
        </div>
        <div class="col-12 text-sm-light text-center color-blue mt-4 mb-3">
          copy and paste the link below into emails, chats and browsers
        </div>
        <div
          class="col-12 my-promotion__pills--square text-sm-light color-blue mt-4 mb-3"
        >
          <span class="col-10">https://codelikemad.com</span>
          <img
            src="~assets/images/undraw_schedule.png"
            alt=""
            class="col-2"
            width="20"
          />
        </div>
        <button class="my-promotion__pills--btn color-blue-2 col-12">
          Copy Sharing URL
        </button>
      </div>
      <div
        class="tab-pane fade"
        id="pills-email"
        role="tabpanel"
        aria-labelledby="pills-email-tab"
      >
        <div class="row">
          <div class="col-7 text text-bold color-blue mt-4 mb-3">
            Your promotion sharing URL
          </div>
          <div class="col-5 my-promotion__pills--switch mt-4 mb-3">
            <input type="checkbox" id="toggleInput" onclick="myFunction()" />
            <label for="" class="email pl-0 pt-3 pr-3 pb-3">E-mail</label>
            <label for="" class="sms pl-0 pt-3 pr-3 pb-3">SMS</label>
          </div>
        </div>
        <div class="my-promotion__pills--email-container" id="emailContainer">
          <div class="row">
            <div class="col-12 text-sm-light color-blue mt-4 mb-3 p-0">
              copy and paste the link below into emails, chats and browsers
            </div>
            <div
              class="col-12 my-promotion__pills--square text-sm-light color-blue mt-4 mb-3 p-0"
            >
              <input
                type="email"
                class="my-promotion__pills--input col-12"
                placeholder="Enter email address"
              />
            </div>
            <div class="col-12">
              <div class="row justify-content-end">
                <button class="my-promotion__pills--btn color-blue-2 col-4">
                  Send email
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="my-promotion__pills--sms-container" id="smsContainer">
          <div class="row">
            <div class="col-12 text-sm-light color-blue mt-4 mb-3 p-0">
              send your promotion link directly to any computer, tablet or phone
            </div>
            <div
              class="col-12 my-promotion__pills--square text-sm-light color-blue mt-4 mb-3 p-0 pl-2"
            >
              <img src="~assets/images/nigeria.png" alt="" width="20" />
              <input
                type="email"
                class="my-promotion__pills--input col-9 ml-2"
                placeholder="+234"
              />
            </div>
            <div class="col-12">
              <div class="row justify-content-end">
                <button class="my-promotion__pills--btn color-blue-2 col-4">
                  send sms
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-social"
        role="tabpanel"
        aria-labelledby="pills-social-tab"
      >
        <div class="col-12 text text-bold color-blue mt-4 mb-3">
          Share via Social Media
        </div>
        <div class="col-9">
          <div class="row">
            <div class="col-auto">
              <twitter-icon color="#0e163d" width="18.462" height="15" />
            </div>
            <div class="col-auto">
              <facebook-icon color="#0e163d" width="7.5" height="15" />
            </div>
            <div class="col-auto">
              <instagram-icon color="#0e163d" width="15" height="15" />
            </div>
            <div class="col-auto">
              <youtube-icon color="#0e163d" width="15" height="15" />
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="pills-embed"
        role="tabpanel"
        aria-labelledby="pills-embed-tab"
      >
        <div class="col-12 text text-bold color-blue mt-4 mb-3">
          Embed the code
        </div>
        <div class="col-12 text-sm-light color-blue mt-4 mb-3">
          embed the following code within your html code
        </div>
        <div
          class="col-12 my-promotion__pills--square text-sm-light color-blue mt-4 mb-3"
        >
          <pre><code>
              &lt;html&gt;
                  &lt;body&gt;
                      &lt;section&gt;
                          &lt;strong&gt;
                              Click on this link &lt;a href="http://bukkahut.com/promo?23167/affiliate?356710/2afd304"&gt;here&lt;/a&gt; to avail the current offer
                          &lt;/strong&gt;
                      &lt;/section&gt;
                  &lt;/body&gt;
              &lt;/html&gt;
          </code></pre>
        </div>
      </div>
    </div>
  </div>
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

