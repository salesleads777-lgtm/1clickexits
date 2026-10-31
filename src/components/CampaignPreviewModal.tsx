import React from 'react';
import { X, ExternalLink, Globe, CheckCircle2, Shield, Search, ArrowRight } from 'lucide-react';

interface CampaignPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampaignPreviewModal: React.FC<CampaignPreviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border-2 border-emerald-950/20 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-emerald-950 text-white p-4 sm:p-5 flex items-center justify-between border-b border-emerald-900">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-900 rounded-lg text-amber-300">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block font-mono">
                LIVE TARGETED CAMPAIGN TRACKER
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Westgate Exit Landing Page + Google Ads Tracking
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-emerald-900/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700">
          
          {/* Live URL Container */}
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              TARGET URL & UTM ATTRIBUTION QUERY:
            </label>
            <div className="bg-slate-900 text-emerald-400 p-3.5 rounded-xl font-mono text-xs break-all border border-slate-800 flex items-center justify-between gap-3">
              <span className="select-all">
                https://timeshare.click/westgate-timeshare-exit?utm_source=google_ads&utm_campaign=high_intent_search
              </span>
              <a
                href="https://timeshare.click/westgate-timeshare-exit?utm_source=google_ads&utm_campaign=high_intent_search"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded transition-colors"
                title="Open live URL"
              >
                <ExternalLink className="w-4 h-4 text-amber-300" />
              </a>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">UTM Source</span>
              <span className="font-mono text-slate-900 font-bold text-xs mt-0.5 block">google_ads</span>
              <p className="text-[11px] text-slate-500 mt-1">Paid Google Search Campaign (Desktop & Mobile)</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">UTM Campaign</span>
              <span className="font-mono text-slate-900 font-bold text-xs mt-0.5 block">high_intent_search</span>
              <p className="text-[11px] text-slate-500 mt-1">Keywords: "cancel westgate contract", "exit westgate timeshare"</p>
            </div>
          </div>

          {/* Landing Page Mechanics */}
          <div className="border border-slate-200 rounded-xl p-4 bg-emerald-50/40">
            <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
              <Shield className="w-4 h-4 text-emerald-800" />
              How 1CLICK EXITS Captures These Inquiries
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              When a distressed timeshare owner searches on Google or Facebook for developer cancellation help, our network routes them to developer-specific landing pages (such as Westgate, Diamond, Bluegreen, and Wyndham). The owner fills out the multi-step grievance qualification form, which instantly triggers an API webhook into the <strong>1CLICK EXITS</strong> software stream.
            </p>
          </div>

          {/* Verified Traffic Invariant Checklist */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-900 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>100% TCPA compliance & express opt-in consent recorded with client IP & timestamp</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-900 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Immediate removal from shared pool once claimed by an active user</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-900 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Direct export formatting compatible with all major sales dialers</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-lg border border-slate-300 text-xs transition-colors"
          >
            Close Preview
          </button>

          <a
            href="https://1clickleads.com/b/exit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-900 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs transition-colors shadow-xs"
          >
            <span>Get 1CLICK EXITS Now ($1,297/Yr · $108/Mo)</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
          </a>
        </div>

      </div>
    </div>
  );
};
