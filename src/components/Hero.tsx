
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-24 bg-white" aria-labelledby="hero-heading">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime"
      >
        Skip to main content
      </a>

      <div className="container mx-auto">
        <div className="max-w-content mx-auto">
          {/* Static content */}
          <h1 
            id="hero-heading"
            className="font-nib text-moss tracking-tighter-custom text-[32px] sm:text-[40px] md:text-[48px] leading-[1.5] mb-6"
          >
            Health and Wealth in True Alignment
          </h1>

          {/* Divider */}
          <div className="w-20 h-0.5 bg-moss mb-6" />

          {/* Animated sub-statement */}
          <div
            className="motion-safe:opacity-0 motion-safe:translate-y-4 motion-safe:animate-in"
            style={{
              animationDuration: '200ms',
              animationFillMode: 'forwards',
              animationTimingFunction: 'ease-out',
            }}
          >
            <p className="font-arbeit text-moss/60 tracking-tight-custom text-base leading-[1.5] max-w-2xl">
              We steward capital in a way that lengthens both balance sheets and lifespans—quietly, methodically, and always in your favour.
            </p>
          </div>

          {/* Scroll cue */}
          <button
            aria-label="Scroll to learn about Rajomon"
            className="mt-12 text-lime focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2"
            onClick={() => {
              document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
