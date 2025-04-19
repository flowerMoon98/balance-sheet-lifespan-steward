
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, Wallet, Heart } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

export function Approach() {
  return (
    <section id="approach" className="py-section bg-grey-lighter">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimateIn>
            <h2 className="font-nib text-moss text-[28px] sm:text-[36px] tracking-tighter-custom mb-4">Our Unique Approach</h2>
            <p className="font-arbeit text-moss/60 tracking-tight-custom text-base leading-[1.5]">
              We've pioneered a methodology that unites financial prosperity with personal wellbeing—creating a symbiotic relationship that amplifies both.
            </p>
          </AnimateIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <AnimateIn delay={0.1}>
            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-moss/5 flex items-center justify-center mb-4">
                  <Wallet className="text-moss h-6 w-6" />
                </div>
                <CardTitle className="font-nib text-moss tracking-tighter-custom">Wealth Stewardship</CardTitle>
                <CardDescription className="font-arbeit text-moss/60">Strategic capital management focused on sustainable long-term growth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Our diversified investment strategies are designed to build resilient wealth that withstands market volatility while steadily appreciating over time.
                </p>
              </CardContent>
            </Card>
          </AnimateIn>
          
          <AnimateIn delay={0.2}>
            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-moss/5 flex items-center justify-center mb-4">
                  <Heart className="text-moss h-6 w-6" />
                </div>
                <CardTitle className="font-nib text-moss tracking-tighter-custom">Health Integration</CardTitle>
                <CardDescription className="font-arbeit text-moss/60">Evidence-based wellness strategies that enhance longevity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  We incorporate cutting-edge health science into our financial planning, recognizing that your most valuable asset is your well-being.
                </p>
              </CardContent>
            </Card>
          </AnimateIn>
          
          <AnimateIn delay={0.3}>
            <Card className="bg-white border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-moss/5 flex items-center justify-center mb-4">
                  <ChartLine className="text-moss h-6 w-6" />
                </div>
                <CardTitle className="font-nib text-moss tracking-tighter-custom">Aligned Metrics</CardTitle>
                <CardDescription className="font-arbeit text-moss/60">Measuring success across both financial and health domains</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Our proprietary frameworks track progress in both financial growth and health improvements, creating a holistic picture of your true prosperity.
                </p>
              </CardContent>
            </Card>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
