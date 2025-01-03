import React, { useState, useEffect } from "react";
import {
  Main,
  Expertise,
  Project,
  Career,
  Education,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './pages/ProjectPage';
import './index.scss';

function App() {
  const [mode, setMode] = useState<string>('dark');

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Router>
      <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Routes>
            <Route path="My-Portfolio-V2/" element={
              <>
                <Main />
                <Career />
                <Education />
                <Expertise />
                <Project />
              </>
            } />
            <Route path="My-Portfolio-V2/projects" element={<ProjectPage />} />
          </Routes>
        </FadeIn>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
