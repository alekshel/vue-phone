const countries = [
    {
        "en_name": "Afghanistan",
        "origin_name": "افغانستان",
        "country_code": "+93",
        "iso": "AF"
    },
    {
        "en_name": "Åland Islands",
        "origin_name": "Åland Islands",
        "country_code": "+358",
        "iso": "AX"
    },
    {
        "en_name": "Albania",
        "origin_name": "Shqipëria",
        "country_code": "+355",
        "iso": "AL"
    },
    {
        "en_name": "Algeria",
        "origin_name": "الجزائر",
        "country_code": "+213",
        "iso": "DZ"
    },
    {
        "en_name": "American Samoa",
        "origin_name": "American Samoa",
        "country_code": "+1",
        "iso": "AS"
    },
    {
        "en_name": "AndorrA",
        "origin_name": "AndorrA",
        "country_code": "+376",
        "iso": "AD"
    },
    {
        "en_name": "Angola",
        "origin_name": "Angola",
        "country_code": "+244",
        "iso": "AO"
    },
    {
        "en_name": "Anguilla",
        "origin_name": "Anguilla",
        "country_code": "+1",
        "iso": "AI"
    },
    {
        "en_name": "Antarctica",
        "origin_name": "Antarctica",
        "country_code": "+672",
        "iso": "AQ"
    },
    {
        "en_name": "Antigua and Barbuda",
        "origin_name": "Antigua and Barbuda",
        "country_code": "+1",
        "iso": "AG"
    },
    {
        "en_name": "Argentina",
        "origin_name": "Argentina",
        "country_code": "+54",
        "iso": "AR"
    },
    {
        "en_name": "Armenia",
        "origin_name": "Հայաստան",
        "country_code": "+374",
        "iso": "AM"
    },
    {
        "en_name": "Aruba",
        "origin_name": "Aruba",
        "country_code": "+297",
        "iso": "AW"
    },
    {
        "en_name": "Australia",
        "origin_name": "Australia",
        "country_code": "+61",
        "iso": "AU"
    },
    {
        "en_name": "Austria",
        "origin_name": "Österreich",
        "country_code": "+43",
        "iso": "AT"
    },
    {
        "en_name": "Azerbaijan",
        "origin_name": "Azərbaycan",
        "country_code": "+994",
        "iso": "AZ"
    },
    {
        "en_name": "Bahamas",
        "origin_name": "Bahamas",
        "country_code": "+1",
        "iso": "BS"
    },
    {
        "en_name": "Bahrain",
        "origin_name": "البحرين",
        "country_code": "+973",
        "iso": "BH"
    },
    {
        "en_name": "Bangladesh",
        "origin_name": "বাংলাদেশ",
        "country_code": "+880",
        "iso": "BD"
    },
    {
        "en_name": "Barbados",
        "origin_name": "Barbados",
        "country_code": "+1",
        "iso": "BB"
    },
    {
        "en_name": "Belarus",
        "origin_name": "Беларусь",
        "country_code": "+375",
        "iso": "BY"
    },
    {
        "en_name": "Belgium",
        "origin_name": "België",
        "country_code": "+32",
        "iso": "BE"
    },
    {
        "en_name": "Belize",
        "origin_name": "Belize",
        "country_code": "+501",
        "iso": "BZ"
    },
    {
        "en_name": "Benin",
        "origin_name": "Bénin",
        "country_code": "+229",
        "iso": "BJ"
    },
    {
        "en_name": "Bermuda",
        "origin_name": "Bermuda",
        "country_code": "+1",
        "iso": "BM"
    },
    {
        "en_name": "Bhutan",
        "origin_name": "འབྲུག་ཡུལ",
        "country_code": "+975",
        "iso": "BT"
    },
    {
        "en_name": "Bolivia",
        "origin_name": "Bolivia",
        "country_code": "+591",
        "iso": "BO"
    },
    {
        "en_name": "Bosnia and Herzegovina",
        "origin_name": "Bosna i Hercegovina",
        "country_code": "+387",
        "iso": "BA"
    },
    {
        "en_name": "Botswana",
        "origin_name": "Botswana",
        "country_code": "+267",
        "iso": "BW"
    },
    {
        "en_name": "Bouvet Island",
        "origin_name": "Bouvet Island",
        "country_code": "+47",
        "iso": "BV"
    },
    {
        "en_name": "Brazil",
        "origin_name": "Brasil",
        "country_code": "+55",
        "iso": "BR"
    },
    {
        "en_name": "British Indian Ocean Territory",
        "origin_name": "British Indian Ocean Territory",
        "country_code": "+246",
        "iso": "IO"
    },
    {
        "en_name": "Brunei Darussalam",
        "origin_name": "Negara Brunei Darussalam",
        "country_code": "+673",
        "iso": "BN"
    },
    {
        "en_name": "Bulgaria",
        "origin_name": "България",
        "country_code": "+359",
        "iso": "BG"
    },
    {
        "en_name": "Burkina Faso",
        "origin_name": "Burkina Faso",
        "country_code": "+226",
        "iso": "BF"
    },
    {
        "en_name": "Burundi",
        "origin_name": "Burundi",
        "country_code": "+257",
        "iso": "BI"
    },
    {
        "en_name": "Cambodia",
        "origin_name": "កម្ពុជា",
        "country_code": "+855",
        "iso": "KH"
    },
    {
        "en_name": "Cameroon",
        "origin_name": "Cameroun",
        "country_code": "+237",
        "iso": "CM"
    },
    {
        "en_name": "Canada",
        "origin_name": "Canada",
        "country_code": "+1",
        "iso": "CA"
    },
    {
        "en_name": "Cape Verde",
        "origin_name": "Cabo Verde",
        "country_code": "+238",
        "iso": "CV"
    },
    {
        "en_name": "Cayman Islands",
        "origin_name": "Cayman Islands",
        "country_code": "+1",
        "iso": "KY"
    },
    {
        "en_name": "Central African Republic",
        "origin_name": "République centrafricaine",
        "country_code": "+236",
        "iso": "CF"
    },
    {
        "en_name": "Chad",
        "origin_name": "Tchad",
        "country_code": "+235",
        "iso": "TD"
    },
    {
        "en_name": "Chile",
        "origin_name": "Chile",
        "country_code": "+56",
        "iso": "CL"
    },
    {
        "en_name": "China",
        "origin_name": "中国",
        "country_code": "+86",
        "iso": "CN"
    },
    {
        "en_name": "Christmas Island",
        "origin_name": "Christmas Island",
        "country_code": "+61",
        "iso": "CX"
    },
    {
        "en_name": "Cocos (Keeling) Islands",
        "origin_name": "Cocos (Keeling) Islands",
        "country_code": "+61",
        "iso": "CC"
    },
    {
        "en_name": "Colombia",
        "origin_name": "Colombia",
        "country_code": "+57",
        "iso": "CO"
    },
    {
        "en_name": "Comoros",
        "origin_name": "Comores",
        "country_code": "+269",
        "iso": "KM"
    },
    {
        "en_name": "Congo",
        "origin_name": "Congo",
        "country_code": "+242",
        "iso": "CG"
    },
    {
        "en_name": "Congo, The Democratic Republic of the",
        "origin_name": "Congo, The Democratic Republic of the",
        "country_code": "+243",
        "iso": "CD"
    },
    {
        "en_name": "Cook Islands",
        "origin_name": "Cook Islands",
        "country_code": "+682",
        "iso": "CK"
    },
    {
        "en_name": "Costa Rica",
        "origin_name": "Costa Rica",
        "country_code": "+506",
        "iso": "CR"
    },
    {
        "en_name": "Cote D'Ivoire",
        "origin_name": "Côte d'Ivoire",
        "country_code": "+225",
        "iso": "CI"
    },
    {
        "en_name": "Croatia",
        "origin_name": "Hrvatska",
        "country_code": "+385",
        "iso": "HR"
    },
    {
        "en_name": "Cuba",
        "origin_name": "Cuba",
        "country_code": "+53",
        "iso": "CU"
    },
    {
        "en_name": "Cyprus",
        "origin_name": "Κύπρος",
        "country_code": "+357",
        "iso": "CY"
    },
    {
        "en_name": "Czech Republic",
        "origin_name": "Česká republika",
        "country_code": "+420",
        "iso": "CZ"
    },
    {
        "en_name": "Denmark",
        "origin_name": "Danmark",
        "country_code": "+45",
        "iso": "DK"
    },
    {
        "en_name": "Djibouti",
        "origin_name": "Djibouti",
        "country_code": "+253",
        "iso": "DJ"
    },
    {
        "en_name": "Dominica",
        "origin_name": "Dominica",
        "country_code": "+1",
        "iso": "DM"
    },
    {
        "en_name": "Dominican Republic",
        "origin_name": "República Dominicana",
        "country_code": "+1",
        "iso": "DO"
    },
    {
        "en_name": "Ecuador",
        "origin_name": "Ecuador",
        "country_code": "+593",
        "iso": "EC"
    },
    {
        "en_name": "Egypt",
        "origin_name": "مصر",
        "country_code": "+20",
        "iso": "EG"
    },
    {
        "en_name": "El Salvador",
        "origin_name": "El Salvador",
        "country_code": "+503",
        "iso": "SV"
    },
    {
        "en_name": "Equatorial Guinea",
        "origin_name": "Guinea Ecuatorial",
        "country_code": "+240",
        "iso": "GQ"
    },
    {
        "en_name": "Eritrea",
        "origin_name": "ኤርትራ",
        "country_code": "+291",
        "iso": "ER"
    },
    {
        "en_name": "Estonia",
        "origin_name": "Eesti",
        "country_code": "+372",
        "iso": "EE"
    },
    {
        "en_name": "Ethiopia",
        "origin_name": "ኢትዮጵያ",
        "country_code": "+251",
        "iso": "ET"
    },
    {
        "en_name": "Falkland Islands (Malvinas)",
        "origin_name": "Falkland Islands (Malvinas)",
        "country_code": "+500",
        "iso": "FK"
    },
    {
        "en_name": "Faroe Islands",
        "origin_name": "Føroyar",
        "country_code": "+298",
        "iso": "FO"
    },
    {
        "en_name": "Fiji",
        "origin_name": "Fiji",
        "country_code": "+679",
        "iso": "FJ"
    },
    {
        "en_name": "Finland",
        "origin_name": "Suomi",
        "country_code": "+358",
        "iso": "FI"
    },
    {
        "en_name": "France",
        "origin_name": "France",
        "country_code": "+33",
        "iso": "FR"
    },
    {
        "en_name": "French Guiana",
        "origin_name": "Guyane française",
        "country_code": "+594",
        "iso": "GF"
    },
    {
        "en_name": "French Polynesia",
        "origin_name": "Polynésie française",
        "country_code": "+689",
        "iso": "PF"
    },
    {
        "en_name": "French Southern Territories",
        "origin_name": "French Southern Territories",
        "country_code": "+262",
        "iso": "TF"
    },
    {
        "en_name": "Gabon",
        "origin_name": "Gabon",
        "country_code": "+241",
        "iso": "GA"
    },
    {
        "en_name": "Gambia",
        "origin_name": "Gambia",
        "country_code": "+220",
        "iso": "GM"
    },
    {
        "en_name": "Georgia",
        "origin_name": "საქართველო",
        "country_code": "+995",
        "iso": "GE"
    },
    {
        "en_name": "Germany",
        "origin_name": "Deutschland",
        "country_code": "+49",
        "iso": "DE"
    },
    {
        "en_name": "Ghana",
        "origin_name": "Ghana",
        "country_code": "+233",
        "iso": "GH"
    },
    {
        "en_name": "Gibraltar",
        "origin_name": "Gibraltar",
        "country_code": "+350",
        "iso": "GI"
    },
    {
        "en_name": "Greece",
        "origin_name": "Ελλάδα",
        "country_code": "+30",
        "iso": "GR"
    },
    {
        "en_name": "Greenland",
        "origin_name": "Kalaallit Nunaat",
        "country_code": "+299",
        "iso": "GL"
    },
    {
        "en_name": "Grenada",
        "origin_name": "Grenada",
        "country_code": "+1",
        "iso": "GD"
    },
    {
        "en_name": "Guadeloupe",
        "origin_name": "Guadeloupe",
        "country_code": "+590",
        "iso": "GP"
    },
    {
        "en_name": "Guam",
        "origin_name": "Guam",
        "country_code": "+1",
        "iso": "GU"
    },
    {
        "en_name": "Guatemala",
        "origin_name": "Guatemala",
        "country_code": "+502",
        "iso": "GT"
    },
    {
        "en_name": "Guernsey",
        "origin_name": "Guernsey",
        "country_code": "+44",
        "iso": "GG"
    },
    {
        "en_name": "Guinea",
        "origin_name": "Guinée",
        "country_code": "+224",
        "iso": "GN"
    },
    {
        "en_name": "Guinea-Bissau",
        "origin_name": "Guiné-Bissau",
        "country_code": "+245",
        "iso": "GW"
    },
    {
        "en_name": "Guyana",
        "origin_name": "Guyana",
        "country_code": "+592",
        "iso": "GY"
    },
    {
        "en_name": "Haiti",
        "origin_name": "Haïti",
        "country_code": "+509",
        "iso": "HT"
    },
    {
        "en_name": "Heard Island and Mcdonald Islands",
        "origin_name": "Heard Island and Mcdonald Islands",
        "country_code": "+672",
        "iso": "HM"
    },
    {
        "en_name": "Holy See (Vatican City State)",
        "origin_name": "Holy See (Vatican City State)",
        "country_code": "+39",
        "iso": "VA"
    },
    {
        "en_name": "Honduras",
        "origin_name": "Honduras",
        "country_code": "+504",
        "iso": "HN"
    },
    {
        "en_name": "Hong Kong",
        "origin_name": "香港",
        "country_code": "+852",
        "iso": "HK"
    },
    {
        "en_name": "Hungary",
        "origin_name": "Magyarország",
        "country_code": "+36",
        "iso": "HU"
    },
    {
        "en_name": "Iceland",
        "origin_name": "Ísland",
        "country_code": "+354",
        "iso": "IS"
    },
    {
        "en_name": "India",
        "origin_name": "भारत",
        "country_code": "+91",
        "iso": "IN"
    },
    {
        "en_name": "Indonesia",
        "origin_name": "Indonesia",
        "country_code": "+62",
        "iso": "ID"
    },
    {
        "en_name": "Iran, Islamic Republic Of",
        "origin_name": "ایران",
        "country_code": "+98",
        "iso": "IR"
    },
    {
        "en_name": "Iraq",
        "origin_name": "العراق",
        "country_code": "+964",
        "iso": "IQ"
    },
    {
        "en_name": "Ireland",
        "origin_name": "Ireland",
        "country_code": "+353",
        "iso": "IE"
    },
    {
        "en_name": "Isle of Man",
        "origin_name": "Isle of Man",
        "country_code": "+44",
        "iso": "IM"
    },
    {
        "en_name": "Israel",
        "origin_name": "ישראל",
        "country_code": "+972",
        "iso": "IL"
    },
    {
        "en_name": "Italy",
        "origin_name": "Italia",
        "country_code": "+39",
        "iso": "IT"
    },
    {
        "en_name": "Jamaica",
        "origin_name": "Jamaica",
        "country_code": "+1",
        "iso": "JM"
    },
    {
        "en_name": "Japan",
        "origin_name": "日本",
        "country_code": "+81",
        "iso": "JP"
    },
    {
        "en_name": "Jersey",
        "origin_name": "Jersey",
        "country_code": "+44",
        "iso": "JE"
    },
    {
        "en_name": "Jordan",
        "origin_name": "الأردن",
        "country_code": "+962",
        "iso": "JO"
    },
    {
        "en_name": "Kazakhstan",
        "origin_name": "Қазақстан",
        "country_code": "+7",
        "iso": "KZ"
    },
    {
        "en_name": "Kenya",
        "origin_name": "Kenya",
        "country_code": "+254",
        "iso": "KE"
    },
    {
        "en_name": "Kiribati",
        "origin_name": "Kiribati",
        "country_code": "+686",
        "iso": "KI"
    },
    {
        "en_name": "Korea, Democratic People'S Republic of",
        "origin_name": "조선민주주의인민공화국",
        "country_code": "+850",
        "iso": "KP"
    },
    {
        "en_name": "Korea, Republic of",
        "origin_name": "대한민국",
        "country_code": "+82",
        "iso": "KR"
    },
    {
        "en_name": "Kuwait",
        "origin_name": "الكويت",
        "country_code": "+965",
        "iso": "KW"
    },
    {
        "en_name": "Kyrgyzstan",
        "origin_name": "Кыргызстан",
        "country_code": "+996",
        "iso": "KG"
    },
    {
        "en_name": "Lao People'S Democratic Republic",
        "origin_name": "ສປປລາວ",
        "country_code": "+856",
        "iso": "LA"
    },
    {
        "en_name": "Latvia",
        "origin_name": "Latvija",
        "country_code": "+371",
        "iso": "LV"
    },
    {
        "en_name": "Lebanon",
        "origin_name": "لبنان",
        "country_code": "+961",
        "iso": "LB"
    },
    {
        "en_name": "Lesotho",
        "origin_name": "Lesotho",
        "country_code": "+266",
        "iso": "LS"
    },
    {
        "en_name": "Liberia",
        "origin_name": "Liberia",
        "country_code": "+231",
        "iso": "LR"
    },
    {
        "en_name": "Libyan Arab Jamahiriya",
        "origin_name": "ليبيا",
        "country_code": "+218",
        "iso": "LY"
    },
    {
        "en_name": "Liechtenstein",
        "origin_name": "Liechtenstein",
        "country_code": "+423",
        "iso": "LI"
    },
    {
        "en_name": "Lithuania",
        "origin_name": "Lietuva",
        "country_code": "+370",
        "iso": "LT"
    },
    {
        "en_name": "Luxembourg",
        "origin_name": "Luxembourg",
        "country_code": "+352",
        "iso": "LU"
    },
    {
        "en_name": "Macao",
        "origin_name": "澳門",
        "country_code": "+853",
        "iso": "MO"
    },
    {
        "en_name": "Macedonia, The Former Yugoslav Republic of",
        "origin_name": "Macedonia, The Former Yugoslav Republic of",
        "country_code": "+389",
        "iso": "MK"
    },
    {
        "en_name": "Madagascar",
        "origin_name": "Madagascar",
        "country_code": "+261",
        "iso": "MG"
    },
    {
        "en_name": "Malawi",
        "origin_name": "Malawi",
        "country_code": "+265",
        "iso": "MW"
    },
    {
        "en_name": "Malaysia",
        "origin_name": "Malaysia",
        "country_code": "+60",
        "iso": "MY"
    },
    {
        "en_name": "Maldives",
        "origin_name": "Maldives",
        "country_code": "+960",
        "iso": "MV"
    },
    {
        "en_name": "Mali",
        "origin_name": "Mali",
        "country_code": "+223",
        "iso": "ML"
    },
    {
        "en_name": "Malta",
        "origin_name": "Malta",
        "country_code": "+356",
        "iso": "MT"
    },
    {
        "en_name": "Marshall Islands",
        "origin_name": "Marshall Islands",
        "country_code": "+692",
        "iso": "MH"
    },
    {
        "en_name": "Martinique",
        "origin_name": "Martinique",
        "country_code": "+596",
        "iso": "MQ"
    },
    {
        "en_name": "Mauritania",
        "origin_name": "Mauritanie",
        "country_code": "+222",
        "iso": "MR"
    },
    {
        "en_name": "Mauritius",
        "origin_name": "Maurice",
        "country_code": "+230",
        "iso": "MU"
    },
    {
        "en_name": "Mayotte",
        "origin_name": "Mayotte",
        "country_code": "+262",
        "iso": "YT"
    },
    {
        "en_name": "Mexico",
        "origin_name": "México",
        "country_code": "+52",
        "iso": "MX"
    },
    {
        "en_name": "Micronesia, Federated States of",
        "origin_name": "Micronesia, Federated States of",
        "country_code": "+691",
        "iso": "FM"
    },
    {
        "en_name": "Moldova, Republic of",
        "origin_name": "Moldova, Republic of",
        "country_code": "+373",
        "iso": "MD"
    },
    {
        "en_name": "Monaco",
        "origin_name": "Monaco",
        "country_code": "+377",
        "iso": "MC"
    },
    {
        "en_name": "Mongolia",
        "origin_name": "Монгол улс",
        "country_code": "+976",
        "iso": "MN"
    },
    {
        "en_name": "Montenegro",
        "origin_name": "Crna Gora",
        "country_code": "+382",
        "iso": "ME"
    },
    {
        "en_name": "Montserrat",
        "origin_name": "Montserrat",
        "country_code": "+1",
        "iso": "MS"
    },
    {
        "en_name": "Morocco",
        "origin_name": "المغرب",
        "country_code": "+212",
        "iso": "MA"
    },
    {
        "en_name": "Mozambique",
        "origin_name": "Moçambique",
        "country_code": "+258",
        "iso": "MZ"
    },
    {
        "en_name": "Myanmar",
        "origin_name": "မြန်မာ",
        "country_code": "+95",
        "iso": "MM"
    },
    {
        "en_name": "Namibia",
        "origin_name": "Namibia",
        "country_code": "+264",
        "iso": "NA"
    },
    {
        "en_name": "Nauru",
        "origin_name": "Nauru",
        "country_code": "+674",
        "iso": "NR"
    },
    {
        "en_name": "Nepal",
        "origin_name": "नेपाल",
        "country_code": "+977",
        "iso": "NP"
    },
    {
        "en_name": "Netherlands",
        "origin_name": "Nederland",
        "country_code": "+31",
        "iso": "NL"
    },
    {
        "en_name": "Netherlands Antilles",
        "origin_name": "Netherlands Antilles",
        "country_code": "+599",
        "iso": "AN"
    },
    {
        "en_name": "New Caledonia",
        "origin_name": "Nouvelle-Calédonie",
        "country_code": "+687",
        "iso": "NC"
    },
    {
        "en_name": "New Zealand",
        "origin_name": "New Zealand",
        "country_code": "+64",
        "iso": "NZ"
    },
    {
        "en_name": "Nicaragua",
        "origin_name": "Nicaragua",
        "country_code": "+505",
        "iso": "NI"
    },
    {
        "en_name": "Niger",
        "origin_name": "Niger",
        "country_code": "+227",
        "iso": "NE"
    },
    {
        "en_name": "Nigeria",
        "origin_name": "Nigeria",
        "country_code": "+234",
        "iso": "NG"
    },
    {
        "en_name": "Niue",
        "origin_name": "Niue",
        "country_code": "+683",
        "iso": "NU"
    },
    {
        "en_name": "Norfolk Island",
        "origin_name": "Norfolk Island",
        "country_code": "+672",
        "iso": "NF"
    },
    {
        "en_name": "Northern Mariana Islands",
        "origin_name": "Northern Mariana Islands",
        "country_code": "+1",
        "iso": "MP"
    },
    {
        "en_name": "Norway",
        "origin_name": "Norge",
        "country_code": "+47",
        "iso": "NO"
    },
    {
        "en_name": "Oman",
        "origin_name": "عمان",
        "country_code": "+968",
        "iso": "OM"
    },
    {
        "en_name": "Pakistan",
        "origin_name": "پاکستان",
        "country_code": "+92",
        "iso": "PK"
    },
    {
        "en_name": "Palau",
        "origin_name": "Palau",
        "country_code": "+680",
        "iso": "PW"
    },
    {
        "en_name": "Palestinian Territory, Occupied",
        "origin_name": "فلسطين",
        "country_code": "+970",
        "iso": "PS"
    },
    {
        "en_name": "Panama",
        "origin_name": "Panama",
        "country_code": "+507",
        "iso": "PA"
    },
    {
        "en_name": "Papua New Guinea",
        "origin_name": "Papua New Guinea",
        "country_code": "+675",
        "iso": "PG"
    },
    {
        "en_name": "Paraguay",
        "origin_name": "Paraguay",
        "country_code": "+595",
        "iso": "PY"
    },
    {
        "en_name": "Peru",
        "origin_name": "Perú",
        "country_code": "+51",
        "iso": "PE"
    },
    {
        "en_name": "Philippines",
        "origin_name": "Philippines",
        "country_code": "+63",
        "iso": "PH"
    },
    {
        "en_name": "Pitcairn",
        "origin_name": "Pitcairn",
        "country_code": "+870",
        "iso": "PN"
    },
    {
        "en_name": "Poland",
        "origin_name": "Polska",
        "country_code": "+48",
        "iso": "PL"
    },
    {
        "en_name": "Portugal",
        "origin_name": "Portugal",
        "country_code": "+351",
        "iso": "PT"
    },
    {
        "en_name": "Puerto Rico",
        "origin_name": "Puerto Rico",
        "country_code": "+1",
        "iso": "PR"
    },
    {
        "en_name": "Qatar",
        "origin_name": "قطر",
        "country_code": "+974",
        "iso": "QA"
    },
    {
        "en_name": "Reunion",
        "origin_name": "Réunion",
        "country_code": "+262",
        "iso": "RE"
    },
    {
        "en_name": "Romania",
        "origin_name": "România",
        "country_code": "+40",
        "iso": "RO"
    },
    {
        "en_name": "Russian Federation",
        "origin_name": "Россия",
        "country_code": "+7",
        "iso": "RU"
    },
    {
        "en_name": "RWANDA",
        "origin_name": "Rwanda",
        "country_code": "+250",
        "iso": "RW"
    },
    {
        "en_name": "Saint Helena",
        "origin_name": "Saint Helena",
        "country_code": "+290",
        "iso": "SH"
    },
    {
        "en_name": "Saint Kitts and Nevis",
        "origin_name": "Saint Kitts and Nevis",
        "country_code": "+1",
        "iso": "KN"
    },
    {
        "en_name": "Saint Lucia",
        "origin_name": "Saint Lucia",
        "country_code": "+1",
        "iso": "LC"
    },
    {
        "en_name": "Saint Pierre and Miquelon",
        "origin_name": "Saint Pierre and Miquelon",
        "country_code": "+508",
        "iso": "PM"
    },
    {
        "en_name": "Saint Vincent and the Grenadines",
        "origin_name": "Saint Vincent and the Grenadines",
        "country_code": "+1",
        "iso": "VC"
    },
    {
        "en_name": "Samoa",
        "origin_name": "Samoa",
        "country_code": "+685",
        "iso": "WS"
    },
    {
        "en_name": "San Marino",
        "origin_name": "San Marino",
        "country_code": "+378",
        "iso": "SM"
    },
    {
        "en_name": "Sao Tome and Principe",
        "origin_name": "Sao Tome and Principe",
        "country_code": "+239",
        "iso": "ST"
    },
    {
        "en_name": "Saudi Arabia",
        "origin_name": "المملكة العربية السعودية",
        "country_code": "+966",
        "iso": "SA"
    },
    {
        "en_name": "Senegal",
        "origin_name": "Sénégal",
        "country_code": "+221",
        "iso": "SN"
    },
    {
        "en_name": "Serbia",
        "origin_name": "Србија",
        "country_code": "+381",
        "iso": "RS"
    },
    {
        "en_name": "Seychelles",
        "origin_name": "Seychelles",
        "country_code": "+248",
        "iso": "SC"
    },
    {
        "en_name": "Sierra Leone",
        "origin_name": "Sierra Leone",
        "country_code": "+232",
        "iso": "SL"
    },
    {
        "en_name": "Singapore",
        "origin_name": "Singapore",
        "country_code": "+65",
        "iso": "SG"
    },
    {
        "en_name": "Slovakia",
        "origin_name": "Slovensko",
        "country_code": "+421",
        "iso": "SK"
    },
    {
        "en_name": "Slovenia",
        "origin_name": "Slovenija",
        "country_code": "+386",
        "iso": "SI"
    },
    {
        "en_name": "Solomon Islands",
        "origin_name": "Solomon Islands",
        "country_code": "+677",
        "iso": "SB"
    },
    {
        "en_name": "Somalia",
        "origin_name": "Soomaaliya",
        "country_code": "+252",
        "iso": "SO"
    },
    {
        "en_name": "South Africa",
        "origin_name": "South Africa",
        "country_code": "+27",
        "iso": "ZA"
    },
    {
        "en_name": "South Georgia and the South Sandwich Islands",
        "origin_name": "South Georgia and the South Sandwich Islands",
        "country_code": "+500",
        "iso": "GS"
    },
    {
        "en_name": "Spain",
        "origin_name": "España",
        "country_code": "+34",
        "iso": "ES"
    },
    {
        "en_name": "Sri Lanka",
        "origin_name": "ශ්‍රී ලංකාව",
        "country_code": "+94",
        "iso": "LK"
    },
    {
        "en_name": "Sudan",
        "origin_name": "السودان",
        "country_code": "+249",
        "iso": "SD"
    },
    {
        "en_name": "Suriname",
        "origin_name": "Suriname",
        "country_code": "+597",
        "iso": "SR"
    },
    {
        "en_name": "Svalbard and Jan Mayen",
        "origin_name": "Svalbard and Jan Mayen",
        "country_code": "+47",
        "iso": "SJ"
    },
    {
        "en_name": "Swaziland",
        "origin_name": "Swaziland",
        "country_code": "+268",
        "iso": "SZ"
    },
    {
        "en_name": "Sweden",
        "origin_name": "Sverige",
        "country_code": "+46",
        "iso": "SE"
    },
    {
        "en_name": "Switzerland",
        "origin_name": "Schweiz",
        "country_code": "+41",
        "iso": "CH"
    },
    {
        "en_name": "Syrian Arab Republic",
        "origin_name": "سوريا",
        "country_code": "+963",
        "iso": "SY"
    },
    {
        "en_name": "Taiwan, Province of China",
        "origin_name": "台灣",
        "country_code": "+886",
        "iso": "TW"
    },
    {
        "en_name": "Tajikistan",
        "origin_name": "Тоҷикистон",
        "country_code": "+992",
        "iso": "TJ"
    },
    {
        "en_name": "Tanzania, United Republic of",
        "origin_name": "Tanzania, United Republic of",
        "country_code": "+255",
        "iso": "TZ"
    },
    {
        "en_name": "Thailand",
        "origin_name": "ประเทศไทย",
        "country_code": "+66",
        "iso": "TH"
    },
    {
        "en_name": "Timor-Leste",
        "origin_name": "Timor-Leste",
        "country_code": "+670",
        "iso": "TL"
    },
    {
        "en_name": "Togo",
        "origin_name": "Togo",
        "country_code": "+228",
        "iso": "TG"
    },
    {
        "en_name": "Tokelau",
        "origin_name": "Tokelau",
        "country_code": "+690",
        "iso": "TK"
    },
    {
        "en_name": "Tonga",
        "origin_name": "Tonga",
        "country_code": "+676",
        "iso": "TO"
    },
    {
        "en_name": "Trinidad and Tobago",
        "origin_name": "Trinidad and Tobago",
        "country_code": "+1",
        "iso": "TT"
    },
    {
        "en_name": "Tunisia",
        "origin_name": "تونس",
        "country_code": "+216",
        "iso": "TN"
    },
    {
        "en_name": "Turkey",
        "origin_name": "Türkiye",
        "country_code": "+90",
        "iso": "TR"
    },
    {
        "en_name": "Turkmenistan",
        "origin_name": "Türkmenistan",
        "country_code": "+993",
        "iso": "TM"
    },
    {
        "en_name": "Turks and Caicos Islands",
        "origin_name": "Turks and Caicos Islands",
        "country_code": "+1",
        "iso": "TC"
    },
    {
        "en_name": "Tuvalu",
        "origin_name": "Tuvalu",
        "country_code": "+688",
        "iso": "TV"
    },
    {
        "en_name": "Uganda",
        "origin_name": "Uganda",
        "country_code": "+256",
        "iso": "UG"
    },
    {
        "en_name": "Ukraine",
        "origin_name": "Україна",
        "country_code": "+380",
        "iso": "UA"
    },
    {
        "en_name": "United Arab Emirates",
        "origin_name": "الإمارات العربية المتحدة",
        "country_code": "+971",
        "iso": "AE"
    },
    {
        "en_name": "United Kingdom",
        "origin_name": "United Kingdom",
        "country_code": "+44",
        "iso": "GB"
    },
    {
        "en_name": "United States",
        "origin_name": "United States",
        "country_code": "+1",
        "iso": "US"
    },
    {
        "en_name": "Uruguay",
        "origin_name": "Uruguay",
        "country_code": "+598",
        "iso": "UY"
    },
    {
        "en_name": "Uzbekistan",
        "origin_name": "O‘zbekiston",
        "country_code": "+998",
        "iso": "UZ"
    },
    {
        "en_name": "Vanuatu",
        "origin_name": "Vanuatu",
        "country_code": "+678",
        "iso": "VU"
    },
    {
        "en_name": "Venezuela",
        "origin_name": "Venezuela",
        "country_code": "+58",
        "iso": "VE"
    },
    {
        "en_name": "Viet Nam",
        "origin_name": "Việt Nam",
        "country_code": "+84",
        "iso": "VN"
    },
    {
        "en_name": "Virgin Islands, British",
        "origin_name": "Virgin Islands, British",
        "country_code": "+1",
        "iso": "VG"
    },
    {
        "en_name": "Virgin Islands, U.S.",
        "origin_name": "Virgin Islands, U.S.",
        "country_code": "+1",
        "iso": "VI"
    },
    {
        "en_name": "Wallis and Futuna",
        "origin_name": "Wallis and Futuna",
        "country_code": "+681",
        "iso": "WF"
    },
    {
        "en_name": "Western Sahara",
        "origin_name": "الصحراء الغربية",
        "country_code": "+212",
        "iso": "EH"
    },
    {
        "en_name": "Yemen",
        "origin_name": "اليمن",
        "country_code": "+967",
        "iso": "YE"
    },
    {
        "en_name": "Zambia",
        "origin_name": "Zambia",
        "country_code": "+260",
        "iso": "ZM"
    },
    {
        "en_name": "Zimbabwe",
        "origin_name": "Zimbabwe",
        "country_code": "+263",
        "iso": "ZW"
    }
];

export default countries;