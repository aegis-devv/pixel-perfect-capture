import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/portfolio/Cursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Intro } from "@/components/portfolio/Intro";
import { Services } from "@/components/portfolio/Services";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useSmoothScroll();

  return (
    <>
      {/* Custom cursor (desktop only) */}
      <Cursor />

      {/* Fixed navigation */}
      <Nav />

      <main>
        {/* 1 — Hero: full viewport, warm paper bg, giant name + portrait */}
        <Hero />

        {/* 2 — Marquee: tech/skill names strip between sections */}
        <Marquee />

        {/* 3 — Intro: editorial statement with line-by-line reveal */}
        <Intro />

        {/* 4 — Services: sticky full-height panels with outlined numerals */}
        <Services />

        {/* 5 — Selected work: stacked project list */}
        <Work />

        {/* 6 — About: bio + experience timeline + live clock */}
        <About />

        {/* 7 — Contact: headline + form + socials */}
        <Contact />
      </main>

      {/* Minimal footer */}
      <Footer />
    </>
  );
}
