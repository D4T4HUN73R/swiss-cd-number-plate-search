// CD Number Plate Search - JavaScript Implementation
// Country mapping data from the original PHP implementation
const cdCountries = {
    1: 'Vatican City',
    2: 'Canada',
    3: 'Sri Lanka',
    4: 'Australia',
    5: 'Iran',
    6: 'Spain',
    7: 'Israel',
    8: 'Kuwait',
    9: 'USA',
    10: 'Brazil',
    11: 'Mexico',
    12: 'Ireland',
    13: 'Japan',
    14: 'New Zealand',
    15: 'Liechtenstein',
    16: 'Monaco',
    17: 'South Africa',
    18: 'Egypt',
    19: 'Syria',
    20: 'Algeria',
    21: 'Argentina',
    22: 'Austria',
    23: 'Bolivia',
    24: 'Chile',
    25: 'Colombia',
    26: 'South Korea',
    27: 'Costa Rica',
    28: 'Ivory Coast',
    29: 'Cuba',
    30: 'Ecuador',
    31: 'Finland',
    32: 'France',
    33: 'Ghana',
    34: 'Guatemala',
    35: 'Haiti',
    36: 'India',
    37: 'Indonesia',
    38: 'Iraq',
    39: 'Italy',
    40: 'Lebanon',
    41: 'Panama',
    42: 'Peru',
    43: 'Philippines',
    44: 'Portugal',
    45: 'Tunisia',
    46: 'Turkey',
    47: 'Uruguay',
    48: 'Venezuela',
    49: 'Vietnam',
    50: 'Democratic Republic of the Congo',
    51: 'Germany',
    52: 'Nigeria',
    53: 'Pakistan',
    54: 'Bulgaria',
    55: "People's Republic of China",
    56: 'Hungary',
    57: 'Poland',
    58: 'Romania',
    59: 'Serbia and Montenegro',
    60: 'Czech Republic',
    61: 'Saudi Arabia',
    62: 'Belgium',
    63: 'Denmark',
    64: 'Greece',
    65: 'Libya',
    66: 'Morocco',
    67: 'Norway',
    68: 'Netherlands',
    69: 'Sweden',
    70: 'Thailand',
    71: 'Jordan',
    72: 'United Kingdom',
    73: 'Russia',
    74: 'Luxembourg',
    75: 'Ethiopia',
    76: 'Dominican Republic',
    77: 'Paraguay',
    78: 'El Salvador',
    79: 'Taiwan',
    80: 'Jamaica',
    81: 'San Marino',
    82: 'Trinidad and Tobago',
    83: 'Yemen',
    84: 'Gabon',
    85: 'Malaysia',
    86: 'Liberia',
    87: 'Sudan',
    88: 'Mongolia',
    89: 'Malta',
    90: 'Belarus',
    91: 'Ukraine',
    92: 'Iceland',
    93: 'Democratic Republic of the Congo',
    94: 'Chad',
    95: 'Myanmar',
    96: 'Senegal',
    97: 'Nicaragua',
    98: 'Fiji',
    99: 'Honduras',
    100: 'Bangladesh',
    101: 'Cambodia',
    102: 'North Korea',
    103: 'Benin',
    104: 'Cyprus',
    105: 'Singapore',
    106: 'Central African Republic',
    107: 'Qatar',
    108: 'Oman',
    109: 'Cameroon',
    110: 'Madagascar',
    111: 'Kenya',
    112: 'Somalia',
    113: 'United Arab Emirates',
    114: 'Tanzania',
    115: 'Burundi',
    116: 'Democratic Republic of Yemen (until 1990)',
    117: 'Nepal',
    118: 'Bahrain',
    119: 'Afghanistan',
    120: 'Rwanda',
    121: 'Bhutan',
    122: 'Republic of Guinea',
    123: 'Zimbabwe',
    124: 'Hong Kong',
    125: 'Albania',
    126: 'Brunei',
    127: 'Dominica',
    128: 'Sao Tome and Principe',
    129: 'Equatorial Guinea',
    130: 'Belize',
    131: 'Mauritius',
    132: 'Kyrgyzstan',
    133: 'Slovenia',
    134: 'Croatia',
    135: 'Zambia',
    136: 'Bosnia and Herzegovina',
    137: 'Slovakia',
    138: 'Lithuania',
    139: 'Latvia',
    140: 'Jordan (special)',
    141: 'Angola',
    142: 'North Macedonia',
    143: 'The Gambia',
    144: 'Armenia',
    145: 'Estonia',
    146: 'Uganda',
    147: 'Kazakhstan',
    148: 'Eritrea',
    149: 'Georgia',
    150: 'Mauritania',
    151: 'Moldova',
    152: 'Azerbaijan',
    153: 'Lesotho',
    154: 'Barbados',
    155: 'Cape Verde',
    156: 'Mozambique',
    157: 'Andorra',
    158: 'Botswana',
    159: 'Mali',
    160: 'Uzbekistan',
    161: 'Burkina Faso',
    162: 'Namibia',
    163: 'Timor-Leste',
    164: 'Saint Kitts and Nevis',
    165: 'Swaziland',
    166: 'Djibouti',
    167: 'Maldives',
    168: 'Montenegro',
    169: 'Grenada',
    170: 'Niger',
    171: 'Tajikistan',
    172: 'Unknown',
    173: 'Kosovo',
    174: 'Palestine',
    175: 'Togo',
    176: 'Comoros',
    177: 'Turkmenistan',
    178: 'Unknown',
    179: 'Sierra Leone',
    180: 'Unknown',
    181: 'South Sudan',
    // Diplomatic prefix descriptions
    'CD': 'Official cars of the diplomatic missions or motor vehicles of the members of the diplomatic staff of these missions',
    'CC': 'Vehicles of consular posts headed by a professional official or motor vehicles of consular officials',  
    'AT': 'Vehicles belonging to members of the administrative and technical staff of diplomatic missions',
    // Organization codes (01-035) for international organizations based in Switzerland
    '01 ': 'UN - United Nations (GE, VD, VS, ZH)',
    '02 ': 'ILO - International Labour Organization (GE, VD)', 
    '03 ': 'WHO - World Health Organization (GE, VD)',
    '04 ': 'WMO - World Meteorological Organization (GE, VD)',
    '05 ': 'ITU - International Telecommunications Union (GE, VD)',
    '06 ': 'WIPO - World Intellectual Property Organization (GE, VD)',
    '07 ': 'CERN - European Organization for Nuclear Research (GE, VD)',
    '08 ': 'WTO - World Trade Organization (GE, VD)',
    '09 ': 'EFTA - European Free Trade Association (GE, VD)',
    '010 ': 'IOM - International Organization for Migration (GE, VD)',
    '011 ': 'IBE - International Bureau of Education (GE)',
    '012 ': 'IPU - Inter-Parliamentary Union (GE, VD)',
    '013 ': 'ICDO - International Civil Protection Organization (GE)',
    '014 ': 'APEF - Association of Iron Ore Exporting Countries (?)',
    '015 ': 'UPU - Universal Postal Union (BE, VD)',
    '016 ': 'OTIF - Intergovernmental Organization for International Carriage by Rail (BE)',
    '017 ': 'ADB - Asian Development Bank (BS)',
    '018 ': 'IHC - Independent Commission on Humanitarian Issues (?)',
    '019 ': 'WCED - World Commission on Environment and Development (GE)',
    '020 ': 'BIS - Bank for International Settlements (BL, BS)',
    '021 ': 'ITCB - International Textiles and Clothing Bureau (GE)',
    '022 ': 'SC - South Commission, The (GE)',
    '023 ': 'ILC - International Law Commission (?)',
    '024 ': 'ACTED - Agence de cooperation culturelle et technique (?)',
    '025 ': 'ICRC - International Committee of the Red Cross (GE)',
    '026 ': 'IFRC - International Federation of Red Cross and Red Crescent (GE, VD)',
    '027 ': 'ACWL - Advisory Center on WTO Law',
    '028 ': 'OSCE - Organization for Security and Co-operation in Europe Court',
    '029 ': 'GFATM - Global Fund to Fight AIDS, Tuberculosis and Malaria',
    '030 ': 'ICDO - International Civil Defence Organization (GE)',
    '031 ': 'ECA - Economic Community of African States (GE)',
    '032 ': 'SACD - Southern African Customs Union (GE)',
    '033 ': 'ILO - International Labour Organization (GE, VD)',
    '034 ': 'UN-HABITAT (GE)',
    '035 ': 'UNDP - UN Development Programme (GE)',
    // Permanent Observer Missions of International Organizations
    201: 'European Union (GE, VD)',
    202: 'Organization of American States',
    203: 'Organization of Central American Economic Integration',
    204: 'International Voluntary Service Secretariat (GE)',
    205: 'African Groundnut Council',
    206: 'AU (OAU) (GE)',
    207: 'Commonwealth (GE)',
    208: 'Arab League (GE)',
    209: 'American Transportation Organization (GE, VE)',
    210: 'Independent Development Commission (?)',
    211: 'Organization of the Islamic Conference (GE, VD)',
    212: 'G-15 (?)',
    213: 'International Organization of the Francophonie (GE)',
    214: 'International Bank for Reconstruction and Development Office in the UN and WTO (GE)',
    215: 'African, Caribbean and Pacific Group (GE)',
    216: 'Macau Economic and Trade Office to the WTO (GE)',
    217: 'Permanent Delegation of the Pacific Islands Forum (GE)',
    // International Disarmament Talks (3xx series)
    302: 'Canada (GE) 300/400 = international disarmament talks',
    304: 'Australia (GE) 300/400 = international disarmament talks',
    309: 'USA (GE) 300/400 = international disarmament talks',
    310: 'Brazil (GE) 300/400 = international disarmament talks',
    313: 'Japan (GE) 300/400 = international disarmament talks',
    324: 'Chile (GE) 300/400 = international disarmament talks',
    331: 'Finland (GE) 300/400 = international disarmament talks',
    332: 'France (GE) 300/400 = international disarmament talks',
    336: 'India (GE) 300/400 = international disarmament talks',
    339: 'Italy (GE) 300/400 = international disarmament talks',
    351: 'Germany (GE) 300/400 = international disarmament talks',
    355: 'China (GE) 300/400 = international disarmament talks',
    362: 'Belgium (GE) 300/400 = international disarmament talks',
    368: 'Netherlands (GE) 300/400 = international disarmament talks',
    372: 'United Kingdom (GE) 300/400 = international disarmament talks',
    373: 'Russia (GE) 300/400 = international disarmament talks',
    // WTO Missions (5xx series)
    500: 'CH EDA Agents of WTO (GE) 500/600/700 W.T.O.',
    502: 'Canada (GE) 500/600/700 W.T.O.',
    504: 'Australia (GE) 500/600/700 W.T.O.',
    509: 'USA (GE) 500/600/700 W.T.O.',
    510: 'Brazil (GE) 500/600/700 W.T.O.',
    511: 'Brazil (GE) 500/600/700 W.T.O.',
    514: 'New Zealand (GE) 500/600/700 W.T.O.',
    524: 'Chile (GE) 500/600/700 W.T.O.',
    525: 'Colombia (GE) 500/600/700 W.T.O.',
    527: 'Costa Rica (GE) 500/600/700 W.T.O.',
    530: 'Ecuador (GE) 500/600/700 W.T.O.',
    534: 'Guatemala (GE) 500/600/700 W.T.O.',
    535: 'Haiti (GE) 500/600/700 W.T.O.',
    536: 'India (GE) 500/600/700 W.T.O.',
    541: 'Panama (GE) 500/600/700 W.T.O.',
    543: 'Philippines (GE) 500/600/700 W.T.O.',
    546: 'Turkey (GE) 500/600/700 W.T.O.',
    547: 'Uruguay (GE) 500/600/700 W.T.O.',
    553: 'Pakistan (GE) 500/600/700 W.T.O.',
    554: 'Bulgaria (GE) 500/600/700 W.T.O.',
    555: 'China (GE) 500/600/700 W.T.O.',
    556: 'Hungary (GE) 500/600/700 W.T.O.',
    563: 'Denmark (GE) 500/600/700 W.T.O.',
    564: 'Greece (GE) 500/600/700 W.T.O.',
    567: 'Norway (GE) 500/600/700 W.T.O.',
    570: 'Thailand (GE) 500/600/700 W.T.O.',
    573: 'Russia (GE) 500/600/700 W.T.O.',
    576: 'Dominican Republic (GE) 500/600/700 W.T.O.',
    578: 'El Salvador (GE) 500/600/700 W.T.O.',
    581: 'San Marino (GE) 500/600/700 W.T.O.',
    585: 'Malaysia (GE) 500/600/700 W.T.O.',
    599: 'Honduras (GE) 500/600/700 W.T.O.',
    605: 'Singapore (GE) 500/600/700 W.T.O.',
    662: 'Namibia (GE) 500/600/700 W.T.O.',
    664: 'Saint Kitts and Nevis (GE) 500/600/700 W.T.O.',
    701: 'European Union (GE) 500/600/700 W.T.O.',
};

