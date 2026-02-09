import Banner from "../../../assets/FirstBanner.png"

const Introduction = () => {
  const textColor = `text-white bg-gray-900`;
  return (
    <div className={`p-6 md:px-16 md:flex ${textColor}`}>
      <div className="md:w-1/2 text-xl">
        <h2 className="font-header text-3xl">Quem sou eu?</h2>
        <p className="font-body py-3">
          Olá, meu nome é Gabriel William e sou apaixonado por aprender. Meu
          primeiro contato com a área da programação foi em 2024, através do
          curso técnico de desenvolvimento de sistemas da ETEC de Guarulhos.
          Além da formação técnica, também me destaco pelo meu trabalho em equipe
        </p>

        <p>
          Tenho plena capacidade de desenvolver e, caso seja necessário, me
          adaptar as mais diversas situações de um projeto.
        </p>
      </div>
      <div className="md:w-1/2 md:p-10 py-6">
        <img
          className="w-full rounded-sm"
          src={Banner}
          alt="Imagem"
        />
      </div>
    </div>
  );
};

export default Introduction;
