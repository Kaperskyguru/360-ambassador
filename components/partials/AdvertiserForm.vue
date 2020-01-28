<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      @submit.prevent="handleSubmit(updateUser)"
      method="post"
      class="col-12 col-md-10 mt-4 pl-5 form-2"
      enctype="multipart/form-data"
    >
      <div class="col-12 mb-3">
        <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
          Contact Information
        </h6>
        <div class="col-12 col-md-6 custom-file-input-container">
          <image-field v-on:triggerChange="onFileChange($event)"></image-field>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="First name" rules="" v-slot="{ errors }">
            <div class="row">
              <label
                for=""
                class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                >First name *</label
              >
              <div class="col-md-8 col-12 ml-md-5">
                <input
                  type="text"
                  class="form-2__input-disabled col-12 color-grey-2"
                  :placeholder="user.firstName"
                  disabled
                  v-model="user.firstName"
                />
                <span class="input-error">{{ errors[0] }}</span>
              </div>
            </div>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Last name" rules="" v-slot="{ errors }">
            <div class="row">
              <label
                for=""
                class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                >Last name *</label
              >
              <div class="col-md-8 col-12 ml-md-5">
                <input
                  type="text"
                  class="form-2__input-disabled col-12 color-grey-2"
                  :placeholder="user.lastName"
                  disabled
                  v-model="user.lastName"
                />
                <span class="input-error">{{ errors[0] }}</span>
              </div>
            </div>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Phone Number"
            rules="required"
            v-slot="{ errors }"
          >
            <field v-model="user.phone" :required="true" name="phone">
              <template slot="label">Phone</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <div class="row">
            <label
              for=""
              class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
              >E-mail *</label
            >
            <input
              type="text"
              class="form-2__input-disabled col-md-7 col-12 ml-md-5 color-grey-2"
              :placeholder="user.email"
              disabled
              required
              v-model="user.email"
            />
          </div>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Username"
            rules="required"
            v-slot="{ errors }"
          >
            <field v-model="user.username" :required="true" name="username">
              <template slot="label">Username</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Password"
            rules="required"
            v-slot="{ errors }"
          >
            <field
              v-model="user.password"
              :required="true"
              name="password"
              type="password"
            >
              <template slot="label">Password</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
      </div>
      <div class="col-12 mt-5 mb-3">
        <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
          KYC information
        </h6>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Address"
            rules="required"
            v-slot="{ errors }"
          >
            <field v-model="user.address" :required="true" name="address">
              <template slot="label">Address</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="City" rules="required" v-slot="{ errors }">
            <field v-model="user.city" :required="true" name="city">
              <template slot="label">City</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="State"
            rules="required"
            v-slot="{ errors }"
          >
            <field v-model="user.state" :required="true" name="state">
              <template slot="label">State</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="BVN"
            rules="required|min:9"
            v-slot="{ errors }"
          >
            <field :required="true" name="bvn" v-model="user.bvn" type="number">
              <template slot="label">BVN</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Account Number"
            rules="required"
            v-slot="{ errors }"
          >
            <field
              :required="true"
              name="account_number"
              v-model="user.AccountNumber"
            >
              <template slot="label">Account Number</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Bank" rules="" v-slot="{ errors }">
            <div class="row">
              <label
                for=""
                class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                >Bank *</label
              >
              <div class="col-md-8 col-12 ml-md-5">
                <select type="text" class="form-2__select col-12 color-grey-2">
                  <option value="1"></option>
                  <option value="2">gtb</option>
                  <option value="3">gtb</option>
                </select>
                <span class="input-error">{{ errors[0] }}</span>
              </div>
            </div>
          </validation-provider>
        </div>
      </div>
      <div class="col-12 mt-5 mb-3">
        <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
          Business information
        </h6>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Company Name"
            rules="required"
            v-slot="{ errors }"
          >
            <field
              :required="true"
              name="company_name"
              v-model="user.company_name"
            >
              <template slot="label">Company Name</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Website or Newsletter name"
            rules="required"
            v-slot="{ errors }"
          >
            <field :required="true" name="Company Name" v-model="user.website">
              <template slot="label">Website or Newsletter name</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Website URL"
            rules="required"
            v-slot="{ errors }"
          >
            <field
              :required="true"
              name="Website URL"
              v-model="user.website_url"
            >
              <template slot="label">Website URL</template>
              <template slot="errors">{{ errors[0] }}</template>
            </field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Category" v-slot="{ errors }">
            <div class="row">
              <label
                for=""
                class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                >Describe your website</label
              >
              <div class="col-md-8 col-12 ml-md-5">
                <textarea
                  rows="3"
                  class="form-2__textarea col color-grey-2"
                  v-model="user.website_info"
                ></textarea>
                <span class="input-error">{{ errors[0] }}</span>
              </div>
            </div>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Category" v-slot="{ errors }">
            <div class="row">
              <label
                for=""
                class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                >Category</label
              >
              <div class="col-md-8 col-12 ml-md-5">
                <select
                  type="text"
                  v-model="user.category"
                  class="form-2__select col  color-grey-2"
                >
                  <option value="1"></option>
                  <option value="2">jfvdfkndj</option>
                  <option value="3">skdnvksdnk</option>
                </select>
                <span class="input-error">{{ errors[0] }}</span>
              </div>
            </div>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Monthly Visitors" v-slot="{ errors }">
            <div class="row">
              <label
                for=""
                class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                >Current monthly unique visitors</label
              >
              <div class="col-md-8 col-12 ml-md-5">
                <select
                  type="text"
                  class="form-2__select col color-grey-2"
                  v-model="user.unique_visitors"
                >
                  <option value="1"></option>
                  <option value="2">jfvdfkndj</option>
                  <option value="3">skdnvksdnk</option>
                </select>
                <span class="input-error">{{ errors[0] }}</span>
              </div>
            </div>
          </validation-provider>
        </div>
      </div>
      <div class="col-12 mt-5 mb-3">
        <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
          Industry Information
        </h6>
        <div class="col-12 form-2__container">
          <validation-provider name="Category" v-slot="{ errors }">
            <div class="row">
              <label
                for=""
                class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2"
                >Category</label
              >
              <div class="col-md-8 col-12 ml-md-5">
                <select
                  type="text"
                  class="form-2__select col  color-grey-2"
                  v-model="user.industry_category"
                >
                  <option value="1"></option>
                  <option value="2">jfvdfkndj</option>
                  <option value="3">skdnvksdnk</option>
                </select>
                <span class="input-error">{{ errors[0] }}</span>
              </div>
            </div>
          </validation-provider>
        </div>
      </div>
      <div class="col-12 mt-5 mb-3">
        <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
          Area of Interest
        </h6>
        <p class="col-12 form-2__text color-grey-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste quae
          laborum dolor velit voluptatibus eius nam doloribus repellendus.
          Pariatur ea, fugiat officia aliquid fugit voluptatum perspiciatis.
          Quisquam, explicabo suscipit.
        </p>
        <p class="col-12 form-2__text color-grey-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste quae
          laborum dolor velit voluptatibus eius nam doloribus repellendus.
          Pariatur ea, fugiat officia aliquid fugit voluptatum perspiciatis.
          Quisquam, explicabo suscipit.
        </p>
        <div class="col-12 form-2__container">
          <p class="col-12 form-2__text color-grey-2">Service Agreement</p>
          <validation-provider
            name="Service Agreement"
            rules=""
            v-slot="{ errors }"
          >
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck1"
                v-model="user.service_agreement"
              />
              <label
                class="custom-control-label color-grey-2"
                for="customCheck1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum maiores qui odit delectus nemo, tempora iure fugit
                ipsam quidem iusto. Fugiat ipsa recusandae cupiditate nobis
                molestiae iste quo deserunt obcaecati.
              </label>
            </div>
            <span class="input-error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <p class="col-12 form-2__text color-grey-2">
            Software Affiliate Policy
          </p>
          <validation-provider
            name=" Software Affiliate Policy"
            rules=""
            v-slot="{ errors }"
          >
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck2"
                v-model="user.software_affiliate_policy"
              />
              <label
                class="custom-control-label color-grey-2"
                for="customCheck2"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum maiores qui odit delectus nemo, tempora iure fugit
                ipsam quidem iusto. Fugiat ipsa recusandae cupiditate nobis
                molestiae iste quo deserunt obcaecati.
              </label>
            </div>
            <span class="input-error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <p class="col-12 form-2__text color-grey-2">Privacy Policy</p>
          <validation-provider
            name="Privacy Policy"
            rules=""
            v-slot="{ errors }"
          >
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck3"
                v-model="user.privacy_policy"
              />
              <label
                class="custom-control-label color-grey-2"
                for="customCheck3"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum maiores qui odit delectus nemo, tempora iure fugit
                ipsam quidem iusto. Fugiat ipsa recusandae cupiditate nobis
                molestiae iste quo deserunt obcaecati.
              </label>
            </div>
            <span class="input-error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <p class="col-12 form-2__text color-grey-2">Age certification</p>
          <validation-provider
            name="Age certification"
            rules=""
            v-slot="{ errors }"
          >
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck4"
                v-model="user.age_certification"
              />
              <label
                class="custom-control-label color-grey-2"
                for="customCheck4"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum maiores qui odit delectus nemo, tempora iure fugit
                ipsam quidem iusto. Fugiat ipsa recusandae cupiditate nobis
                molestiae iste quo deserunt obcaecati.
              </label>
            </div>
            <span class="input-error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <p class="col-12 form-2__text color-grey-2">
            Certificate of authority
          </p>
          <validation-provider
            name="Certificate of authority"
            rules=""
            v-slot="{ errors }"
          >
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customCheck5"
                v-model="user.certificate_authority"
              />
              <label
                class="custom-control-label color-grey-2"
                for="customCheck5"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum maiores qui odit delectus nemo, tempora iure fugit
                ipsam quidem iusto. Fugiat ipsa recusandae cupiditate nobis
                molestiae iste quo deserunt obcaecati.
              </label>
            </div>
            <span class="input-error">{{ errors[0] }}</span>
          </validation-provider>
        </div>
      </div>
      <div class="col-12 form-2__container pr-5">
        <div class="row justify-content-end">
          <design-button
            type="submit"
            class="btn__square-curved--yellow form-2__btn"
          >
            ACCEPT & SUBMIT
          </design-button>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import DesignButton from "~/components/commons/SmallDesignButton";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { mapState } from "vuex";
import Field from "~/components/commons/Field";
import ImageField from "~/components/commons/ImageField";
export default {
  components: {
    DesignButton,
    ValidationProvider,
    ValidationObserver,
    ImageField,
    Field
  },
  props: ["user"],
  data() {
    return {
      // form: {}
    };
  },
  methods: {
    async updateUser() {
      // Get formal registered user

      // try {
      const data = {
        form: this.user,
        id: this.user.id
      };

      try {
        const res = await this.$store.dispatch("user/update", data);
      } catch (error) {
        console.log(error.response);
      }
    },

    onFileChange(e) {
      this.user.profile_picture = e.target.files[0];

      // Upload file here or display
    }
  }

  // beforeMount() {
  //   this.$nextTick(() => {
  //     this.form = this.user;
  //   });

  //   // this.user.firstName = this.user.firstName || "";
  //   // this.user.lastName = this.user.lastName || "";
  //   // this.user.email = this.user.email || "";

  //   console.log(this.form, this.user);
  // }
};
</script>

<style>
</style>
