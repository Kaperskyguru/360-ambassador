
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
          <validation-provider
            name="Full Name"
            rules="required"
            v-slot="{ errors }"
          >
            <base-input required name="fullname" v-model="form.fullname">
              <template slot="label">Full Name</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>

        <div class="col-12 form-2__container">
          <validation-provider
            name="Phone Number"
            rules="required"
            v-slot="{ errors }"
          >
            <base-input required name="phone" v-model="form.phone">
              <template slot="label">Phone</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Email"
            rules="required|email"
            v-slot="{ errors }"
          >
            <base-input
              type="email"
              disabled
              required
              v-model="form.email"
              name="email"
            >
              <template slot="label">E-mail</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Username"
            rules="required"
            v-slot="{ errors }"
          >
            <base-input required v-model="form.username" name="username">
              <template slot="label">Username</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Password" rules="" v-slot="{ errors }">
            <base-input
              required
              autocomplete="off"
              type="password"
              v-model="form.password"
              name="password"
            >
              <template slot="label">Password</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
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
            <base-input required v-model="form.address" name="address">
              <template slot="label">Address</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="City" rules="required" v-slot="{ errors }">
            <base-input :required="true" v-model="form.city" name="city">
              <template slot="label">City</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="State"
            rules="required"
            v-slot="{ errors }"
          >
            <base-input :required="true" v-model="form.state" name="state">
              <template slot="label">State</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="BVN"
            rules="required|min:9"
            v-slot="{ errors }"
          >
            <base-input :required="true" v-model="form.bvn" name="bvn">
              <template slot="label">BVN</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Account Number"
            rules="required|min:10"
            v-slot="{ errors }"
          >
            <base-input
              required
              name="AccountNumber"
              v-model="form.AccountNumber"
            >
              <template slot="label">Account Number</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Bank" rules="" v-slot="{ errors }">
            <select-field
              name="bank"
              :required="true"
              v-on:select-bank="getValue('bank', $event)"
            >
              <template slot="label">Bank</template>
              <template slot="content">
                <option disabled selected>Select Bank</option>
                <option value="Access Bank Plc">Access Bank Plc</option>
                <option value="Fidelity Bank Plc">Fidelity Bank Plc</option>
                <option value="irst City Monument Bank Limited"
                  >First City Monument Bank Limited</option
                >
                <option value="First Bank of Nigeria Limited"
                  >First Bank of Nigeria Limited</option
                >
                <option value="Guaranty Trust Bank Plc"
                  >Guaranty Trust Bank Plc</option
                >
                <option value="Union Bank of Nigeria Plc"
                  >Union Bank of Nigeria Plc</option
                >
                <option value="United Bank for Africa Plc"
                  >United Bank for Africa Plc</option
                >
                <option value="Zenith Bank Plc">Zenith Bank Plc</option>
                <option value="Citibank Nigeria Limited"
                  >Citibank Nigeria Limited</option
                >
                <option value="Ecobank Nigeria Plc">Ecobank Nigeria Plc</option>
                <option value="Heritage Banking Company Limited"
                  >Heritage Banking Company Limited</option
                >
                <option value="Keystone Bank Limited"
                  >Keystone Bank Limited</option
                >
                <option value="Polaris Bank Limited"
                  >Polaris Bank Limited</option
                >
                <option value="Stanbic IBTC Bank Plc"
                  >Stanbic IBTC Bank Plc</option
                >
                <option value="Standard Chartered">Standard Chartered</option>
                <option value="Sterling Bank Plc">Sterling Bank Plc</option>
                <option value="Titan Trust Bank Limited"
                  >Titan Trust Bank Limited</option
                >
                <option value="Unity Bank Plc">Unity Bank Plc</option>
                <option value="Wema Bank Plc">Wema Bank Plc</option>
                <option value="Globus Bank Limited">Globus Bank Limited</option>
                <option value="SunTrust Bank Nigeria Limited"
                  >SunTrust Bank Nigeria Limited</option
                >
                <option value="Providus Bank Limited"
                  >Providus Bank Limited</option
                >
                <option value="Jaiz Bank Plc">Jaiz Bank Plc</option>
                <option value="TAJBank Limited">TAJBank Limited</option>
                <option value="oronation Merchant Bank"
                  >Coronation Merchant Bank</option
                >
                <option value="FBNQuest Merchant Bank"
                  >FBNQuest Merchant Bank</option
                >
                <option value="FSDH Merchant Bank">FSDH Merchant Bank</option>
                <option value="Rand Merchant Bank">Rand Merchant Bank</option>
                <option value="Nova Merchant Bank">Nova Merchant Bank</option>
              </template>
              <template slot="errors">{{ errors[0] }}</template>
            </select-field>
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
            <base-input v-model="form.company_name" name="company_name">
              <template slot="label">Company Name</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Website or Newsletter name"
            rules="required"
            v-slot="{ errors }"
          >
            <base-input v-model="form.website_name" name="website_name">
              <template slot="label">Website or Newsletter name</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            name="Website URL"
            rules="required"
            v-slot="{ errors }"
          >
            <base-input v-model="form.website" name="website" type="url">
              <template slot="label">Website URL</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Website Description" v-slot="{ errors }">
            <div class="row">
              <label
                for=""
                class="text-md-right text-left col-md-3 col-12 form-2__label color-grey-2 text-font"
                >Describe your website</label
              >
              <div class="col-md-8 col-12 ml-md-5">
                <textarea
                  rows="3"
                  class="form-2__textarea col color-grey-2"
                  v-model="form.web_description"
                ></textarea>
                <span class="input-error">{{ errors[0] }}</span>
              </div>
            </div>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Category" v-slot="{ errors }">
            <select-field
              name="category"
              v-on:select-category="getValue('category', $event)"
            >
              <template slot="label">Category</template>
              <template slot="content">
                <option disabled selected>Select Category</option>
                <option
                  :value="category._id"
                  v-for="(category, i) in categories"
                  :key="i"
                  >{{ category.name }}</option
                >
              </template>
              <template slot="errors">{{ errors[0] }}</template>
            </select-field>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider name="Monthly Visitors" v-slot="{ errors }">
            <select-field
              name="visitors"
              v-on:select-visitors="getValue('visitors', $event)"
            >
              <template slot="label">Current monthly unique visitors</template>
              <template slot="content">
                <option disabled selected>Select visitors range</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </template>
              <template slot="errors">{{ errors[0] }}</template>
            </select-field>
          </validation-provider>
        </div>
      </div>
      <div class="col-12 mt-5 mb-3">
        <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
          Industry Information
        </h6>
        <div class="col-12 form-2__container">
          <validation-provider name="industryCategory" v-slot="{ errors }">
            <select-field
              name="industryCategory"
              v-on:select-industryCategory="
                getValue('industryCategory', $event)
              "
            >
              <template slot="label">Category</template>
              <template slot="content">
                <option disabled selected>Select Category</option>
                <option
                  :value="category._id"
                  v-for="(category, i) in categories"
                  :key="i"
                  >{{ category.name }}</option
                >
              </template>
              <template slot="errors">{{ errors[0] }}</template>
            </select-field>
          </validation-provider>
        </div>
      </div>
      <div class="col-12 mt-5 mb-3">
        <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
          Social Media information
        </h6>
        <div class="col-12 form-2__container">
          <validation-provider
            rules="required"
            name="Facebook"
            v-slot="{ errors }"
          >
            <base-input
              :required="true"
              v-model="form.facebook"
              name="facebook"
              type="url"
            >
              <template slot="label">Facebook</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            rules="required"
            name="Twitter"
            v-slot="{ errors }"
          >
            <base-input
              :required="true"
              v-model="form.twitter"
              name="twitter"
              type="url"
            >
              <template slot="label">Twitter</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <validation-provider
            rules="required"
            name="Instagram"
            v-slot="{ errors }"
          >
            <base-input
              :required="true"
              v-model="form.instagram"
              name="instagram"
              type="url"
            >
              <template slot="label">Instagram</template>
              <template slot="errors">{{ errors[0] }}</template>
            </base-input>
          </validation-provider>
        </div>
        <div class="col-12 form-2__container">
          <div class="row justify-content-end">
            <button class="btn__transparent">+ Add more</button>
          </div>
        </div>
      </div>
      <div class="col-12 mt-5 mb-3">
        <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
          Area of Interest
        </h6>
        <p class="col-12 form-2__text color-grey-2 text-font">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iste quae
          laborum dolor velit voluptatibus eius nam doloribus repellendus.
          Pariatur ea, fugiat officia aliquid fugit voluptatum perspiciatis.
          Quisquam, explicabo suscipit.
        </p>
        <p class="col-12 form-2__text color-grey-2 text-font">
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
                v-model="form.service_agreement"
              />
              <label
                class="custom-control-label color-grey-2 text-font"
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
                v-model="form.software_affiliate_policy"
              />
              <label
                class="custom-control-label color-grey-2 text-font"
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
                v-model="form.privacy_policy"
              />
              <label
                class="custom-control-label color-grey-2 text-font"
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
                v-model="form.age_certification"
              />
              <label
                class="custom-control-label color-grey-2 text-font"
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
                v-model="form.certificate_authority"
              />
              <label
                class="custom-control-label color-grey-2 text-font"
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
            type="button"
            role="button"
            @click.native="back()"
            class="mr-4 btn__square-curved--yellow form-2__btn"
          >
            Cancel
          </design-button>
          <design-button
            type="submit"
            class="btn__square-curved--yellow form-2__btn"
          >
            ACCEPT & SUBMIT
          </design-button>
        </div>
      </div>
    </form>
    <loading :show="show" :label="label" :overlay="overlay"> </loading>
  </ValidationObserver>
