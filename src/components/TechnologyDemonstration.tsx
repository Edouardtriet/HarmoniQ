import techOnImage from 'figma:asset/002ee72cc7b02fe003333b97576a1a52e0e65f58.png';
import techOffImage from 'figma:asset/bf6a684438dd7aa8a780d877ffa1c9ff7958ddd0.png';

export function TechnologyDemonstration() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-black rounded-xl p-6 my-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">How the Technology Works</h3>
        <p className="text-white/80 text-sm">Magnetic waves compress electrical noise into pure 50 / 60 Hz current</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Before - Tech OFF */}
        <div className="space-y-4">
          <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
            <h4 className="text-red-400 font-medium mb-2 text-center">Before: Technology OFF</h4>
            <div className="bg-black/50 rounded-lg p-4">
              <img 
                src={techOffImage} 
                alt="Technology OFF - Noisy Current" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-red-300 text-xs mt-2 text-center">
              Noisy, distorted electrical current with harmonics
            </p>
          </div>
        </div>
        
        {/* After - Tech ON */}
        <div className="space-y-4">
          <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
            <h4 className="text-green-400 font-medium mb-2 text-center">After: Technology ON</h4>
            <div className="bg-black/50 rounded-lg p-4">
              <img 
                src={techOnImage} 
                alt="Technology ON - Pure 50 / 60 Hz Current" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="text-green-300 text-xs mt-2 text-center">
              Pure, clean 50 / 60 Hz current - up to 25% energy savings
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-medium">Power factor returns to 1</span>
        </div>
      </div>
    </div>
  );
}