import React from 'react';
import { ArrowRight, MessageSquare, Maximize2, LayoutGrid } from 'lucide-react';
import { StatusBadge } from './StatusBadge';
import { ChatbotLoadStatus } from '../context/WebchatContext';

interface OptionCardProps {
  optionNumber: number;
  modeKey: 'webchat' | 'fullpage' | 'embedded';
  title: string;
  description: string;
  sdkClass: string;
  status: ChatbotLoadStatus;
  statusLabel?: string;
  actionLabel: string;
  onLaunch: () => void;
  onViewCode: () => void;
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

export const OptionCard: React.FC<OptionCardProps> = ({
  optionNumber,
  modeKey,
  title,
  description,
  sdkClass,
  status,
  statusLabel,
  actionLabel,
  onLaunch,
  onViewCode,
  secondaryAction,
}) => {
  const getIcon = () => {
    switch (modeKey) {
      case 'webchat':
        return <MessageSquare className="w-5 h-5 text-[#052B66]" aria-hidden="true" />;
      case 'fullpage':
        return <Maximize2 className="w-5 h-5 text-[#052B66]" aria-hidden="true" />;
      case 'embedded':
        return <LayoutGrid className="w-5 h-5 text-[#052B66]" aria-hidden="true" />;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
      <div>
        {/* Card header with natural numbering, code snippet button, and status */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Option 0{optionNumber}
            </span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="text-xs font-mono text-slate-500">{sdkClass}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* <> Code Snippet Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewCode();
              }}
              className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-mono font-bold text-[#052B66] hover:text-white bg-slate-100 hover:bg-[#052B66] border border-slate-300 rounded transition-colors cursor-pointer shadow-2xs"
              title="View integration code snippet (<>)"
              aria-label={`View code snippet for Option 0${optionNumber}`}
            >
              &lt;&gt;
            </button>
            <StatusBadge status={status} label={statusLabel} />
          </div>
        </div>

        {/* Mode Icon and Title */}
        <div className="flex items-start gap-3 mt-2">
          <div className="p-2 rounded bg-[#F7F9FC] border border-slate-100 shrink-0 mt-0.5">
            {getIcon()}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#052B66] tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
        <button
          onClick={onLaunch}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#052B66] hover:bg-[#052B66]/90 rounded-md transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#052B66]"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="w-4 h-4 text-[#45CC42] shrink-0" aria-hidden="true" />
        </button>

        {/* Code snippet button in action row */}
        <button
          onClick={onViewCode}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-mono font-bold text-[#052B66] bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-colors cursor-pointer shrink-0"
          title="View embed code snippet (<>)"
          aria-label="View embed code snippet"
        >
          <span>&lt;&gt;</span>
          <span className="font-sans font-medium text-slate-700">Snippet</span>
        </button>

        {secondaryAction && (
          <button
            onClick={secondaryAction.onClick}
            className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-[#052B66] bg-[#F7F9FC] hover:bg-slate-100 border border-slate-200 rounded-md transition-colors cursor-pointer"
          >
            {secondaryAction.label}
          </button>
        )}
      </div>
    </div>
  );
};
