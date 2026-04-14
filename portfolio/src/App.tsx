import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import StarBackground from './components/StartBackground';
import BackToTop from './components/BackToTop'; // Import it here

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      duration: 1.5,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-white relative">
      <StarBackground />
      
      {/* Renders at the root level so z-100 works globally */}
      <BackToTop />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
          <Resume />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;