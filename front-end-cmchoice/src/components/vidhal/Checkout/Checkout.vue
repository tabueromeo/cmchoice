<template>
    <div class="container-section">
        <!-- CART SECTION-->
        <section class="cart-section pt-pb-5 bg-light">
            <div class="cart-section-container">
                <div class="cart-title">
                  <h1 class="h1">Checkout</h1>
                </div>
                <div class="cart-liste">
                    <ul>
                      <li class="text-dark p-r-5">Home</li>
                      <li> / Cart </li>
                      <li class="active">  / Checkout</li>
                    </ul>
                </div>
            </div>
         </section>
          <!-- SHOPPING CART SECTION-->
          <div class="shopping-cart-title">
              <h1 class="h2 mb-4 l-s">Billing details</h1>
          </div>
          <!-- FORM-->
          <section class="py-5">
            <!-- BILLING ADDRESS-->
            <div class="billing-adress flex">
              <div class="flex-1">
                <form action="#">
                  <div class="">
                    <!-- BILLING ADDRESS1-->
                  <div class="billing-1 flex gap-10">
                    <div class="infos">
                      <label class="form-label text-sm text-uppercase" for="phone">Phone number </label>
                      <input class="form-control form-control-lg" type="tel" id="phone" placeholder="e.g. +237 245354745">
                    </div>
                    <div class="infos">
                      <label class="form-label text-sm text-uppercase" for="country">Country</label>
                      <select style="height: 45.2px;"  class="select-style country" id="country" data-customclass="form-control form-control-lg rounded-0">
                        <option value=""></option>
                      </select>
                    </div>
                  </div>
                  <!-- BILLING ADDRESS2-->

                    <!-- BILLING ADDRESS3-->
                  <div class="billing-3 flex gap-10">
                    <div class="infos">
                      <label class="form-label text-sm text-uppercase" for="city">Town/City </label>
                      <input class="form-control form-control-lg" type="text" id="city">
                    </div>
                    <div class="infos">
                      <label class="form-label text-sm text-uppercase" for="state">neighborhood/district</label>
                      <input class="form-control form-control-lg" type="text" id="state">
                    </div>
                  </div>
                  <!-- BILLING CHECK-->
                  <div class="billing-check">
                    <div class="infos form-group">
                         <RouterLink to="/Cart/Checkout/Delivery">
                            <button class="btn btn-dark" type="submit">Place order</button>
                         </RouterLink>
                    </div>
                    </div>
                  </div>  
                </form>
              </div>
              <!-- ORDER SUMMARY-->
              <div class="order-summary">
                <div class="card border-0 rounded-0 p-lg-4 bg-light">
                  <div class="card-body">
                    <h5 class="h5 text-uppercase mb-4">Your order</h5>
                    <ul class="list-unstyled mb-0">
                      <div v-for="element in cart" :key="element.id" class="group">
                        <li class="d-flex align-items-center justify-content-between"><strong class="small fw-bold">{{element.product.name}}</strong><span class="text-muted small">{{element.product.price}} FCFA</span></li>
                        <li class="border-bottom my-2"></li>
                      </div>
                      <!-- <li class="d-flex align-items-center justify-content-between"><strong class="small fw-bold">Gray Nike running shoes</strong><span class="text-muted small">$351</span></li>
                      <li class="border-bottom my-2"></li> -->
                      <li class="d-flex align-items-center justify-content-between"><strong class="text-uppercase small fw-bold">Total</strong><span>{{cartTotalPrice}} FCFA</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </div>
</template>

<script>
import {mapState,mapGetters} from "vuex";

