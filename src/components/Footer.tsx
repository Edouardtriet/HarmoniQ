import { useState } from "react";
import { Mail, Phone, Linkedin, Twitter, ChevronRight } from "lucide-react";
import harmoniqFullLogo from 'figma:asset/6ed12e07942b84cb1a32ed4d4b0c8d7e09b92cf8.png';
import { SectorTeaserRouter } from "./SectorTeaserRouter";

export function Footer() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);
  
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { label: "Power Optimization", href: "#features" },
        { label: "Energy Monitoring", href: "#features" },
        { label: "Harmonic Filtering", href: "#features" },
        { label: "Current Balancing", href: "#features" }
      ]
    },
    {
      title: "Industries",
      links: [
        { label: "Data Centers", sectorId: "data-centers" },
        { label: "Cold Storage", sectorId: "cold-storage" },
        { label: "Water & Utilities", sectorId: "water-utilities" },
        { label: "Manufacturing & Mining", sectorId: "manufacturing" },
        { label: "Telecommunications", sectorId: "telecom" },
        { label: "Airports & Ports", sectorId: "airports" },
        { label: "Large Buildings & Offices", sectorId: "buildings" },
        { label: "Oil & Gas Operations", sectorId: "oil-gas" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About HarmoniQ", href: "#" },
        { label: "Technology", href: "#features" },
        { label: "Case Studies", href: "#case-studies" },
        { label: "Careers", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Technical Support", href: "#faq" },
        { label: "Installation Guide", href: "#" },
        { label: "Contact", href: "#contact" }
      ]
    }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSectorClick = (sectorId: string) => {
    setSelectedSector(sectorId);
  };

  const closeTeaserRouter = () => {
    setSelectedSector(null);
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-white via-green-50/30 to-green-100/20 border-t border-primary/10 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl opacity-40"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-green-400/8 blur-3xl opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 mb-16">
            {/* Enhanced Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <div className="logo-container w-56 h-20">
                  <img 
                    src={harmoniqFullLogo} 
                    alt="HarmoniQ Technologies Logo" 
                    className="w-full h-full object-contain harmoniq-logo"
                  />
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Pioneering patented power optimization technology across EMEA markets. Our magnetic wave devices 
                deliver up to 25% energy savings with proven performance and zero operational disruption.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>enquiries@harmoniqenergy.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>020 3494 4044</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-4">
                <button aria-label="LinkedIn" className="w-10 h-10 rounded-full glass hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 focus-enhanced">
                  <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </button>
                <button aria-label="X (Twitter)" className="w-10 h-10 rounded-full glass hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 focus-enhanced">
                  <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                </button>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4 min-w-0">
                <h4 className="font-semibold text-lg text-foreground whitespace-nowrap">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="min-w-0">
                      <button
                        onClick={() => {
                          if ('sectorId' in link) {
                            handleSectorClick(link.sectorId);
                          } else {
                            scrollToSection(link.href);
                          }
                        }}
                        className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 flex items-start gap-1 group focus-enhanced text-left w-full"
                      >
                        <span className="whitespace-nowrap leading-relaxed">{link.label}</span>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Enhanced Bottom Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-primary/10 gap-6">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HarmoniQ Technologies Ltd. All rights reserved. | Registered in the United Kingdom
            </div>
            
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm">
                <button className="text-muted-foreground hover:text-primary transition-colors focus-enhanced">
                  Privacy Policy
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors focus-enhanced">
                  Terms of Service
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors focus-enhanced">
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>

          {/* Additional trust indicators */}
          <div className="mt-8 pt-8 border-t border-primary/10 text-center">
            <div className="glass px-6 py-4 rounded-full sm:inline-block">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                <span>🔒 Enterprise-grade security</span>
                <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>⚡ Patented technology</span>
                <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
                <span>🌍 Serving EMEA markets</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sector Teaser Router */}
      <SectorTeaserRouter 
        selectedSector={selectedSector}
        onClose={closeTeaserRouter}
      />
    </>
  );
}