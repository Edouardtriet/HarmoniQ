import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, TrendingDown, Building2, Server, Snowflake, Droplets, PoundSterling, Gauge } from "lucide-react";
import deviceImage from 'figma:asset/2f4379a4d38cc458d27d3d2f1452c4be136d0e75.png';
import harmoniqLogo from 'figma:asset/3c270814f6d37ae21663366a29b474ae7dfacfa0.png';

export function EnergyEfficiencyAnimation() {
  const [animationPhase, setAnimationPhase] = useState(0); // 0: before, 1: installing, 2: after
  const [powerConsumption, setPowerConsumption] = useState(100);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    // Animation cycle: 4 seconds each phase
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    // Animate power consumption based on phase
    if (animationPhase === 0) {
      setPowerConsumption(100); // Before: 100% consumption
    } else if (animationPhase === 1) {
      setPowerConsumption(85); // Installing: slight improvement
    } else {
      setPowerConsumption(75); // After: 25% savings = 75% consumption
    }
  }, [animationPhase]);

  const industries = [
    {
      icon: Building2,
      name: "Supermarkets",
      color: "text-blue-500",
      beforeKwh: 850,
      afterKwh: 638,
      savings: 212
    },
    {
      icon: Server,
      name: "Data Centers",
      color: "text-purple-500",
      beforeKwh: 1200,
      afterKwh: 900,
      savings: 300
    },
    {
      icon: Droplets,
      name: "Water Utilities",
      color: "text-cyan-500",
      beforeKwh: 750,
      afterKwh: 563,
      savings: 187
    },
    {
      icon: Snowflake,
      name: "Cold Storage",
      color: "text-indigo-500",
      beforeKwh: 950,
      afterKwh: 713,
      savings: 237
    }
  ];

  const currentIndustry = industries[Math.floor(Date.now() / 5000) % industries.length];

  return (
    <div ref={containerRef} className="glass p-8 rounded-3xl border border-primary/20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="logo-container w-12 h-12">
            <img 
              src={harmoniqLogo} 
              alt="HarmoniQ Technologies Logo" 
              className="w-full h-full object-contain harmoniq-logo"
            />
          </div>
          <h3 className="text-2xl font-semibold">Energy Savings Demonstration</h3>
        </div>
        <p className="text-muted-foreground">
          See real-time power reduction across high-energy industries
        </p>
      </div>

      {/* Main Animation Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        
        {/* Before Panel */}
        <div className={`glass p-6 rounded-2xl transition-all duration-500 ${
          animationPhase === 0 ? 'border-red-500/50 bg-red-500/5' : 'opacity-60'
        }`}>
          <div className="text-center mb-4">
            <h4 className="font-semibold text-red-500 mb-2">Before HarmoniQ</h4>
            <currentIndustry.icon className={`w-12 h-12 mx-auto mb-3 ${currentIndustry.color}`} />
            <p className="text-sm text-muted-foreground">{currentIndustry.name}</p>
          </div>

          {/* Power Meter */}
          <div className="relative mb-4">
            <div className="glass p-4 rounded-xl bg-red-500/10">
              <div className="flex items-center justify-between mb-2">
                <Gauge className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">Power Draw</span>
              </div>
              <div className="relative h-4 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                  animate={{ width: animationPhase === 0 ? "100%" : "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0 kWh</span>
                <span className="font-medium text-red-500">{currentIndustry.beforeKwh} kWh/day</span>
              </div>
            </div>
          </div>

          {/* Noise Indicators */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span>Electrical Noise</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span>Harmonics</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span>Power Loss</span>
            </div>
          </div>
        </div>

        {/* Device Panel */}
        <div className="glass p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10">
          <div className="text-center mb-4">
            <h4 className="font-semibold mb-2">
              {animationPhase === 0 && "Ready to Install"}
              {animationPhase === 1 && "Installing HarmoniQ"}
              {animationPhase === 2 && "HarmoniQ Active"}
            </h4>
          </div>

          {/* Device Animation */}
          <div className="relative mb-6">
            <motion.div 
              className="w-32 h-20 mx-auto glass rounded-lg p-3 bg-gradient-to-br from-muted/40 to-muted/60"
              animate={animationPhase >= 1 ? { 
                scale: [1, 1.05, 1],
                rotateY: [0, 5, 0]
              } : {}}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src={deviceImage} 
                alt="HarmoniQ Device" 
                className="w-full h-full object-contain"
              />
              
              {/* Magnetic Field Visualization */}
              {animationPhase >= 1 && (
                <>
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-500/30"
                      style={{
                        width: `${80 + i * 25}px`,
                        height: `${80 + i * 25}px`,
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.1, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                  
                  {/* Energy Flow Lines */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-6 bg-gradient-to-t from-transparent via-green-500/60 to-transparent rounded-full"
                        style={{
                          top: '20%',
                          left: '50%',
                          transformOrigin: '50% 200%',
                          transform: `translateX(-50%) rotate(${i * 60}deg)`,
                        }}
                        animate={{
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>

          {/* Installation Progress */}
          {animationPhase === 1 && (
            <motion.div
              className="mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center text-sm mb-2">Installing...</div>
              <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          )}

          {/* Rental Information */}
          <div className="text-center space-y-1">
            <div className="text-sm text-muted-foreground">Monthly Rental</div>
            <div className="flex items-center justify-center gap-1">
              <PoundSterling className="w-4 h-4 text-primary" />
              <span className="font-semibold text-primary">3,500</span>
            </div>
            <div className="text-xs text-muted-foreground">36-month contract</div>
          </div>
        </div>

        {/* After Panel */}
        <div className={`glass p-6 rounded-2xl transition-all duration-500 ${
          animationPhase === 2 ? 'border-green-500/50 bg-green-500/5' : 'opacity-60'
        }`}>
          <div className="text-center mb-4">
            <h4 className="font-semibold text-green-500 mb-2">After HarmoniQ</h4>
            <currentIndustry.icon className={`w-12 h-12 mx-auto mb-3 ${currentIndustry.color}`} />
            <p className="text-sm text-muted-foreground">{currentIndustry.name}</p>
          </div>

          {/* Improved Power Meter */}
          <div className="relative mb-4">
            <div className="glass p-4 rounded-xl bg-green-500/10">
              <div className="flex items-center justify-between mb-2">
                <Gauge className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">Power Draw</span>
              </div>
              <div className="relative h-4 bg-muted/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                  animate={{ width: animationPhase === 2 ? "75%" : "0%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>0 kWh</span>
                <span className="font-medium text-green-500">{currentIndustry.afterKwh} kWh/day</span>
              </div>
            </div>
          </div>

          {/* Efficiency Indicators */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Pure 50 / 60 Hz Current</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>No Harmonics</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span>Optimized Power</span>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Calculator */}
      <div className="glass p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Energy Savings */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-green-500" />
              <span className="font-semibold">Energy Saved</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={animationPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1"
              >
                <div className="text-2xl font-bold text-green-500">
                  {animationPhase === 2 ? `${currentIndustry.savings}` : '0'} kWh
                </div>
                <div className="text-sm text-muted-foreground">per day</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Percentage Reduction */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gauge className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">Reduction</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={animationPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1"
              >
                <div className="text-2xl font-bold text-blue-500">
                  {animationPhase === 2 ? '25' : '0'}%
                </div>
                <div className="text-sm text-muted-foreground">energy use</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Monthly Savings */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <PoundSterling className="w-5 h-5 text-purple-500" />
              <span className="font-semibold">Monthly Savings</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={animationPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1"
              >
                <div className="text-2xl font-bold text-purple-500">
                  £{animationPhase === 2 ? Math.round(currentIndustry.savings * 30 * 0.15).toLocaleString() : '0'}
                </div>
                <div className="text-sm text-muted-foreground">estimated</div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ROI Timeline */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="font-semibold">ROI Period</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={animationPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-1"
              >
                <div className="text-2xl font-bold text-orange-500">
                  {animationPhase === 2 ? '18' : '--'}
                </div>
                <div className="text-sm text-muted-foreground">months</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Technology Summary */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            <strong>50 / 60 Hz Technology:</strong> Magnetic wave compression eliminates electrical noise and harmonics, 
            delivering up to <span className="text-green-500 font-semibold">25% energy savings</span> for high-energy facilities
          </p>
        </div>
      </div>

      {/* Animation Phase Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {['Before', 'Installing', 'After'].map((label, index) => (
          <div key={index} className="text-center">
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 mb-1 ${
                animationPhase === index ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
              }`}
            />
            <div className={`text-xs transition-colors duration-300 ${
              animationPhase === index ? 'text-primary font-medium' : 'text-muted-foreground'
            }`}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}