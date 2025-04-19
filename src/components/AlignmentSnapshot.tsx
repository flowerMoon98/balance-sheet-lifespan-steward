
import { AnimateIn } from "./AnimateIn";
import { ChevronRight } from "lucide-react";
import { Separator } from "./ui/separator";

export function AlignmentSnapshot() {
  return (
    <section id="alignment" className="py-section bg-grey-lighter">
      <div className="container mx-auto">
        <div className="max-w-content mx-auto text-center">
          <AnimateIn>
            <div className="mb-16">
              <h2 className="font-nib text-moss tracking-tighter-custom text-[24px] md:text-[28px] mb-4">Alignment Snapshot</h2>
              
              {/* SVG Spiral Schematic */}
              <div className="relative w-full h-64 my-8">
                <svg viewBox="0 0 100 100" className="w-full h-full max-w-md mx-auto opacity-20">
                  <path
                    d="M50,90 C25,90 10,75 10,50 C10,25 25,10 50,10 C75,10 90,25 90,50 C90,65 80,75 65,75 C50,75 40,65 40,50 C40,35 50,25 65,25 C75,25 80,35 70,45 C60,55 45,45 55,35 C65,25 55,20 45,30 C35,40 45,55 55,45"
                    fill="none"
                    stroke="#122B22"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </AnimateIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimateIn delay={0.1}>
              <div className="p-6 bg-white rounded-md shadow-sm">
                <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-2">Health (now)</h3>
                <Separator className="w-12 h-0.5 bg-lime mx-auto mb-4" />
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Optimization of current physical and mental resources through evidence-based interventions.
                </p>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={0.2}>
              <div className="p-6 bg-white rounded-md shadow-sm">
                <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-2">Wealth (later)</h3>
                <Separator className="w-12 h-0.5 bg-lime mx-auto mb-4" />
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Strategic capital preservation and growth aligned with personal longevity projections.
                </p>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={0.3}>
              <div className="p-6 bg-white rounded-md shadow-sm">
                <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-2">Well-Being (always)</h3>
                <Separator className="w-12 h-0.5 bg-lime mx-auto mb-4" />
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Integration of health and financial metrics for holistic prosperity measurement.
                </p>
              </div>
            </AnimateIn>
          </div>
          
          <AnimateIn delay={0.4}>
            <a href="#" className="inline-flex items-center mt-12 text-moss hover:underline font-arbeit tracking-tight-custom transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">
              Explore the Model <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
