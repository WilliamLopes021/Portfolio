import { projectsList as projects } from "../../../storage/Projects";
import secondImg from "../../../assets/secondImg.png";

const Projects = () => {
  return (
    <section
      id="Projetos"
      className="bg-gray-900 text-white px-6 md:px-16 py-10"
    >
      <div className="flex flex-col md:flex-row gap-10">
        
        <div className="w-full md:w-1/2">
          <h2 className="font-header text-3xl mb-5">Projetos</h2>

          <div className="w-full text-xl overflow-auto custom-scroll max-h-72">
            {projects.map((project, i) => (
              <div key={i} className="flex flex-col gap-3 mb-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:underline"
                >
                  {project.name}
                </a>

                <p className="text-base font-body">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={secondImg}
            alt="Imagem"
            className="w-full max-w-md rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
