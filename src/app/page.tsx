import dynamic from "next/dynamic";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => (
    <section className="section-padding" aria-hidden="true">
      <div className="mx-auto h-40 max-w-6xl animate-pulse rounded-2xl bg-zinc-200/50 dark:bg-white/5" />
    </section>
  ),
});

export default function Home() {
  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <div className="relative z-10">
        <Navbar />
        <main id="main-content">
          <Hero />
          <Stats />
          <Projects />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
