import { useTheme } from '../context/ThemeContext';

import suezLogo from '../assets/logos/suez.png';
import nestleLogo from '../assets/logos/nestle.png';
import attLogo from '../assets/logos/att.png';
import lineageLogo from '../assets/logos/lineage.png';
import plainsLogo from '../assets/logos/plains.png';
import schlumbergerLogo from '../assets/logos/schlumberger.png';
import amazonLogisticsLogo from '../assets/logos/amazon-logistics.png';
import pioneerMetalLogo from '../assets/logos/pioneer-metal-finishing.jpg';
import waterbridgeLogo from '../assets/logos/waterbridge.jpg';
import flexLogo from '../assets/logos/flex.png';

const logos = [
  { name: 'Suez', src: suezLogo },
  { name: 'Nestle', src: nestleLogo },
  { name: 'AT&T', src: attLogo },
  { name: 'Lineage', src: lineageLogo },
  { name: 'Plains All American', src: plainsLogo },
  { name: 'Schlumberger', src: schlumbergerLogo },
  { name: 'Amazon Logistics', src: amazonLogisticsLogo },
  { name: 'Pioneer Metal Finishing', src: pioneerMetalLogo },
  { name: 'WaterBridge', src: waterbridgeLogo },
  { name: 'Flex', src: flexLogo },
];

export function LogoCarousel() {
  const { theme } = useTheme();

  return (
    <section className="py-12 bg-gradient-to-br from-white/90 to-green-50/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-medium mb-4 tracking-tight">
            <span className="gradient-text">Select Customers</span>
          </h3>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient fade overlays */}
          <div
            className="absolute left-0 top-0 w-20 h-full z-10 pointer-events-none"
            style={{
              background:
                theme === 'light'
                  ? 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.75), transparent)'
                  : 'linear-gradient(to right, rgba(10,10,10,1), rgba(10,10,10,0.8), transparent)',
            }}
          />
          <div
            className="absolute right-0 top-0 w-20 h-full z-10 pointer-events-none"
            style={{
              background:
                theme === 'light'
                  ? 'linear-gradient(to left, rgba(255,255,255,0.95), rgba(255,255,255,0.75), transparent)'
                  : 'linear-gradient(to left, rgba(10,10,10,1), rgba(10,10,10,0.8), transparent)',
            }}
          />

          {/* Marquee track — two copies for seamless loop */}
          <div className="flex w-max hover:[animation-play-state:paused] marquee-track">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-12 md:gap-16 px-6 md:px-8">
                {logos.map((logo) => (
                  <div
                    key={`${copy}-${logo.name}`}
                    className="flex-shrink-0 w-24 h-14 md:w-32 md:h-20 flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="max-w-full max-h-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
