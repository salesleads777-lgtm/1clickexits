import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const FAQS = [
    {
      q: 'Are the incoming leads TCPA compliant?',
      a: 'Yes, 100%. Every timeshare owner inquiry generated through our network includes clear, prominent express written consent complying with all TCPA guidelines. The client’s timestamp, verified IP address, device metadata, and opt-in agreement are securely recorded, giving your sales floor complete compliance protection.'
    },
    {
      q: 'How does 1CLICK EXITS generate 650–1,500+ inquiries per day?',
      a: 'We operate a proprietary syndication network of over 100+ high-intent landing pages targeted specifically by developer (e.g. Westgate, Diamond Resorts, Bluegreen, Hilton Grand Vacations, Wyndham). High-intent paid Google Search Ads, Meta retargeting funnels, and organic cancellation inquiries are channeled into our dispatch API in real time.'
    },
    {
      q: 'What pricing plans are available and how does the savings breakdown work?',
      a: 'We offer five transparent tiers tailored to your sales operation: 14 Day Test Access ($197.00 | $14.07/day), 1 Month Access ($297.00 | $9.90/day), 3 Month Access ($497.00 | $165.66/mo — Save $394 vs. monthly), 6 Month Access ($797.00 | $132.83/mo — Save $985 vs. monthly), and our 12 Month Best Value Access ($1,297.00 | $108.08/mo | $3.60/day — Save a massive $2,267 vs. monthly). All tiers include 650–1,500 daily live TCPA-compliant exit leads with zero per-lead fees.'
    },
    {
      q: 'How does the "Claim" system protect exclusivity?',
      a: 'When an incoming lead arrives in the dispatch feed, any active user can inspect the preliminary data (developer, location, fee range). The moment you click "CLAIM LEAD", that inquiry is permanently locked into your private vault and removed from other users\' streams. This guarantees your closers are not battling other reps on the same file.'
    },
    {
      q: 'What dialers and CRMs are compatible with 1CLICK EXITS exports?',
      a: 'Our software provides 1-click downloads in standard Excel (.XLSX) and CSV formats pre-mapped with columns for first/last name, phone, email, state, developer, annual fee, mortgage balance, years owned, and client grievance. It works seamlessly with Mojo Dialer, PhoneBurner, Convoso, ReadyMode, GoHighLevel, HubSpot, and Salesforce.'
    },
    {
      q: 'Where do I download the software once I complete payment?',
      a: 'Immediately upon completing your license at 1clickleads.com/b/exit, you receive your unique authentication key and download access for the 1CLICK EXITS client. You can log in within 60 seconds and start receiving live leads.'
    },
    {
      q: 'What owner information is provided with each lead?',
      a: 'Unlike generic lists with just a name and number, 1CLICK EXITS delivers actionable owner intelligence: resort developer, resort property location, annual maintenance fee, mortgage balance, years owned, deed type (deeded week vs. points), exit urgency score, client IP address, and their exact stated grievance in their own words.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-display mt-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Everything you need to know about the 1CLICK EXITS live lead dispatch stream.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-900 transition-colors"
                >
                  <span className="text-balance">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-800' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
