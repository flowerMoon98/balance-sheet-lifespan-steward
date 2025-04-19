
import { Button } from "@/components/ui/button";
import { AnimateIn } from "./AnimateIn";

export function Services() {
  return (
    <section id="services" className="py-section bg-grey-lighter">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimateIn>
            <h2 className="font-nib text-moss text-[28px] sm:text-[36px] tracking-tighter-custom mb-4">Our Services</h2>
            <p className="font-arbeit text-moss/60 tracking-tight-custom text-base leading-[1.5]">
              We offer a suite of seamlessly integrated services designed to optimize both your financial portfolio and personal wellbeing.
            </p>
          </AnimateIn>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimateIn delay={0.1}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-4">Financial Services</h3>
              <ul className="space-y-3 font-arbeit text-moss/60">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Comprehensive Wealth Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Strategic Investment Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Tax Optimization Strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Estate and Legacy Planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Retirement Income Orchestration</span>
                </li>
              </ul>
            </div>
          </AnimateIn>
          
          <AnimateIn delay={0.2}>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-nib text-moss tracking-tighter-custom text-xl mb-4">Health Integration</h3>
              <ul className="space-y-3 font-arbeit text-moss/60">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Personalized Longevity Analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Health Risk Assessment & Mitigation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Wellness Investment Strategies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Lifestyle Optimization Coaching</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lime"></div>
                  <span>Health & Wealth Data Integration</span>
                </li>
              </ul>
            </div>
          </AnimateIn>
        </div>
        
        <AnimateIn delay={0.3}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-arbeit text-moss/60 tracking-tight-custom text-lg mb-6">
              Ready to experience the synergy of health and wealth working together?
            </p>
            <Button className="bg-moss text-white hover:bg-moss/90 text-lg px-8 py-6 h-auto">
              Schedule a Consultation
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
