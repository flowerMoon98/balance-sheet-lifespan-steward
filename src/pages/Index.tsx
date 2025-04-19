
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EthosNote } from "@/components/EthosNote";
import { GateStory } from "@/components/GateStory";
import { AlignmentSnapshot } from "@/components/AlignmentSnapshot";
import { FundsOverview } from "@/components/FundsOverview";
import { WindowsOfStewardship } from "@/components/WindowsOfStewardship";
import { InsightTeaser } from "@/components/InsightTeaser";
import { InvitationRibbon } from "@/components/InvitationRibbon";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <EthosNote />
        <GateStory />
        <AlignmentSnapshot />
        <FundsOverview />
        <WindowsOfStewardship />
        <InsightTeaser />
        <InvitationRibbon />
      </main>
      <Footer />
    </>
  );
};

export default Index;
