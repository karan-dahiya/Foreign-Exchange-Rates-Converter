// const countryList = {
//   AED: "AE",
//   AFN: "AF",
//   XCD: "AG",
//   ALL: "AL",
//   AMD: "AM",
//   ANG: "AN",
//   AOA: "AO",
//   AQD: "AQ",
//   ARS: "AR",
//   AUD: "AU",
//   AZN: "AZ",
//   BAM: "BA",
//   BBD: "BB",
//   BDT: "BD",
//   XOF: "BE",
//   BGN: "BG",
//   BHD: "BH",
//   BIF: "BI",
//   BMD: "BM",
//   BND: "BN",
//   BOB: "BO",
//   BRL: "BR",
//   BSD: "BS",
//   NOK: "BV",
//   BWP: "BW",
//   BYR: "BY",
//   BZD: "BZ",
//   CAD: "CA",
//   CDF: "CD",
//   XAF: "CF",
//   CHF: "CH",
//   CLP: "CL",
//   CNY: "CN",
//   COP: "CO",
//   CRC: "CR",
//   CUP: "CU",
//   CVE: "CV",
//   CYP: "CY",
//   CZK: "CZ",
//   DJF: "DJ",
//   DKK: "DK",
//   DOP: "DO",
//   DZD: "DZ",
//   ECS: "EC",
//   EEK: "EE",
//   EGP: "EG",
//   ETB: "ET",
//   EUR: "FR",
//   FJD: "FJ",
//   FKP: "FK",
//   GBP: "GB",
//   GEL: "GE",
//   GGP: "GG",
//   GHS: "GH",
//   GIP: "GI",
//   GMD: "GM",
//   GNF: "GN",
//   GTQ: "GT",
//   GYD: "GY",
//   HKD: "HK",
//   HNL: "HN",
//   HRK: "HR",
//   HTG: "HT",
//   HUF: "HU",
//   IDR: "ID",
//   ILS: "IL",
//   INR: "IN",
//   IQD: "IQ",
//   IRR: "IR",
//   ISK: "IS",
//   JMD: "JM",
//   JOD: "JO",
//   JPY: "JP",
//   KES: "KE",
//   KGS: "KG",
//   KHR: "KH",
//   KMF: "KM",
//   KPW: "KP",
//   KRW: "KR",
//   KWD: "KW",
//   KYD: "KY",
//   KZT: "KZ",
//   LAK: "LA",
//   LBP: "LB",
//   LKR: "LK",
//   LRD: "LR",
//   LSL: "LS",
//   LTL: "LT",
//   LVL: "LV",
//   LYD: "LY",
//   MAD: "MA",
//   MDL: "MD",
//   MGA: "MG",
//   MKD: "MK",
//   MMK: "MM",
//   MNT: "MN",
//   MOP: "MO",
//   MRO: "MR",
//   MTL: "MT",
//   MUR: "MU",
//   MVR: "MV",
//   MWK: "MW",
//   MXN: "MX",
//   MYR: "MY",
//   MZN: "MZ",
//   NAD: "NA",
//   XPF: "NC",
//   NGN: "NG",
//   NIO: "NI",
//   NPR: "NP",
//   NZD: "NZ",
//   OMR: "OM",
//   PAB: "PA",
//   PEN: "PE",
//   PGK: "PG",
//   PHP: "PH",
//   PKR: "PK",
//   PLN: "PL",
//   PYG: "PY",
//   QAR: "QA",
//   RON: "RO",
//   RSD: "RS",
//   RUB: "RU",
//   RWF: "RW",
//   SAR: "SA",
//   SBD: "SB",
//   SCR: "SC",
//   SDG: "SD",
//   SEK: "SE",
//   SGD: "SG",
//   SKK: "SK",
//   SLL: "SL",
//   SOS: "SO",
//   SRD: "SR",
//   STD: "ST",
//   SVC: "SV",
//   SYP: "SY",
//   SZL: "SZ",
//   THB: "TH",
//   TJS: "TJ",
//   TMT: "TM",
//   TND: "TN",
//   TOP: "TO",
//   TRY: "TR",
//   TTD: "TT",
//   TWD: "TW",
//   TZS: "TZ",
//   UAH: "UA",
//   UGX: "UG",
//   USD: "US",
//   UYU: "UY",
//   UZS: "UZ",
//   VEF: "VE",
//   VND: "VN",
//   VUV: "VU",
//   YER: "YE",
//   ZAR: "ZA",
//   ZMK: "ZM",
//   ZWD: "ZW",
// };
// const countryList = {
//   AED: { code: "AE", name: "UAE Dirham" },
//   AFN: { code: "AF", name: "Afghan Afghani" },
//   XCD: { code: "AG", name: "East Caribbean Dollar" },
//   ALL: { code: "AL", name: "Albanian Lek" },
//   AMD: { code: "AM", name: "Armenian Dram" },
//   ANG: { code: "AN", name: "Netherlands Guilder" },
//   AOA: { code: "AO", name: "Angolan Kwanza" },
//   AQD: { code: "AQ", name: "Antarctican Dollar" },
//   ARS: { code: "AR", name: "Argentine Peso" },
//   AUD: { code: "AU", name: "Australian Dollar" },
//   AZN: { code: "AZ", name: "Azerbaijani Manat" },
//   BAM: { code: "BA", name: "Bosnia-Herzegovina Mark" },
//   BBD: { code: "BB", name: "Barbadian Dollar" },
//   BDT: { code: "BD", name: "Bangladeshi Taka" },
//   XOF: { code: "BE", name: "West African CFA Franc" },
//   BGN: { code: "BG", name: "Bulgarian Lev" },
//   BHD: { code: "BH", name: "Bahraini Dinar" },
//   BIF: { code: "BI", name: "Burundian Franc" },
//   BMD: { code: "BM", name: "Bermudian Dollar" },
//   BND: { code: "BN", name: "Brunei Dollar" },
//   BOB: { code: "BO", name: "Bolivian Boliviano" },
//   BRL: { code: "BR", name: "Brazilian Real" },
//   BSD: { code: "BS", name: "Bahamian Dollar" },
//   BWP: { code: "BW", name: "Botswana Pula" },
//   BYR: { code: "BY", name: "Belarusian Ruble" },
//   BZD: { code: "BZ", name: "Belize Dollar" },
//   CAD: { code: "CA", name: "Canadian Dollar" },
//   CDF: { code: "CD", name: "Congolese Franc" },
//   XAF: { code: "CF", name: "Central African CFA Franc" },
//   CHF: { code: "CH", name: "Swiss Franc" },
//   CLP: { code: "CL", name: "Chilean Peso" },
//   CNY: { code: "CN", name: "Chinese Yuan" },
//   COP: { code: "CO", name: "Colombian Peso" },
//   CRC: { code: "CR", name: "Costa Rican Colón" },
//   CUP: { code: "CU", name: "Cuban Peso" },
//   CVE: { code: "CV", name: "Cape Verdean Escudo" },
//   CYP: { code: "CY", name: "Cypriot Pound" },
//   CZK: { code: "CZ", name: "Czech Republic Koruna" },
//   DJF: { code: "DJ", name: "Djiboutian Franc" },
//   DKK: { code: "DK", name: "Danish Krone" },
//   DOP: { code: "DO", name: "Dominican Peso" },
//   DZD: { code: "DZ", name: "Algerian Dinar" },
//   ECS: { code: "EC", name: "Ecuadorian Sucre" },
//   EEK: { code: "EE", name: "Estonian Kroon" },
//   EGP: { code: "EG", name: "Egyptian Pound" },
//   ETB: { code: "ET", name: "Ethiopian Birr" },
//   EUR: { code: "FR", name: "Euro" },
//   FJD: { code: "FJ", name: "Fijian Dollar" },
//   FKP: { code: "FK", name: "Falkland Islands Pound" },
//   GBP: { code: "GB", name: "British Pound Sterling" },
//   GEL: { code: "GE", name: "Georgian Lari" },
//   GGP: { code: "GG", name: "Guernsey Pound" },
//   GHS: { code: "GH", name: "Ghanaian Cedi" },
//   GIP: { code: "GI", name: "Gibraltar Pound" },
//   GMD: { code: "GM", name: "Gambian Dalasi" },
//   GNF: { code: "GN", name: "Guinean Franc" },
//   GTQ: { code: "GT", name: "Guatemalan Quetzal" },
//   GYD: { code: "GY", name: "Guyanaese Dollar" },
//   HKD: { code: "HK", name: "Hong Kong Dollar" },
//   HNL: { code: "HN", name: "Honduran Lempira" },
//   HRK: { code: "HR", name: "Croatian Kuna" },
//   HTG: { code: "HT", name: "Haitian Gourde" },
//   HUF: { code: "HU", name: "Hungarian Forint" },
//   IDR: { code: "ID", name: "Indonesian Rupiah" },
//   ILS: { code: "IL", name: "Israeli New Sheqel" },
//   INR: { code: "IN", name: "Indian Rupee" },
//   IQD: { code: "IQ", name: "Iraqi Dinar" },
//   IRR: { code: "IR", name: "Iranian Rial" },
//   ISK: { code: "IS", name: "Icelandic Króna" },
//   JMD: { code: "JM", name: "Jamaican Dollar" },
//   JOD: { code: "JO", name: "Jordanian Dinar" },
//   JPY: { code: "JP", name: "Japanese Yen" },
//   KES: { code: "KE", name: "Kenyan Shilling" },
//   KGS: { code: "KG", name: "Kyrgystani Som" },
//   KHR: { code: "KH", name: "Cambodian Riel" },
//   KMF: { code: "KM", name: "Comorian Franc" },
//   KPW: { code: "KP", name: "North Korean Won" },
//   KRW: { code: "KR", name: "South Korean Won" },
//   KWD: { code: "KW", name: "Kuwaiti Dinar" },
//   KYD: { code: "KY", name: "Cayman Islands Dollar" },
//   KZT: { code: "KZ", name: "Kazakhstani Tenge" },
//   LAK: { code: "LA", name: "Laotian Kip" },
//   LBP: { code: "LB", name: "Lebanese Pound" },
//   LKR: { code: "LK", name: "Sri Lankan Rupee" },
//   LRD: { code: "LR", name: "Liberian Dollar" },
//   LSL: { code: "LS", name: "Lesotho Loti" },
//   LTL: { code: "LT", name: "Lithuanian Litas" },
//   LVL: { code: "LV", name: "Latvian Lats" },
//   LYD: { code: "LY", name: "Libyan Dinar" },
//   MAD: { code: "MA", name: "Moroccan Dirham" },
//   MDL: { code: "MD", name: "Moldovan Leu" },
//   MGA: { code: "MG", name: "Malagasy Ariary" },
//   MKD: { code: "MK", name: "Macedonian Denar" },
//   MMK: { code: "MM", name: "Myanma Kyat" },
//   MNT: { code: "MN", name: "Mongolian Tugrik" },
//   MOP: { code: "MO", name: "Macanese Pataca" },
//   MRO: { code: "MR", name: "Mauritanian Ouguiya" },
//   MTL: { code: "MT", name: "Maltese Lira" },
//   MUR: { code: "MU", name: "Mauritian Rupee" },
//   MVR: { code: "MV", name: "Maldivian Rufiyaa" },
//   MWK: { code: "MW", name: "Malawian Kwacha" },
//   MXN: { code: "MX", name: "Mexican Peso" },
//   MYR: { code: "MY", name: "Malaysian Ringgit" },
//   MZN: { code: "MZ", name: "Mozambican Metical" },
//   NAD: { code: "NA", name: "Namibian Dollar" },
//   XPF: { code: "NC", name: "CFP Franc" },
//   NGN: { code: "NG", name: "Nigerian Naira" },
//   NIO: { code: "NI", name: "Nicaraguan Córdoba" },
//   NPR: { code: "NP", name: "Nepalese Rupee" },
//   NZD: { code: "NZ", name: "New Zealand Dollar" },
//   OMR: { code: "OM", name: "Omani Rial" },
//   PAB: { code: "PA", name: "Panamanian Balboa" },
//   PEN: { code: "PE", name: "Peruvian Nuevo Sol" },
//   PGK: { code: "PG", name: "Papua New Guinean Kina" },
//   PHP: { code: "PH", name: "Philippine Peso" },
//   PKR: { code: "PK", name: "Pakistani Rupee" },
//   PLN: { code: "PL", name: "Polish Zloty" },
//   PYG: { code: "PY", name: "Paraguayan Guarani" },
//   QAR: { code: "QA", name: "Qatari Rial" },
//   RON: { code: "RO", name: "Romanian Leu" },
//   RSD: { code: "RS", name: "Serbian Dinar" },
//   RUB: { code: "RU", name: "Russian Ruble" },
//   RWF: { code: "RW", name: "Rwandan Franc" },
//   SAR: { code: "SA", name: "Saudi Riyal" },
//   SBD: { code: "SB", name: "Solomon Islands Dollar" },
//   SCR: { code: "SC", name: "Seychellois Rupee" },
//   SDG: { code: "SD", name: "Sudanese Pound" },
//   SEK: { code: "SE", name: "Swedish Krona" },
//   SGD: { code: "SG", name: "Singapore Dollar" },
//   SKK: { code: "SK", name: "Slovak Koruna" },
//   SLL: { code: "SL", name: "Sierra Leonean Leone" },
//   SOS: { code: "SO", name: "Somali Shilling" },
//   SRD: { code: "SR", name: "Surinamese Dollar" },
//   STD: { code: "ST", name: "São Tomé & Príncipe Dobra" },
//   SVC: { code: "SV", name: "Salvadoran Colón" },
//   SYP: { code: "SY", name: "Syrian Pound" },
//   SZL: { code: "SZ", name: "Swazi Lilangeni" },
//   THB: { code: "TH", name: "Thai Baht" },
//   TJS: { code: "TJ", name: "Tajikistani Somoni" },
//   TMT: { code: "TM", name: "Turkmenistani Manat" },
//   TND: { code: "TN", name: "Tunisian Dinar" },
//   TOP: { code: "TO", name: "Tongan Paʻanga" },
//   TRY: { code: "TR", name: "Turkish Lira" },
//   TTD: { code: "TT", name: "Trinidad & Tobago Dollar" },
//   TWD: { code: "TW", name: "New Taiwan Dollar" },
//   TZS: { code: "TZ", name: "Tanzanian Shilling" },
//   UAH: { code: "UA", name: "Ukrainian Hryvnia" },
//   UGX: { code: "UG", name: "Ugandan Shilling" },
//   USD: { code: "US", name: "US Dollar" },
//   UYU: { code: "UY", name: "Uruguayan Peso" },
//   UZS: { code: "UZ", name: "Uzbekistan Som" },
//   VEF: { code: "VE", name: "Venezuelan Bolívar Fuerte" },
//   VND: { code: "VN", name: "Vietnamese Dong" },
//   VUV: { code: "VU", name: "Vanuatu Vatu" },
//   YER: { code: "YE", name: "Yemeni Rial" },
//   ZAR: { code: "ZA", name: "South African Rand" },
//   ZMK: { code: "ZM", name: "Zambian Kwacha" },
//   ZWD: { code: "ZW", name: "Zimbabwean Dollar" },
// };

