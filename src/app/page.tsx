import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Products } from "@/components/products/Products";
import { NightCoreSection } from "@/components/nightcore/NightCoreSection";
import { Roadmap } from "@/components/roadmap/Roadmap";
import { NightCoreConsole } from "@/components/console/NightCoreConsole";
import { CTASection } from "@/components/cta/CTASection";
import { Footer } from "@/components/footer/Footer";
import { FloorTransition } from "@/components/hero/FloorTransition";
import { EngineeringDivision } from "@/components/engineering/EngineeringDivision";
import { ResearchLabs } from "@/components/research/ResearchLabs";
import { CommandCenter } from "@/components/command/CommandCenter";
import { JarvisHeadquartersGuide } from "@/components/jarvis/JarvisHeadquartersGuide";

export default function Home() {
  return <div id="home" className="min-h-screen"><Navbar /><Hero /><JarvisHeadquartersGuide /><FloorTransition /><EngineeringDivision /><Products /><NightCoreSection /><Roadmap /><ResearchLabs /><CommandCenter /><NightCoreConsole /><CTASection /><Footer /></div>;
}
