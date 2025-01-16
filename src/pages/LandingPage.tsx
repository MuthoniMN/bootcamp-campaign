import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Companies from "../components/Companies";
import AboutSection from "../components/AboutSection";
import Tracks from "../components/Tracks";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function LandingPage(){
  return (
    <main className="w-screen">
      <NavBar />
      <HeroSection />
      <Companies />
      <AboutSection />
      <Tracks />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
