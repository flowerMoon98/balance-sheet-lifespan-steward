
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 bg-white" aria-labelledby="hero-heading">
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
            className="font-nib text-moss tracking-tighter-custom text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] mb-6"
          >
            Health and Wealth in True Alignment
          </h1>

          {/* Animated divider */}
          <motion.div 
            className="h-0.5 bg-moss mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2
            }}
            data-motion-disable
          />

          {/* Animated sub-statement */}
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.2, 
              ease: "easeOut",
              delay: 0.4
            }}
            data-motion-disable
          >
            <p className="font-arbeit text-moss/60 tracking-tight-custom text-base md:text-lg leading-[1.5] max-w-2xl">
              We steward capital in a way that lengthens both balance sheets and lifespans—quietly, methodically, and always in your favour.
            </p>
          </motion.div>

          {/* Scroll cue */}
          <motion.button
            aria-label="Scroll to learn about Rajomon"
            className="mt-12 text-lime opacity-70 hover:translate-y-1 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2"
            whileHover={{ y: 4 }}
            transition={{ duration: 0.12 }}
            onClick={() => {
              document.getElementById('ethos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-motion-disable
          >
            <ChevronDown size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