// DOM elements
const plateInput = document.getElementById('plateInput');
const searchBtn = document.getElementById('searchBtn');
const resultContainer = document.getElementById('resultContainer');
const resultContent = document.getElementById('resultContent');
const cantonField = document.getElementById('cantonField');
const firstNumberField = document.getElementById('firstNumberField');
const secondNumberField = document.getElementById('secondNumberField');
const plateTemplate = document.getElementById('plateTemplate');
const cdSelect = document.getElementById('cdSelect'); // Correct dropdown element

// Set initial default values
cantonField.textContent = 'BE';
firstNumberField.textContent = '001';
secondNumberField.textContent = '073';

// Update the hidden input field when user types in the plate template
function updateHiddenInput() {
    const cantonValue = cantonField.textContent.trim();
    const firstNumberValue = firstNumberField.textContent.trim();
    const secondNumberValue = secondNumberField.textContent.trim();
    const prefixValue = cdSelect.value; // Get selected prefix
    
    if (cantonValue && firstNumberValue && secondNumberValue) {
        plateInput.value = `${prefixValue} ${cantonValue} ${firstNumberValue}·${secondNumberValue}`;
    } else {
        plateInput.value = '';
    }
}

// Add explanation based on selected prefix
function updatePrefixExplanation() {
    // Remove any existing prefix explanation div - this prevents it from ever appearing in the results
    const existingExplanation = document.querySelector('.prefix-explanation');
    if (existingExplanation) {
        existingExplanation.remove();
    }
}

