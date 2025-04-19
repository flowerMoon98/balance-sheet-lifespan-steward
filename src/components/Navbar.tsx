
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto py-4 flex items-center justify-between">
        {/* Skip link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-white focus:outline-none focus:ring-2 focus:ring-lime"
        >
          Skip to main content
        </a>
        
        <Logo />
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#ethos" className="text-sm font-arbeit tracking-tight-custom text-moss hover:text-moss/80 transition-colors focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">Our Ethos</Link>
          <Link to="/#alignment" className="text-sm font-arbeit tracking-tight-custom text-moss hover:text-moss/80 transition-colors focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">Alignment</Link>
          <Link to="/#funds" className="text-sm font-arbeit tracking-tight-custom text-moss hover:text-moss/80 transition-colors focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">Funds</Link>
          <Link to="/#insights" className="text-sm font-arbeit tracking-tight-custom text-moss hover:text-moss/80 transition-colors focus:outline-none focus:ring-2 focus:ring-lime focus:ring-offset-2">Insights</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-moss hover:text-moss/80 font-arbeit tracking-tight-custom focus:ring-2 focus:ring-lime focus:ring-offset-2">
            Sign In
          </Button>
          <Button className="bg-moss text-white hover:bg-moss/90 font-arbeit tracking-tight-custom focus:ring-2 focus:ring-lime focus:ring-offset-2">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
