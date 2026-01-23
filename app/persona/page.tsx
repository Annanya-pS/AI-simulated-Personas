import PersonaCards from "@/component/cardPersona";
import Footer from '@/component/footer';
import Navbar from "@/component/navbar";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 min-h-screen">
      <div className="pb-25">
        <Navbar />
      </div>
      <PersonaCards />
      <br />
      <br />
      <Footer />
    </div>
  );
}