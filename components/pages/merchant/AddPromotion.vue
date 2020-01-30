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
          <ValidationObserver
            v-slot="{ handleSubmit }"
            class="col-md-12 col-12 mb-4 pr-5"
          >
            <form
              class="col-12 mt-4 form-2"
              @submit.prevent="handleSubmit(updateUser)"
              method="post"
              enctype="multipart/form-data"
            >
              <div class="row justify-content-center">
                <div class="col-md-6 p-md-0">
                  <h6
                    class="border-bottom-grey-3 col-md-11 col-12 color-blue p-0 ml-md-4"
                  >
                    About the Product/Service
                  </h6>
                  <div class="col-12 col-md-6 custom-file-input-container">
                    <image-field
                      v-on:triggerChange="onFileChange($event)"
                    ></image-field>
                  </div>
                  <div class="col-12 form-2__container">
                    <validation-provider name="Title" v-slot="{ errors }">
                      <field v-model="form.title" name="title">
                        <template slot="label">Promotion Title</template>
                        <template slot="errors">{{ errors[0] }}</template>
                      </field>
                    </validation-provider>
                  </div>
                  <div class="col-12 form-2__container">
                    <validation-provider
                      name="Name of Product"
                      v-slot="{ errors }"
                    >
                      <field v-model="form.name" name="name">
                        <template slot="label"
                          >Name of Product/ Service</template
                        >
                        <template slot="errors">{{ errors[0] }}</template>
                      </field>
                    </validation-provider>
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
                        <option
                          :value="category._id"
                          v-for="(category, i) in categories"
                          :key="i"
                          >{{ category.name }}</option
                        >
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
                        v-model="form.description"
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
                        v-model="form.currency"
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
                        v-model="form.commissionCurrency"
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
                        v-model="form.commissionAmount"
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
                      <validation-provider
                        name="Condition 1"
                        v-slot="{ errors }"
                      >
                        <field v-model="form.condition1" name="Condition1">
                          <template slot="label">Condition 1</template>
                          <template slot="errors">{{ errors[0] }}</template>
                        </field>
                      </validation-provider>
                    </div>
                    <div class="col-12 form-2__container">
                      <!-- <div class="row">
                      <label
                        for=""
                        class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                        ></label
                      >
                      <input
                        type="text"
                        class="form-2__input ml-md-5 col-md-8 col-12 color-grey-2"
                      />
                    </div> -->
                      <validation-provider
                        name="Condition 2"
                        v-slot="{ errors }"
                      >
                        <field v-model="form.condition2" name="Condition2">
                          <template slot="label">Condition 2</template>
                          <template slot="errors">{{ errors[0] }}</template>
                        </field>
                      </validation-provider>
                    </div>
                    <div class="col-12 form-2__container">
                      <validation-provider
                        name="Condition 3"
                        v-slot="{ errors }"
                      >
                        <field v-model="form.condition3" name="Condition3">
                          <template slot="label">Condition 3</template>
                          <template slot="errors">{{ errors[0] }}</template>
                        </field>
                      </validation-provider>
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
                    <validation-provider name="Facebook" v-slot="{ errors }">
                      <field v-model="form.facebook" name="facebook">
                        <template slot="label">Facebook</template>
                        <template slot="errors">{{ errors[0] }}</template>
                      </field>
                    </validation-provider>
                  </div>
                  <div class="col-12 form-2__container">
                    <validation-provider name="Twitter" v-slot="{ errors }">
                      <field v-model="form.twitter" name="twitter">
                        <template slot="label">Twitter</template>
                        <template slot="errors">{{ errors[0] }}</template>
                      </field>
                    </validation-provider>
                  </div>
                  <div class="col-12 form-2__container">
                    <validation-provider name="Instagram" v-slot="{ errors }">
                      <field v-model="form.instagram" name="instagram">
                        <template slot="label">Instagram</template>
                        <template slot="errors">{{ errors[0] }}</template>
                      </field>
                    </validation-provider>
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
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "~/components/commons/dashboard/MerchantCard";
import MyNavBar from "~/components/commons/navs/MerchantNav";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import Field from "~/components/commons/Field";
import ImageField from "~/components/commons/ImageField";

export default {
  components: {
    MyNavBar,
    Card,
    ValidationProvider,
    ValidationObserver,
    Field,
    ImageField
  },

  data() {
    return {
      form: {},
      profile_picture: []
    };
  },

  methods: {
    onFileChange(e) {
      this.profile_picture = e.target.files[0];

      // Upload file here or display
    }
  },

  computed: {
    ...mapState({
      categories: state => {
        return state.category.categories;
      }
    })
  },
  created() {
    //this.$store.dispatch("category/get");
  }
};
</script>

<style>
</style>