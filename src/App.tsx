import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Expertise } from './sections/Expertise';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Credentials } from './sections/Credentials';
import { Contact } from './sections/Contact';

export default function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Skills />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
