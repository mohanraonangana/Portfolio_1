import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle';
import Skills from './components/Skills';
import Home from './components/Home';
import Projects from './components/Projects';
import Internships from './components/Internships';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Dock from './components/Dock';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Dock />
      </div>
    </Router>
  );
}

export default App;