// Update hidden input when prefix changes and update explanation
cdSelect.addEventListener('change', function() {
    updateHiddenInput();
    updatePrefixExplanation();
});

// Handle input in plate fields
cantonField.addEventListener('input', updateHiddenInput);
firstNumberField.addEventListener('input', updateHiddenInput);
secondNumberField.addEventListener('input', updateHiddenInput);

// Initialize with default explanation
updatePrefixExplanation();

// Restrict input to appropriate characters
cantonField.addEventListener('keypress', (e) => {
    if (!/[A-Z]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        e.preventDefault();
    }
});

firstNumberField.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        e.preventDefault();
    }
});

secondNumberField.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        e.preventDefault();
    }
});

// Limit to appropriate lengths
cantonField.addEventListener('input', () => {
    if (cantonField.textContent.length > 2) {
        cantonField.textContent = cantonField.textContent.slice(0, 2);
    }
    updateHiddenInput();
});

firstNumberField.addEventListener('input', () => {
    if (firstNumberField.textContent.length > 3) {
        firstNumberField.textContent = firstNumberField.textContent.slice(0, 3);
    }
    updateHiddenInput();
});

secondNumberField.addEventListener('input', () => {
    if (secondNumberField.textContent.length > 3) {
        secondNumberField.textContent = secondNumberField.textContent.slice(0, 3);
    }
    updateHiddenInput();
});

