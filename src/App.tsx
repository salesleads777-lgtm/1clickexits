/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SoftwareVideoPlayer } from './components/SoftwareVideoPlayer';
import { SourceTrackingSection } from './components/SourceTrackingSection';
import { WorkflowSection } from './components/WorkflowSection';
import { OwnerProfilesSection } from './components/OwnerProfilesSection';
import { SalesLetterBody } from './components/SalesLetterBody';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CampaignPreviewModal } from './components/CampaignPreviewModal';
import { SampleDialerModal } from './components/SampleDialerModal';
import { Download, ArrowRight, ShieldCheck, FileSpreadsheet } from 'lucide-react';

export default function App() {
  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Track scroll position to show discrete sticky bottom CTA bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCelebration = () => {
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#0f4c38', '#d4af37', '#22c55e', '#f59e0b']
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col font-sans">
      
      {/* Top Notification Trust Header */}
      <div className="bg-emerald-950 text-white text-[11px] sm:text-xs py-2 px-4 text-center font-medium border-b border-emerald-900 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <span className="text-amber-400 font-bold uppercase tracking-wider">
          LIVE DISPATCH ACTIVE
        </span>
        <span className="text-emerald-300">·</span>
        <span className="text-amber-300 font-bold uppercase">100% TCPA COMPLIANT LEADS</span>
        <span className="text-emerald-300">·</span>
        <span>650–1,500+ Daily Timeshare Exit Inquiries</span>
        <span className="text-emerald-300 hidden md:inline">·</span>
        <span className="hidden md:inline text-amber-300 font-semibold">Plans from $197 · 12-Mo Best Value $1,297 (~$108/mo)</span>
      </div>

      {/* Main Top Navigation */}
      <Navbar onDownloadClick={handleDownloadCelebration} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenCampaignModal={() => setIsCampaignModalOpen(true)}
          onDownloadClick={handleDownloadCelebration}
        />

        {/* Video Player & Interactive Software Demo */}
        <SoftwareVideoPlayer 
          onDownloadClick={handleDownloadCelebration}
        />

        {/* Verified Source Tracking Section */}
        <SourceTrackingSection />

        {/* 3-Step Workflow Section */}
        <WorkflowSection 
          onDownloadClick={handleDownloadCelebration}
        />

        {/* Deep Owner Profiles Section */}
        <OwnerProfilesSection 
          onDownloadClick={handleDownloadCelebration}
        />

        {/* Sales Letter & Feature Breakdown */}
        <SalesLetterBody 
          onDownloadClick={handleDownloadCelebration}
        />

        {/* Sample Dialer Export Trigger Banner */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 my-6">
          <div className="bg-slate-50 border border-slate-300/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-900 text-amber-300 rounded-xl">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Want to test our dialer format first?</h4>
                <p className="text-xs text-slate-600">Download a sample CSV file pre-mapped for Mojo, PhoneBurner, and Convoso.</p>
              </div>
            </div>
            <button
              onClick={() => setIsSampleModalOpen(true)}
              className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 shadow-xs whitespace-nowrap transition-colors"
            >
              Test Sample Export (.CSV)
            </button>
          </div>
        </div>

        {/* Pricing Section ($997/Year) */}
        <PricingSection 
          onDownloadClick={handleDownloadCelebration}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onDownloadClick={handleDownloadCelebration} />

      {/* Modals */}
      <CampaignPreviewModal 
        isOpen={isCampaignModalOpen}
        onClose={() => setIsCampaignModalOpen(false)}
      />

      <SampleDialerModal 
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
      />

      {/* Mobile-Responsive Sticky Conversion Bar (respects 15% mobile sticky limit) */}
      {showStickyCta && (
        <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-amber-300 shadow-2xl py-2.5 px-4 animate-in slide-in-from-bottom-2 duration-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <span className="font-extrabold text-slate-900 font-display text-sm">
                1CLICK <span className="text-emerald-900">EXITS</span>
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-600 font-medium">
                100% TCPA compliant · 650–1,500+ daily inquiries · <strong className="text-emerald-900">$1,297/yr ($108/mo)</strong>
              </span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className="sm:hidden flex flex-col">
                <span className="font-mono text-xs font-bold text-emerald-900">
                  $1,297/YEAR
                </span>
                <span className="text-[10px] text-slate-500 font-medium">
                  Just $108/month
                </span>
              </div>

              <a
                href="https://1clickleads.com/b/exit"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadCelebration}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-extrabold text-white bg-emerald-900 hover:bg-emerald-800 active:scale-95 shadow-md border border-emerald-950/20 transition-all whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-amber-300" />
                <span>DOWNLOAD SOFTWARE ($108/MO VALUE)</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
