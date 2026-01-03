import { projectsList as projects } from "../../../storage/Projects";
import secondImg from "../../../assets/secondImg.png";

const Projects = () => {
  const textColor = `text-white bg-gray-900`;

  return (
    <div className={`p-6 px-16 flex ${textColor}`} id="Projetos">
      <div className="w-1/2">
        <h2 className="font-header text-3xl mb-5"> Projetos </h2>
        <div className="w-full text-xl overflow-auto custom-scroll h-70">
          {projects.map((project, i) => (
            <div key={i} className="w-full flex flex-col gap-4 mb-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold hover:underline"
              >
                {project.name}
              </a>

              <p className="text-base font-body">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 p-10">
        <img className="w-full rounded-sm" src={secondImg} alt="Imagem" />
      </div>
    </div>
  );
};

export default Projects;
