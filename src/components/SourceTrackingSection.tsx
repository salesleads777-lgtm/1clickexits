import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2, Lock, Globe, Link as LinkIcon, BarChart3, Search } from 'lucide-react';
import { CAMPAIGN_DOMAINS } from '../data/leadsData';

export const SourceTrackingSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState(CAMPAIGN_DOMAINS[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDomains = CAMPAIGN_DOMAINS.filter(item => 
    item.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.channel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="source-tracking" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header matching graphic */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 font-display">
              1CLICK EXITS
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-sm font-bold text-emerald-900 uppercase tracking-wider">
              Attribution Engine
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/30 text-amber-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border border-amber-400/40 shadow-xs self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            <span>100+ Deep Lead Capture Sites</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-display tracking-tight uppercase">
            VERIFIED SOURCE TRACKING
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real-time attribution from click to campaign — verified source and UTM tracking for every lead.
          </p>
        </div>

        {/* 3-Box Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch relative mb-10">
          
          {/* Card 1: Landing Page Source Domain */}
          <div className="bg-white rounded-2xl border-2 border-emerald-950/20 shadow-md overflow-hidden flex flex-col">
            <div className="bg-emerald-950 text-white p-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-900 text-amber-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">Stage 01</span>
                <h3 className="text-sm font-bold tracking-tight">LANDING PAGE SOURCE DOMAIN</h3>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-2.5">
                {CAMPAIGN_DOMAINS.map((item) => (
                  <button
                    key={item.domain}
                    onClick={() => setSelectedDomain(item)}
                    className={`w-full text-left p-2.5 rounded-lg text-xs font-mono transition-all border ${
                      selectedDomain.domain === item.domain 
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold shadow-xs' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${selectedDomain.domain === item.domain ? 'bg-emerald-600' : 'bg-slate-300'}`} />
                      <span className="truncate">{item.domain}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 text-center font-medium">
                100+ verified domains actively monitored & streamed
              </div>
            </div>
          </div>

          {/* Card 2: Landing Page Full URL with UTM Parameters */}
          <div className="bg-white rounded-2xl border-2 border-emerald-950/20 shadow-md overflow-hidden flex flex-col relative">
            <div className="bg-emerald-950 text-white p-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-900 text-amber-400">
                <LinkIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">Stage 02</span>
                <h3 className="text-sm font-bold tracking-tight">LANDING PAGE FULL URL WITH UTM</h3>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="p-2.5 bg-slate-900 text-emerald-400 rounded-lg font-mono text-[11px] break-all border border-slate-800">
                  {selectedDomain.fullUrl}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-amber-50/80 p-2.5 rounded-lg border border-amber-300">
                    <span className="text-[10px] uppercase font-bold text-amber-900 block">UTM Source</span>
                    <span className="font-mono text-slate-900 font-semibold text-[11px]">{selectedDomain.utmSource}</span>
                  </div>
                  <div className="bg-amber-50/80 p-2.5 rounded-lg border border-amber-300">
                    <span className="text-[10px] uppercase font-bold text-amber-900 block">UTM Campaign</span>
                    <span className="font-mono text-slate-900 font-semibold text-[11px]">{selectedDomain.utmCampaign}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-emerald-800 text-center font-semibold flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>UTM tags captured automatically in real-time</span>
              </div>
            </div>
          </div>

          {/* Card 3: Marketing Campaign */}
          <div className="bg-white rounded-2xl border-2 border-emerald-950/20 shadow-md overflow-hidden flex flex-col">
            <div className="bg-emerald-950 text-white p-4 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-900 text-amber-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">Stage 03</span>
                <h3 className="text-sm font-bold tracking-tight">ATTRIBUTED MARKETING CAMPAIGN</h3>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-100/60 to-amber-200/50 border border-amber-300 text-slate-900">
                  <span className="text-xs font-bold text-amber-950 uppercase tracking-wider block">
                    {selectedDomain.channel}
                  </span>
                  <span className="text-xs text-slate-700 block mt-0.5">
                    {selectedDomain.channelType}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-900 font-semibold mt-2 inline-block bg-white/70 px-2 py-0.5 rounded">
                    Volume: {selectedDomain.dailyVolume}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-600 text-center font-medium">
                Campaign auto-linked to lead source for maximum closer leverage
              </div>
            </div>
          </div>

        </div>

        {/* Example Lead Tracking Table Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          
          <div className="bg-slate-100/90 px-6 py-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">
              EXAMPLE LEAD TRACKING MATRIX
            </h3>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Filter by domain or source..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1 bg-white border border-slate-300 rounded text-xs focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-emerald-950 text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-6">SOURCE DOMAIN</th>
                  <th className="py-3 px-6">UTM PARAMETERS DETECTED</th>
                  <th className="py-3 px-6">ATTRIBUTED CAMPAIGN</th>
                  <th className="py-3 px-6 text-right">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDomains.map((row) => (
                  <tr key={row.domain} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-mono text-slate-900 font-medium">
                      {row.domain}
                    </td>
                    <td className="py-3.5 px-6 font-mono text-slate-600">
                      <span className="text-emerald-800 font-semibold">{row.utmSource}</span>
                      <span className="text-slate-400 mx-1.5">·</span>
                      <span className="text-amber-800 font-semibold">{row.utmCampaign}</span>
                    </td>
                    <td className="py-3.5 px-6 text-slate-800 font-medium">
                      {row.channel}
                    </td>
                    <td className="py-3.5 px-6 text-right">
                      <span className="inline-flex items-center gap-1 text-emerald-800 font-bold bg-emerald-100/80 px-2.5 py-1 rounded-full text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                        Verified
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-950 text-white px-6 py-3 flex items-center justify-center text-xs text-center border-t border-emerald-900">
            <div className="flex items-center gap-2 text-slate-200">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>100% TCPA Compliant · All data is securely logged and timestamped with express written consent · Real-time sync to CRM & Dialer</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
