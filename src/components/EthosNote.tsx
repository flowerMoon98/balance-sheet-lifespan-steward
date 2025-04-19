
import { AnimateIn } from "./AnimateIn";

export function EthosNote() {
  return (
    <section id="ethos" className="py-section bg-moss text-white">
      <div className="container mx-auto">
        <div className="max-w-content mx-auto text-center">
          <AnimateIn>
            <blockquote className="font-nib text-white tracking-tighter-custom text-[24px] md:text-[28px] leading-[1.2] mb-8 max-w-2xl mx-auto">
              "Our mission is to align health and financial wellbeing—creating a legacy of prosperity that spans generations while honoring the present moment of being."
            </blockquote>
            <cite className="font-arbeit text-white/70 tracking-tight-custom text-sm not-italic">
              — Dr. Emiko Tanaka, Chair & Founder
            </cite>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
