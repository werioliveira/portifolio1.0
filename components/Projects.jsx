import React from "react";
import ProjectCard from "./ProjectCard";
import projectJson from "../json/projects.json";

function Projects() {
  const json = projectJson.projects;
  return (
    <div className="min-w-full min-h-screen bg-slate-100 overflow-hidden flex md:text-left md:flex-row dark:bg-neutral-800">
      <div className="w-screen">
        <div className="justify-center text-center p-10">
          <h1 className="text-4xl font-Rajdhani font-bold uppercase tracking-[15px]">
            Projetos
          </h1>
          <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory xl:mt-8 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-800 scrollbar-thin">
            {json.map((project) => (
              <ProjectCard props={project} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
