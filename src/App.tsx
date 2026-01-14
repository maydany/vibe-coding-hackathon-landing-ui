import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { MatrixHero } from './components/MatrixHero';
import { CubeHero } from './components/CubeHero';
import { OrbHero } from './components/OrbHero';
import { ComputerHero } from './components/ComputerHero';
import { Home } from './components/Home';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-page min-h-screen text-white selection:bg-blue-500/30">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/concept-1"
              element={
                <>
                  <MatrixHero />
                  <Features />
                </>
              }
            />
            <Route
              path="/concept-2"
              element={
                <>
                  <CubeHero />
                  <Features />
                </>
              }
            />
            <Route
              path="/concept-3"
              element={
                <>
                  <OrbHero />
                  <Features />
                </>
              }
            />
            <Route
              path="/concept-4"
              element={
                <>
                  <ComputerHero />
                  <Features />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
