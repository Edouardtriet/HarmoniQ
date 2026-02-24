import { TrendingDown, Gauge, Clock, Shield } from 'lucide-react';
import { BaseSectorTeaser } from './BaseSectorTeaser';

export function ManufacturingTeaser() {
  const benefits = [
    {
      icon: <TrendingDown className="w-4 h-4" />,
      text: "Up to 25% reduction in conveyor, press, and production line energy costs"
    },
    {
      icon: <Gauge className="w-4 h-4" />,
      text: "Optimizes CNC machines, industrial presses, and automated assembly systems"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      text: "Installation during planned maintenance windows without production loss"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "Protects servo motors and drives from voltage spikes and harmonics"
    }
  ];

  return (
    <BaseSectorTeaser
      headline="Cut Manufacturing Energy Costs by up to 25%"
      subHeadline="Optimized for automotive plants, steel mills, chemical processing facilities, textile manufacturing operations, and heavy industry facilities across EMEA manufacturing sectors."
      howItWorks="Our patented magnetic wave technology targets the motor-intensive operations that define modern manufacturing - from conveyor systems and hydraulic presses to CNC machining centers and robotic assembly lines. By delivering stable 50 / 60 Hz current to your production equipment, we eliminate the electrical inefficiencies that increase both energy costs and equipment wear in high-demand manufacturing environments."
      benefits={benefits}
      ctaText="Transform Your Manufacturing Efficiency"

    />
  );
}