import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    {/* <Testimonials/> */}
    <Contact/>
  </main>
  );
}

export default App;
