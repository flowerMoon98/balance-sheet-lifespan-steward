
import { AnimateIn } from "./AnimateIn";

export function WindowsOfStewardship() {
  return (
    <section id="stewardship" className="py-section bg-clay text-white">
      <div className="container mx-auto">
        <AnimateIn>
          <h2 className="font-nib text-white tracking-tighter-custom text-[24px] md:text-[28px] mb-12 text-center">Windows of Stewardship</h2>
        </AnimateIn>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { title: "Youth", description: "Building foundations for multi-generational prosperity and health" },
            { title: "Health", description: "Preserving vitality through evidence-based interventions" },
            { title: "Wealth", description: "Strategic capital allocation for sustained growth" },
            { title: "Time", description: "Optimizing the most precious non-renewable resource" },
            { title: "Life", description: "Integrating purpose with financial and physical wellbeing" }
          ].map((item, index) => (
            <AnimateIn key={index} delay={index * 0.1}>
              <div className="text-center p-4">
                <h3 className="font-nib text-white tracking-tighter-custom text-xl mb-2">{item.title}</h3>
                <p className="font-arbeit text-white/70 tracking-tight-custom text-sm">{item.description}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
