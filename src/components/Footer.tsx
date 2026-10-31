import React from 'react';
import { Target, ArrowRight, ShieldCheck, Mail, Lock } from 'lucide-react';

interface FooterProps {
  onDownloadClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadClick }) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-extrabold text-xl font-display">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-amber-400">
                <Target className="w-4 h-4" />
              </div>
              <span>
                1CLICK<span className="text-amber-400 font-black ml-0.5">EXITS</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              The premier real-time timeshare exit dispatch software. Streaming 650–1,500+ fresh inquiries daily from over 100+ targeted exit landing pages directly to your sales floor.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Contact Sales & Support: </span>
              <a href="mailto:salesleads777@gmail.com" className="text-amber-400 hover:underline font-mono">
                salesleads777@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Software Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#video-demo" className="hover:text-amber-400 transition-colors">
                  Interactive Video Demo
                </a>
              </li>
              <li>
                <a href="#source-tracking" className="hover:text-amber-400 transition-colors">
                  Verified Source Attribution
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-amber-400 transition-colors">
                  3-Step Dispatch Workflow
                </a>
              </li>
              <li>
                <a href="#dossiers" className="hover:text-amber-400 transition-colors">
                  Deep Owner Profiles
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  Annual License ($1,297/Yr · $108/Mo)
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Download Callout */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Software Download Portal
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Access the official client download and instant license key activation:
            </p>
            <a
              href="https://1clickleads.com/b/exit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onDownloadClick}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors border border-emerald-700"
            >
              <span>1clickleads.com/b/exit</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
            </a>
          </div>

        </div>

        {/* Bottom Legal & Compliance Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-emerald-500" />
            <span>© {new Date().getFullYear()} 1CLICK EXITS. All rights reserved. Secure 256-bit SSL encrypted stream.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] flex-wrap">
            <span className="text-emerald-400 font-semibold">100% TCPA Compliant Inquiries</span>
            <span>·</span>
            <span>Express Opt-In Consent</span>
            <span>·</span>
            <span>Audit-Ready IP & Timestamp Logging</span>
            <span>·</span>
            <span>No Per-Lead Fees</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
