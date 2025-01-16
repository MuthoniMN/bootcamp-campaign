import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Companies from "../components/Companies";
import AboutSection from "../components/AboutSection";

export default function LandingPage(){
  return (
    <main className="w-screen">
      <NavBar />
      <HeroSection />
      <Companies />
      <AboutSection />
    </main>
  )
}
