import Link from "next/link";
import React from "react";
import projectJson from "../json/projects.json";




function ProjectCard({ props }) {
  const json = projectJson.projects;
  let link = 'https://via.placeholder.com/400x400'
  json.map((proj)=>{
    if (proj.name == props.name){
        link = proj.image
    }
  })
  return (
    <div className="flex flex-col flex-shrink-0 snap-center items-center w-[400px] md:w-[600px] xl:w-[700px] space-y-7 shadow-xl rounded-xl p-2 m-5">
      <div className="flex m-10 flex-shrink-0">
        <div className="flex-row w-full mx-auto justify-center items-center">
          <h3 className="font-Rajdhani font-bold text-2xl">
            <Link href={props.html_url}>
                <a target="_blank" rel="noopener noreferrer">
                  {props.name}
                </a>
            </Link>
            </h3>


          <div className="flex items-center justify-center">
            {/* 
                        <div className="absolute w-full h-10 bg-gray-600 flex items-center justify-center rounded-lg cursor-pointer hidden">
              <h3 className="text-white font-Rajdhani">VER MAIS</h3>
            </div>
            */}
            
            <img
            className="object-contain rounded-md h-[500px] w-full"
            src={link}
            alt=""
          />
          </div>

          <h4 className="font-Rajdhani font-medium max-w-lg">
            {props.description}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
