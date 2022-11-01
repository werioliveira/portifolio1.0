import React from "react";

function Main() {
  return (
    <div className="">
      <div className="min-w-full min-h-screen bg-slate-100 overflow-hidden flex dark:bg-neutral-800">
        <div className="md:flex px-20 py-10 md:space-x-5 md:mt-28">
          <div className="flex min-w-fit h-96 justify-center md:w-[600px]">
            <img
              className="rounded-md shadow-xl object-contain md:w-[400px]"
              src="./aiimg.png"
            />
          </div>

          <div className="mt-10 md:flex md:flex-col">
            <h2 className="text-4xl font-Rajdhani font-bold">Hi There!</h2>
            <p className="text-lg text-gray-700 mt-5 tracking-wider font-Rajdhani md:text-2xl dark:text-white">
              I'm Weri Oliveira an Web Developer, i want some job to start my
              carrer I really want insert myself on job market, i develop in
              javascript NodeJS and ReactJS, my github and linkedin was on
              contact session, i really apreciate if you want enter in contact
            </p>
            <div className="pt-5">
              <h3 className="leading-8 tracking-wide text-lg text-gray-700 font-medium font-Rajdhani dark:text-white">
                Age: 24
              </h3>
              <h3 className="racking-wide text-lg text-gray-700 font-medium font-Rajdhani dark:text-white">
                Formation: Analyze and Development of Sistems at IFBA
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
