import SkillsDisplay from "./SkillsDisplay";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-950 text-white p-6 px-12 justify-between">
      <div className="font-header">
        <h1 className="md:text-8xl md:leading-30 text-6xl leading-18">
          {" "}
          Gabriel <br /> William{" "}
        </h1>
        <h2 className="font-title text-3xl pl-2 mt-2">
          Desenvolvedor <br /> BackEnd/FullStack
        </h2>
      </div>

      <div className="md:w-xl w-full">
        <div className="h-60 min-w-lg mb-10 flex p-7 mt-5 md:items-center md:justify-center">
          <SkillsDisplay />
        </div>
        <p className="font-body text-lg">
          “O atrativo do conhecimento seria pequeno se no caminho que a ele
          conduz não houvesse que vencer tanto pudor.”
        </p>
      </div>
    </div>
  );
};

export default Banner;
