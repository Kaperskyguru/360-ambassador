<template>
  <div>
    <div class="mt-2 p-0"></div>

    <table class="table table-responsive-sm table-borderless">
      <thead class="d-table-head">
        <tr class="d-table-row bg-grey-8">
          <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
            Seller
          </th>
          <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
            Product
          </th>
          <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
            Launch Date
          </th>
          <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
            Comm
          </th>
          <th class="col-auto pt-3 pb-3 pl-1 pr-1 d-table-cell color-blue">
            Sales Price
          </th>
        </tr>
      </thead>

      <tbody class="dashboard-table__tbody bg-grey-6">
        <tr>
          <td class="color-blue">
            <img
              :src="
                promotion.user
                  ? promotion.user.profile_picture
                  : require('@/assets/images/Access_Bank_Logo.png')
              "
              alt=""
              width="100"
            />
          </td>
          <td class="color-blue">
            <span class="color-blue">{{ promotion.name || "" }}</span>
            <span class="color-blue-3 text-small"
              >(512345)<br />
              <span class="text-small color-grey-3">{{
                promotion.category ? promotion.category.name : ""
              }}</span></span
            >
          </td>
          <td class="color-blue">11/01/2019</td>
          <td class="color-blue">{{ promotion.commission || "" }}</td>
          <td class="color-blue">
            {{ promotion.price || "" }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <tbody class="dashboard-table__tbody bg-grey-6">
        <tr>
          <td scope="col-auto" class="color-blue">
            <img
              :src="
                promotion.user
                  ? promotion.user.profile_picture
                  : require('@/assets/images/Access_Bank_Logo.png')
              "
              alt=""
              width="100"
            />
          </td>
          <td scope="col-auto" class="color-blue">
            <span class="color-blue">{{ promotion.name || "" }}</span>
            <span class="color-blue-3 text-small"
              >(512345)<br />
              <span class="text-small color-grey-3">{{
                promotion.category ? promotion.category.name : ""
              }}</span></span
            >
          </td>
          <td scope="col-auto" class="color-blue">11/01/2019</td>
          <td scope="col-auto" class="color-blue">
            {{ promotion.commission }}%
          </td>
          <td scope="col-auto" class="color-blue">{{ promotion.price }}</td>
        </tr>
      </tbody>
    </table> -->
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
                <twitter-icon color="#0e163d" width="10" height="10" />
                https://twitter.com/coverwallet
              </div>
              <div class="col-12 color-blue">
                <facebook-icon color="#0e163d" width="10" height="10" />
                https://facebook.com/coverwallet
              </div>
              <div class="col-12 color-blue">
                <instagram-icon color="#0e163d" width="10" height="10" />
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque tempore voluptas repellendus placeat laborum
                    reiciendis officiis illum quae asperiores suscipit. Aperiam
                    accusantium praesentium totam deserunt reiciendis at qui sed
                    consequatur! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Sequi ullam eaque quae architecto adipisci
                    ipsum praesentium, assumenda obcaecati rem, voluptas
                    provident rerum quas eum dolore iste, consequuntur illo.
                    Natus, maiores.
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
                Prospective client fully completes the web application form and
                requests a quote
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
                cover wallet cover wallet cover wallet Insurance cover wallet
                carreers cover wallet Insurancecover wallet Insurance cover
                wallet carreers cover wallet carreers cover wallet cover wallet
                cover wallet Insurance cover wallet carreers cover wallet
                Insurancecover wallet Insurance cover wallet carreers cover
                wallet carreers cover wallet cover wallet cover wallet Insurance
                cover wallet carreers cover wallet Insurancecover wallet
                Insurance cover wallet carreers cover wallet carreers cover
                wallet cover wallet cover wallet Insurance cover wallet carreers
                cover wallet Insurancecover wallet Insurance cover wallet
                carreers cover wallet carreers cover wallet cover wallet cover
                wallet Insurance cover wallet carreers cover wallet
                Insurancecover wallet Insurance cover wallet carreers cover
                wallet carreers
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
                general liability workers compensation commercial auto product
                liability errors and ommissions directors and officers bop
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
                Search Campaigns - Special Instruction for Search Marketing
                Publishers
              </div>
              <div class="col-12 color-blue pl-5 pr-5 pt-2">
                publishers are not allowed to bid in position higher than 4 in
                Desktop and Tablet and in position higher than 3 in mobile
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwitterIcon from "~/components/commons/Icons/Twitter";
import FacebookIcon from "~/components/commons/Icons/Facebook";
import InstagramIcon from "~/components/commons/Icons/Instagram";
import { mapState } from "vuex";

export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    InstagramIcon
  },
  props: ["promotion"],
  data() {
    return {};
  }
};
</script>

<style>
</style>