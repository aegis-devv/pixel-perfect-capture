import { createFileRoute } from "@tanstack/react-router";
import { Cursor } from "@/components/portfolio/Cursor";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { Intro } from "@/components/portfolio/Intro";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Services } from "@/components/portfolio/Services";
import { Achievements } from "@/components/portfolio/Achievements";
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
      {/* Custom cursor — desktop only, disabled on touch */}
      <Cursor />

      {/* Sticky navigation */}
      <Nav />

      <main>
        {/* 01 — Hero: full-viewport, portrait behind fit-width name */}
        <Hero />

        {/* Scroll-reactive tech marquee strip */}
        <Marquee />

        {/* 02 — Philosophy: editorial display statement */}
        <Intro />

        {/* 03 — Projects: Wavicle, apidrift */}
        <Work />

        {/* 04 — Experience: NIC, Dailygroce */}
        <Experience />

        {/* 05 — Technical Skills: editorial table */}
        <Services />

        {/* 06 — Achievements: GSoC, hackathons */}
        <Achievements />

        {/* 07 — About: portrait + bio + education */}
        <About />

        {/* 08 — Contact: headline + form + socials */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
