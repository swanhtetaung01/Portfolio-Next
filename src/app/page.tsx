import { About } from "@/components/About";
import { Arsenal } from "@/components/Arsenal";
import { Atmosphere } from "@/components/Atmosphere";
import { CaseFiles } from "@/components/CaseFiles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MotionProvider } from "@/components/MotionProvider";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <MotionProvider>
      <div className="relative flex min-h-dvh flex-col">
        <Atmosphere />
        <Nav />
        <main className="relative flex-1">
          <Hero />
          <Marquee />
          <About />
          <Arsenal />
          <CaseFiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
