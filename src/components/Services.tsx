
import { Button } from "@/components/ui/button";

import { AnimateIn } from "./AnimateIn";

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimateIn>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-lg text-gray-600">
              We offer a suite of seamlessly integrated services designed to optimize both your financial portfolio and personal wellbeing.
            </p>
          </AnimateIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimateIn delay={0.1}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Financial Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span>Comprehensive Wealth Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span>Strategic Investment Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span>Tax Optimization Strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span>Estate and Legacy Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span>Retirement Income Orchestration</span>
                </li>
              </ul>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Health Integration</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Personalized Longevity Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Health Risk Assessment & Mitigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Wellness Investment Strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Lifestyle Optimization Coaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Health & Wealth Data Integration</span>
                </li>
              </ul>
            </div>
          </AnimateIn>
        </div>
        
        <AnimateIn delay={0.3}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to experience the synergy of health and wealth working together?
            </p>
            <Button className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-lg px-8 py-6 h-auto">
              Schedule a Consultation
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
