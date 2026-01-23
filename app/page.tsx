import HeroSection from "@/component/hero";
import Navbar from "@/component/navbar";
import HowItWorksSection from "@/component/how-it-work";
import Footer from "@/component/footer";
import PersonaCards from "@/component/cardPersona";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">







      <Navbar />

      <div className="pt-20"> {/* Add padding to offset fixed navbar */}
        <HeroSection />



        {/* Personas Section */}
        <div id="personas">
          <PersonaCards />
        </div>
      </div>

      <Footer />
    </div>
  );
}
