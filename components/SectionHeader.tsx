
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-5xl font-black mb-4 ${light ? 'text-white' : 'text-[#800000]'}`}>
        {title}
      </h2>
      <div className={`h-1.5 w-20 bg-[#FF9800] mb-6 ${centered ? 'mx-auto' : ''}`}></div>
      {subtitle && (
        <p className={`max-w-2xl text-lg font-medium leading-relaxed ${centered ? 'mx-auto' : ''} ${light ? 'text-[#FFF8E7] opacity-90' : 'text-[#333333] opacity-70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
