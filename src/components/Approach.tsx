
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, Wallet, Heart } from "lucide-react";

import { AnimateIn } from "./AnimateIn";

export function Approach() {
  return (
    <section id="approach" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimateIn>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Unique Approach</h2>
            <p className="text-lg text-gray-600">
              We've pioneered a methodology that unites financial prosperity with personal wellbeing—creating a symbiotic relationship that amplifies both.
            </p>
          </AnimateIn>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <AnimateIn delay={0.1}>
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Wallet className="text-indigo-600 h-6 w-6" />
                </div>
                <CardTitle>Wealth Stewardship</CardTitle>
                <CardDescription>Strategic capital management focused on sustainable long-term growth</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our diversified investment strategies are designed to build resilient wealth that withstands market volatility while steadily appreciating over time.
                </p>
              </CardContent>
            </Card>
          </AnimateIn>
          
          <AnimateIn delay={0.2}>
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Heart className="text-green-600 h-6 w-6" />
                </div>
                <CardTitle>Health Integration</CardTitle>
                <CardDescription>Evidence-based wellness strategies that enhance longevity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We incorporate cutting-edge health science into our financial planning, recognizing that your most valuable asset is your well-being.
                </p>
              </CardContent>
            </Card>
          </AnimateIn>
          
          <AnimateIn delay={0.3}>
            <Card className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <ChartLine className="text-purple-600 h-6 w-6" />
                </div>
                <CardTitle>Aligned Metrics</CardTitle>
                <CardDescription>Measuring success across both financial and health domains</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
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
