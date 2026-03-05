import { Button } from "./ui/button";
import { ChevronRight, TrendingDown, CheckCircle, Zap } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-primary/15 blur-3xl opacity-70 pulse-glow-enhanced"></div>
        <div className="absolute -bottom-[30%] -left-[20%] w-[50vw] h-[50vw] rounded-full bg-primary/15 blur-3xl opacity-70 pulse-glow-enhanced" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-primary/5 blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-bold leading-tight">
                <span className="gradient-text">Reduce Energy Costs </span>
                <span className="text-foreground">by up to </span>
                <span className="gradient-text">25%</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                HarmoniQ's patented magnetic wave technology compresses electrical noise into pure 50 / 60 Hz current,
                delivering immediate energy savings, real-time current balancing, and harmonic filtering that extends
                equipment life while reducing maintenance costs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 text-left">
              <div className="flex items-center gap-4 glass p-4 rounded-xl spatial float-animation">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
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
            <div className="glass p-6 rounded-2xl border border-primary/20 spatial text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <span className="font-semibold">Technology Benefits</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Pure 50 / 60 Hz electric current</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Returns power factor to 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Real-time power optimization</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Extends equipment life</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Reduces maintenance costs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Zero downtime installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Free pilot projects available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call-to-action buttons - moved here */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="btn-primary rounded-full px-8 py-4 text-lg group spatial hover:scale-105 focus-enhanced"
              >
                <Zap className="mr-2 h-5 w-5" />
                <span>Start Free Pilot</span>
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}