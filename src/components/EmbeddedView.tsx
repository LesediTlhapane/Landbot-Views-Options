import React, { useEffect, useState, useRef } from 'react';
import {
  ArrowLeft,
  Loader2,
  AlertCircle,
  RotateCcw,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
} from 'lucide-react';
import {
  LANDBOT_CONFIG_URL,
  loadLandbotSDK,
  LandbotInstance,
} from '../services/landbot';
import { StatusBadge } from './StatusBadge';

interface EmbeddedViewProps {
  onBack: () => void;
}

type WidthPreset = 'full' | 'tablet' | 'mobile';

export const EmbeddedView: React.FC<EmbeddedViewProps> = ({ onBack }) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [widthPreset, setWidthPreset] = useState<WidthPreset>('full');
  const [containerHeight, setContainerHeight] = useState<number>(650);
  const instanceRef = useRef<LandbotInstance | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const initContainer = async () => {
    setStatus('loading');
    setErrorMessage(null);

    // Destroy existing instance if active
    if (instanceRef.current) {
      try {
        instanceRef.current.destroy?.();
      } catch (e) {
        console.warn('Error destroying existing Container instance:', e);
      }
      instanceRef.current = null;
    }

    // Clean inner HTML of target container before mount
    const targetEl = document.getElementById('myLandbot');
    if (targetEl) {
      targetEl.innerHTML = '';
    }

    try {
      const Landbot = await loadLandbotSDK();
      if (!Landbot.Container) {
        throw new Error('Landbot.Container constructor is not available in the SDK module.');
      }

      // Check if #myLandbot exists in DOM
      if (!document.getElementById('myLandbot')) {
        throw new Error('Target container element #myLandbot not found in DOM.');
      }

      const instance = new Landbot.Container({
        container: '#myLandbot',
        configUrl: LANDBOT_CONFIG_URL,
      });

      if (instance.configLoaded) {
        await instance.configLoaded;
      }

      instanceRef.current = instance;
      setStatus('loaded');
    } catch (err: any) {
      console.error('Failed to initialize Landbot Container:', err);
      setStatus('error');
      setErrorMessage(
        err?.message ||
          'Failed to load embedded container. Please check your network connection.'
      );
    }
  };

  useEffect(() => {
    // Initial mount
    initContainer();

    // Adjust height on small screens
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setContainerHeight(540);
      } else {
        setContainerHeight(650);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (instanceRef.current) {
        try {
          instanceRef.current.destroy?.();
        } catch (e) {
          console.warn('Error while destroying Container instance:', e);
        }
        instanceRef.current = null;
      }
    };
  }, []);

  const getContainerMaxWidth = () => {
    switch (widthPreset) {
      case 'tablet':
        return 'max-w-[768px]';
      case 'mobile':
        return 'max-w-[390px]';
      case 'full':
      default:
        return 'max-w-full';
    }
  };

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
          <span className="text-xs text-slate-500">Container Status:</span>
          <StatusBadge status={status} />
        </div>
      </div>

      {/* Mode Details Header */}
      <div className="mt-8 bg-white border border-slate-200 rounded-lg p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
              <span>Option 03 Preview</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="font-mono">Landbot.Container</span>
            </div>
            <h1 className="text-2xl font-bold text-[#052B66] tracking-tight">
              Embedded Chatbot Experience
            </h1>
            <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
              Rendered directly inside a bounded section of the page. This mode is optimal for
              dedicated interactive practice modules, assessments, and study exercises directly embedded
              within the curriculum layout.
            </p>
          </div>

          {/* Width Preset Selector for Responsive Testing */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg shrink-0">
            <button
              onClick={() => setWidthPreset('full')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                widthPreset === 'full'
                  ? 'bg-white text-[#052B66] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Test 100% full container width"
            >
              <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Full Width</span>
            </button>
            <button
              onClick={() => setWidthPreset('tablet')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                widthPreset === 'tablet'
                  ? 'bg-white text-[#052B66] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Test 768px tablet width"
            >
              <Tablet className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Tablet (768px)</span>
            </button>
            <button
              onClick={() => setWidthPreset('mobile')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                widthPreset === 'mobile'
                  ? 'bg-white text-[#052B66] shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Test 390px mobile width"
            >
              <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Mobile (390px)</span>
            </button>
          </div>
        </div>

        {/* Error Notification */}
        {status === 'error' && (
          <div className="mt-4 p-4 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm flex items-start justify-between gap-4">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold">Unable to load Embedded Chatbot container</p>
                <p className="text-xs text-red-700 mt-1">{errorMessage}</p>
              </div>
            </div>
            <button
              onClick={initContainer}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-800 bg-white border border-red-300 rounded hover:bg-red-50 transition-colors shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Retry Load</span>
            </button>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-2">
            <span>Container ID: <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">#myLandbot</code></span>
            <span aria-hidden="true">·</span>
            <span>Desktop Height: ~650px</span>
          </div>
          <button
            onClick={initContainer}
            className="inline-flex items-center gap-1 text-slate-600 hover:text-[#052B66] cursor-pointer"
            title="Reload container instance"
          >
            <RotateCcw className="w-3 h-3 text-[#45CC42]" aria-hidden="true" />
            <span>Reload Container</span>
          </button>
        </div>
      </div>

      {/* Embedded Chatbot Frame */}
      <div className="mt-8 flex justify-center">
        <div
          className={`w-full ${getContainerMaxWidth()} transition-all duration-200`}
        >
          <div className="bg-white border border-slate-300 rounded-lg shadow-sm overflow-hidden">
            {/* Mock Section Header to give realistic e-learning embedding context */}
            <div className="bg-[#052B66] px-5 py-3.5 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#45CC42]" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Interactive Practice: AI Knowledge Tutor
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <span className="hidden sm:inline">Essentials for AI</span>
                <span className="font-mono text-[11px] text-emerald-400">Embedded Sandbox</span>
              </div>
            </div>

            {/* Target Container wrapper */}
            <div className="relative w-full bg-[#F7F9FC]">
              {status === 'loading' && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-[#F7F9FC]/95 z-20"
                  style={{ minHeight: `${containerHeight}px` }}
                >
                  <Loader2 className="w-8 h-8 text-[#052B66] animate-spin mb-3" aria-hidden="true" />
                  <p className="text-sm font-semibold text-[#052B66]">
                    Loading Embedded Chatbot...
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Mounting Landbot.Container in #myLandbot
                  </p>
                </div>
              )}

              {/* Exact official container required by the prompt */}
              <div
                id="myLandbot"
                ref={containerRef}
                style={{
                  width: '100%',
                  height: `${containerHeight}px`,
                }}
                className="w-full relative z-10"
              />
            </div>

            {/* Container Footer note */}
            <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 flex items-center justify-between text-xs text-slate-500">
              <span>Section stays in page document flow without covering other page elements.</span>
              <span className="font-mono text-[11px] text-slate-400">Landbot.Container</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
