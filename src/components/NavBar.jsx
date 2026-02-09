import { useState } from "react";

const NavBar = () => {
  const navItens = ["Home", "Projetos", "Objetivos", "Contato"];
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-950 text-white sticky top-0 z-50">
      <div className="px-6 md:px-14 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-medium font-header cursor-pointer"
          id="Home"
        >
          DinoDev
        </div>

        {/* Botão mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu */}
        <nav
          className={`
            absolute md:static
            top-16 left-0 w-full md:w-auto
            bg-slate-950 md:bg-transparent
            transition-all duration-300
            ${open ? "flex" : "hidden"} md:flex
          `}
        >
          <ul className="flex flex-col md:flex-row gap-6 md:gap-8 px-6 md:px-0 py-6 md:py-0 font-body">
            {navItens.map((v, i) => (
              <li
                key={i}
                className="px-2 py-1 cursor-pointer relative inline-block transition hover:-translate-y-0.5
                  after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5
                  after:h-1 after:w-0 after:bg-sky-800 after:transition-all after:duration-300
                  hover:after:w-2/3"
                onClick={() => setOpen(false)}
              >
                <a href={`#${v}`}>{v}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
