
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Benefits />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
