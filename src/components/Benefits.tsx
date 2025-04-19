
import { Coins, ChartBar, Wallet, Heart } from "lucide-react";

import { AnimateIn } from "./AnimateIn";

export function Benefits() {
  return (
    <section id="benefits" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimateIn>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">The Dual Benefits</h2>
            <p className="text-lg text-gray-600">
              When health and wealth work together, you experience advantages that extend far beyond traditional financial planning.
            </p>
          </AnimateIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimateIn delay={0.1}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Wallet className="text-indigo-600 h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Enhanced Capital Growth</h3>
                <p className="text-gray-600">
                  Our integrated approach leads to more mindful financial decisions and better long-term investment outcomes due to improved cognitive function and reduced stress.
                </p>
              </div>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.2}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Heart className="text-green-600 h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Extended Longevity</h3>
                <p className="text-gray-600">
                  Financial security directly correlates with reduced stress, better healthcare access, and improved lifestyle choices—all factors that contribute to longevity.
                </p>
              </div>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.3}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Coins className="text-blue-600 h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Intergenerational Impact</h3>
                <p className="text-gray-600">
                  Your legacy encompasses both financial resources and health practices, creating a powerful foundation for future generations.
                </p>
              </div>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.4}>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <ChartBar className="text-purple-600 h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Balanced Risk Management</h3>
                <p className="text-gray-600">
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
