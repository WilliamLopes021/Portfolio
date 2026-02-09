import thirdImg from "../../../assets/thirdImg.png";

const Objectives = () => {
  const textColor = `text-white bg-gray-900`;

  return (
    <div className={`md:p-6 px-6 py-10 md:px-16 md:flex ${textColor}`} id="Objetivos">
      <div className="md:w-1/2 text-xl">
        <h2 className="font-header text-3xl"> Objetivos </h2>
        <p className="font-body py-3">
          Atualmente estou fazendo um curso sobre JavaScript/TypeScript e
          buscando implementar a Programação Orientada a Objetos nos meus
          projetos. Também esotu em busca de entrar no mercado de trabalho como
          desenvolvedor. Ademais, estou buscando desenvolver novos projetos que
          buscam resolver problemas reais e pertinente na vida das pessoas.
        </p>
      </div>
      <div className="md:w-1/2 md:p-10 py-4">
        <img className="w-full rounded-sm" src={thirdImg} alt="Imagem" />
      </div>
    </div>
  );
};

export default Objectives;
