import React, { useEffect } from 'react';
import { ArrowLeft, MessageSquare, Play, X, RotateCcw, AlertCircle } from 'lucide-react';
import { useWebchat } from '../context/WebchatContext';
import { StatusBadge } from './StatusBadge';

interface WebchatViewProps {
  onBack: () => void;
}

export const WebchatView: React.FC<WebchatViewProps> = ({ onBack }) => {
  const {
    status,
    errorMessage,
    initWebchat,
    openWebchat,
    closeWebchat,
    destroyWebchat,
  } = useWebchat();

  // Initialize Webchat on entering this view if not yet initialized
  useEffect(() => {
    if (status === 'idle') {
      initWebchat(false);
    }
  }, [status, initWebchat]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#052B66] hover:text-[#052B66]/80 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#45CC42]" aria-hidden="true" />
          <span>Back to Home Overview</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">Livechat Status:</span>
          <StatusBadge status={status} />
        </div>
      </div>

      {/* Mode Header & Interactive Controls */}
      <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              <span>Option 01 Preview</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="font-mono">Landbot.Livechat</span>
            </div>
            <h1 className="text-2xl font-bold text-[#052B66] tracking-tight">
              Webchat — Floating Bubble Experience
            </h1>
            <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
              The floating bubble launcher appears in the bottom-right corner of the screen.
              It allows students to access the AI Learning Assistant on demand without leaving or hiding
              their active learning materials.
            </p>
          </div>

          {/* Interactive Controls for Webchat */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {status === 'loaded' && (
              <>
                <button
                  onClick={openWebchat}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#052B66] hover:bg-[#052B66]/90 rounded-md transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#45CC42]" aria-hidden="true" />
                  <span>Open Bubble Chat</span>
                </button>
                <button
                  onClick={closeWebchat}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                  <span>Close Window</span>
                </button>
                <button
                  onClick={destroyWebchat}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-md transition-colors cursor-pointer"
                  title="Unmount and dispose of the Landbot Livechat instance"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reset Widget</span>
                </button>
              </>
            )}

            {status === 'idle' && (
              <button
                onClick={() => initWebchat(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#052B66] hover:bg-[#052B66]/90 rounded-md transition-colors cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#45CC42]" aria-hidden="true" />
                <span>Initialize Floating Bubble</span>
              </button>
            )}
          </div>
        </div>

        {/* Error State */}
        {status === 'error' && (
          <div className="mt-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm flex items-start justify-between gap-4">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold">Unable to load the Webchat assistant</p>
                <p className="text-xs text-red-700 mt-1">{errorMessage}</p>
              </div>
            </div>
            <button
              onClick={() => initWebchat(false)}
              className="px-3 py-1.5 text-xs font-semibold text-red-800 bg-white border border-red-300 rounded hover:bg-red-50 transition-colors shrink-0 cursor-pointer"
            >
              Retry Load
            </button>
          </div>
        )}

        {/* Helper Note */}
        <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
          <span>Look at the bottom-right corner for the green eStudy launcher bubble · Single instance maintained across navigations</span>
        </div>
      </div>
    </div>
  );
};
