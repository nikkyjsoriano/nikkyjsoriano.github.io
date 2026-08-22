import { useState, type MouseEvent } from "react";
import { navItems } from "@/data/navItems";

export interface NavBarProps {
  onNavClick: (event: MouseEvent<HTMLAnchorElement>) => void;
  /** Gates the items marked `authRequired` in `navItems`. */
  isAuthenticated: boolean;
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

function NavBar({
  onNavClick,
  isAuthenticated,
  theme,
  onThemeToggle,
}: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onNavClick(event);
    setIsMenuOpen(false);
  };

  const visibleItems = navItems.filter(
    (item) => item.authRequired !== true || isAuthenticated,
  );

  return (
    <div className="navbar bg-base-100 shadow-sm w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <a
          href="#home"
          className="btn btn-ghost lg:text-3xl text-2xl"
          onClick={handleNavItemClick}>
          Nikky Soriano
        </a>
      </div>
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-bold">
          {visibleItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleNavItemClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-none">
        <button
          type="button"
          onClick={onThemeToggle}
          className="btn btn-ghost btn-circle"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          aria-pressed={theme === "dark"}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true">
              <path d="M9.6 2.4a.75.75 0 0 0-.523.211A9.75 9.75 0 1 0 21.39 14.923a.75.75 0 0 0-.926-.927A7.5 7.5 0 0 1 10.004 3.536.75.75 0 0 0 9.6 2.4Z"/>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3m15.364-6.364-1.061 1.06M6.697 17.303l-1.06 1.061m12.728 0-1.061-1.06M6.697 6.697l-1.06-1.061M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
            </svg>
          )}
        </button>
      </div>
      <div className="flex-none lg:hidden">
        <button
          onClick={toggleMenu}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h7"}/>
          </svg>
        </button>
        <div
          className={`fixed top-16 right-0 w-48 bg-base-100 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <ul className="menu menu-lg p-2">
            {visibleItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavItemClick}
                  className="text-base hover:bg-base-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
