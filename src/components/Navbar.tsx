
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          <a href="#approach" className="text-sm font-medium text-moss hover:text-moss/80 transition-colors">Our Approach</a>
          <a href="#benefits" className="text-sm font-medium text-moss hover:text-moss/80 transition-colors">Benefits</a>
          <a href="#services" className="text-sm font-medium text-moss hover:text-moss/80 transition-colors">Services</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-moss hover:text-moss/80">Sign In</Button>
          <Button className="bg-moss text-white hover:bg-moss/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
