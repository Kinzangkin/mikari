import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portofolio from "@/components/Portofolio";
import { Promot } from "@/components/Promot";
import Support from "@/components/Support";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
    <div className="bg-linear-to-br from-blue-100 via-blue-50 to-orange-50 relative overflow-hidden">
      <div>
        <Navbar />
      </div>
      <div className="fixed inset-0 opacity-30 pointer-events-none z-[-1]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-300 rounded-full blur-3xl" />
      </div>
      <div id="home">
        <Hero />
      </div>
      <div id="portfolio">
        <Portofolio />
      </div>
      <div id="process">
        <About />
      </div>
      <div id="achievment">
        <Achievement />
      </div>
      <div>
        <Promot />
      </div>
      <div>
        <Support />
      </div>
      <div>
        <Tools />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
