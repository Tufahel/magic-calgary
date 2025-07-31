import React from 'react';

interface MedicalSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'green' | 'purple';
  className?: string;
}

export default function MedicalSpinner({ 
  size = 'md', 
  color = 'blue', 
  className = '' 
}: MedicalSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <svg
        className="animate-spin"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* DNA double helix inspired loading spinner */}
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          fill="currentColor"
        />
        {/* Medical cross in center */}
        <g className="opacity-60">
          <rect x="11" y="8" width="2" height="8" fill="currentColor" />
          <rect x="8" y="11" width="8" height="2" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

// Medical pulse animation component
export function MedicalPulse({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="absolute inset-0 rounded-full bg-current opacity-20 animate-ping pointer-events-none" />
    </div>
  );
}

// Heartbeat animation for critical elements
export function HeartbeatIcon({ 
  className = '' 
}: { 
  className?: string; 
}) {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        className="w-5 h-5 text-red-500 animate-pulse"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
