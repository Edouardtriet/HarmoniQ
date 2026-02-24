import { TrendingDown, Gauge, Clock, Shield } from 'lucide-react';
import { BaseSectorTeaser } from './BaseSectorTeaser';

export function DataCentersTeaser() {
  const benefits = [
    {
      icon: <TrendingDown className="w-4 h-4" />,
      text: "Up to 25% reduction in server rack, cooling, and UPS system energy costs"
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      text: "Optimizes CRAC units, chillers, and power distribution systems"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Installation during maintenance windows without server downtime"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "Enhances power reliability for mission-critical computing infrastructure"
    }
  ];

  return (
    <BaseSectorTeaser
      headline="Cut Data Center Energy Costs by up to 25%"
      subHeadline="Mission-critical optimization for hyperscale facilities, colocation centers, enterprise data centers, and cloud infrastructure operations supporting EMEA digital services and computing infrastructure."
      howItWorks="Our patented magnetic wave technology addresses the enormous energy demands of modern data centers, from server racks and storage arrays to Computer Room Air Conditioning (CRAC) units, chillers, and Uninterruptible Power Supply (UPS) systems. By delivering ultra-clean 50 / 60 Hz current to your infrastructure, we reduce both IT and cooling energy consumption while enhancing the power reliability essential for 99.999% uptime requirements."
      benefits={benefits}
      ctaText="Secure Your Data Center's Energy Future"

    />
  );
}