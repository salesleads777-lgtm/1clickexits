export interface LeadItem {
  id: string;
  name: string;
  location: string;
  state: string;
  developer: string;
  resortName: string;
  annualFee: number;
  mortgageBalance: number;
  yearsOwned: number;
  intentScore: number;
  urgency: 'Critical' | 'High' | 'Moderate';
  disputeReason: string;
  landingPage: string;
  utmSource: string;
  utmCampaign: string;
  claimed: boolean;
  claimedAt?: string;
  phoneMasked: string;
  emailMasked: string;
  ipAddress: string;
  tenYearBleed: number;
}

export const SAMPLE_LEADS: LeadItem[] = [
  {
    id: 'lead-101',
    name: 'Kenneth & Cheryl Adams',
    location: 'Kissimmee, FL',
    state: 'FL',
    developer: 'Westgate Resorts',
    resortName: 'Westgate Lakes Resort & Spa',
    annualFee: 2750,
    mortgageBalance: 18200,
    yearsOwned: 7,
    intentScore: 98,
    urgency: 'Critical',
    disputeReason: 'Signed during aggressive sales under false pretenses regarding exclusive resale assistance and promises that fees would remain capped. Demands complete contract cancellation.',
    landingPage: 'timeshare.click/westgate-timeshare-exit',
    utmSource: 'google_ads',
    utmCampaign: 'high_intent_search',
    claimed: false,
    phoneMasked: '(407) 849-••••',
    emailMasked: 'k.adams77••••@gmail.com',
    ipAddress: '172.56.21.94',
    tenYearBleed: 38450
  },
  {
    id: 'lead-102',
    name: 'Gregory & Teresa Ross',
    location: 'Branson, MO',
    state: 'MO',
    developer: 'Westgate Resorts',
    resortName: 'Westgate Branson Woods',
    annualFee: 2300,
    mortgageBalance: 14900,
    yearsOwned: 5,
    intentScore: 97,
    urgency: 'Critical',
    disputeReason: 'Never disclosed perpetual nature of deed or annual inflation adjustment clauses. Maintenance fees increased 68% in 4 years with no voting rights.',
    landingPage: 'timeshare.click/branson-timeshare-exit',
    utmSource: 'google_ads',
    utmCampaign: 'high_intent_search',
    claimed: false,
    phoneMasked: '(417) 334-••••',
    emailMasked: 'gross.ozarks••••@comcast.net',
    ipAddress: '107.77.228.45',
    tenYearBleed: 32538
  },
  {
    id: 'lead-103',
    name: 'James & Evelyn Thornton',
    location: 'Scottsdale, AZ',
    state: 'AZ',
    developer: 'Diamond Resorts',
    resortName: 'Scottsdale Links Resort',
    annualFee: 2350,
    mortgageBalance: 0,
    yearsOwned: 16,
    intentScore: 98,
    urgency: 'Critical',
    disputeReason: 'US Veteran on fixed pension. Resort developer continuously files collection threats after arbitrary 25% assessment levy. Paid off mortgage, seeking deed surrender.',
    landingPage: 'timeshare.click/scottsdale-timeshare-relief',
    utmSource: 'meta_ads',
    utmCampaign: 'retargeting_funnel',
    claimed: false,
    phoneMasked: '(480) 991-••••',
    emailMasked: 'thornton.vet••••@yahoo.com',
    ipAddress: '70.156.21.94',
    tenYearBleed: 34100
  },
  {
    id: 'lead-104',
    name: 'Richard & Brenda Sullivan',
    location: 'Las Vegas, NV',
    state: 'NV',
    developer: 'Hilton Grand Vacations',
    resortName: 'Elara, a Hilton Grand Vacations Club',
    annualFee: 2890,
    mortgageBalance: 16500,
    yearsOwned: 6,
    intentScore: 96,
    urgency: 'Critical',
    disputeReason: 'High-pressure closing tactics. Told points never expire, but dozens of hidden fees charged just to bank points. Demands immediate mortgage exit.',
    landingPage: 'timeshare.click/hilton-timeshare-exit',
    utmSource: 'google_ads',
    utmCampaign: 'hilton_search',
    claimed: false,
    phoneMasked: '(702) 414-••••',
    emailMasked: 'sullivan.lv••••@outlook.com',
    ipAddress: '174.64.91.205',
    tenYearBleed: 41820
  },
  {
    id: 'lead-105',
    name: 'Gary & Susan Peterson',
    location: 'Branson, MO',
    state: 'MO',
    developer: 'Bluegreen Vacations',
    resortName: 'The Falls Village Resort',
    annualFee: 1890,
    mortgageBalance: 8400,
    yearsOwned: 5,
    intentScore: 98,
    urgency: 'Critical',
    disputeReason: 'Pressured into 6-hour upgrade presentation. Promised developer buyback was guaranteed; developer later refused in writing.',
    landingPage: 'timeshare.click/bluegreen-timeshare-exit',
    utmSource: 'meta_ads',
    utmCampaign: 'retargeting_funnel',
    claimed: false,
    phoneMasked: '(417) 546-••••',
    emailMasked: 'petersongary••••@gmail.com',
    ipAddress: '107.77.228.45',
    tenYearBleed: 26800
  },
  {
    id: 'lead-106',
    name: 'Keith & Rebecca Montgomery',
    location: 'Orlando, FL',
    state: 'FL',
    developer: 'Wyndham Destinations',
    resortName: 'Wyndham Bonnet Creek',
    annualFee: 2500,
    mortgageBalance: 12400,
    yearsOwned: 4,
    intentScore: 95,
    urgency: 'High',
    disputeReason: 'Special assessment surprise bill of $3,200 issued for roof repairs never completed. Booking portal constantly unavailable during requested travel windows.',
    landingPage: 'timeshare.click/wyndham-timeshare-exit',
    utmSource: 'google_ads',
    utmCampaign: 'high_intent_search',
    claimed: false,
    phoneMasked: '(321) 768-••••',
    emailMasked: 'kmontgomery••••@aol.com',
    ipAddress: '97.105.88.12',
    tenYearBleed: 35900
  },
  {
    id: 'lead-107',
    name: 'Arthur & Dorothy Cunningham',
    location: 'Highland Village, TX',
    state: 'TX',
    developer: 'Marriott Vacation Club',
    resortName: 'Marriott Grand Chateau',
    annualFee: 3100,
    mortgageBalance: 0,
    yearsOwned: 12,
    intentScore: 96,
    urgency: 'Critical',
    disputeReason: 'Escalating annual maintenance fees exceeding family budget and perpetual contract clause preventing release to adult children. Urgent cancellation needed.',
    landingPage: 'timeshare.click/perpetual-contract-relief',
    utmSource: 'google_ads',
    utmCampaign: 'high_intent_search',
    claimed: true,
    claimedAt: 'Just now',
    phoneMasked: '(972) 317-••••',
    emailMasked: 'cunningham.art••••@verizon.net',
    ipAddress: '198.54.140.88',
    tenYearBleed: 44200
  }
];

