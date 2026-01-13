import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroConcept1 } from './components/HeroConcept1';
import { HeroConcept2 } from './components/HeroConcept2';
import { HeroConcept3 } from './components/HeroConcept3';
import { HeroConcept4 } from './components/HeroConcept4';
import { Home } from './components/Home';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0e0e10] text-white selection:bg-blue-500/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concept-1" element={
              <>
                <HeroConcept3 />
                <Features />
              </>
            } />
            <Route path="/concept-2" element={
              <>
                <HeroConcept2 />
                <Features />
              </>
            } />
            <Route path="/concept-3" element={
              <>
                <HeroConcept1 />
                <Features />
              </>
            } />
            <Route path="/concept-4" element={
              <>
                <HeroConcept4 />
                <Features />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
