import { TrendingDown, Gauge, Clock, Shield } from 'lucide-react';
import { BaseSectorTeaser } from './BaseSectorTeaser';

export function WaterUtilitiesTeaser() {
  const benefits = [
    {
      icon: <TrendingDown className="w-4 h-4" />,
      text: "Up to 25% reduction in water pump, blower, and treatment system energy costs"
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      text: "Optimizes centrifugal pumps, aerators, and clarifier drive systems"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Installation without interrupting critical water supply services"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "Extends pump impeller life and reduces cavitation damage"
    }
  ];

  return (
    <BaseSectorTeaser
      headline="Reduce Water Utility Energy Costs by up to 25%"
      subHeadline="Purpose-built for water treatment plants, sewage pumping stations, desalination facilities, and municipal water distribution systems serving EMEA communities and industrial operations."
      howItWorks="Our patented magnetic wave technology specifically optimizes the high-energy pump systems, blowers, and treatment equipment that consume 60-80% of water utility operating costs. By delivering clean 50 / 60 Hz current to centrifugal pumps, aerators, clarifiers, and filtration systems, we eliminate motor inefficiencies while ensuring consistent flow rates and treatment performance."
      benefits={benefits}
      ctaText="Optimize Your Water Utility Operations"

    />
  );
}