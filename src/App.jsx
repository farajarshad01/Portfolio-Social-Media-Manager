import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { CursorGlow, ScrollProgress } from "./components/ui";

export default function App() {
  return (
    <div id="top" className="relative min-h-screen">
      {/* Ambient color tints — delete these two lines for a fully flat background */}
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      <CursorGlow />
      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <Clients />
        <Showcase />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
