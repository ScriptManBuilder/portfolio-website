import Header from './components/Header';
import Footer from './components/Footer';
import TelegramButton from './components/TelegramButton';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </main>
    <Footer />
    <TelegramButton />
  </>
);

export default App;
