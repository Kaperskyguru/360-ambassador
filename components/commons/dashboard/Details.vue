<template>
  <b-card no-body class="col-12 mt-4 b-0 p-0 ml-0" id="detail">
    <b-tabs class="p-0 m-0 b-0">
      <b-tab active class="my-promotion__nav--item p-0" title="More Info">
        <div class="col-12 p-0 mt-3">
          <div class="row">
            <div class="col-md-6 col-12 mr-md-5">
              <div class="col-12 p-0 mb-2">
                <div class="row">
                  <div class="text col-4 text-bold color-blue">
                    Name:
                  </div>
                  <div class="text col-8 color-blue">
                    {{ promotion.name || "" }}
                  </div>
                </div>
              </div>
              <div class="col-12 p-0 mb-2">
                <div class="row">
                  <div class="text col-4 text-bold color-blue">
                    Contact:
                  </div>
                  <div class="text col-8 color-blue">
                    {{ promotion.user ? promotion.user.username : "" }}
                  </div>
                </div>
              </div>
              <div class="col-12 p-0 mb-2">
                <div class="row">
                  <div class="text col-4 text-bold color-blue">
                    Email:
                  </div>
                  <div class="text col-8 color-blue">
                    {{ promotion.user ? promotion.user.email : "" }}
                  </div>
                </div>
              </div>
              <div class="col-12 p-0 mb-2">
                <div class="row">
                  <div class="text col-4 text-bold color-blue">
                    Country:
                  </div>
                  <div class="text col-8 color-blue">
                    {{ promotion.user ? promotion.user.state : "" }}
                  </div>
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
                <twitter-icon color="#0e163d" width="10" height="10" />
                {{ promotion.twitter || "" }}
              </div>
              <div class="col-12 color-blue">
                <facebook-icon color="#0e163d" width="10" height="10" />
                {{ promotion.facebook || "" }}
              </div>
              <div class="col-12 color-blue">
                <instagram-icon color="#0e163d" width="10" height="10" />
                {{ promotion.instagram || "" }}
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
                    {{ promotion.category ? promotion.category.name : "" }}
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
                    {{ promotion.description || "" }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab class="my-promotion__nav--item p-0" title="Promotion Terms">
        <div class="col-12 p-0 mt-3">
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
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
import TwitterIcon from "~/components/commons/Icons/Twitter";
import FacebookIcon from "~/components/commons/Icons/Facebook";
import InstagramIcon from "~/components/commons/Icons/Instagram";

export default {
  props: ["promotion"],
  components: {
    TwitterIcon,
    FacebookIcon,
    InstagramIcon
  }
};
</script>

<style>
#detail .nav-tabs {
  font-family: "Montserrat-Bold";
  font-size: 1rem;
  border: 0;
}
#detail .nav-tabs .nav-link {
  color: #6d6d6d;
  border: none;
  outline: none !important;
  text-transform: uppercase;
}
#detail .nav-tabs .nav-link:hover,
#detail .nav-tabs .nav-link:focus,
#detail .nav-tabs .nav-link:active {
  outline: none !important;
  border: none;
  color: #0e163d !important;
}
</style>