export default {
  computed: {
     ...mapState({
       cart : state => state.cartMod.cart
     }),
     ...mapGetters({
       cartTotalPrice:'cartMod/cartTotalPrice'
       }),
  },
 
  methods: {
      ChooseCountry() {
        var response =  [

    {
        name: "Afghanistan",
        dial_code: "+93",
        code: "AF"
    },
    {
        name: "Aland Islands",
        dial_code: "+358",
        code: "AX"
    },
    {
        name: "Albania",
        dial_code: "+355",
        code: "AL"
    },
    {
        name: "Algeria",
        dial_code: "+213",
        code: "DZ"
    },
    {
        name: "AmericanSamoa",
        dial_code: "+1684",
        code: "AS"
    },
    {
        name: "Andorra",
        dial_code: "+376",
        code: "AD"
    },
    {
        name: "Angola",
        dial_code: "+244",
        code: "AO"
    },
    {
        name: "Anguilla",
        dial_code: "+1264",
        code: "AI"
    },
    {
        name: "Antarctica",
        dial_code: "+672",
        code: "AQ"
    },
    {
        name: "Antigua and Barbuda",
        dial_code: "+1268",
        code: "AG"
    },
    {
        name: "Argentina",
        dial_code: "+54",
        code: "AR"
    },
    {
        name: "Armenia",
        dial_code: "+374",
        code: "AM"
    },
    {
        name: "Aruba",
        dial_code: "+297",
        code: "AW"
    },
    {
        name: "Australia",
        dial_code: "+61",
        code: "AU"
    },
    {
        name: "Austria",
        dial_code: "+43",
        code: "AT"
    },
    {
        name: "Azerbaijan",
        dial_code: "+994",
        code: "AZ"
    },
    {
        name: "Bahamas",
        dial_code: "+1242",
        code: "BS"
    },
    {
        name: "Bahrain",
        dial_code: "+973",
        code: "BH"
    },
    {
        name: "Bangladesh",
        dial_code: "+880",
        code: "BD"
    },
    {
        name: "Barbados",
        dial_code: "+1246",
        code: "BB"
    },
    {
        name: "Belarus",
        dial_code: "+375",
        code: "BY"
    },
    {
        name: "Belgium",
        dial_code: "+32",
        code: "BE"
    },
    {
        name: "Belize",
        dial_code: "+501",
        code: "BZ"
    },
    {
        name: "Benin",
        dial_code: "+229",
        code: "BJ"
    },
    {
        name: "Bermuda",
        dial_code: "+1441",
        code: "BM"
    },
    {
        name: "Bhutan",
        dial_code: "+975",
        code: "BT"
    },
    {
        name: "Bolivia, Plurinational State of",
        dial_code: "+591",
        code: "BO"
    },
    {
        name: "Bosnia and Herzegovina",
        dial_code: "+387",
        code: "BA"
    },
    {
        name: "Botswana",
        dial_code: "+267",
        code: "BW"
    },
    {
        name: "Brazil",
        dial_code: "+55",
        code: "BR"
    },
    {
        name: "British Indian Ocean Territory",
        dial_code: "+246",
        code: "IO"
    },
    {
        name: "Brunei Darussalam",
        dial_code: "+673",
        code: "BN"
    },
    {
        name: "Bulgaria",
        dial_code: "+359",
        code: "BG"
    },
    {
        name: "Burkina Faso",
        dial_code: "+226",
        code: "BF"
    },
    {
        name: "Burundi",
        dial_code: "+257",
        code: "BI"
    },
    {
        name: "Cambodia",
        dial_code: "+855",
        code: "KH"
    },
    {
        name: "Cameroon",
        dial_code: "+237",
        code: "CM"
    },
    {
        name: "Canada",
        dial_code: "+1",
        code: "CA"
    },
    {
        name: "Cape Verde",
        dial_code: "+238",
        code: "CV"
    },
    {
        name: "Cayman Islands",
        dial_code: "+ 345",
        code: "KY"
    },
    {
        name: "Central African Republic",
        dial_code: "+236",
        code: "CF"
    },
    {
        name: "Chad",
        dial_code: "+235",
        code: "TD"
    },
    {
        name: "Chile",
        dial_code: "+56",
        code: "CL"
    },
    {
        name: "China",
        dial_code: "+86",
        code: "CN"
    },
    {
        name: "Christmas Island",
        dial_code: "+61",
        code: "CX"
    },
    {
        name: "Cocos (Keeling) Islands",
        dial_code: "+61",
        code: "CC"
    },
    {
        name: "Colombia",
        dial_code: "+57",
        code: "CO"
    },
    {
        name: "Comoros",
        dial_code: "+269",
        code: "KM"
    },
    {
        name: "Congo",
        dial_code: "+242",
        code: "CG"
    },
    {
        name: "Congo, The Democratic Republic of the Congo",
        dial_code: "+243",
        code: "CD"
    },
    {
        name: "Cook Islands",
        dial_code: "+682",
        code: "CK"
    },
    {
        name: "Costa Rica",
        dial_code: "+506",
        code: "CR"
    },
    {
        name: "Cote d'Ivoire",
        dial_code: "+225",
        code: "CI"
    },
    {
        name: "Croatia",
        dial_code: "+385",
        code: "HR"
    },
    {
        name: "Cuba",
        dial_code: "+53",
        code: "CU"
    },
    {
        name: "Cyprus",
        dial_code: "+357",
        code: "CY"
    },
    {
        name: "Czech Republic",
        dial_code: "+420",
        code: "CZ"
    },
    {
        name: "Denmark",
        dial_code: "+45",
        code: "DK"
    },
    {
        name: "Djibouti",
        dial_code: "+253",
        code: "DJ"
    },
    {
        name: "Dominica",
        dial_code: "+1767",
        code: "DM"
    },
    {
        name: "Dominican Republic",
        dial_code: "+1849",
        code: "DO"
    },
    {
        name: "Ecuador",
        dial_code: "+593",
        code: "EC"
    },
    {
        name: "Egypt",
        dial_code: "+20",
        code: "EG"
    },
    {
        name: "El Salvador",
        dial_code: "+503",
        code: "SV"
    },
    {
        name: "Equatorial Guinea",
        dial_code: "+240",
        code: "GQ"
    },
    {
        name: "Eritrea",
        dial_code: "+291",
        code: "ER"
    },
    {
        name: "Estonia",
        dial_code: "+372",
        code: "EE"
    },
    {
        name: "Ethiopia",
        dial_code: "+251",
        code: "ET"
    },
    {
        name: "Falkland Islands (Malvinas)",
        dial_code: "+500",
        code: "FK"
    },
    {
        name: "Faroe Islands",
        dial_code: "+298",
        code: "FO"
    },
    {
        name: "Fiji",
        dial_code: "+679",
        code: "FJ"
    },
    {
        name: "Finland",
        dial_code: "+358",
        code: "FI"
    },
    {
        name: "France",
        dial_code: "+33",
        code: "FR"
    },
    {
        name: "French Guiana",
        dial_code: "+594",
        code: "GF"
    },
    {
        name: "French Polynesia",
        dial_code: "+689",
        code: "PF"
    },
    {
        name: "Gabon",
        dial_code: "+241",
        code: "GA"
    },
    {
        name: "Gambia",
        dial_code: "+220",
        code: "GM"
    },
    {
        name: "Georgia",
        dial_code: "+995",
        code: "GE"
    },
    {
        name: "Germany",
        dial_code: "+49",
        code: "DE"
    },
    {
        name: "Ghana",
        dial_code: "+233",
        code: "GH"
    },
    {
        name: "Gibraltar",
        dial_code: "+350",
        code: "GI"
    },
    {
        name: "Greece",
        dial_code: "+30",
        code: "GR"
    },
    {
        name: "Greenland",
        dial_code: "+299",
        code: "GL"
    },
    {
        name: "Grenada",
        dial_code: "+1473",
        code: "GD"
    },
    {
        name: "Guadeloupe",
        dial_code: "+590",
        code: "GP"
    },
    {
        name: "Guam",
        dial_code: "+1671",
        code: "GU"
    },
    {
        name: "Guatemala",
        dial_code: "+502",
        code: "GT"
    },
    {
        name: "Guernsey",
        dial_code: "+44",
        code: "GG"
    },
    {
        name: "Guinea",
        dial_code: "+224",
        code: "GN"
    },
    {
        name: "Guinea-Bissau",
        dial_code: "+245",
        code: "GW"
    },
    {
        name: "Guyana",
        dial_code: "+595",
        code: "GY"
    },
    {
        name: "Haiti",
        dial_code: "+509",
        code: "HT"
    },
    {
        name: "Holy See (Vatican City State)",
        dial_code: "+379",
        code: "VA"
    },
    {
        name: "Honduras",
        dial_code: "+504",
        code: "HN"
    },
    {
        name: "Hong Kong",
        dial_code: "+852",
        code: "HK"
    },
    {
        name: "Hungary",
        dial_code: "+36",
        code: "HU"
    },
    {
        name: "Iceland",
        dial_code: "+354",
        code: "IS"
    },
    {
        name: "India",
        dial_code: "+91",
        code: "IN"
    },
    {
        name: "Indonesia",
        dial_code: "+62",
        code: "ID"
    },
    {
        name: "Iran, Islamic Republic of Persian Gulf",
        dial_code: "+98",
        code: "IR"
    },
    {
        name: "Iraq",
        dial_code: "+964",
        code: "IQ"
    },
    {
        name: "Ireland",
        dial_code: "+353",
        code: "IE"
    },
    {
        name: "Isle of Man",
        dial_code: "+44",
        code: "IM"
    },
    {
        name: "Israel",
        dial_code: "+972",
        code: "IL"
    },
    {
        name: "Italy",
        dial_code: "+39",
        code: "IT"
    },
    {
        name: "Jamaica",
        dial_code: "+1876",
        code: "JM"
    },
    {
        name: "Japan",
        dial_code: "+81",
        code: "JP"
    },
    {
        name: "Jersey",
        dial_code: "+44",
        code: "JE"
    },
    {
        name: "Jordan",
        dial_code: "+962",
        code: "JO"
    },
    {
        name: "Kazakhstan",
        dial_code: "+77",
        code: "KZ"
    },
    {
        name: "Kenya",
        dial_code: "+254",
        code: "KE"
    },
    {
        name: "Kiribati",
        dial_code: "+686",
        code: "KI"
    },
    {
        name: "Korea, Democratic People's Republic of Korea",
        dial_code: "+850",
        code: "KP"
    },
    {
        name: "Korea, Republic of South Korea",
        dial_code: "+82",
        code: "KR"
    },
    {
        name: "Kuwait",
        dial_code: "+965",
        code: "KW"
    },
    {
        name: "Kyrgyzstan",
        dial_code: "+996",
        code: "KG"
    },
    {
        name: "Laos",
        dial_code: "+856",
        code: "LA"
    },
    {
        name: "Latvia",
        dial_code: "+371",
        code: "LV"
    },
    {
        name: "Lebanon",
        dial_code: "+961",
        code: "LB"
    },
    {
        name: "Lesotho",
        dial_code: "+266",
        code: "LS"
    },
    {
        name: "Liberia",
        dial_code: "+231",
        code: "LR"
    },
    {
        name: "Libyan Arab Jamahiriya",
        dial_code: "+218",
        code: "LY"
    },
    {
        name: "Liechtenstein",
        dial_code: "+423",
        code: "LI"
    },
    {
        name: "Lithuania",
        dial_code: "+370",
        code: "LT"
    },
    {
        name: "Luxembourg",
        dial_code: "+352",
        code: "LU"
    },
    {
        name: "Macao",
        dial_code: "+853",
        code: "MO"
    },
    {
        name: "Macedonia",
        dial_code: "+389",
        code: "MK"
    },
    {
        name: "Madagascar",
        dial_code: "+261",
        code: "MG"
    },
    {
        name: "Malawi",
        dial_code: "+265",
        code: "MW"
    },
    {
        name: "Malaysia",
        dial_code: "+60",
        code: "MY"
    },
    {
        name: "Maldives",
        dial_code: "+960",
        code: "MV"
    },
    {
        name: "Mali",
        dial_code: "+223",
        code: "ML"
    },
    {
        name: "Malta",
        dial_code: "+356",
        code: "MT"
    },
    {
        name: "Marshall Islands",
        dial_code: "+692",
        code: "MH"
    },
    {
        name: "Martinique",
        dial_code: "+596",
        code: "MQ"
    },
    {
        name: "Mauritania",
        dial_code: "+222",
        code: "MR"
    },
    {
        name: "Mauritius",
        dial_code: "+230",
        code: "MU"
    },
    {
        name: "Mayotte",
        dial_code: "+262",
        code: "YT"
    },
    {
        name: "Mexico",
        dial_code: "+52",
        code: "MX"
    },
    {
        name: "Micronesia, Federated States of Micronesia",
        dial_code: "+691",
        code: "FM"
    },
    {
        name: "Moldova",
        dial_code: "+373",
        code: "MD"
    },
    {
        name: "Monaco",
        dial_code: "+377",
        code: "MC"
    },
    {
        name: "Mongolia",
        dial_code: "+976",
        code: "MN"
    },
    {
        name: "Montenegro",
        dial_code: "+382",
        code: "ME"
    },
    {
        name: "Montserrat",
        dial_code: "+1664",
        code: "MS"
    },
    {
        name: "Morocco",
        dial_code: "+212",
        code: "MA"
    },
    {
        name: "Mozambique",
        dial_code: "+258",
        code: "MZ"
    },
    {
        name: "Myanmar",
        dial_code: "+95",
        code: "MM"
    },
    {
        name: "Namibia",
        dial_code: "+264",
        code: "NA"
    },
    {
        name: "Nauru",
        dial_code: "+674",
        code: "NR"
    },
    {
        name: "Nepal",
        dial_code: "+977",
        code: "NP"
    },
    {
        name: "Netherlands",
        dial_code: "+31",
        code: "NL"
    },
    {
        name: "Netherlands Antilles",
        dial_code: "+599",
        code: "AN"
    },
    {
        name: "New Caledonia",
        dial_code: "+687",
        code: "NC"
    },
    {
        name: "New Zealand",
        dial_code: "+64",
        code: "NZ"
    },
    {
        name: "Nicaragua",
        dial_code: "+505",
        code: "NI"
    },
    {
        name: "Niger",
        dial_code: "+227",
        code: "NE"
    },
    {
        name: "Nigeria",
        dial_code: "+234",
        code: "NG"
    },
    {
        name: "Niue",
        dial_code: "+683",
        code: "NU"
    },
    {
        name: "Norfolk Island",
        dial_code: "+672",
        code: "NF"
    },
    {
        name: "Northern Mariana Islands",
        dial_code: "+1670",
        code: "MP"
    },
    {
        name: "Norway",
        dial_code: "+47",
        code: "NO"
    },
    {
        name: "Oman",
        dial_code: "+968",
        code: "OM"
    },
    {
        name: "Pakistan",
        dial_code: "+92",
        code: "PK"
    },
    {
        name: "Palau",
        dial_code: "+680",
        code: "PW"
    },
    {
        name: "Palestinian Territory, Occupied",
        dial_code: "+970",
        code: "PS"
    },
    {
        name: "Panama",
        dial_code: "+507",
        code: "PA"
    },
    {
        name: "Papua New Guinea",
        dial_code: "+675",
        code: "PG"
    },
    {
        name: "Paraguay",
        dial_code: "+595",
        code: "PY"
    },
    {
        name: "Peru",
        dial_code: "+51",
        code: "PE"
    },
    {
        name: "Philippines",
        dial_code: "+63",
        code: "PH"
    },
    {
        name: "Pitcairn",
        dial_code: "+872",
        code: "PN"
    },
    {
        name: "Poland",
        dial_code: "+48",
        code: "PL"
    },
    {
        name: "Portugal",
        dial_code: "+351",
        code: "PT"
    },
    {
        name: "Puerto Rico",
        dial_code: "+1939",
        code: "PR"
    },
    {
        name: "Qatar",
        dial_code: "+974",
        code: "QA"
    },
    {
        name: "Romania",
        dial_code: "+40",
        code: "RO"
    },
    {
        name: "Russia",
        dial_code: "+7",
        code: "RU"
    },
    {
        name: "Rwanda",
        dial_code: "+250",
        code: "RW"
    },
    {
        name: "Reunion",
        dial_code: "+262",
        code: "RE"
    },
    {
        name: "Saint Barthelemy",
        dial_code: "+590",
        code: "BL"
    },
    {
        name: "Saint Helena, Ascension and Tristan Da Cunha",
        dial_code: "+290",
        code: "SH"
    },
    {
        name: "Saint Kitts and Nevis",
        dial_code: "+1869",
        code: "KN"
    },
    {
        name: "Saint Lucia",
        dial_code: "+1758",
        code: "LC"
    },
    {
        name: "Saint Martin",
        dial_code: "+590",
        code: "MF"
    },
    {
        name: "Saint Pierre and Miquelon",
        dial_code: "+508",
        code: "PM"
    },
    {
        name: "Saint Vincent and the Grenadines",
        dial_code: "+1784",
        code: "VC"
    },
    {
        name: "Samoa",
        dial_code: "+685",
        code: "WS"
    },
    {
        name: "San Marino",
        dial_code: "+378",
        code: "SM"
    },
    {
        name: "Sao Tome and Principe",
        dial_code: "+239",
        code: "ST"
    },
    {
        name: "Saudi Arabia",
        dial_code: "+966",
        code: "SA"
    },
    {
        name: "Senegal",
        dial_code: "+221",
        code: "SN"
    },
    {
        name: "Serbia",
        dial_code: "+381",
        code: "RS"
    },
    {
        name: "Seychelles",
        dial_code: "+248",
        code: "SC"
    },
    {
        name: "Sierra Leone",
        dial_code: "+232",
        code: "SL"
    },
    {
        name: "Singapore",
        dial_code: "+65",
        code: "SG"
    },
    {
        name: "Slovakia",
        dial_code: "+421",
        code: "SK"
    },
    {
        name: "Slovenia",
        dial_code: "+386",
        code: "SI"
    },
    {
        name: "Solomon Islands",
        dial_code: "+677",
        code: "SB"
    },
    {
        name: "Somalia",
        dial_code: "+252",
        code: "SO"
    },
    {
        name: "South Africa",
        dial_code: "+27",
        code: "ZA"
    },
    {
        name: "South Sudan",
        dial_code: "+211",
        code: "SS"
    },
    {
        name: "South Georgia and the South Sandwich Islands",
        dial_code: "+500",
        code: "GS"
    },
    {
        name: "Spain",
        dial_code: "+34",
        code: "ES"
    },
    {
        name: "Sri Lanka",
        dial_code: "+94",
        code: "LK"
    },
    {
        name: "Sudan",
        dial_code: "+249",
        code: "SD"
    },
    {
        name: "Suriname",
        dial_code: "+597",
        code: "SR"
    },
    {
        name: "Svalbard and Jan Mayen",
        dial_code: "+47",
        code: "SJ"
    },
    {
        name: "Swaziland",
        dial_code: "+268",
        code: "SZ"
    },
    {
        name: "Sweden",
        dial_code: "+46",
        code: "SE"
    },
    {
        name: "Switzerland",
        dial_code: "+41",
        code: "CH"
    },
    {
        name: "Syrian Arab Republic",
        dial_code: "+963",
        code: "SY"
    },
    {
        name: "Taiwan",
        dial_code: "+886",
        code: "TW"
    },
    {
        name: "Tajikistan",
        dial_code: "+992",
        code: "TJ"
    },
    {
        name: "Tanzania, United Republic of Tanzania",
        dial_code: "+255",
        code: "TZ"
    },
    {
        name: "Thailand",
        dial_code: "+66",
        code: "TH"
    },
    {
        name: "Timor-Leste",
        dial_code: "+670",
        code: "TL"
    },
    {
        name: "Togo",
        dial_code: "+228",
        code: "TG"
    },
    {
        name: "Tokelau",
        dial_code: "+690",
        code: "TK"
    },
    {
        name: "Tonga",
        dial_code: "+676",
        code: "TO"
    },
    {
        name: "Trinidad and Tobago",
        dial_code: "+1868",
        code: "TT"
    },
    {
        name: "Tunisia",
        dial_code: "+216",
        code: "TN"
    },
    {
        name: "Turkey",
        dial_code: "+90",
        code: "TR"
    },
    {
        name: "Turkmenistan",
        dial_code: "+993",
        code: "TM"
    },
    {
        name: "Turks and Caicos Islands",
        dial_code: "+1649",
        code: "TC"
    },
    {
        name: "Tuvalu",
        dial_code: "+688",
        code: "TV"
    },
    {
        name: "Uganda",
        dial_code: "+256",
        code: "UG"
    },
    {
        name: "Ukraine",
        dial_code: "+380",
        code: "UA"
    },
    {
        name: "United Arab Emirates",
        dial_code: "+971",
        code: "AE"
    },
    {
        name: "United Kingdom",
        dial_code: "+44",
        code: "GB"
    },
    {
        name: "United States",
        dial_code: "+1",
        code: "US"
    },
    {
        name: "Uruguay",
        dial_code: "+598",
        code: "UY"
    },
    {
        name: "Uzbekistan",
        dial_code: "+998",
        code: "UZ"
    },
    {
        name: "Vanuatu",
        dial_code: "+678",
        code: "VU"
    },
    {
        name: "Venezuela, Bolivarian Republic of Venezuela",
        dial_code: "+58",
        code: "VE"
    },
    {
        name: "Vietnam",
        dial_code: "+84",
        code: "VN"
    },
    {
        name: "Virgin Islands, British",
        dial_code: "+1284",
        code: "VG"
    },
    {
        name: "Virgin Islands, U.S.",
        dial_code: "+1340",
        code: "VI"
    },
    {
        name: "Wallis and Futuna",
        dial_code: "+681",
        code: "WF"
    },
    {
        name: "Yemen",
        dial_code: "+967",
        code: "YE"
    },
    {
        name: "Zambia",
        dial_code: "+260",
        code: "ZM"
    },
    {
        name: "Zimbabwe",
        dial_code: "+263",
        code: "ZW"
    }
        ]
          
        var selectOption = '';
		response.forEach((country) => {
			selectOption += "<option value='" + country.name + "' data-dial-code='" + country.dial_code + "'>" + country.name + '</option>';
		});
		document.querySelectorAll('select.country').forEach((el) => {
			el.insertAdjacentHTML('beforeend', selectOption);
		  });
      } ,
        
   },
   
  mounted() {
    this.ChooseCountry();
  },
} 

