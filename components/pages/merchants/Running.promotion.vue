<template>
  <main class="container-fluid my-promotion">
    <div class="row">
      <!-- MENU HERE -->
      <menu-bar />

      <div class="my-promotion__container col-12">
        <div class="row justify-content-center">
          <div class="col-12 mb-4 pr-5">
            <charts />
          </div>
          <div class="col-md-8 col-12">
            <div class="col-12 d-table p-0">
              <div class="d-table-head">
                <div class="d-table-row bg-grey-8">
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Seller
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Product
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Launch Date
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Comm
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    Sales Price
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  ></p>
                </div>
              </div>
              <div class="mt-2 p-0"></div>
              <div class="col-12 d-table-body">
                <div class="d-table-row bg-grey-6">
                  <p class="col-auto pt-3 pb-3 pl-2 d-table-cell color-blue">
                    <img
                      src="~assets/images/Access_Bank_Logo.png"
                      alt=""
                      width="100"
                    />
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    <span class="color-blue">Bukka Hut Festo</span>
                    <span class="color-blue-3 text-small"
                      >(512345)<br />
                      <span class="text-small color-grey-3">FOOD</span></span
                    >
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    11/01/2019
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    10%
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue"
                  >
                    5,000
                  </p>
                  <p
                    class="col-auto pt-3 pb-3 pl-0 pr-1 d-table-cell color-blue"
                  >
                    <button
                      class="btn__square-curved--yellow p-0"
                      id="modalBtn"
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      Join Program
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 mt-4 p-0">
              <ul
                class="my-promotion__nav nav nav-tabs b-0 p-0"
                id="myTab"
                role="tablist"
              >
                <li class="my-promotion__nav--item nav-item p-0">
                  <a
                    class="my-promotion__nav--link nav-link pl-0 active border-top-0 border-left-0 br-1"
                    id="moreInfo-tab"
                    data-toggle="tab"
                    href="#moreInfo"
                    role="tab"
                    aria-controls="moreInfo"
                    aria-selected="true"
                    >more info</a
                  >
                </li>
                <li class="my-promotion__nav--item nav-item p-0">
                  <a
                    class="my-promotion__nav--link nav-link bl-1"
                    id="pTerms-tab"
                    data-toggle="tab"
                    href="#pTerms"
                    role="tab"
                    aria-controls="pTerms"
                    aria-selected="false"
                    >promotion terms</a
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
                          <div class="text col-8 color-blue">Bukka Hut</div>
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
                            http://www.coverwallet.com
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
                          <div class="text col-9 color-blue">Commercial</div>
                        </div>
                      </div>
                      <div class="border-bottom-grey-3"></div>
                      <div class="col-12 p-0 mb-2">
                        <div class="row">
                          <div class="text col-2 text-bold color-blue">
                            Description:
                          </div>
                          <div class="text col-9 color-blue">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Itaque tempore voluptas repellendus placeat
                            laborum reiciendis officiis illum quae asperiores
                            suscipit. Aperiam accusantium praesentium totam
                            deserunt reiciendis at qui sed consequatur! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Sequi ullam eaque quae architecto adipisci ipsum
                            praesentium, assumenda obcaecati rem, voluptas
                            provident rerum quas eum dolore iste, consequuntur
                            illo. Natus, maiores.
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
                        CoverWallet sales rep verify quote request by phone with
                        prospective client
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
                Promotion Stats
              </h6>
              <div class="col-12">
                <div class="row">
                  <div class="col-4">
                    <!-- STAT BOX HERE -->

                    <stat-box>
                      <template slot="title">
                        clicks
                      </template>
                      <template slot="amount">
                        200
                      </template>
                    </stat-box>
                  </div>
                  <div class="col-4">
                    <stat-box>
                      <template slot="title">
                        visitors
                      </template>
                      <template slot="amount">
                        100
                      </template>
                    </stat-box>
                  </div>
                  <div class="col-4">
                    <stat-box>
                      <template slot="title">
                        sales
                      </template>
                      <template slot="amount">
                        2
                      </template>
                    </stat-box>
                  </div>
                  <div class="col-4">
                    <stat-box>
                      <template slot="title">
                        conv
                      </template>
                      <template slot="amount">
                        0.02%
                      </template>
                    </stat-box>
                  </div>
                  <div class="col-4">
                    <stat-box>
                      <template slot="title">
                        n per sale
                      </template>
                      <template slot="amount">
                        5.00
                      </template>
                    </stat-box>
                  </div>
                  <div class="col-4">
                    <stat-box :fill="fill" class="bg-yellow color-black">
                      <template slot="title" class="color-black">
                        total earned
                      </template>
                      <template slot="amount">
                        10.00
                      </template>
                    </stat-box>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 row">
              <h6
                class="col-12 text text-bold color-blue bg-grey-8 pt-4 pb-3 pl-3 pr-3"
              >
                Promotion sharable Link
              </h6>
              <shareable-link />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <modal />
  </main>
</template>

<script>
import MenuBar from "~/components/commons/DashboardNav";
import Modal from "~/components/Modals";
import Charts from "~/components/partials/Merchants/Charts";
import BarChart from "~/components/commons/dashboard/BarChart";
import StatBox from "~/components/commons/dashboard/Stat.box";
import ShareableLink from "~/components/partials/Merchants/Shareable.link";
export default {
  data() {
    return {
      fill: true
    };
  },
  components: {
    MenuBar,
    BarChart,
    StatBox,
    ShareableLink,
    Charts,
    Modal
  },
  mounted() {}
};
</script>

<style>
</style>