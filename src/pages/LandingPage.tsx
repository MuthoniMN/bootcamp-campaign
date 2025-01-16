import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Companies from "../components/Companies";
import AboutSection from "../components/AboutSection";
import Tracks from "../components/Tracks";

export default function LandingPage(){
  return (
    <main className="w-screen">
      <NavBar />
      <HeroSection />
      <Companies />
      <AboutSection />
      <Tracks />
    </main>
  )
}
