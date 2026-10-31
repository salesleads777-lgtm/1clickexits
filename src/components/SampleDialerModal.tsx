import React from 'react';
import { X, Download, FileSpreadsheet, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SAMPLE_LEADS } from '../data/leadsData';

interface SampleDialerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SampleDialerModal: React.FC<SampleDialerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownloadSampleCsv = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#0f4c38', '#d4af37', '#10b981']
    });

    const headers = [
      'Lead_ID',
      'Owner_Name',
      'Location',
      'State',
      'Resort_Developer',
      'Resort_Property',
      'Annual_Maintenance_Fee',
      'Mortgage_Balance',
      'Years_Owned',
      'Exit_Intent_Score',
      'Urgency_Tier',
      'Dispute_Grievance_Details',
      'Source_Landing_Page',
      'TCPA_Consent_Status',
      'TCPA_OptIn_IP',
      'Phone_Dialer_Format',
      'Email_Contact'
    ];

    const rows = SAMPLE_LEADS.map(lead => [
      `"${lead.id}"`,
      `"${lead.name}"`,
      `"${lead.location}"`,
      `"${lead.state}"`,
      `"${lead.developer}"`,
      `"${lead.resortName}"`,
      lead.annualFee,
      lead.mortgageBalance,
      lead.yearsOwned,
      `${lead.intentScore}%`,
      `"${lead.urgency}"`,
      `"${lead.disputeReason.replace(/"/g, '""')}"`,
      `"${lead.landingPage}"`,
      `"100% TCPA Compliant Opt-In"`,
      `"${lead.ipAddress}"`,
      `"${lead.phoneMasked}"`,
      `"${lead.emailMasked}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', '1CLICKEXITS_Sample_Dialer_Feed.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border-2 border-emerald-950/20 overflow-hidden">
        
        <div className="bg-emerald-950 text-white p-4 flex items-center justify-between border-b border-emerald-900">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-amber-300" />
            <h3 className="font-bold text-sm sm:text-base">
              Test Dialer Export (.CSV Sample)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-xs sm:text-sm text-slate-700 space-y-4">
          <p>
            Experience how 1CLICK EXITS formats claimed leads for instant import into <strong>Mojo, PhoneBurner, Convoso, ReadyMode, and GoHighLevel</strong>.
          </p>

          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs font-mono space-y-1">
            <div className="text-slate-500 font-bold uppercase text-[10px]">INCLUDED COLUMNS:</div>
            <div className="text-emerald-900 font-semibold truncate">
              Lead_ID, Owner_Name, Location, Resort_Developer, Annual_Fee, Mortgage, Grievance, TCPA_Consent, Dialer_Phone
            </div>
          </div>

          <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% TCPA Compliant express consent with verified IP logging & pre-formatted dialer mappings</span>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs"
            >
              Cancel
            </button>
            <button
              onClick={handleDownloadSampleCsv}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs shadow-xs"
            >
              <Download className="w-4 h-4 text-amber-300" />
              <span>Download Sample CSV Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
