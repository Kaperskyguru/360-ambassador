<template>
  <nav class="navbar navbar-expand-lg navbar-light w-100 dashboard__nav">
    <a class="navbar-brand color-white" href="index.html">
      <brand />
    </a>
    <button
      class="navbar-toggler bg-white"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon color-white"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link class="nav-link color-white" to="/merchant"
            >dashboard <span class="sr-only">(current)</span></nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link color-white" to="/merchant/my-promotions"
            >my promotion</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link color-white" to="/merchant/promotions"
            >promotions</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link color-white" to="#">links</nuxt-link>
        </li>
      </ul>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.072"
              height="16.727"
              viewBox="0 0 20.072 16.727"
            >
              <defs>
                <style>
                  .a {
                    fill: #fff;
                  }
                </style>
              </defs>
              <g transform="translate(24)">
                <g transform="translate(-24 0)">
                  <path
                    class="a"
                    d="M19.236,2H.836A.79.79,0,0,0,0,2.836V17.891a.79.79,0,0,0,.836.836h18.4a.79.79,0,0,0,.836-.836V2.836A.79.79,0,0,0,19.236,2ZM17.312,6.014l-6.691,5.854a1.551,1.551,0,0,1-.585.167,1.551,1.551,0,0,1-.585-.167L2.76,6.014A.83.83,0,1,1,3.847,4.76l6.105,5.353L16.058,4.76a.813.813,0,0,1,1.171.084A.752.752,0,0,1,17.312,6.014Z"
                    transform="translate(0 -2)"
                  />
                </g>
              </g>
            </svg>
            <span class="badge color-yellow bg-blue">1</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link
            class="nav-link color-white dashboard__nav--notification"
            to="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.072"
              height="20.072"
              viewBox="0 0 20.072 20.072"
            >
              <defs>
                <style>
                  .a {
                    fill: #fff !important;
                  }
                </style>
              </defs>
              <g transform="translate(0 0)">
                <path
                  class="a"
                  d="M9.639,6.626,8.2,5.154a10.842,10.842,0,0,0-4.15,8.08H6.062A8.779,8.779,0,0,1,9.639,6.626ZM22.11,13.235h2.012a10.842,10.842,0,0,0-4.15-8.08L18.538,6.621A8.809,8.809,0,0,1,22.11,13.235Zm-1.987.515c0-3.165-1.645-5.806-4.528-6.505v-.7a1.51,1.51,0,1,0-3.018,0v.7c-2.883.7-4.528,3.34-4.528,6.505V18.9L6.037,20.955v1.029h16.1V20.955L20.123,18.9ZM14.086,25.072a2.105,2.105,0,0,0,.407-.041,2.043,2.043,0,0,0,1.449-1.215,2.111,2.111,0,0,0,.156-.8H12.074a2.035,2.035,0,0,0,2.012,2.059Z"
                  transform="translate(-4.05 -5)"
                />
              </g>
            </svg>
            <span class="badge color-yellow bg-blue">10</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link color-white" to="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.072"
              height="20.072"
              viewBox="0 0 20.072 20.072"
            >
              <defs>
                <style>
                  .a {
                    fill: #fff !important;
                  }
                </style>
              </defs>
              <path
                class="a"
                d="M13.287,5.564a3.7,3.7,0,0,1,.873,2.989,3.021,3.021,0,0,1-3.142,2.836h-.109v.524a.873.873,0,0,1-1.745,0v-.7c0-.72.305-1.571,1.855-1.571a1.282,1.282,0,0,0,1.4-1.309,2.026,2.026,0,0,0-.458-1.615,2.6,2.6,0,0,0-2.007-.7C7.985,6.022,7.92,7.309,7.92,7.44a.873.873,0,1,1-1.745,0c0-.873.676-3.164,3.774-3.164a4.238,4.238,0,0,1,3.338,1.287ZM9.971,13.527a1.023,1.023,0,0,0-.764.327,1.111,1.111,0,0,0-.327.764,1.023,1.023,0,0,0,.327.764,1.111,1.111,0,0,0,.764.327,1.023,1.023,0,0,0,.764-.327,1.111,1.111,0,0,0,.327-.764,1.023,1.023,0,0,0-.327-.764A1.071,1.071,0,0,0,9.971,13.527Zm10.1-3.491A10.036,10.036,0,1,1,10.036,0,10.038,10.038,0,0,1,20.072,10.036Zm-1.745,0a8.291,8.291,0,1,0-8.291,8.291A8.287,8.287,0,0,0,18.327,10.036Z"
              />
            </svg>
          </nuxt-link>
        </li>
        <li class="nav-item dropdown">
          <div class="nav-link">
            <nuxt-link
              class="dropdown-toggle dashboard__nav--profile d-flex"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="col d-block m-0 p-0">
                <img
                  src="~assets/images/man-user.png"
                  alt=""
                  class="dashboard__nav--profile-img"
                />
              </div>
              <div class="col d-block m-0 p-0">
                <span
                  class="dashboard__nav--profile-name col-12 d-block color-white"
                  >Hi, Samantha</span
                >
                <span
                  class="dashboard__nav--profile-location col-12 d-block color-white"
                  >(53347890) Lagos, Nigeria</span
                >
              </div>
            </nuxt-link>
            <div
              class="dropdown-menu dropdown-menu-right dashboard__nav--profile-dropdown bg-grey-3"
              aria-labelledby="navbarDropdown"
            >
              <div class="row align-content-start">
                <nuxt-link
                  class="dropdown-item color-white dashboard__nav--profile-dropdown-item"
                  to="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <defs>
                      <clipPath id="a">
                        <rect
                          class="a ml-4"
                          width="20"
                          height="20"
                          transform="translate(1637 129)"
                        />
                      </clipPath>
                    </defs>
                    <g class="b" transform="translate(-1637 -129)">
                      <g transform="translate(1637 130.049)">
                        <path
                          class="c"
                          d="M15,5.044a.714.714,0,0,0-.714-.714H12.143s.024-.857.024-2.11A2.231,2.231,0,0,0,10,0,2.169,2.169,0,0,0,7.866,2.214c0,1.161-.009,2.117-.009,2.117H5.714A.714.714,0,0,0,5,5.046V6.429H15ZM10,3.571a.714.714,0,1,1,.714-.714A.714.714,0,0,1,10,3.571Zm8.571,1.473L15.714,5l.015,2.214H4.286V5.089L1.429,5.045A1.429,1.429,0,0,0,0,6.474v10A1.429,1.429,0,0,0,1.429,17.9H18.571A1.429,1.429,0,0,0,20,16.474v-10A1.429,1.429,0,0,0,18.571,5.044ZM5.714,9.2A1.859,1.859,0,0,1,7.277,11.25,1.859,1.859,0,0,1,5.714,13.3,1.859,1.859,0,0,1,4.151,11.25,1.859,1.859,0,0,1,5.714,9.2Zm-3.1,6.525s.169-1.357.554-1.615a5.485,5.485,0,0,1,1.493-.429s.719.773,1.024.773,1.024-.771,1.024-.771a5.461,5.461,0,0,1,1.494.429c.452.3.565,1.615.565,1.615Zm14.524-.677H10.714V14.33h6.429Zm0-1.429H10.714V12.9h6.429Zm0-1.429H10.714v-.714h6.429Zm0-1.429H10.714v-.714h6.429Z"
                        />
                      </g>
                    </g>
                  </svg>
                  Edit Profile
                </nuxt-link>
                <nuxt-link
                  class="dropdown-item color-white dashboard__nav--profile-dropdown-item"
                  to="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <defs>
                      <clipPath id="a">
                        <rect
                          class="a ml-4"
                          width="20"
                          height="20"
                          transform="translate(1637 169)"
                        />
                      </clipPath>
                    </defs>
                    <g class="b" transform="translate(-1637 -169)">
                      <g transform="translate(1635.444 167.095)">
                        <path
                          class="c"
                          d="M13.333,17.143v-1.9l-3.81,3.333,3.81,3.333V20H16.19V17.143H13.333m7.619-2.381-3.81-3.333v1.9H14.286V16.19h2.857v1.9l3.81-3.333m-.324-6.448-1.9-3.3a.465.465,0,0,0-.581-.21l-2.371.952a6.469,6.469,0,0,0-1.61-.952L13.81,2.3a.482.482,0,0,0-.476-.4H9.524a.481.481,0,0,0-.476.4L8.7,4.829a6.646,6.646,0,0,0-1.61.952L4.762,4.81a.461.461,0,0,0-.581.21l-1.9,3.3a.469.469,0,0,0,.1.61l1.971,1.552a8,8,0,0,0-.067.952,8,8,0,0,0,.067.952l-2.01,1.552a.461.461,0,0,0-.114.61l1.9,3.3a.468.468,0,0,0,.629.257l2.381-.952a7.567,7.567,0,0,0,.724.5L11.21,14.79a3.332,3.332,0,1,1,3.41-4.314H18.5l2.01-1.552a.483.483,0,0,0,.114-.61Z"
                        />
                      </g>
                    </g>
                  </svg>
                  Settings
                </nuxt-link>
              </div>
              <div class="dashboard__nav--profile-dropdown-divider"></div>
              <div class="row align-content-end">
                <nuxt-link
                  class="dropdown-item color-white dashboard__nav--profile-dropdown-item"
                  to="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <defs>
                      <clipPath id="a">
                        <rect
                          class="a ml-4"
                          width="20"
                          height="20"
                          transform="translate(1637 271)"
                        />
                      </clipPath>
                    </defs>
                    <g class="b" transform="translate(-1637 -271)">
                      <g transform="translate(1635 269)">
                        <path
                          class="c"
                          d="M16,17V14H9V10h7V7l5,5-5,5M14,2a2,2,0,0,1,2,2V6H14V4H5V20h9V18h2v2a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V4A2,2,0,0,1,5,2Z"
                        />
                      </g>
                    </g>
                  </svg>
                  Log Out
                </nuxt-link>
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
import Brand from "~/components/partials/Brand";
export default {
  components: {
    Brand
  }
};
</script>

<style>
</style>