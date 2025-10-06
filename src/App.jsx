import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import LanguageSkills from "./components/LanguageSkills";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current active section
      const sections = document.querySelectorAll("div[id]");
      const currentSection = Array.from(sections).find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 2;
      });

      // Only show button if we're not on the first section
      const shouldShow = currentSection && currentSection.id !== "home";
      console.log(
        "Current section:",
        currentSection?.id,
        "Should show button:",
        shouldShow
      );
      setShowBackToTop(shouldShow);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Also check on hash change
    window.addEventListener("hashchange", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Find the home section and scroll to it
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  console.log("Current showBackToTop state:", showBackToTop);

  return (
    <div className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
      <NavBar onNavClick={handleNavClick} />
      <main className="relative">
        <div id="home" className="h-screen snap-start">
          <Landing />
        </div>
        <div id="about" className="h-screen snap-start">
          <AboutMe />
        </div>
        <div id="skills" className="snap-start">
          <LanguageSkills />
        </div>
        <div id="contact" className="h-screen snap-start">
          <Contact />
        </div>
      </main>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[100] transition-all duration-300 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        } w-[50px] h-[50px] rounded-full bg-base-300 border-2 border-primary/20 font-semibold flex items-center justify-center shadow-lg cursor-pointer overflow-hidden hover:w-[140px] hover:rounded-[50px] group`}
        style={{ display: showBackToTop ? "flex" : "none" }}
        aria-label="Back to top"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <svg
            className="w-3 transition-transform duration-300 group-hover:translate-y-[-200%]"
            viewBox="0 0 384 512"
          >
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
              className="fill-base-content"
            />
          </svg>
          <span className="absolute text-base-content text-[0px] opacity-0 transition-all duration-300 group-hover:text-[13px] group-hover:opacity-100">
            Back to Top
          </span>
        </div>
      </button>
    </div>
  );
}

export default App;
