import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingActions } from './components/widget/FloatingActions';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Team } from './pages/Team';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { Internship } from './pages/Internship';
import { InternshipApply } from './pages/InternshipApply';
import { Careers } from './pages/Careers';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-navy-bg text-gray-900 dark:text-navy-text transition-colors duration-200">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/internship" element={<Internship />} />
              <Route path="/internship/apply/:courseId" element={<InternshipApply />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
