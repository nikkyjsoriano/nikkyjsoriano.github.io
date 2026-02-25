import React, { useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "../data/navItems";

function NavBar({ onNavClick, isAuthenticated }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = (e) => {
    onNavClick(e);
    setIsMenuOpen(false);
  };

  const visibleItems = navItems.filter(
    (item) => !item.authRequired || isAuthenticated
  );

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="navbar bg-base-100 shadow-sm w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <motion.a
          href="#home"
          className="btn btn-ghost lg:text-3xl text-2xl"
          onClick={handleNavItemClick}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Nikky Soriano
        </motion.a>
      </div>
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-bold">
          {visibleItems.map((item, i) => (
            <motion.li
              key={item.href}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <a href={item.href} onClick={handleNavItemClick}>
                {item.label}
              </a>
            </motion.li>
          ))}
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
          className={`fixed top-16 right-0 w-48 bg-base-100 shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="menu menu-lg p-2">
            {visibleItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavItemClick}
                  className="text-base hover:bg-base-200"
                >
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
