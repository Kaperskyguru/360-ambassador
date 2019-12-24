<template>
  <form
    action="advertiser"
    method="post"
    class="col-12 col-md-9 mt-4 pl-5 form-2"
  >
    <div class="col-12 mb-3">
      <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
        Contact Information
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
                .a {
                  fill: #0e163d;
                }
              </style>
            </defs>
            <g transform="translate(0.004 0.001)">
              <g transform="translate(-0.004 -0.001)">
                <path
                  class="a"
                  d="M12.784,14.719a1.192,1.192,0,0,1-.846-.35,5.618,5.618,0,0,1,0-7.936l4.416-4.416a5.612,5.612,0,1,1,7.937,7.936l-2.019,2.019a1.2,1.2,0,1,1-1.693-1.693L22.6,8.26a3.22,3.22,0,1,0-4.554-4.553L13.628,8.122a3.223,3.223,0,0,0,0,4.553,1.2,1.2,0,0,1-.846,2.042Z"
                  transform="translate(-2.934 -0.372)"
                />
                <path
                  class="a"
                  d="M5.984,26.384A5.611,5.611,0,0,1,2.015,16.8l2.019-2.019a1.2,1.2,0,0,1,1.693,1.693L3.706,18.5a3.22,3.22,0,0,0,4.554,4.554l4.416-4.416a3.223,3.223,0,0,0,0-4.553,1.2,1.2,0,0,1,1.693-1.693,5.618,5.618,0,0,1,0,7.936L9.953,24.739a5.575,5.575,0,0,1-3.97,1.645Z"
                  transform="translate(-0.371 -3.385)"
                />
              </g>
            </g>
          </svg>
        </label>
        <input type="file" class="custom-file-input" id="formControlFile1" />
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >First Name *</label
          >
          <input
            type="text"
            class="form-2__input-disabled col ml-md-5 color-grey-2"
            placeholder="John"
            disabled
            required
          />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Last Name *</label
          >
          <input
            type="text"
            class="form-2__input-disabled col ml-md-5 color-grey-2"
            placeholder="Doe"
            disabled
            required
          />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Phone *</label
          >
          <input type="text" class="form-2__input col ml-md-5 color-grey-2" />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >email *</label
          >
          <input
            type="text"
            class="form-2__input-disabled col ml-md-5 color-grey-2"
            placeholder="johndoe@abc.com"
            disabled
            required
          />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Username *</label
          >
          <input
            type="text"
            required
            class="form-2__input col ml-md-5 color-grey-2"
          />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Password *</label
          >
          <input
            type="password"
            class="form-2__input col ml-md-5 color-grey-2"
            required
          />
        </div>
      </div>
    </div>
    <div class="col-12 mt-5 mb-3">
      <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
        KYC information
      </h6>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Address *</label
          >
          <input
            type="text"
            required
            class="form-2__input col ml-md-5 color-grey-2"
          />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >City *</label
          >
          <input
            type="text"
            required
            class="form-2__input col ml-md-5 color-grey-2"
          />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >State *</label
          >
          <input
            type="text"
            required
            class="form-2__input col ml-md-5 color-grey-2"
          />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Bvn *</label
          >
          <input
            type="text"
            required
            class="form-2__input col ml-md-5 color-grey-2"
          />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Account Number *</label
          >
          <input
            type="text"
            required
            class="form-2__input col ml-md-5 color-grey-2"
          />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Bank *</label
          >
          <select
            type="text"
            required
            class="form-2__select col ml-md-5 color-grey-2"
          >
            <option value="1"></option>
            <option value="1">gtb</option>
            <option value="1">gtb</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-12 mt-5 mb-3">
      <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
        Business information
      </h6>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Company Name</label
          >
          <input type="text" class="form-2__input col ml-md-5 color-grey-2" />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Website or Newsletter name</label
          >
          <input type="text" class="form-2__input col ml-md-5 color-grey-2" />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Website URL</label
          >
          <input type="text" class="form-2__input col ml-md-5 color-grey-2" />
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Describe your website</label
          >
          <textarea
            rows="3"
            class="form-2__textarea col ml-md-5 color-grey-2"
          ></textarea>
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Category</label
          >
          <select type="text" class="form-2__select col ml-md-5 color-grey-2">
            <option value="1"></option>
            <option value="1">jfvdfkndj</option>
            <option value="1">skdnvksdnk</option>
          </select>
        </div>
      </div>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Current monthly unique visitors</label
          >
          <select type="text" class="form-2__select col ml-md-5 color-grey-2">
            <option value="1"></option>
            <option value="1">jfvdfkndj</option>
            <option value="1">skdnvksdnk</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-12 mt-5 mb-3">
      <h6 class="border-bottom-grey-3 col-12 color-blue p-0">
        Industry Information
      </h6>
      <div class="col-12 form-2__container">
        <div class="row">
          <label
            for=""
            class="text-right col-md-3 col-12 form-2__label color-grey-2"
            >Category</label
          >
          <select type="text" class="form-2__select col ml-md-5 color-grey-2">
            <option value="1"></option>
            <option value="1">jfvdfkndj</option>
            <option value="1">skdnvksdnk</option>
          </select>
        </div>
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
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck1"
          />
          <label class="custom-control-label color-grey-2" for="customCheck1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            maiores qui odit delectus nemo, tempora iure fugit ipsam quidem
            iusto. Fugiat ipsa recusandae cupiditate nobis molestiae iste quo
            deserunt obcaecati.
          </label>
        </div>
      </div>
      <div class="col-12 form-2__container">
        <p class="col-12 form-2__text color-grey-2">
          Software Affiliate Policy
        </p>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck2"
          />
          <label class="custom-control-label color-grey-2" for="customCheck2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            maiores qui odit delectus nemo, tempora iure fugit ipsam quidem
            iusto. Fugiat ipsa recusandae cupiditate nobis molestiae iste quo
            deserunt obcaecati.
          </label>
        </div>
      </div>
      <div class="col-12 form-2__container">
        <p class="col-12 form-2__text color-grey-2">Privacy Policy</p>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck3"
          />
          <label class="custom-control-label color-grey-2" for="customCheck3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            maiores qui odit delectus nemo, tempora iure fugit ipsam quidem
            iusto. Fugiat ipsa recusandae cupiditate nobis molestiae iste quo
            deserunt obcaecati.
          </label>
        </div>
      </div>
      <div class="col-12 form-2__container">
        <p class="col-12 form-2__text color-grey-2">Age certification</p>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck4"
          />
          <label class="custom-control-label color-grey-2" for="customCheck4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            maiores qui odit delectus nemo, tempora iure fugit ipsam quidem
            iusto. Fugiat ipsa recusandae cupiditate nobis molestiae iste quo
            deserunt obcaecati.
          </label>
        </div>
      </div>
      <div class="col-12 form-2__container">
        <p class="col-12 form-2__text color-grey-2">Certificate of authority</p>
        <div class="custom-control custom-checkbox">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customCheck5"
          />
          <label class="custom-control-label color-grey-2" for="customCheck5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            maiores qui odit delectus nemo, tempora iure fugit ipsam quidem
            iusto. Fugiat ipsa recusandae cupiditate nobis molestiae iste quo
            deserunt obcaecati.
          </label>
        </div>
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
</template>

<script>
import DesignButton from "~/components/commons/SmallDesignButton";
export default {
  components: {
    DesignButton
  }
};
</script>

<style>
</style>
