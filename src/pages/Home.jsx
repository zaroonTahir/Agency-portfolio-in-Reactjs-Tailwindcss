// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Team from "../components/Team";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About/>
      <Team/>
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
