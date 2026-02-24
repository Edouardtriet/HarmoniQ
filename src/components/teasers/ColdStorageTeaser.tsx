import { TrendingDown, Gauge, Clock, Shield } from 'lucide-react';
import { BaseSectorTeaser } from './BaseSectorTeaser';

export function ColdStorageTeaser() {
  const benefits = [
    {
      icon: <TrendingDown className="w-4 h-4" />,
      text: "Up to 25% reduction in compressor and refrigeration energy costs"
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      text: "Optimizes power factor for chillers, freezers, and cooling systems"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Installation without disrupting cold chain operations"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "Extends compressor life and reduces maintenance cycles"
    }
  ];

  return (
    <BaseSectorTeaser
      headline="Reduce Cold Storage Energy Costs by up to 25%"
      subHeadline="Specialized power optimization for freezers, chillers, blast coolers, and refrigerated warehouses serving supermarket chains, food processing facilities, and cold storage operations across EMEA."
      howItWorks="Our patented magnetic wave technology specifically targets the power inefficiencies in refrigeration compressors, evaporator fans, and cooling system motors. By delivering pure 50 / 60 Hz current to your cold storage equipment, we eliminate electrical waste that causes temperature fluctuations and increases energy consumption in freezers, chillers, and blast cooling systems."
      benefits={benefits}
      ctaText="Transform Your Cold Storage Operations Today"
    />
  );
}