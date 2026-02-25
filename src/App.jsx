import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import LanguageSkills from "./components/LanguageSkills";
import GitHubStats from "./components/GitHubStats";
import LeetCodeStats from "./components/LeetCodeStats";
import Contact from "./components/Contact";
import SectionWrapper from "./components/SectionWrapper";
import BackToTopButton from "./components/BackToTopButton";
import { useMemo } from "react";

const VALID_PASSWORD = "Nk$7xR#vQ2pL9w";

function App() {
  const isAuthenticated = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("password") === VALID_PASSWORD;
  }, []);

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <NavBar onNavClick={handleNavClick} isAuthenticated={isAuthenticated} />
      <main className="pt-16">
        <SectionWrapper id="home">
          <Landing />
        </SectionWrapper>
        <SectionWrapper id="about">
          <AboutMe />
        </SectionWrapper>
        {isAuthenticated && (
          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>
        )}
        <SectionWrapper id="skills">
          <LanguageSkills />
        </SectionWrapper>
        <SectionWrapper id="github">
          <GitHubStats />
        </SectionWrapper>
        <SectionWrapper id="leetcode">
          <LeetCodeStats />
        </SectionWrapper>
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
      </main>

      <BackToTopButton />
    </div>
  );
}

export default App;
