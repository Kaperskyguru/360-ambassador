<template>
  <div class="container-fluid my-promotion">
    <div class="row">
      <my-nav-bar />
      <div class="my-promotion__container col-12">
        <div class="row justify-content-center">
          <div class="col-md-12 col-12 mb-4 pr-5">
            <div class="row">
              <div class="col-12">
                <nuxt-link
                  to="my-promotions"
                  class="color-blue text-bold mr-auto"
                  ><img
                    src="~assets/images/left-arrow.png"
                    width="10"
                    alt=""
                  />Back</nuxt-link
                >
              </div>
            </div>
          </div>
          <p class="col-12 navbar-text text-bold color-blue">
            NEW PROMOTION
          </p>

          <form class="col-12 mt-4 form-2">
            <div class="row justify-content-center">
              <div class="col-md-6 p-md-0">
                <h6
                  class="border-bottom-grey-3 col-md-11 col-12 color-blue p-0 ml-md-4"
                >
                  About the Product/Service
                </h6>
                <div class="col-12 col-md-6 custom-file-input-container">
                  <label for="formControlFile1" class="custom-file-label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22.999"
                      viewBox="0 0 23 22.999"
                    >
                      <defs>
                        <style>
                          .r {
                            fill: #0e163d;
                          }
                        </style>
                      </defs>
                      <g transform="translate(0.004 0.001)">
                        <g transform="translate(-0.004 -0.001)">
                          <path
                            class="r"
                            d="M12.784,14.719a1.192,1.192,0,0,1-.846-.35,5.618,5.618,0,0,1,0-7.936l4.416-4.416a5.612,5.612,0,1,1,7.937,7.936l-2.019,2.019a1.2,1.2,0,1,1-1.693-1.693L22.6,8.26a3.22,3.22,0,1,0-4.554-4.553L13.628,8.122a3.223,3.223,0,0,0,0,4.553,1.2,1.2,0,0,1-.846,2.042Z"
                            transform="translate(-2.934 -0.372)"
                          />
                          <path
                            class="r"
                            d="M5.984,26.384A5.611,5.611,0,0,1,2.015,16.8l2.019-2.019a1.2,1.2,0,0,1,1.693,1.693L3.706,18.5a3.22,3.22,0,0,0,4.554,4.554l4.416-4.416a3.223,3.223,0,0,0,0-4.553,1.2,1.2,0,0,1,1.693-1.693,5.618,5.618,0,0,1,0,7.936L9.953,24.739a5.575,5.575,0,0,1-3.97,1.645Z"
                            transform="translate(-0.371 -3.385)"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                  <input
                    type="file"
                    class="custom-file-input"
                    id="formControlFile1"
                  />
                </div>
                <div class="col-12 form-2__container">
                  <div class="row">
                    <label
                      for=""
                      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                      >Promotion Title</label
                    >
                    <input
                      type="text"
                      class="form-2__input ml-md-5 col-md-8 col-12 color-grey-2"
                    />
                  </div>
                </div>
                <div class="col-12 form-2__container">
                  <div class="row">
                    <label
                      for=""
                      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                      >Name of Product/ Service</label
                    >
                    <input
                      type="text"
                      class="form-2__input ml-md-5 col-md-8 col-12 color-grey-2"
                    />
                  </div>
                </div>
                <div class="col-12 form-2__container">
                  <div class="row">
                    <label
                      for=""
                      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                      >Category of Promotion</label
                    >
                    <select
                      type="text"
                      class="form-2__select ml-md-5 col-md-8 col-12 color-grey-2"
                    >
                      <option value="1"></option>
                      <option value="1">gtb</option>
                      <option value="1">gtb</option>
                    </select>
                  </div>
                </div>
                <div class="col-12 form-2__container">
                  <div class="row">
                    <label
                      for=""
                      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                      >Description of Promotion</label
                    >
                    <textarea
                      rows="3"
                      class="form-2__textarea ml-md-5 col-md-8 col-12 color-grey-2"
                    ></textarea>
                  </div>
                </div>
                <div class="col-12 form-2__container">
                  <div class="row">
                    <label
                      for=""
                      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                      >Category of Promotion</label
                    >
                    <select
                      type="text"
                      class="form-2__select ml-md-5 col-2 color-grey-2"
                    >
                      <option value="1"
                        >NGN <img src="~assets/images/nigeria.png" alt=""
                      /></option>
                      <option value="1"
                        >NGN <img src="~assets/images/nigeria.png" alt=""
                      /></option>
                      <option value="1"
                        >NGN <img src="~assets/images/nigeria.png" alt=""
                      /></option>
                    </select>
                    <input
                      type="text"
                      class="form-2__input col-6 color-grey-2"
                    />
                  </div>
                </div>
                <div class="col-12 form-2__container">
                  <div class="row">
                    <label
                      for=""
                      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                      >Commission</label
                    >
                    <select
                      type="text"
                      class="form-2__select ml-md-5 col-2 color-grey-2"
                    >
                      <option value="1"
                        >NGN <img src="~assets/images/nigeria.png" alt=""
                      /></option>
                      <option value="1"
                        >NGN <img src="~assets/images/nigeria.png" alt=""
                      /></option>
                      <option value="1"
                        >NGN <img src="~assets/images/nigeria.png" alt=""
                      /></option>
                    </select>
                    <input
                      type="text"
                      class="form-2__input col-6 color-grey-2"
                    />
                  </div>
                </div>
                <div class="col-12 mt-5 mb-3 p-0">
                  <h6
                    class="border-bottom-grey-3 col-md-11 col-12 color-blue p-0 ml-md-4"
                  >
                    Promotion Condition
                  </h6>
                  <div class="col-12 form-2__container">
                    <div class="row">
                      <label
                        for=""
                        class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                        >Condition 1</label
                      >
                      <input
                        type="text"
                        class="form-2__input ml-md-5 col-md-8 col-12 color-grey-2"
                      />
                    </div>
                  </div>
                  <div class="col-12 form-2__container">
                    <div class="row">
                      <label
                        for=""
                        class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                        >Condition 2</label
                      >
                      <input
                        type="text"
                        class="form-2__input ml-md-5 col-md-8 col-12 color-grey-2"
                      />
                    </div>
                  </div>
                  <div class="col-12 form-2__container">
                    <div class="row">
                      <label
                        for=""
                        class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                        >Condition 3</label
                      >
                      <input
                        type="text"
                        class="form-2__input ml-md-5 col-md-8 col-12 color-grey-2"
                      />
                    </div>
                  </div>
                  <div class="col-12 form-2__container">
                    <div class="row justify-content-end">
                      <button class="btn__transparent">+ Add more</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h6
                  class="border-bottom-grey-3 col-md-11 col-12 color-blue p-0 ml-md-4"
                >
                  Supporting Media
                </h6>
                <div class="col-12 col-md-6 custom-file-input-container">
                  <label
                    for="formControlFile2"
                    class="custom-file-label-square"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="22.999"
                      viewBox="0 0 23 22.999"
                    >
                      <defs>
                        <style>
                          .r {
                            fill: #0e163d;
                          }
                        </style>
                      </defs>
                      <g transform="translate(0.004 0.001)">
                        <g transform="translate(-0.004 -0.001)">
                          <path
                            class="r"
                            d="M12.784,14.719a1.192,1.192,0,0,1-.846-.35,5.618,5.618,0,0,1,0-7.936l4.416-4.416a5.612,5.612,0,1,1,7.937,7.936l-2.019,2.019a1.2,1.2,0,1,1-1.693-1.693L22.6,8.26a3.22,3.22,0,1,0-4.554-4.553L13.628,8.122a3.223,3.223,0,0,0,0,4.553,1.2,1.2,0,0,1-.846,2.042Z"
                            transform="translate(-2.934 -0.372)"
                          />
                          <path
                            class="r"
                            d="M5.984,26.384A5.611,5.611,0,0,1,2.015,16.8l2.019-2.019a1.2,1.2,0,0,1,1.693,1.693L3.706,18.5a3.22,3.22,0,0,0,4.554,4.554l4.416-4.416a3.223,3.223,0,0,0,0-4.553,1.2,1.2,0,0,1,1.693-1.693,5.618,5.618,0,0,1,0,7.936L9.953,24.739a5.575,5.575,0,0,1-3.97,1.645Z"
                            transform="translate(-0.371 -3.385)"
                          />
                        </g>
                      </g>
                    </svg>
                  </label>
                  <input
                    type="file"
                    class="custom-file-input"
                    id="formControlFile2"
                  />
                  <button
                    class="custom-file-button btn__transparent text-small color-blue-1"
                  >
                    remove
                  </button>
                </div>
                <div class="col-12 p-0 mt-5">
                  <h6
                    class="border-bottom-grey-3 col-md-11 col-12 color-blue p-0 ml-md-4 mt-5"
                  >
                    Social Media information
                  </h6>
                </div>
                <div class="col-12 form-2__container">
                  <div class="row">
                    <label
                      for=""
                      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                      >Facebook</label
                    >
                    <input
                      type="text"
                      class="form-2__input ml-md-5 col-md-8 col-12 color-grey-2"
                    />
                  </div>
                </div>
                <div class="col-12 form-2__container">
                  <div class="row">
                    <label
                      for=""
                      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                      >Twitter</label
                    >
                    <input
                      type="text"
                      class="form-2__input ml-md-5 col-md-8 col-12 color-grey-2"
                    />
                  </div>
                </div>
                <div class="col-12 form-2__container">
                  <div class="row">
                    <label
                      for=""
                      class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                      >Instagram</label
                    >
                    <input
                      type="text"
                      class="form-2__input ml-md-5 col-md-8 col-12 color-grey-2"
                    />
                  </div>
                </div>
                <div class="col-12 form-2__container">
                  <div class="row justify-content-end">
                    <button class="btn__transparent">+ Add more</button>
                  </div>
                </div>
                <div class="col-12 form-2__container pr-5">
                  <div class="row justify-content-end">
                    <button
                      type="submit"
                      class="btn__square-curved--yellow form-2__btn"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "~/components/commons/dashboard/MerchantCard";
import MyNavBar from "~/components/commons/dashboard/MerchantNav";
export default {
  components: {
    MyNavBar,
    Card
  }
};
</script>

<style>
</style>