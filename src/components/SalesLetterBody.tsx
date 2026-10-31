import React from 'react';
import { 
  CheckCircle2, XCircle, ArrowRight, ShieldCheck, Sparkles, 
  Flame, TrendingUp, Zap, Download, Layers, Users, PhoneCall 
} from 'lucide-react';

interface SalesLetterBodyProps {
  onDownloadClick: () => void;
}

export const SalesLetterBody: React.FC<SalesLetterBodyProps> = ({ onDownloadClick }) => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sales Letter Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded border border-amber-300">
            A Direct Message To Timeshare Exit Closers, Sales Directors & Agency Owners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display mt-4 leading-tight text-balance">
            Stop Burning Cash On Recycled Lead Sheets. Tap Into 650–1,500+ Live Daily Exit Inquiries.
          </h2>
          <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
            Why pay $150 to $300 per lead to brokers who sell the same name to five different floors? Here is the exact direct-dispatch software system that levels the playing field.
          </p>
        </div>

        {/* Comparison: The Old Way vs The 1CLICK EXITS Way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Old Way */}
          <div className="bg-rose-50/50 rounded-2xl p-6 sm:p-8 border border-rose-200">
            <div className="flex items-center gap-2.5 text-rose-800 font-bold text-base mb-4">
              <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>THE OLD WAY (Lead Brokers & Recycled Lists)</span>
            </div>
            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold mt-0.5">✕</span>
                <span>Paying exorbitant $150–$350 per-lead fees with no exclusivity guarantees.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold mt-0.5">✕</span>
                <span>Calling stale leads 48 to 72 hours late after three competitors already reached them.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold mt-0.5">✕</span>
                <span>Zero insight into actual maintenance fee debt, mortgage balance, or dispute grounds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold mt-0.5">✕</span>
                <span>Sales reps waste 70% of their day dialing disconnected or furious numbers.</span>
              </li>
            </ul>
          </div>

          {/* The 1CLICK EXITS Way */}
          <div className="bg-emerald-50/60 rounded-2xl p-6 sm:p-8 border-2 border-emerald-700/60 shadow-sm relative">
            <div className="absolute top-4 right-4 bg-emerald-900 text-amber-300 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase font-mono">
              The Unfair Advantage
            </div>
            <div className="flex items-center gap-2.5 text-emerald-950 font-bold text-base mb-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>THE 1CLICK EXITS WAY ($1,297/Year · $108/Month)</span>
            </div>
            <ul className="space-y-3.5 text-sm text-slate-800 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                <span><strong>650–1,500+ fresh inquiries daily</strong> directly from 100+ exit landing pages.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                <span><strong>100% TCPA compliant:</strong> express written consent, verified IP, and timestamped opt-in audit trail on every inquiry.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                <span><strong>Real-time dispatch alerts</strong> — claim leads within seconds of submission.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                <span><strong>Full owner dossier included:</strong> exact annual fees, mortgage balance & grievances.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold mt-0.5">✓</span>
                <span><strong>Zero per-lead fees forever:</strong> unlimited claims for one flat $1,297 annual license (just $108/mo).</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Feature List (Exact Prompt Requirements) */}
        <div className="bg-gradient-to-br from-emerald-950 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-amber-400 relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-8">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-wider font-bold">
              Software Capabilities Overview
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display mt-2">
              1CLICK EXITS Gives Your Sales Team:
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              Everything required to maintain high closing ratios and fuel your dialers with high-intent timeshare owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs">
              <div className="p-2 bg-emerald-800/60 rounded-lg text-amber-300 shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">650–1,500+ Incoming Inquiries Per User/Day</h4>
                <p className="text-xs text-slate-300 mt-1">High volume stream ensuring your sales floor never runs out of active leads to work.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs">
              <div className="p-2 bg-emerald-800/60 rounded-lg text-amber-300 shrink-0">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Hundreds of Exit-Focused Landing Pages</h4>
                <p className="text-xs text-slate-300 mt-1">Targeted specifically by developer (Westgate, Diamond, Hilton, Bluegreen, Wyndham, etc.).</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs">
              <div className="p-2 bg-emerald-800/60 rounded-lg text-amber-300 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Google Ads + Meta Ads + High-Intent Traffic</h4>
                <p className="text-xs text-slate-300 mt-1">Proprietary paid search and social campaigns driving homeowners actively seeking cancellation.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs">
              <div className="p-2 bg-emerald-800/60 rounded-lg text-amber-300 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Real-Time Lead Notifications</h4>
                <p className="text-xs text-slate-300 mt-1">Instant sound chimes and visual toast alerts when new leads arrive, so you can claim first.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs">
              <div className="p-2 bg-emerald-800/60 rounded-lg text-amber-300 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Full Owner & Resort Information</h4>
                <p className="text-xs text-slate-300 mt-1">Includes resort name, maintenance fee amount, mortgage owed, years owned, and specific grievance.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs">
              <div className="p-2 bg-emerald-800/60 rounded-lg text-amber-300 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Claim and Secure Incoming Leads</h4>
                <p className="text-xs text-slate-300 mt-1">Lock claimed inquiries directly to your private account vault, removing them from other reps.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs">
              <div className="p-2 bg-emerald-800/60 rounded-lg text-amber-300 shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Download Claimed Leads Directly to Your Dialer</h4>
                <p className="text-xs text-slate-300 mt-1">Instant 1-click export to Excel (.XLSX) and CSV formatted for Mojo, PhoneBurner, Convoso, and ReadyMode.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xs">
              <div className="p-2 bg-emerald-800/60 rounded-lg text-amber-300 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Unlimited Leads — NO Per-Lead Fees</h4>
                <p className="text-xs text-slate-300 mt-1">Never pay per-lead markups again. One flat $1,297 annual subscription ($108/month) unlocks full unrestricted access.</p>
              </div>
            </div>

          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300">
              Ready to install 1CLICK EXITS and connect your sales floor today?
            </div>
            <a
              href="https://1clickleads.com/b/exit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onDownloadClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-400/20"
            >
              <span>GET STARTED TODAY</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* The Closer ROI Math Block */}
        <div className="bg-amber-50/60 border-2 border-amber-300 rounded-2xl p-6 sm:p-8 text-slate-900 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/70 px-2.5 py-0.5 rounded">
                The Simple Economics
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-display text-slate-950 mt-2">
                Close Just ONE Deal to 4X–7X Your $1,297 Investment
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-xl">
                The standard timeshare cancellation retainer ranges between <strong>$4,500 and $9,500</strong>. At just <strong>$1,297/year (only ~$108/month or $3.55/day)</strong>, claiming and closing even a single verified case with our 100% TCPA compliant dossier intelligence pays for your software license many times over on day one.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-amber-300 shadow-sm text-center shrink-0 w-full md:w-auto">
              <span className="text-xs text-slate-500 font-semibold uppercase block">Flat Annual Cost</span>
              <span className="text-3xl sm:text-4xl font-black text-emerald-950 font-mono block mt-0.5">$1,297</span>
              <div className="mt-1 flex items-center justify-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                <span>~$108 / Month</span>
                <span>·</span>
                <span>$3.55 / Day</span>
              </div>
              <span className="text-[10px] text-slate-500 block mt-1">365 Days Unlimited Access</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
