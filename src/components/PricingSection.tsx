import React, { useState } from 'react';
import { 
  Check, Download, ArrowRight, ShieldCheck, Zap, 
  Lock, Star, Sparkles, TrendingUp, DollarSign, Calendar
} from 'lucide-react';
import goldSealImg from '../assets/images/gold_verified_seal_1791660225466.jpg';
import { PRICING_TIERS, PricingTier } from '../data/pricingData';

interface PricingSectionProps {
  onDownloadClick: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onDownloadClick }) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('month-12');
  const [sealSrc, setSealSrc] = useState(goldSealImg);

  const activeTier = PRICING_TIERS.find(t => t.id === selectedTierId) || PRICING_TIERS[4];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/25 to-white relative overflow-hidden">
      
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-emerald-900 bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300">
            <span>TRANSPARENT TIERS</span>
            <span>·</span>
            <span>100% TCPA COMPLIANT</span>
            <span>·</span>
            <span className="text-amber-800">MASSIVE SAVINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-display mt-4 tracking-tight uppercase">
            CHOOSE YOUR ACCESS PLAN
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            From 14-day test drives to our 63% off Annual Best Value license — every tier includes 650–1,500 daily live leads with zero per-lead fees.
          </p>
        </div>

        {/* Quick Tier Selection Cards Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {PRICING_TIERS.map((tier) => {
            const isSelected = tier.id === selectedTierId;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedTierId(tier.id)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all relative flex flex-col justify-between border-2 ${
                  isSelected 
                    ? 'bg-emerald-950 text-white border-amber-400 shadow-lg scale-[1.02] ring-2 ring-amber-400/30' 
                    : 'bg-white text-slate-900 border-slate-200 hover:border-emerald-300 hover:bg-slate-50 shadow-xs'
                }`}
              >
                {tier.bestValue && (
                  <span className="absolute -top-2.5 right-3 bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    BEST VALUE
                  </span>
                )}
                {tier.isTest && (
                  <span className="absolute -top-2.5 right-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    TEST DRIVE
                  </span>
                )}
                {tier.savingsPercentage && !tier.bestValue && (
                  <span className="absolute -top-2.5 right-3 bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                    {tier.savingsPercentage}
                  </span>
                )}

                <div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider block ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                    {tier.name}
                  </span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xl sm:text-2xl font-black font-mono">
                      {tier.formattedPrice}
                    </span>
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-200/40 text-[11px] font-mono">
                  <span className={`block font-bold ${isSelected ? 'text-emerald-300' : 'text-emerald-800'}`}>
                    {tier.dailyRate}
                  </span>
                  {tier.monthlyRate && (
                    <span className={`block text-[10px] ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {tier.monthlyRate}
                    </span>
                  )}
                  {tier.savingsVsMonthly && (
                    <span className={`block text-[10px] font-semibold mt-0.5 ${isSelected ? 'text-amber-400' : 'text-emerald-700'}`}>
                      {tier.savingsVsMonthly}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Selected Tier Spotlight & Guarantee Column */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Selected Tier Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-3 border-amber-400 shadow-2xl p-6 sm:p-8 relative ring-2 ring-amber-400/20 flex flex-col justify-between">
            
            {activeTier.bestValue && (
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs px-4 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>63% SAVINGS · BEST VALUE ANNUAL</span>
              </div>
            )}

            <div>
              <div className="border-b border-slate-100 pb-5 mb-6">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    1CLICK EXITS DISPATCH ACCESS · {activeTier.durationLabel}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    100% TCPA COMPLIANT
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-display mt-1">
                  {activeTier.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {activeTier.description}
                </p>

                {/* Big Price Display */}
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="text-5xl sm:text-6xl font-black text-emerald-950 font-mono tracking-tight">
                    {activeTier.formattedPrice}
                  </span>
                  <div className="text-left font-mono">
                    <span className="text-emerald-800 font-extrabold text-sm sm:text-base block">
                      {activeTier.dailyRate}
                    </span>
                    {activeTier.monthlyRate && (
                      <span className="text-slate-500 text-xs block">
                        Equivalent to {activeTier.monthlyRate}
                      </span>
                    )}
                  </div>
                </div>

                {/* Savings Breakdown Box */}
                {activeTier.savingsVsMonthly ? (
                  <div className="mt-4 p-3.5 bg-gradient-to-r from-emerald-50 via-amber-50/70 to-emerald-50 rounded-2xl border border-amber-300 text-slate-900">
                    <div className="flex items-center justify-between pb-2 border-b border-amber-200">
                      <span className="text-xs font-extrabold uppercase text-amber-950 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-emerald-700" />
                        Savings Breakdown vs. Monthly
                      </span>
                      <span className="text-xs sm:text-sm font-black text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300 font-mono">
                        {activeTier.savingsVsMonthly}
                      </span>
                    </div>

                    <div className="mt-2 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Effective Daily Rate:</span>
                        <span className="font-bold font-mono text-emerald-900">{activeTier.dailyRate}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-700">
                        <span>Cost for single broker lead:</span>
                        <span className="line-through text-rose-600 font-mono">$180 – $350 each</span>
                      </div>
                      <p className="text-[11px] text-emerald-900 font-semibold pt-1">
                        ★ You get 650–1,500 daily fresh leads with zero per-lead fees.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-center justify-between">
                    <span>Daily Lead Volume:</span>
                    <span className="font-bold text-emerald-900 font-mono">650–1,500 Live Leads / Day</span>
                  </div>
                )}
              </div>

              {/* Tier Specific Feature Checklist */}
              <div className="space-y-3 mb-8 text-xs sm:text-sm text-slate-700">
                {activeTier.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button for Selected Tier */}
            <div id="download-cta">
              <a
                href={activeTier.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onDownloadClick}
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl text-base sm:text-lg font-black text-white bg-emerald-900 hover:bg-emerald-800 active:scale-[0.98] shadow-xl shadow-emerald-950/20 border-2 border-amber-300 transition-all group"
              >
                <Download className="w-5 h-5 text-amber-300 group-hover:-translate-y-0.5 transition-transform" />
                <span>START {activeTier.name} ({activeTier.formattedPrice})</span>
                <ArrowRight className="w-5 h-5 text-amber-300 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <p className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-700" />
                <span>Instant redirect to secure checkout & software download portal: <strong>1clickleads.com/b/exit</strong></span>
              </p>
            </div>

          </div>

          {/* Right Column: Value Guarantee & Savings Breakdown Summary (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Guarantee Seal Box */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md text-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full overflow-hidden p-1 bg-gradient-to-tr from-amber-400 via-amber-200 to-amber-500 shadow-lg border-4 border-amber-300 mb-4">
                <img 
                  src={sealSrc} 
                  alt="1CLICK EXITS 100% Verified Source Dispatch Guarantee Seal" 
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (sealSrc !== '/assets/images/gold_verified_seal_1791660225466.jpg') {
                      setSealSrc('/assets/images/gold_verified_seal_1791660225466.jpg');
                    }
                  }}
                />
              </div>

              <div className="flex items-center justify-center gap-1 text-amber-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                100% TCPA Compliant Guarantee
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Every single inquiry comes with express written consent, verified IP address, and timestamped audit logs. No shared broker lists. No recycled phone sheets.
              </p>
            </div>

            {/* Savings Comparison Callout */}
            <div className="bg-emerald-950 text-white p-5 rounded-2xl border border-emerald-900 shadow-md">
              <span className="text-[10px] text-amber-300 font-mono uppercase font-bold tracking-wider block">
                MAXIMUM CLOSER ROI
              </span>
              <h4 className="text-base font-bold mt-1 text-white">
                Why 12 Months Is The #1 Choice
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                By choosing the 12-Month plan ($1,297), you lock in an ultra-low rate of <strong>$108.08/mo ($3.60/day)</strong> and pocket <strong>$2,267.00 in total savings</strong> vs. paying monthly.
              </p>

              <button
                type="button"
                onClick={() => setSelectedTierId('month-12')}
                className="mt-3 w-full py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg transition-colors"
              >
                Switch to 12-Month Best Value ($1,297)
              </button>
            </div>

          </div>

        </div>

        {/* Comprehensive Pricing & Savings Breakdown Matrix Table */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden mb-12">
          
          <div className="bg-emerald-950 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] text-amber-300 font-mono uppercase font-bold tracking-wider block">
                COMPLETE COMPARISON MATRIX
              </span>
              <h3 className="text-lg font-black text-white font-display">
                All 5 Access Tiers & Savings Breakdown
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>All tiers include 650–1,500 LIVE leads/day</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 font-mono text-[11px] uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4 sm:px-6">Plan / Access Tier</th>
                  <th className="py-3 px-4 sm:px-6">Total Price</th>
                  <th className="py-3 px-4 sm:px-6">Effective Monthly</th>
                  <th className="py-3 px-4 sm:px-6">Daily Cost</th>
                  <th className="py-3 px-4 sm:px-6">Savings vs Monthly</th>
                  <th className="py-3 px-4 sm:px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PRICING_TIERS.map((tier) => {
                  const isBest = tier.bestValue;
                  return (
                    <tr 
                      key={tier.id}
                      className={`hover:bg-slate-50 transition-colors ${isBest ? 'bg-amber-50/40 font-medium' : ''}`}
                    >
                      <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                        <div className="flex items-center gap-2">
                          <span>{tier.name}</span>
                          {isBest && (
                            <span className="bg-amber-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded uppercase font-mono">
                              BEST VALUE
                            </span>
                          )}
                          {tier.isTest && (
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                              TEST ACCESS
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-500 block font-normal mt-0.5">
                          {tier.durationLabel} · 650–1,500 daily leads
                        </span>
                      </td>

                      <td className="py-4 px-4 sm:px-6 font-black font-mono text-base text-slate-950">
                        {tier.formattedPrice}
                      </td>

                      <td className="py-4 px-4 sm:px-6 font-mono font-semibold text-slate-700">
                        {tier.monthlyRate || '—'}
                      </td>

                      <td className="py-4 px-4 sm:px-6 font-mono font-bold text-emerald-800">
                        {tier.dailyRate}
                      </td>

                      <td className="py-4 px-4 sm:px-6">
                        {tier.savingsVsMonthly ? (
                          <div className="flex flex-col">
                            <span className="text-emerald-800 font-bold font-mono text-xs">
                              {tier.savingsVsMonthly}
                            </span>
                            <span className="text-[10px] text-emerald-600 font-semibold">
                              ({tier.savingsPercentage})
                            </span>
                          </div>
                        ) : (
                          <span className="text-slate-400 font-mono text-xs">Baseline Rate</span>
                        )}
                      </td>

                      <td className="py-4 px-4 sm:px-6 text-right">
                        <a
                          href={tier.checkoutUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={onDownloadClick}
                          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                            isBest 
                              ? 'bg-emerald-900 hover:bg-emerald-800 text-white shadow-xs' 
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300'
                          }`}
                        >
                          <span>Select Plan</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-700" />
              <span>All plans include instant software client download & authentication key: <strong>1clickleads.com/b/exit</strong></span>
            </div>
            <div className="font-semibold text-emerald-900">
              Zero Per-Lead Fees Across All Tiers
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
