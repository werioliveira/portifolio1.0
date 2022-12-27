import React from "react";




function ProjectPage({ props }) {
  return (
    <div className="min-w-full min-h-screen bg-slate-100 overflow-hidden flex md:text-left md:flex-row dark:bg-neutral-800">
      <div className="w-screen">
        <div className="text-center p-10 flex flex-col justify-center items-center md:text-left">
          <h1 className="text-4xl font-Rajdhani font-bold uppercase tracking-[15px]">
            PROJECT NAME
          </h1>
          <div className="flex items-center w-full h-auto space-y-7 mx-10 shadow-lg flex-col rounded-lg">
            <div className="flex flex-row items-center">
              <img
                className="w-[400px] h-[600px]"
                src="https://i.imgur.com/vtIFDwG.png"
                alt=""
              />
              <div className="mx-10">
                <p className="font-Rajdhani tracking-wider text-xl">
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum. Contrary to popular belief, Lorem
                  Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000
                  years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum
                  et Malorum" (The Extremes of Good and Evil) by Cicero,
                </p>
              </div>
            </div>
            <div className="w-full flex items-stretch p-5 hidden">
              <button className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <p className="mx-3 font-Rajdhani text-lg font-bold"> Like </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
