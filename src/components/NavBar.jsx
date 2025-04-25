function NavBar({ onNavClick }) {
  return (
    <div className="navbar bg-base-100 shadow-sm w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <a
          href="#home"
          className="btn btn-ghost lg:text-3xl text-2xl"
          onClick={onNavClick}
        >
          Nikky Soriano
        </a>
      </div>
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl text-bold">
          <li>
            <a href="#home" onClick={onNavClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={onNavClick}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={onNavClick}>
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={onNavClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-none lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="#home" onClick={onNavClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={onNavClick}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={onNavClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={onNavClick}>
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
