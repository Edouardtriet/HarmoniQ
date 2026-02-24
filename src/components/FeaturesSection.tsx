import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Server, Droplets, Snowflake, ThermometerSun, Factory, Plane, Phone, Fuel, Gauge, Wrench, MousePointer, ChevronDown } from "lucide-react";
import harmoniqFullLogo from 'figma:asset/6ed12e07942b84cb1a32ed4d4b0c8d7e09b92cf8.png';
import harmoniqWaveformLogo from 'figma:asset/3c270814f6d37ae21663366a29b474ae7dfacfa0.png';
import { TechnologyAnimation } from "./TechnologyAnimation";
import { TechnologyComparison } from "./TechnologyComparison";
import { TechnologyShowcase } from "./TechnologyShowcase";
import { SectorTeaserRouter } from "./SectorTeaserRouter";
import { motion } from "motion/react";

export function FeaturesSection() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const features = [
    {
      icon: () => (
        <div className="logo-container w-12 h-12">
          <img 
            src={harmoniqWaveformLogo} 
            alt="HarmoniQ Q Waveform Logo" 
            className="w-full h-full object-contain harmoniq-logo"
            style={{ background: 'transparent' }}
          />
        </div>
      ),
      title: "Pure 50 / 60 Hz Electric Current",
      description: "Uses magnetic waves to compress noise into pure 50 / 60 Hz electric current for optimal power quality and efficiency.",
      benefit: "Up to 25% energy reduction",
      color: "text-green-600"
    },
    {
      icon: Gauge,
      title: "Power Factor Correction",
      description: "Returns power factor to 1, achieving optimal electrical efficiency and eliminating reactive power losses.",
      benefit: "Perfect power factor = 1",
      color: "text-blue-600"
    },
    {
      icon: ThermometerSun,
      title: "Equipment Life Extension",
      description: "Extends useful life of equipment by reducing operating temperature and maintenance costs significantly.",
      benefit: "Lower maintenance costs",
      color: "text-purple-600"
    },
    {
      icon: Wrench,
      title: "Free & Easy Installation",
      description: "Patented and easy to install alongside existing electric equipment without any disruption to operations.",
      benefit: "Zero downtime setup",
      color: "text-orange-600"
    }
  ];

  const targetMarkets = [
    {
      icon: Building2,
      title: "Large Buildings & Offices",
      description: "Reduce HVAC, lighting and elevator energy consumption in commercial facilities",
      savings: "Building system optimization",
      sectorId: "buildings"
    },
    {
      icon: Factory,
      title: "Manufacturing & Mining",
      description: "Optimize heavy machinery, motors and industrial processes for maximum efficiency",
      savings: "Industrial optimization",
      sectorId: "manufacturing"
    },
    {
      icon: Droplets,
      title: "Water & Utilities",
      description: "Enhance pump efficiency and reduce energy consumption in treatment facilities",
      savings: "Improved pump performance",
      sectorId: "water-utilities"
    },
    {
      icon: Snowflake,
      title: "Cold Storage",
      description: "Optimize refrigeration systems, reduce cooling costs and maintain temperature consistency",
      savings: "High refrigeration efficiency",
      sectorId: "cold-storage"
    },
    {
      icon: Fuel,
      title: "Oil & Gas Operations",
      description: "Optimize pumping systems, drilling equipment, refinery operations, and oil storage facilities",
      savings: "Operational efficiency",
      sectorId: "oil-gas"
    },
    {
      icon: Plane,
      title: "Airports & Ports",
      description: "Optimize terminal systems, cargo handling equipment and ground support operations",
      savings: "Facility-wide efficiency",
      sectorId: "airports"
    },
    {
      icon: Phone,
      title: "Telecommunications",
      description: "Improve power quality for communication infrastructure and reduce operational costs",
      savings: "Enhanced infrastructure reliability",
      sectorId: "telecom"
    },
    {
      icon: Server,
      title: "Data Centers",
      description: "Improve power quality for critical infrastructure, servers and cooling systems",
      savings: "Enhanced power reliability",
      sectorId: "data-centers"
    }
  ];

  const handleSectorClick = (sectorId: string) => {
    setSelectedSector(sectorId);
  };

  const closeTeaserRouter = () => {
    setSelectedSector(null);
  };

  return (
    <>
      <section id="features" className="pt-20 pb-8 bg-gradient-to-br from-white/80 to-green-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block glass px-4 py-2 rounded-full mb-4">
              <span className="text-sm text-primary font-medium">Technology Overview</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium mb-8 tracking-tight pb-4 leading-relaxed">
              Delivers up to 25% Energy Reduction
              <span className="gradient-text block">by Improving Power Quality</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our patented magnetic wave technology compresses electrical noise into pure 50 / 60 Hz current, 
              delivering unmatched energy savings with no competing solution matching our performance.
            </p>
          </div>

          {/* Core Technology Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <Card key={index} className="glass border-none hover-3d">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 ${feature.color}`}>
                    {typeof feature.icon === 'function' ? <feature.icon /> : <feature.icon className="w-8 h-8" />}
                  </div>
                  <h3 className="font-medium mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {feature.benefit}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technology Animation */}
          <div className="mb-20">
            <TechnologyAnimation />
          </div>

          {/* Technology Comparison */}
          <div className="mb-20">
            <TechnologyComparison />
          </div>

          {/* Technology Hardware Showcase */}
          <TechnologyShowcase />

          {/* Target Markets */}
          <div id="applications" className="mb-16 mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                Transform Energy-Intensive Operations
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Ideally suited for high-energy sites with heavy electric motor use including HVAC, refrigeration, 
                mixing, and cooling systems. Our technology delivers maximum impact where energy consumption matters most.
              </p>
              <div className="inline-block glass px-4 py-2 rounded-full">
                <span className="text-sm text-primary font-medium">Click on your relevant sector for more information</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetMarkets.map((market, index) => (
                <Card 
                  key={index} 
                  className="glass border-none spatial h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg relative group"
                  onClick={() => handleSectorClick(market.sectorId)}
                >
                  {/* Click Me Indicator */}
                  <div className="absolute top-3 right-3 z-10">
                    <div className="glass bg-primary/20 px-2 py-1 rounded-full border border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <div className="flex items-center gap-1">
                        <MousePointer className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-primary">find out more</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-green-600 flex items-center justify-center mx-auto mb-4 text-white">
                      <market.icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-medium mb-2">{market.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{market.description}</p>
                    <div className="mt-auto">
                      <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-2">
                        {market.savings}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Click for more information
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Get in Touch CTA */}
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="glass px-6 py-3 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 focus-enhanced group"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span className="font-medium">Don't see your sector? Get in Touch</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sector Teaser Router */}
      <SectorTeaserRouter 
        selectedSector={selectedSector}
        onClose={closeTeaserRouter}
      />
    </>
  );
}