import deviceImage from 'figma:asset/2c7d6def374874cbe5a829c4080df43faf068199.png';
import noisyWaveImage from 'figma:asset/d29aa7b2565859feff937de17c220d2b619f456e.png';

export function UnifiedTechnologyDemo() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-black rounded-xl p-6 my-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">How HarmoniQ Technology Works</h3>
        <p className="text-white/80 text-sm">Magnetic waves compress electrical noise into pure 50 / 60 Hz current</p>
      </div>
      
      <div className="relative">
        {/* HarmoniQ Device - Using actual XECO device image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img 
              src={deviceImage} 
              alt="HarmoniQ Technologies Device" 
              className="w-32 h-auto rounded-lg shadow-lg"
            />
            {/* Magnetic Field Waves */}
            <div className="absolute -top-2 -left-8 w-48 h-24">
              <div className="absolute inset-0 border-2 border-green-400/30 rounded-full animate-ping"></div>
              <div className="absolute inset-2 border-2 border-green-400/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute inset-4 border-2 border-green-400/10 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Power Flow Demonstration */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
          
          {/* Input - Dirty Power using actual noisy wave image */}
          <div className="text-center">
            <div className="bg-red-900/30 rounded-lg p-3 border border-red-500/30 mb-3">
              <h4 className="text-red-400 font-medium mb-2 text-sm">INPUT: Noisy Current</h4>
              <div className="h-12 flex items-center justify-center bg-black/50 rounded-lg">
                <img 
                  src={noisyWaveImage} 
                  alt="Noisy electrical current" 
                  className="w-full h-8 object-contain"
                />
              </div>
              <p className="text-red-300 text-xs mt-1">Electrical noise & harmonics</p>
            </div>
          </div>
          
          {/* Process Arrow */}
          <div className="text-center">
            <div className="flex flex-col items-center">
              <div className="text-green-400 mb-1">
                <svg width="30" height="15" viewBox="0 0 30 15" fill="currentColor">
                  <path d="M5,7.5 L20,7.5 L17,5 M20,7.5 L17,10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p className="text-green-300 text-xs font-medium">Processing</p>
              <div className="text-green-400 mt-1">
                <svg width="30" height="15" viewBox="0 0 30 15" fill="currentColor">
                  <path d="M5,7.5 L20,7.5 L17,5 M20,7.5 L17,10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Output - Clean Power */}
          <div className="text-center">
            <div className="bg-green-900/30 rounded-lg p-3 border border-green-500/30 mb-3">
              <h4 className="text-green-400 font-medium mb-2 text-sm">OUTPUT: Pure 50 / 60 Hz</h4>
              <div className="h-12 flex items-center justify-center bg-black/50 rounded-lg">
                {/* Smooth Wave SVG */}
                <svg width="100" height="48" viewBox="0 0 100 48" className="text-green-400">
                  <path 
                    d="M5,24 Q20,8 35,24 T65,24 Q80,8 95,24" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
              <p className="text-green-300 text-xs mt-1">Clean, efficient power</p>
            </div>
          </div>
        </div>
        
        {/* Benefits Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
          <div className="bg-primary/10 rounded-lg p-2 border border-primary/20">
            <div className="text-primary font-semibold text-sm">Up to 25%</div>
            <div className="text-white/80 text-xs">Energy Savings</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-2 border border-primary/20">
            <div className="text-primary font-semibold text-sm">Power Factor = 1</div>
            <div className="text-white/80 text-xs">Perfect Efficiency</div>
          </div>
          <div className="bg-primary/10 rounded-lg p-2 border border-primary/20">
            <div className="text-primary font-semibold text-sm">50 / 60 Hz</div>
            <div className="text-white/80 text-xs">Pure Current</div>
          </div>
        </div>
      </div>
    </div>
  );
}