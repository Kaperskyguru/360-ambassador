<template>
  <div class="container-fluid my-promotion">
    <div class="row">
      <menu-bar />
      <div class="my-promotion__container col-12">
        <div class="row justify-content-center">
          <p class="col-12">
            <nuxt-link to="/affiliates/promotions/" class="color-blue text-bold"
              ><img
                src="~assets/images/left-arrow.png"
                width="10"
                alt=""
              />Back</nuxt-link
            >
          </p>
          <div class="col-md-8 col-12">
            <div class="mt-2 p-0"></div>

            <table class="table table-responsive-sm table-borderless">
              <thead class="d-table-head">
                <tr class="d-table-row bg-grey-8">
                  <th
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Seller
                  </th>
                  <th
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Product
                  </th>
                  <th
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Launch Date
                  </th>
                  <th
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Comm
                  </th>
                  <th
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Sales Price
                  </th>
                  <th
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Seller
                  </th>
                </tr>
              </thead>
              <tbody class="dashboard-table__tbody bg-grey-6">
                <tr>
                  <td class="color-blue">
                    <img
                      src="~assets/images/Access_Bank_Logo.png"
                      alt=""
                      width="100"
                    />
                  </td>
                  <td class="color-blue">
                    <span class="color-blue">{{ promotion.name || "" }}</span>
                    <span class="color-blue-3 text-small"
                      >(512345)<br />
                      <span class="text-small color-grey-3">FOOD</span></span
                    >
                  </td>
                  <td class="color-blue">11/01/2019</td>
                  <td class="color-blue">{{ promotion.commission }}</td>
                  <td class="color-blue">{{ promotion.price }}</td>
                  <td class="color-blue">
                    <button
                      class="btn__square-curved--yellow p-0"
                      id="modalBtn"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Join Program
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- </div> -->

            <div class="col-12 mt-4 mb-5 p-0">
              <ul
                class="my-promotion__nav nav nav-tabs b-0 p-0"
                id="myTab"
                role="tablist"
              >
                <li class="my-promotion__nav--item nav-item p-0">
                  <nuxt-link
                    to=""
                    class="my-promotion__nav--link nav-link pl-0 active border-top-0 border-left-0 br-1"
                    id="moreInfo-tab"
                    data-toggle="tab"
                    href="#moreInfo"
                    role="tab"
                    aria-controls="moreInfo"
                    aria-selected="true"
                    >more info</nuxt-link
                  >
                </li>
                <li class="my-promotion__nav--item nav-item p-0">
                  <nuxt-link
                    to=""
                    class="my-promotion__nav--link nav-link bl-1"
                    id="pTerms-tab"
                    data-toggle="tab"
                    href="#pTerms"
                    role="tab"
                    aria-controls="pTerms"
                    aria-selected="false"
                    >promotion terms</nuxt-link
                  >
                </li>
              </ul>
              <div class="tab-content mt-4" id="myTabContent">
                <div
                  class="tab-pane fade col-12 p-0 show active"
                  id="moreInfo"
                  role="tabpanel"
                  aria-labelledby="moreInfo-tab"
                >
                  <div class="row">
                    <div class="col-md-6 col-12 mr-md-5">
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-4 text-bold color-blue">
                            Name:
                          </div>
                          <div class="text col-8 color-blue">
                            {{ promotion.name }}
                          </div>
                        </div>
                      </div>
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-4 text-bold color-blue">
                            Contact:
                          </div>
                          <div class="text col-8 color-blue">PMX Agency</div>
                        </div>
                      </div>
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-4 text-bold color-blue">
                            Email:
                          </div>
                          <div class="text col-8 color-blue">
                            CoverWalletAffiliates@FowardPMX.com
                          </div>
                        </div>
                      </div>
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-4 text-bold color-blue">
                            Country:
                          </div>
                          <div class="text col-8 color-blue">NIGERIA</div>
                        </div>
                      </div>
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-4 text-bold color-blue">
                            URL:
                          </div>
                          <div class="text col-8 color-blue">
                            {{ promotion.url }}
                          </div>
                        </div>
                      </div>
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-4 text-bold color-blue">
                            Currency:
                          </div>
                          <div class="text col-8 color-blue">NGN</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5 col-12">
                      <div class="col-12 color-blue">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 18.462 15"
                        >
                          <defs>
                            <style>
                              .b {
                                fill: #0e163d !important;
                              }
                            </style>
                          </defs>
                          <g transform="translate(-0.001 -0.004)">
                            <g transform="translate(0.001 0.004)">
                              <g transform="translate(0 0)">
                                <path
                                  class="b"
                                  d="M18.464,1.778a7.581,7.581,0,0,1-2.176.6,3.8,3.8,0,0,0,1.666-2.1,7.588,7.588,0,0,1-2.405.919A3.791,3.791,0,0,0,9.094,4.653,10.755,10.755,0,0,1,1.286.7,3.792,3.792,0,0,0,2.459,5.752,3.773,3.773,0,0,1,.743,5.279v.048A3.789,3.789,0,0,0,3.781,9.04a3.8,3.8,0,0,1-1.71.065,3.791,3.791,0,0,0,3.539,2.63A7.6,7.6,0,0,1,.9,13.357,7.661,7.661,0,0,1,0,13.3,10.72,10.72,0,0,0,5.807,15,10.7,10.7,0,0,0,16.584,4.226q0-.246-.011-.49A7.7,7.7,0,0,0,18.464,1.778Z"
                                  transform="translate(-0.001 -0.004)"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                        https://twitter.com/coverwallet
                      </div>
                      <div class="col-12 color-blue">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 18.462 15"
                        >
                          <defs>
                            <style>
                              .b {
                                fill: #0e163d;
                              }
                            </style>
                          </defs>
                          <g transform="translate(-7 -2)">
                            <g transform="translate(7 2)">
                              <path
                                class="b"
                                d="M14.5,2V5H13c-.517,0-.75.608-.75,1.125V8H14.5v3H12.25v6h-3V11H7V8H9.25V5a3,3,0,0,1,3-3Z"
                                transform="translate(-7 -2)"
                              />
                            </g>
                          </g>
                        </svg>
                        https://facebook.com/coverwallet
                      </div>
                      <div class="col-12 color-blue">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 18.462 15"
                        >
                          <defs>
                            <style>
                              .b {
                                fill: #0e163d;
                              }
                            </style>
                          </defs>
                          <g transform="translate(-2 -2)">
                            <g transform="translate(2 2)">
                              <path
                                class="b"
                                d="M6.35,2h6.3A4.353,4.353,0,0,1,17,6.35v6.3A4.35,4.35,0,0,1,12.65,17H6.35A4.353,4.353,0,0,1,2,12.65V6.35A4.35,4.35,0,0,1,6.35,2M6.2,3.5A2.7,2.7,0,0,0,3.5,6.2v6.6a2.7,2.7,0,0,0,2.7,2.7h6.6a2.7,2.7,0,0,0,2.7-2.7V6.2a2.7,2.7,0,0,0-2.7-2.7H6.2m7.238,1.125a.938.938,0,1,1-.937.938.938.938,0,0,1,.938-.938M9.5,5.75A3.75,3.75,0,1,1,5.75,9.5,3.75,3.75,0,0,1,9.5,5.75m0,1.5A2.25,2.25,0,1,0,11.75,9.5,2.25,2.25,0,0,0,9.5,7.25Z"
                                transform="translate(-2 -2)"
                              />
                            </g>
                          </g>
                        </svg>
                        https://instagram.com/coverwallet
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="border-bottom-grey-3"></div>
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-2 text-bold color-blue">
                            Joined Network:
                          </div>
                          <div class="text col-9 color-blue">30-Oct-2018</div>
                        </div>
                      </div>
                      <div class="border-bottom-grey-3"></div>
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-2 text-bold color-blue">
                            Category:
                          </div>
                          <div class="text col-9 color-blue">
                            {{ showCategory(promotion.category) }}
                            <!-- {{ promotion.category }} -->
                          </div>
                        </div>
                      </div>
                      <div class="border-bottom-grey-3"></div>
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-2 text-bold color-blue">
                            Description:
                          </div>
                          <div class="text col-9 color-blue">
                            {{ promotion.description }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade col-12"
                  id="pTerms"
                  role="tabpanel"
                  aria-labelledby="pTerms-tab"
                >
                  <div class="row">
                    <div class="col-12">(Default)-$30 Terms-feb 2019</div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Action:</div>
                      <div class="col-8 color-blue">
                        Coberwallet.com Verified quote request
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Description:</div>
                      <div class="col-8 color-blue">
                        {{ promotion.description }}
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Referral Period:</div>
                      <div class="col-8 color-blue">30 day(s)</div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Number of Occurances:</div>
                      <div class="col-8 color-blue">1</div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Locking Method:</div>
                      <div class="col-8 color-blue">Standard</div>
                    </div>
                  </div>
                  <div class="col-12 mb-4">
                    <div class="row">
                      <div class="col-4 color-blue">Commission:</div>
                      <div class="col-8 color-blue">30 USD flat</div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Action:</div>
                      <div class="col-8 color-blue">
                        Coberwallet.com Online quote request
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Description:</div>
                      <div class="col-8 color-blue">
                        Prospective client fully completes the web application
                        form and requests a quote
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Referral Period:</div>
                      <div class="col-8 color-blue">30 day(s)</div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Number of Occurances:</div>
                      <div class="col-8 color-blue">1</div>
                    </div>
                  </div>
                  <div class="col-12 mb-2">
                    <div class="row">
                      <div class="col-4 color-blue">Locking Method:</div>
                      <div class="col-8 color-blue">Standard</div>
                    </div>
                  </div>
                  <div class="col-12 mb-4">
                    <div class="row">
                      <div class="col-4 color-blue">Commission:</div>
                      <div class="col-8 color-blue">0.00 USD flat</div>
                    </div>
                  </div>
                  <div class="col-12 mb-4">
                    <div class="row">
                      <div class="col-4 color-blue">Policies:</div>
                      <div class="col-8 color-blue"></div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-12 color-blue">
                        Search Campaigns - Protected SEM Bidding Keywords
                      </div>
                      <div class="col-12 color-blue pl-5 pr-5 pt-2">
                        cover wallet cover wallet cover wallet Insurance cover
                        wallet carreers cover wallet Insurancecover wallet
                        Insurance cover wallet carreers cover wallet carreers
                        cover wallet cover wallet cover wallet Insurance cover
                        wallet carreers cover wallet Insurancecover wallet
                        Insurance cover wallet carreers cover wallet carreers
                        cover wallet cover wallet cover wallet Insurance cover
                        wallet carreers cover wallet Insurancecover wallet
                        Insurance cover wallet carreers cover wallet carreers
                        cover wallet cover wallet cover wallet Insurance cover
                        wallet carreers cover wallet Insurancecover wallet
                        Insurance cover wallet carreers cover wallet carreers
                        cover wallet cover wallet cover wallet Insurance cover
                        wallet carreers cover wallet Insurancecover wallet
                        Insurance cover wallet carreers cover wallet carreers
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-12 color-blue">
                        Negative Matchings for Protected Keywords
                      </div>
                      <div class="col-12 color-blue pl-5 pr-5 pt-2">
                        Required
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-12 color-blue">
                        Search Campaigns - Recommended SEM Bidding Keywords
                      </div>
                      <div class="col-12 color-blue pl-5 pr-5 pt-2">
                        general liability workers compensation commercial auto
                        product liability errors and ommissions directors and
                        officers bop
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-12 color-blue">
                        Search Campaigns - Prohibited SEM Display URL Content
                      </div>
                      <div class="col-12 color-blue pl-5 pr-5 pt-2">
                        cover wallet free discount promotion sale voucher code
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-12 color-blue">
                        Search Campaigns - Prohibited SEM Ad Copy Content
                      </div>
                      <div class="col-12 color-blue pl-5 pr-5 pt-2">
                        free discount % promotion sale voucher code offer
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-12 color-blue">
                        Search Campaigns - Direct Linking
                      </div>
                      <div class="col-12 color-blue pl-5 pr-5 pt-2">No</div>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="row">
                      <div class="col-12 color-blue">
                        Search Campaigns - Special Instruction for Search
                        Marketing Publishers
                      </div>
                      <div class="col-12 color-blue pl-5 pr-5 pt-2">
                        publishers are not allowed to bid in position higher
                        than 4 in Desktop and Tablet and in position higher than
                        3 in mobile
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-12">
            <div class="col-12 row">
              <h6
                class="col-12 text text-bold color-blue bg-grey-8 pt-4 pb-3 pl-3 pr-3"
              >
                Promotion sharable Link
              </h6>
              <ul
                class="my-promotion__pills nav nav-pills mb-3 col-12"
                id="pills-tab"
                role="tablist"
              >
                <li class="my-promotion__pills--item nav-item">
                  <nuxt-link
                    to=""
                    class="my-promotion__pills--link nav-link active"
                    id="pills-url-tab"
                    data-toggle="pill"
                    href="#pills-url"
                    role="tab"
                    aria-controls="pills-url"
                    aria-selected="true"
                    >URL</nuxt-link
                  >
                </li>
                <li class="my-promotion__pills--item nav-item">
                  <nuxt-link
                    to=""
                    class="my-promotion__pills--link nav-link"
                    id="pills-email-tab"
                    data-toggle="pill"
                    href="#pills-email"
                    role="tab"
                    aria-controls="pills-email"
                    aria-selected="false"
                    >Email/SMS</nuxt-link
                  >
                </li>
                <li class="my-promotion__pills--item nav-item">
                  <nuxt-link
                    to=""
                    class="my-promotion__pills--link nav-link"
                    id="pills-social-tab"
                    data-toggle="pill"
                    href="#pills-social"
                    role="tab"
                    aria-controls="pills-social"
                    aria-selected="false"
                    >Social Media</nuxt-link
                  >
                </li>
                <li class="my-promotion__pills--item nav-item">
                  <nuxt-link
                    to=""
                    class="my-promotion__pills--link nav-link"
                    id="pills-embed-tab"
                    data-toggle="pill"
                    href="#pills-embed"
                    role="tab"
                    aria-controls="pills-embed"
                    aria-selected="false"
                    >Embed</nuxt-link
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
                  <div
                    class="col-12 text text-bold text-center color-blue mt-4 mb-3"
                  >
                    Your promotion sharing URL
                  </div>
                  <div
                    class="col-12 text-sm-light text-center color-blue mt-4 mb-3"
                  >
                    copy and paste the link below into emails, chats and
                    browsers
                  </div>
                  <div
                    class="col-12 my-promotion__pills--square text-sm-light color-blue mt-4 mb-3"
                  >
                    <span class="col-10">https://sdjnjkdaklddjlssckls.sd</span>
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
                      <input
                        type="checkbox"
                        id="toggleInput"
                        onclick="myFunction()"
                      />
                      <label for="" class="email">email</label>
                      <label for="" class="sms">sms</label>
                    </div>
                  </div>
                  <div
                    class="my-promotion__pills--email-container"
                    id="emailContainer"
                  >
                    <div class="row">
                      <div
                        class="col-12 text-sm-light color-blue mt-4 mb-3 p-0"
                      >
                        copy and paste the link below into emails, chats and
                        browsers
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
                          <button
                            class="my-promotion__pills--btn color-blue-2 col-4"
                          >
                            Send email
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="my-promotion__pills--sms-container"
                    id="smsContainer"
                  >
                    <div class="row">
                      <div
                        class="col-12 text-sm-light color-blue mt-4 mb-3 p-0"
                      >
                        send your promotion link directly to any computer,
                        tablet or phone
                      </div>
                      <div
                        class="col-12 my-promotion__pills--square text-sm-light color-blue mt-4 mb-3 p-0 pl-2"
                      >
                        <img
                          src="~assets/images/nigeria.png"
                          alt=""
                          width="20"
                        />
                        <input
                          type="email"
                          class="my-promotion__pills--input col-9 ml-2"
                          placeholder="+234"
                        />
                      </div>
                      <div class="col-12">
                        <div class="row justify-content-end">
                          <button
                            class="my-promotion__pills--btn color-blue-2 col-4"
                          >
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18.462"
                          height="15"
                          viewBox="0 0 18.462 15"
                        >
                          <defs>
                            <style>
                              .f {
                                fill: #0e163d;
                              }
                            </style>
                          </defs>
                          <g transform="translate(-0.001 -0.004)">
                            <g transform="translate(0.001 0.004)">
                              <g transform="translate(0 0)">
                                <path
                                  class="f"
                                  d="M18.464,1.778a7.581,7.581,0,0,1-2.176.6,3.8,3.8,0,0,0,1.666-2.1,7.588,7.588,0,0,1-2.405.919A3.791,3.791,0,0,0,9.094,4.653,10.755,10.755,0,0,1,1.286.7,3.792,3.792,0,0,0,2.459,5.752,3.773,3.773,0,0,1,.743,5.279v.048A3.789,3.789,0,0,0,3.781,9.04a3.8,3.8,0,0,1-1.71.065,3.791,3.791,0,0,0,3.539,2.63A7.6,7.6,0,0,1,.9,13.357,7.661,7.661,0,0,1,0,13.3,10.72,10.72,0,0,0,5.807,15,10.7,10.7,0,0,0,16.584,4.226q0-.246-.011-.49A7.7,7.7,0,0,0,18.464,1.778Z"
                                  transform="translate(-0.001 -0.004)"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="col-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7.5"
                          height="15"
                          viewBox="0 0 7.5 15"
                        >
                          <defs>
                            <style>
                              .g {
                                fill: #0e163d;
                              }
                            </style>
                          </defs>
                          <g transform="translate(-7 -2)">
                            <g transform="translate(7 2)">
                              <path
                                class="g"
                                d="M14.5,2V5H13c-.517,0-.75.608-.75,1.125V8H14.5v3H12.25v6h-3V11H7V8H9.25V5a3,3,0,0,1,3-3Z"
                                transform="translate(-7 -2)"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="col-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                        >
                          <defs>
                            <style>
                              .h {
                                fill: #0e163d;
                              }
                            </style>
                          </defs>
                          <g transform="translate(-2 -2)">
                            <g transform="translate(2 2)">
                              <path
                                class="h"
                                d="M6.35,2h6.3A4.353,4.353,0,0,1,17,6.35v6.3A4.35,4.35,0,0,1,12.65,17H6.35A4.353,4.353,0,0,1,2,12.65V6.35A4.35,4.35,0,0,1,6.35,2M6.2,3.5A2.7,2.7,0,0,0,3.5,6.2v6.6a2.7,2.7,0,0,0,2.7,2.7h6.6a2.7,2.7,0,0,0,2.7-2.7V6.2a2.7,2.7,0,0,0-2.7-2.7H6.2m7.238,1.125a.938.938,0,1,1-.937.938.938.938,0,0,1,.938-.938M9.5,5.75A3.75,3.75,0,1,1,5.75,9.5,3.75,3.75,0,0,1,9.5,5.75m0,1.5A2.25,2.25,0,1,0,11.75,9.5,2.25,2.25,0,0,0,9.5,7.25Z"
                                transform="translate(-2 -2)"
                              />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="col-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                        >
                          <defs>
                            <style>
                              .i {
                                fill: #0e163d;
                              }
                            </style>
                          </defs>
                          <g transform="translate(-0.001)">
                            <g transform="translate(0.001)">
                              <g transform="translate(0)">
                                <path
                                  class="i"
                                  d="M5.362,0l-1,1.987L3.359,0H2.081L3.888,3.146,3.9,3.14V5.559h.926V3.14l.011.006L6.639,0Z"
                                  transform="translate(-1.117)"
                                />
                                <path
                                  class="i"
                                  d="M13.391,2.926a.469.469,0,0,1,.463.463V5.243a.463.463,0,0,1-.926,0V3.39A.469.469,0,0,1,13.391,2.926Zm0-.926A1.394,1.394,0,0,0,12,3.39V5.243a1.39,1.39,0,0,0,2.779,0V3.39A1.394,1.394,0,0,0,13.391,2Z"
                                  transform="translate(-6.361 -1.074)"
                                />
                                <path
                                  class="i"
                                  d="M21.854,2V5.648c-.4.337-.926.541-.926-.661V2H20V5.175c.014.766.176,2.145,1.853,1.024v.434h.926V2Z"
                                  transform="translate(-10.6 -1.074)"
                                />
                                <path
                                  class="i"
                                  d="M26.464,22a.463.463,0,0,0-.463.463v.463h.926v-.463A.463.463,0,0,0,26.464,22Z"
                                  transform="translate(-13.78 -11.679)"
                                />
                                <path
                                  class="a"
                                  d="M18,22.671V25.1c.314.314.926.347.926-.116V22.816c0-.463-.463-.608-.926-.145Z"
                                  transform="translate(-9.557 -11.84)"
                                />
                                <path
                                  class="i"
                                  d="M14.925,15.933a1.938,1.938,0,0,0-1.917-1.858C11.985,14.025,9.647,14,7.592,14s-4.56.025-5.583.076a2.006,2.006,0,0,0-1.334.551,1.958,1.958,0,0,0-.58,1.306C.033,17.02,0,17.416,0,17.958s.03,1.359.094,2.447a1.96,1.96,0,0,0,.583,1.306,2,2,0,0,0,1.334.551c1.022.05,3.527.076,5.583.076s4.394-.025,5.416-.076a1.938,1.938,0,0,0,1.917-1.858Q15,19.046,15,17.958c0-.725-.026-1.119-.077-2.025ZM2.814,21.412H1.876V16.779H.939v-.926H3.751v.926H2.814Zm3.75,0H5.626v-.434c-1.781.989-1.859.032-1.875-.734V17.706h.938v2.552c0,.56.528.505.938.169V17.706h.938Zm3.75-.94c0,.968-1,1.251-1.875.5v.442H7.5V15.853h.938v1.506c.938-.926,1.875-.579,1.875.347Zm3.75-1.84V19.1H12.189v.926a.469.469,0,0,0,.938,0v-.463h.938v.463a1.406,1.406,0,0,1-2.813,0V18.169a1.406,1.406,0,0,1,2.813,0Z"
                                  transform="translate(-0.001 -7.338)"
                                />
                              </g>
                            </g>
                          </g>
                        </svg>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "~/components/commons/navs/DashboardNav";
import { mapState } from "vuex";

export default {
  components: {
    MenuBar
  },
  computed: {
    ...mapState({
      promotion: state => {
        return state.promotion.promotion;
      },

      categories: state => {
        return state.category.categories;
      }
    })
  },

  methods: {
    showCategory(id) {
      const category = this.categories.filter(item => {
        return item._id == id;
      })[0];
      console.log(category);

      if (category) {
        return category.name;
      }
      return "";
    }
  },
  mounted() {
    console.log(this.promotion, "test");
  }
};
</script>

<style>
</style>