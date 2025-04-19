
import { Button } from "@/components/ui/button";

import { AnimateIn } from "./AnimateIn";

export function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-b from-green-100 to-green-50 opacity-70 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-b from-indigo-100 to-indigo-50 opacity-70 blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Health and Wealth in True Alignment
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              We steward capital in a way that lengthens both balance sheets and lifespans—quietly, methodically, and always in your favour.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-lg px-8 py-6 h-auto">
                Begin Your Journey
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 h-auto">
                Learn More
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
