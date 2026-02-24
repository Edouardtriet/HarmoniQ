import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Snowflake, Factory, Fuel, Droplets, Server, ChevronRight, TrendingDown, Zap, Gauge, MapPin, Calendar, Wrench, Quote } from "lucide-react";
import { motion } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LineChart, Line, Legend, Tooltip } from "recharts";
import { ImageWithFallback } from './figma/ImageWithFallback';
import vfdConsumptionGraph from 'figma:asset/9df0e2e081987f9a7e69a161ec0143a4f3b84aec.png';
import installationPhotos from 'figma:asset/dd57820dfbea02055c2a7752bea9f2f156d175cf.png';
import oilStorageDiagram from 'figma:asset/c3192e595c245860923855740d4aac2514aa48c5.png';
import metalFinishingDocument from 'figma:asset/ce0bc479a7384255574375a9021b1662f118e861.png';
import usLocationMap from 'figma:asset/40b339793b0bf071aeccc0b15353aa665ace74bc.png';
import consumptionChart from 'figma:asset/e182b2c2d7b955b9a2f0936e73cf5bd5071430f5.png';
import waterPumpDocument from 'figma:asset/485dad7576f8c0d43a286428d9f777a65559d60b.png';
import waterPumpInstallation from 'figma:asset/8e3fb2a3b92e7dc6ea8ea0a60d9c8a1bb85c6060.png';
import waterPumpMotor from 'figma:asset/856c70f112d8522c5f49f8353337d6d0a95cf5e3.png';
import coldStorageDocument from 'figma:asset/eaa9c5732a84bf4f5f861a85a467a714f2116a74.png';
import coldStorageMeters from 'figma:asset/af232a7c05ad1827467eb29a06f15dd4335b2c22.png';
import coldStorageCompressors from 'figma:asset/3bdcd5dfeeba81d36087609f105c522d2d9b4b3e.png';
import telecomChillerPowerFilter from 'figma:asset/a5bc619af690be4a984b4f65a45b735cdd65e3b5.png';
import telecomChart from 'figma:asset/038bce705d4472dc66a4d785676bfc20971d9829.png';
import harmoniqFullLogo from 'figma:asset/6ed12e07942b84cb1a32ed4d4b0c8d7e09b92cf8.png';