</script>

<style scoped>

:root {

  /* COLOR */
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-light: #f8f9fa;
  --bs-dark: #000;
  --bs-primary-rgb: 220, 177, 74;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 40, 167, 69;
  --bs-info-rgb: 23, 162, 184;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 0, 0, 0;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg-rgb: 255, 255, 255;
  /* FONTS */
  --bs-font-sans-serif: "Libre Franklin", sans-serif;
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  /* OTHERS */
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
}

/* DEFAULT STYLE */
body {
  margin: 0;
  padding: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
 /*margin-bottom: .5rem; */
  margin: 25px 0;
  font-weight: bold;
  line-height: 1.2;
  color: var(--bs-heading-color,inherit);
}

.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

/* PADDING, MARGING */
.py-5,
.pt-pb-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}

.p-r-5 {
  padding-right: 5px;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}

.p-3 {
  padding: 1rem !important;
}

.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.py-3 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}

.px-4 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
}

.p-lg-4 {
  padding: 1.5rem !important;
}

.p-0 {
  padding: 0 !important;
}

.shadow-0 {
  box-shadow: none !important;
}

.border-0 {
  border: 0 !important;
}

/*OTHERS*/
/*BORDER*/
.border {
  border: 1px solid #dee2e6 !important;
}

.border-bottom {
  border-bottom: 1px solid #dee2e6 !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.border-0 {
  border: 0 !important;
}

