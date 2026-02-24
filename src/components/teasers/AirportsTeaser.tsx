import { TrendingDown, Gauge, Clock, Shield } from 'lucide-react';
import { BaseSectorTeaser } from './BaseSectorTeaser';

export function AirportsTeaser() {
  const benefits = [
    {
      icon: <TrendingDown className="w-4 h-4" />,
      text: "Up to 25% reduction in baggage systems, HVAC, and ground support energy costs"
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      text: "Optimizes jet bridges, cargo handling, and terminal climate control systems"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Installation during off-peak hours without disrupting flight operations"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "Protects critical navigation and safety systems from power fluctuations"
    }
  ];

  return (
    <BaseSectorTeaser
      headline="Optimize Airport Energy Costs by up to 25%"
      subHeadline="Specialized for terminal operations, baggage handling systems, ground support equipment, and cargo facilities serving major EMEA transportation hubs and port infrastructure operations."
      howItWorks="Our patented magnetic wave technology optimizes the energy-intensive systems that keep airports operational 24/7 - from baggage conveyor systems and jet bridge motors to cargo handling equipment and terminal HVAC systems. By delivering stable 50 / 60 Hz current to these critical systems, we reduce operational costs while ensuring the reliability essential for passenger safety and on-time performance."
      benefits={benefits}
      ctaText="Transform Your Airport Operations Efficiency"

    />
  );
}