interface CaseStudy {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  sector: string;
  savings: string;
  efficiency: string;
  description: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  metrics: {
    energyReduction: string;
    costSavings: string;
    powerFactor: string;
  };
  technical?: {
    location: string;
    application: string;
    peakDemand: string;
    capacityFactor: string;
    annualConsumption: string;
    installationTime: string;
  };
  testimonial?: string;
  keyBenefits?: {
    title: string;
    description: string;
  }[];
  images?: {
    primary?: string;
    secondary?: string;
    primaryCaption?: string;
    secondaryCaption?: string;
  };
}

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: "cold-storage",
      icon: Snowflake,
      title: "Cold Storage Company",
      subtitle: "Large-Scale Refrigeration Facility - 200,000 sq ft",
      sector: "Cold Storage & Refrigeration",
      savings: "15.4% Bill Savings",
      efficiency: "Power Factor: 0.99",
      description: "Large-scale cold storage facility with varying facility ages (new and 15+ years old) achieved significant energy savings and equipment longevity improvements through 60Hz energy tuning and active power filters targeting large compressors.",
      challenges: [
        "High energy consumption with 5,000,000-12,000,000 kWh annual consumption from refrigeration systems",
        "Varying facility ages requiring different optimization approaches for both new and 15+ years old facilities",
        "Need for energy savings with added benefit of lower degradation and longer useful life of equipment"
      ],
      solutions: [
        "Installation of proprietary and patented power tuning technology and active power filters",
        "Tuning energy to 60Hz allows motors to consume less amperage while performing the same work",
        "Deployed system to target large compressors that power refrigeration systems within cold storage facilities"
      ],
      results: [
        "15.4% bill savings across Energy Charge, Peak Demand Charge",
        "13.92% kVA reduction improving electrical efficiency",
        "Power Factor Correction: significant improvement to 0.99",
        "Temperature: Overall drop in temperature by 1.5-3°C correlating to 20% extension of useful life (500HP) motor"
      ],
      metrics: {
        energyReduction: "15.4%",
        costSavings: "15.4% Bill Savings",
        powerFactor: "0.99"
      },
      technical: {
        location: "Windsor, CO & Elizabeth, NJ",
        application: "Large compressors for refrigeration systems",
        peakDemand: "Variable demand",
        capacityFactor: "Continuous operation",
        annualConsumption: "5,000,000-12,000,000 kWh",
        installationTime: "Minimal downtime installation"
      },
      keyBenefits: [
        {
          title: "Power Quality Improvement",
          description: "Improves power factor and reduces harmonic distortion, enhancing electrical system reliability"
        },
        {
          title: "Energy Efficiency", 
          description: "Reduces reactive power, lowering energy consumption and associated costs"
        },
        {
          title: "Harmonic Mitigation",
          description: "Filters up to 51 levels of upstream harmonics to earth ground"
        },
        {
          title: "Thermal Management",
          description: "Minimizes heat generation in inductive loads, prolonging equipment lifespan"
        }
      ],
      images: {
        primary: coldStorageMeters,
        primaryCaption: "Live meter readings showing 360A system off vs 300A system on"
      }
    },
    {
      id: "manufacturing",
      icon: Factory,
      title: "Metal Finishing Company",
      subtitle: "Industrial Metal Finishing Operations - 6 US Locations",
      sector: "Manufacturing & Metal Processing",
      savings: "20% Energy Reduction",
      efficiency: "Power Quality Optimization",
      description: "Industrial metal finishing company with 6 facilities achieved 12-20% energy savings and extended equipment life through power quality optimization and harmonic filtering.",
      challenges: [
        "High energy consumption across 6 facilities with 8.2M kWh annual consumption",
        "Complex multi-site operations with varying electrical systems and schedules",
        "Harmonic distortion reducing equipment reliability and increasing maintenance costs"
      ],
      solutions: [
        "Installation of proprietary and patented power tuning technology and active power filters",
        "60Hz energy tuning allowing motors to consume less amperage while performing the same work",
        "Coordinated installation across all facilities completed in 4 weeks"
      ],
      results: [
        "12-20% energy savings achieved across all 6 installations",
        "Extended equipment life with reduced degradation and maintenance requirements",
        "Filtered up to 51 levels of upstream harmonics to earth ground",
        "Power factor optimization and harmonic distortion reduction"
      ],
      metrics: {
        energyReduction: "12-20%",
        costSavings: "12-20% Bill Savings",
        powerFactor: "Optimized"
      },
      technical: {
        location: "6 US Locations",
        application: "Industrial Metal Finishing Operations",
        peakDemand: "~1,300 kW combined",
        capacityFactor: "Multi-shift operations",
        annualConsumption: "8,207,000 kWh",
        installationTime: "4 weeks total"
      },
      testimonial: "HarmoniQ delivered an incredible outcome that has surpassed all expectations. We didn't realize how much of an opportunity we had to reduce energy consumption, carbon footprint and drive material savings from power quality optimization in our plants. Working with HarmoniQ has been a true pleasure, and we couldn't be happier with the results both in form of financial savings and in infrastructural performance driven by optimized power quality.",
      keyBenefits: [
        {
          title: "Power Quality Improvement",
          description: "Improves power factor and reduces harmonic distortion, enhancing electrical system reliability."
        },
        {
          title: "Energy Efficiency", 
          description: "Reduces reactive power, lowering energy consumption and associated costs."
        },
        {
          title: "Harmonic Mitigation",
          description: "Filters up to 51 levels of upstream harmonics to earth ground."
        },
        {
          title: "Thermal Management",
          description: "Minimizes heat generation in inductive loads, prolonging equipment lifespan."
        }
      ],
      images: {
        primary: usLocationMap,
        primaryCaption: "6 US facility locations optimized for energy efficiency"
      }
    },
    {
      id: "oil-gas",
      icon: Fuel,
      title: "Oil Storage Facility",
      subtitle: "Petroleum Storage Tank Operations - Cushing, OK",
      sector: "Oil & Gas Storage",
      savings: "10.5% Bill Savings",
      efficiency: "Power Factor: 0.96",
      description: "Large petroleum storage facility with 8 AC motors driving mixers achieved significant bill savings and power quality improvements through HarmoniQ's magnetic wave technology.",
      challenges: [
        "High-power motor operations for petroleum mixing",
        "Poor power factor (~70%) affecting electrical efficiency", 
        "High kVAR demand increasing operational costs"
      ],
      solutions: [
        "Installation of proprietary power tuning technology in Class 1 Division 2 enclosures",
        "Tuning energy to 60Hz for optimal motor performance",
        "Advanced harmonic power filter designed for DC variable frequency drives"
      ],
      results: [
        "10.5% measured bill savings (Energy cost, Billing Demand, Fuel Adjustment, and Taxes)",
        "Significant improvement in power quality reducing heat stress for motors",
        "Power Factor increased from ~70% to ~96%",
        "kVAR reduced by 60% improving electrical efficiency"
      ],
      metrics: {
        energyReduction: "24.9%",
        costSavings: "10.5% Bill Savings",
        powerFactor: "0.96"
      },
      technical: {
        location: "Cushing, OK",
        application: "8 x AC motors driving mixers",
        peakDemand: "~204 kW",
        capacityFactor: "60%",
        annualConsumption: "76,586 kWh",
        installationTime: "Less than 3 days"
      },
      images: {
        primary: oilStorageDiagram,
        primaryCaption: "Petroleum storage facility power optimization system"
      }
    },
    {
      id: "water-utilities",
      icon: Droplets,
      title: "Water Pump Stations",
      subtitle: "Midstream Water Pumping Operations - Pecos, TX",
      sector: "Water & Utilities",
      savings: "6.35% Energy Savings",
      efficiency: "57% THD Reduction",
      description: "Midstream water pump stations in Pecos, TX with injection pumps achieved significant energy savings and enhanced pump reliability through advanced harmonic filtering and power quality optimization.",
      challenges: [
        "High energy consumption with ~7.98M kWh annual consumption from injection pumps",
        "Total Harmonic Distortion (THD) affecting pump performance and reliability",
        "Frequent 1600-amp breaker replacements required multiple times per year"
      ],
      solutions: [
        "Installed HarmoniQ power filters to effectively mitigate harmonic distortion",
        "Containerized system offering secure, weather-resistant, and easy-to-install configuration",
        "Power quality optimization improving efficiency of motors that power water pumps"
      ],
      results: [
        "6.35% energy savings achieved across water pumping operations",
        "5-6% reduction in amperage consumption",
        "57% reduction in Total Harmonic Distortion (THD)",
        "Significantly reduced frequency of replacing 1600-amp breakers"
      ],
      metrics: {
        energyReduction: "6.35%",
        costSavings: "6.35% Bill Savings",
        powerFactor: "Optimized"
      },
      technical: {
        location: "Pecos, TX",
        application: "Injection Pumps",
        peakDemand: "~1,208 kW",
        capacityFactor: "Continuous operation",
        annualConsumption: "7,984,572 kWh",
        installationTime: "Weather-resistant containerized system"
      },
      images: {
        primary: waterPumpInstallation,
        primaryCaption: "HarmoniQ power filter installation at water pumping station"
      }
    },
    {
      id: "telecommunications",
      icon: Server,
      title: "Telecom Center",
      subtitle: "Chiller Package Optimization - 808 kW Peak Demand",
      sector: "Telecommunications",
      savings: "13% Energy Savings",
      efficiency: "Power Factor: 99.9%",
      description: "Telecommunications center with chiller package achieved significant energy savings and enhanced equipment reliability through HarmoniQ power filters, reducing harmonic distortion and improving power quality for critical cooling systems.",
      challenges: [
        "High energy consumption with 6,100,900 kWh annual consumption from chiller systems",
        "Electrical current spikes affecting chiller performance and reliability",
        "Power quality issues with power factor at 92% affecting electrical efficiency"
      ],
      solutions: [
        "Installed HarmoniQ power filters to effectively mitigate harmonic distortion",
        "Improved the quality of power supplied to the chillers",
        "Reduced stress on electrical components through enhanced power conditioning"
      ],
      results: [
        "13% energy savings achieved across chiller operations",
        "Substantial reduction in occurrence of electrical current spikes",
        "11-32% reduction in amp consumption across different operational conditions",
        "Power factor improvement from 92% to 99.9%"
      ],
      metrics: {
        energyReduction: "13%",
        costSavings: "Amp Reduction ranging from 11% to 32%",
        powerFactor: "99.9%"
      },
      technical: {
        location: "Telecommunications Center",
        application: "Chiller Package",
        peakDemand: "808 kW",
        capacityFactor: "Continuous cooling operations",
        annualConsumption: "6,100,900 kWh",
        installationTime: "Minimal downtime installation"
      },
      images: {
        primary: telecomChillerPowerFilter,
        primaryCaption: "Power filter installation for telecom chiller optimization"
      }
    }
  ];

  const handleCaseClick = (caseId: string) => {
    setSelectedCase(selectedCase === caseId ? null : caseId);
  };

  const selectedCaseData = caseStudies.find(c => c.id === selectedCase);

  return (
    <section id="case-studies-section" className="pt-20 pb-16 bg-gradient-to-br from-white/90 to-green-50/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 print:hidden">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm text-primary font-medium">Real-World Results</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium mb-8 tracking-tight pb-4 leading-relaxed">
            Proven Energy Savings
            <span className="gradient-text block">Across Multiple Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real case studies from our deployed technology showing consistent energy reductions 
            up to 25% across diverse industrial applications with power factor correction to 1.0.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 print:hidden">
          {caseStudies.map((caseStudy, index) => (
            <Card 
              key={caseStudy.id}
              className={`glass border-none spatial cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                selectedCase === caseStudy.id ? 'ring-2 ring-primary/50 bg-primary/5' : ''
              }`}
              onClick={() => handleCaseClick(caseStudy.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-[#00cc9a] flex items-center justify-center mx-auto mb-4 text-white">
                  <caseStudy.icon className="w-8 h-8" />
                </div>
                <h4 className="font-medium mb-2">
                  {caseStudy.id === "telecommunications" ? (
                    <>
                      Telecom<br />Center
                    </>
                  ) : caseStudy.id === "oil-gas" ? (
                    <>
                      Oil Storage<br />Facility
                    </>
                  ) : (
                    caseStudy.title
                  )}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">{caseStudy.subtitle}</p>
                
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-sm font-medium">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    {caseStudy.savings}
                  </Badge>
                  <div className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                    {caseStudy.efficiency}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-1 text-sm text-muted-foreground">
                  <span>View Details</span>
                  <ChevronRight className={`w-3 h-3 transition-transform duration-300 ${
                    selectedCase === caseStudy.id ? 'rotate-90' : ''
                  }`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Case Study */}
        {selectedCaseData && (
          <div className="mt-8">
            <Card className="glass border-none">
              <CardContent className="p-8 print:p-4">
                <div className="space-y-8">
                  {/* Header Section */}
                  <div className="relative">
                    {/* HarmoniQ Logo - Top Right */}
                    <div className="absolute top-0 right-0 flex items-center gap-3 z-10">
                      <div className="w-64 h-20 flex items-center justify-center glass rounded-lg border border-primary/20">
                        <img 
                          src={harmoniqFullLogo} 
                          alt="HarmoniQ Energy Logo" 
                          className="w-60 h-16 object-contain harmoniq-logo"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 mb-8">
                      <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary to-[#00cc9a] flex items-center justify-center text-white flex-shrink-0">
                        <selectedCaseData.icon className="w-12 h-12" />
                      </div>
                      <div className="flex-grow pr-68">
                        <h3 className="text-3xl font-medium mb-3">{selectedCaseData.title}</h3>
                        <p className="text-lg text-muted-foreground mb-3">{selectedCaseData.subtitle}</p>
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="outline" className="text-sm">
                            {selectedCaseData.sector}
                          </Badge>
                          <Badge variant="secondary" className="text-sm">
                            <MapPin className="w-3 h-3 mr-1" />
                            {selectedCaseData.technical?.location}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 1. Project Challenges and Technical Solutions */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <Card className="glass border-none">
                      <CardContent className="p-6">
                        <h4 className="font-medium mb-4">Project Challenges</h4>
                        <ul className="space-y-3">
                          {selectedCaseData.challenges.map((challenge, index) => (
                            <li key={index} className="text-base text-muted-foreground leading-relaxed flex items-start">
                              <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2 mr-3"></span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="glass border-none">
                      <CardContent className="p-6">
                        <h4 className="font-medium mb-4">Technical Solutions</h4>
                        <ul className="space-y-3">
                          {selectedCaseData.solutions.map((solution, index) => (
                            <li key={index} className="text-base text-muted-foreground leading-relaxed flex items-start">
                              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2 mr-3"></span>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Water Utilities - Graph and Field of Application */}
                  {selectedCaseData.id === "water-utilities" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <TrendingDown className="w-5 h-5 text-primary" />
                            VFD Consumption Analysis
                          </h4>
                          <div className="rounded-lg overflow-hidden bg-white p-4">
                            <img 
                              src={vfdConsumptionGraph}
                              alt="VFD consumption graph showing power reduction from 185 to 170 after system activation"
                              className="w-full h-auto object-contain max-h-64"
                            />
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            Real-time VFD consumption monitoring showing immediate power reduction from 185 to 170 units after HarmoniQ system activation, demonstrating measurable energy savings.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Droplets className="w-5 h-5 text-primary" />
                            Field of Application
                          </h4>
                          <ul className="space-y-4">
                            <li className="text-base text-muted-foreground leading-relaxed flex items-start">
                              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 mr-3"></span>
                              The solution is relevant across the water industry, including applications containing municipal, industrial, and agricultural pumping systems. It is designed to optimize energy use and improve performance in water distribution and treatment.
                            </li>
                            <li className="text-base text-muted-foreground leading-relaxed flex items-start">
                              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 mr-3"></span>
                              HarmoniQ's patented Power Tuning Platform enhances energy efficiency by precisely tuning electrical frequencies to 60Hz. This process reduces motor heat and amperage, improving efficiency while significantly lowering costs.
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* 2. Images - Equipment & Meters for Cold Storage */}
                  {selectedCaseData.id === "cold-storage" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-primary" />
                            Live Meter Readings
                          </h4>
                          <div className="rounded-lg overflow-hidden bg-white p-4">
                            <img 
                              src={coldStorageMeters} 
                              alt="Live meter readings showing 360A system off vs 300A system on"
                              className="w-full h-auto object-contain max-h-64"
                            />
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            Live electrical meter readings showing 360A with system off vs 300A with system on, 
                            demonstrating real-time current reduction and performance improvements.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Snowflake className="w-5 h-5 text-primary" />
                            Refrigeration Compressors
                          </h4>
                          <div className="rounded-lg overflow-hidden bg-white p-4">
                            <img 
                              src={coldStorageCompressors} 
                              alt="Large refrigeration compressors in cold storage facility"
                              className="w-full h-auto object-contain max-h-64"
                            />
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            Large-scale refrigeration compressors targeted for optimization, 
                            achieving significant energy savings and extended equipment lifespan.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* 3. Performance Analytics for Cold Storage */}
                  {selectedCaseData.id === "cold-storage" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <TrendingDown className="w-5 h-5 text-primary" />
                            Monthly Bill Savings
                          </h4>
                          <div className="bg-white p-4 rounded-lg">
                            <ResponsiveContainer width="100%" height={200}>
                              <BarChart data={[
                                { name: 'Before HarmoniQ', amount: 34000, fill: '#dc2626' },
                                { name: 'After HarmoniQ', amount: 29000, fill: '#16a34a' }
                              ]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="name" fontSize={12} />
                                <YAxis 
                                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} 
                                  fontSize={12}
                                  domain={[0, 40000]}
                                />
                                <Tooltip 
                                  formatter={(value) => [`${value.toLocaleString()}`, 'Monthly Bill']}
                                  labelStyle={{ color: '#0c2912' }}
                                  contentStyle={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                    border: '1px solid rgba(22, 163, 74, 0.2)',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                  }}
                                />
                                <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
                                  {[
                                    { name: 'Before HarmoniQ', amount: 34000, fill: '#dc2626' },
                                    { name: 'After HarmoniQ', amount: 29000, fill: '#16a34a' }
                                  ].map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                  ))}
                                </Bar>
                              </BarChart>
                            </ResponsiveContainer>
                            <div className="mt-4 flex justify-center">
                              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-200">
                                <TrendingDown className="w-4 h-4 text-green-600" />
                                <span className="font-medium text-green-800">15.4% Savings</span>
                                <span className="text-green-600">($5,000/month)</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            Monthly electricity bill comparison showing 15.4% reduction from $34,000 to $29,000, 
                            delivering significant cost savings through optimized power consumption.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-primary" />
                            Power Factor Improvement
                          </h4>
                          <div className="bg-white p-4 rounded-lg">
                            <ResponsiveContainer width="100%" height={200}>
                              <BarChart data={[
                                { name: 'Before HarmoniQ', powerFactor: 0.75, fill: '#dc2626' },
                                { name: 'After HarmoniQ', powerFactor: 0.99, fill: '#16a34a' }
                              ]}>
                                <XAxis dataKey="name" fontSize={12} />
                                <YAxis domain={[0, 1]} tickFormatter={(value) => value.toFixed(2)} fontSize={12} />
                                <Bar dataKey="powerFactor" radius={[4, 4, 0, 0]}>
                                  {[
                                    { name: 'Before HarmoniQ', powerFactor: 0.75, fill: '#dc2626' },
                                    { name: 'After HarmoniQ', powerFactor: 0.99, fill: '#16a34a' }
                                  ].map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                  ))}
                                </Bar>
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            Power factor improvement from 0.75 to 0.99, demonstrating significant enhancement 
                            in electrical efficiency and reduced reactive power consumption.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Images for Manufacturing */}
                  {selectedCaseData.id === "manufacturing" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 text-center">US Facility Locations</h4>
                          <div className="rounded-lg overflow-hidden bg-white/50 p-2">
                            <img 
                              src={usLocationMap} 
                              alt="6 facility locations across the United States"
                              className="w-full h-64 object-contain"
                            />
                          </div>
                          <div className="text-center mt-4">
                            <div className="text-base text-muted-foreground">Facilities</div>
                            <div className="text-lg font-bold text-blue-600">6 Locations</div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 text-center">Energy Consumption Pattern</h4>
                          <div className="rounded-lg overflow-hidden bg-white/50 p-2">
                            <img 
                              src={consumptionChart} 
                              alt="Equipment on vs consumption chart showing energy optimization"
                              className="w-full h-64 object-contain"
                            />
                          </div>
                          <div className="text-center mt-4">
                            <div className="text-base text-muted-foreground">Energy Savings</div>
                            <div className="text-lg font-bold text-green-600">12-20%</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Images for Water Utilities */}
                  {selectedCaseData.id === "water-utilities" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Droplets className="w-5 h-5 text-primary" />
                            Water Pump Installation
                          </h4>
                          <div className="rounded-lg overflow-hidden bg-white p-4">
                            <img 
                              src={waterPumpInstallation} 
                              alt="Water pump installation with HarmoniQ power filters"
                              className="w-full h-auto object-contain max-h-64"
                            />
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            Containerized HarmoniQ power filter installation at water pump station, 
                            providing weather-resistant and secure power quality optimization.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-primary" />
                            Pump Motor Systems
                          </h4>
                          <div className="rounded-lg overflow-hidden bg-white p-4">
                            <img 
                              src={waterPumpMotor} 
                              alt="Large water pump motors optimized for efficiency"
                              className="w-full h-auto object-contain max-h-64"
                            />
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            High-capacity injection pump motors benefiting from reduced harmonic distortion 
                            and improved power quality through HarmoniQ filtering systems.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Images for Oil Storage */}
                  {selectedCaseData.id === "oil-gas" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Fuel className="w-5 h-5 text-primary" />
                            Installation Example
                          </h4>
                          <div className="rounded-lg overflow-hidden bg-white p-4">
                            <img 
                              src={installationPhotos} 
                              alt="HarmoniQ installation in oil storage facility"
                              className="w-full h-auto object-contain max-h-64"
                            />
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            HarmoniQ installation at petroleum storage facility with Class 1 Division 2 enclosures 
                            for safe operation in hazardous environments.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-primary" />
                            Facility Layout
                          </h4>
                          <div className="rounded-lg overflow-hidden bg-white p-4">
                            <img 
                              src={oilStorageDiagram} 
                              alt="Oil storage facility diagram showing mixer motor optimization"
                              className="w-full h-auto object-contain max-h-64"
                            />
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            Commercial-grade power quality solution deployed across 8 AC motors, 
                            delivering consistent power factor improvement and energy savings.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* 3. Field of Application and Commercial Solution for Oil Storage */}
                  {selectedCaseData.id === "oil-gas" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <Card className="bg-white border shadow-sm">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Fuel className="w-5 h-5 text-primary" />
                            Field of Application
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2"></span>
                              <span className="text-base text-muted-foreground leading-relaxed">
                                The solution is relevant across the Oil & Gas industry, including pipeline pumps, compressors, and electric motors in midstream operations. It enhances reliability and efficiency in oil and gas transport and processing.
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2"></span>
                              <span className="text-base text-muted-foreground">
                                HarmoniQ provides an advanced dynamic harmonic power filter designed for DC variable frequency drives, reducing Total Harmonic Distortion and achieving significant electricity bill savings.
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-primary" />
                            Commercial Solution
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2"></span>
                              <span className="text-base text-muted-foreground">
                                HarmoniQ will cover the initial cost of: Equipment (power tuning, metering, enclosure) and installation costs (electrician, pad, mounting).
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2"></span>
                              <span className="text-base text-muted-foreground">
                                Long-term energy saving contract to split utility bill savings (peak demand, energy consumption and power factor charge).
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2"></span>
                              <span className="text-base text-muted-foreground">
                                HarmoniQ manages all billing
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* Images for Telecommunications */}
                  {selectedCaseData.id === "telecommunications" && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-primary" />
                            Chiller and Power Filter
                          </h4>
                          <div className="rounded-lg overflow-hidden bg-white p-4">
                            <img 
                              src={telecomChillerPowerFilter} 
                              alt="Telecommunications center technical documentation"
                              className="w-full h-auto object-contain max-h-64"
                            />
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            Technical documentation showing installation specifications and 
                            power quality improvements for telecommunications infrastructure.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="glass border-none">
                        <CardContent className="p-6">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <Gauge className="w-5 h-5 text-primary" />
                            Performance Analysis
                          </h4>
                          <div className="rounded-lg overflow-hidden bg-white p-4">
                            <img 
                              src={telecomChart} 
                              alt="Telecom center performance metrics and energy savings chart"
                              className="w-full h-64 object-contain"
                            />
                          </div>
                          <p className="text-base text-muted-foreground mt-3">
                            Performance analysis demonstrating 13% energy savings and 
                            99.9% power factor achievement in critical cooling operations.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}

                  {/* 3. Metrics and Results */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <Card className="glass border-none">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                          <TrendingDown className="w-6 h-6 text-green-600" />
                        </div>
                        <h4 className="font-medium mb-2">Energy Reduction</h4>
                        <p className="text-2xl font-bold text-green-600 mb-2">{selectedCaseData.metrics.energyReduction}</p>
                        <p className="text-sm text-muted-foreground">Measured savings achieved</p>
                      </CardContent>
                    </Card>

                    <Card className="glass border-none">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                          <Zap className="w-6 h-6 text-blue-600" />
                        </div>
                        <h4 className="font-medium mb-2">{selectedCaseData.id === "telecommunications" ? "Amp Reduction" : "Cost Savings"}</h4>
                        <p className="text-2xl font-bold text-blue-600 mb-2">{selectedCaseData.id === "telecommunications" ? "11% - 32%" : selectedCaseData.metrics.costSavings}</p>
                        <p className="text-sm text-muted-foreground">Annual cost reduction</p>
                      </CardContent>
                    </Card>

                    <Card className="glass border-none">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                          <Gauge className="w-6 h-6 text-purple-600" />
                        </div>
                        <h4 className="font-medium mb-2">Power Factor</h4>
                        <p className="text-2xl font-bold text-purple-600 mb-2">{selectedCaseData.metrics.powerFactor}</p>
                        <p className="text-sm text-muted-foreground">Power quality improvement</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* 4. Results and Outcomes */}
                  <Card className="glass border-none">
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-4">Results and Outcomes</h4>
                      <ul className="space-y-3">
                        {selectedCaseData.results.map((result, index) => (
                          <li key={index} className="text-base text-muted-foreground leading-relaxed flex items-start">
                            <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2 mr-3"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>



                  {/* 6. Customer Testimonial (if available) */}
                  {selectedCaseData.testimonial && (
                    <Card className="glass border-none">
                      <CardContent className="p-8">
                        <Quote className="w-8 h-8 text-primary mb-4" />
                        <blockquote className="text-lg leading-relaxed text-muted-foreground italic mb-6">
                          "{selectedCaseData.testimonial}"
                        </blockquote>
                        <div className="text-right">
                          <p className="font-medium">Customer Representative</p>
                          <p className="text-sm text-muted-foreground">{selectedCaseData.title}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}


                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}