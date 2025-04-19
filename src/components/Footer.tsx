
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-moss text-white/60 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="text-white mb-4" />
            <p className="font-arbeit tracking-tight-custom text-sm">
              Aligning health and wealth to create a legacy of prosperity that spans generations.
            </p>
          </div>
          
          <div>
            <h4 className="font-nib text-white tracking-tighter-custom mb-4">Services</h4>
            <ul className="space-y-2 text-sm font-arbeit">
              <li><a href="#" className="hover:text-white transition-colors">Wealth Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retirement Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Health Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Longevity Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-nib text-white tracking-tighter-custom mb-4">Company</h4>
            <ul className="space-y-2 text-sm font-arbeit">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-nib text-white tracking-tighter-custom mb-4">Legal</h4>
            <ul className="space-y-2 text-sm font-arbeit">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm font-arbeit tracking-tight-custom">
          <p>&copy; {new Date().getFullYear()} Rajomon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
