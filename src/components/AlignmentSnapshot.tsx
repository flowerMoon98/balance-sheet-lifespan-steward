
import { AnimateIn } from "./AnimateIn";
import { ChevronRight } from "lucide-react";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

export function AlignmentSnapshot() {
  return (
    <section id="alignment" className="py-section bg-grey-lighter">
      <div className="container mx-auto">
        <div className="max-w-content mx-auto text-center">
          <AnimateIn>
            <div className="mb-16">
              <h2 className="font-nib text-moss tracking-tighter-custom text-[24px] md:text-[28px] mb-4">Alignment Snapshot</h2>
              
              {/* Interactive SVG Spiral */}
              <motion.div 
                className="relative w-full h-64 my-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0.2 }
                }}
              >
                <motion.svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full max-w-md mx-auto cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <motion.path
                    d="M50,90 C25,90 10,75 10,50 C10,25 25,10 50,10 C75,10 90,25 90,50 C90,65 80,75 65,75 C50,75 40,65 40,50 C40,35 50,25 65,25 C75,25 80,35 70,45 C60,55 45,45 55,35 C65,25 55,20 45,30 C35,40 45,55 55,45"
                    fill="none"
                    stroke="#122B22"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </motion.svg>
              </motion.div>
            </div>
          </AnimateIn>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Health', 'Wealth', 'Well-Being'].map((title, index) => (
              <AnimateIn delay={0.1 * (index + 1)} key={title}>
                <motion.div 
                  className="p-6 bg-white rounded-md shadow-sm"
                  whileHover={{ 
                    y: -4,
                    transition: { type: "spring", stiffness: 300, damping: 25 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-2">
                    {title} {index === 0 ? "(now)" : index === 1 ? "(later)" : "(always)"}
                  </h3>
                  <Separator className="w-12 h-0.5 bg-lime mx-auto mb-4" />
                  <p className="font-arbeit text-moss/60 tracking-tight-custom">
                    {index === 0 && "Optimization of current physical and mental resources through evidence-based interventions."}
                    {index === 1 && "Strategic capital preservation and growth aligned with personal longevity projections."}
                    {index === 2 && "Integration of health and financial metrics for holistic prosperity measurement."}
                  </p>
                </motion.div>
              </AnimateIn>
            ))}
          </div>
          
          <AnimateIn delay={0.4}>
            <motion.a 
              href="#" 
              className="inline-flex items-center mt-12 text-moss hover:underline font-arbeit tracking-tight-custom transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Explore the Model <ChevronRight className="ml-1 h-4 w-4" />
            </motion.a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
