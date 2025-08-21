import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience'; // shows cards only
import Education from './components/Education';
import Contact from './components/Contact';
import ContactForm from './pages/ContactForm';

// ✅ Friend's actual client detail pages
import Sanguine from './pages/experience/sanguine';
import Pristen from './pages/experience/pristen';
import ExpertAid from './pages/experience/expertaid';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage (no Projects section) */}
        <Route
          path="/"
          element={
            <>
              <div id="home"><Hero /></div>
              <div id="about"><About /></div>
              <div id="skills"><Skills /></div>
              <div id="experience"><Experience /></div>
              <div id="education"><Education /></div>
              <div id="contact"><Contact /></div>
            </>
          }
        />


        {/* Client detail pages */}
        <Route path="/experience/sanguine" element={<Sanguine />} />
        <Route path="/experience/pristen" element={<Pristen />} />
        <Route path="/experience/expertaid" element={<ExpertAid />} />

        {/* Contact form (from Hero button) */}
        <Route path="/contact-form" element={<ContactForm />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-4 px-6 text-center">
              <h1 className="text-3xl font-semibold">Page not found</h1>
              <a href="/" className="text-cyan-400 underline">Go back home</a>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
