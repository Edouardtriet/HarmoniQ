import { Zap } from "lucide-react";
import allCompanyLogos from 'figma:asset/e9f1b6018f3a59b13c61a22096f394f5d462c035.png';

export function TeamSection() {

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-white via-green-50/20 to-green-100/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-green-400/5 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
              Team
            </h2>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-6">
            Built and Managed by World Class Team
          </h3>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Our leadership team brings extensive experience across top 
            tier operational, industrial and private equity sectors.
          </p>
        </div>

        {/* Company Experience Display */}
        <div className="mt-16">
          <div className="glass bg-white/90 p-6 rounded-xl border border-primary/10 hover-3d group transition-all duration-300 w-full">
            <div className="flex items-center justify-center min-h-[280px]">
              <img 
                src={allCompanyLogos} 
                alt="World-class companies our team has experience with: KKR, Citibank, MIT, Schneider Electric, Partners Group, and Lightfoot"
                className="w-full h-auto object-contain filter drop-shadow-sm max-h-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}