import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Conctact";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

export default App;
