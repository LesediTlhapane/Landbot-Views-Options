import React from 'react';
import { MessageSquare } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  currentMode: 'overview' | 'webchat' | 'fullpage' | 'embedded';
  onNavigate: (mode: 'overview' | 'webchat' | 'fullpage' | 'embedded') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentMode, onNavigate }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand element with official image logo */}
        <button
          onClick={() => onNavigate('overview')}
          className="flex items-center gap-3 text-left text-slate-900 font-bold text-lg tracking-tight hover:opacity-90 transition-opacity whitespace-nowrap shrink-0 cursor-pointer"
          title="Return to home overview"
        >
          <img
            src={logoImg}
            alt="eStudy Logo"
            className="h-8 sm:h-9 w-auto object-contain shrink-0"
          />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 hidden sm:inline border-l border-slate-200 pl-3">
            Assistant Portal
          </span>
        </button>

        {/* Zone 2: Nav links */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => onNavigate('overview')}
            className={`cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentMode === 'overview'
                ? 'border-[#052B66] text-[#052B66] font-semibold'
                : 'border-transparent hover:text-[#052B66]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => onNavigate('webchat')}
            className={`cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentMode === 'webchat'
                ? 'border-[#052B66] text-[#052B66] font-semibold'
                : 'border-transparent hover:text-[#052B66]'
            }`}
          >
            Webchat Mode
          </button>
          <button
            onClick={() => onNavigate('fullpage')}
            className={`cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentMode === 'fullpage'
                ? 'border-[#052B66] text-[#052B66] font-semibold'
                : 'border-transparent hover:text-[#052B66]'
            }`}
          >
            Full Page Mode
          </button>
          <button
            onClick={() => onNavigate('embedded')}
            className={`cursor-pointer whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentMode === 'embedded'
                ? 'border-[#052B66] text-[#052B66] font-semibold'
                : 'border-transparent hover:text-[#052B66]'
            }`}
          >
            Embedded Mode
          </button>
        </nav>

        {/* Zone 3: Primary CTA action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('webchat')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#052B66] hover:bg-[#052B66]/90 px-3.5 py-2 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#45CC42]" aria-hidden="true" />
            <span>Launch Webchat</span>
          </button>
        </div>
      </div>
    </header>
  );
};