const countryList = {
  AED: { code: "AE", name: "UAE Dirham", detail: "The currency of the United Arab Emirates." },
  AFN: { code: "AF", name: "Afghan Afghani", detail: "The currency of Afghanistan." },
  XCD: { code: "AG", name: "East Caribbean Dollar", detail: "The currency of eight of the nine members of the Organisation of Eastern Caribbean States (OECS)." },
  ALL: { code: "AL", name: "Albanian Lek", detail: "The currency of Albania." },
  AMD: { code: "AM", name: "Armenian Dram", detail: "The currency of Armenia." },
  ANG: { code: "AN", name: "Netherlands Guilder", detail: "The currency of the Kingdom of the Netherlands in the Caribbean." },
  AOA: { code: "AO", name: "Angolan Kwanza", detail: "The currency of Angola." },
  AQD: { code: "AQ", name: "Antarctican Dollar", detail: "A hypothetical currency for use in Antarctica." },
  ARS: { code: "AR", name: "Argentine Peso", detail: "The currency of Argentina." },
  AUD: { code: "AU", name: "Australian Dollar", detail: "The currency of Australia, including its external territories: Christmas Island, Cocos (Keeling) Islands, and Norfolk Island." },
  AZN: { code: "AZ", name: "Azerbaijani Manat", detail: "The currency of Azerbaijan." },
  BAM: { code: "BA", name: "Bosnia-Herzegovina Mark", detail: "The currency of Bosnia and Herzegovina." },
  BBD: { code: "BB", name: "Barbadian Dollar", detail: "The currency of Barbados." },
  BDT: { code: "BD", name: "Bangladeshi Taka", detail: "The currency of Bangladesh." },
  XOF: { code: "BE", name: "West African CFA Franc", detail: "The currency of eight West African countries: Benin, Burkina Faso, Guinea-Bissau, Ivory Coast, Mali, Niger, Senegal, and Togo." },
  BGN: { code: "BG", name: "Bulgarian Lev", detail: "The currency of Bulgaria." },
  BHD: { code: "BH", name: "Bahraini Dinar", detail: "The currency of Bahrain." },
  BIF: { code: "BI", name: "Burundian Franc", detail: "The currency of Burundi." },
  BMD: { code: "BM", name: "Bermudian Dollar", detail: "The currency of Bermuda." },
  BND: { code: "BN", name: "Brunei Dollar", detail: "The currency of Brunei." },
  BOB: { code: "BO", name: "Bolivian Boliviano", detail: "The currency of Bolivia." },
  BRL: { code: "BR", name: "Brazilian Real", detail: "The currency of Brazil." },
  BSD: { code: "BS", name: "Bahamian Dollar", detail: "The currency of the Bahamas." },
  BWP: { code: "BW", name: "Botswana Pula", detail: "The currency of Botswana." },
  BYR: { code: "BY", name: "Belarusian Ruble", detail: "The former currency of Belarus, replaced by the Belarusian ruble (BYN)." },
  BZD: { code: "BZ", name: "Belize Dollar", detail: "The currency of Belize." },
  CAD: { code: "CA", name: "Canadian Dollar", detail: "The currency of Canada." },
  CDF: { code: "CD", name: "Congolese Franc", detail: "The currency of the Democratic Republic of the Congo." },
  XAF: { code: "CF", name: "Central African CFA Franc", detail: "The currency of six Central African countries: Cameroon, Central African Republic, Chad, Republic of the Congo, Equatorial Guinea, and Gabon." },
  CHF: { code: "CH", name: "Swiss Franc", detail: "The currency of Switzerland and Liechtenstein." },
  CLP: { code: "CL", name: "Chilean Peso", detail: "The currency of Chile." },
  CNY: { code: "CN", name: "Chinese Yuan", detail: "The currency of China." },
  COP: { code: "CO", name: "Colombian Peso", detail: "The currency of Colombia." },
  CRC: { code: "CR", name: "Costa Rican Colón", detail: "The currency of Costa Rica." },
  CUP: { code: "CU", name: "Cuban Peso", detail: "The currency of Cuba." },
  CVE: { code: "CV", name: "Cape Verdean Escudo", detail: "The currency of Cape Verde." },
  CYP: { code: "CY", name: "Cypriot Pound", detail: "The former currency of Cyprus." },
  CZK: { code: "CZ", name: "Czech Republic Koruna", detail: "The currency of the Czech Republic." },
  DJF: { code: "DJ", name: "Djiboutian Franc", detail: "The currency of Djibouti." },
  DKK: { code: "DK", name: "Danish Krone", detail: "The currency of Denmark and the Faroe Islands." },
  DOP: { code: "DO", name: "Dominican Peso", detail: "The currency of the Dominican Republic." },
  DZD: { code: "DZ", name: "Algerian Dinar", detail: "The currency of Algeria." },
  ECS: { code: "EC", name: "Ecuadorian Sucre", detail: "The former currency of Ecuador." },
  EEK: { code: "EE", name: "Estonian Kroon", detail: "The former currency of Estonia." },
  EGP: { code: "EG", name: "Egyptian Pound", detail: "The currency of Egypt." },
  ETB: { code: "ET", name: "Ethiopian Birr", detail: "The currency of Ethiopia." },
  EUR: { code: "FR", name: "Euro", detail: "The official currency of the Eurozone, which consists of 19 of the 27 member states of the European Union." },
  FJD: { code: "FJ", name: "Fijian Dollar", detail: "The currency of Fiji." },
  FKP: { code: "FK", name: "Falkland Islands Pound", detail: "The currency of the Falkland Islands." },
  GBP: { code: "GB", name: "British Pound Sterling", detail: "The currency of the United Kingdom and its Crown dependencies." },
  GEL: { code: "GE", name: "Georgian Lari", detail: "The currency of Georgia." },
  GGP: { code: "GG", name: "Guernsey Pound", detail: "The currency of Guernsey." },
  GHS: { code: "GH", name: "Ghanaian Cedi", detail: "The currency of Ghana." },
  GIP: { code: "GI", name: "Gibraltar Pound", detail: "The currency of Gibraltar." },
  GMD: { code: "GM", name: "Gambian Dalasi", detail: "The currency of the Gambia." },
  GNF: { code: "GN", name: "Guinean Franc", detail: "The currency of Guinea." },
  GTQ: { code: "GT", name: "Guatemalan Quetzal", detail: "The currency of Guatemala." },
  GYD: { code: "GY", name: "Guyanaese Dollar", detail: "The currency of Guyana." },
  HKD: { code: "HK", name: "Hong Kong Dollar", detail: "The currency of Hong Kong." },
  HNL: { code: "HN", name: "Honduran Lempira", detail: "The currency of Honduras." },
  HRK: { code: "HR", name: "Croatian Kuna", detail: "The currency of Croatia." },
  HTG: { code: "HT", name: "Haitian Gourde", detail: "The currency of Haiti." },
  HUF: { code: "HU", name: "Hungarian Forint", detail: "The currency of Hungary." },
  IDR: { code: "ID", name: "Indonesian Rupiah", detail: "The currency of Indonesia." },
  ILS: { code: "IL", name: "Israeli New Sheqel", detail: "The currency of Israel." },
  INR: { code: "IN", name: "Indian Rupee", detail: "The currency of India." },
  IQD: { code: "IQ", name: "Iraqi Dinar", detail: "The currency of Iraq." },
  IRR: { code: "IR", name: "Iranian Rial", detail: "The currency of Iran." },
  ISK: { code: "IS", name: "Icelandic Króna", detail: "The currency of Iceland." },
  JMD: { code: "JM", name: "Jamaican Dollar", detail: "The currency of Jamaica." },
  JOD: { code: "JO", name: "Jordanian Dinar", detail: "The currency of Jordan." },
  JPY: { code: "JP", name: "Japanese Yen", detail: "The currency of Japan." },
  KES: { code: "KE", name: "Kenyan Shilling", detail: "The currency of Kenya." },
  KGS: { code: "KG", name: "Kyrgystani Som", detail: "The currency of Kyrgyzstan." },
  KHR: { code: "KH", name: "Cambodian Riel", detail: "The currency of Cambodia." },
  KMF: { code: "KM", name: "Comorian Franc", detail: "The currency of Comoros." },
  KPW: { code: "KP", name: "North Korean Won", detail: "The currency of North Korea." },
  KRW: { code: "KR", name: "South Korean Won", detail: "The currency of South Korea." },
  KWD: { code: "KW", name: "Kuwaiti Dinar", detail: "The currency of Kuwait." },
  KYD: { code: "KY", name: "Cayman Islands Dollar", detail: "The currency of the Cayman Islands." },
  KZT: { code: "KZ", name: "Kazakhstani Tenge", detail: "The currency of Kazakhstan." },
  LAK: { code: "LA", name: "Laotian Kip", detail: "The currency of Laos." },
  LBP: { code: "LB", name: "Lebanese Pound", detail: "The currency of Lebanon." },
  LKR: { code: "LK", name: "Sri Lankan Rupee", detail: "The currency of Sri Lanka." },
  LRD: { code: "LR", name: "Liberian Dollar", detail: "The currency of Liberia." },
  LSL: { code: "LS", name: "Lesotho Loti", detail: "The currency of Lesotho." },
  LTL: { code: "LT", name: "Lithuanian Litas", detail: "The former currency of Lithuania." },
  LVL: { code: "LV", name: "Latvian Lats", detail: "The former currency of Latvia." },
  LYD: { code: "LY", name: "Libyan Dinar", detail: "The currency of Libya." },
  MAD: { code: "MA", name: "Moroccan Dirham", detail: "The currency of Morocco." },
  MDL: { code: "MD", name: "Moldovan Leu", detail: "The currency of Moldova." },
  MGA: { code: "MG", name: "Malagasy Ariary", detail: "The currency of Madagascar." },
  MKD: { code: "MK", name: "Macedonian Denar", detail: "The currency of North Macedonia." },
  MMK: { code: "MM", name: "Myanma Kyat", detail: "The currency of Myanmar." },
  MNT: { code: "MN", name: "Mongolian Tugrik", detail: "The currency of Mongolia." },
  MOP: { code: "MO", name: "Macanese Pataca", detail: "The currency of Macau." },
  MRO: { code: "MR", name: "Mauritanian Ouguiya", detail: "The currency of Mauritania." },
  MTL: { code: "MT", name: "Maltese Lira", detail: "The former currency of Malta." },
  MUR: { code: "MU", name: "Mauritian Rupee", detail: "The currency of Mauritius." },
  MVR: { code: "MV", name: "Maldivian Rufiyaa", detail: "The currency of the Maldives." },
  MWK: { code: "MW", name: "Malawian Kwacha", detail: "The currency of Malawi." },
  MXN: { code: "MX", name: "Mexican Peso", detail: "The currency of Mexico." },
  MYR: { code: "MY", name: "Malaysian Ringgit", detail: "The currency of Malaysia." },
  MZN: { code: "MZ", name: "Mozambican Metical", detail: "The currency of Mozambique." },
  NAD: { code: "NA", name: "Namibian Dollar", detail: "The currency of Namibia." },
  XPF: { code: "NC", name: "CFP Franc", detail: "The currency of French Polynesia, New Caledonia, and Wallis and Futuna." },
  NGN: { code: "NG", name: "Nigerian Naira", detail: "The currency of Nigeria." },
  NIO: { code: "NI", name: "Nicaraguan Córdoba", detail: "The currency of Nicaragua." },
  NPR: { code: "NP", name: "Nepalese Rupee", detail: "The currency of Nepal." },
  NZD: { code: "NZ", name: "New Zealand Dollar", detail: "The currency of New Zealand, including its territories: Cook Islands, Niue, and Tokelau." },
  OMR: { code: "OM", name: "Omani Rial", detail: "The currency of Oman." },
  PAB: { code: "PA", name: "Panamanian Balboa", detail: "The currency of Panama." },
  PEN: { code: "PE", name: "Peruvian Nuevo Sol", detail: "The former currency of Peru, replaced by the Peruvian sol (PEN)." },
  PGK: { code: "PG", name: "Papua New Guinean Kina", detail: "The currency of Papua New Guinea." },
  PHP: { code: "PH", name: "Philippine Peso", detail: "The currency of the Philippines." },
  PKR: { code: "PK", name: "Pakistani Rupee", detail: "The currency of Pakistan." },
  PLN: { code: "PL", name: "Polish Zloty", detail: "The currency of Poland." },
  PYG: { code: "PY", name: "Paraguayan Guarani", detail: "The currency of Paraguay." },
  QAR: { code: "QA", name: "Qatari Rial", detail: "The currency of Qatar." },
  RON: { code: "RO", name: "Romanian Leu", detail: "The currency of Romania." },
  RSD: { code: "RS", name: "Serbian Dinar", detail: "The currency of Serbia." },
  RUB: { code: "RU", name: "Russian Ruble", detail: "The currency of Russia." },
  RWF: { code: "RW", name: "Rwandan Franc", detail: "The currency of Rwanda." },
  SAR: { code: "SA", name: "Saudi Riyal", detail: "The currency of Saudi Arabia." },
  SBD: { code: "SB", name: "Solomon Islands Dollar", detail: "The currency of the Solomon Islands." },
  SCR: { code: "SC", name: "Seychellois Rupee", detail: "The currency of Seychelles." },
  SDG: { code: "SD", name: "Sudanese Pound", detail: "The currency of Sudan." },
  SEK: { code: "SE", name: "Swedish Krona", detail: "The currency of Sweden." },
  SGD: { code: "SG", name: "Singapore Dollar", detail: "The currency of Singapore." },
  SKK: { code: "SK", name: "Slovak Koruna", detail: "The former currency of Slovakia." },
  SLL: { code: "SL", name: "Sierra Leonean Leone", detail: "The currency of Sierra Leone." },
  SOS: { code: "SO", name: "Somali Shilling", detail: "The currency of Somalia." },
  SRD: { code: "SR", name: "Surinamese Dollar", detail: "The currency of Suriname." },
  STD: { code: "ST", name: "São Tomé & Príncipe Dobra", detail: "The currency of São Tomé and Príncipe." },
  SVC: { code: "SV", name: "Salvadoran Colón", detail: "The former currency of El Salvador, replaced by the United States dollar (USD)." },
  SYP: { code: "SY", name: "Syrian Pound", detail: "The currency of Syria." },
  SZL: { code: "SZ", name: "Swazi Lilangeni", detail: "The currency of Eswatini." },
  THB: { code: "TH", name: "Thai Baht", detail: "The currency of Thailand." },
  TJS: { code: "TJ", name: "Tajikistani Somoni", detail: "The currency of Tajikistan." },
  TMT: { code: "TM", name: "Turkmenistani Manat", detail: "The currency of Turkmenistan." },
  TND: { code: "TN", name: "Tunisian Dinar", detail: "The currency of Tunisia." },
  TOP: { code: "TO", name: "Tongan Paʻanga", detail: "The currency of Tonga." },
  TRY: { code: "TR", name: "Turkish Lira", detail: "The currency of Turkey." },
  TTD: { code: "TT", name: "Trinidad & Tobago Dollar", detail: "The currency of Trinidad and Tobago." },
  TWD: { code: "TW", name: "New Taiwan Dollar", detail: "The currency of Taiwan." },
  TZS: { code: "TZ", name: "Tanzanian Shilling", detail: "The currency of Tanzania." },
  UAH: { code: "UA", name: "Ukrainian Hryvnia", detail: "The currency of Ukraine." },
  UGX: { code: "UG", name: "Ugandan Shilling", detail: "The currency of Uganda." },
  USD: { code: "US", name: "United States Dollar", detail: "The currency of the United States and its territories." },
  UYU: { code: "UY", name: "Uruguayan Peso", detail: "The currency of Uruguay." },
  UZS: { code: "UZ", name: "Uzbekistani Som", detail: "The currency of Uzbekistan." },
  VEF: { code: "VE", name: "Venezuelan Bolívar", detail: "The former currency of Venezuela, replaced by the bolívar soberano (VES)." },
  VND: { code: "VN", name: "Vietnamese Dong", detail: "The currency of Vietnam." },
  VUV: { code: "VU", name: "Vanuatu Vatu", detail: "The currency of Vanuatu." },
  WST: { code: "WS", name: "Samoan Tala", detail: "The currency of Samoa." },
 YER: { code: "YE", name: "Yemeni Rial", detail: "The currency of Yemen." },
  ZAR: { code: "ZA", name: "South African Rand", detail: "The currency of South Africa." },
  ZMK: { code: "ZM", name: "Zambian Kwacha", detail: "The former currency of Zambia, replaced by the Zambian kwacha (ZMW)." },
  ZWD: { code: "ZW", name: "Zimbabwean Dollar", detail: "The former currency of Zimbabwe, replaced by the United States dollar (USD) and various other currencies." }
};