
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <Hero />
        <Approach />
        <Benefits />
        <Services />
      </main>
      <Footer />
    </>
  );
};

export default Index;
