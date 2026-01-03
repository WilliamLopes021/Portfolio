const NavBar = () => {
  const navItens = ["Home", "Projetos", "Objetivos", "Contato"];

  return (
    <div className="p-6 px-14 flex justify-between bg-slate-950 text-white items-center">
      <div
        className="text-2xl font-medium font-header cursor-pointer"
        id="Home"
      >
        DinoDev
      </div>
      <nav>
        <ul className="flex gap-8 font-body">
          {navItens.map((v, i) => {
            return (
              <li
                key={i}
                className="px-2 py-0.5 cursor-pointer transition relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-1 after:w-0 after:bg-sky-800 hover:after:w-2/3 after:transition-all
                after duration-300 after:rounded-xs hover:-translate-y-0.5 after:justify-center"
              >
                <a href={`#${v}`}>{v}</a>
              </li>
            );
          })}
          {/* <select
            name=""
            id=""
            className="px-2 py-0.5 cursor-pointer transition relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-1 after:w-0 after:bg-sky-800 hover:after:w-2/3 after:transition-all
                after duration-300 after:rounded-xs hover:-translate-y-0.5 after:justify-center"
          >
            <option value="" className="bg-slate-700"> PT-BR </option>
            <option value="" className="bg-slate-700"> EN-US </option>
          </select> */}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
