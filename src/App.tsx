import Header from './components/Header';
import Footer from './components/Footer';
import TelegramButton from './components/TelegramButton';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import WorkExperience from './sections/workExperience';
import Projects from './sections/Projects';
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
      <WorkExperience />
      <Contact />
    </main>
    <Footer />
    <TelegramButton />
  </>
);

export default App;
