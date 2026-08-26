import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import ContactCTA from "../components/Contacts";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <TechStack />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}

export default Home;