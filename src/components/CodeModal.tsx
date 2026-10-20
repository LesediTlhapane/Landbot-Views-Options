import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Copy, Check, Code2 } from 'lucide-react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  snippet: string;
  sdkClass: string;
}

export const CodeModal: React.FC<CodeModalProps> = ({
  isOpen,
  onClose,
  title,
  snippet,
  sdkClass,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy snippet:', err);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[2147483647] flex items-center justify-center p-4 bg-[#052B66]/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-lg shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#052B66] px-5 py-4 flex items-center justify-between text-white border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded bg-white/10 text-[#45CC42]">
              <Code2 className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 id="modal-title" className="text-sm font-bold tracking-tight">
                {title} — Embed Snippet
              </h2>
              <span className="text-[11px] font-mono text-slate-300">
                Official {sdkClass} Integration Code
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-md flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto">
          <div className="flex items-center justify-between pb-2 mb-2 text-xs text-slate-500">
            <span>HTML / JavaScript Embed Code</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#052B66] bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded transition-colors cursor-pointer"
              title="Copy snippet to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#45CC42]" aria-hidden="true" />
                  <span className="text-emerald-700">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-600" aria-hidden="true" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          {/* Code display block */}
          <div className="relative rounded-md bg-[#0D1526] p-4 border border-slate-800 text-slate-200 font-mono text-xs leading-relaxed overflow-x-auto selection:bg-[#45CC42] selection:text-[#052B66]">
            <pre className="whitespace-pre">{snippet}</pre>
          </div>

          <p className="mt-3 text-[11px] text-slate-500 leading-normal">
            Paste this snippet into your HTML page where you want the Landbot assistant to render.
            Ensure the Landbot SDK script is loaded before initialization.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#052B66] hover:bg-[#052B66]/90 rounded-md transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#45CC42]" aria-hidden="true" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#45CC42]" aria-hidden="true" />
                <span>Copy Snippet</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
