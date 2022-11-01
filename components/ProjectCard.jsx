import React from "react";

function ProjectCard({ props }) {
  return (
    <div className="flex flex-col flex-shrink-0 snap-center items-center w-[400px] md:w-[600px] xl:w-[700px] space-y-7 shadow-xl rounded-xl p-2 m-5">
      <div className="flex m-10 flex-shrink-0">
        <div className="flex-row w-full mx-auto justify-center items-center">
          <h3 className="font-Rajdhani font-bold text-2xl">{props.name}</h3>
          <img
            className="object-contain rounded-md h-[500px] w-full"
            src={props.image}
            alt=""
          />
          <h4 className="font-Rajdhani font-medium max-w-lg">
            {props.description}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
