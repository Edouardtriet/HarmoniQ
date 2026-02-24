import { TrendingDown, Gauge, Clock, Shield } from 'lucide-react';
import { BaseSectorTeaser } from './BaseSectorTeaser';

export function BuildingsTeaser() {
  const benefits = [
    {
      icon: <TrendingDown className="w-4 h-4" />,
      text: "Up to 25% reduction in HVAC, elevator, and lighting system energy costs"
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      text: "Optimizes chiller plants, ventilation fans, and building automation systems"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Installation during evenings/weekends without tenant disruption"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "Extends HVAC equipment life and reduces maintenance calls"
    }
  ];

  return (
    <BaseSectorTeaser
      headline="Reduce Building Energy Costs by up to 25%"
      subHeadline="Optimized for office towers, shopping centers, hospitals, hotels, and mixed-use developments serving EMEA commercial real estate portfolios and property management operations."
      howItWorks="Our patented magnetic wave technology targets the building systems that consume 70-80% of commercial energy costs - HVAC chillers and air handlers, elevator motor-generator sets, lighting ballasts, and building automation systems. By providing clean 50 / 60 Hz current to these systems, we optimize performance while reducing energy waste, improving tenant comfort, and lowering operating expenses."
      benefits={benefits}
      ctaText="Optimize Your Building Operations Today"

    />
  );
}