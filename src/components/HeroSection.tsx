import { useRef, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronRight, Battery, TrendingDown, CheckCircle, Zap, ArrowRight, DollarSign, Settings } from "lucide-react";
import harmoniqLogo from 'figma:asset/6e45135b002ab6bd948c04b5f67cde05cd9cc6d4.png';
import harmoniqSmallLogo from 'figma:asset/3c270814f6d37ae21663366a29b474ae7dfacfa0.png';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-primary/15 to-green-400/10 blur-3xl opacity-70 pulse-glow-enhanced"></div>
        <div className="absolute -bottom-[30%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-green-600/10 to-primary/15 blur-3xl opacity-70 pulse-glow-enhanced" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-gradient-to-r from-primary/5 to-green-400/5 blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-block glass px-6 py-3 rounded-full spatial hover:scale-105">
              <span className="text-sm text-primary font-medium flex items-center gap-3">
                <div className="logo-container w-8 h-8">
                  <img 
                    src={harmoniqSmallLogo} 
                    alt="HarmoniQ Technologies Logo" 
                    className="w-full h-full object-contain harmoniq-logo"
                  />
                </div>
                HarmoniQ Technologies
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-bold leading-tight">
                <span className="gradient-text block mb-2">Reduce Energy Costs</span>
                <span className="text-foreground">by up to </span>
                <span className="gradient-text">25%</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  HarmoniQ's patented magnetic wave technology compresses electrical noise into pure 50 / 60 Hz current, 
                  delivering immediate energy savings for high-energy facilities across EMEA markets.
                </p>
                
                <div className="glass p-4 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">How it works:</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our technology uses magnetic waves to compress noise into pure 50 / 60 Hz electric current, 
                    providing real-time current balancing and harmonic filtering that extends equipment life 
                    while reducing maintenance costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-4 glass p-4 rounded-xl spatial float-animation">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center shadow-lg">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Up to 25% Savings</div>
                  <div className="text-sm text-muted-foreground">Immediate Energy Reduction</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 glass p-4 rounded-xl spatial float-animation">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold text-lg">Power Factor to 1</div>
                  <div className="text-sm text-muted-foreground">Optimal Power Quality</div>
                </div>
              </div>
            </div>

            {/* Technology Benefits */}
            <div className="glass p-6 rounded-2xl border border-primary/20 spatial">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-green-400 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <span className="font-semibold">Technology Benefits</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Pure 50 / 60 Hz electric current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Returns power factor to 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Real-time power optimization</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Extends equipment life</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Reduces maintenance costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Free pilot projects available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call-to-action buttons - moved here */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="btn-primary rounded-full px-8 py-4 text-lg group spatial hover:scale-105 focus-enhanced"
              >
                <Zap className="mr-2 h-5 w-5" />
                <span>Start Free Pilot</span>
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToFeatures}
                className="glass rounded-full px-8 py-4 text-lg border-primary/30 hover:bg-primary/5 spatial hover:scale-105 focus-enhanced"
              >
                <span>See Technology</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Enhanced Technology Visualization */}
          <div 
            ref={containerRef}
            className="mx-auto w-full max-w-[600px] aspect-square relative select-none"
          >
            {/* Enhanced magnetic wave effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-green-400/20 to-green-500/30 blur-3xl opacity-80 magnetic-wave-enhanced"></div>
            
            {/* Main technology container */}
            <div className="relative w-full h-full rounded-full overflow-hidden glass border-4 border-white/20 shadow-2xl spatial">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-green-400/10"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="logo-container w-56 h-56 rounded-full bg-gradient-to-br from-black/20 to-black/10 flex items-center justify-center shadow-2xl p-8 glass">
                  <img 
                    src={harmoniqSmallLogo} 
                    alt="HarmoniQ Technologies Logo" 
                    className="w-full h-full object-contain harmoniq-logo"
                  />
                </div>
              </div>
              
              {/* Enhanced rotating rings */}
              <div className="absolute inset-8 rounded-full border-2 border-gradient-to-r from-primary/40 to-green-400/40 rotate-gentle" style={{ animationDuration: '25s' }}></div>
              <div className="absolute inset-16 rounded-full border border-primary/30 rotate-gentle" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-24 rounded-full border border-green-400/20 rotate-gentle" style={{ animationDuration: '30s' }}></div>
            </div>
            
            {/* Enhanced floating feature cards - focused on technology benefits */}
            <div className="absolute -top-6 -right-6 glass p-4 rounded-xl shadow-xl spatial hover:scale-105 float-animation">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Up to 25% Savings</div>
                  <div className="text-xs text-muted-foreground">Energy Reduction</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-xl spatial hover:scale-105 float-animation">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center text-white shadow-lg p-1">
                  <div className="logo-container w-full h-full">
                    <img 
                      src={harmoniqSmallLogo} 
                      alt="HarmoniQ Technologies Logo" 
                      className="w-full h-full object-contain harmoniq-logo"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">Power Factor = 1</div>
                  <div className="text-xs text-muted-foreground">Optimal Efficiency</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 right-12 glass p-4 rounded-xl shadow-xl spatial hover:scale-105 float-animation">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg">
                  <Settings className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Equipment Life</div>
                  <div className="text-xs text-muted-foreground">Extended Lifespan</div>
                </div>
              </div>
            </div>

            {/* Technology indicators - benefit focused */}
            <div className="absolute top-12 left-12 glass px-3 py-2 rounded-full shadow-lg">
              <div className="text-xs font-medium text-primary">Magnetic Wave Technology</div>
            </div>
            
            <div className="absolute top-20 right-16 glass px-3 py-2 rounded-full shadow-lg">
              <div className="text-xs font-medium text-green-600">Free Pilot Available</div>
            </div>

            <div className="absolute bottom-20 left-16 glass px-3 py-2 rounded-full shadow-lg">
              <div className="text-xs font-medium text-blue-600">Zero Downtime Install</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}