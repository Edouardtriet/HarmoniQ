import { TrendingDown, Gauge, Clock, Shield } from 'lucide-react';
import { BaseSectorTeaser } from './BaseSectorTeaser';

export function TelecomTeaser() {
  const benefits = [
    {
      icon: <TrendingDown className="w-4 h-4" />,
      text: "Up to 25% reduction in base station, tower, and cooling system energy costs"
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      text: "Optimizes RF amplifiers, signal processors, and backup power systems"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Installation without network downtime or service interruption"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "Protects sensitive electronics from power quality fluctuations"
    }
  ];

  return (
    <BaseSectorTeaser
      headline="Reduce Telecom Energy Costs by up to 25%"
      subHeadline="Engineered for 5G networks, fiber infrastructure, cellular towers, satellite facilities, and telecommunications switching centers serving EMEA communication networks and data services."
      howItWorks="Our patented magnetic wave technology addresses the critical power quality needs of telecommunications infrastructure, from base station amplifiers and signal processing equipment to cooling systems and backup power supplies. By providing clean 50 / 60 Hz current to your network equipment, we reduce energy consumption while enhancing signal reliability and extending the life of sensitive RF and digital processing components."
      benefits={benefits}
      ctaText="Enhance Your Telecom Infrastructure Efficiency"

    />
  );
}