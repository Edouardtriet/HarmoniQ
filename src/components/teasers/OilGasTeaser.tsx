import { TrendingDown, Gauge, Clock, Shield } from 'lucide-react';
import { BaseSectorTeaser } from './BaseSectorTeaser';

export function OilGasTeaser() {
  const benefits = [
    {
      icon: <TrendingDown className="w-4 h-4" />,
      text: "Up to 25% reduction in drilling rig, pump, and compressor energy costs"
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      text: "Optimizes power delivery to mud pumps, rotary drives, and extraction equipment"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Installation during routine maintenance without halting operations"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "Protects drilling motors and pumps from electrical stress in harsh environments"
    }
  ];

  return (
    <BaseSectorTeaser
      headline="Optimize Oil & Gas Energy Costs by up to 25%"
      subHeadline="Engineered for drilling rigs, offshore platforms, refineries, and pipeline pumping stations serving extraction facilities operating across North Sea and EMEA oil & gas operations."
      howItWorks="Our patented magnetic wave technology addresses the unique power quality challenges in oil & gas operations, from drilling mud pumps and rotary drives to pipeline compressors, refinery equipment, and oil storage facilities. By stabilizing current to 50 / 60 Hz, we reduce energy waste in motors that drive critical extraction, processing, storage, and transportation systems while extending equipment life in corrosive environments."
      benefits={benefits}
      ctaText="Maximize Your Oil & Gas Operations Efficiency"

    />
  );
}