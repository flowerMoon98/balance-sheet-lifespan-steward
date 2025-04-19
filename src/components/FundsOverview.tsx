
import { AnimateIn } from "./AnimateIn";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function FundsOverview() {
  return (
    <section id="funds" className="py-section bg-white">
      <div className="container mx-auto">
        <AnimateIn>
          <h2 className="font-nib text-moss tracking-tighter-custom text-[24px] md:text-[28px] mb-12 text-center">Funds Overview</h2>
        </AnimateIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          <AnimateIn delay={0.1}>
            <Card className="transition-shadow duration-300 hover:shadow-md border-none">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-nib text-moss tracking-tighter-custom text-xl">Growth Fund</CardTitle>
                  <span className="px-2 py-1 text-xs rounded-full bg-lime/20 text-moss font-arbeit">Moderate</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Global equities with an emphasis on companies advancing human longevity and sustainable wealth creation.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-moss hover:underline font-arbeit tracking-tight-custom transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">
                  View Fund →
                </a>
              </CardFooter>
            </Card>
          </AnimateIn>
          
          <AnimateIn delay={0.2}>
            <Card className="transition-shadow duration-300 hover:shadow-md border-none">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-nib text-moss tracking-tighter-custom text-xl">Property Fund</CardTitle>
                  <span className="px-2 py-1 text-xs rounded-full bg-lime/20 text-moss font-arbeit">Balanced</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Premium healthcare and wellness-oriented real estate assets generating stable income with appreciation potential.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-moss hover:underline font-arbeit tracking-tight-custom transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">
                  View Fund →
                </a>
              </CardFooter>
            </Card>
          </AnimateIn>
          
          <AnimateIn delay={0.3}>
            <Card className="transition-shadow duration-300 hover:shadow-md border-none">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-nib text-moss tracking-tighter-custom text-xl">Opportunities Fund</CardTitle>
                  <span className="px-2 py-1 text-xs rounded-full bg-lime/20 text-moss font-arbeit">Growth</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-arbeit text-moss/60 tracking-tight-custom">
                  Venture and private equity investments in breakthrough health technology and financial innovation.
                </p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-moss hover:underline font-arbeit tracking-tight-custom transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">
                  View Fund →
                </a>
              </CardFooter>
            </Card>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
