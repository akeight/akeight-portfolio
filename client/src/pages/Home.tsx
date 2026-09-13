import { Hero } from "@/sections/home/Hero";
import { WorkIndex } from "@/sections/home/WorkIndex";
import { ScoutFeature } from "@/sections/home/scout/ScoutFeature";
import { CatalystFeature } from "@/sections/home/CatalystFeature";
import { MovaFeature } from "@/sections/home/MovaFeature";
import { HackHQFeature } from "@/sections/home/HackHQFeature";
import { ToddIrisFeature } from "@/sections/home/ToddIrisFeature";
import { HowIBuild } from "@/sections/home/HowIBuild";
import { Credibility } from "@/sections/home/Credibility";
import { ArchiveIndex } from "@/sections/home/ArchiveIndex";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

/**
 * The homepage rhythm, top to bottom:
 * quiet → index → immersion (Scout) → system (Catalyst) → space (MOVA)
 * → energy (HackHQ) → precision (Todd Iris) → method → credibility → archive → close.
 */
const Home = () => {
  useDocumentMeta(
    "Allyson Keightley — Product Engineer",
    "I turn early ideas into working software. Five products, five questions — from prototype to production."
  );

  return (
    <div className="bg-background">
      <Hero />
      <WorkIndex />
      <ScoutFeature />
      <CatalystFeature />
      <MovaFeature />
      <HackHQFeature />
      <ToddIrisFeature />
      <HowIBuild />
      <Credibility />
      <ArchiveIndex />
    </div>
  );
};

export default Home;