// Prevent enter key from creating new lines in contenteditable fields
cantonField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchBtn.click(); // Trigger search
    } else if (e.key === 'ArrowRight' && cantonField.textContent.length >= 2) {
        firstNumberField.focus();
        e.preventDefault();
    }
});

firstNumberField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchBtn.click(); // Trigger search
    } else if (e.key === 'ArrowLeft' && cantonField.textContent.length <= 0) {
        cantonField.focus();
        e.preventDefault();
    } else if (e.key === 'ArrowRight' && firstNumberField.textContent.length >= 2) {
        secondNumberField.focus();
        e.preventDefault();
    }
});

secondNumberField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchBtn.click(); // Trigger search
    } else if (e.key === 'ArrowLeft' && secondNumberField.textContent.length <= 0) {
        firstNumberField.focus();
        e.preventDefault();
    }
});

// Search function with smart parsing for Swiss plates
function searchPlate(plate) {
    // Clean and parse the input
    let cleanPlate = plate.trim().toUpperCase();
    
    // Pattern to match: CD/CC/AT followed by canton code, then number, then dot, then number (CD BE 01·73 or CD BE 001·073)
    const matches = cleanPlate.match(/([A-Z]{2})\s*([A-Z]{2})\s*(\d{1,3})\s*[··]\s*(\d{1,3})/);
    
    if (!matches) {
        showResult('Invalid format. Please use CD/CC/AT XX XXX·XXX format (e.g., CD BE 001·073)', true);
        return;
    }
    
    const prefix = matches[1];
    const cantonCode = matches[2];
    const firstNum = parseInt(matches[3]);
    const secondNum = parseInt(matches[4]);
    
    // Validate range
    if (isNaN(firstNum) || isNaN(secondNum)) {
        showResult('Invalid numbers in plate. Please enter valid numeric values.', true);
        return;
    }
    
    let resultText = '';
    let country = '';
    let emoji = '🌐';
    let prefixDesc = '';
    
    // Get prefix description
    if (cdCountries[prefix]) {
        prefixDesc = cdCountries[prefix];
    }
    
    // Handle organization codes (01-35)
    if (secondNum >= 1 && secondNum <= 35) {
        const orgCodeKey = ('0' + secondNum.toString()).slice(-2) + ' ';
        if (cdCountries[orgCodeKey]) {
            country = cdCountries[orgCodeKey];
            emoji = getCountryEmoji(country);
        } else {
            country = "Organization not found in database";
        }
    }
    // Handle diplomatic missions (1-181) with special cases
    else if (secondNum >= 1 && secondNum <= 181) {
        if (cdCountries[secondNum]) {
            country = cdCountries[secondNum];
            emoji = getCountryEmoji(country);
        } else {
            country = "Country not found in database";
        }
    }
    // Handle specific permanent observer missions (201-217)
    else if (secondNum >= 201 && secondNum <= 217) {
        if (cdCountries[secondNum]) {
            country = cdCountries[secondNum];
            emoji = getCountryEmoji(country);
        } else {
            country = "Organization not found in database";
        }
    }
    // Handle international disarmament talks (3xx series)
    else if (secondNum >= 300 && secondNum <= 399) {
        if (cdCountries[secondNum]) {
            country = cdCountries[secondNum];
            emoji = getCountryEmoji(country);
        } else {
            country = "International Disarmament Talks";
        }
    }
    // Handle WTO missions (5xx series)
    else if (secondNum >= 500 && secondNum <= 599) {
        if (cdCountries[secondNum]) {
            country = cdCountries[secondNum];
            emoji = getCountryEmoji(country);
        } else {
            country = "World Trade Organization Mission";
        }
    } else {
        country = "No entry found!";
    }
    
    // Get diplomatic rank description based on first number
    const rankDesc = getRankDescription(firstNum);
    
    // Create a single unified result frame with the specified structure
    if (country !== "No entry found!" && country !== "Organization not found in database" && country !== "Country not found in database") {
        resultText = `
            <div class="result-frame">
                <div class="country-result">${emoji} ${country}</div>
                <div class="rank-result">Diplomatic Rank: ${firstNum || 'NO INPUT!'} - ${rankDesc}</div>
                <div class="rank-result">Prefix: ${prefix} - ${prefixDesc}</div>
            </div>
        `;
    } else {
        resultText = `
            <div class="result-frame">
                <div class="country-result">${country}</div>
                <div class="rank-result">Diplomatic Rank: ${firstNum || 'NO INPUT!'} - ${rankDesc}</div>
                <div class="rank-result">Prefix: ${prefix} - ${prefixDesc}</div>
            </div>
        `;
    }
    
    // Display result with smooth animation
    showResult(resultText);
    
    // Simulate logging functionality (would send data to server in production)
    logSearch(firstNum, country);
}

