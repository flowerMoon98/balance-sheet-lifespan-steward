
import { Coins, ChartBar, Wallet, Heart } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

export function Benefits() {
  return (
    <section id="benefits" className="py-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimateIn>
            <h2 className="font-nib text-moss text-[28px] sm:text-[36px] tracking-tighter-custom mb-4">The Dual Benefits</h2>
            <p className="font-arbeit text-moss/60 tracking-tight-custom text-base leading-[1.5]">
              When health and wealth work together, you experience advantages that extend far beyond traditional financial planning.
            </p>
          </AnimateIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimateIn delay={0.1}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-moss/5 flex items-center justify-center">
                  <Wallet className="text-moss h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-2">Enhanced Capital Growth</h3>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Our integrated approach leads to more mindful financial decisions and better long-term investment outcomes due to improved cognitive function and reduced stress.
                </p>
              </div>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.2}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-moss/5 flex items-center justify-center">
                  <Heart className="text-moss h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-2">Extended Longevity</h3>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Financial security directly correlates with reduced stress, better healthcare access, and improved lifestyle choices—all factors that contribute to longevity.
                </p>
              </div>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.3}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-moss/5 flex items-center justify-center">
                  <Coins className="text-moss h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-2">Intergenerational Impact</h3>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Your legacy encompasses both financial resources and health practices, creating a powerful foundation for future generations.
                </p>
              </div>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.4}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-moss/5 flex items-center justify-center">
                  <ChartBar className="text-moss h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-2">Balanced Risk Management</h3>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Our holistic view of risk encompasses both financial volatility and health vulnerabilities, creating more resilient long-term planning.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