export const CAMPAIGN_DOMAINS = [
  {
    domain: 'timeshare.click/westgate-timeshare-exit',
    fullUrl: 'https://timeshare.click/westgate-timeshare-exit?utm_source=google_ads&utm_campaign=high_intent_search',
    utmSource: 'google_ads',
    utmCampaign: 'high_intent_search',
    channel: 'Google Ads - High Intent PPC',
    channelType: 'Paid Search · High Intent',
    dailyVolume: '320 - 480 inquiries/day',
    verified: true
  },
  {
    domain: 'timeshare.click/bluegreen-timeshare-exit',
    fullUrl: 'https://timeshare.click/bluegreen-timeshare-exit?utm_source=meta_ads&utm_campaign=retargeting_funnel',
    utmSource: 'meta_ads',
    utmCampaign: 'retargeting_funnel',
    channel: 'Meta Retargeting Funnel',
    channelType: 'Social Retargeting · Nurture',
    dailyVolume: '240 - 390 inquiries/day',
    verified: true
  },
  {
    domain: 'timeshare.click/hilton-timeshare-exit',
    fullUrl: 'https://timeshare.click/hilton-timeshare-exit?utm_source=google_ads&utm_campaign=hilton_search',
    utmSource: 'google_ads',
    utmCampaign: 'hilton_search',
    channel: 'Google Ads - High Intent PPC',
    channelType: 'Paid Search · High Intent',
    dailyVolume: '180 - 310 inquiries/day',
    verified: true
  },
  {
    domain: 'timeshare.click/perpetual-contract-relief',
    fullUrl: 'https://timeshare.click/perpetual-contract-relief?utm_source=google_ads&utm_campaign=contract_dispute',
    utmSource: 'google_ads',
    utmCampaign: 'contract_dispute',
    channel: 'Google Ads - Legal Dispute Intent',
    channelType: 'Paid Search · Contract Cancellation',
    dailyVolume: '290 - 450 inquiries/day',
    verified: true
  }
];
