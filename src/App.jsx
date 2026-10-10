import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import { quotes } from "./data/data";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Quote {...quotes.craft} />
        <Experience />
        <Skills />
        <Quote {...quotes.shipping} />
        <Projects />
        <Quote {...quotes.problem} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
