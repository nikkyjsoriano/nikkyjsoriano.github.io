import { useCallback, useMemo, type MouseEvent } from "react";
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

/**
 * Shared secret that unhides the Experience section.
 *
 * This is a soft gate for a static site, not a security boundary: the value
 * ships in the client bundle and anyone can read it. Treat everything behind it
 * as public, and never put anything sensitive here.
 */
const VALID_PASSWORD = "Nk$7xR#vQ2pL9w";

function App() {
  const isAuthenticated = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("password") === VALID_PASSWORD;
  }, []);

  const handleNavClick = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.slice(1);
    if (targetId === undefined) {
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  }, []);

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
        {isAuthenticated ? (
          <SectionWrapper id="experience">
            <Experience />
          </SectionWrapper>
        ) : null}
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
