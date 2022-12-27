import React,{useEffect,useState} from "react";
import ProjectCard from "./ProjectCard";
import projectJson from "../json/projects.json";


const Projects = () =>{
  const json = projectJson.projects;
  const [repos, setRepos]=useState([])
  const fetchData = () =>{
    
    fetch('https://api.github.com/users/werioliveira/repos').then((response)=>{
      return response.json()
    }).then((data)=>{
      setRepos(data)
    })
  }
useEffect(()=>{
  fetchData()
},[])
  return (
    <div className="min-w-full min-h-screen bg-slate-100 overflow-hidden flex md:text-left md:flex-row dark:bg-neutral-800">
      <div className="w-screen">
        <div className="text-center p-10 overflow-x-hidden">
          <h1 className="text-4xl font-Rajdhani font-bold uppercase tracking-[15px]">
            Projetos
          </h1>
          <div className="w-full flex space-x-5  overflow-x-scroll items-center p-10 snap-x snap-mandatory xl:mt-8 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-800 scrollbar-thin">
           
           {/* 
            {json.map((project) => (
              <ProjectCard props={project} key={project.id} />
            ))}
            */}
            {repos.map((repo)=>
            (
              <ProjectCard props={repo} key={repo.id} />
            )
            
            )}

          </div>
        </div>
      </div>
    </div>
  );
}




export default Projects;