</template>

<script>
import DesignButton from "~/components/commons/buttons/SmallDesignButton";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { mapState } from "vuex";
import Field from "~/components/commons/Field";
import ImageField from "~/components/commons/ImageField";
import CancelButton from "~/components/commons/buttons/DesignButton";
import SelectField from "~/components/commons/SelectField";
import BaseInput from "~/components/commons/BaseInput";
export default {
  components: {
    DesignButton,
    ValidationProvider,
    ValidationObserver,
    ImageField,
    Field,
    CancelButton,
    BaseInput,
    SelectField
  },
  data() {
    return {
      form: {},
      show: false,
      label: "Updating...",
      overlay: true
    };
  },
  methods: {
    async updateUser() {
      this.show = true;
      const formdata = this.generateFormData(this.form);
      const data = {
        form: formdata,
        id: this.user._id
      };
      this.makeUpdateRequest(data);
    },

    generateFormData(data) {
      const formdata = new FormData();
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
          formdata.append(key, element);
        }
      }
      return formdata;
    },

    async makeUpdateRequest(data) {
      try {
        // Updating User through Store
        const res = await this.$store.dispatch("user/update", data);
        this.show = false;

        // NOTIFICATION HERE
        this.successAlert();
      } catch (err) {
        this.failedAlert(err.response.data.message);
        this.show = false;
      }
    },

    onFileChange(e) {
      console.log(e.target.files[0]);

      this.form.profile_picture = e.target.files[0];
    },

    successAlert() {
      this.$swal({
        text: "Account updated successfully",
        icon: "success"
      });
    },

    failedAlert(message = "") {
      this.$swal({
        text: message ? message : "Something happened, please try again",
        icon: "error"
      });
    },
    back() {
      this.$router.go(-1);
    },
    getValue(name, e) {
      this.form[name] = e;
    }
  },

  computed: {
    ...mapState({
      user: state => {
        return state.user.user;
      },
      categories: state => {
        return state.category.categories;
      }
    })
  },
  created() {
    this.form.password = "";
    this.form.fullname = this.user.fullname;
    this.form.phone = this.user.phone;
    this.form.username = this.user.username;
    this.form.email = this.user.email;
    this.form.address = this.user.address;
    this.form.city = this.user.city;
    this.form.state = this.user.state;
    this.form.bvn = this.user.bvn;
    this.form.AccountNumber = this.user.AccountNumber;
    this.form.bank = this.user.bank;
    this.form.company_name = this.user.company_name;
    this.form.website = this.user.website;
    this.form.web_description = this.user.web_description;
    this.form.visitors = this.user.visitors;
    this.form.profile_picture = this.user.profile_picture;
    this.form.twitter = this.user.twitter;
    this.form.instagram = this.user.instagram;
    this.form.facebook = this.user.facebook;
  }
};
</script>

<style scoped>
.text-font {
  font-size: 1.1rem !important;
}
</style>


