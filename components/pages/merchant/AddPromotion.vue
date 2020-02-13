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
              @submit.prevent="handleSubmit(addPromotion)"
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
                      rules="required"
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
                    <validation-provider
                      rules="required"
                      name="Category"
                      v-slot="{ errors }"
                    >
                      <div class="row">
                        <label
                          for=""
                          class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                          >Category of Promotion</label
                        >
                        <div class="ml-md-5 col-md-8 col-12">
                          <select
                            v-model="form.category"
                            class="form-2__select  col color-grey-2"
                          >
                            <option
                              :value="category._id"
                              v-for="(category, i) in categories"
                              :key="i"
                              >{{ category.name }}</option
                            >
                          </select>
                          <span class="input-error">{{ errors[0] }}</span>
                        </div>
                      </div>
                    </validation-provider>
                  </div>

                  <div class="col-12 form-2__container">
                    <validation-provider
                      name="Description"
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <div class="row">
                        <label
                          for=""
                          class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                          >Description of Promotion</label
                        >
                        <div class="col-md-8 col-12 ml-md-5">
                          <textarea
                            v-model="form.description"
                            rows="3"
                            class="form-2__textarea col color-grey-2"
                          ></textarea>
                          <span class="input-error">{{ errors[0] }}</span>
                        </div>
                      </div>
                    </validation-provider>
                  </div>

                  <div class="col-12 form-2__container">
                    <div class="row">
                      <label
                        for=""
                        class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                        >Price of Promotion</label
                      >
                      <select
                        v-model="form.pricecurrency"
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
                        v-model="form.price"
                        required
                        type="number"
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
                        required
                        v-model="form.commission"
                        type="number"
                        class="form-2__input col-6 color-grey-2"
                      />
                    </div>
                  </div>
                  <div class="col-12 mt-5 mb-3 p-0">
                    <h6
                      class="border-bottom-grey-3 col-md-11 col-12 color-blue p-0 ml-md-4"
                    >
                      Number of Promoters
                    </h6>
                    <div class="col-12 form-2__container">
                      <validation-provider
                        name="NoOfPromoter"
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <field
                          v-model="form.no_of_promoter"
                          name="No of Promoter"
                        >
                          <template slot="label">No of Promoter</template>
                          <template slot="errors">{{ errors[0] }}</template>
                        </field>
                      </validation-provider>
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
                      <file-upload-icon />
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
                    <validation-provider
                      rules="required"
                      name="Facebook"
                      v-slot="{ errors }"
                    >
                      <field v-model="form.facebook" name="facebook">
                        <template slot="label">Facebook</template>
                        <template slot="errors">{{ errors[0] }}</template>
                      </field>
                    </validation-provider>
                  </div>
                  <div class="col-12 form-2__container">
                    <validation-provider
                      rules="required"
                      name="Twitter"
                      v-slot="{ errors }"
                    >
                      <field v-model="form.twitter" name="twitter">
                        <template slot="label">Twitter</template>
                        <template slot="errors">{{ errors[0] }}</template>
                      </field>
                    </validation-provider>
                  </div>
                  <div class="col-12 form-2__container">
                    <validation-provider
                      rules="required"
                      name="Instagram"
                      v-slot="{ errors }"
                    >
                      <field v-model="form.instagram" name="instagram">
                        <template slot="label">Instagram</template>
                        <template slot="errors">{{ errors[0] }}</template>
                      </field>
                    </validation-provider>
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
            <loading :show="show" :label="label" :overlay="overlay"> </loading>
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
import FileUploadIcon from "~/components/commons/Icons/FileUpload";

export default {
  components: {
    MyNavBar,
    Card,
    ValidationProvider,
    ValidationObserver,
    Field,
    ImageField,
    FileUploadIcon
  },

  data() {
    return {
      form: {},
      profile_picture: [],
      show: false,
      overlay: true,
      label: "Creating your promotion, please wait..."
    };
  },

  methods: {
    onFileChange(e) {
      this.profile_picture = e.target.files[0];

      // Upload file here or display
    },

    async addPromotion() {
      this.show = true;
      const formdata = new FormData();
      formdata.append("product_file", this.profile_picture);
      formdata.append("user", this.$auth.user._id);
      formdata.append("url", "https://www.example.com");

      for (const key in this.form) {
        if (this.form.hasOwnProperty(key)) {
          const element = this.form[key];
          formdata.append(key, element);
        }
      }

      try {
        const res = await this.$store.dispatch("promotion/add", formdata);
        console.log(res);
        if (res) {
          const id = res._id;
          this.show = false;
          this.$router.push({
            name: `merchants-my-promotions-preview-id`,
            params: { id }
          });
        }
      } catch (err) {
        console.log(err);
        this.show = false;
      }
    }
  },

  computed: {
    ...mapState({
      categories: state => {
        return state.category.categories;
      }
    })
  }
};
</script>

<style></style>