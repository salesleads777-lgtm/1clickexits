import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, 
  CheckCircle2, Download, Shield, Sparkles, UserCheck, 
  FileSpreadsheet, ExternalLink, ArrowRight, Video as VideoIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_LEADS, LeadItem } from '../data/leadsData';

interface SoftwareVideoPlayerProps {
  onDownloadClick: () => void;
}

export const SoftwareVideoPlayer: React.FC<SoftwareVideoPlayerProps> = ({ onDownloadClick }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 8; // 8 seconds demo cycle
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'claimed'>('all');
  const [claimedLeads, setClaimedLeads] = useState<LeadItem[]>(() => 
    SAMPLE_LEADS.filter(l => l.claimed)
  );
  const [showToast, setShowToast] = useState(false);
  const [customVideoUrl, setCustomVideoUrl] = useState<string>('');
  const [showVideoUrlInput, setShowVideoUrlInput] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play the simulated recording
  useEffect(() => {
    if (isPlaying && !customVideoUrl) {
      timerRef.current = setInterval(() => {
        setCurrentTime(prev => {
          const next = prev + 0.1;
          if (next >= duration) {
            return 0; // loop
          }
          return next;
        });
      }, 100);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, duration, customVideoUrl]);

  // Sync timeline events
  useEffect(() => {
    if (currentTime >= 0 && currentTime < 2.5) {
      setActiveTab('all');
      setShowToast(false);
    } else if (currentTime >= 2.5 && currentTime < 5.0) {
      setActiveTab('all');
      setShowToast(true);
    } else if (currentTime >= 5.0 && currentTime < 6.2) {
      setActiveTab('claimed');
      setShowToast(false);
    } else if (currentTime >= 6.2 && currentTime < 7.8) {
      setActiveTab('claimed');
      setShowToast(true);
      // Trigger small confetti at 6.3s if newly reached
      if (Math.abs(currentTime - 6.3) < 0.15) {
        triggerConfetti();
      }
    }
  }, [currentTime]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#0f4c38', '#d4af37', '#22c55e', '#f59e0b']
    });
  };

  const handleManualClaim = (lead: LeadItem) => {
    if (!claimedLeads.find(l => l.id === lead.id)) {
      setClaimedLeads(prev => [...prev, { ...lead, claimed: true, claimedAt: 'Just now' }]);
      triggerConfetti();
      setShowToast(true);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="video-demo" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-300/60 mb-3">
            <span>Official Software Walkthrough</span>
            <span>·</span>
            <span className="text-amber-800">1CLICK EXITS PRO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight text-balance">
            Watch 1CLICK EXITS in Action: From Live Click to Claim in Seconds
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            See exactly how incoming timeshare cancellation inquiries stream directly into your private portal, get claimed exclusively, and export straight to your dialer.
          </p>
        </div>

        {/* Video Player Frame */}
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl shadow-2xl border-4 border-slate-800 overflow-hidden ring-1 ring-slate-950/20">
          
          {/* Top Browser / App chrome */}
          <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
              </div>
              <span className="text-slate-400 font-mono hidden sm:inline">
                app.1clickleads.com/exit-dispatch
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                LIVE STREAM ACTIVE (101 SITES)
              </span>
              <button
                onClick={() => setShowVideoUrlInput(!showVideoUrlInput)}
                className="text-slate-400 hover:text-white transition-colors text-xs flex items-center gap-1"
                title="Attach external video stream URL if needed"
              >
                <VideoIcon className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Custom Video URL</span>
              </button>
            </div>
          </div>

          {/* Optional External Video URL Input */}
          {showVideoUrlInput && (
            <div className="bg-slate-800 p-3 flex items-center gap-2 border-b border-slate-700 text-xs">
              <input 
                type="text" 
                placeholder="Enter .mp4 video URL (or leave blank to watch interactive software playback)"
                value={customVideoUrl}
                onChange={(e) => setCustomVideoUrl(e.target.value)}
                className="flex-1 bg-slate-900 text-white px-3 py-1.5 rounded border border-slate-700 focus:outline-none focus:border-emerald-500 font-mono"
              />
              <button 
                onClick={() => setCustomVideoUrl('')}
                className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded font-medium"
              >
                Reset Demo
              </button>
            </div>
          )}

          {/* Video Screen Content */}
          <div className="relative bg-white aspect-[16/10] sm:aspect-[16/9] overflow-hidden select-none">
            
            {customVideoUrl ? (
              <video 
                src={customVideoUrl} 
                controls 
                autoPlay 
                loop 
                className="w-full h-full object-cover"
              />
            ) : (
              /* Simulated High-Fidelity Software Walkthrough matching user's video */
              <div className="w-full h-full flex flex-col bg-[#F9FAF8] text-slate-900 font-sans text-xs sm:text-sm">
                
                {/* 00:00 - 00:02: Login screen simulation if scrubbed to start */}
                {currentTime < 1.0 ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-emerald-950 to-slate-900 text-white">
                    <div className="w-full max-w-sm bg-white text-slate-900 rounded-2xl p-6 shadow-2xl border-2 border-amber-300">
                      <div className="text-center mb-5">
                        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-300 mb-2">
                          100+ Live Landing Page Feeds Online
                        </div>
                        <h3 className="text-xl font-black text-slate-950 tracking-tight font-display">
                          1CLICK EXITS <span className="text-emerald-800">PRO</span>
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Direct-line real-time stream from certified cancellation landing pages
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">USERNAME</label>
                          <input 
                            readOnly 
                            value="enterprise_closer_41" 
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">PASSWORD</label>
                          <input 
                            readOnly 
                            type="password" 
                            value="••••••••••••" 
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs font-mono"
                          />
                        </div>
                        <button 
                          onClick={() => setCurrentTime(1.5)}
                          className="w-full py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          <span>ENTER LIVE DISPATCH</span>
                          <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
                        </button>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200 text-[10px] text-slate-500 space-y-1">
                        <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Verified 100% Timeshare Exit Qualified Traffic</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Direct Attribution to 100+ High-Intent Domains</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Main Software Interface (00:01 - 00:08) */
                  <div className="w-full h-full flex flex-col bg-[#FAFCF9] overflow-hidden">
                    
                    {/* Software Top Bar */}
                    <div className="bg-white border-b border-emerald-950/10 px-4 py-2.5 flex items-center justify-between shrink-0 shadow-xs">
                      <div className="flex items-center gap-3">
                        <span className="font-extrabold text-sm text-slate-950 font-display">
                          1CLICK EXITS <span className="text-emerald-800 font-black">PRO</span>
                        </span>
                        <span className="hidden sm:inline text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          LIVE DISPATCH STREAM ACTIVE
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                          <span>101 SITES ONLINE</span>
                          <span>·</span>
                          <span className="text-emerald-700 font-bold">12 LIVE EXIT FEEDS</span>
                        </div>
                        <span className="px-2.5 py-1 bg-emerald-900 text-white rounded text-[11px] font-bold">
                          Admin Portal
                        </span>
                      </div>
                    </div>

                    {/* KPI Metric Strip */}
                    <div className="px-4 py-3 grid grid-cols-3 gap-3 border-b border-slate-200 bg-white">
                      <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200">
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Database Lead Pool</span>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-base sm:text-lg font-black text-slate-900 font-mono">
                            {claimedLeads.length} Claimed
                          </span>
                          <span className="text-[11px] text-emerald-700 font-semibold">+923 Available</span>
                        </div>
                        <span className="text-[10px] text-slate-500">Streaming from 100+ landing pages</span>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200">
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Avg Annual Maint. Fee</span>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-base sm:text-lg font-black text-amber-800 font-mono">$2,593 / yr</span>
                        </div>
                        <span className="text-[10px] text-emerald-700 font-medium">High pain point = High closing rate</span>
                      </div>

                      <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-200">
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Total Debt Cancel Volume</span>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-base sm:text-lg font-black text-emerald-950 font-mono">$307,450</span>
                        </div>
                        <span className="text-[10px] text-slate-500">Mortgage + 5-yr projected fee bleed</span>
                      </div>
                    </div>

                    {/* Table Navigation & Actions */}
                    <div className="px-4 py-2 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setActiveTab('all')}
                          className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                            activeTab === 'all' 
                              ? 'bg-emerald-900 text-white shadow-xs' 
                              : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                          }`}
                        >
                          LIVE LEADS DATABASE ({SAMPLE_LEADS.length} AVAILABLE)
                        </button>
                        <button 
                          onClick={() => setActiveTab('claimed')}
                          className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                            activeTab === 'claimed' 
                              ? 'bg-emerald-900 text-white shadow-xs' 
                              : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-300'
                          }`}
                        >
                          MY CLAIMED LEADS VAULT ({claimedLeads.length})
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => {
                            triggerConfetti();
                            setShowToast(true);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-bold text-xs shadow-xs"
                        >
                          <FileSpreadsheet className="w-3.5 h-3.5 text-amber-300" />
                          <span>EXPORT CLAIMED ({claimedLeads.length})</span>
                        </button>
                      </div>
                    </div>

                    {/* Leads Table Container */}
                    <div className="flex-1 overflow-y-auto px-4 py-2 relative">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-500 text-[11px] uppercase tracking-wider font-semibold">
                            <th className="py-2">Lead / Owner</th>
                            <th className="py-2">Resort Developer</th>
                            <th className="py-2">Maint / Mortgage</th>
                            <th className="py-2 hidden md:table-cell">Source Landing Page</th>
                            <th className="py-2">Intent</th>
                            <th className="py-2 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {(activeTab === 'all' ? SAMPLE_LEADS : claimedLeads).map((lead) => (
                            <tr key={lead.id} className="hover:bg-emerald-50/50 transition-colors">
                              <td className="py-2 font-medium text-slate-900">
                                <div>{lead.name}</div>
                                <div className="text-[10px] text-slate-500">{lead.location}</div>
                              </td>
                              <td className="py-2 text-slate-700">
                                <span className="font-semibold">{lead.developer}</span>
                              </td>
                              <td className="py-2 font-mono text-[11px]">
                                <span className="text-amber-800 font-bold">${lead.annualFee.toLocaleString()}/yr</span>
                                {lead.mortgageBalance > 0 && (
                                  <span className="text-rose-700 block text-[10px]">Owes ${lead.mortgageBalance.toLocaleString()}</span>
                                )}
                              </td>
                              <td className="py-2 hidden md:table-cell text-slate-500 font-mono text-[10px]">
                                {lead.landingPage}
                              </td>
                              <td className="py-2">
                                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                                  {lead.intentScore}% Urgent
                                </span>
                              </td>
                              <td className="py-2 text-right">
                                {lead.claimed ? (
                                  <span className="inline-flex items-center gap-1 text-emerald-800 text-[11px] font-bold bg-emerald-100 px-2 py-0.5 rounded">
                                    <UserCheck className="w-3 h-3" />
                                    Claimed
                                  </span>
                                ) : (
                                  <button
                                    onClick={() => handleManualClaim(lead)}
                                    className="px-2.5 py-1 bg-emerald-900 hover:bg-emerald-800 text-white rounded text-[11px] font-bold shadow-xs active:scale-95 transition-all"
                                  >
                                    CLAIM
                                  </button>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {/* Toast Notification for incoming lead at 00:02 - 00:05 */}
                      {showToast && (
                        <div className="absolute top-4 right-4 max-w-sm bg-white rounded-xl shadow-2xl border-2 border-emerald-600 p-4 animate-in fade-in slide-in-from-top-2 duration-300 z-10">
                          <div className="flex items-center justify-between text-xs font-bold text-emerald-900 pb-2 border-b border-slate-100">
                            <span className="flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                              LIVE INCOMING LEAD ARRIVED!
                            </span>
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">Just now</span>
                          </div>
                          
                          <div className="mt-2 text-xs">
                            <p className="text-[10px] text-slate-500 uppercase font-bold">SOURCE LANDING PAGE:</p>
                            <p className="font-mono text-emerald-800 text-[11px] truncate">timeshare.click/westgate-timeshare-exit</p>
                            
                            <div className="mt-2 p-2 bg-slate-50 rounded border border-slate-200">
                              <p className="font-bold text-slate-900 text-sm">Kenneth & Cheryl Adams</p>
                              <p className="text-slate-600 text-[11px]">Kissimmee, FL · Westgate Resorts</p>
                              <p className="text-rose-700 font-bold font-mono text-xs mt-1">
                                $2,750/yr Fee · Owes $18,200
                              </p>
                            </div>

                            <p className="text-[10px] text-slate-600 italic mt-2 line-clamp-2">
                              "Signed during aggressive sales under false pretenses regarding exclusive resale..."
                            </p>

                            <div className="mt-3 flex items-center gap-2">
                              <button 
                                onClick={() => {
                                  triggerConfetti();
                                  handleManualClaim(SAMPLE_LEADS[0]);
                                }}
                                className="flex-1 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-white rounded font-bold text-xs flex items-center justify-center gap-1"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                                <span>CLAIM LEAD</span>
                              </button>
                              <button className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-semibold text-xs">
                                View Dossier
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                    </div>

                  </div>
                )}

              </div>
            )}

          </div>

          {/* Video Control Bar */}
          <div className="bg-slate-950 px-4 py-3 flex items-center justify-between gap-4 border-t border-slate-800 text-slate-300 text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-emerald-900 hover:bg-emerald-800 text-white flex items-center justify-center transition-colors"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              <button
                onClick={() => setCurrentTime(0)}
                className="text-slate-400 hover:text-white transition-colors"
                title="Restart"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <span className="font-mono text-xs text-slate-400">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Timeline Scrubber */}
            <div className="flex-1 max-w-md hidden sm:flex items-center gap-2">
              <input 
                type="range"
                min="0"
                max={duration}
                step="0.1"
                value={currentTime}
                onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-slate-400 hover:text-white transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              
              <a 
                href="https://1clickleads.com/b/exit"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onDownloadClick}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get Software ($1,297/Yr)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Video Key Takeaways */}
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">01 · Instant Sound & Toast</span>
            <p className="text-sm font-semibold text-slate-900 mt-1">Real-Time Lead Arrival Alerts</p>
            <p className="text-xs text-slate-600 mt-1">Be the first to know the exact millisecond a frustrated timeshare owner submits their form.</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">02 · Exclusivity Lock</span>
            <p className="text-sm font-semibold text-slate-900 mt-1">1-Click Claim to Private Vault</p>
            <p className="text-xs text-slate-600 mt-1">Once you claim a lead, it is immediately locked to your account and removed from other reps.</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">03 · Dialer Ready</span>
            <p className="text-sm font-semibold text-slate-900 mt-1">1-Click Export to Excel & CSV</p>
            <p className="text-xs text-slate-600 mt-1">Instantly sync your claimed leads directly into PhoneBurner, Mojo, Convoso, or HubSpot.</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-emerald-300 shadow-xs bg-emerald-50/40">
            <span className="text-emerald-900 font-bold text-xs uppercase tracking-wider block">04 · Legal Compliance</span>
            <p className="text-sm font-semibold text-emerald-950 mt-1">100% TCPA Compliant Leads</p>
            <p className="text-xs text-slate-600 mt-1">Express written consent, timestamp, device metadata, and IP logging captured on every inquiry.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
