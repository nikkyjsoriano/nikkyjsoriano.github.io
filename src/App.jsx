import "./App.css";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import LanguageSkills from "./components/LanguageSkills";
import { useState, useEffect } from "react";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skills">
        <LanguageSkills />
      </div>
      <div
        id="contact"
        className="min-h-screen py-16 bg-base-300 flex items-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg mb-6">
              Feel free to reach out to me at{" "}
              <a
                href="mailto:nikkyjsoriano@gmail.com"
                className="text-primary hover:text-primary-focus"
              >
                nikkyjsoriano@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        } w-[50px] h-[50px] rounded-full bg-base-300 border-2 border-primary/20 font-semibold flex items-center justify-center shadow-lg cursor-pointer overflow-hidden hover:w-[140px] hover:rounded-[50px] group`}
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