// Get emoji for country
function getCountryEmoji(country) {
    // This is a simplified version - in a real system, you'd have a more comprehensive mapping
    const emojiMap = {
        'Russia': '🇷🇺',
        'United Kingdom': '🇬🇧',
        'United States': '🇺🇸',
        'Canada': '🇨🇦',
        'France': '🇫🇷',
        'Germany': '🇩🇪',
        'Italy': '🇮🇹',
        'Japan': '🇯🇵',
        'Australia': '🇦🇺',
        'Brazil': '🇧🇷',
        'South Korea': '🇰🇷',
        'China': '🇨🇳',
        'Spain': '🇪🇸',
        'India': '🇮🇳',
        'Mexico': '🇲🇽',
        'Sweden': '🇸🇪',
        'Norway': '🇳🇴',
        'Switzerland': '🇨🇭',
        'Vatican City': '🇻🇦',
        'European Union': '🇪🇺',
        'United Arab Emirates': '🇦🇪',
        'Israel': '🇮🇱',
        'Egypt': '🇪🇬',
        'South Africa': '🇿🇦',
        'Iran': '🇮🇷',
        'Saudi Arabia': '🇸🇦',
        'Thailand': '🇹🇭',
        'Turkey': '🇹🇷',
        'Belgium': '🇧🇪',
        'Netherlands': '🇳🇱',
        'Greece': '🇬🇷',
        'Poland': '🇵🇱',
        'Romania': '🇷🇴',
        'Czech Republic': '🇨🇿',
        'Hungary': '🇭🇺',
        'Slovakia': '🇸🇰',
        'Slovenia': '🇸🇮',
        'Croatia': '🇭🇷',
        'Bulgaria': '🇧🇬',
        'Serbia and Montenegro': '🇷🇸',
        'Albania': '🇦🇱',
        'Macedonia': '🇲🇰',
        'Kosovo': '🇽🇰',
        'Georgia': '🇬🇪',
        'Armenia': '🇦🇲',
        'Azerbaijan': '🇦🇿',
        'Ukraine': '🇺🇦',
        'Belarus': '🇧🇾',
        'Moldova': '🇲🇩',
        'Lithuania': '🇱🇹',
        'Latvia': '🇱🇻',
        'Estonia': '🇪🇪',
        'Bosnia and Herzegovina': '🇧🇦',
        'Montenegro': '🇲🇪',
        'Bhutan': '🇧🇹',
        'Nepal': '🇳🇵',
        'Bangladesh': '🇧🇩',
        'Sri Lanka': '🇱🇰',
        'Pakistan': '🇵🇰',
        'Afghanistan': '🇦🇫',
        'Malaysia': '🇲🇾',
        'Singapore': '🇸🇬',
        'Indonesia': '🇮🇩',
        'Philippines': '🇵🇭',
        'Vietnam': '🇻🇳',
        'Cambodia': '🇰🇭',
        'Laos': '🇱🇦',
        'Myanmar': '🇲🇲',
        'Thailand': '🇹🇭',
        'Brunei': '🇧🇳',
        'Maldives': '🇲🇻',
        'Seychelles': '🇸🇨',
        'Mauritius': '🇲🇺',
        'Tonga': '🇹🇴',
        'Fiji': '🇫🇯',
        'Samoa': '🇼🇸',
        'Kiribati': '🇰🇮',
        'Nauru': '🇳🇷',
        'Palau': '🇵🇼',
        'Marshall Islands': '🇲🇭',
        'Micronesia': '🇫🇲',
        'Tuvalu': '🇹🇻',
        'Vanuatu': '🇻🇺',
        'Solomon Islands': '🇸🇧',
        'Papua New Guinea': '🇵🇬',
        'New Zealand': '🇳🇿',
        'Australia': '🇦🇺',
        'South Sudan': '🇸🇸',
        'Ethiopia': '🇪🇹',
        'Madagascar': '🇲🇬',
        'Mozambique': '🇲🇿',
        'Zambia': '🇿🇲',
        'Botswana': '🇧🇼',
        'Namibia': '🇳🇦',
        'Lesotho': '🇱🇸',
        'Swaziland': '🇸🇿',
        'South Africa': '🇿🇦',
        'Mauritania': '🇲🇷',
        'Malawi': '🇲🇼',
        'Zimbabwe': '🇿🇼',
        'Angola': '🇦🇴',
        'Democratic Republic of the Congo': '🇨🇩',
        'Republic of Guinea': '🇬🇳',
        'Sierra Leone': '🇸🇱',
        'Liberia': '🇱🇷',
        'Ghana': '🇬🇭',
        'Nigeria': '🇳🇬',
        'Senegal': '🇸🇳',
        'Mali': '🇲🇱',
        'Burkina Faso': '🇧🇫',
        'Togo': '🇹🇬',
        'Benin': '🇧🇯',
        'Niger': '🇳🇪',
        'Chad': '🇹🇩',
        'Central African Republic': '🇨🇫',
        'Cameroon': '🇨🇲',
        'Uganda': '🇺🇬',
        'Rwanda': '🇷🇼',
        'Burundi': '🇧🇮',
        'Tanzania': '🇹🇿',
        'Kenya': '🇰🇪',
        'Somalia': '🇸🇴',
        'Djibouti': '🇩🇯',
        'Eritrea': '🇪🇷',
        'Comoros': '🇰🇲',
        'Sao Tome and Principe': '🇸🇹',
        'Equatorial Guinea': '🇬🇶',
        'Gabon': '🇬🇦',
        'Cape Verde': '🇨🇻',
        'Macao': '🇲🇴',
        'Taiwan': '🇹🇼'
    };
    
    // Return emoji for the country or a default one if not found
    return emojiMap[country] || '🌐';
}

// Enhanced diplomatic rank descriptions
function getRankDescription(rank) {
    switch(rank) {
        case 1:
            return "Ambassador - Head of diplomatic mission";
        case 2: 
            return "Deputy Ambassador - Second-in-command diplomatic mission";
        default:
            return "Employee of the embassy - General staff member";
    }
}

// Display result with animation
function showResult(message, isError = false) {
    resultContainer.style.display = 'block';
    
    if (isError) {
        resultContent.innerHTML = `<div class="error-message">${message}</div>`;
    } else {
        resultContent.innerHTML = message;
    }
}

// Logging function (would send to server in production)
function logSearch(firstnum, country) {
    // In a real implementation this would send data to a server for logging
    console.log(`Search: Rank ${firstnum}, Country: ${country}`);
}

// Event listeners
searchBtn.addEventListener('click', () => {
    searchPlate(plateInput.value);
});

// Initialize with example input for user guidance
window.addEventListener('DOMContentLoaded', () => {
    plateInput.placeholder = "e.g., CD BE 001·073";
});