import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Activity, Gauge, Filter } from "lucide-react";
import harmoniqDevice1 from 'figma:asset/43e71061f0e1e8cb51f29d22b8d80a0227d8bb99.png';
import harmoniqDevice2 from 'figma:asset/e283f189a9e0ef018e8c913568bcc0fe33eb6a82.png';
import harmoniqDevice3 from 'figma:asset/d24e5f10c8dcf1f559a787ed722453d27a81c263.png';

export function TechnologyShowcase() {
  const hardwareConfigurations = [
    {
      image: harmoniqDevice1,
      icon: Activity,
      title: "1. Current Balancing",
      description: "Technology Driver: The Line/Power Filter and Switch Gear Booster work together to reduce phase imbalances across 3-phase circuits by adjusting impedance and filtering signal harmonics.",
      mechanism: "Mechanism: The system samples impedance at 20,000 times per second and actively tunes each phase to align the current flow, reducing heat, torque variation, and inefficiencies.",
      features: ["20,000 samples per second", "3-phase circuit balancing", "Real-time impedance adjustment"],
      application: "Reduces heat and torque variation"
    },
    {
      image: harmoniqDevice3,
      icon: Gauge,
      title: "2. Power Factor Correction",
      description: "Technology Driver: The Switch Gear Booster dynamically raises the power factor to 98% or higher without injecting reactive power via capacitor banks.",
      mechanism: "Mechanism: By stabilizing voltage and aligning voltage-current phase angles, the system reduces the apparent power (kVA) needed to deliver a given real power (kW).",
      features: ["Power factor to 98%+", "No capacitor banks needed", "Voltage-current alignment"],
      application: "Reduces apparent power requirements"
    },
    {
      image: harmoniqDevice2,
      icon: Filter,
      title: "3. Harmonic Filtering",
      description: "Technology Driver: The adjustable Line/Power Filter is tuned for narrowband filtering of both 50 / 60 Hz signals, capable of mitigating up to 51 harmonic levels.",
      mechanism: "Mechanism: Harmonic \"waste\" is redirected to earth ground or the transformer's neutral line, reducing total harmonic distortion (THD) without back feeding into the network.",
      features: ["50 / 60 Hz filtering", "Up to 51 harmonic levels", "No network back feeding"],
      application: "Reduces total harmonic distortion"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-white/90 to-green-50/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-medium mb-4">
            Hardware Overview
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our patented magnetic wave devices are engineered for reliability and performance, 
            delivering up to 25% energy savings across various installation configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hardwareConfigurations.map((config, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="glass border-none hover-3d h-full group overflow-hidden">
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 aspect-[4/3] overflow-hidden">
                    <img 
                      src={config.image} 
                      alt={config.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                      style={index === 0 || index === 2 ? { mixBlendMode: 'multiply' } : undefined}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium text-lg">{config.title}</h4>
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <config.icon className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <strong className="text-primary">Technology Driver:</strong> {config.description.replace('Technology Driver: ', '')}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <strong className="text-primary">Mechanism:</strong> {config.mechanism.replace('Mechanism: ', '')}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <div className="space-y-2">
                        {config.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                        {config.application}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}