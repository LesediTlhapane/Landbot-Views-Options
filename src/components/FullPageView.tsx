import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, Loader2, AlertCircle, RotateCcw, X, Home } from 'lucide-react';
import {
  LANDBOT_CONFIG_URL,
  loadLandbotSDK,
  LandbotInstance,
} from '../services/landbot';
import { useWebchat } from '../context/WebchatContext';

interface FullPageViewProps {
  onBack: () => void;
}

export const FullPageView: React.FC<FullPageViewProps> = ({ onBack }) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const instanceRef = useRef<LandbotInstance | null>(null);
  const { setWebchatVisibility } = useWebchat();

  const handleBack = () => {
    // Teardown the Fullpage instance cleanly
    if (instanceRef.current) {
      try {
        instanceRef.current.destroy?.();
      } catch (e) {
        console.warn('Error destroying Fullpage on exit:', e);
      }
      instanceRef.current = null;
    }
    document.body.classList.remove('fullpage-active');
    setWebchatVisibility(true);
    onBack();
  };

  const initFullpage = async () => {
    setStatus('loading');
    setErrorMessage(null);

    // Hide webchat floating bubble during fullpage preview
    setWebchatVisibility(false);
    document.body.classList.add('fullpage-active');

    try {
      const Landbot = await loadLandbotSDK();
      if (!Landbot.Fullpage) {
        throw new Error('Landbot.Fullpage constructor is not available in the SDK module.');
      }

      // Dispose of existing instance if any
      if (instanceRef.current) {
        try {
          instanceRef.current.destroy?.();
        } catch (e) {
          console.warn('Error disposing previous Fullpage instance:', e);
        }
        instanceRef.current = null;
      }

      const instance = new Landbot.Fullpage({
        configUrl: LANDBOT_CONFIG_URL,
      });

      if (instance.configLoaded) {
        await instance.configLoaded;
      }

      instanceRef.current = instance;
      setStatus('loaded');
    } catch (err: any) {
      console.error('Failed to initialize Landbot Fullpage:', err);
      setStatus('error');
      setErrorMessage(
        err?.message ||
          'Failed to load full-page chatbot. Please check your network connection.'
      );
    }
  };

  useEffect(() => {
    initFullpage();

    // Listen to Escape key to quickly return to overview
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('fullpage-active');

      if (instanceRef.current) {
        try {
          instanceRef.current.destroy?.();
        } catch (e) {
          console.warn('Error while destroying Fullpage instance:', e);
        }
        instanceRef.current = null;
      }
      setWebchatVisibility(true);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#F7F9FC] overflow-hidden">
      {/* Permanent, prominent top navigation bar portaled directly into body */}
      {createPortal(
        <aside
          className="fixed top-0 left-0 right-0 h-[52px] bg-[#052B66] text-white z-[2147483647] flex items-center justify-between px-3 sm:px-6 shadow-md border-b border-white/10 select-none"
          style={{ pointerEvents: 'auto' }}
          role="navigation"
          aria-label="Full page navigation"
        >
          {/* Left Zone: Back button to home overview */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-white bg-white/15 hover:bg-[#45CC42] hover:text-[#052B66] rounded-md transition-all cursor-pointer border border-white/20 hover:border-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shrink-0 shadow-xs"
              title="Return to Home Overview (Esc)"
              aria-label="Back to Home Overview"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">Back to Home Overview</span>
            </button>

            <div className="hidden md:flex items-center gap-2.5 text-xs text-slate-300">
              <span className="text-white/30" aria-hidden="true">|</span>
              <span className="font-semibold text-white">eStudy AI Learning Assistant</span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span className="font-mono text-emerald-400">Full Page View</span>
            </div>
          </div>

          {/* Right Zone: Additional controls & quick exit */}
          <div className="flex items-center gap-2">
            <button
              onClick={initFullpage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white/90 hover:text-white bg-white/10 hover:bg-white/20 rounded transition-colors cursor-pointer border border-white/10"
              title="Restart session"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#45CC42]" aria-hidden="true" />
              <span className="hidden sm:inline">Restart</span>
            </button>

            <button
              onClick={handleBack}
              className="inline-flex items-center justify-center w-8 h-8 rounded-md text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-pointer"
              title="Close full page view and return to home overview"
              aria-label="Close"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </aside>,
        document.body
      )}

      {/* Loading state indicator */}
      {status === 'loading' && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-6 bg-[#F7F9FC] pt-16">
          <div className="bg-white border border-slate-200 rounded-lg p-6 max-w-sm w-full text-center shadow-xs">
            <Loader2 className="w-8 h-8 text-[#052B66] animate-spin mx-auto mb-3" aria-hidden="true" />
            <h2 className="text-base font-bold text-[#052B66]">
              Loading Full Page Chatbot
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Fetching bot configuration and initializing viewport canvas...
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-[#052B66] cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Cancel and return to home overview</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error state indicator with retry and back button */}
      {status === 'error' && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center p-6 bg-[#F7F9FC] pt-16">
          <div className="bg-white border border-red-200 rounded-lg p-6 max-w-md w-full shadow-xs">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h2 className="text-base font-bold text-[#052B66]">
                  Failed to Load Full Page Chatbot
                </h2>
                <p className="text-xs text-red-700 mt-1 leading-relaxed">
                  {errorMessage}
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded border border-slate-200 transition-colors cursor-pointer"
              >
                <Home className="w-3.5 h-3.5 text-[#052B66]" aria-hidden="true" />
                <span>Return to Home Overview</span>
              </button>
              <button
                onClick={initFullpage}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#052B66] hover:bg-[#052B66]/90 rounded transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#45CC42]" aria-hidden="true" />
                <span>Retry Connection</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
