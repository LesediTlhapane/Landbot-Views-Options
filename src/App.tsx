/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WebchatProvider } from './context/WebchatContext';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { WebchatView } from './components/WebchatView';
import { FullPageView } from './components/FullPageView';
import { EmbeddedView } from './components/EmbeddedView';

type AppViewMode = 'overview' | 'webchat' | 'fullpage' | 'embedded';

function AppContent() {
  const [currentMode, setCurrentMode] = useState<AppViewMode>('overview');
  const [fullpageStatus, setFullpageStatus] = useState<
    'idle' | 'loading' | 'loaded' | 'error'
  >('idle');
  const [embeddedStatus, setEmbeddedStatus] = useState<
    'idle' | 'loading' | 'loaded' | 'error'
  >('idle');

  const navigateTo = (mode: AppViewMode) => {
    setCurrentMode(mode);
    if (mode === 'fullpage' && fullpageStatus === 'idle') {
      setFullpageStatus('loaded');
    }
    if (mode === 'embedded' && embeddedStatus === 'idle') {
      setEmbeddedStatus('loaded');
    }
  };

  // Full page mode renders without standard page header/footer so it can fill available viewport
  if (currentMode === 'fullpage') {
    return (
      <FullPageView
        onBack={() => {
          setCurrentMode('overview');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-[#052B66]">
      <Header currentMode={currentMode} onNavigate={navigateTo} />

      <main className="flex-1">
        {currentMode === 'overview' && (
          <MainPage
            onNavigate={navigateTo}
            fullpageStatus={fullpageStatus}
            embeddedStatus={embeddedStatus}
          />
        )}

        {currentMode === 'webchat' && (
          <WebchatView onBack={() => navigateTo('overview')} />
        )}

        {currentMode === 'embedded' && (
          <EmbeddedView onBack={() => navigateTo('overview')} />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#052B66]">eStudy</span>
            <span>AI Learning Assistant Integration Portal</span>
          </div>
          <div>
            <span>Powered by official Landbot Webchat SDK v3.0.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <WebchatProvider>
      <AppContent />
    </WebchatProvider>
  );
}
