import React, { useState } from 'react';
import { 
  ShieldCheck, AlertOctagon, DollarSign, Calendar, Compass, 
  MapPin, CheckCircle, ChevronRight, Download
} from 'lucide-react';

interface OwnerProfilesSectionProps {
  onDownloadClick: () => void;
}

export const OwnerProfilesSection: React.FC<OwnerProfilesSectionProps> = ({ onDownloadClick }) => {
  const [activeProfileTab, setActiveProfileTab] = useState<number | 'all'>('all');

  const PROFILES = [
    {
      id: 1,
      tag: 'PROFILE 01',
      developer: 'WESTGATE RESORTS',
      location: 'Orlando, FL · 32819',
      resort: 'Westgate Lakes Resort & Spa',
      annualMaint: '$2,480',
      mortgage: '$14,250',
      years: '7 Years',
      ownership: 'Deeded Week',
      intentScore: '97%',
      urgency: 'CRITICAL',
      grievance: 'Maintenance fees tripled over 7 years with arbitrary special assessment fees. Promised rental income never materialized.',
      ip: '172.56.21.94',
      city: 'Orlando, FL'
    },
    {
      id: 2,
      tag: 'PROFILE 02',
      developer: 'DIAMOND RESORTS',
      location: 'Scottsdale, AZ · 85251',
      resort: 'Scottsdale Links Resort',
      annualMaint: '$2,350',
      mortgage: '$0',
      years: '16 Years',
      ownership: 'Deeded Week',
      intentScore: '98%',
      urgency: 'CRITICAL',
      grievance: 'US Veteran on fixed pension. Resort developer continuously files collection threats after arbitrary 25% assessment levy.',
      ip: '70.156.21.94',
      city: 'Scottsdale, AZ'
    },
    {
      id: 3,
      tag: 'PROFILE 03',
      developer: 'HILTON GRAND VACATIONS',
      location: 'Las Vegas, NV · 89109',
      resort: 'Elara, a Hilton Grand Vacations Club',
      annualMaint: '$2,890',
      mortgage: '$16,500',
      years: '6 Years',
      ownership: 'Deeded Week',
      intentScore: '96%',
      urgency: 'CRITICAL',
      grievance: 'High-pressure closing tactics. Told points never expire, but dozens of fees charged to bank points. Demand mortgage exit.',
      ip: '174.64.91.205',
      city: 'Las Vegas, NV'
    },
    {
      id: 4,
      tag: 'PROFILE 04',
      developer: 'BLUEGREEN VACATIONS',
      location: 'Branson, MO · 65616',
      resort: 'The Falls Village Resort',
      annualMaint: '$1,890',
      mortgage: '$8,400',
      years: '5 Years',
      ownership: 'Points',
      intentScore: '98%',
      urgency: 'CRITICAL',
      grievance: 'Pressured into 6-hour upgrade presentation. Promised developer buyback was guaranteed; developer later refused in writing.',
      ip: '107.77.228.45',
      city: 'Branson, MO'
    }
  ];

  return (
    <section id="dossiers" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-display tracking-tight uppercase">
              DEEP OWNER PROFILES —
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-900 mt-1 font-display">
              NOT JUST A NAME & NUMBER
            </p>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              Actionable Owner Intelligence · Dispute Analysis · Exit Urgency Scoring · IP & Location Verification
            </p>
          </div>

          {/* High Closer Leverage Badge */}
          <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 p-4 sm:p-5 rounded-2xl shadow-md border border-amber-300 flex items-center gap-3.5 self-start lg:self-auto shrink-0">
            <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center text-amber-400 shadow-sm">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-base sm:text-lg block tracking-tight font-display">
                HIGH CLOSER LEVERAGE
              </span>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Identify · Validate · Exit · Recover
              </span>
            </div>
          </div>
        </div>

        {/* Profile Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveProfileTab('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              activeProfileTab === 'all'
                ? 'bg-emerald-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Show All 4 Dossiers
          </button>
          {PROFILES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProfileTab(p.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                activeProfileTab === p.id
                  ? 'bg-emerald-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {p.tag} · {p.developer}
            </button>
          ))}
        </div>

        {/* 4 Profile Dossiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {PROFILES.filter(p => activeProfileTab === 'all' || activeProfileTab === p.id).map((profile) => (
            <div 
              key={profile.id}
              className="bg-white rounded-2xl border-2 border-emerald-950/20 shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                {/* Profile Header */}
                <div className="bg-emerald-950 text-white p-4 flex items-center justify-between border-b border-emerald-900">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span className="font-extrabold text-sm tracking-wide text-amber-300">
                      {profile.tag} · {profile.developer}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-300 bg-emerald-900/80 px-2 py-0.5 rounded">
                    VERIFIED OWNER
                  </span>
                </div>

                <div className="p-5">
                  {/* Location & Resort info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-600" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="text-xs text-slate-600">
                      Resort: <span className="font-bold text-slate-900">{profile.resort}</span>
                    </div>
                  </div>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-2.5 mb-4 text-center">
                    <div className="bg-amber-50/80 p-2.5 rounded-xl border border-amber-300">
                      <span className="text-[10px] uppercase font-bold text-amber-900 block">Annual Maint.</span>
                      <span className="text-sm sm:text-base font-black text-amber-950 font-mono mt-0.5 block">
                        {profile.annualMaint}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Mortgage Balance</span>
                      <span className="text-sm sm:text-base font-black text-rose-800 font-mono mt-0.5 block">
                        {profile.mortgage}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Years Owned</span>
                      <span className="text-sm sm:text-base font-black text-slate-900 font-mono mt-0.5 block">
                        {profile.years}
                      </span>
                    </div>
                  </div>

                  {/* Status & Intent badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-semibold">
                    <span className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg border border-slate-200">
                      Ownership: <strong className="text-slate-950">{profile.ownership}</strong>
                    </span>
                    <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg border border-amber-300">
                      Intent Score: <strong className="text-amber-950 font-mono">{profile.intentScore}</strong>
                    </span>
                    <span className="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-lg border border-rose-300 flex items-center gap-1">
                      <AlertOctagon className="w-3.5 h-3.5" />
                      Urgency: <strong>{profile.urgency}</strong>
                    </span>
                  </div>

                  {/* Dispute reason */}
                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 mb-4">
                    <span className="text-[10px] font-bold uppercase text-slate-500 block mb-1">
                      DISPUTE REASON / GRIEVANCE
                    </span>
                    <p className="text-xs text-slate-800 leading-relaxed italic">
                      "{profile.grievance}"
                    </p>
                  </div>

                  {/* IP & Location footer */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 bg-slate-100/70 p-2 rounded-lg">
                    <span>IP: <strong className="text-slate-700">{profile.ip}</strong></span>
                    <span>LOCATION: <strong className="text-slate-700">{profile.city}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Dual Blocks: Why This Matters + Featured Highland Village Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-8">
          
          {/* Why This Matters Block */}
          <div className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-900 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-900 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black tracking-tight text-amber-300 font-display uppercase">
                  WHY THIS MATTERS — HIGH CLOSER LEVERAGE
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-3">
                These profiles combine financial, behavioral, and location data to reveal high-leverage exit opportunities. Intent Scores of 95–98% identify priority cases for rapid, compliant outreach and immediate contract resolution.
              </p>
              <div className="mt-4 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No blind cold calls — reps know mortgage balances and years owned before dialing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Accurate 10-year fee bleed numbers establish instant urgency on the phone</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Exact grievance details enable reps to validate owner pain within 30 seconds</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-900/80 flex items-center justify-between text-xs text-amber-400 font-mono">
              <span>UNLIMITED PROFILE DISPATCH</span>
              <span>INCLUDED IN $1,297/YR ($108/MO)</span>
            </div>
          </div>

          {/* Featured Profile - Highland Village, TX */}
          <div className="bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent rounded-2xl p-6 border-2 border-amber-400 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black uppercase tracking-wider text-amber-950 bg-amber-300/80 px-2.5 py-1 rounded">
                  FEATURED DOSSIER
                </span>
                <span className="text-xs font-mono font-bold text-slate-600">IP: 198.54.140.88</span>
              </div>

              <h4 className="text-xl font-black text-slate-950 font-display">
                Highland Village, TX · 32819
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Marriott Vacation Club · Deeded Week · 12 Years Owned
              </p>

              <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                <div className="bg-white p-2.5 rounded-lg border border-amber-300">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Intent Score</span>
                  <span className="text-base font-black text-emerald-900 font-mono">96% Very High</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-amber-300">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Exit Urgency</span>
                  <span className="text-base font-black text-rose-700 font-mono">CRITICAL</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700">
                <span className="font-bold text-slate-900 block mb-0.5">Dispute Reason:</span>
                Escalating annual maintenance fees exceeding budget and perpetual contract clause preventing family release.
              </div>
            </div>

            <a
              href="https://1clickleads.com/b/exit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onDownloadClick}
              className="mt-6 w-full py-3 bg-emerald-900 hover:bg-emerald-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Access Live Stream for $1,297/Year ($108/Mo)</span>
              <ChevronRight className="w-4 h-4 text-amber-300" />
            </a>
          </div>

        </div>

        {/* Section Footer Bar */}
        <div className="text-center py-3 text-xs font-semibold tracking-wider text-slate-500 uppercase border-t border-slate-100">
          PROPRIETARY OWNER DATA · 100% TCPA COMPLIANT · SECURE · SUPPORTING TIMESHARE EXIT STRATEGY
        </div>

      </div>
    </section>
  );
};
