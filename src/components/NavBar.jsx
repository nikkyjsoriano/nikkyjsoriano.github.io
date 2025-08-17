import React, { useState } from "react";

function NavBar({ onNavClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (e) => {
    onNavClick(e);
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <a
          href="#home"
          className="btn btn-ghost lg:text-3xl text-2xl"
          onClick={handleNavItemClick}
        >
          Nikky Soriano
        </a>
      </div>
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-bold">
          <li>
            <a href="#home" onClick={handleNavItemClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavItemClick}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleNavItemClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#github" onClick={handleNavItemClick}>
              GitHub
            </a>
          </li>
          <li>
            <a href="#leetcode" onClick={handleNavItemClick}>
              LeetCode
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavItemClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-none lg:hidden">
        <button
          onClick={toggleMenu}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h7"}
            />
          </svg>
        </button>
        <div
          className={`fixed top-[65px] right-0 w-48 bg-base-100 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="menu menu-lg p-2">
            <li>
              <a
                href="#home"
                onClick={handleNavItemClick}
                className="text-base hover:bg-base-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={handleNavItemClick}
                className="text-base hover:bg-base-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={handleNavItemClick}
                className="text-base hover:bg-base-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#github"
                onClick={handleNavItemClick}
                className="text-base hover:bg-base-200"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#leetcode"
                onClick={handleNavItemClick}
                className="text-base hover:bg-base-200"
              >
                LeetCode
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={handleNavItemClick}
                className="text-base hover:bg-base-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
