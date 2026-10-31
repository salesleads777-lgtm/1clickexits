export interface PricingTier {
  id: string;
  name: string;
  durationLabel: string;
  price: number;
  formattedPrice: string;
  monthlyRate?: string;
  dailyRate: string;
  leadsPerDay: string;
  tcpaCompliant: boolean;
  savingsVsMonthly?: string;
  savingsPercentage?: string;
  popular?: boolean;
  bestValue?: boolean;
  isTest?: boolean;
  headline: string;
  description: string;
  checkoutUrl: string;
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'test-14-day',
    name: '14 DAY TEST ACCESS',
    durationLabel: '14 Days Access',
    price: 197.00,
    formattedPrice: '$197.00',
    dailyRate: '$14.07/day',
    leadsPerDay: '650–1,500 TCPA-Compliant LIVE Exit Leads Per Day',
    tcpaCompliant: true,
    isTest: true,
    headline: 'Low-Risk Test Drive for Sales Floors',
    description: 'Test the live stream speed, claim exclusive inquiries, and run sample files through your dialer before committing.',
    checkoutUrl: 'https://1clickleads.com/b/exit?plan=14day',
    features: [
      '650–1,500 TCPA-compliant live exit inquiries per day',
      'Real-time sound & visual dispatch alerts',
      'Full owner & resort dossiers (fees, mortgage, grievance)',
      '1-Click dialer exports (Excel .XLSX & CSV)',
      '14 days full software access with zero per-lead fees'
    ]
  },
  {
    id: 'month-1',
    name: '1 MONTH ACCESS',
    durationLabel: '1 Month (30 Days)',
    price: 297.00,
    formattedPrice: '$297.00',
    monthlyRate: '$297.00/mo',
    dailyRate: '$9.90/day',
    leadsPerDay: '650–1,500 LIVE Leads Per Day',
    tcpaCompliant: true,
    headline: 'Flexible Month-to-Month Access',
    description: 'Standard monthly access with no long-term contract. Ideal for individual closers or small floors.',
    checkoutUrl: 'https://1clickleads.com/b/exit?plan=1month',
    features: [
      '650–1,500 live leads streamed every day',
      '100% TCPA compliant express opt-in consent',
      'Unlimited claimed inquiries with exclusivity lock',
      'Compatible with Mojo, PhoneBurner, Convoso, ReadyMode',
      'Standard email & software support'
    ]
  },
  {
    id: 'month-3',
    name: '3 MONTH ACCESS',
    durationLabel: '3 Months (Quarterly)',
    price: 497.00,
    formattedPrice: '$497.00',
    monthlyRate: '$165.66/mo',
    dailyRate: '$5.52/day',
    leadsPerDay: '650–1,500 LIVE Leads Per Day',
    tcpaCompliant: true,
    savingsVsMonthly: 'Save $394.00 vs Monthly',
    savingsPercentage: '44% Savings',
    headline: 'Quarterly Growth Package',
    description: 'Cut your effective monthly cost down to $165.66/mo while maintaining an uninterrupted daily inquiry pipeline.',
    checkoutUrl: 'https://1clickleads.com/b/exit?plan=3month',
    features: [
      '650–1,500 live inquiries daily across 100+ landing pages',
      '100% TCPA compliance with verified IP tracking',
      'Save $394 compared to paying monthly ($891 vs $497)',
      'Unlimited private vault claims & dialer downloads',
      'Priority software license activation'
    ]
  },
  {
    id: 'month-6',
    name: '6 MONTH ACCESS',
    durationLabel: '6 Months (Semi-Annual)',
    price: 797.00,
    formattedPrice: '$797.00',
    monthlyRate: '$132.83/mo',
    dailyRate: '$4.42/day',
    leadsPerDay: '650–1,500 LIVE Leads Per Day',
    tcpaCompliant: true,
    popular: true,
    savingsVsMonthly: 'Save $985.00 vs Monthly',
    savingsPercentage: '55% Savings',
    headline: 'Semi-Annual Closer Powerhouse',
    description: 'Brings your cost down to just $4.42/day with massive savings for established sales operations.',
    checkoutUrl: 'https://1clickleads.com/b/exit?plan=6month',
    features: [
      '650–1,500 fresh inquiries streamed daily',
      '100% TCPA compliant opt-in audit logging',
      'Save $985 compared to paying monthly ($1,782 vs $797)',
      'Just $132.83/month ($4.42/day) flat cost',
      'Full resort dossiers & dispute analysis'
    ]
  },
  {
    id: 'month-12',
    name: '12 MONTH ACCESS',
    durationLabel: '12 Months (Full Year)',
    price: 1297.00,
    formattedPrice: '$1,297.00',
    monthlyRate: '$108.08/mo',
    dailyRate: '$3.60/day',
    leadsPerDay: '650–1,500 LIVE Leads Per Day',
    tcpaCompliant: true,
    bestValue: true,
    savingsVsMonthly: 'Save $2,267.00 vs Monthly',
    savingsPercentage: '63% Savings (Best Value)',
    headline: 'Ultimate Enterprise Annual License',
    description: 'The maximum ROI tier: unlocks 365 days of unlimited daily leads for less than a single broker lead per month!',
    checkoutUrl: 'https://1clickleads.com/b/exit?plan=12month',
    features: [
      '650–1,500 fresh inquiries streamed every day for 365 days',
      '100% TCPA compliant express written consent recorded',
      'Save a massive $2,267 compared to monthly ($3,564 vs $1,297)',
      'Just $108.08/month ($3.60/day — less than a cup of coffee)',
      'Unlimited claimed leads with zero per-lead fees forever',
      '30-Day Risk-Free Satisfaction Guarantee'
    ]
  }
];
