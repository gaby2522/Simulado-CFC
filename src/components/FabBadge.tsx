import React from 'react';
import fabCrestIcon from '../assets/images/fab_crest_icon_1791982746034.jpg';

interface FabBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const FabBadge: React.FC<FabBadgeProps> = ({ size = 'md', showText = false }) => {
  const dimension = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-9 h-9';

  return (
    <div className="flex items-center gap-2.5 shrink-0">
      {/* Brasão Oficial da Força Aérea Brasileira */}
      <div
        className={`${dimension} rounded-xl overflow-hidden shadow-sm border border-[#D4AF37]/60 bg-[#002D62] flex items-center justify-center shrink-0 relative group transition-transform duration-200 hover:scale-105`}
        title="Força Aérea Brasileira - Gládio Alado"
      >
        <img
          src={fabCrestIcon}
          alt="Brasão Oficial da Força Aérea Brasileira"
          className="w-full h-full object-cover select-none pointer-events-none"
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xs font-black tracking-wider text-[#002D62] dark:text-blue-300 uppercase">
            Força Aérea Brasileira
          </span>
          <span className="text-[10px] font-bold text-amber-600 dark:text-[#D4AF37]">
            CFC - SAD
          </span>
        </div>
      )}
    </div>
  );
};
