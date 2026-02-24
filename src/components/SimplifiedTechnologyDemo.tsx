import comparisonTable from 'figma:asset/54e5d20048e25fe31a2c7d38f06b98e0c40076f3.png';

export function SimplifiedTechnologyDemo() {
  return (
    <div className="my-5 print:my-3">
      <div className="text-center mb-4 print:mb-3">
        <h3 className="text-lg print:text-base font-semibold text-foreground mb-2 print:mb-2">HarmoniQ Technology Impact</h3>
        <p className="text-muted-foreground text-base print:text-sm">Magnetic waves transform electrical noise into pure 50 / 60 Hz current</p>
      </div>
      
      {/* Comparison Table Image */}
      <div className="w-full">
        <img 
          src={comparisonTable} 
          alt="Comparison of electricity current without and with HarmoniQ showing distorted vs pure 50 / 60 Hz waves"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
      
      {/* Benefits Row */}
      <div className="mt-5 print:mt-3 grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-3 print:gap-2 text-center">
        <div className="bg-primary/10 rounded-lg p-3 print:p-2 border border-primary/20">
          <div className="text-primary font-semibold text-sm print:text-sm">Up to 25%</div>
          <div className="text-muted-foreground text-sm print:text-sm">Energy Savings</div>
        </div>
        <div className="bg-primary/10 rounded-lg p-3 print:p-2 border border-primary/20">
          <div className="text-primary font-semibold text-sm print:text-sm">Power Factor = 1</div>
          <div className="text-muted-foreground text-sm print:text-sm">Perfect Efficiency</div>
        </div>
        <div className="bg-primary/10 rounded-lg p-3 print:p-2 border border-primary/20">
          <div className="text-primary font-semibold text-sm print:text-sm">Extended</div>
          <div className="text-muted-foreground text-sm print:text-sm">Equipment Life</div>
        </div>
      </div>
    </div>
  );
}