import React, { useState } from 'react';
import { 
  Bell, Database, ShieldAlert, ArrowRight, CheckCircle2, 
  FileSpreadsheet, Lock, AlertTriangle, TrendingUp, Phone, Mail 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface WorkflowSectionProps {
  onDownloadClick: () => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onDownloadClick }) => {
  const [hasClaimedStep3, setHasClaimedStep3] = useState(false);

  const handleClaim = () => {
    setHasClaimedStep3(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#0f4c38', '#d4af37', '#10b981']
    });
  };

  return (
    <section id="workflow" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-extrabold text-xl sm:text-2xl font-display text-slate-900">
              1CLICK LEADS <span className="text-emerald-800 font-black">PRO</span>
            </span>
            <span className="text-slate-400 font-bold">—</span>
            <span className="text-emerald-900 font-bold text-sm uppercase tracking-wide">
              LIVE TIMESHARE EXIT DISPATCH
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 bg-white px-3.5 py-1.5 rounded-full border border-emerald-300 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>SECURE · REAL-TIME · 100% TCPA COMPLIANT</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-display tracking-tight uppercase">
            FROM CLICK TO CLAIM IN SECONDS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A 3-step workflow showing how live leads are captured, analyzed, and claimed — from first click to detailed dossier in seconds.
          </p>
        </div>

        {/* 3 Step Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          
          {/* STEP 1 */}
          <div className="bg-white rounded-2xl border-2 border-amber-300 shadow-lg p-6 flex flex-col justify-between relative ring-1 ring-amber-400/20">
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-center mb-4">
                <span className="bg-emerald-900 text-amber-300 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs border border-emerald-800">
                  STEP 1
                </span>
              </div>

              <h3 className="text-center text-lg font-black text-slate-950 uppercase tracking-tight mb-5">
                LIVE INCOMING LEAD ARRIVED
              </h3>

              {/* Alert Notification Toast */}
              <div className="bg-emerald-950 text-white rounded-xl p-3.5 mb-4 shadow-sm">
                <div className="flex items-center justify-between text-xs font-bold text-amber-300 mb-1">
                  <span className="flex items-center gap-1.5">
                    <Bell className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    LIVE INCOMING LEAD ARRIVED!
                  </span>
                  <span className="text-[10px] bg-emerald-900 text-emerald-200 px-1.5 py-0.5 rounded font-mono">just now</span>
                </div>
              </div>

              {/* Source landing page domain */}
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block mb-1">
                  SOURCE LANDING PAGE DOMAIN:
                </span>
                <div className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-200 text-xs font-mono">
                  <span className="truncate text-slate-800">timeshare.click/branson-timeshar...</span>
                  <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded shrink-0 ml-1 border border-amber-300">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Lead Details */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 mb-4">
                <h4 className="font-extrabold text-slate-900 text-base">Gregory & Teresa Ross</h4>
                <p className="text-xs text-slate-500">Branson, MO</p>

                <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                  <span className="bg-white border border-slate-300 px-2 py-0.5 rounded font-semibold text-slate-800">
                    Westgate Resorts
                  </span>
                  <span className="bg-amber-50 border border-amber-300 text-amber-900 font-bold px-2 py-0.5 rounded font-mono">
                    $2,300/yr Fee
                  </span>
                  <span className="bg-rose-50 border border-rose-300 text-rose-800 font-bold px-2 py-0.5 rounded font-mono">
                    Owes $14,900
                  </span>
                </div>

                <p className="mt-3 text-xs text-slate-600 italic bg-white p-2.5 rounded border border-slate-200">
                  "Never disclosed perpetual nature of deed or annual inflation adjustment..."
                </p>
              </div>
            </div>

            <button
              onClick={handleClaim}
              className="w-full py-3 bg-emerald-900 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-amber-300" />
              <span>CLAIM LEAD</span>
            </button>
          </div>

          {/* STEP 2 */}
          <div className="bg-white rounded-2xl border-2 border-amber-300 shadow-lg p-6 flex flex-col justify-between relative ring-1 ring-amber-400/20">
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-center mb-4">
                <span className="bg-emerald-900 text-amber-300 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs border border-emerald-800">
                  STEP 2
                </span>
              </div>

              <h3 className="text-center text-lg font-black text-slate-950 uppercase tracking-tight mb-5">
                DATABASE LEAD POOL UPDATED
              </h3>

              {/* 3 Metrics Block */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 text-center">
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">DATABASE POOL</span>
                  <span className="text-base sm:text-lg font-black text-slate-900 font-mono block mt-1">923+</span>
                  <span className="text-[9px] text-emerald-800 font-semibold block mt-0.5">2 Claimed · +923 New</span>
                </div>

                <div className="bg-amber-50/70 rounded-xl p-2.5 border border-amber-300 text-center">
                  <span className="text-[9px] uppercase font-bold text-amber-900 block">AVG MAINT FEE</span>
                  <span className="text-base sm:text-lg font-black text-amber-950 font-mono block mt-1">$2,755/yr</span>
                  <span className="text-[9px] text-amber-800 font-semibold block mt-0.5">High Pain Point</span>
                </div>

                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 text-center">
                  <span className="text-[9px] uppercase font-bold text-slate-500 block">DEBT CANCEL</span>
                  <span className="text-base sm:text-lg font-black text-slate-900 font-mono block mt-1">$584,300</span>
                  <span className="text-[9px] text-slate-600 font-semibold block mt-0.5">Mortgage + 5-yr fee</span>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-3 border border-emerald-200 text-center text-xs text-emerald-900 font-semibold mb-4">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>LIVE STREAM ACTIVE</span>
                </div>
                <p className="text-[11px] text-slate-600 font-normal">
                  Now 923+ leads streaming across 101+ active landing sites with real-time enrichment.
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5 mb-4">
                <div className="flex items-center justify-between">
                  <span>Owner IP Address:</span>
                  <span className="font-mono font-bold text-slate-800">107.77.228.45</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Device Timestamp:</span>
                  <span className="font-mono text-slate-800">10:14:22 EST</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Intent Validation:</span>
                  <span className="font-bold text-emerald-800">High Exit Priority</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleClaim}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <FileSpreadsheet className="w-4 h-4 text-slate-950" />
              <span>CLAIM & EXPORT TO EXCEL (.XLSX)</span>
            </button>
          </div>

          {/* STEP 3 */}
          <div className="bg-white rounded-2xl border-2 border-amber-300 shadow-lg p-6 flex flex-col justify-between relative ring-1 ring-amber-400/20">
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-center mb-4">
                <span className="bg-emerald-900 text-amber-300 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-xs border border-emerald-800">
                  STEP 3
                </span>
              </div>

              <h3 className="text-center text-lg font-black text-slate-950 uppercase tracking-tight mb-5">
                DEEP DOSSIER & RISK ANALYSIS
              </h3>

              <div className="bg-slate-900 text-white rounded-xl p-3.5 mb-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs">Dossier: Gregory & Teresa Ross</span>
                  <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    CRITICAL URGENCY
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">Branson, MO · 5 Years Contract</p>
                <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-emerald-400" />
                    (417) 334-••••
                  </span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3 text-amber-400" />
                    gross••••@comcast.net
                  </span>
                </div>
              </div>

              {/* 10-Year Bleed Calculation Highlight Card */}
              <div className="bg-gradient-to-br from-amber-50 to-amber-100/70 rounded-xl p-4 border-2 border-amber-400 mb-4 text-center">
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-950 block">
                  CLIENT'S 10-YEAR MAINTENANCE BLEED RISK (IF NOT EXITED)
                </span>
                <span className="text-3xl font-black text-amber-950 font-mono block mt-1">
                  $32,538
                </span>
                <p className="text-[11px] text-amber-900 mt-1 font-medium">
                  Based on $2,300/yr fee escalating at 7.5% annual developer rate.
                </p>

                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="bg-emerald-900 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
                    High Closer
                  </span>
                  <span className="bg-white border border-amber-300 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded">
                    Maximum Leverage
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs mb-4">
                <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                  CLIENT STATED GRIEVANCE & REASON FOR EXIT:
                </span>
                <p className="text-slate-800 italic">
                  "Never disclosed perpetual nature of deed or annual inflation adjustment clauses."
                </p>
              </div>
            </div>

            <button
              onClick={handleClaim}
              className={`w-full py-3 font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all ${
                hasClaimedStep3
                  ? 'bg-emerald-700 text-white'
                  : 'bg-emerald-900 hover:bg-emerald-800 text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-amber-300" />
              <span>{hasClaimedStep3 ? 'CLAIMED & SECURED IN VAULT' : 'CLAIM & REMOVE FROM DATABASE'}</span>
            </button>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-emerald-950 text-white rounded-2xl p-4 sm:p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-900 shadow-md">
          <div className="text-xs sm:text-sm font-semibold text-slate-200">
            <span className="text-amber-300 font-bold">1CLICK LEADS PRO</span> · LIVE LEAD STREAM · Real-Time · Secure · Accurate · Turn Clicks into Claimed Deals in Seconds
          </div>
          <a
            href="https://1clickleads.com/b/exit"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onDownloadClick}
            className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            Get Full Access ($1,297/Yr · $108/Mo)
          </a>
        </div>

      </div>
    </section>
  );
};
