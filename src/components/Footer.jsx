import { contact } from "../storage/Contact";
import { skills } from "../storage/Skills";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white p-6 px-14" id="Contato">
      <div className="flex justify-between items-center">
        <div>
          <p className="">
            <strong>Gabriel William</strong> Desenvolvedor FullStack/Backend
          </p>
          <ul className="columns-2 mt-2">
            {skills.map((skill, i) => {
              const { name, icon: Icon } = skill;
              return (
                <li key={i} className="flex items-center gap-1">
                  <Icon /> {name}{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p className="font-body">Contato</p>
          <ul className="mt-2">
            {contact.map((obj, i) => {
              const { name, icon: Icon } = obj;
              return (
                <li key={i} className="flex items-center gap-1">
                  <a href={obj.link} target="_blank" className="flex items-center gap-2">
                    <Icon color={obj.color}/> {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <a
        className="text-right mt-4 text-sky-900 hover:text-sky-700 inline-block"
        href="https://github.com/DinoPimenteiro/Portfolio.git"
      >
        Código fonte disponível no GitHub!
      </a>
    </footer>
  );
};

export default Footer;
