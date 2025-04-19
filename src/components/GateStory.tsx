
import { AnimateIn } from "./AnimateIn";
import { motion } from "framer-motion";

export function GateStory() {
  return (
    <section id="story" className="py-section bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative h-[400px] w-full">
            <motion.div
              className="absolute inset-0 bg-[url('/images/rajomon-gate.jpg')] bg-cover bg-center grayscale"
              style={{ backgroundPosition: "center" }}
              whileInView={{ 
                y: 0,
                backgroundPosition: "center" 
              }}
              initial={{ 
                y: 0,
                backgroundPosition: "center" 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-motion-disable
            >
              <div className="absolute inset-0 bg-black/10"></div>
            </motion.div>
          </div>
          
          <AnimateIn>
            <div className="max-w-md">
              <h2 className="font-nib text-moss tracking-tighter-custom text-[24px] md:text-[28px] leading-[1.2] mb-4">The Gate Metaphor</h2>
              <p className="font-arbeit text-moss/60 tracking-tight-custom mb-4">
                The historical Rajō-mon gate in Kyoto represents our philosophy: a threshold between worlds, where discipline and attention create lasting transformation. Like the ancient guardians of these structures, we stand vigilant at the intersection of health and wealth.
              </p>
              <p className="font-arbeit text-moss/60 tracking-tight-custom">
                Our clients pass through this threshold to a realm where financial prosperity and physical wellbeing are no longer separate pursuits, but a unified path toward true abundance.
              </p>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