.border-light {
  border-color: #f8f9fa !important;
}

.align-middle {
  vertical-align: middle !important;
}

.l-s {
  letter-spacing: 0.1em;
}

ul li {
  list-style-type: none;
  font-size: 0.85rem;
  text-align: right;
}

button,
i {
  cursor: pointer;
}

/*TITLE*/
.h1 {
  font-size: 1.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.h2 {
  font-size: 1.15rem;
}

.h5 {
  font-size: 1.15rem;
}

/*TEXT*/
.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}

.text-center {
  text-align: center;
}

.text-uppercase {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.text-gray {
  color: #aaa !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}

.active {
  color: #adb5bd;
}

small,
.small {
  font-size: 0.875em;
}

.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-.5 * var(--bs-gutter-x));
  margin-left: calc(-.5 * var(--bs-gutter-x));
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.font-size-22{
  font-size: 22px;
}

.w-100 {
  width: 100% !important;
}

/*BUTTON*/

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
-webkit-appearance: button;
}

button,
select {
  text-transform: none;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button {
  border-radius: 0;
}

.btn-sm,
.btn-group-sm>.btn {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.btn-dark {
  color: #fff;
  background-color: #000;
  border-color: #000;
}

.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0;
}

/*INPUT*/
.quantity input {
  width: 2rem;
  text-align: center;
}

/*FORM*/
.form-control-sm {
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
}

/*FLEX*/
.flex {
  display: flex;
}

.flex-d-r{
  flex-direction: row;
}

.flex-d-c{
  flex-direction: column;
}

.flex-1 {
  flex: 1;
}

.flex-2 {
  flex: 2;
}

.flex-3 {
  flex: 3;
}

.flex-4 {
  flex: 4;
}
.flex-04 {
  flex: 0.4;
}

.gap-5{
  gap: 5px;
}
.gap-10{
  gap: 10px;
}
.gap-15{
  gap: 15px;
}
.gap-20{
  gap: 20px;
}

.jcc {
  justify-content: center;
}

.jcsb {
  justify-content: space-between;
}

.aic {
  align-items: center;
}

.text-sm {
  font-size: 0.85rem !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

/* CONTAINER-SECTION */
.container-section {
  margin: 0 auto;
  max-width: 1140px;
  padding: 20px 0;
}

.cart-section,
.shopping-cart-title,
.shopping-cart-table thead,
.card-body_cl-2 {
  text-transform: uppercase;
}

/* CART SECTION */
.cart-section-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 3rem;
  padding-right: 3rem;
}

.cart-title {
  flex: 1;
}

.cart-liste {
  flex: 1;
}

.cart-liste ul {
  flex: 1;
  display: flex;
  justify-content: right;
  font-weight: bold;
}

/* SHOPPING CART SECTION */
.table {
  --bs-table-bg: transparent;
  --bs-table-accent-bg: transparent;
  --bs-table-striped-color: #212529;
  --bs-table-striped-bg: rgba(0, 0, 0, 0.05);
  --bs-table-active-color: #212529;
  --bs-table-active-bg: rgba(0, 0, 0, 0.1);
  --bs-table-hover-color: #212529;
  --bs-table-hover-bg: rgba(0, 0, 0, 0.075);
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  vertical-align: top;
  border-color: #dee2e6;
  border-collapse: collapse;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

th {
  text-align: inherit;
  font-size: 0.85rem !important;
  padding: 1rem;
}

tbody th {
  padding-left: 0 !important;
}

/* product1,2 */
.product-image {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-name {
  font-size: 1rem;
}

td p {
  font-size: 0.85rem;
}

.quantity {
  display: flex;
  align-items: center;
}

.quantity button {
  background: none;
  border: none;
  width: 1rem;
  outline: none;
}

/* SHOPPING CART NAVIGATION */
.shopping-cart-navigation{
    justify-content: space-between;
    display: flex;
  }
.ContinueShop {
  text-align: left !important;
  margin-bottom: 0 !important;
  font-size: 0.875rem;
  text-decoration: underline;
  cursor: pointer;
  flex: 3;
}
a[href="/Cart/Checkout"] {
  flex: 1;
  display: flex;
  flex-wrap: nowrap;
}
.proceed {
  min-width: 173px;
  text-align: right !important;
  font-size: 0.875rem;
  border: 1px solid black;
  padding: 5px;
}

.proceed:hover {
  cursor: pointer;
  background-color: #000;
  color: white;
}

/*CART TOTAL*/
.card-total {
  margin: 0 0 0 10px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}

strong {
  font-weight: 700;
}

.apply {
  border: none;
  padding: 9px;
  background-color: black;
  color: white;
}

.out-none {
  outline: none;
}
a[href="/Cart/Checkout"]{
   color: black;
    text-decoration: none;
}


   /*CHECKOUT*/
.billing-adress input{
  box-sizing: border-box;
  outline: none;
}
.infos{
  margin-top: 15px;
  width: 40%;
}
/* BILLING CHECK */
.form-check-label {
  font-size: 0.85rem;
}
label {
  display: inline-block;
}
.btn-dark {
  color: #fff;
  background-color: black;
  border-color: black;
}
/* ORDER SUMMARY */
.order-summary{
  width: 30%;
}
.card-body ul{
  padding-left: 0;
}
.card-body ul li{
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.select-style{
  display: block;
width: 100%;
padding: 0.375rem 0.75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: 0;
}

.h5, h5 {
  font-size: 1.25rem;
}

@media screen and (max-width: 1256px) {
  .shopping-cart-section{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
 .shopping-cart-table{
    overflow-x: auto;
  }
  .card-total{
    margin: 0;
  }
  .container-section {
    margin: 0 100px;
  }
  /*CHECKOUT*/
  .billing-adress {
    flex-direction: column;
    gap: 20px;
  }
  .order-summary {
    width: auto;
  }
  .infos{
    margin-top: 15px;
    width: 100%;
  }
  .container-section {
    margin: 0 30px;
  }
}


@media screen and (max-width: 640px) {
  .container-section {
    margin: 0 20px;
  }
  .billing-1, .billing-3{
     flex-direction: column;
  }
  .infos label{
    margin-bottom: 15px;
  }
  .cart-section-container{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cart-section-container .cart-liste ul{
    padding: 0;
  }
  .shopping-cart-navigation{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>