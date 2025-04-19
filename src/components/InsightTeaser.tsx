
import { AnimateIn } from "./AnimateIn";
import { ChevronRight } from "lucide-react";

export function InsightTeaser() {
  return (
    <section id="insights" className="py-section bg-white">
      <div className="container mx-auto">
        <div className="max-w-content mx-auto">
          <AnimateIn>
            <h2 className="font-nib text-moss tracking-tighter-custom text-[24px] md:text-[28px] mb-12 text-center">Latest Insights</h2>
          </AnimateIn>
          
          <div className="space-y-12">
            <AnimateIn delay={0.1}>
              <div>
                <span className="text-sky text-sm font-arbeit tracking-tight-custom">Research</span>
                <h3 className="font-nib text-moss tracking-tighter-custom text-xl mt-2 mb-3">Longevity-Adjusted Returns: A New Paradigm for Wealth Management (2025)</h3>
                <a href="#" className="inline-flex items-center text-moss hover:underline font-arbeit tracking-tight-custom transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">
                  Read the paper <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </AnimateIn>
            
            <AnimateIn delay={0.2}>
              <div>
                <span className="text-sky text-sm font-arbeit tracking-tight-custom">Research</span>
                <h3 className="font-nib text-moss tracking-tighter-custom text-xl mt-2 mb-3">The Metabolic-Financial Axis: Correlations Between Biomarkers and Investment Behaviors</h3>
                <a href="#" className="inline-flex items-center text-moss hover:underline font-arbeit tracking-tight-custom transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">
                  Read the paper <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
