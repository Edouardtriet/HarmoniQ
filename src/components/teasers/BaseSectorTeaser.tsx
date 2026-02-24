import React from 'react';
import { Button } from '../ui/button';
import { Globe, Mail } from 'lucide-react';
import harmoniqLogo from 'figma:asset/6e45135b002ab6bd948c04b5f67cde05cd9cc6d4.png';
import harmoniqFullLogo from 'figma:asset/6ed12e07942b84cb1a32ed4d4b0c8d7e09b92cf8.png';
import { SimplifiedTechnologyDemo } from '../SimplifiedTechnologyDemo';

interface Benefit {
  icon: ReactNode;
  text: string;
}

interface BaseSectorTeaserProps {
  headline: string;
  subHeadline: string;
  howItWorks: string;
  benefits: Benefit[];
  ctaText: string;
}

export function BaseSectorTeaser({
  headline,
  subHeadline,
  howItWorks,
  benefits,
  ctaText
}: BaseSectorTeaserProps) {
  return (
    <div className="print-container bg-gradient-to-br from-background via-primary/5 to-primary/10 p-4 print:p-2">
      <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-lg print:max-w-none print:mx-0 print:h-full print:min-h-full print:flex print:flex-col">
        
        {/* Header Section - Compact layout without icons */}
        <div className="bg-gradient-to-r from-primary to-primary/90 p-6 print:p-4 text-white relative print:flex-shrink-0 print:min-h-0" style={{ minHeight: '120px' }}>
          
          {/* Headline and Logo Row */}
          <div className="flex items-center justify-between gap-4 print:gap-3 mb-4 print:mb-3">
            <h1 className="text-3xl print:text-xl font-bold leading-tight flex-1">
              {headline}
            </h1>
            <div className="bg-white/95 rounded-lg px-4 py-2 print:px-3 print:py-1.5 shrink-0 flex items-center justify-center">
              <img 
                src={harmoniqFullLogo} 
                alt="HarmoniQ Technologies" 
                className="h-8 print:h-6 w-auto object-contain"
              />
            </div>
          </div>
          
          {/* Subheadline */}
          <div>
            <p className="text-lg print:text-base text-white/90 leading-snug">
              {subHeadline}
            </p>
          </div>
        </div>

        {/* Content Section - Consistent layout */}
        <div className="p-6 print:p-4 space-y-6 print:space-y-3 bg-background flex-1 print:min-h-0 print:flex print:flex-col">
          
          {/* How It Works */}
          <div className="print:flex-shrink-0">
            <h2 className="text-xl print:text-lg font-semibold mb-3 print:mb-2 text-foreground">
              How It Works
            </h2>
            <div className="bg-primary/5 rounded-xl p-4 print:p-3 border border-primary/20">
              <p className="text-base print:text-sm leading-relaxed print:leading-snug text-foreground">
                {howItWorks}
              </p>
            </div>
          </div>

          {/* Technology Demonstration */}
          <div className="print:flex-shrink-0">
            <SimplifiedTechnologyDemo />
          </div>

          {/* Key Benefits */}
          <div className="print:flex-shrink-0">
            <h2 className="text-xl print:text-lg font-semibold mb-3 print:mb-2 text-foreground">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-4 print:gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start print:items-start gap-3 print:gap-2 bg-card rounded-lg p-4 print:p-3 border border-border print:flex-nowrap">
                  <div className="text-primary text-xl print:text-base flex-shrink-0 print:mt-0">
                    {benefit.icon}
                  </div>
                  <span className="text-sm print:text-sm font-medium text-foreground leading-tight print:leading-tight flex-1 print:inline">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-primary/90 rounded-xl p-4 print:p-3 text-center text-white print:flex-shrink-0">
            <h2 className="text-xl print:text-lg font-bold mb-3 print:mb-2">{ctaText}</h2>
            <div className="mb-3 print:mb-2">
              <Button 
                size="sm" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 print:px-6 print:py-2 print:text-sm"
              >
                Book Free Pilot Assessment
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 print:gap-3 text-white/90 text-base print:text-sm">
              <div className="flex items-center gap-2 print:gap-2">
                <Globe className="w-5 h-5 print:w-4 print:h-4" />
                <span className="font-medium">harmoniqenergy.com</span>
              </div>
              <div className="flex items-center gap-2 print:gap-2">
                <Mail className="w-5 h-5 print:w-4 print:h-4" />
                <span>enquiries@harmoniqenergy.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}