import React from 'react';
import { CheckCircle2, Clock, AlertCircle, Loader2 } from 'lucide-react';
import { ChatbotLoadStatus } from '../context/WebchatContext';

interface StatusBadgeProps {
  status: ChatbotLoadStatus;
  label?: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  className = '',
}) => {
  if (status === 'loaded') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 ${className}`}
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-[#45CC42] shrink-0" aria-hidden="true" />
        <span>{label || 'Loaded & Active'}</span>
      </div>
    );
  }

  if (status === 'loading') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 ${className}`}
        role="status"
        aria-live="polite"
      >
        <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600 shrink-0" aria-hidden="true" />
        <span>{label || 'Initializing SDK...'}</span>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 text-xs font-medium text-red-700 ${className}`}
        role="status"
        aria-live="polite"
      >
        <AlertCircle className="w-3.5 h-3.5 text-red-600 shrink-0" aria-hidden="true" />
        <span>{label || 'Load Failed'}</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 ${className}`}
      role="status"
    >
      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
      <span>{label || 'Ready to initialize'}</span>
    </div>
  );
};
