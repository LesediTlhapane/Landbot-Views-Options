import React, { useState } from 'react';
import { OptionCard } from './OptionCard';
import { CodeModal } from './CodeModal';
import { useWebchat } from '../context/WebchatContext';
import { Layers, ShieldCheck } from 'lucide-react';

interface MainPageProps {
  onNavigate: (mode: 'webchat' | 'fullpage' | 'embedded') => void;
  fullpageStatus: 'idle' | 'loading' | 'loaded' | 'error';
  embeddedStatus: 'idle' | 'loading' | 'loaded' | 'error';
}

const SNIPPET_OPTION_1 = `<script type="module" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"></script>
<script type="module">
  var myLandbot = new Landbot.Livechat({
    configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3534285-FW2T1RCPJ5IH5C3U/index.json',
  });
</script>`;

const SNIPPET_OPTION_2 = `<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Landbot | Convert a Landing Page into a Chatbot</title>
  </head>
  <body>
    <script type="module" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"></script>
    <script type="module">
      var myLandbot = new Landbot.Fullpage({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3534285-FW2T1RCPJ5IH5C3U/index.json',
      });
    </script>
  </body>
</html>`;

const SNIPPET_OPTION_3 = `<script type="module" src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"></script>
<div id="myLandbot" style="width: 100%; height: px"></div>
<script type="module">
  var myLandbot = new Landbot.Container({
    container: '#myLandbot',
    configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3534285-FW2T1RCPJ5IH5C3U/index.json',
  });
</script>`;

export const MainPage: React.FC<MainPageProps> = ({
  onNavigate,
  fullpageStatus,
  embeddedStatus,
}) => {
  const { status: webchatStatus, initWebchat, openWebchat } = useWebchat();
  const [activeModal, setActiveModal] = useState<{
    title: string;
    snippet: string;
    sdkClass: string;
  } | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Primary Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#052B66] mb-3">
          <ShieldCheck className="w-4 h-4 text-[#45CC42]" aria-hidden="true" />
          <span>Official Landbot 3 SDK Integration</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#052B66] tracking-tight">
          eStudy AI Learning Assistant
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          Explore three ways to interact with the Essentials for AI learning chatbot.
        </p>
      </div>

      {/* Option Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Option 1: Webchat */}
        <OptionCard
          optionNumber={1}
          modeKey="webchat"
          title="Webchat — Floating Bubble"
          description="Open the chatbot through a floating chat bubble or overlay."
          sdkClass="Landbot.Livechat"
          status={webchatStatus}
          statusLabel={
            webchatStatus === 'loaded'
              ? 'Bubble Active'
              : webchatStatus === 'loading'
              ? 'Initializing...'
              : 'Ready to activate'
          }
          actionLabel="Preview Webchat"
          onLaunch={() => onNavigate('webchat')}
          onViewCode={() =>
            setActiveModal({
              title: 'Option 01: Webchat — Floating Bubble',
              snippet: SNIPPET_OPTION_1,
              sdkClass: 'Landbot.Livechat',
            })
          }
          secondaryAction={
            webchatStatus === 'idle'
              ? {
                  label: 'Activate Bubble',
                  onClick: () => initWebchat(false),
                }
              : webchatStatus === 'loaded'
              ? {
                  label: 'Open Chat',
                  onClick: () => openWebchat(),
                }
              : undefined
          }
        />

        {/* Option 2: Full Page */}
        <OptionCard
          optionNumber={2}
          modeKey="fullpage"
          title="Full Page Chatbot"
          description="Experience the chatbot using the entire available page."
          sdkClass="Landbot.Fullpage"
          status={fullpageStatus}
          statusLabel={
            fullpageStatus === 'loaded' ? 'Fullpage Active' : 'Ready to launch'
          }
          actionLabel="Launch Full Page"
          onLaunch={() => onNavigate('fullpage')}
          onViewCode={() =>
            setActiveModal({
              title: 'Option 02: Full Page Chatbot',
              snippet: SNIPPET_OPTION_2,
              sdkClass: 'Landbot.Fullpage',
            })
          }
        />

        {/* Option 3: Embedded Chatbot */}
        <OptionCard
          optionNumber={3}
          modeKey="embedded"
          title="Embedded Chatbot"
          description="Display the chatbot directly inside a section of the website."
          sdkClass="Landbot.Container"
          status={embeddedStatus}
          statusLabel={
            embeddedStatus === 'loaded' ? 'Container Active' : 'Ready to preview'
          }
          actionLabel="Launch Embedded"
          onLaunch={() => onNavigate('embedded')}
          onViewCode={() =>
            setActiveModal({
              title: 'Option 03: Embedded Chatbot',
              snippet: SNIPPET_OPTION_3,
              sdkClass: 'Landbot.Container',
            })
          }
        />
      </div>

      {/* Comparative Evaluation Matrix */}
      <div className="mt-14 bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-5 h-5 text-[#052B66]" aria-hidden="true" />
          <h2 className="text-base font-bold text-[#052B66]">
            Architectural Mode Comparison & Technical Specs
          </h2>
        </div>

        <p className="text-xs text-slate-600 mb-6 leading-relaxed">
          The table below outlines how each integration mode of the same Landbot configuration behaves across layout contexts:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-[#F7F9FC] text-slate-700">
                <th className="py-2.5 px-3 font-semibold">Display Mode</th>
                <th className="py-2.5 px-3 font-semibold">SDK Class</th>
                <th className="py-2.5 px-3 font-semibold">DOM Target</th>
                <th className="py-2.5 px-3 font-semibold">Primary E-Learning Use Case</th>
                <th className="py-2.5 px-3 font-semibold">Lifecycle Behavior</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="py-3 px-3 font-medium text-[#052B66]">
                  01. Webchat Bubble
                </td>
                <td className="py-3 px-3 font-mono text-slate-700">Landbot.Livechat</td>
                <td className="py-3 px-3">document.body (Fixed bottom-right)</td>
                <td className="py-3 px-3">
                  Persistent study companion accessible while reading course modules.
                </td>
                <td className="py-3 px-3">
                  Singleton initialized once; toggleable via launcher or SDK events.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-[#052B66]">
                  02. Full Page
                </td>
                <td className="py-3 px-3 font-mono text-slate-700">Landbot.Fullpage</td>
                <td className="py-3 px-3">Full Viewport (Fixed 100vw × 100vh)</td>
                <td className="py-3 px-3">
                  Diagnostic assessments, course onboarding, or comprehensive AI quizzes.
                </td>
                <td className="py-3 px-3">
                  Isolated view; disposed via destroy() when returning to options.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium text-[#052B66]">
                  03. Embedded Chatbot
                </td>
                <td className="py-3 px-3 font-mono text-slate-700">Landbot.Container</td>
                <td className="py-3 px-3 font-mono text-slate-700">#myLandbot (Width: 100%, Height: ~650px)</td>
                <td className="py-3 px-3">
                  In-lesson practice sandboxes and embedded knowledge checks.
                </td>
                <td className="py-3 px-3">
                  Mounted in designated container element; cleanly unmounted on exit.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Code Snippet Modal Popup */}
      {activeModal && (
        <CodeModal
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
          title={activeModal.title}
          snippet={activeModal.snippet}
          sdkClass={activeModal.sdkClass}
        />
      )}
    </div>
  );
};
