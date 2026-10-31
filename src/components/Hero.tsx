import React from 'react';
import { Download, ExternalLink, ShieldCheck, Zap, Database, ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onOpenCampaignModal: () => void;
  onDownloadClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCampaignModal, onDownloadClick }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-white">
      {/* Subtle gold / emerald background accents */}
      <div className="absolute top-0 inset-x-0 h-40 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Unboxed editorial kicker */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-wide text-emerald-900 mb-6 bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full shadow-xs flex-wrap justify-center">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>DIRECT-LINE REAL-TIME DISPATCH</span>
            <span className="text-slate-300">·</span>
            <span className="text-emerald-950 font-bold bg-emerald-200/60 px-2 py-0.5 rounded text-[11px] uppercase tracking-wider">100% TCPA COMPLIANT</span>
            <span className="text-slate-300">·</span>
            <span className="text-amber-800 font-bold">100+ DEEP LANDING PAGES</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.12] mb-6 text-balance">
            THE TIMESHARE EXIT LEAD STREAM{' '}
            <span className="text-emerald-900 block mt-1">
              YOU’VE BEEN WAITING FOR
            </span>
          </h1>

          {/* Subtitle / Lead Paragraph */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 font-normal leading-relaxed mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-slate-950">650–1,500+</span> fresh timeshare exit inquiries per user/day generated through hundreds of targeted exit landing pages, Google Ads, Meta Ads and other high-intent traffic sources. <strong className="text-emerald-900 font-semibold">All incoming leads are 100% TCPA compliant</strong> with express written consent, verified IP, and timestamped opt-in logging.
          </p>

          {/* Primary CTA Decision Area */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#pricing"
              onClick={onDownloadClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-extrabold text-white bg-emerald-900 hover:bg-emerald-800 active:scale-[0.98] shadow-lg shadow-emerald-950/15 border border-emerald-950/20 transition-all group"
            >
              <Download className="w-5 h-5 text-amber-300 group-hover:-translate-y-0.5 transition-transform" />
              <span>Get 1CLICK EXITS (Plans From $197 · Best Value $1,297/Yr)</span>
              <ArrowRight className="w-5 h-5 text-amber-300 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#video-demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm transition-all"
            >
              <Play className="w-4 h-4 text-emerald-800 fill-emerald-800" />
              <span>Watch Software Demo</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600 mb-12">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-900">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>100% TCPA Compliant Leads</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>14-Day Test ($197) to Annual ($1,297)</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <div className="flex items-center gap-1.5 text-slate-800 font-semibold font-mono">
              Save up to <span className="text-emerald-700 font-bold ml-1">$2,267 (63% OFF)</span>
            </div>
          </div>

          {/* Live Targeted Campaign Box (Mandatory User Requirement) */}
          <div className="text-left bg-white rounded-2xl border border-amber-300/80 shadow-md p-5 sm:p-6 mb-8 relative overflow-hidden ring-1 ring-amber-400/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                  Live Proof · Active Campaign
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
                  See an example of one of the live targeted campaigns:
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  View Live Westgate Exit Landing Page + Google Ads Tracking URL
                </p>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <button
                  type="button"
                  onClick={onOpenCampaignModal}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
                >
                  Inspect Tracking Parameters
                </button>
                <a
                  href="https://timeshare.click/westgate-timeshare-exit?utm_source=google_ads&utm_campaign=high_intent_search"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-emerald-900 hover:bg-emerald-800 rounded-lg shadow-xs transition-colors whitespace-nowrap"
                >
                  <span>Open URL</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
                </a>
              </div>
            </div>

            <div className="mt-4 bg-slate-900 text-slate-200 p-3.5 rounded-xl font-mono text-xs sm:text-sm flex items-center justify-between gap-3 overflow-x-auto border border-slate-800">
              <span className="text-emerald-400 font-semibold select-all">
                https://timeshare.click/westgate-timeshare-exit?utm_source=google_ads&utm_campaign=high_intent_search
              </span>
              <span className="text-amber-400 text-xs shrink-0 font-sans font-bold bg-slate-800 px-2 py-0.5 rounded">
                LIVE GOOGLE ADS
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
